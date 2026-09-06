import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as rpc_token_system_pb from './rpc_token_system_pb'; // proto import: "rpc_token_system.proto"


export class Transaction extends jspb.Message {
  getId(): string;
  setId(value: string): Transaction;

  getTransactionType(): rpc_token_system_pb.TransactionType;
  setTransactionType(value: rpc_token_system_pb.TransactionType): Transaction;

  getAmountInCents(): number;
  setAmountInCents(value: number): Transaction;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Transaction;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Transaction;

  getRelatedId(): string;
  setRelatedId(value: string): Transaction;

  getRelatedTableType(): string;
  setRelatedTableType(value: string): Transaction;

  getPurchaseDetails(): TokenPurchaseDetails | undefined;
  setPurchaseDetails(value?: TokenPurchaseDetails): Transaction;
  hasPurchaseDetails(): boolean;
  clearPurchaseDetails(): Transaction;

  getTransferDetails(): TokenTransferDetails | undefined;
  setTransferDetails(value?: TokenTransferDetails): Transaction;
  hasTransferDetails(): boolean;
  clearTransferDetails(): Transaction;

  getEscrowDetails(): EscrowDetails | undefined;
  setEscrowDetails(value?: EscrowDetails): Transaction;
  hasEscrowDetails(): boolean;
  clearEscrowDetails(): Transaction;

  getWithdrawalDetails(): WithdrawalDetails | undefined;
  setWithdrawalDetails(value?: WithdrawalDetails): Transaction;
  hasWithdrawalDetails(): boolean;
  clearWithdrawalDetails(): Transaction;

  getUserId(): number;
  setUserId(value: number): Transaction;
  hasUserId(): boolean;
  clearUserId(): Transaction;

  getUserEmail(): string;
  setUserEmail(value: string): Transaction;
  hasUserEmail(): boolean;
  clearUserEmail(): Transaction;

  getDetailsCase(): Transaction.DetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    id: string;
    transactionType: rpc_token_system_pb.TransactionType;
    amountInCents: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    relatedId: string;
    relatedTableType: string;
    purchaseDetails?: TokenPurchaseDetails.AsObject;
    transferDetails?: TokenTransferDetails.AsObject;
    escrowDetails?: EscrowDetails.AsObject;
    withdrawalDetails?: WithdrawalDetails.AsObject;
    userId?: number;
    userEmail?: string;
  };

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    PURCHASE_DETAILS = 7,
    TRANSFER_DETAILS = 8,
    ESCROW_DETAILS = 9,
    WITHDRAWAL_DETAILS = 10,
  }

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 11,
  }

  export enum UserEmailCase {
    _USER_EMAIL_NOT_SET = 0,
    USER_EMAIL = 12,
  }
}

export class TokenPurchaseDetails extends jspb.Message {
  getProductTitle(): string;
  setProductTitle(value: string): TokenPurchaseDetails;

  getPurchasedPriceInCents(): number;
  setPurchasedPriceInCents(value: number): TokenPurchaseDetails;

  getPaymentType(): rpc_token_system_pb.PaymentType;
  setPaymentType(value: rpc_token_system_pb.PaymentType): TokenPurchaseDetails;

  getPlatformTransactionId(): string;
  setPlatformTransactionId(value: string): TokenPurchaseDetails;

  getOrderId(): string;
  setOrderId(value: string): TokenPurchaseDetails;

  getStatus(): rpc_token_system_pb.PurchaseStatus;
  setStatus(value: rpc_token_system_pb.PurchaseStatus): TokenPurchaseDetails;

  getPurchasedTokenAmountInCents(): number;
  setPurchasedTokenAmountInCents(value: number): TokenPurchaseDetails;

  getActualPayment(): string;
  setActualPayment(value: string): TokenPurchaseDetails;

  getCurrencyCode(): string;
  setCurrencyCode(value: string): TokenPurchaseDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenPurchaseDetails.AsObject;
  static toObject(includeInstance: boolean, msg: TokenPurchaseDetails): TokenPurchaseDetails.AsObject;
  static serializeBinaryToWriter(message: TokenPurchaseDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenPurchaseDetails;
  static deserializeBinaryFromReader(message: TokenPurchaseDetails, reader: jspb.BinaryReader): TokenPurchaseDetails;
}

export namespace TokenPurchaseDetails {
  export type AsObject = {
    productTitle: string;
    purchasedPriceInCents: number;
    paymentType: rpc_token_system_pb.PaymentType;
    platformTransactionId: string;
    orderId: string;
    status: rpc_token_system_pb.PurchaseStatus;
    purchasedTokenAmountInCents: number;
    actualPayment: string;
    currencyCode: string;
  };
}

export class TokenTransferDetails extends jspb.Message {
  getFromUserId(): number;
  setFromUserId(value: number): TokenTransferDetails;

