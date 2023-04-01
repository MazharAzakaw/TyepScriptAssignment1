var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(make, model, year, rented) {
        if (rented === void 0) { rented = false; }
        this.make = make;
        this.model = model;
        this.year = year;
        this.rented = rented;
    }
    Object.defineProperty(Vehicle.prototype, "Make", {
        get: function () {
            return this.make;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Model", {
        get: function () {
            return this.model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vehicle.prototype, "Year", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    Vehicle.prototype.isRented = function () {
        return this.rented;
    };
    Vehicle.prototype.setRented = function (rented) {
        this.rented = rented;
    };
    Vehicle.prototype.rent = function () {
        if (this.rented) {
            return "This vehicle is already rented.";
        }
        else {
            this.rented = true;
            return "This vehicle has been rented.";
        }
    };
    Vehicle.prototype.returnVehicle = function () {
        if (this.rented) {
            this.rented = false;
            return "This vehicle has been returned.";
        }
        else {
            return "This vehicle has not been rented yet.";
        }
    };
    return Vehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(make, model, year, numSeats, numDoors, trunkCapacity, rented) {
        if (rented === void 0) { rented = false; }
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.numSeats = numSeats;
        _this.numDoors = numDoors;
        _this.trunkCapacity = trunkCapacity;
        return _this;
    }
    Car.prototype.rentalRate = function () {
        return 50;
    };
    Object.defineProperty(Car.prototype, "NumSeats", {
        get: function () {
            return this.numSeats;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "NumDoors", {
        get: function () {
            return this.numDoors;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Car.prototype, "TrunkCapacity", {
        get: function () {
            return this.trunkCapacity;
        },
        enumerable: false,
        configurable: true
    });
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(make, model, year, payloadCapacity, numAxles, rented) {
        if (rented === void 0) { rented = false; }
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.payloadCapacity = payloadCapacity;
        _this.numAxles = numAxles;
        return _this;
    }
    Truck.prototype.rentalRate = function () {
        return 100;
    };
    Object.defineProperty(Truck.prototype, "PayloadCapacity", {
        get: function () {
            return this.payloadCapacity;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Truck.prototype, "NumAxles", {
        get: function () {
            return this.numAxles;
        },
        enumerable: false,
        configurable: true
    });
    return Truck;
}(Vehicle));
var Motorcycle = /** @class */ (function (_super) {
    __extends(Motorcycle, _super);
    function Motorcycle(make, model, year, engineSize, hasHelmet, rented) {
        if (rented === void 0) { rented = false; }
        var _this = _super.call(this, make, model, year, rented) || this;
        _this.engineSize = engineSize;
        _this.hasHelmet = hasHelmet;
        return _this;
    }
    Motorcycle.prototype.rentalRate = function () {
        return 25;
    };
    Object.defineProperty(Motorcycle.prototype, "EngineSize", {
        get: function () {
            return this.engineSize;
        },
        enumerable: false,
        configurable: true
    });
    Motorcycle.prototype.hasHelmetIncluded = function () {
        return this.hasHelmet;
    };
    return Motorcycle;
}(Vehicle));
var car = new Car("Honda", "Civic", 2022, 4, 4, 12);
console.log(car.rent()); // "This vehicle has been rented."
console.log(car.rent()); // "This vehicle is already rented."
console.log(car.returnVehicle()); // "This vehicle has been returned."
console.log(car.returnVehicle()); // "This vehicle has not been rented yet."
// Create a truck instance
var truck = new Truck('Ford', 'F-150', 2019, 2, 2);
console.log(truck.rent());
console.log(truck.rent());
console.log(truck.returnVehicle());
console.log(truck.returnVehicle());
// Create a motorcycle instance
var motorcycle = new Motorcycle('Harley-Davidson', 'Sportster', 2021, 1, false);
console.log(motorcycle.rent());
console.log(motorcycle.rent());
console.log(motorcycle.returnVehicle());
console.log(motorcycle.returnVehicle());
