export interface ICommonEnumInterface {
  itemDescription?: string;
  itemID: number;
  itemName: string;
  itemURI?: string;
}

export enum AllowedEntityStatusColor {
  new = 1,
  draft = 2,
  archive = 3,
  delete = 4,
  published = 5,
  archived = 6,
  deleted = 7,
  working = 8,
  locked = 9
}

export enum ValueEntityStatusColor {
  info = 1,
  success = 5,
  attention = 3,
  warning = 4,
}

export enum QueryTypeEnum {
  filter = 'filter',
  query = 'query'
}

export enum QueryKeyEnum {
  term = 'term',
  multi_match = 'multi_match'
}

export interface IEntityObject {
  id: number;
  name: string;
  description?: string;
  type?: ICommonEnumInterface;
  uri?: string;
}

export interface ServerSort {
  field: string;
  order: string;
  callback(field: string, order: string, sortBy: string): void;
}

export enum RequestStateEnum {
  INIT = 'INIT',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
