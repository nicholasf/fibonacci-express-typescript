import { isMainThread } from "worker_threads";
import fibonacci from "../../../src/controllers/fibonacci";
import { Request, Response, NextFunction } from "express";
import { FibonacciResource } from "Main";
import { expect } from "chai";

let req: { 
    params: { 
        [index: string]: any 
    } 
};

let res: { 
    json?: (obj: any) => void, 
    type?: (contentType: string) => void,
};

describe('Parsing an integer and calling lib/fibonacci', () => {
    it('returns json with the corresponding value', (done) => {
        req = { 
            params: {
                index: "5"
            } 
        };

        res = {
            json: (obj: any) => {
                expect((obj as FibonacciResource).index).to.equal(5);
                done();  
            }
        }

        fibonacci(req as Request, res as Response, (() => {}) as NextFunction);
    })
});

describe('Error handling', () => {
    it('validates that the index can be converted to an integer', (done) => {
        req = { 
            params: {
                index: "hello"
            } 
        };

        res.type = () => {};

        // NextFunction is overloaded with either an Error or a string (indicating a router to jump to). We only care about the err condition here.
        let nextFunc: NextFunction = 
            (err: (Error | string)) => {
                expect((err as Error).message).to.equal('Please submit a number signifying a postition in the Fibonacci sequence.' )
                done();
            };
    
        fibonacci(req as Request, res as Response, nextFunc);
    });
});
