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
    return new Promise<Item[]>((resolve, reject) => {
      setTimeout(() => resolve(Item.dummy), 1000);
    })
  }
}

export default Item;