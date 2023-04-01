abstract class Vehicle {
  constructor(
    private make: string,
    private model: string,
    private year: number,
    private rented: boolean = false
  ) {}

  get Make(): string {
    return this.make;
  }

  get Model(): string {
    return this.model;
  }

  get Year(): number {
    return this.year;
  }

  isRented(): boolean {
    return this.rented;
  }

  setRented(rented: boolean): void {
    this.rented = rented;
  }

  abstract rentalRate(): number;

  rent(): string {
    if (this.rented) {
      return "This vehicle is already rented.";
    } else {
      this.rented = true;
      return "This vehicle has been rented.";
    }
  }

  returnVehicle(): string {
    if (this.rented) {
      this.rented = false;
      return "This vehicle has been returned.";
    } else {
      return "This vehicle has not been rented yet.";
    }
  }
}

class Car extends Vehicle {
  private numSeats: number;
  private numDoors: number;
  private trunkCapacity: number;

  constructor(
    make: string,
    model: string,
    year: number,
    numSeats: number,
    numDoors: number,
    trunkCapacity: number,
    rented: boolean = false
  ) {
    super(make, model, year, rented);
    this.numSeats = numSeats;
    this.numDoors = numDoors;
    this.trunkCapacity = trunkCapacity;
  }

  rentalRate(): number {
    return 50;
  }

  get NumSeats(): number {
    return this.numSeats;
  }

  get NumDoors(): number {
    return this.numDoors;
  }

  get TrunkCapacity(): number {
    return this.trunkCapacity;
  }
}

class Truck extends Vehicle {
  private payloadCapacity: number;
  private numAxles: number;

  constructor(
    make: string,
    model: string,
    year: number,
    payloadCapacity: number,
    numAxles: number,
    rented: boolean = false
  ) {
    super(make, model, year, rented);
    this.payloadCapacity = payloadCapacity;
    this.numAxles = numAxles;
  }

  rentalRate(): number {
    return 100;
  }

  get PayloadCapacity(): number {
    return this.payloadCapacity;
  }

  get NumAxles(): number {
    return this.numAxles;
  }
}

class Motorcycle extends Vehicle {
  private engineSize: number;
  private hasHelmet: boolean;

  constructor(
    make: string,
    model: string,
    year: number,
    engineSize: number,
    hasHelmet: boolean,
    rented: boolean = false
  ) {
    super(make, model, year, rented);
    this.engineSize = engineSize;
    this.hasHelmet = hasHelmet;
  }

  rentalRate(): number {
    return 25;
  }

  get EngineSize(): number {
    return this.engineSize;
  }

  hasHelmetIncluded(): boolean {
    return this.hasHelmet;
  }
}

// Create a Car instance
const car = new Car("Honda", "Civic", 2022, 4, 4, 12);
console.log(car.rent()); // "This vehicle has been rented."
console.log(car.rent()); // "This vehicle is already rented."
console.log(car.returnVehicle()); // "This vehicle has been returned."
console.log(car.returnVehicle()); // "This vehicle has not been rented yet."

// Create a truck instance
const truck = new Truck("Ford", "F-150", 2019, 2, 2);
console.log(truck.rent());
console.log(truck.rent());
console.log(truck.returnVehicle());
console.log(truck.returnVehicle());

// Create a motorcycle instance
const motorcycle = new Motorcycle(
  "Harley-Davidson",
  "Sportster",
  2021,
  1,
  false
);
console.log(motorcycle.rent());
console.log(motorcycle.rent());
console.log(motorcycle.returnVehicle());
console.log(motorcycle.returnVehicle());
