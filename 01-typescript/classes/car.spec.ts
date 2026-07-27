import { describe, beforeEach, it, expect } from "bun:test";
import { Car } from "./car";

describe("Car", () => {
    let car: Car;

    beforeEach(() => {
        car = new Car("BYD", "Versa", 2026);
    });

    it("should have a brand", () => {
        car.setBrand("BYD");
        expect(car.getBrand()).toBe("BYD");
    });
    it("should have a year", () => {
        expect(car.getYear()).toBe(2026);
    });
    it("should have a model", () => {
        car.setModel("Versa");
        expect(car.getModel()).toBe("Versa");
    });
    it("should have a year", () => {
        car.setYear(2027);
        expect(car.getYear()).toBe(2027);
    });
    it("should have a model", () => {
        car.setModel("BYD");
        expect(car.getModel()).toBe("BYD");
    });
});