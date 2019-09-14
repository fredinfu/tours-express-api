"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../../../data/data");
const messages_1 = require("../../../model/shared/messages");
class DeleteToursApi {
}
DeleteToursApi.deleteTour = (req, res, next) => {
    const tourId = req.params.id;
    const tourIndex = data_1.DataStore.Tours.findIndex((item) => item.tourId == tourId);
    let response = { "status": "failed", "message": "Tour not found" };
    if (tourIndex > -1) {
        data_1.DataStore.Tours.splice(tourIndex, 1);
        return next(new messages_1.ApiError("Validation error", "Tour not found.", 400));
        // response = { "status": "success", "message": "Tour removed!" };
        // res.json(response);
        // return;
    }
    res.json(new messages_1.PublicInfo("Tour deleted", 200));
    //res.json(response);
};
exports.DeleteToursApi = DeleteToursApi;
