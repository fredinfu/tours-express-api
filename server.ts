import express from "express";
import { routerV1 } from "./api/v1/v1";

const PORT = process.env.PORT || 8091;
const app = express();

app.use("/v1", routerV1)

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}...`);
})