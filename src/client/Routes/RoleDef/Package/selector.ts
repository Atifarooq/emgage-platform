import { RolesState } from './types';

export const RoleList = (state: RolesState) => state.rolesListReducer.roles;
