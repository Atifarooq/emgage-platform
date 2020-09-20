import { combineReducers } from 'redux';
import { RequestStateEnum } from 'Types/Domain';
import { IRolesListState, IRolesListPayloadState, RolesActionEnum } from '../Models';
import { RolesActions } from './Types';

const rolesDefultListState: IRolesListState = {
  state: RequestStateEnum.INIT,
  roles: []
}

const rolesDefultPayloadState: IRolesListPayloadState = {
  payload: {
    from: 0,
    size: 20,
    filter: [],
    query: []
  }
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
  },
  rolesListPayloadReducer: (state: IRolesListPayloadState = rolesDefultPayloadState, action: RolesActions): IRolesListPayloadState => {
    switch (action.type) {
      case RolesActionEnum.ROLE_PAYLOAD_CHANGE:
        return { ...state, payload: { ...action.payload } };
      default:
        return state;
    }
  }
});
