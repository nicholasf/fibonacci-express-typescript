import { Request, Response, NextFunction } from "express";
import fibonacci from "../lib/fibonacci";
import { FibonacciResource } from "Main";

const controller = (req: Request, res: Response, next: NextFunction) => {
    const param = req.params['index'];
    const index = parseInt(param);

    if (index) {
        const fibResponse: FibonacciResource =  { 
            index: index,
            value: fibonacci(index) 
        };

        res.json(fibResponse);
    } else {
        res.type('application/json');

        // rely on the default error handler in Express. See https://expressjs.com/en/guide/error-handling.html
        next({ 
            status: 400, 
            message: 'Please submit a number signifying a postition in the Fibonacci sequence.',
            name: "BadR equest"
        }); 
    }
}

export default controller;
