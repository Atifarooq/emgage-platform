import { RolesState } from './Types';

export const RoleList = (state: RolesState) => state.rolesListReducer.roles;
export const LoadingRole = (state: RolesState) => state.rolesListReducer.state;
