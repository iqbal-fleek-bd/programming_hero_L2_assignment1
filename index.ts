// Problem 1: Format String
function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

// Problem 2: Filter by Rating
function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

// Problem 3: Concatenate Arrays
function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

// Problem 4: Vehicle & Car Classes
class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

// Problem 5: Process Value
function processValue(value: string | number): number {
  return typeof value === 'string' ? value.length : value * 2;
}

// Problem 6: Most Expensive Product
interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce((max, current) =>
    current.price > max.price ? current : max
  );
}

// Problem 7: Day Enum & Type Function
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}

// Problem 8: Async Square
async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      n < 0 ? reject(new Error("Negative number not allowed")) : resolve(n * n);
    }, 1000);
  });
}
