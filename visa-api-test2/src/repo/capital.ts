import { QueryTypes } from "sequelize";
import newSequelize from "../infra/sequelize";
// import { VisaCountryInterface } from "../model/visa_country";
import { VisaCapitalInterface } from "../model/visa_capital";

export interface CapitalRepoInterface {
    search(keyword: string): Promise<VisaCapitalInterface[]>;
}

export class CapitalRepo implements CapitalRepoInterface {
    public async search(keyword: string): Promise<VisaCapitalInterface[]> {
        const results = await newSequelize().query(`SELECT c.capital, c.countryName, c.countryCode
        FROM visa_country AS c
        WHERE c.status=true AND c.capital  LIKE :capital`, {
			replacements: {
				capital: `%${ keyword }%`
			},
			type: QueryTypes.SELECT
		});
        return results as VisaCapitalInterface[]
    }
}

export const newCapitalRepo = async(): Promise<CapitalRepoInterface>=>{
    return new CapitalRepo();
}