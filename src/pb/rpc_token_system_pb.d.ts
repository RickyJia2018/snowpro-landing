import * as jspb from 'google-protobuf'

import * as rpc_token_product_pb from './rpc_token_product_pb'; // proto import: "rpc_token_product.proto"


export class GetTokenProductsRequest extends jspb.Message {
  getIncludeInactive(): boolean;
  setIncludeInactive(value: boolean): GetTokenProductsRequest;
  hasIncludeInactive(): boolean;
  clearIncludeInactive(): GetTokenProductsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenProductsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenProductsRequest): GetTokenProductsRequest.AsObject;
  static serializeBinaryToWriter(message: GetTokenProductsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenProductsRequest;
  static deserializeBinaryFromReader(message: GetTokenProductsRequest, reader: jspb.BinaryReader): GetTokenProductsRequest;
}

export namespace GetTokenProductsRequest {
  export type AsObject = {
    includeInactive?: boolean;
  };

  export enum IncludeInactiveCase {
    _INCLUDE_INACTIVE_NOT_SET = 0,
    INCLUDE_INACTIVE = 1,
  }
}

export class GetTokenProductsResponse extends jspb.Message {
  getProductsList(): Array<rpc_token_product_pb.TokenProduct>;
  setProductsList(value: Array<rpc_token_product_pb.TokenProduct>): GetTokenProductsResponse;
  clearProductsList(): GetTokenProductsResponse;
  addProducts(value?: rpc_token_product_pb.TokenProduct, index?: number): rpc_token_product_pb.TokenProduct;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTokenProductsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTokenProductsResponse): GetTokenProductsResponse.AsObject;
  static serializeBinaryToWriter(message: GetTokenProductsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTokenProductsResponse;
  static deserializeBinaryFromReader(message: GetTokenProductsResponse, reader: jspb.BinaryReader): GetTokenProductsResponse;
}

export namespace GetTokenProductsResponse {
  export type AsObject = {
    productsList: Array<rpc_token_product_pb.TokenProduct.AsObject>;
  };
}

export class InitiateTokenPurchaseRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): InitiateTokenPurchaseRequest;

  getPaymentType(): PaymentType;
  setPaymentType(value: PaymentType): InitiateTokenPurchaseRequest;

  getSuccessUrl(): string;
  setSuccessUrl(value: string): InitiateTokenPurchaseRequest;
  hasSuccessUrl(): boolean;
  clearSuccessUrl(): InitiateTokenPurchaseRequest;

  getCancelUrl(): string;
  setCancelUrl(value: string): InitiateTokenPurchaseRequest;
  hasCancelUrl(): boolean;
  clearCancelUrl(): InitiateTokenPurchaseRequest;

  getAgreedTokenPolicy(): boolean;
  setAgreedTokenPolicy(value: boolean): InitiateTokenPurchaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateTokenPurchaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateTokenPurchaseRequest): InitiateTokenPurchaseRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateTokenPurchaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateTokenPurchaseRequest;
  static deserializeBinaryFromReader(message: InitiateTokenPurchaseRequest, reader: jspb.BinaryReader): InitiateTokenPurchaseRequest;
}

export namespace InitiateTokenPurchaseRequest {
  export type AsObject = {
    productId: string;
    paymentType: PaymentType;
    successUrl?: string;
    cancelUrl?: string;
    agreedTokenPolicy: boolean;
  };

  export enum SuccessUrlCase {
    _SUCCESS_URL_NOT_SET = 0,
    SUCCESS_URL = 3,
  }

  export enum CancelUrlCase {
    _CANCEL_URL_NOT_SET = 0,
    CANCEL_URL = 4,
  }
}

export class InitiateTokenPurchaseResponse extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): InitiateTokenPurchaseResponse;

  getStripeCheckoutUrl(): string;
  setStripeCheckoutUrl(value: string): InitiateTokenPurchaseResponse;
  hasStripeCheckoutUrl(): boolean;
  clearStripeCheckoutUrl(): InitiateTokenPurchaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateTokenPurchaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateTokenPurchaseResponse): InitiateTokenPurchaseResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateTokenPurchaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateTokenPurchaseResponse;
  static deserializeBinaryFromReader(message: InitiateTokenPurchaseResponse, reader: jspb.BinaryReader): InitiateTokenPurchaseResponse;
}

export namespace InitiateTokenPurchaseResponse {
  export type AsObject = {
    orderId: string;
    stripeCheckoutUrl?: string;
  };

  export enum StripeCheckoutUrlCase {
    _STRIPE_CHECKOUT_URL_NOT_SET = 0,
    STRIPE_CHECKOUT_URL = 2,
  }
}

export class VerifyReceiptRequest extends jspb.Message {
  getTransactionId(): string;
  setTransactionId(value: string): VerifyReceiptRequest;

  getPaymentNetwork(): string;
  setPaymentNetwork(value: string): VerifyReceiptRequest;

  getPaymentType(): PaymentType;
  setPaymentType(value: PaymentType): VerifyReceiptRequest;

  getProductId(): string;
  setProductId(value: string): VerifyReceiptRequest;

  getPurchaseToken(): string;
  setPurchaseToken(value: string): VerifyReceiptRequest;

  getOrderId(): string;
  setOrderId(value: string): VerifyReceiptRequest;

  getBillingName(): string;
  setBillingName(value: string): VerifyReceiptRequest;

  getBillingAddress(): string;
  setBillingAddress(value: string): VerifyReceiptRequest;

  getTotalPrice(): number;
  setTotalPrice(value: number): VerifyReceiptRequest;

  getActualPayment(): string;
  setActualPayment(value: string): VerifyReceiptRequest;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): VerifyReceiptRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyReceiptRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyReceiptRequest): VerifyReceiptRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyReceiptRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyReceiptRequest;
  static deserializeBinaryFromReader(message: VerifyReceiptRequest, reader: jspb.BinaryReader): VerifyReceiptRequest;
}

export namespace VerifyReceiptRequest {
  export type AsObject = {
    transactionId: string;
    paymentNetwork: string;
    paymentType: PaymentType;
    productId: string;
    purchaseToken: string;
    orderId: string;
    billingName: string;
    billingAddress: string;
    totalPrice: number;
    actualPayment: string;
    currencyCode: string;
  };
}

export class VerifyReceiptResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): VerifyReceiptResponse;

  getMessage(): string;
  setMessage(value: string): VerifyReceiptResponse;

  getActualPaidPriceInCents(): number;
  setActualPaidPriceInCents(value: number): VerifyReceiptResponse;

  getPlatformFeeInCents(): number;
  setPlatformFeeInCents(value: number): VerifyReceiptResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyReceiptResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyReceiptResponse): VerifyReceiptResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyReceiptResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyReceiptResponse;
  static deserializeBinaryFromReader(message: VerifyReceiptResponse, reader: jspb.BinaryReader): VerifyReceiptResponse;
}

export namespace VerifyReceiptResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    actualPaidPriceInCents: number;
    platformFeeInCents: number;
  };
}

export class CancelTokenPurchaseRequest extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): CancelTokenPurchaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTokenPurchaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTokenPurchaseRequest): CancelTokenPurchaseRequest.AsObject;
  static serializeBinaryToWriter(message: CancelTokenPurchaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTokenPurchaseRequest;
  static deserializeBinaryFromReader(message: CancelTokenPurchaseRequest, reader: jspb.BinaryReader): CancelTokenPurchaseRequest;
}

export namespace CancelTokenPurchaseRequest {
  export type AsObject = {
    orderId: string;
  };
}

