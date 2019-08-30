import Axios from "axios";
import { Order } from "models";
import { url } from "utils/config";

class Delivery {
  order: Order;
  cities: { city: string, time: Date, next?: boolean }[];

  constructor(order: Order, cities: { city: string, time: Date }[]) {
    this.order = order;
    this.cities = cities;
  }

  static getActive(): Promise<Delivery | null | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        let res = await Axios.get(`${url}/order_sent`);
        if (!res.data) {
          resolve(null);
          return;
        }
        const orderId = res.data[0].idOrder;
        const order = await Order.getById(orderId);
        res = await Axios.get(`${url}/tracker/${orderId}`);
        const delivery = new Delivery(order!, res.data.map((city: any) => ({
          city: city.city,
          time: new Date(city.time),
          next: city.next,
        })));
        resolve(delivery);
      } catch (e) {
        reject(e);
      }
    });
  }

  static getById(id: string): Promise<Delivery | null | undefined> {
    return new Promise(async (resolve, reject) => {
      try {
        const order = await Order.getById(id);
        const res = await Axios.get(`${url}/tracker/${id}`);
        const delivery = new Delivery(order!, res.data.map((city: any) => ({
          city: city.city,
          time: new Date(city.time),
          next: city.next,
        })));
        resolve(delivery);
      } catch (e) {
        reject(e);
      }
    })
  }

  static updateById(id: number): Promise<boolean> {
    return new Promise(async(resolve, reject) => {
      try { 
        const res = await Axios.post(`${url}/tracker`, {
          idResi: id
        });
        resolve(true);
      } catch (e) {
        reject(e);
      }
    })
  }

  static createNew(id: number): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await Axios.post(`${url}/newDelivery`, {
          idResi: id,
        });
        console.log(res);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    })
  }
}

export default Delivery;