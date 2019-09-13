import { Router } from "express";

import { GetToursApi } from "./api-get-tours";
import { PostToursApi } from "./api-post-tours";
import { PutToursApi } from "./api-put-tours";
import { PatchToursApi } from "./api-patch-tours";
import { DeleteToursApi } from "./api-delete-tours";
import { checkTourFilters } from "./api-tours-filter";
import { jsonParser } from "../general/exports/body-parser";
import { apiErrorHandler } from "../general/error-handling";

export let ToursRouter = Router();

ToursRouter.route("/")
    .get(checkTourFilters, GetToursApi.getTours)
    .post(jsonParser, PostToursApi.addTour);

ToursRouter.route("/:id")
    .get(GetToursApi.getTourDetail)
    .put(jsonParser, PutToursApi.updateTour)
    .patch(jsonParser, PatchToursApi.updateTour)
    .delete(DeleteToursApi.deleteTour);



// //get class
// ToursRouter.get("/", GetToursApi.getTours);
// ToursRouter.get("/:id", GetToursApi.getTourDetail);

// //post class
// ToursRouter.post("/", jsonParser, PostToursApi.addTour);

// //put class
// ToursRouter.put("/:id", jsonParser, PutToursApi.updateTour);

// //patch class
// ToursRouter.patch("/:id", jsonParser, PatchToursApi.updateTour);

// //delete class
// ToursRouter.delete("/:id", DeleteToursApi.deleteTour);

// //one file functions exports
// ToursRouter.get("/get-tours", apiGetTours);
// ToursRouter.get("/get-tours/:id", apiGetTourDetail);
// ToursRouter.post("/post-tours", jsonParser, addTour);
// ToursRouter.delete("/delete-tours/:id", deleteTour);
// ToursRouter.put("/update-tours/:id", jsonParser, updateTour);
// ToursRouter.patch("/update-tours/:id", jsonParser, updateTour);