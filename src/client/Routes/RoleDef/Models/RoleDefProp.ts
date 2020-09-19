import { RequestStateEnum } from 'Types/Domain';
import { IRoleDef } from './RoleDef';

export interface RoleDefState {
    roles: IRoleDef[],
    loadingState: RequestStateEnum
}

export interface RoleDefDispatch {
    loadData: Function
}

// export interface RoleDefProp extends RoleDefState, RoleDefDispatch {
// }

