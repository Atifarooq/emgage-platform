import { ActionCreator } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import {
  IActionRolesFetch,
  IActionRolesFetchError,
  IActionRolesFetchSuccess,
  IRolesListState, 
  RolesActionEnum
} from '../Models';
import roleService from "../../../Services/role.service";

// Action Creators
export const fetchRoles: ActionCreator<ThunkAction<
  Promise<IActionRolesFetchSuccess>,
  any,
  IRolesListState,
  IActionRolesFetchSuccess
>> = (payload?: any) => {
  return async (dispatch: any) => {
   
    const rolesFetchAction: IActionRolesFetch = {
      type: RolesActionEnum.ROLES_FETCH,
    };

    dispatch(rolesFetchAction);

    try {

      const roles = await roleService.fetchRoles(payload);

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