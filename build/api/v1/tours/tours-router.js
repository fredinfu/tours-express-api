"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const api_get_tours_1 = require("./api-get-tours");
const api_post_tours_1 = require("./api-post-tours");
const api_put_tours_1 = require("./api-put-tours");
const api_patch_tours_1 = require("./api-patch-tours");
const api_delete_tours_1 = require("./api-delete-tours");
const api_tours_filter_1 = require("./api-tours-filter");
const body_parser_1 = require("../general/exports/body-parser");
exports.ToursRouter = express_1.Router();
exports.ToursRouter.route("/")
    .get(api_tours_filter_1.checkTourFilters, api_get_tours_1.GetToursApi.getTours)
    .post(body_parser_1.jsonParser, api_post_tours_1.PostToursApi.addTour);
exports.ToursRouter.route("/:id")
    .get(api_get_tours_1.GetToursApi.getTourDetail)
    .put(body_parser_1.jsonParser, api_put_tours_1.PutToursApi.updateTour)
    .patch(body_parser_1.jsonParser, api_patch_tours_1.PatchToursApi.updateTour)
    .delete(api_delete_tours_1.DeleteToursApi.deleteTour);
// //get class
// ToursRouter.get("/", GetToursApi.getTours);
// ToursRouter.get("/:id", GetToursApi.getTourDetail);
// //post class
// ToursRouter.post("/", jsonParser, PostToursApi.addTour);
// //put class
// ToursRouter.put("/:id", jsonParser, PutToursApi.updateTour);
// //patch class
// ToursRouter.patch("/:id", jsonParser, PatchToursApi.updateTour);
// //delete class
// ToursRouter.delete("/:id", DeleteToursApi.deleteTour);
// //one file functions exports
// ToursRouter.get("/get-tours", apiGetTours);
// ToursRouter.get("/get-tours/:id", apiGetTourDetail);
// ToursRouter.post("/post-tours", jsonParser, addTour);
// ToursRouter.delete("/delete-tours/:id", deleteTour);
// ToursRouter.put("/update-tours/:id", jsonParser, updateTour);
// ToursRouter.patch("/update-tours/:id", jsonParser, updateTour);
