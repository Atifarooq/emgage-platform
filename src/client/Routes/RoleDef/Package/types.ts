import { IActionRolesFetch, IActionRolesFetchSuccess, IActionRolesFetchError, IRolesListState } from "../Models/RoleAction";
import { RoleDefState, RoleDefDispatch } from "../Models/RoleDefProp";

export type RolesActions = IActionRolesFetch | IActionRolesFetchSuccess | IActionRolesFetchError;
export type RolesState = {
    readonly rolesListReducer: IRolesListState;
};
export type RoleDefProp = RoleDefState & RoleDefDispatch;