"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express = require("express");
const path_1 = __importDefault(require("path"));
const logger_1 = require("./general/exports/logger");
const tours_router_1 = require("./tours/tours-router");
const error_handling_1 = require("./general/error-handling");
exports.routerV1 = express_1.Router();
exports.routerV1.use(logger_1.logger);
exports.routerV1.use("/static", express.static(path_1.default.resolve("./", "public", "img")));
exports.routerV1.use("/tours", tours_router_1.ToursRouter);
exports.routerV1.use(error_handling_1.apiErrorHandler);
