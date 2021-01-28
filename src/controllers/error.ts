import { Request, Response, NextFunction } from 'express';
import { HTTPError } from 'Main';

const controller = (err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status((err as HTTPError).status);
    res.json({ error: err });
};

export default controller;
