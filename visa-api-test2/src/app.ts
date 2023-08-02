import express from "express";
import bodyParser from "body-parser";

import { newCountryRepo } from "./repo/country";
import { newCountryService } from "./service/country";
import { newCountryController } from "./web/controller/country";
import { newV1Router } from "./web/router/v1";
import { newCapitalRepo } from "./repo/capital";
import { newCapitalService } from "./service/capital";
import { newCapitalController } from "./web/controller/capital";


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

(async()=>{
    const countryRepo = await newCountryRepo();
    const capitalRepo = await newCapitalRepo();

    const countryService = await newCountryService(countryRepo);
    const capitalService = await newCapitalService(capitalRepo);

    const countryController = await newCountryController(countryService);
    const capitalController = await newCapitalController(capitalService);

    const v1Router = await newV1Router(countryController, capitalController);

    app.use("/api/v1", v1Router);

})();

export default app;