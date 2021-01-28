import number from "../../../src/controllers/number";
import { Request, Response, NextFunction } from "express";
import { HTTPError } from "Main";
import { expect } from "chai";

let req: { 
    params: { 
        [index: string]: any 
    } 
};

let res: { 
    locals: { [index: string]: number },
};

describe('Parsing an integer and calling lib/fibonacci', () => {
    it('sets res.locals with an index and number', (done) => {
        req = { 
            params: {
                position: "5"
            } 
        };

        res = {
            locals: {},
        }

        number(req as Request, res as Response, () => {
            expect(res.locals['position']).to.equal(5);
            expect(res.locals['number']).to.equal(5);
            done();  
        });
    })
});

describe('Error handling', () => {
    it('validates that the index can be converted to an integer', (done) => {
        req = { 
            params: {
                position: "hello"
            } 
        };

        // NextFunction is overloaded with either an Error or a string (indicating a router to jump to). We only care about the err condition here.
        let nextFunc: NextFunction = 
            (err: (Error | string)) => {
                expect((err as Error).message).to.equal('Please submit a positive number signifying a postition in the Fibonacci sequence.' )
                expect((err as HTTPError).status).to.equal(400)
                done();
            };
    
        number(req as Request, res as Response, nextFunc);
    });
});
