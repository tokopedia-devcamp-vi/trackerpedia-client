import Item from './Item';

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

  constructor(id: number, item: Item, destination: string, status: OrderStatus, timestamp: Date) {
    this.id = id;
    this.item = item;
    this.destination = destination;
    this.status = status;
    this.timestamp = timestamp;
  }

  static getAll(): Promise<Order[]> {
    return new Promise((resolve, reject) => {
      // resolve
    });
  }

  static getActive(): Promise<Order | undefined | null> {
    return new Promise((resolve, reject) => {

    });
  }
  
  static async getById(id: string): Promise<Order | undefined | null> {
    return new Promise(async (resolve, reject) => {
      const order = new Order(
        parseInt(id), Item.dummy[0], "A very long address; an abnormally long address", OrderStatus.PENDING, new Date());
      setTimeout(() => {
        resolve(id === "123" ? order : null);
      }, 1000);
      // try {
      //   const res = await axios.get(`${url}/order/${id}`);
      //   console.log(res.data);
      // } catch (e) {
      //   reject(e);
      // }
    });
  }
}

export default Order;