import { DataStore } from "../../../data/data";
import { RequestHandler } from "express-serve-static-core";
import uuid from "uuid/v4";
import { TourSummary } from "../../../model/shared/tour-summary";
import { TourDetail } from "../../../model/shared/tour-detail";
import { fileMapper } from "../general/static";
import { Request } from "express";
import { db } from "../../../db/db";
import { TourFilters } from "../../../model/shared/tour-filters";
import * as dbModel from "./../../../db/db-models";

export class GetToursApi {
    static getTours: RequestHandler = (req, res, next) => {

        
        console.log('query: ',req.query);
        const filters = new TourFilters(req.query);
        const query = "SELECT * FROM tours WHERE ${condition:raw}";
        db.any(query, {condition: filters.getCondition})
            .then((tours: dbModel.tours[]) => {
                res.json(tours.map((item: any) => new TourSummary(item)));
            } )
            .catch(err => {console.log("error: ",err)});

    }

    static getTourDetail: RequestHandler = (req, res, next) => {
        const tourId = req.params.id;
        res.json(getTourDetail(req, tourId));
    }

}

const getTourDetail = (req: Request, id: any) => {
    const selectedTour = DataStore.Tours.find(t => t.tourId == id);

    if ( selectedTour ) {
        const imageUrls = selectedTour.img.map(fileMapper(req.app.get("env")));
        const selectedReviews = DataStore.Reviews.filter((item: any) => item.tourId == id);
        const res = new TourDetail(selectedTour, selectedReviews, imageUrls);
        return res;
    }

    const res = {"status": "failed", "message": "Element not found"};
    return res;
}