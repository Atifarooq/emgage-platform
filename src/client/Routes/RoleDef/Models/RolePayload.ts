import { QueryTypeEnum, QueryKeyEnum } from "Types/Domain";

export interface RolePayload {
    from: Number,
    size: Number,
    query: Query[]
}

export interface Query {
    type: QueryTypeEnum,
    key: QueryKeyEnum,
    modelfield: string,
    value: string | Array<string> | any,
    options?: any
}