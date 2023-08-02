import { Router } from "express";
import { CountryControllerInterface } from "../../controller/country";
import { newCountryRouter } from "./country";
import { newCapitalRouter } from "./capital";
import { CapitalControllerInterface } from "../../controller/capital";

export const newV1Router = async(
    countryController: CountryControllerInterface,
    capitalController: CapitalControllerInterface
    ):Promise<Router>=>{
        const v1 = Router();
        v1.use("/visa/country", await newCountryRouter(countryController));

        v1.use("/visa/capital", await newCapitalRouter(capitalController));

        v1.use("*", (_req, res)=>{
            res.status(404).send({
                code: "PAGE_NOT_FOUND",
                message: "please be sane and hit correct endpoints",
                response: null,
                error: null
            })
        })
        return v1;

} 