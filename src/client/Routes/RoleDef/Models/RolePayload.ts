import { QueryTypeEnum, QueryKeyEnum } from "Types/Domain";

export interface RolePayload {
    from: Number,
    size: Number,
    filter: Filter[],
    query: Query[]
}

export interface Filter {
    type: QueryTypeEnum,
    key: QueryKeyEnum,
    modelfield: string,
    value: string | Array<string> | any,
}

export interface Query extends Filter {
    options?: any
}