export class CancelTokenPurchaseResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelTokenPurchaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelTokenPurchaseResponse): CancelTokenPurchaseResponse.AsObject;
  static serializeBinaryToWriter(message: CancelTokenPurchaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelTokenPurchaseResponse;
  static deserializeBinaryFromReader(message: CancelTokenPurchaseResponse, reader: jspb.BinaryReader): CancelTokenPurchaseResponse;
}

export namespace CancelTokenPurchaseResponse {
  export type AsObject = {
  };
}

export class LinkPaypalAccountRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): LinkPaypalAccountRequest;

  getPassword(): string;
  setPassword(value: string): LinkPaypalAccountRequest;

  getState(): string;
  setState(value: string): LinkPaypalAccountRequest;
  hasState(): boolean;
  clearState(): LinkPaypalAccountRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): LinkPaypalAccountRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): LinkPaypalAccountRequest;

  getOauthToken(): string;
  setOauthToken(value: string): LinkPaypalAccountRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): LinkPaypalAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LinkPaypalAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LinkPaypalAccountRequest): LinkPaypalAccountRequest.AsObject;
  static serializeBinaryToWriter(message: LinkPaypalAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LinkPaypalAccountRequest;
  static deserializeBinaryFromReader(message: LinkPaypalAccountRequest, reader: jspb.BinaryReader): LinkPaypalAccountRequest;
}

export namespace LinkPaypalAccountRequest {
  export type AsObject = {
    code: string;
    password: string;
    state?: string;
    oauthProvider?: string;
    oauthToken?: string;
  };

  export enum StateCase {
    _STATE_NOT_SET = 0,
    STATE = 3,
  }

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 4,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 5,
  }
}

export class GetLinkPaypalUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GetLinkPaypalUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLinkPaypalUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLinkPaypalUrlResponse): GetLinkPaypalUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GetLinkPaypalUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLinkPaypalUrlResponse;
  static deserializeBinaryFromReader(message: GetLinkPaypalUrlResponse, reader: jspb.BinaryReader): GetLinkPaypalUrlResponse;
}

export namespace GetLinkPaypalUrlResponse {
  export type AsObject = {
    url: string;
  };
}

export class RequestPayoutRequest extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): RequestPayoutRequest;

  getPassword(): string;
  setPassword(value: string): RequestPayoutRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): RequestPayoutRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): RequestPayoutRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): RequestPayoutRequest;

  getOauthToken(): string;
  setOauthToken(value: string): RequestPayoutRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): RequestPayoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPayoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPayoutRequest): RequestPayoutRequest.AsObject;
  static serializeBinaryToWriter(message: RequestPayoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPayoutRequest;
  static deserializeBinaryFromReader(message: RequestPayoutRequest, reader: jspb.BinaryReader): RequestPayoutRequest;
}

export namespace RequestPayoutRequest {
  export type AsObject = {
    amount: number;
    password: string;
    idempotencyKey: string;
    oauthProvider?: string;
    oauthToken?: string;
  };

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 4,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 5,
  }
}

export class RequestPayoutResponse extends jspb.Message {
  getPayoutId(): number;
  setPayoutId(value: number): RequestPayoutResponse;

  getStatus(): string;
  setStatus(value: string): RequestPayoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestPayoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestPayoutResponse): RequestPayoutResponse.AsObject;
  static serializeBinaryToWriter(message: RequestPayoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestPayoutResponse;
  static deserializeBinaryFromReader(message: RequestPayoutResponse, reader: jspb.BinaryReader): RequestPayoutResponse;
}

export namespace RequestPayoutResponse {
  export type AsObject = {
    payoutId: number;
    status: string;
  };
}

export class PayoutInfo extends jspb.Message {
  getId(): number;
  setId(value: number): PayoutInfo;

  getUserId(): number;
  setUserId(value: number): PayoutInfo;

  getAmount(): number;
  setAmount(value: number): PayoutInfo;

  getCurrency(): string;
  setCurrency(value: string): PayoutInfo;

  getPayoutMethod(): string;
  setPayoutMethod(value: string): PayoutInfo;

  getPaypalBatchId(): string;
  setPaypalBatchId(value: string): PayoutInfo;

  getPaypalReceiver(): string;
  setPaypalReceiver(value: string): PayoutInfo;

  getStatus(): string;
  setStatus(value: string): PayoutInfo;

  getNote(): string;
  setNote(value: string): PayoutInfo;

  getCreatedAt(): string;
  setCreatedAt(value: string): PayoutInfo;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): PayoutInfo;

  getStripeTransferId(): string;
  setStripeTransferId(value: string): PayoutInfo;

  getWiseTransferId(): string;
  setWiseTransferId(value: string): PayoutInfo;

  getFeeAmount(): number;
  setFeeAmount(value: number): PayoutInfo;

  getNetAmount(): number;
  setNetAmount(value: number): PayoutInfo;

  getFeeRate(): string;
  setFeeRate(value: string): PayoutInfo;

  getStripeId(): string;
  setStripeId(value: string): PayoutInfo;

  getTaxResidencySnapshot(): string;
  setTaxResidencySnapshot(value: string): PayoutInfo;

  getAgreementVersion(): string;
  setAgreementVersion(value: string): PayoutInfo;

  getAgreementSignedAt(): string;
  setAgreementSignedAt(value: string): PayoutInfo;

  getPaypalItemId(): string;
  setPaypalItemId(value: string): PayoutInfo;

  getReturnedAmount(): number;
  setReturnedAmount(value: number): PayoutInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayoutInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PayoutInfo): PayoutInfo.AsObject;
  static serializeBinaryToWriter(message: PayoutInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayoutInfo;
  static deserializeBinaryFromReader(message: PayoutInfo, reader: jspb.BinaryReader): PayoutInfo;
}

export namespace PayoutInfo {
  export type AsObject = {
    id: number;
    userId: number;
    amount: number;
    currency: string;
    payoutMethod: string;
    paypalBatchId: string;
    paypalReceiver: string;
    status: string;
    note: string;
    createdAt: string;
    updatedAt: string;
    stripeTransferId: string;
    wiseTransferId: string;
    feeAmount: number;
    netAmount: number;
    feeRate: string;
    stripeId: string;
    taxResidencySnapshot: string;
    agreementVersion: string;
    agreementSignedAt: string;
    paypalItemId: string;
    returnedAmount: number;
  };
}

export class GetPayoutListRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): GetPayoutListRequest;

  getPageSize(): number;
  setPageSize(value: number): GetPayoutListRequest;

  getUserId(): number;
  setUserId(value: number): GetPayoutListRequest;
  hasUserId(): boolean;
  clearUserId(): GetPayoutListRequest;

  getStatus(): string;
  setStatus(value: string): GetPayoutListRequest;
  hasStatus(): boolean;
  clearStatus(): GetPayoutListRequest;

  getYear(): number;
  setYear(value: number): GetPayoutListRequest;
  hasYear(): boolean;
  clearYear(): GetPayoutListRequest;

  getMonth(): number;
  setMonth(value: number): GetPayoutListRequest;
  hasMonth(): boolean;
  clearMonth(): GetPayoutListRequest;

  getPayoutMethod(): string;
  setPayoutMethod(value: string): GetPayoutListRequest;
  hasPayoutMethod(): boolean;
  clearPayoutMethod(): GetPayoutListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPayoutListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPayoutListRequest): GetPayoutListRequest.AsObject;
  static serializeBinaryToWriter(message: GetPayoutListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPayoutListRequest;
  static deserializeBinaryFromReader(message: GetPayoutListRequest, reader: jspb.BinaryReader): GetPayoutListRequest;
}

