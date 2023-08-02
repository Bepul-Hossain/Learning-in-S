// import { Model, DataTypes } from "sequelize";
// import newSequelize from "../infra/sequelize";

export interface VisaCapitalInterface{
    id?:number;
    countryName: string;
    countryCode: string;
    currency: string;
    bookingCurrency: string;
    visaCountryCode: string;
    capital?: string;
    localTime: string;
    telephoneCode?: string;
    bankTime?: string;
    exchangeRate?: string;
    embassyAddress?: string;
    lowestPrice: number;
    discount: number;
    nationality: string;
    visaRequirement: string;
    featured: boolean;
    importantNotes?: string;
    faq?: string;
    status: boolean;
	searchID?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

// class VisaCapital extends Model implements VisaCapitalInterface{
//     public id?: number;
//     public countryName!: string;
//     public countryCode!: string;
//     capital?: string;
// }

// VisaCapital.init({
//     id:{
//         type: new DataTypes.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     countryName: {
//         type: new DataTypes.STRING,
//         allowNull: false
//     },
//     countryCode: {
//         type: new DataTypes.STRING,
//         allowNull: false
//     },
//     capital: {
//         type: new DataTypes.STRING,
//         allowNull: true
//     }
// },{
//     // tableName:"visa_country",
//     // freezeTableName: true,
//     // timestamps: false,
//     // underscored: false,
//     sequelize: newSequelize(),
//     // modelName: "visa_country"
// })