import { QueryTypes } from "sequelize";
import newSequelize from "../infra/sequelize";
import { VisaCountryInterface } from "../model/visa_country";

export interface CapitalRepoInterface {
    search(keyword: string): Promise<VisaCountryInterface[]>;
}

export class CapitalRepo implements CapitalRepoInterface {
    public async search(keyword: string): Promise<VisaCountryInterface[]> {
        const results = await newSequelize().query(`SELECT c.capital, c.countryName, c.countryCode
        FROM visa_country AS c
        WHERE c.status=true AND c.capital  LIKE :capital`, {
			replacements: {
				capital: `%${ keyword }%`
			},
			type: QueryTypes.SELECT
		});
        return results as VisaCountryInterface[]
    }
}

export const newCapitalRepo = async(): Promise<CapitalRepoInterface>=>{
    return new CapitalRepo();
}