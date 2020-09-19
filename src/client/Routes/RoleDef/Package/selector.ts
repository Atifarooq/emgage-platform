import { RolePayload } from '../Models';
import { RolesState } from './Types';

export const RoleList = (state: RolesState) => state.rolesListReducer.roles;
export const LoadingRole = (state: RolesState) => state.rolesListReducer.state;
export const RoleDefaultPayload = (): RolePayload => {
    return {
        from: 0,
        size: 20,
        filter: [],
        query: []
    }
}
