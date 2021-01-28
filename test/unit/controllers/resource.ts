import resource from "../../../src/controllers/resource";
import { Request, Response, NextFunction } from "express";
import { FibonacciResource, HTTPError } from "Main";
import { expect } from "chai";

let req: { 
    params: { 
        [index: string]: any 
    } 
};

let res: { 
    locals: {
        [indedx: string]: number
    },
    json?: (obj: any) => void, 
    type?: (contentType: string) => void,
};

describe('Returning a JSON resoure repreenting the Fibonacci number', () => {
    it('returns a json FibonacciResource', (done) => {
        res = {
            locals: {
                position: 5,
                number: 5
            },
            json: (obj: any) => {
                expect((obj as FibonacciResource).position).to.equal(5);
                expect((obj as FibonacciResource).number).to.equal(5);
                return done();  
            },
            type: () => {}
        }

        resource(req as Request, res as Response, (() => {}) as NextFunction);
    })
});

describe('Error handling', () => {
    it('validates that position and number properties are present in res.localsand calls the errback if not', (done) => {
        res = {
            locals: {},
            json: (obj: any) => {},
            type: () => {}
        }

        // NextFunction is overloaded with either an Error or a string (indicating a router to jump to). We only care about the err condition here.
        let nextFunc: NextFunction = 
            (err: (Error | string)) => {
                expect((err as Error).message).to.equal('Either the index or value is missing. This is an internal error.')
                expect((err as HTTPError).status).to.equal(500);
                return done();
            };
    
            resource(req as Request, res as Response, nextFunc);
    });
});
