import FibFn from "Fibonacci";

const fibonacci: FibFn = (n: number) => { 
    if (n < 2) {
        return n;
    }
    
    return fibonacci(n -1) + fibonacci(n - 2);
}

export default fibonacci;
