export interface PoHeaders {
  ponumber: number;
  orderNumber: number;
  orderDate: Date;
  eta: Date;
  lastUpdatedDate: Date;
  orderId: number;
}

export interface PoItems {
  orderItemId: number;
  orderId: number;
  partNo: string;
  qtyOrder: number;
  qtyAvailable: number;
  partDescription: string;
  itemStatus: string;
  lastUpdatedDate: Date;
}

export interface PoItemDetails {
  orderItemDetailId: number;
  orderItemId: number;
  branch: string;
  qtyAvailable: number;
  itemDetailStatus: string;
  etadate: Date;
  lastUpdatedDate: Date;
}

export interface PoMessage {
  item: number,
  itemDetail: number
}
