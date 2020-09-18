import { ActionCreator } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import { RolesActionEnum } from "./constant";
import { IActionRolesFetch, IActionRolesFetchError, IActionRolesFetchSuccess, IRolesListState } from '../Models/RoleAction';
import roleService from "../../../Services/role.service";

// Action Creators
export const fetchRoles: ActionCreator<ThunkAction<
  // The type of the last action to be dispatched - will always be promise<T> for async actions
  Promise<IActionRolesFetchSuccess>,
  // The type for the data within the last action
  any,
  // The type of the parameter for the nested function
  IRolesListState,
  // The type of the last action to be dispatched
  IActionRolesFetchSuccess
>> = (payload?: IRolesListState) => {
  return async (dispatch: any) => {

    const rolesFetchAction: IActionRolesFetch = {
      type: RolesActionEnum.ROLES_FETCH,
    };

    dispatch(rolesFetchAction);

    try {

      const roles = await roleService.fetchRoles();

      const rolesFetchSuccessAction: IActionRolesFetchSuccess = {
        type: RolesActionEnum.ROLES_FETCH_SUCCESS,
        roles: roles.hits.hits.map(role => role._source),
      };

      return dispatch(rolesFetchSuccessAction);
    } catch (error) {

      const rolesFetchErrorAction: IActionRolesFetchError = {
        type: RolesActionEnum.ROLES_FETCH_ERROR,
        errorMessage: error.message,
      };

      return dispatch(rolesFetchErrorAction);
    }
  };
};