export namespace GetPayoutListRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    userId?: number;
    status?: string;
    year?: number;
    month?: number;
    payoutMethod?: string;
  };

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 3,
  }

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 4,
  }

  export enum YearCase {
    _YEAR_NOT_SET = 0,
    YEAR = 5,
  }

  export enum MonthCase {
    _MONTH_NOT_SET = 0,
    MONTH = 6,
  }

  export enum PayoutMethodCase {
    _PAYOUT_METHOD_NOT_SET = 0,
    PAYOUT_METHOD = 7,
  }
}

export class GetPayoutListResponse extends jspb.Message {
  getPayoutsList(): Array<PayoutInfo>;
  setPayoutsList(value: Array<PayoutInfo>): GetPayoutListResponse;
  clearPayoutsList(): GetPayoutListResponse;
  addPayouts(value?: PayoutInfo, index?: number): PayoutInfo;

  getTotalCount(): number;
  setTotalCount(value: number): GetPayoutListResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPayoutListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPayoutListResponse): GetPayoutListResponse.AsObject;
  static serializeBinaryToWriter(message: GetPayoutListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPayoutListResponse;
  static deserializeBinaryFromReader(message: GetPayoutListResponse, reader: jspb.BinaryReader): GetPayoutListResponse;
}

export namespace GetPayoutListResponse {
  export type AsObject = {
    payoutsList: Array<PayoutInfo.AsObject>;
    totalCount: number;
  };
}

export class EstimatePayoutFeeRequest extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): EstimatePayoutFeeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimatePayoutFeeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EstimatePayoutFeeRequest): EstimatePayoutFeeRequest.AsObject;
  static serializeBinaryToWriter(message: EstimatePayoutFeeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimatePayoutFeeRequest;
  static deserializeBinaryFromReader(message: EstimatePayoutFeeRequest, reader: jspb.BinaryReader): EstimatePayoutFeeRequest;
}

export namespace EstimatePayoutFeeRequest {
  export type AsObject = {
    amount: number;
  };
}

export class EstimatePayoutFeeResponse extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): EstimatePayoutFeeResponse;

  getFeeAmount(): number;
  setFeeAmount(value: number): EstimatePayoutFeeResponse;

  getNetAmount(): number;
  setNetAmount(value: number): EstimatePayoutFeeResponse;

  getFeeRate(): string;
  setFeeRate(value: string): EstimatePayoutFeeResponse;

  getPayoutMethod(): string;
  setPayoutMethod(value: string): EstimatePayoutFeeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EstimatePayoutFeeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EstimatePayoutFeeResponse): EstimatePayoutFeeResponse.AsObject;
  static serializeBinaryToWriter(message: EstimatePayoutFeeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EstimatePayoutFeeResponse;
  static deserializeBinaryFromReader(message: EstimatePayoutFeeResponse, reader: jspb.BinaryReader): EstimatePayoutFeeResponse;
}

export namespace EstimatePayoutFeeResponse {
  export type AsObject = {
    amount: number;
    feeAmount: number;
    netAmount: number;
    feeRate: string;
    payoutMethod: string;
  };
}

export class ApprovePayoutRequest extends jspb.Message {
  getPayoutId(): number;
  setPayoutId(value: number): ApprovePayoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApprovePayoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApprovePayoutRequest): ApprovePayoutRequest.AsObject;
  static serializeBinaryToWriter(message: ApprovePayoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApprovePayoutRequest;
  static deserializeBinaryFromReader(message: ApprovePayoutRequest, reader: jspb.BinaryReader): ApprovePayoutRequest;
}

export namespace ApprovePayoutRequest {
  export type AsObject = {
    payoutId: number;
  };
}

export class RejectPayoutRequest extends jspb.Message {
  getPayoutId(): number;
  setPayoutId(value: number): RejectPayoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RejectPayoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RejectPayoutRequest): RejectPayoutRequest.AsObject;
  static serializeBinaryToWriter(message: RejectPayoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RejectPayoutRequest;
  static deserializeBinaryFromReader(message: RejectPayoutRequest, reader: jspb.BinaryReader): RejectPayoutRequest;
}

export namespace RejectPayoutRequest {
  export type AsObject = {
    payoutId: number;
  };
}

export class BindWisePayoutMethodRequest extends jspb.Message {
  getAccountHolderName(): string;
  setAccountHolderName(value: string): BindWisePayoutMethodRequest;

  getCountryCode(): string;
  setCountryCode(value: string): BindWisePayoutMethodRequest;

  getCurrency(): string;
  setCurrency(value: string): BindWisePayoutMethodRequest;

  getBankCode(): string;
  setBankCode(value: string): BindWisePayoutMethodRequest;

  getAccountNumber(): string;
  setAccountNumber(value: string): BindWisePayoutMethodRequest;

  getIsNotUsCaResident(): boolean;
  setIsNotUsCaResident(value: boolean): BindWisePayoutMethodRequest;

  getPassword(): string;
  setPassword(value: string): BindWisePayoutMethodRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): BindWisePayoutMethodRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): BindWisePayoutMethodRequest;

  getOauthToken(): string;
  setOauthToken(value: string): BindWisePayoutMethodRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): BindWisePayoutMethodRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindWisePayoutMethodRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BindWisePayoutMethodRequest): BindWisePayoutMethodRequest.AsObject;
  static serializeBinaryToWriter(message: BindWisePayoutMethodRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindWisePayoutMethodRequest;
  static deserializeBinaryFromReader(message: BindWisePayoutMethodRequest, reader: jspb.BinaryReader): BindWisePayoutMethodRequest;
}

export namespace BindWisePayoutMethodRequest {
  export type AsObject = {
    accountHolderName: string;
    countryCode: string;
    currency: string;
    bankCode: string;
    accountNumber: string;
    isNotUsCaResident: boolean;
    password: string;
    oauthProvider?: string;
    oauthToken?: string;
  };

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 8,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 9,
  }
}

export class GetStripeOnboardingUrlRequest extends jspb.Message {
  getCountry(): string;
  setCountry(value: string): GetStripeOnboardingUrlRequest;

  getEmail(): string;
  setEmail(value: string): GetStripeOnboardingUrlRequest;

  getReturnUrl(): string;
  setReturnUrl(value: string): GetStripeOnboardingUrlRequest;
  hasReturnUrl(): boolean;
  clearReturnUrl(): GetStripeOnboardingUrlRequest;

  getRefreshUrl(): string;
  setRefreshUrl(value: string): GetStripeOnboardingUrlRequest;
  hasRefreshUrl(): boolean;
  clearRefreshUrl(): GetStripeOnboardingUrlRequest;

  getPassword(): string;
  setPassword(value: string): GetStripeOnboardingUrlRequest;

  getIsCaTaxResident(): boolean;
  setIsCaTaxResident(value: boolean): GetStripeOnboardingUrlRequest;
  hasIsCaTaxResident(): boolean;
  clearIsCaTaxResident(): GetStripeOnboardingUrlRequest;

  getIsUsTaxResident(): boolean;
  setIsUsTaxResident(value: boolean): GetStripeOnboardingUrlRequest;
  hasIsUsTaxResident(): boolean;
  clearIsUsTaxResident(): GetStripeOnboardingUrlRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): GetStripeOnboardingUrlRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): GetStripeOnboardingUrlRequest;

  getOauthToken(): string;
  setOauthToken(value: string): GetStripeOnboardingUrlRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): GetStripeOnboardingUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStripeOnboardingUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetStripeOnboardingUrlRequest): GetStripeOnboardingUrlRequest.AsObject;
  static serializeBinaryToWriter(message: GetStripeOnboardingUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStripeOnboardingUrlRequest;
  static deserializeBinaryFromReader(message: GetStripeOnboardingUrlRequest, reader: jspb.BinaryReader): GetStripeOnboardingUrlRequest;
}

