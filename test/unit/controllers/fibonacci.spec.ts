import { isMainThread } from "worker_threads";
import fibonacci from "../../../src/controllers/fibonacci";
import { Request, Response, NextFunction } from "express";
import { FibonacciResource } from "Main";
import { expect } from "chai";

let req: { params: { [index: string]: any } };

let res: { json: (obj: any) => void };

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
