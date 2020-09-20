import { IRolePayload } from '../Models';
import { RolesState, RolesPayloadState } from './Types';

export const RoleList = (state: RolesState) => state.rolesListReducer.roles;
export const LoadingRole = (state: RolesState) => state.rolesListReducer.state;
export const RoleListPayload = (state: RolesPayloadState): IRolePayload => state.rolesListPayloadReducer.payload;
