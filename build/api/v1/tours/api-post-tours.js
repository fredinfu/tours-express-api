"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const v4_1 = __importDefault(require("uuid/v4"));
const messages_1 = require("../../../model/shared/messages");
class PostToursApi {
}
PostToursApi.addTour = (req, res, next) => {
    const requiredFields = ["tour_name", "location"];
    const givenFields = Object.getOwnPropertyNames(req.body);
    console.log('body: ', req.body);
    if (!requiredFields.every(field => givenFields.includes(field))) {
        return next(new messages_1.ApiError("Data missing", "Not all required fields", 400));
    }
    const newTour = {
        tourId: v4_1.default(),
        tour_name: req.body.tour_name || "",
        location: req.body.location || "",
        price: req.body.price || "",
        img: []
    };
    data_1.DataStore.Tours.push(newTour);
    const response = {
        status: "succeed",
        message: "New Tour Added!",
        data: newTour
    };
    res.json(new messages_1.PublicInfo("Tour added", 200, { data: newTour }));
    //res.json(response);
};
exports.PostToursApi = PostToursApi;
