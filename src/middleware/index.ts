import cors from 'cors';
import express from 'express';

export const applyCorsMiddleware = (router: express.Router) => {
    router.use(cors());
};
export const applyRulesAPIMiddleware = (router: express.Router) => {
    router.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
};

export const applyParseBodyMiddleware = (router: express.Router) => {
    router.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        router.use(express.urlencoded({ extended: true }));
        router.use(express.json());
        next();
    });
};

export const applyErrorHandlingMiddleware = (router: express.Router) => {
    router.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        const error = new Error('Not found');
        res.status(404).json({
            message: error.message,
            name: error.name,
            stack: error.stack
        });
    });
};
