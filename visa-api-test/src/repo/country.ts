import VisaCountry, { VisaCountryInterface } from "../model/visa_country";

import { Op, Sequelize, QueryTypes } from "sequelize";
import newSequelize from "../infra/sequelize";

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
		return results as VisaCountryInterface[];
		// This block is comment out due to child model not supported group by query
		
        // return VisaCountry.findAll({
        //     where: {
        //         countryName: { [Op.substring]: keyword },
        //         status: true
        //     },
        //     include: [{ model: VisaProduct, where: {
        //         status: true
        //     },
        //     attributes:[[Sequelize.fn("min", Sequelize.col("visaPrepMinDays")), "visaPrepMinDays"]],
        //     }],
        //     attributes: ["visaCountryCode", "countryName", "visaRequirement"]
        // });
    }

    public async popular(featuredType: boolean, limit: number): Promise<VisaCountryInterface[]> {
		const [results] = await newSequelize().query(`SELECT c.visaCountryCode, c.countryName, c.visaRequirement,
        MIN(p.visaPrepMinDays) as visaPrepMinDays FROM visa_country AS c
        INNER JOIN visa_product AS p ON c.id = p.visaCountryId
        WHERE c.status=true AND c.featured=${ featuredType } AND p.status=true GROUP BY p.visaCountryId LIMIT ${ limit }`);
		return results as VisaCountryInterface[];
		// This block is comment out due to child model not supported group by query

        // return VisaCountry.findAll({
        //     limit: limit,
        //     where: {
        //         featured: featuredType,
        //         status: true
        //     },
        //     attributes: ["visaCountryCode", "countryName", "visaRequirement"]
        // });
    }
}

export const newCountryRepo = async (): Promise<CountryRepoInterface> => {
    return new CountryRepo();
};