export namespace GetStripeOnboardingUrlRequest {
  export type AsObject = {
    country: string;
    email: string;
    returnUrl?: string;
    refreshUrl?: string;
    password: string;
    isCaTaxResident?: boolean;
    isUsTaxResident?: boolean;
    oauthProvider?: string;
    oauthToken?: string;
  };

  export enum ReturnUrlCase {
    _RETURN_URL_NOT_SET = 0,
    RETURN_URL = 3,
  }

  export enum RefreshUrlCase {
    _REFRESH_URL_NOT_SET = 0,
    REFRESH_URL = 4,
  }

  export enum IsCaTaxResidentCase {
    _IS_CA_TAX_RESIDENT_NOT_SET = 0,
    IS_CA_TAX_RESIDENT = 6,
  }

  export enum IsUsTaxResidentCase {
    _IS_US_TAX_RESIDENT_NOT_SET = 0,
    IS_US_TAX_RESIDENT = 7,
  }

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 8,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 9,
  }
}

export class GetStripeOnboardingUrlResponse extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): GetStripeOnboardingUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetStripeOnboardingUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetStripeOnboardingUrlResponse): GetStripeOnboardingUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GetStripeOnboardingUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetStripeOnboardingUrlResponse;
  static deserializeBinaryFromReader(message: GetStripeOnboardingUrlResponse, reader: jspb.BinaryReader): GetStripeOnboardingUrlResponse;
}

export namespace GetStripeOnboardingUrlResponse {
  export type AsObject = {
    url: string;
  };
}

export class GetPayoutBatchSummaryRequest extends jspb.Message {
  getYear(): number;
  setYear(value: number): GetPayoutBatchSummaryRequest;
  hasYear(): boolean;
  clearYear(): GetPayoutBatchSummaryRequest;

  getMonth(): number;
  setMonth(value: number): GetPayoutBatchSummaryRequest;
  hasMonth(): boolean;
  clearMonth(): GetPayoutBatchSummaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPayoutBatchSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPayoutBatchSummaryRequest): GetPayoutBatchSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetPayoutBatchSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPayoutBatchSummaryRequest;
  static deserializeBinaryFromReader(message: GetPayoutBatchSummaryRequest, reader: jspb.BinaryReader): GetPayoutBatchSummaryRequest;
}

export namespace GetPayoutBatchSummaryRequest {
  export type AsObject = {
    year?: number;
    month?: number;
  };

  export enum YearCase {
    _YEAR_NOT_SET = 0,
    YEAR = 1,
  }

  export enum MonthCase {
    _MONTH_NOT_SET = 0,
    MONTH = 2,
  }
}

export class PayoutMethodSummary extends jspb.Message {
  getPayoutMethod(): string;
  setPayoutMethod(value: string): PayoutMethodSummary;

  getCount(): number;
  setCount(value: number): PayoutMethodSummary;

  getTotalAmount(): number;
  setTotalAmount(value: number): PayoutMethodSummary;

  getCurrency(): string;
  setCurrency(value: string): PayoutMethodSummary;

  getTotalNetAmount(): number;
  setTotalNetAmount(value: number): PayoutMethodSummary;

  getTotalFeeAmount(): number;
  setTotalFeeAmount(value: number): PayoutMethodSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PayoutMethodSummary.AsObject;
  static toObject(includeInstance: boolean, msg: PayoutMethodSummary): PayoutMethodSummary.AsObject;
  static serializeBinaryToWriter(message: PayoutMethodSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PayoutMethodSummary;
  static deserializeBinaryFromReader(message: PayoutMethodSummary, reader: jspb.BinaryReader): PayoutMethodSummary;
}

export namespace PayoutMethodSummary {
  export type AsObject = {
    payoutMethod: string;
    count: number;
    totalAmount: number;
    currency: string;
    totalNetAmount: number;
    totalFeeAmount: number;
  };
}

export class GetPayoutBatchSummaryResponse extends jspb.Message {
  getSummariesList(): Array<PayoutMethodSummary>;
  setSummariesList(value: Array<PayoutMethodSummary>): GetPayoutBatchSummaryResponse;
  clearSummariesList(): GetPayoutBatchSummaryResponse;
  addSummaries(value?: PayoutMethodSummary, index?: number): PayoutMethodSummary;

  getYear(): number;
  setYear(value: number): GetPayoutBatchSummaryResponse;

  getMonth(): number;
  setMonth(value: number): GetPayoutBatchSummaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPayoutBatchSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPayoutBatchSummaryResponse): GetPayoutBatchSummaryResponse.AsObject;
  static serializeBinaryToWriter(message: GetPayoutBatchSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPayoutBatchSummaryResponse;
  static deserializeBinaryFromReader(message: GetPayoutBatchSummaryResponse, reader: jspb.BinaryReader): GetPayoutBatchSummaryResponse;
}

export namespace GetPayoutBatchSummaryResponse {
  export type AsObject = {
    summariesList: Array<PayoutMethodSummary.AsObject>;
    year: number;
    month: number;
  };
}

export class ExecuteBatchPayoutRequest extends jspb.Message {
  getPayoutMethod(): string;
  setPayoutMethod(value: string): ExecuteBatchPayoutRequest;

  getYear(): number;
  setYear(value: number): ExecuteBatchPayoutRequest;
  hasYear(): boolean;
  clearYear(): ExecuteBatchPayoutRequest;

  getMonth(): number;
  setMonth(value: number): ExecuteBatchPayoutRequest;
  hasMonth(): boolean;
  clearMonth(): ExecuteBatchPayoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBatchPayoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBatchPayoutRequest): ExecuteBatchPayoutRequest.AsObject;
  static serializeBinaryToWriter(message: ExecuteBatchPayoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBatchPayoutRequest;
  static deserializeBinaryFromReader(message: ExecuteBatchPayoutRequest, reader: jspb.BinaryReader): ExecuteBatchPayoutRequest;
}

export namespace ExecuteBatchPayoutRequest {
  export type AsObject = {
    payoutMethod: string;
    year?: number;
    month?: number;
  };

  export enum YearCase {
    _YEAR_NOT_SET = 0,
    YEAR = 2,
  }

  export enum MonthCase {
    _MONTH_NOT_SET = 0,
    MONTH = 3,
  }
}

export class FailedPayoutDetail extends jspb.Message {
  getPayoutId(): number;
  setPayoutId(value: number): FailedPayoutDetail;

  getUserId(): number;
  setUserId(value: number): FailedPayoutDetail;

  getErrorMessage(): string;
  setErrorMessage(value: string): FailedPayoutDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FailedPayoutDetail.AsObject;
  static toObject(includeInstance: boolean, msg: FailedPayoutDetail): FailedPayoutDetail.AsObject;
  static serializeBinaryToWriter(message: FailedPayoutDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FailedPayoutDetail;
  static deserializeBinaryFromReader(message: FailedPayoutDetail, reader: jspb.BinaryReader): FailedPayoutDetail;
}

export namespace FailedPayoutDetail {
  export type AsObject = {
    payoutId: number;
    userId: number;
    errorMessage: string;
  };
}

export class ExecuteBatchPayoutResponse extends jspb.Message {
  getSuccessCount(): number;
  setSuccessCount(value: number): ExecuteBatchPayoutResponse;

  getFailedCount(): number;
  setFailedCount(value: number): ExecuteBatchPayoutResponse;

