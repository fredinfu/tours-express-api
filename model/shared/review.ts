export class Review {
    reviewId: string;
    tourId: string;
    comment: string;
    rate: number;
    /**
     *
     */
    constructor(data: any) {
        this.reviewId = data.reviewId;
        this.tourId = data.tourId;
        this.comment = data.comment;
        this.rate = data.rate;
    }
}