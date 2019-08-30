import Item from './Item';

class Order {
  constructor(id: number, item: Item, status: string, timestamp: Date) {

  }

  static getAll(): Promise<Order[]> {
    return new Promise((resolve, reject) => {
      // resolve
    })
  }

  static getActive(): Promise<Order> {
    return new Promise((resolve, reject) => {

    })
  }
}

export default Order;