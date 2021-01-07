import { fibonacci } from "../../src/lib/fibonacci";
import { expect } from "chai";

type FibNumber = [number, number];

const fibNumbers: FibNumber[] = [
    [0, 0],
    [1, 1],
    [2, 1],
    [3, 2],
    [4, 3],
    [5, 5],
    [6, 8],
    [7, 13],
    [8, 21],
    [9, 34],
    [23, 28657]
]

describe('Fibonacci numbers by position', () => {
    const tester = (fibTuple: FibNumber) => {
        it(`matches the ${ fibTuple[0] } position to the value ${ fibTuple[1]}`, () => {
            expect(fibonacci(fibTuple[0])).to.equal(fibTuple[1]);
        })
    };

    fibNumbers.forEach(tester);
})
