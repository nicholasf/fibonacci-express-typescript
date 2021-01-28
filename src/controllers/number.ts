import { Request, Response, NextFunction } from 'express';
import fibonacci from '../lib/fibonacci';

const controller = (req: Request, res: Response, next: NextFunction) => {
    const param = req.params['position'];
    const position = parseInt(param);

    if (position >= 0) {
        res.locals.number = fibonacci(position);
        res.locals.position = position;
        next();
    } else {
        next({
            message: 'Please submit a positive number signifying a postition in the Fibonacci sequence.',
            name: 'ValidatonError',
            status: 400,
        });
    }
};

export default controller;
