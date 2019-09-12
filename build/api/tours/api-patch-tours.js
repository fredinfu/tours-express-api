"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../data/data");
class PatchToursApi {
}
exports.PatchToursApi = PatchToursApi;
PatchToursApi.updateTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.Tours.findIndex((item) => item.tourId == tourId);
    let response = { "status": "failed", "message": "Tour not found!", "data": {} };
    if (tourIndex > -1) {
        const originalTour = data_1.DataStore.Tours[tourIndex];
        const newTour = {
            tourId: tourId,
            tour_name: req.body.tour_name || originalTour.tour_name,
            location: req.body.location || originalTour.location,
            price: req.body.price || originalTour.price,
            img: originalTour.img
        };
        data_1.DataStore.Tours[tourIndex] = newTour;
        response = { "status": "success", "message": "Tour updated!", "data": newTour };
        res.json(response);
    }
};
