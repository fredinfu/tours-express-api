"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const v1_1 = require("./api/v1/v1");
const PORT = process.env.PORT || 8091;
const app = express_1.default();
app.use("/v1", v1_1.routerV1);
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}...`);
});