  getTotalAmount(): number;
  setTotalAmount(value: number): ExecuteBatchPayoutResponse;

  getFailedDetailsList(): Array<FailedPayoutDetail>;
  setFailedDetailsList(value: Array<FailedPayoutDetail>): ExecuteBatchPayoutResponse;
  clearFailedDetailsList(): ExecuteBatchPayoutResponse;
  addFailedDetails(value?: FailedPayoutDetail, index?: number): FailedPayoutDetail;

  getTotalNetAmount(): number;
  setTotalNetAmount(value: number): ExecuteBatchPayoutResponse;

  getTotalFeeAmount(): number;
  setTotalFeeAmount(value: number): ExecuteBatchPayoutResponse;

  getExternalPendingCount(): number;
  setExternalPendingCount(value: number): ExecuteBatchPayoutResponse;

  getBatchId(): number;
  setBatchId(value: number): ExecuteBatchPayoutResponse;

  getBatchStatus(): string;
  setBatchStatus(value: string): ExecuteBatchPayoutResponse;

  getProcessingCount(): number;
  setProcessingCount(value: number): ExecuteBatchPayoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExecuteBatchPayoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExecuteBatchPayoutResponse): ExecuteBatchPayoutResponse.AsObject;
  static serializeBinaryToWriter(message: ExecuteBatchPayoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExecuteBatchPayoutResponse;
  static deserializeBinaryFromReader(message: ExecuteBatchPayoutResponse, reader: jspb.BinaryReader): ExecuteBatchPayoutResponse;
}

export namespace ExecuteBatchPayoutResponse {
  export type AsObject = {
    successCount: number;
    failedCount: number;
    totalAmount: number;
    failedDetailsList: Array<FailedPayoutDetail.AsObject>;
    totalNetAmount: number;
    totalFeeAmount: number;
    externalPendingCount: number;
    batchId: number;
    batchStatus: string;
    processingCount: number;
  };
}

export class GetPayoutAccountSummaryResponse extends jspb.Message {
  getAvailableAmountInCents(): number;
  setAvailableAmountInCents(value: number): GetPayoutAccountSummaryResponse;

  getFrozenAmountInCents(): number;
  setFrozenAmountInCents(value: number): GetPayoutAccountSummaryResponse;

  getNonWithdrawableTokenBalance(): number;
  setNonWithdrawableTokenBalance(value: number): GetPayoutAccountSummaryResponse;

  getCurrency(): string;
  setCurrency(value: string): GetPayoutAccountSummaryResponse;

  getMinimumPayoutInCents(): number;
  setMinimumPayoutInCents(value: number): GetPayoutAccountSummaryResponse;

  getRequestWindowOpen(): boolean;
  setRequestWindowOpen(value: boolean): GetPayoutAccountSummaryResponse;

  getPayoutMethod(): string;
  setPayoutMethod(value: string): GetPayoutAccountSummaryResponse;

  getAccountStatus(): string;
  setAccountStatus(value: string): GetPayoutAccountSummaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPayoutAccountSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPayoutAccountSummaryResponse): GetPayoutAccountSummaryResponse.AsObject;
  static serializeBinaryToWriter(message: GetPayoutAccountSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPayoutAccountSummaryResponse;
  static deserializeBinaryFromReader(message: GetPayoutAccountSummaryResponse, reader: jspb.BinaryReader): GetPayoutAccountSummaryResponse;
}

export namespace GetPayoutAccountSummaryResponse {
  export type AsObject = {
    availableAmountInCents: number;
    frozenAmountInCents: number;
    nonWithdrawableTokenBalance: number;
    currency: string;
    minimumPayoutInCents: number;
    requestWindowOpen: boolean;
    payoutMethod: string;
    accountStatus: string;
  };
}

export class AcceptInstructorPayoutAgreementRequest extends jspb.Message {
  getAgreementVersion(): string;
  setAgreementVersion(value: string): AcceptInstructorPayoutAgreementRequest;

  getIsUsTaxResident(): boolean;
  setIsUsTaxResident(value: boolean): AcceptInstructorPayoutAgreementRequest;

  getIsCaTaxResident(): boolean;
  setIsCaTaxResident(value: boolean): AcceptInstructorPayoutAgreementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AcceptInstructorPayoutAgreementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AcceptInstructorPayoutAgreementRequest): AcceptInstructorPayoutAgreementRequest.AsObject;
  static serializeBinaryToWriter(message: AcceptInstructorPayoutAgreementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AcceptInstructorPayoutAgreementRequest;
  static deserializeBinaryFromReader(message: AcceptInstructorPayoutAgreementRequest, reader: jspb.BinaryReader): AcceptInstructorPayoutAgreementRequest;
}

export namespace AcceptInstructorPayoutAgreementRequest {
  export type AsObject = {
    agreementVersion: string;
    isUsTaxResident: boolean;
    isCaTaxResident: boolean;
  };
}

export class VerifyStripeOrderRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): VerifyStripeOrderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyStripeOrderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyStripeOrderRequest): VerifyStripeOrderRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyStripeOrderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyStripeOrderRequest;
  static deserializeBinaryFromReader(message: VerifyStripeOrderRequest, reader: jspb.BinaryReader): VerifyStripeOrderRequest;
}

export namespace VerifyStripeOrderRequest {
  export type AsObject = {
    sessionId: string;
  };
}

export class VerifyStripeOrderResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): VerifyStripeOrderResponse;

  getMessage(): string;
  setMessage(value: string): VerifyStripeOrderResponse;

  getPurchasedTokenAmountInCents(): number;
  setPurchasedTokenAmountInCents(value: number): VerifyStripeOrderResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyStripeOrderResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyStripeOrderResponse): VerifyStripeOrderResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyStripeOrderResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyStripeOrderResponse;
  static deserializeBinaryFromReader(message: VerifyStripeOrderResponse, reader: jspb.BinaryReader): VerifyStripeOrderResponse;
}

export namespace VerifyStripeOrderResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    purchasedTokenAmountInCents: number;
  };
}

export class HandleAppleNotificationRequest extends jspb.Message {
  getSignedPayload(): string;
  setSignedPayload(value: string): HandleAppleNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleAppleNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleAppleNotificationRequest): HandleAppleNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: HandleAppleNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleAppleNotificationRequest;
  static deserializeBinaryFromReader(message: HandleAppleNotificationRequest, reader: jspb.BinaryReader): HandleAppleNotificationRequest;
}

export namespace HandleAppleNotificationRequest {
  export type AsObject = {
    signedPayload: string;
  };
}

export class HandleAppleNotificationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): HandleAppleNotificationResponse;

  getMessage(): string;
  setMessage(value: string): HandleAppleNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleAppleNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HandleAppleNotificationResponse): HandleAppleNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: HandleAppleNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleAppleNotificationResponse;
  static deserializeBinaryFromReader(message: HandleAppleNotificationResponse, reader: jspb.BinaryReader): HandleAppleNotificationResponse;
}

export namespace HandleAppleNotificationResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class HandleGoogleNotificationRequest extends jspb.Message {
  getMessageData(): string;
  setMessageData(value: string): HandleGoogleNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleGoogleNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleGoogleNotificationRequest): HandleGoogleNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: HandleGoogleNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleGoogleNotificationRequest;
  static deserializeBinaryFromReader(message: HandleGoogleNotificationRequest, reader: jspb.BinaryReader): HandleGoogleNotificationRequest;
}

export namespace HandleGoogleNotificationRequest {
  export type AsObject = {
    messageData: string;
  };
}

