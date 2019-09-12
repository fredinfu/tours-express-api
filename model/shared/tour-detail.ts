import { TourSummary } from "./tour-summary";
import { Review } from "./review";

export class TourDetail extends TourSummary {
    location: string;
    price: number;
    reviews: Review[];
    img: string[];
    /**
     *
     */
    constructor(tourData: any, reviewsData: any, tourImages: string[]) {
        super(tourData);
        this.location = tourData.location;
        this.price = tourData.price;
        this.reviews = reviewsData.map((review: any) => new Review(review));
        this.img = tourImages;
    }
}