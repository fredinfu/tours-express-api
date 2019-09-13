import { DataStore } from "../../../data/data";
import { RequestHandler } from "express-serve-static-core";
import uuid from "uuid/v4";
import { ApiError, PublicInfo } from "../../../model/shared/messages";
import { json } from "body-parser";

export class PostToursApi {
    static addTour: RequestHandler = (req, res, next) => {

        const requiredFields = ["tour_name", "location"];
        const givenFields = Object.getOwnPropertyNames(req.body);
        console.log('body: ',req.body);
        if(!requiredFields.every(field => givenFields.includes(field))) {
            return next(new ApiError("Data missing", "Not all required fields", 400));
        }

        const newTour = {
            tourId: uuid(),
            tour_name: req.body.tour_name || "",
            location: req.body.location || "",
            price: req.body.price || "",
            img: []
        };
    
        DataStore.Tours.push(newTour);
    
        const response = {
            status: "succeed",
            message: "New Tour Added!",
            data: newTour
        }
        
        res.json(new PublicInfo("Tour added", 200, {data: newTour}));
        //res.json(response);
    }
}