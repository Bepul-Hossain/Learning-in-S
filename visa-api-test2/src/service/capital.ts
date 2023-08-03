import { VisaCapitalInterface } from "../model/visa_capital";
import { VisaCountryInterface } from "../model/visa_country";
import { CapitalRepoInterface } from "../repo/capital";

export interface CapitalServiceInterface {
    search(keyword: string): Promise<VisaCapitalInterface[]>;
}

export class CapitalService implements CapitalServiceInterface {

    constructor(public capitalRepo: CapitalRepoInterface){
        this.capitalRepo = capitalRepo
    }
    public async search(keyword: string): Promise<VisaCapitalInterface[]> {
        
        const countryList = await this.capitalRepo.search(keyword);
        if(!countryList.length){
            return [];
        }
        return countryList;
    }

}

export const newCapitalService = async (capitalRepo: CapitalRepoInterface): Promise<CapitalService>=>{
    return new CapitalService(capitalRepo)
}