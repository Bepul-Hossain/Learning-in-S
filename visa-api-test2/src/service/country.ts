import { VisaCountryInterface } from "../model/visa_country";
import { CountryRepoInterface } from "../repo/country";

export interface CountryServiceInterface {
    search(keyword: string): Promise<VisaCountryInterface[]>;
    popular(): Promise<VisaCountryInterface[]>;
}

export class CountryService implements CountryServiceInterface {
    constructor(public countryRepo: CountryRepoInterface){
        this.countryRepo = countryRepo
    }
    public async search(keyword: string): Promise<VisaCountryInterface[]> {
        
        const countryList = await this.countryRepo.search(keyword);
        if(!countryList.length){
            return [];
        }
        return countryList;
    }
    public async popular(): Promise<VisaCountryInterface[]> {
        
        const popularCountryList = await this.countryRepo.popular(true, 10);
        if(!popularCountryList.length) {
            return [];
        }
        return popularCountryList;
    }
}

export const newCountryService = async (countryRepo: CountryRepoInterface): Promise<CountryService>=>{
    return new CountryService(countryRepo)
}