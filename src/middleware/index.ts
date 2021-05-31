import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';

export const applyCorsMiddleware = (app: express.Router) => {
    app.use(cors());
};
export const applyRulesAPIMiddleware = (app: express.Router) => {
    app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
        res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });
    
};

export const applyParseBodyMiddleware = (app: express.Router) => {
    app.use(function (req: express.Request, res: express.Response, next: express.NextFunction) {
        app.use(express.urlencoded({ extended: true }));
        next();
    });
};

export const applyErrorHandlingMiddleware = (app: express.Router) => {
    app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
        const error = new Error('Not found');
        res.status(404).json({
            message: error.message,
            name: error.name,
            stack: error.stack
        });
    });
};
