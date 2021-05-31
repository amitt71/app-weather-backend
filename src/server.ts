import Express from 'express';
import http from 'http';
import { applyCorsMiddleware, applyErrorHandlingMiddleware, applyParseBodyMiddleware, applyRulesAPIMiddleware } from './middleware';
import { routesMiddleware } from './middleware/routes';
import logging from './config/logging';
import {config} from './config/config';
const NAMESPACE = 'Server';

const app = Express();
app.use(Express.json());

applyParseBodyMiddleware(app);
applyCorsMiddleware(app);
applyRulesAPIMiddleware(app);
routesMiddleware(app);
applyErrorHandlingMiddleware(app);

const httpServer = http.createServer(app);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
