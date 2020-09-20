import { Action } from 'redux';
import { RequestStateEnum } from 'Types/Domain';
import { IRoleDef } from './RoleDef';
import { IRolePayload } from './RolePayload';

export enum RolesActionEnum {
    ROLES_FETCH = 'ROLES_FETCH',
    ROLES_FETCH_SUCCESS = 'ROLES_FETCH_SUCCESS',
    ROLES_FETCH_ERROR = 'ROLES_FETCH_ERROR',
    ROLE_PAYLOAD_CHANGE = 'ROLE_PAYLOAD_CHANGE'
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

export interface IActionRolePayloadChange extends Action {
    type: RolesActionEnum.ROLE_PAYLOAD_CHANGE,
    payload: IRolePayload
}
