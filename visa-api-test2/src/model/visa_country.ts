import { Model, DataTypes } from "sequelize";
import newSequelize from "../infra/sequelize";
import VisaProduct, { VisaProductInterface } from "./visa_product";
import { Points, DiscountType, ImageLinkObject } from "./common";

export interface VisaCountryInterface {
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
    discountType: DiscountType;
    discount: number;
    nationality: string;
    visaRequirement: string;
    featured: boolean;
    photos: string | ImageLinkObject[];
    importantNotes?: string;
    faq?: string;
    status: boolean;
    points?: Points;
	visa_products?: VisaProductInterface[];
	searchID?: number;
    createdAt?: Date;
    updatedAt?: Date;
}

class VisaCountry extends Model implements VisaCountryInterface {
    public id?: number;
    public countryName!: string;
    public countryCode!: string;
    public currency!: string;
    public bookingCurrency!: string;
    public visaCountryCode!: string;
    public capital?: string;
    public localTime!: string;
    public telephoneCode?: string;
    public bankTime?: string;
    public exchangeRate?: string;
    public embassyAddress?: string;
    public lowestPrice!: number;
    public discountType!: DiscountType;
    public discount!: number;
    public nationality!: string;
    public visaRequirement!: string;
    public featured!: boolean;
    public photos!: string | ImageLinkObject[];
    public importantNotes?: string;
    public faq?: string;
    public status!: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
}

VisaCountry.init({
    id: {
        type: new DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    countryName:{
        type: new DataTypes.STRING,
        allowNull: false
    },
    countryCode: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    currency: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    bookingCurrency: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    visaCountryCode: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    capital: {
        type: new DataTypes.STRING,
        allowNull: true
    },
    telephoneCode: {
        type: new DataTypes.STRING,
        allowNull: true
    },
    localTime: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    bankTime: {
        type: new DataTypes.STRING,
        allowNull: true
    },
    exchangeRate: {
        type: new DataTypes.STRING,
        allowNull: true
    },
    embassyAddress: {
        type: new DataTypes.STRING,
        allowNull: true
    },
    lowestPrice: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    discountType: {
        type: new DataTypes.STRING,
        validate: {
            isIn: [[DiscountType.Flat, DiscountType.Percentage]]
        },
        allowNull: false
    },
    discount: {
        type: new DataTypes.DOUBLE(10,2),
        allowNull: false
    },
    nationality: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    visaRequirement: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    featured: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    photos: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    importantNotes: {
        type: new DataTypes.TEXT,
        allowNull: true
    },
    faq: {
        type: new DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: new DataTypes.INTEGER,
        allowNull: false
    }
},{
    tableName:"visa_country",
    freezeTableName: true,
    timestamps: false,
    underscored: false,
    sequelize: newSequelize(),
    modelName: "visa_country"
});

VisaCountry.hasMany(VisaProduct, {sourceKey: "id", foreignKey: "visaCountryId"});

export default VisaCountry;