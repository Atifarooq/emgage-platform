import { IActionRolesFetch, IActionRolesFetchSuccess, IActionRolesFetchError, IRolesListState } from "../Models/RoleAction";

export type RolesActions = IActionRolesFetch | IActionRolesFetchSuccess | IActionRolesFetchError;
export type RolesState = {
    readonly rolesListReducer: IRolesListState;
};