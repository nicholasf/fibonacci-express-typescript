import { Fn } from "Fibonacci";

const fibonacci: Fn = (n: number) => { 
    if (n < 2) {
        return n;
    }
    
    return fibonacci(n -1) + fibonacci(n - 2);
}

export { fibonacci };
