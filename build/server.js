"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyparser = __importStar(require("body-parser"));
const morgan_1 = __importDefault(require("morgan"));
const api_functions_tours_1 = require("./api/tours/api-functions-tours");
const api_get_tours_1 = require("./api/tours/api-get-tours");
const api_post_tours_1 = require("./api/tours/api-post-tours");
const api_put_tours_1 = require("./api/tours/api-put-tours");
const api_delete_tours_1 = require("./api/tours/api-delete-tours");
const api_patch_tours_1 = require("./api/tours/api-patch-tours");
const path_1 = __importDefault(require("path"));
const jsonParser = bodyparser.json();
const urlEncodedParser = bodyparser.urlencoded({ extended: true });
const logger = morgan_1.default("dev");
const PORT = process.env.PORT || 8091;
const app = express_1.default();
const authenticator = (req, res, next) => {
    const username = "FFUNEZ";
    req.user;
};
app.use(logger);
app.use("/static", express_1.default.static(path_1.default.resolve("./", "public", "img")));
//get class
app.get("/tours", api_get_tours_1.GetToursApi.getTours);
app.get("/tours/:id", api_get_tours_1.GetToursApi.getTourDetail);
//post class
app.post("/tours", jsonParser, api_post_tours_1.PostToursApi.addTour);
//put class
app.put("/tours/:id", jsonParser, api_put_tours_1.PutToursApi.updateTour);
//patch class
app.patch("/tours/:id", jsonParser, api_patch_tours_1.PatchToursApi.updateTour);
//delete class
app.delete("/tours/:id", api_delete_tours_1.DeleteToursApi.deleteTour);
//one file functions exports
app.get("/get-tours", api_functions_tours_1.apiGetTours);
app.get("/get-tours/:id", api_functions_tours_1.apiGetTourDetail);
app.post("/post-tours", jsonParser, api_functions_tours_1.addTour);
app.delete("/delete-tours/:id", api_functions_tours_1.deleteTour);
app.put("/update-tours/:id", jsonParser, api_functions_tours_1.updateTour);
app.patch("/update-tours/:id", jsonParser, api_functions_tours_1.updateTour);
app.get("/", (req, res, next) => {
    res.send("Tour Booking Express API");
});
app.post("/", (req, res, next) => {
    res.send("Add a new tour...");
});
app.listen(PORT, () => {
    console.log(`Server started at ${PORT}...`);
});
