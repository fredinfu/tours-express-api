import { DataStore } from "../../../data/data";
import { RequestHandler } from "express-serve-static-core";

export class PutToursApi {
    static updateTour: RequestHandler = (req, res, next) => {
        const tourId = req.params.id;
        const tourIndex = DataStore.Tours.findIndex((item:any) => item.tourId == tourId);
        let response = { "status": "failed", "message": "Tour not found!", "data": {} };
        if ( tourIndex > -1 ) {
            const newTour = {
                tourId: tourId,
                tour_name: req.body.tour_name || "",
                location: req.body.location || "",
                price: req.body.price || 0,
                img: []
            };

            DataStore.Tours[tourIndex] = newTour;
            response = { "status": "success", "message": "Tour updated!", "data": newTour };
            res.json(response);
        }


    }
}