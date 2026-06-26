// Incoming line item from the API consumer
export interface SalesOrderItemInput {
  salesOrderItem: string;
  material: string;
  requestedQuantity: string;
  requestedQuantityUnit: string;
}

// Incoming sales order from the API consumer (our CAP action payload)
export interface SalesOrderInput {
  salesOrderType: string;
  salesOrganization: string;
  distributionChannel: string;
  organizationDivision: string;
  salesDistrict: string;
  soldToParty: string;
  salesOrderDate: string;
  items: SalesOrderItemInput[];
}

// Slim line-item view returned inside each order
export interface SalesOrderItemView {
  salesOrderItem: string;
  material: string;
  requestedQuantity: string;
  requestedQuantityUnit: string;
}

// Slim view we return to the consumer (header + its items)
export interface SalesOrderView {
  salesOrder: string;
  salesOrderType: string;
  soldToParty: string;
  salesOrganization: string;
  items: SalesOrderItemView[];
}

// Which OData protocol a given config speaks
export type ODataVersion = 'v2' | 'v4';

export interface S4Config {
  url: string;
  username: string;
  password: string;
  odataVersion: ODataVersion;
}