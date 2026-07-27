import { describe, beforeEach, it, expect } from "bun:test";
import { Contador } from './contador';

describe('Contador', () => {
    let contador: Contador;

    beforeEach(() => {
        contador = new Contador(0);
    });

    it('should start with zero', () => {
        expect(contador.getCount()).toBe(0);
    });

    it('should increment count', () => {
        contador.incremental();
        expect(contador.getCount()).toBe(1);
    });

    it('should increment multiple times', () => {
        contador.incremental();
        contador.incremental();
        contador.incremental();
        expect(contador.getCount()).toBe(3);
    });

    it('should drecremental count', () => {
        contador.incremental();
        contador.decremental();
        expect(contador.getCount()).toBe(0);
    })
});