  getToUserId(): number;
  setToUserId(value: number): TokenTransferDetails;

  getLessonId(): string;
  setLessonId(value: string): TokenTransferDetails;

  getTokenAmountInCents(): number;
  setTokenAmountInCents(value: number): TokenTransferDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TokenTransferDetails.AsObject;
  static toObject(includeInstance: boolean, msg: TokenTransferDetails): TokenTransferDetails.AsObject;
  static serializeBinaryToWriter(message: TokenTransferDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TokenTransferDetails;
  static deserializeBinaryFromReader(message: TokenTransferDetails, reader: jspb.BinaryReader): TokenTransferDetails;
}

export namespace TokenTransferDetails {
  export type AsObject = {
    fromUserId: number;
    toUserId: number;
    lessonId: string;
    tokenAmountInCents: number;
  };
}

export class EscrowDetails extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): EscrowDetails;

  getFromUserId(): number;
  setFromUserId(value: number): EscrowDetails;

  getToUserId(): number;
  setToUserId(value: number): EscrowDetails;

  getTokenAmountInCents(): number;
  setTokenAmountInCents(value: number): EscrowDetails;

  getStatus(): rpc_token_system_pb.EscrowType;
  setStatus(value: rpc_token_system_pb.EscrowType): EscrowDetails;

  getReleaseDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReleaseDate(value?: google_protobuf_timestamp_pb.Timestamp): EscrowDetails;
  hasReleaseDate(): boolean;
  clearReleaseDate(): EscrowDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EscrowDetails.AsObject;
  static toObject(includeInstance: boolean, msg: EscrowDetails): EscrowDetails.AsObject;
  static serializeBinaryToWriter(message: EscrowDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EscrowDetails;
  static deserializeBinaryFromReader(message: EscrowDetails, reader: jspb.BinaryReader): EscrowDetails;
}

export namespace EscrowDetails {
  export type AsObject = {
    lessonId: string;
    fromUserId: number;
    toUserId: number;
    tokenAmountInCents: number;
    status: rpc_token_system_pb.EscrowType;
    releaseDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class WithdrawalDetails extends jspb.Message {
  getWithdrawalStatus(): string;
  setWithdrawalStatus(value: string): WithdrawalDetails;

  getTokenAmountInCents(): number;
  setTokenAmountInCents(value: number): WithdrawalDetails;

  getFee(): number;
  setFee(value: number): WithdrawalDetails;

  getNetTokenAmount(): number;
  setNetTokenAmount(value: number): WithdrawalDetails;

  getPayoutBatchId(): string;
  setPayoutBatchId(value: string): WithdrawalDetails;

  getNote(): string;
  setNote(value: string): WithdrawalDetails;

  getPayoutId(): number;
  setPayoutId(value: number): WithdrawalDetails;

  getPayoutMethod(): string;
  setPayoutMethod(value: string): WithdrawalDetails;

  getReturnedAmount(): number;
  setReturnedAmount(value: number): WithdrawalDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WithdrawalDetails.AsObject;
  static toObject(includeInstance: boolean, msg: WithdrawalDetails): WithdrawalDetails.AsObject;
  static serializeBinaryToWriter(message: WithdrawalDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WithdrawalDetails;
  static deserializeBinaryFromReader(message: WithdrawalDetails, reader: jspb.BinaryReader): WithdrawalDetails;
}

export namespace WithdrawalDetails {
  export type AsObject = {
    withdrawalStatus: string;
    tokenAmountInCents: number;
    fee: number;
    netTokenAmount: number;
    payoutBatchId: string;
    note: string;
    payoutId: number;
    payoutMethod: string;
    returnedAmount: number;
  };
}

export class ListTransactionsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ListTransactionsRequest;
  hasUserId(): boolean;
  clearUserId(): ListTransactionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListTransactionsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListTransactionsRequest;

  getTransactionType(): rpc_token_system_pb.TransactionType;
  setTransactionType(value: rpc_token_system_pb.TransactionType): ListTransactionsRequest;
  hasTransactionType(): boolean;
  clearTransactionType(): ListTransactionsRequest;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): ListTransactionsRequest;
  hasStartDate(): boolean;
  clearStartDate(): ListTransactionsRequest;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): ListTransactionsRequest;
  hasEndDate(): boolean;
  clearEndDate(): ListTransactionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransactionsRequest): ListTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransactionsRequest;
  static deserializeBinaryFromReader(message: ListTransactionsRequest, reader: jspb.BinaryReader): ListTransactionsRequest;
}

