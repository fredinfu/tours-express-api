"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tour_summary_1 = require("./tour-summary");
const review_1 = require("./review");
class TourDetail extends tour_summary_1.TourSummary {
    /**
     *
     */
    constructor(tourData, reviewsData, tourImages) {
        super(tourData);
        this.location = tourData.location;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.reviews = reviewsData.map((review) => new review_1.Review(review));
        this.img = tourImages;
    }
}
exports.TourDetail = TourDetail;
