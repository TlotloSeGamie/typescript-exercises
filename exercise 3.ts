function add(a: number, b:number): number {
    return a + b;
}

function getFixedNumber(): number {
    return 20;
}

function transformString(input: string, toUpperCase?: boolean): string {
    if (toUpperCase) {
        return input.toUpperCase();
    }
    return input.toLowerCase();
    
}