export namespace ListTransactionsRequest {
  export type AsObject = {
    userId?: number;
    pageSize: number;
    pageToken: string;
    transactionType?: rpc_token_system_pb.TransactionType;
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 1,
  }

  export enum TransactionTypeCase {
    _TRANSACTION_TYPE_NOT_SET = 0,
    TRANSACTION_TYPE = 4,
  }

  export enum StartDateCase {
    _START_DATE_NOT_SET = 0,
    START_DATE = 5,
  }

  export enum EndDateCase {
    _END_DATE_NOT_SET = 0,
    END_DATE = 6,
  }
}

export class ListTransactionsResponse extends jspb.Message {
  getTransactionsList(): Array<Transaction>;
  setTransactionsList(value: Array<Transaction>): ListTransactionsResponse;
  clearTransactionsList(): ListTransactionsResponse;
  addTransactions(value?: Transaction, index?: number): Transaction;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListTransactionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTransactionsResponse): ListTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTransactionsResponse;
  static deserializeBinaryFromReader(message: ListTransactionsResponse, reader: jspb.BinaryReader): ListTransactionsResponse;
}

export namespace ListTransactionsResponse {
  export type AsObject = {
    transactionsList: Array<Transaction.AsObject>;
    nextPageToken: string;
  };
}

export class GetTransactionRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetTransactionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionRequest): GetTransactionRequest.AsObject;
  static serializeBinaryToWriter(message: GetTransactionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionRequest;
  static deserializeBinaryFromReader(message: GetTransactionRequest, reader: jspb.BinaryReader): GetTransactionRequest;
}

export namespace GetTransactionRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetTransactionResponse extends jspb.Message {
  getTransaction(): Transaction | undefined;
  setTransaction(value?: Transaction): GetTransactionResponse;
  hasTransaction(): boolean;
  clearTransaction(): GetTransactionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTransactionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTransactionResponse): GetTransactionResponse.AsObject;
  static serializeBinaryToWriter(message: GetTransactionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTransactionResponse;
  static deserializeBinaryFromReader(message: GetTransactionResponse, reader: jspb.BinaryReader): GetTransactionResponse;
}

export namespace GetTransactionResponse {
  export type AsObject = {
    transaction?: Transaction.AsObject;
  };
}

export class OtherParty extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): OtherParty;

  getName(): string;
  setName(value: string): OtherParty;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): OtherParty;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OtherParty.AsObject;
  static toObject(includeInstance: boolean, msg: OtherParty): OtherParty.AsObject;
  static serializeBinaryToWriter(message: OtherParty, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OtherParty;
  static deserializeBinaryFromReader(message: OtherParty, reader: jspb.BinaryReader): OtherParty;
}

export namespace OtherParty {
  export type AsObject = {
    userId: number;
    name: string;
    avatarUrl: string;
  };
}

export class RelatedObject extends jspb.Message {
  getId(): string;
  setId(value: string): RelatedObject;

  getType(): string;
  setType(value: string): RelatedObject;

  getDisplayName(): string;
  setDisplayName(value: string): RelatedObject;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RelatedObject.AsObject;
  static toObject(includeInstance: boolean, msg: RelatedObject): RelatedObject.AsObject;
  static serializeBinaryToWriter(message: RelatedObject, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RelatedObject;
  static deserializeBinaryFromReader(message: RelatedObject, reader: jspb.BinaryReader): RelatedObject;
}

export namespace RelatedObject {
  export type AsObject = {
    id: string;
    type: string;
    displayName: string;
  };
}

export class LedgerEntry extends jspb.Message {
  getId(): string;
  setId(value: string): LedgerEntry;

  getAmount(): number;
  setAmount(value: number): LedgerEntry;

  getType(): LedgerEntryType;
  setType(value: LedgerEntryType): LedgerEntry;

  getStatus(): LedgerEntryStatus;
  setStatus(value: LedgerEntryStatus): LedgerEntry;

  getDescription(): string;
  setDescription(value: string): LedgerEntry;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LedgerEntry;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LedgerEntry;

  getOtherParty(): OtherParty | undefined;
  setOtherParty(value?: OtherParty): LedgerEntry;
  hasOtherParty(): boolean;
  clearOtherParty(): LedgerEntry;

  getRelatedObject(): RelatedObject | undefined;
  setRelatedObject(value?: RelatedObject): LedgerEntry;
  hasRelatedObject(): boolean;
  clearRelatedObject(): LedgerEntry;

