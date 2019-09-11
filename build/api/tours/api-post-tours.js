"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const v4_1 = __importDefault(require("uuid/v4"));
class PostToursApi {
}
exports.PostToursApi = PostToursApi;
PostToursApi.addTour = (req, res, next) => {
    const newTour = {
        tourId: v4_1.default(),
        tour_name: req.body.tour_name || "",
        location: req.body.location || "",
        price: req.body.price || ""
    };
    data_1.DataStore.Tours.push(newTour);
    const response = {
        status: "succeed",
        message: "New Tour Added!",
        data: newTour
    };
    res.json(response);
};
