import {
    IActionRolesFetch,
    IActionRolesFetchSuccess,
    IActionRolesFetchError,
    IActionRolePayloadChange,
    IRolesListState,
    IRolesListPayloadState,
    RoleDefState,
    RoleDefDispatch
} from "../Models";

export type RolesActions = IActionRolesFetch | IActionRolesFetchSuccess | IActionRolesFetchError | IActionRolePayloadChange;
export type RolesState = {
    readonly rolesListReducer: IRolesListState;
};
export type RolesPayloadState = {
    readonly rolesListPayloadReducer: IRolesListPayloadState;
};
export type RoleDefProp = RoleDefState & RoleDefDispatch;