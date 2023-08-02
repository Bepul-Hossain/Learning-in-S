import { Router } from "express";
import { CountryControllerInterface } from "../../controller/country";

export const newCountryRouter = async(countryController: CountryControllerInterface): Promise<Router>=>{
    const router = Router();
    router.get("/search", countryController.search);
    router.get("/popular", countryController.popular);
    return router;
}