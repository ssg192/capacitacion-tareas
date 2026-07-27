export class Car {
    private brand: string;
    private model: string;
    private year: number;

    constructor(brand: string, model: string, year: number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getBrand(): string {
        return this.brand;
    }

    setBrand(brand: string): void {
        this.brand = brand;
    }

    getModel(): string {
        return this.model;
    }

    setModel(model: string): void {
        this.model = model;
    }

    getYear(): number {
        return this.year;
    }

    setYear(year: number): void {
        this.year = year;
    }
}


export abstract class AbstractCar {
    abstract getBrand(): string;
    abstract setBrand(brand: string): void;
}


export class BYD implements AbstractCar {
    private brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    getBrand(): string {
        return this.brand;
    }

    setBrand(brand: string): void {
        this.brand = brand;
    }
}