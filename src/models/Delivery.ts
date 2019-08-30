import { Order } from "models";
import Item from "./Item";
import { OrderStatus } from "./Order";

class Delivery {
  order: Order;
  cities: {city: string, time: Date}[];

  constructor(order: Order, cities: {city: string, time: Date}[]) {
    this.order = order;
    this.cities = cities;
  }

  static getActive(): Promise<Delivery | null | undefined> {
    return new Promise((resolve, reject) => {
      const order = new Order(123, Item.dummy[0], "A very long address; an abnormally long address", OrderStatus.PENDING, new Date());
      const delivery = new Delivery(order, [
        {city: "Jepara", time: new Date()},
        {city: "Demak", time: new Date()},
        {city: "Semarang", time: new Date()},
        {city: "Depok", time: new Date()},
        {city: "Jakarta", time: new Date()},
      ]);
      setTimeout(() => {
        resolve(delivery);
      }, 1000);
    });
  }

  static getById(id: string): Promise<Delivery | null | undefined> {
    return new Promise((resolve, reject) => {
      const order = new Order(parseInt(id), Item.dummy[0], "A very long address; an abnormally long address", OrderStatus.SENT, new Date());
      const delivery = new Delivery(order, [
        {city: "Jepara", time: new Date()},
        {city: "Demak", time: new Date()},
        {city: "Semarang", time: new Date()},
        {city: "Depok", time: new Date()},
        {city: "Jakarta", time: new Date()},
      ]);
      setTimeout(() => {
        resolve(delivery);
      }, 1000);
    })
  }
}

export default Delivery;