import { makeAutoObservable } from "mobx";

import { ORDER_QUERY } from './queries';
import { SingleOrder } from "~/screens/Orders/Show/types";
import client from '../../../api/gql';

export default class OrdersShowStore {
  order: SingleOrder | null = null;
  id: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setOrder(order: SingleOrder) {
    this.order = order;
  }

  async loadOrder(id: string) {
    const request = await client.query(ORDER_QUERY, { number: id }).toPromise();
    this.setOrder(request.data.order);
  }
}
