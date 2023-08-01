import { Model, DataTypes, } from "sequelize";
import newSequelize from "../infra/sequelize";
import { DiscountType } from "./common";


export interface VisaProductInterface {
    id?: number;
    productCode: string;
    title: string;
    type: string;
    validityDays?: number;
    maxStayDays: number;
    visaFee: number;
    processingFee: number;
    courierCharge: number;
    specialNote?: string;
    discount: number;
    discountType: DiscountType;
    discountPrice?: number;
    visaPrepMinDays: number;
    cancellationPolicy: string;
    cancelCharge: number;
    requiredDocs: string;
    createdBy?: number;
    updatedBy?: number;
    bookingCurrency: string;
    visaCountryId: number;
	status: boolean;
	gatewayCurrency?: string;
    createdAt?: Date;
    updatedAt?: Date;
    [key: string]: any;
}

class VisaProduct extends Model implements VisaProductInterface {
    public id?: number;
    public productCode!: string;
    public title!: string;
    public type!: string;
    public validityDays?: number;
    public maxStayDays!: number;
    public visaFee!: number;
    public processingFee!: number;
    public courierCharge!: number;
    public specialNote?: string;
    public discount!: number;
    public discountType!: DiscountType;
    public visaPrepMinDays!: number;
    public cancellationPolicy!: string;
    public cancelCharge!: number;
    public requiredDocs!: string;
    public createdBy?: number;
    public updatedBy?: number;
    public bookingCurrency!: string;
    public visaCountryId!: number;
    public status!: boolean;
    public createdAt?: Date;
    public updatedAt?: Date;
}

VisaProduct.init({
    id: {
        type: new DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productCode: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    title: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    type: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    validityDays: {
        type: new DataTypes.INTEGER,
        allowNull: true
    },
    maxStayDays: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    visaFee: {
        type: new DataTypes.DOUBLE(10, 2),
        allowNull: false
    },
    processingFee: {
        type: new DataTypes.DOUBLE(10, 2),
        allowNull: false
    },
    courierCharge: {
        type: new DataTypes.DOUBLE(10, 2),
        allowNull: false
    },
    specialNote: {
        type: new DataTypes.TEXT,
        allowNull: true
    },
    discount: {
        type: new DataTypes.DOUBLE(10, 2),
        allowNull: false
    },
    discountType: {
        type: new DataTypes.STRING,
        validate: {
            isIn: [[DiscountType.Flat, DiscountType.Percentage]]
        },
        allowNull: false
    },
    visaPrepMinDays: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    cancellationPolicy: {
        type: new DataTypes.TEXT,
        allowNull: false
    },
    cancelCharge: {
        type: new DataTypes.DOUBLE(10, 2),
        allowNull: false
    },
    requiredDocs: {
        type: new DataTypes.TEXT,
        allowNull: false
    },
    createdBy: {
        type: new DataTypes.INTEGER,
        allowNull: true
    },
    updatedBy: {
        type: new DataTypes.INTEGER,
        allowNull: true
    },
    bookingCurrency: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    visaCountryId: {
        type: new DataTypes.INTEGER,
        allowNull: false
    },
    status: {
        type: new DataTypes.INTEGER,
        allowNull: false
    }
    
}, {
    tableName: "visa_product",
    freezeTableName: true,
    timestamps: false,
    underscored: false,
    sequelize: newSequelize(),
    modelName: "visa_products"
});


export default VisaProduct;