import Express from 'express';
import http from 'http';
import { applyCorsMiddleware, applyErrorHandlingMiddleware, applyParseBodyMiddleware, applyRulesAPIMiddleware } from './middleware';
import { routesMiddleware } from './middleware/routes';
import logging from './config/logging';
import config from './config/config';
const NAMESPACE = 'Server';

const router = Express();

applyCorsMiddleware(router);
applyParseBodyMiddleware(router);
applyRulesAPIMiddleware(router);
routesMiddleware(router);
applyErrorHandlingMiddleware(router);

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
