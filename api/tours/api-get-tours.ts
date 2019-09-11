import { DataStore } from "../../data/data";
import { RequestHandler } from "express-serve-static-core";
import uuid from "uuid/v4";
import { TourSummary } from "../../model/shared/tour-summary";
import { TourDetail } from "../../model/shared/tour-detail";

export class GetToursApi {
    static getTours: RequestHandler = (req, res, next) => {
        res.json(DataStore.Tours);
    }

    static getTourDetail: RequestHandler = (req, res, next) => {
        const tourId = req.params.id;
        res.json(getTourDetail(tourId));
    }

}

export const apiGetTours: RequestHandler = (req, res, next) => {
    res.json(DataStore.Tours.map((item: any) => new TourSummary(item)));
}

export const apiGetTourDetail: RequestHandler = (req, res, next) => {
    const tourId = req.params.id;
    const response = getTourDetail(tourId);
    res.json(response);
}

export const addTour: RequestHandler = (req, res, next) => {
    const newTour = {
        tourId: uuid(),
        tour_name: req.body.tour_name || "",
        location: req.body.location || "",
        price: req.body.price || ""
    };

    DataStore.Tours.push(newTour);

    const response = {
        status: "success",
        message: "New Tour Added!",
        data: newTour
    }

    res.json(response);
}

export const deleteTour: RequestHandler = (req, res, next) => {
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


const getTourDetail = (id: any) => {
    const selectedTour = DataStore.Tours.find(t => t.tourId == id);

    if ( selectedTour ) {
        const selectedReviews = DataStore.Reviews.filter((item: any) => item.tourId == id);
        const res = new TourDetail(selectedTour, selectedReviews);
        return res;
    }

    const res = {"status": "failed", "message": "Element not found"};
    return res;
}