"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_get_tours_1 = require("../../api/tours/api-get-tours");
const api_post_tours_1 = require("../../api/tours/api-post-tours");
const api_put_tours_1 = require("../../api/tours/api-put-tours");
const api_patch_tours_1 = require("../../api/tours/api-patch-tours");
const api_delete_tours_1 = require("../../api/tours/api-delete-tours");
const api_functions_tours_1 = require("../../api/tours/api-functions-tours");
const body_parser_1 = require("../general/exports/body-parser");
exports.ToursRouter = express_1.Router();
//get class
exports.ToursRouter.get("/", api_get_tours_1.GetToursApi.getTours);
exports.ToursRouter.get("/:id", api_get_tours_1.GetToursApi.getTourDetail);
//post class
exports.ToursRouter.post("/", body_parser_1.jsonParser, api_post_tours_1.PostToursApi.addTour);
//put class
exports.ToursRouter.put("/:id", body_parser_1.jsonParser, api_put_tours_1.PutToursApi.updateTour);
//patch class
exports.ToursRouter.patch("/:id", body_parser_1.jsonParser, api_patch_tours_1.PatchToursApi.updateTour);
//delete class
exports.ToursRouter.delete("/:id", api_delete_tours_1.DeleteToursApi.deleteTour);
//one file functions exports
exports.ToursRouter.get("/get-tours", api_functions_tours_1.apiGetTours);
exports.ToursRouter.get("/get-tours/:id", api_functions_tours_1.apiGetTourDetail);
exports.ToursRouter.post("/post-tours", body_parser_1.jsonParser, api_functions_tours_1.addTour);
exports.ToursRouter.delete("/delete-tours/:id", api_functions_tours_1.deleteTour);
exports.ToursRouter.put("/update-tours/:id", body_parser_1.jsonParser, api_functions_tours_1.updateTour);
exports.ToursRouter.patch("/update-tours/:id", body_parser_1.jsonParser, api_functions_tours_1.updateTour);
