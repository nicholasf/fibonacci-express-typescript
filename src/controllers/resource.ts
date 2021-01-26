import { Request, Response, NextFunction } from "express";
import { FibonacciResource } from "Main";

const controller = (req: Request, res: Response, next: NextFunction) => {
    const position = res.locals.position;
    const number = res.locals.number;

    if (!position || !number) {
        return next({
            message: "Either the index or value is missing. This is an internal error.",
            name: "ConfigError",
            status: 500
        })
    }

    const fibResponse: FibonacciResource =  { 
        position: position,
        number: number
    };

    res.json(fibResponse);
}

export default controller;


