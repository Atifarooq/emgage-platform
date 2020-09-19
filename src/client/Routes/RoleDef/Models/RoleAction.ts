import { Action } from 'redux';
import { RequestStateEnum } from 'Types/Domain';
import { IRoleDef } from '../Models/RoleDef';

export enum RolesActionEnum {
    ROLES_FETCH = 'ROLES_FETCH',
    ROLES_FETCH_SUCCESS = 'ROLES_FETCH_SUCCESS',
    ROLES_FETCH_ERROR = 'ROLES_FETCH_ERROR'
}

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
