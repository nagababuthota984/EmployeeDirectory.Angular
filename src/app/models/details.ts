export class Details<T>{
    displayName: string;
    type: T;
    count: number;
    constructor(displayName: string, type: T, count: number) {
        this.displayName = displayName;
        this.type = type;
        this.count = count;
    }
}