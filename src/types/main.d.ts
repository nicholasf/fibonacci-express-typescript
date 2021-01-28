export interface FibonacciResource {
    readonly position: number;
    readonly number: number;
}

export interface HTTPError extends Error {
    readonly status: number;
}
