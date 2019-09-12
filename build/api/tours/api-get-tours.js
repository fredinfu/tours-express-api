"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
const tour_detail_1 = require("../../model/shared/tour-detail");
const static_1 = require("../../general/static");
class GetToursApi {
}
exports.GetToursApi = GetToursApi;
GetToursApi.getTours = (req, res, next) => {
    res.json(data_1.DataStore.Tours);
};
GetToursApi.getTourDetail = (req, res, next) => {
    const tourId = req.params.id;
    res.json(getTourDetail(req, tourId));
};
const getTourDetail = (req, id) => {
    const selectedTour = data_1.DataStore.Tours.find(t => t.tourId == id);
    if (selectedTour) {
        const imageUrls = selectedTour.img.map(static_1.fileMapper(req.app.get("env")));
        const selectedReviews = data_1.DataStore.Reviews.filter((item) => item.tourId == id);
        const res = new tour_detail_1.TourDetail(selectedTour, selectedReviews, imageUrls);
        return res;
    }
    const res = { "status": "failed", "message": "Element not found" };
    return res;
};
