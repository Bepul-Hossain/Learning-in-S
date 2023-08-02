import { QueryTypes } from "sequelize";
import newSequelize from "../infra/sequelize";
import { VisaCountryInterface } from "../model/visa_country";

export interface CountryRepoInterface {
    search(keyword: string): Promise<VisaCountryInterface[]>;
    popular(featuredType: boolean, limit: number): Promise<VisaCountryInterface[]>;
}

export class CountryRepo implements CountryRepoInterface {
    public async search(keyword: string): Promise<VisaCountryInterface[]> {
        const results = await newSequelize().query(`SELECT c.visaCountryCode, c.countryName, c.countryCode, c.visaRequirement,
        MIN(p.visaPrepMinDays) as visaPrepMinDays FROM visa_country AS c
        INNER JOIN visa_product AS p ON c.id = p.visaCountryId
        WHERE c.status=true AND c.countryName LIKE :countryName AND p.status=true GROUP BY p.visaCountryId`, {
			replacements: {
				countryName: `%${ keyword }%`
			},
			type: QueryTypes.SELECT
		});
        return results as VisaCountryInterface[]
    }
    public async popular(featuredType: boolean, limit: number): Promise<VisaCountryInterface[]> {
        const [results] = await newSequelize().query(`SELECT c.visaCountryCode, c.countryName, c.visaRequirement,
        MIN(p.visaPrepMinDays) as visaPrepMinDays FROM visa_country AS c
        INNER JOIN visa_product AS p ON c.id = p.visaCountryId
        WHERE c.status=true AND c.featured=${ featuredType } AND p.status=true GROUP BY p.visaCountryId LIMIT ${ limit }`);
		return results as VisaCountryInterface[];
    }
}

export const newCountryRepo = async(): Promise<CountryRepoInterface>=>{
    return new CountryRepo();
}