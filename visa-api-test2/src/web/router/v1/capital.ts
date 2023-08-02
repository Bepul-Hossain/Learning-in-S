import { Router } from "express";
import { CapitalControllerInterface } from "../../controller/capital";

export const newCapitalRouter = async(countryController: CapitalControllerInterface): Promise<Router>=>{
    const router = Router();
    router.get("/search", countryController.search);
    return router;
}