export class HandleGoogleNotificationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): HandleGoogleNotificationResponse;

  getMessage(): string;
  setMessage(value: string): HandleGoogleNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleGoogleNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HandleGoogleNotificationResponse): HandleGoogleNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: HandleGoogleNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleGoogleNotificationResponse;
  static deserializeBinaryFromReader(message: HandleGoogleNotificationResponse, reader: jspb.BinaryReader): HandleGoogleNotificationResponse;
}

export namespace HandleGoogleNotificationResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class AdminTokenPurchaseItem extends jspb.Message {
  getId(): number;
  setId(value: number): AdminTokenPurchaseItem;

  getOrderId(): string;
  setOrderId(value: string): AdminTokenPurchaseItem;

  getUserId(): number;
  setUserId(value: number): AdminTokenPurchaseItem;

  getUserEmail(): string;
  setUserEmail(value: string): AdminTokenPurchaseItem;

  getProductId(): string;
  setProductId(value: string): AdminTokenPurchaseItem;

  getPurchasedTokenAmountInCents(): number;
  setPurchasedTokenAmountInCents(value: number): AdminTokenPurchaseItem;

  getPurchasedPriceInCents(): number;
  setPurchasedPriceInCents(value: number): AdminTokenPurchaseItem;

  getPaymentType(): PaymentType;
  setPaymentType(value: PaymentType): AdminTokenPurchaseItem;

  getStatus(): PurchaseStatus;
  setStatus(value: PurchaseStatus): AdminTokenPurchaseItem;

  getPlatformTransactionId(): string;
  setPlatformTransactionId(value: string): AdminTokenPurchaseItem;

  getActualPaidPriceInCents(): number;
  setActualPaidPriceInCents(value: number): AdminTokenPurchaseItem;

  getPlatformFeeInCents(): number;
  setPlatformFeeInCents(value: number): AdminTokenPurchaseItem;

  getActualPayment(): string;
  setActualPayment(value: string): AdminTokenPurchaseItem;

  getActualPaymentCurrencyCode(): string;
  setActualPaymentCurrencyCode(value: string): AdminTokenPurchaseItem;

  getCreatedAt(): string;
  setCreatedAt(value: string): AdminTokenPurchaseItem;

  getUpdatedAt(): string;
  setUpdatedAt(value: string): AdminTokenPurchaseItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminTokenPurchaseItem.AsObject;
  static toObject(includeInstance: boolean, msg: AdminTokenPurchaseItem): AdminTokenPurchaseItem.AsObject;
  static serializeBinaryToWriter(message: AdminTokenPurchaseItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminTokenPurchaseItem;
  static deserializeBinaryFromReader(message: AdminTokenPurchaseItem, reader: jspb.BinaryReader): AdminTokenPurchaseItem;
}

export namespace AdminTokenPurchaseItem {
  export type AsObject = {
    id: number;
    orderId: string;
    userId: number;
    userEmail: string;
    productId: string;
    purchasedTokenAmountInCents: number;
    purchasedPriceInCents: number;
    paymentType: PaymentType;
    status: PurchaseStatus;
    platformTransactionId: string;
    actualPaidPriceInCents: number;
    platformFeeInCents: number;
    actualPayment: string;
    actualPaymentCurrencyCode: string;
    createdAt: string;
    updatedAt: string;
  };
}

export class AdminListTokenPurchasesRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): AdminListTokenPurchasesRequest;

  getPageId(): number;
  setPageId(value: number): AdminListTokenPurchasesRequest;

  getUserId(): number;
  setUserId(value: number): AdminListTokenPurchasesRequest;
  hasUserId(): boolean;
  clearUserId(): AdminListTokenPurchasesRequest;

  getStatus(): string;
  setStatus(value: string): AdminListTokenPurchasesRequest;
  hasStatus(): boolean;
  clearStatus(): AdminListTokenPurchasesRequest;

  getPaymentType(): string;
  setPaymentType(value: string): AdminListTokenPurchasesRequest;
  hasPaymentType(): boolean;
  clearPaymentType(): AdminListTokenPurchasesRequest;

  getOrderId(): string;
  setOrderId(value: string): AdminListTokenPurchasesRequest;
  hasOrderId(): boolean;
  clearOrderId(): AdminListTokenPurchasesRequest;

  getPlatformTransactionId(): string;
  setPlatformTransactionId(value: string): AdminListTokenPurchasesRequest;
  hasPlatformTransactionId(): boolean;
  clearPlatformTransactionId(): AdminListTokenPurchasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListTokenPurchasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListTokenPurchasesRequest): AdminListTokenPurchasesRequest.AsObject;
  static serializeBinaryToWriter(message: AdminListTokenPurchasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListTokenPurchasesRequest;
  static deserializeBinaryFromReader(message: AdminListTokenPurchasesRequest, reader: jspb.BinaryReader): AdminListTokenPurchasesRequest;
}

export namespace AdminListTokenPurchasesRequest {
  export type AsObject = {
    pageSize: number;
    pageId: number;
    userId?: number;
    status?: string;
    paymentType?: string;
    orderId?: string;
    platformTransactionId?: string;
  };

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 3,
  }

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 4,
  }

  export enum PaymentTypeCase {
    _PAYMENT_TYPE_NOT_SET = 0,
    PAYMENT_TYPE = 5,
  }

  export enum OrderIdCase {
    _ORDER_ID_NOT_SET = 0,
    ORDER_ID = 6,
  }

  export enum PlatformTransactionIdCase {
    _PLATFORM_TRANSACTION_ID_NOT_SET = 0,
    PLATFORM_TRANSACTION_ID = 7,
  }
}

export class AdminListTokenPurchasesResponse extends jspb.Message {
  getPurchasesList(): Array<AdminTokenPurchaseItem>;
  setPurchasesList(value: Array<AdminTokenPurchaseItem>): AdminListTokenPurchasesResponse;
  clearPurchasesList(): AdminListTokenPurchasesResponse;
  addPurchases(value?: AdminTokenPurchaseItem, index?: number): AdminTokenPurchaseItem;

  getTotalCount(): number;
  setTotalCount(value: number): AdminListTokenPurchasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListTokenPurchasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListTokenPurchasesResponse): AdminListTokenPurchasesResponse.AsObject;
  static serializeBinaryToWriter(message: AdminListTokenPurchasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListTokenPurchasesResponse;
  static deserializeBinaryFromReader(message: AdminListTokenPurchasesResponse, reader: jspb.BinaryReader): AdminListTokenPurchasesResponse;
}

export namespace AdminListTokenPurchasesResponse {
  export type AsObject = {
    purchasesList: Array<AdminTokenPurchaseItem.AsObject>;
    totalCount: number;
  };
}

export class AdminIAPNotificationItem extends jspb.Message {
  getId(): string;
  setId(value: string): AdminIAPNotificationItem;

  getPlatform(): string;
  setPlatform(value: string): AdminIAPNotificationItem;

  getNotificationType(): string;
  setNotificationType(value: string): AdminIAPNotificationItem;

  getTransactionId(): string;
  setTransactionId(value: string): AdminIAPNotificationItem;

  getProcessedStatus(): string;
  setProcessedStatus(value: string): AdminIAPNotificationItem;

  getErrorMessage(): string;
  setErrorMessage(value: string): AdminIAPNotificationItem;

  getOriginalPayload(): string;
  setOriginalPayload(value: string): AdminIAPNotificationItem;

