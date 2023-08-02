export enum DiscountType {
    Flat = "Flat",
    Percentage = "Percentage"
}

export interface SearchQuery {
    visaCountryCode: string;
    entryDate: Date | string;
    exitDate?: Date | string;
    API_KEY?: string;
    travellers: number;
	nationality: string;
	userId?: number;
	ip?: string;
	platform?: string;
}

export interface SearchRecord {
    searchID?: number;
    productCode: string;
	visaType: string;
	price: number;
	userId?: number
}

export interface Points {
    earning: number;
    shared: number;
    shareLink: string;
}

export interface ImageLinkObject {
    srcLarge: string;
    srcMedium: string;
    srcThumb: string;
}

export enum ServiceType {
    Hotel = "Hotel",
    Flight = "Flight",
    Package = "Package",
    Tour = "Tour",
    Transfer = "Transfer",
    Visa = "Visa"
}

export enum DeviceKey {
    Android = "7C8ABC7DFB20B0D4528E532DA4DA664C7028E4AF",
    iOS = "362AC8ED9FABC0EFFEA1B8494DC6AC0D5E24CFA7"
}
  
export enum PaymentStatusType {
    Paid = "Paid",
    UnPaid = "UnPaid",
    Declined = "Declined",
    Cancelled = "Cancelled"
}

export enum RewardType {
    SPEND = "Spend",
    EARN = "Earn",
}
  
export enum DeviceType {
    Android = "Android",
    iOS = "iOS",
    Web = "Web"
}

export enum IPNRequestType {
    Success = "Success",
    Cancelled = "Cancelled",
    Declined = "Declined"
}

export enum BookingStatusType {
    Pending = "Pending",
    Confirm = "Confirm",
    Cancelled = "Cancelled",
    Processing = "Processing",
    Declined = "Declined"
}

export enum VisaStatusType {
    Processing = "Processing",
    Approved = "Approved",
    Rejected = "Rejected",
    Pending = "Pending",
    Completed = "Completed",
    Cancelled = "Cancelled"
}

export enum VisaType {
    EVisa = "E-Visa",
    StickerVisa = "Sticker Visa"
}

export enum PrimaryContactType {
    Yes = "Yes",
    No = "No"
}

export interface PaymentUpdateDataInterface {
    bookingStatus?: BookingStatusType;
    paymentStatus?: PaymentStatusType;
}

export interface PaymentResponse {
    url: string;
    message?: string;
    success?: boolean;
}

export interface PaymentData {
    amount: number;
    booking_id?: number | string;
    gateway: string;
    service: string;
    card_series?: string;
    customerId: string;
    customerName: string;
}

export interface PaymentGatewayResponse {
    success: boolean;
    code: number;
    message: string;
    data: PaymentGateway[];
}

export interface PaymentGateway {
    id: string;
    name: string;
    code: string;
    currency: {
        code: string;
        conversion: {
            rate: number;
            code: string;
        };
    };
    charge: number;
    logo: {
        small: string;
        medium: string;
        large: string;
    };
    series: Array<{
        id: string;
        length: number;
        series: string;
	}>;
	coupon_applicable?: boolean;
    earn_tripcoin_applicable?: boolean;
    redeem_tripcoin_applicable?: boolean;
}