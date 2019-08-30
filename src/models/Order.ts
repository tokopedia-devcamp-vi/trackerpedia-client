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

  static dummy: Order[] = [
    new Order(123, Item.dummy[0], "Address 1", OrderStatus.PENDING, new Date()),
    new Order(124, Item.dummy[1], "Address 2", OrderStatus.PENDING, new Date()),
    new Order(125, Item.dummy[2], "Address 3", OrderStatus.PENDING, new Date()),
    new Order(126, Item.dummy[3], "Address 4", OrderStatus.PENDING, new Date()),
    new Order(127, Item.dummy[4], "Address 5", OrderStatus.SENT, new Date()),
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.dummy)
      }, 1000);
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