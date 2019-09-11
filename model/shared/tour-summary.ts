export class TourSummary {
    tourId: string
    tour_name: string
    /**
     *
     */
    constructor(data: any) {
        this.tourId = data.tourId;
        this.tour_name = data.tour_name;
    }
}