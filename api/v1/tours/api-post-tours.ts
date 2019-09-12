import { DataStore } from "../../../data/data";
import { RequestHandler } from "express-serve-static-core";
import uuid from "uuid/v4";

export class PostToursApi {
    static addTour: RequestHandler = (req, res, next) => {
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
    
        res.json(response);
    }
}