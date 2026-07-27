export class Contador {
    private count: number;

     constructor(count: number) {
        this.count = count;
    }
    getCount(): number {
        return this.count;
    }

    incremental(): void {
        this.count++;
    }

    decremental(): void{
        this.count--;
    }
}