import { Request, Response } from "express";
import { CountryServiceInterface } from "../../service/country";
import { Controller } from "./controller";
// import { object, string } from "@hapi/joi";
import Joi from "@hapi/joi";

export interface CountryControllerInterface {
    search(req: Request, res: Response): any;
    popular(req: Request, res: Response): any;
}

export class CountryController extends Controller implements CountryControllerInterface {
    countryService: CountryServiceInterface;
    constructor(countryService: CountryServiceInterface) {
        super();
        this.countryService = countryService;
        this.search = this.search.bind(this);
        this.popular = this.popular.bind(this);
    }

    public async search(req: Request, res: Response): Promise<any> {
        const schema = Joi.object().keys({
            keyword: Joi.string().required()
        });

        const { error } = schema.validate(req.query, { abortEarly: false, allowUnknown: true });
        if (error) {
            
            return await this.sendResponse(400, "E_INVALID_DATA", "Please fill up all the required fields.",
                null, error.details, res
                );
        }
        try {
            const { keyword } = req.query;
            const countryList = await this.countryService.search(keyword as string);
            return await this.sendResponse(200, "SUCCESS", "Visa country list",
                countryList, [], res
            );
        } catch (err) {
            return await this.sendResponse(500, "E_VISA_COUNTRY_SEARCH", "Internal Server Error.",
                null, [], res
            );
        }
    }

    public async popular(req: Request, res: Response): Promise<any> {
        try {
            const popularCountry = await this.countryService.popular();
            return await this.sendResponse(200, "SUCCESS", "Popular Country list",
                popularCountry, [], res
            );
        } catch (err) {
            return await this.sendResponse(500, "E_VISA_POPULAR_COUNTRY", "Internal Server Error.",
                null, [], res
            );
        }
    }

    public async sendResponse(statusCode: number, code: string, message: string,
        // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
        response: any, errors: any[], res: Response, optional?: Record<string, unknown>): Promise<any> {
        return res.status(statusCode).send({ code, message, response, errors, ...optional });
    }
}

export const newCountryController = async (countryService: CountryServiceInterface):
    Promise<CountryController> => {
    return new CountryController(countryService);
};