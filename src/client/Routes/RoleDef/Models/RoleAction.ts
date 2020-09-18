import { Action } from 'redux';
import { IRoleDef } from '../Models/RoleDef';
import { RolesActionEnum, RequestStateEnum } from "../Package/constant";

export interface IActionRolesFetch extends Action {
    type: RolesActionEnum.ROLES_FETCH
}

export interface IActionRolesFetchSuccess extends Action {
    type: RolesActionEnum.ROLES_FETCH_SUCCESS,
    roles: IRoleDef[]
}

export interface IActionRolesFetchError extends Action {
    type: RolesActionEnum.ROLES_FETCH_ERROR,
    errorMessage: string
}

export interface IRolesListState {
    state: RequestStateEnum, // 'INIT', 'LOADING' | 'LOADED' | 'ERROR',
    roles: IRoleDef[],
    errorMessage?: string
}
