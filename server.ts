import express from "express";
import * as bodyparser from "body-parser";
import { apiGetTours, apiGetTourDetail, addTour, deleteTour, updateTour } from "./api/tours/api-functions-tours";
import { GetToursApi } from "./api/tours/api-get-tours";
import { PostToursApi } from "./api/tours/api-post-tours";
import { PutToursApi } from "./api/tours/api-put-tours";
import { DeleteToursApi } from "./api/tours/api-delete-tours";
import { PatchToursApi } from "./api/tours/api-patch-tours";

const jsonParser = bodyparser.json();


const PORT = process.env.PORT || 8091;
const app = express();

//get class
app.get("/tours", GetToursApi.getTours);
app.get("/tours/:id", GetToursApi.getTourDetail);

//post class
app.post("/tours", jsonParser, PostToursApi.addTour);

//put class
app.put("/tours/:id", jsonParser, PutToursApi.updateTour);

//patch class
app.patch("/tours/:id", jsonParser, PatchToursApi.updateTour);

//delete class
app.delete("/tours/:id", DeleteToursApi.deleteTour);

//one file functions exports
app.get("/get-tours", apiGetTours);
app.get("/get-tours/:id", apiGetTourDetail);
app.post("/post-tours", jsonParser, addTour);
app.delete("/delete-tours/:id", deleteTour);
app.put("/update-tours/:id", jsonParser, updateTour);
app.patch("/update-tours/:id", jsonParser, updateTour);


app.get("/", (req, res, next) => {
    res.send("Tour Booking Express API");
});

app.post("/", (req, res, next) => {
    res.send("Add a new tour...");
});

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}...`);
})