  getPurchaseDetails(): LedgerTokenPurchaseDetails | undefined;
  setPurchaseDetails(value?: LedgerTokenPurchaseDetails): LedgerEntry;
  hasPurchaseDetails(): boolean;
  clearPurchaseDetails(): LedgerEntry;

  getDetailsCase(): LedgerEntry.DetailsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerEntry.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerEntry): LedgerEntry.AsObject;
  static serializeBinaryToWriter(message: LedgerEntry, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerEntry;
  static deserializeBinaryFromReader(message: LedgerEntry, reader: jspb.BinaryReader): LedgerEntry;
}

export namespace LedgerEntry {
  export type AsObject = {
    id: string;
    amount: number;
    type: LedgerEntryType;
    status: LedgerEntryStatus;
    description: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    otherParty?: OtherParty.AsObject;
    relatedObject?: RelatedObject.AsObject;
    purchaseDetails?: LedgerTokenPurchaseDetails.AsObject;
  };

  export enum DetailsCase {
    DETAILS_NOT_SET = 0,
    PURCHASE_DETAILS = 9,
  }
}

export class LedgerTokenPurchaseDetails extends jspb.Message {
  getActualPayment(): string;
  setActualPayment(value: string): LedgerTokenPurchaseDetails;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LedgerTokenPurchaseDetails.AsObject;
  static toObject(includeInstance: boolean, msg: LedgerTokenPurchaseDetails): LedgerTokenPurchaseDetails.AsObject;
  static serializeBinaryToWriter(message: LedgerTokenPurchaseDetails, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LedgerTokenPurchaseDetails;
  static deserializeBinaryFromReader(message: LedgerTokenPurchaseDetails, reader: jspb.BinaryReader): LedgerTokenPurchaseDetails;
}

export namespace LedgerTokenPurchaseDetails {
  export type AsObject = {
    actualPayment: string;
  };
}

export class GetUserLedgerRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetUserLedgerRequest;

  getPageSize(): number;
  setPageSize(value: number): GetUserLedgerRequest;

  getPageToken(): string;
  setPageToken(value: string): GetUserLedgerRequest;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): GetUserLedgerRequest;
  hasStartDate(): boolean;
  clearStartDate(): GetUserLedgerRequest;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): GetUserLedgerRequest;
  hasEndDate(): boolean;
  clearEndDate(): GetUserLedgerRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLedgerRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLedgerRequest): GetUserLedgerRequest.AsObject;
  static serializeBinaryToWriter(message: GetUserLedgerRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLedgerRequest;
  static deserializeBinaryFromReader(message: GetUserLedgerRequest, reader: jspb.BinaryReader): GetUserLedgerRequest;
}

export namespace GetUserLedgerRequest {
  export type AsObject = {
    userId: number;
    pageSize: number;
    pageToken: string;
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum StartDateCase {
    _START_DATE_NOT_SET = 0,
    START_DATE = 4,
  }

  export enum EndDateCase {
    _END_DATE_NOT_SET = 0,
    END_DATE = 5,
  }
}

export class GetUserLedgerResponse extends jspb.Message {
  getEntriesList(): Array<LedgerEntry>;
  setEntriesList(value: Array<LedgerEntry>): GetUserLedgerResponse;
  clearEntriesList(): GetUserLedgerResponse;
  addEntries(value?: LedgerEntry, index?: number): LedgerEntry;

  getNextPageToken(): string;
  setNextPageToken(value: string): GetUserLedgerResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetUserLedgerResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetUserLedgerResponse): GetUserLedgerResponse.AsObject;
  static serializeBinaryToWriter(message: GetUserLedgerResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetUserLedgerResponse;
  static deserializeBinaryFromReader(message: GetUserLedgerResponse, reader: jspb.BinaryReader): GetUserLedgerResponse;
}

export namespace GetUserLedgerResponse {
  export type AsObject = {
    entriesList: Array<LedgerEntry.AsObject>;
    nextPageToken: string;
  };
}

export enum LedgerEntryType {
  LEDGER_ENTRY_TYPE_UNSPECIFIED = 0,
  DEBIT = 1,
  CREDIT = 2,
  HOLD = 3,
}
export enum LedgerEntryStatus {
  LEDGER_ENTRY_STATUS_UNSPECIFIED = 0,
  LEDGER_PENDING = 1,
  LEDGER_COMPLETED = 2,
  LEDGER_FAILED = 3,
  LEDGER_CANCELED = 4,
  LEDGER_REFUNDED = 5,
}
