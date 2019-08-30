import Item from './Item';
import * as faker from 'faker';
import axios from 'axios';
import { url } from 'utils/config';

export enum OrderStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
}

class Order {
  id: number;
  item: Item;
  destination: string;
  status: OrderStatus;
  timestamp: Date;

  static dummy: Order[] = [
    new Order(123, Item.dummy[0], "Address 1", OrderStatus.PENDING, new Date()),
    new Order(124, Item.dummy[1], "Address 2", OrderStatus.PENDING, new Date()),
    new Order(125, Item.dummy[2], "Address 3", OrderStatus.PENDING, new Date()),
    new Order(126, Item.dummy[3], "Address 4", OrderStatus.PENDING, new Date()),
    new Order(127, Item.dummy[4], "Address 5", OrderStatus.PENDING, new Date()),
    new Order(128, Item.dummy[5], "Address 6", OrderStatus.DELIVERED, new Date()),
    new Order(129, Item.dummy[6], "Address 7", OrderStatus.DELIVERED, new Date()),
  ]

  constructor(id: number, item: Item, destination: string, status: OrderStatus, timestamp: Date) {
    this.id = id;
    this.item = item;
    this.destination = destination;
    this.status = status;
    this.timestamp = timestamp;
  }

  static getAll(): Promise<Order[]> {
    return new Promise(async (resolve, reject) => {
      const res = await axios.get(`${url}/allOrder`);
      console.log(res.data);
      if(!res.data || res.data === null || res.data.length === 0) {
        resolve([]);
        return;
      }
      const orders: Order[] = res.data.map((data: any) => {
        const item = new Item(-1, data.nameItem, -1, data.weight);
        const address = data.destinationAddress + ", " + data.destinationCity;
        return new Order(data.idOrder, item, address, data.status, new Date(data.time));
      });
      setTimeout(() => {
        resolve(orders)
      }, 1000);
    });
  }
  
  static async getById(id: string): Promise<Order | undefined | null> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${url}/order/${id}`);
        if (!res.data) {
          resolve(null);
        }

        const payload = res.data[0];
        const item = new Item(-1, payload.nameItem, -1, payload.weight);
        const address = payload.destinationAddress + ", " + payload.destinationCity;
        const order = new Order(
          payload.idOrder, item, address, payload.status, new Date(payload.time)
        );
        resolve(order);
      } catch (e) {
        reject(e);
      }
    });
  }

  static async placeNew(itemId: number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const payload = {
        idItem: itemId,
        address: faker.address.streetAddress(),
      }
      try {
        const res = await axios.post(`${url}/newOrder`, payload);
        console.log(res);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

  static async updateStatusById(id: number, status: OrderStatus): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const payload = {
        idOrder: id,
        status: status,
      }
      try {
        const res = await axios.post(`${url}/order`, payload);
        console.log(res);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  }

}

export default Order;