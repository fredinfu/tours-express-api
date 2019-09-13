"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TourSummary {
    /**
     *
     */
    constructor(data) {
        this.tourId = data.tourId;
        this.tour_name = data.tour_name;
        this.location = data.location;
    }
}
exports.TourSummary = TourSummary;
