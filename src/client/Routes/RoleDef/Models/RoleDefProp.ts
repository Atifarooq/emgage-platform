import { RequestStateEnum } from 'Types/Domain';
import { IRoleDef } from './RoleDef';
import { RolePayload } from './RolePayload';

export interface RoleDefState {
    roles: IRoleDef[];
    loadingState: RequestStateEnum;
    payload?: RolePayload;
}

export interface RoleDefDispatch {
    loadData: Function
}

