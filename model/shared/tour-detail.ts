import { TourSummary } from "./tour-summary";
import { Review } from "./review";

export class TourDetail extends TourSummary {
    location: string;
    price: number;
    reviews: Review[];
    /**
     *
     */
    constructor(tourData: any, reviewsData: any) {
        super(tourData);
        this.location = tourData.location;
        this.price = tourData.price;
        this.reviews = reviewsData.map((review: any) => new Review(review));
        
    }
}