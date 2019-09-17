import { TourSummary } from "./tour-summary";
import { Review } from "./review";
import * as dbModel from "./../../db/db-models";

export class TourDetail extends TourSummary {
    location: string;
    price: number;
    currency: string;
    reviews: Review[];
    img: string[];
    /**
     *
     */
    constructor(tourData: dbModel.tours, reviewsData: dbModel.reviews[], tourImages: string[]) {
        super(tourData);
        this.location = tourData.location;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.reviews = reviewsData.map((review: any) => new Review(review));
        this.img = tourImages;
    }
}