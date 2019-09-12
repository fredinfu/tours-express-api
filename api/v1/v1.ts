import { Router } from "express";
import express = require("express");
import path from "path";

import { logger } from "./general/exports/logger";
import { ToursRouter } from "./tours/tours-router";

export let routerV1 = Router();

routerV1.use(logger);
routerV1.use("/static", express.static(path.resolve("./", "public", "img")));

routerV1.use("/tours", ToursRouter);