  getCreatedAt(): string;
  setCreatedAt(value: string): AdminIAPNotificationItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminIAPNotificationItem.AsObject;
  static toObject(includeInstance: boolean, msg: AdminIAPNotificationItem): AdminIAPNotificationItem.AsObject;
  static serializeBinaryToWriter(message: AdminIAPNotificationItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminIAPNotificationItem;
  static deserializeBinaryFromReader(message: AdminIAPNotificationItem, reader: jspb.BinaryReader): AdminIAPNotificationItem;
}

export namespace AdminIAPNotificationItem {
  export type AsObject = {
    id: string;
    platform: string;
    notificationType: string;
    transactionId: string;
    processedStatus: string;
    errorMessage: string;
    originalPayload: string;
    createdAt: string;
  };
}

export class AdminListIAPNotificationsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): AdminListIAPNotificationsRequest;

  getPageId(): number;
  setPageId(value: number): AdminListIAPNotificationsRequest;

  getPlatform(): string;
  setPlatform(value: string): AdminListIAPNotificationsRequest;
  hasPlatform(): boolean;
  clearPlatform(): AdminListIAPNotificationsRequest;

  getProcessedStatus(): string;
  setProcessedStatus(value: string): AdminListIAPNotificationsRequest;
  hasProcessedStatus(): boolean;
  clearProcessedStatus(): AdminListIAPNotificationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListIAPNotificationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListIAPNotificationsRequest): AdminListIAPNotificationsRequest.AsObject;
  static serializeBinaryToWriter(message: AdminListIAPNotificationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListIAPNotificationsRequest;
  static deserializeBinaryFromReader(message: AdminListIAPNotificationsRequest, reader: jspb.BinaryReader): AdminListIAPNotificationsRequest;
}

export namespace AdminListIAPNotificationsRequest {
  export type AsObject = {
    pageSize: number;
    pageId: number;
    platform?: string;
    processedStatus?: string;
  };

  export enum PlatformCase {
    _PLATFORM_NOT_SET = 0,
    PLATFORM = 3,
  }

  export enum ProcessedStatusCase {
    _PROCESSED_STATUS_NOT_SET = 0,
    PROCESSED_STATUS = 4,
  }
}

export class AdminListIAPNotificationsResponse extends jspb.Message {
  getNotificationsList(): Array<AdminIAPNotificationItem>;
  setNotificationsList(value: Array<AdminIAPNotificationItem>): AdminListIAPNotificationsResponse;
  clearNotificationsList(): AdminListIAPNotificationsResponse;
  addNotifications(value?: AdminIAPNotificationItem, index?: number): AdminIAPNotificationItem;

  getTotalCount(): number;
  setTotalCount(value: number): AdminListIAPNotificationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListIAPNotificationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListIAPNotificationsResponse): AdminListIAPNotificationsResponse.AsObject;
  static serializeBinaryToWriter(message: AdminListIAPNotificationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListIAPNotificationsResponse;
  static deserializeBinaryFromReader(message: AdminListIAPNotificationsResponse, reader: jspb.BinaryReader): AdminListIAPNotificationsResponse;
}

export namespace AdminListIAPNotificationsResponse {
  export type AsObject = {
    notificationsList: Array<AdminIAPNotificationItem.AsObject>;
    totalCount: number;
  };
}

export class AdminAdjustUserBalanceRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): AdminAdjustUserBalanceRequest;

  getTokenAmountInCents(): number;
  setTokenAmountInCents(value: number): AdminAdjustUserBalanceRequest;

  getReason(): string;
  setReason(value: string): AdminAdjustUserBalanceRequest;

  getRelatedOrderId(): string;
  setRelatedOrderId(value: string): AdminAdjustUserBalanceRequest;
  hasRelatedOrderId(): boolean;
  clearRelatedOrderId(): AdminAdjustUserBalanceRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): AdminAdjustUserBalanceRequest;
  hasIdempotencyKey(): boolean;
  clearIdempotencyKey(): AdminAdjustUserBalanceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminAdjustUserBalanceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminAdjustUserBalanceRequest): AdminAdjustUserBalanceRequest.AsObject;
  static serializeBinaryToWriter(message: AdminAdjustUserBalanceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminAdjustUserBalanceRequest;
  static deserializeBinaryFromReader(message: AdminAdjustUserBalanceRequest, reader: jspb.BinaryReader): AdminAdjustUserBalanceRequest;
}

export namespace AdminAdjustUserBalanceRequest {
  export type AsObject = {
    userId: number;
    tokenAmountInCents: number;
    reason: string;
    relatedOrderId?: string;
    idempotencyKey?: string;
  };

  export enum RelatedOrderIdCase {
    _RELATED_ORDER_ID_NOT_SET = 0,
    RELATED_ORDER_ID = 4,
  }

  export enum IdempotencyKeyCase {
    _IDEMPOTENCY_KEY_NOT_SET = 0,
    IDEMPOTENCY_KEY = 5,
  }
}

export class AdminAdjustUserBalanceResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AdminAdjustUserBalanceResponse;

  getNewBalanceInCents(): number;
  setNewBalanceInCents(value: number): AdminAdjustUserBalanceResponse;

  getTransactionId(): string;
  setTransactionId(value: string): AdminAdjustUserBalanceResponse;

  getMessage(): string;
  setMessage(value: string): AdminAdjustUserBalanceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminAdjustUserBalanceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminAdjustUserBalanceResponse): AdminAdjustUserBalanceResponse.AsObject;
  static serializeBinaryToWriter(message: AdminAdjustUserBalanceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminAdjustUserBalanceResponse;
  static deserializeBinaryFromReader(message: AdminAdjustUserBalanceResponse, reader: jspb.BinaryReader): AdminAdjustUserBalanceResponse;
}

export namespace AdminAdjustUserBalanceResponse {
  export type AsObject = {
    success: boolean;
    newBalanceInCents: number;
    transactionId: string;
    message: string;
  };
}

export class AdminBalanceAdjustmentItem extends jspb.Message {
  getId(): string;
  setId(value: string): AdminBalanceAdjustmentItem;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): AdminBalanceAdjustmentItem;

  getAdminUserId(): number;
  setAdminUserId(value: number): AdminBalanceAdjustmentItem;

  getAdminEmail(): string;
  setAdminEmail(value: string): AdminBalanceAdjustmentItem;

  getTargetUserId(): number;
  setTargetUserId(value: number): AdminBalanceAdjustmentItem;

  getTargetUserEmail(): string;
  setTargetUserEmail(value: string): AdminBalanceAdjustmentItem;

  getTokenAmountInCents(): number;
  setTokenAmountInCents(value: number): AdminBalanceAdjustmentItem;

  getReason(): string;
  setReason(value: string): AdminBalanceAdjustmentItem;

  getRelatedOrderId(): string;
  setRelatedOrderId(value: string): AdminBalanceAdjustmentItem;

  getTransactionId(): string;
  setTransactionId(value: string): AdminBalanceAdjustmentItem;

  getBalanceAfterInCents(): number;
  setBalanceAfterInCents(value: number): AdminBalanceAdjustmentItem;

  getCreatedAt(): string;
  setCreatedAt(value: string): AdminBalanceAdjustmentItem;

  getCompletedAt(): string;
  setCompletedAt(value: string): AdminBalanceAdjustmentItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminBalanceAdjustmentItem.AsObject;
  static toObject(includeInstance: boolean, msg: AdminBalanceAdjustmentItem): AdminBalanceAdjustmentItem.AsObject;
  static serializeBinaryToWriter(message: AdminBalanceAdjustmentItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminBalanceAdjustmentItem;
  static deserializeBinaryFromReader(message: AdminBalanceAdjustmentItem, reader: jspb.BinaryReader): AdminBalanceAdjustmentItem;
}

