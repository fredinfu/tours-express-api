import { RequestHandler } from "express";
import { DataStore } from "../../data/data";

export class DeleteToursApi {
    static deleteTour: RequestHandler = (req, res, next) => {
        const tourId = req.params.id;
        const tourIndex = DataStore.Tours.findIndex((item: any) => item.tourId == tourId);
        let response = { "status": "failed", "message": "Tour not found" };
    
        if ( tourIndex > -1 ) {
            DataStore.Tours.splice(tourIndex, 1);
            response = { "status": "success", "message": "Tour removed!" };
            res.json(response);
            return;
        }
    
        res.json(response);
    
    }
}