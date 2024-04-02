"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
// import {redis} from "ioredis"
const redisClient = () => {
    if (process.env.REDIS_URL) {
        console.log('Redis Connected');
        return process.env.REDIS_URL;
    }
    throw new Error('Redis Connect failed');
};
exports.redis = new ioredis_1.default(redisClient());