export namespace AdminBalanceAdjustmentItem {
  export type AsObject = {
    id: string;
    idempotencyKey: string;
    adminUserId: number;
    adminEmail: string;
    targetUserId: number;
    targetUserEmail: string;
    tokenAmountInCents: number;
    reason: string;
    relatedOrderId: string;
    transactionId: string;
    balanceAfterInCents: number;
    createdAt: string;
    completedAt: string;
  };
}

export class AdminListBalanceAdjustmentsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): AdminListBalanceAdjustmentsRequest;

  getPageId(): number;
  setPageId(value: number): AdminListBalanceAdjustmentsRequest;

  getTargetUserId(): number;
  setTargetUserId(value: number): AdminListBalanceAdjustmentsRequest;
  hasTargetUserId(): boolean;
  clearTargetUserId(): AdminListBalanceAdjustmentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListBalanceAdjustmentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListBalanceAdjustmentsRequest): AdminListBalanceAdjustmentsRequest.AsObject;
  static serializeBinaryToWriter(message: AdminListBalanceAdjustmentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListBalanceAdjustmentsRequest;
  static deserializeBinaryFromReader(message: AdminListBalanceAdjustmentsRequest, reader: jspb.BinaryReader): AdminListBalanceAdjustmentsRequest;
}

export namespace AdminListBalanceAdjustmentsRequest {
  export type AsObject = {
    pageSize: number;
    pageId: number;
    targetUserId?: number;
  };

  export enum TargetUserIdCase {
    _TARGET_USER_ID_NOT_SET = 0,
    TARGET_USER_ID = 3,
  }
}

export class AdminListBalanceAdjustmentsResponse extends jspb.Message {
  getAdjustmentsList(): Array<AdminBalanceAdjustmentItem>;
  setAdjustmentsList(value: Array<AdminBalanceAdjustmentItem>): AdminListBalanceAdjustmentsResponse;
  clearAdjustmentsList(): AdminListBalanceAdjustmentsResponse;
  addAdjustments(value?: AdminBalanceAdjustmentItem, index?: number): AdminBalanceAdjustmentItem;

  getTotalCount(): number;
  setTotalCount(value: number): AdminListBalanceAdjustmentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListBalanceAdjustmentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListBalanceAdjustmentsResponse): AdminListBalanceAdjustmentsResponse.AsObject;
  static serializeBinaryToWriter(message: AdminListBalanceAdjustmentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListBalanceAdjustmentsResponse;
  static deserializeBinaryFromReader(message: AdminListBalanceAdjustmentsResponse, reader: jspb.BinaryReader): AdminListBalanceAdjustmentsResponse;
}

export namespace AdminListBalanceAdjustmentsResponse {
  export type AsObject = {
    adjustmentsList: Array<AdminBalanceAdjustmentItem.AsObject>;
    totalCount: number;
  };
}

export class AdminReplayIAPNotificationRequest extends jspb.Message {
  getNotificationId(): string;
  setNotificationId(value: string): AdminReplayIAPNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminReplayIAPNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminReplayIAPNotificationRequest): AdminReplayIAPNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: AdminReplayIAPNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminReplayIAPNotificationRequest;
  static deserializeBinaryFromReader(message: AdminReplayIAPNotificationRequest, reader: jspb.BinaryReader): AdminReplayIAPNotificationRequest;
}

export namespace AdminReplayIAPNotificationRequest {
  export type AsObject = {
    notificationId: string;
  };
}

export class AdminReplayIAPNotificationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AdminReplayIAPNotificationResponse;

  getMessage(): string;
  setMessage(value: string): AdminReplayIAPNotificationResponse;

  getProcessedStatus(): string;
  setProcessedStatus(value: string): AdminReplayIAPNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminReplayIAPNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminReplayIAPNotificationResponse): AdminReplayIAPNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: AdminReplayIAPNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminReplayIAPNotificationResponse;
  static deserializeBinaryFromReader(message: AdminReplayIAPNotificationResponse, reader: jspb.BinaryReader): AdminReplayIAPNotificationResponse;
}

export namespace AdminReplayIAPNotificationResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    processedStatus: string;
  };
}

export class AdminTriggerPayoutReconciliationRequest extends jspb.Message {
  getProvider(): string;
  setProvider(value: string): AdminTriggerPayoutReconciliationRequest;
  hasProvider(): boolean;
  clearProvider(): AdminTriggerPayoutReconciliationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminTriggerPayoutReconciliationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminTriggerPayoutReconciliationRequest): AdminTriggerPayoutReconciliationRequest.AsObject;
  static serializeBinaryToWriter(message: AdminTriggerPayoutReconciliationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminTriggerPayoutReconciliationRequest;
  static deserializeBinaryFromReader(message: AdminTriggerPayoutReconciliationRequest, reader: jspb.BinaryReader): AdminTriggerPayoutReconciliationRequest;
}

export namespace AdminTriggerPayoutReconciliationRequest {
  export type AsObject = {
    provider?: string;
  };

  export enum ProviderCase {
    _PROVIDER_NOT_SET = 0,
    PROVIDER = 1,
  }
}

export class AdminTriggerPayoutReconciliationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AdminTriggerPayoutReconciliationResponse;

  getMessage(): string;
  setMessage(value: string): AdminTriggerPayoutReconciliationResponse;

  getPaypalReconciledCount(): number;
  setPaypalReconciledCount(value: number): AdminTriggerPayoutReconciliationResponse;

  getPaypalReturnsCount(): number;
  setPaypalReturnsCount(value: number): AdminTriggerPayoutReconciliationResponse;

  getStripeReturnsCount(): number;
  setStripeReturnsCount(value: number): AdminTriggerPayoutReconciliationResponse;

  getBatchesRefreshedCount(): number;
  setBatchesRefreshedCount(value: number): AdminTriggerPayoutReconciliationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminTriggerPayoutReconciliationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminTriggerPayoutReconciliationResponse): AdminTriggerPayoutReconciliationResponse.AsObject;
  static serializeBinaryToWriter(message: AdminTriggerPayoutReconciliationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminTriggerPayoutReconciliationResponse;
  static deserializeBinaryFromReader(message: AdminTriggerPayoutReconciliationResponse, reader: jspb.BinaryReader): AdminTriggerPayoutReconciliationResponse;
}

export namespace AdminTriggerPayoutReconciliationResponse {
  export type AsObject = {
    success: boolean;
    message: string;
    paypalReconciledCount: number;
    paypalReturnsCount: number;
    stripeReturnsCount: number;
    batchesRefreshedCount: number;
  };
}

export enum TransactionType {
  PURCHASE = 0,
  ESCROW = 1,
  WITHDRAWAL = 2,
  TRANSFER = 3,
  PLATFORM_FEE = 4,
  TRANSACTION_REFUND = 5,
  COURSE_PURCHASE = 6,
  COURSE_REFUND = 7,
  COURSE_RELEASE = 8,
  TRANSACTION_REFUND_REVERSAL = 9,
  PAYOUT_REVERSAL = 10,
}
export enum EscrowType {
  PENDING = 0,
  RELEASED = 1,
  REFUNDED = 2,
}
export enum PaymentType {
  PAYMENT_TYPE_UNSPECIFIED = 0,
  GOOGLE_PAY = 1,
  WECHAT_PAY = 2,
  ALIPAY = 3,
  PAYPAL = 4,
  STRIPE = 5,
  APPLE_PAY = 6,
}
export enum PurchaseStatus {
  PURCHASE_STATUS_UNSPECIFIED = 0,
  PURCHASE_PENDING = 1,
  PURCHASE_COMPLETED = 2,
  PURCHASE_FAILED = 3,
  PURCHASE_CANCELED = 4,
  PURCHASE_REFUNDED = 5,
}
