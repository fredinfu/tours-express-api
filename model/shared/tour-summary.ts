import * as dbModel from "./../../db/db-models";
export class TourSummary {
    tourId: string
    tour_name: string
    location: string
    
    /**
     *
     */
    constructor(data: dbModel.tours) {
        this.tourId = data.tourId;
        this.tour_name = data.tour_name;
        this.location = data.location;
    }
}