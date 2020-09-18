import { combineReducers } from 'redux';
import { IRolesListState } from '../Models/RoleAction';
import { RequestStateEnum, RolesActionEnum } from './constant';
import { RolesActions } from './types';

const rolesDefultListState: IRolesListState = {
  state: RequestStateEnum.INIT,
  roles: []
}

export default combineReducers<IRolesListState>({
  rolesListReducer: (state: IRolesListState = rolesDefultListState, action: RolesActions): IRolesListState => {
    switch (action.type) {
      case RolesActionEnum.ROLES_FETCH:
        return { ...state, state: RequestStateEnum.LOADING };
      case RolesActionEnum.ROLES_FETCH_SUCCESS:
        return { ...state, roles: [...action.roles], state: RequestStateEnum.SUCCESS };
      case RolesActionEnum.ROLES_FETCH_ERROR:
        return { ...state, errorMessage: action.errorMessage, state: RequestStateEnum.ERROR };
      default:
        return { ...state, state: RequestStateEnum.INIT };
    }
  }
});
