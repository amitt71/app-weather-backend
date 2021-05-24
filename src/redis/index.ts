import redis from 'redis';
const { promisify } = require('util');
import { REDIS_PORT } from '../config/config';

const redisClient = redis.createClient(REDIS_PORT, 'localhost');

export const setAsync = promisify(redisClient.set).bind(redisClient);
export const getAsync = promisify(redisClient.get).bind(redisClient);

export default redisClient;
