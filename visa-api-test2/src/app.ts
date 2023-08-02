import express from "express";
import bodyParser from "body-parser";

import { newCountryRepo } from "./repo/country";
import { newCountryService } from "./service/country";
import { newCountryController } from "./web/controller/country";
import { newV1Router } from "./web/router/v1";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async()=>{
    const countryRepo = await newCountryRepo();
    const countryService = await newCountryService(countryRepo);

    const countryController = await newCountryController(countryService);
    const v1Router = await newV1Router(countryController);
    app.use("/api/v1", v1Router);

})();

export default app;