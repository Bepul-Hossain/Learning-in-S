import { Request, Response } from "express";
import { Controller } from "./controller";
import Joi from "@hapi/joi";
import { CapitalServiceInterface } from "../../service/capital";


export interface CapitalControllerInterface{
    search(req: Request, res: Response):any;
}

export class CapitalController extends Controller implements CapitalControllerInterface{
    capitalService: CapitalServiceInterface;
    constructor(capitalService: CapitalServiceInterface){
        super();
        this.capitalService = capitalService;
        
        this.search = this.search.bind(this);
        console.log(this);
        
    }

    public async search(req: Request, res: Response): Promise<any> {
        const schema = Joi.object().keys({
            keyword: Joi.string().required()
        })
        const { error } = schema.validate(req.query, { abortEarly: false, allowUnknown: true });
        if(error){
            return await this.sendResponse(400, "E_INVALID_DATA", "Please fill up all the required fields.",
            null, error.details, res)
        }
        try {
            const { keyword } = req.query;
            console.log(this);
            
            const countryList = await this.capitalService.search(keyword as string);
            return await this.sendResponse(200, "SUCCESS", "Visa country list",
                countryList, [], res
            );
        } catch (err) {
            return await this.sendResponse(500, "E_VISA_COUNTRY_SEARCH", "Internal Server Error.",
                null, [], res
            );
        }
    }
    public async sendResponse(statusCode: number, code: string, message: string,
        response: any, errors: any[], res: Response, optional?: Record<string, unknown>
        ): Promise<any>{
            return res.status(statusCode).send({ code, message, response, errors, ...optional });
        }
}

export const newCapitalController = async(capitalService: CapitalServiceInterface):
    Promise<CapitalController> => {
    return new CapitalController(capitalService);
}