"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Review {
    /**
     *
     */
    constructor(data) {
        this.reviewId = data.reviewId;
        this.tourId = data.tourId;
        this.comment = data.comment;
        this.rate = data.rate;
    }
}
exports.Review = Review;
