import { DataStore } from "../../data/data";
import { RequestHandler } from "express-serve-static-core";

export class PatchToursApi {
    static updateTour: RequestHandler = (req, res, next) => {
        const tourId = req.params.id;
        const tourIndex = DataStore.Tours.findIndex((item:any) => item.tourId == tourId);
        let response = { "status": "failed", "message": "Tour not found!", "data": {} };
        if ( tourIndex > -1 ) {
            const originalTour = DataStore.Tours[tourIndex];
            const newTour = {
                tourId: tourId,
                tour_name: req.body.tour_name || originalTour.tour_name,
                location: req.body.location || originalTour.location,
                price: req.body.price || originalTour.price,
                img: originalTour.img
            };

            DataStore.Tours[tourIndex] = newTour;
            response = { "status": "success", "message": "Tour updated!", "data": newTour };
            res.json(response);
        }


    }
}