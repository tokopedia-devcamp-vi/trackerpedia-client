import Axios from "axios";
import { url } from "utils/config";

class Item {
  id: number;
  name: string;
  price: number;
  weight: number;

  static dummy: Item[] = [
    new Item(1, "Item A", 100000, 30),
    new Item(2, "Item B", 200000, 30),
    new Item(3, "Item C", 300000, 30),
    new Item(4, "Item D", 400000, 30),
    new Item(5, "Item E", 500000, 30),
    new Item(1, "Item A", 100000, 30),
    new Item(2, "Item B", 200000, 30),
    new Item(3, "Item C", 300000, 30),
    new Item(4, "Item D", 400000, 30),
    new Item(5, "Item E", 500000, 30),
    new Item(1, "Item A", 100000, 30),
    new Item(2, "Item B", 200000, 30),
    new Item(3, "Item C", 300000, 30),
    new Item(4, "Item D", 400000, 30),
    new Item(5, "Item E", 500000, 30),
    new Item(1, "Item A", 100000, 30),
    new Item(2, "Item B", 200000, 30),
    new Item(3, "Item C", 300000, 30),
    new Item(4, "Item D", 400000, 30),
    new Item(5, "Item E", 500000, 30),
  ]

  constructor(id: number, name: string, price: number, weight: number) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.weight = weight;
  }

  static getAll(): Promise<Item[]> {
    return new Promise<Item[]>(async (resolve, reject) => {
      try {
        const res = await Axios.get(`${url}/allItem`);
        if (res.data) {
          const items = res.data.map((item: any) => {
            return new Item(item.IDItem, item.nameItem, item.price, item.weight);
          });
          resolve(items);
        }
      } catch (e) {
        reject(e);
      }
    })
  }
}

export default Item;