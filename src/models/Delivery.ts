class Delivery {
  id: number;
  cities: string[];
  current: number;

  constructor(id: number, cities: string[], current: number) {
    this.id = id;
    this.cities = cities;
    this.current = current;
  }

  static getActive(): Promise<Delivery | null | undefined> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
  }
}

export default Delivery;