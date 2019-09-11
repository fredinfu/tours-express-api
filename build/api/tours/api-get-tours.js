"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const v4_1 = __importDefault(require("uuid/v4"));
const tour_summary_1 = require("../../model/shared/tour-summary");
const tour_detail_1 = require("../../model/shared/tour-detail");
class GetToursApi {
}
exports.GetToursApi = GetToursApi;
GetToursApi.getTours = (req, res, next) => {
    res.json(data_1.DataStore.Tours);
};
GetToursApi.getTourDetail = (req, res, next) => {
    const tourId = req.params.id;
    res.json(getTourDetail(tourId));
};
exports.apiGetTours = (req, res, next) => {
    res.json(data_1.DataStore.Tours.map((item) => new tour_summary_1.TourSummary(item)));
};
exports.apiGetTourDetail = (req, res, next) => {
    const tourId = req.params.id;
    const response = getTourDetail(tourId);
    res.json(response);
};
exports.addTour = (req, res, next) => {
    const newTour = {
        tourId: v4_1.default(),
        tour_name: req.body.tour_name || "",
        location: req.body.location || "",
        price: req.body.price || ""
    };
    data_1.DataStore.Tours.push(newTour);
    const response = {
        status: "success",
        message: "New Tour Added!",
        data: newTour
    };
    res.json(response);
};
exports.deleteTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.Tours.findIndex((item) => item.tourId == tourId);
    let response = { "status": "failed", "message": "Tour not found" };
    if (tourIndex > -1) {
        data_1.DataStore.Tours.splice(tourIndex, 1);
        response = { "status": "success", "message": "Tour removed!" };
        res.json(response);
        return;
    }
    res.json(response);
};
const getTourDetail = (id) => {
    const selectedTour = data_1.DataStore.Tours.find(t => t.tourId == id);
    if (selectedTour) {
        const selectedReviews = data_1.DataStore.Reviews.filter((item) => item.tourId == id);
        const res = new tour_detail_1.TourDetail(selectedTour, selectedReviews);
        return res;
    }
    const res = { "status": "failed", "message": "Element not found" };
    return res;
};
