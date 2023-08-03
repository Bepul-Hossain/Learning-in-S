// import { Model, DataTypes } from "sequelize";
// import newSequelize from "../infra/sequelize";

export interface VisaCapitalInterface{
    id?:number;
    countryName: string;
    countryCode: string;
    capital?: string;

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

// export default VisaCapital;