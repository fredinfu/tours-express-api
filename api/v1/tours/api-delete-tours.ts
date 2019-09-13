import { RequestHandler } from "express";
import { DataStore } from "../../../data/data";
import { PublicInfo, ApiError } from "../../../model/shared/messages";

export class DeleteToursApi {
    static deleteTour: RequestHandler = (req, res, next) => {
        const tourId = req.params.id;
        const tourIndex = DataStore.Tours.findIndex((item: any) => item.tourId == tourId);
        let response = { "status": "failed", "message": "Tour not found" };
    
        if ( tourIndex > -1 ) {
            DataStore.Tours.splice(tourIndex, 1);
            return next(new ApiError("Validation error", "Tour not found.", 400));
            // response = { "status": "success", "message": "Tour removed!" };
            // res.json(response);
            // return;
        }

        res.json(new PublicInfo("Tour deleted", 200));
        //res.json(response);
    
    }
}