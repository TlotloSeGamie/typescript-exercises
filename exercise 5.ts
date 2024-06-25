add(a: number, b: number): number {
    this.validateInputs(a, b);
    return a + b;
}

subtract(a: Number, b: Number): number {
    this.validateInputs(a, b);
    return a - b;
}

multiply(a: number, b: number): number {
    this.validateInputs(a, b);
    return a * b;
}

divide(a: number, b: number): number {
    this.validateInputs(a, b);
    if (b === 0) {
        throw new Error("Division by zero is not allowed");
    }
    return a / b;
}


private validateInputs(...inputs: number[]): void {
    inputs.forEach(input => {
        if (typeof input !== 'number') {
            throw new Error("Invalid input: All inputs must be numbers");
        }
    });
}
