import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class PlatformEarning extends jspb.Message {
  getId(): string;
  setId(value: string): PlatformEarning;

  getEarningType(): string;
  setEarningType(value: string): PlatformEarning;

  getAmountInCents(): number;
  setAmountInCents(value: number): PlatformEarning;

  getRelatedId(): string;
  setRelatedId(value: string): PlatformEarning;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PlatformEarning;
  hasCreatedAt(): boolean;
  clearCreatedAt(): PlatformEarning;

  getNote(): string;
  setNote(value: string): PlatformEarning;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlatformEarning.AsObject;
  static toObject(includeInstance: boolean, msg: PlatformEarning): PlatformEarning.AsObject;
  static serializeBinaryToWriter(message: PlatformEarning, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlatformEarning;
  static deserializeBinaryFromReader(message: PlatformEarning, reader: jspb.BinaryReader): PlatformEarning;
}

export namespace PlatformEarning {
  export type AsObject = {
    id: string;
    earningType: string;
    amountInCents: number;
    relatedId: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    note: string;
  };
}

export class ListPlatformEarningsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListPlatformEarningsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPlatformEarningsRequest;

  getEarningType(): string;
  setEarningType(value: string): ListPlatformEarningsRequest;
  hasEarningType(): boolean;
  clearEarningType(): ListPlatformEarningsRequest;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): ListPlatformEarningsRequest;
  hasStartDate(): boolean;
  clearStartDate(): ListPlatformEarningsRequest;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): ListPlatformEarningsRequest;
  hasEndDate(): boolean;
  clearEndDate(): ListPlatformEarningsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlatformEarningsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlatformEarningsRequest): ListPlatformEarningsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPlatformEarningsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlatformEarningsRequest;
  static deserializeBinaryFromReader(message: ListPlatformEarningsRequest, reader: jspb.BinaryReader): ListPlatformEarningsRequest;
}

export namespace ListPlatformEarningsRequest {
  export type AsObject = {
    pageSize: number;
    pageToken: string;
    earningType?: string;
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum EarningTypeCase {
    _EARNING_TYPE_NOT_SET = 0,
    EARNING_TYPE = 3,
  }

  export enum StartDateCase {
    _START_DATE_NOT_SET = 0,
    START_DATE = 4,
  }

  export enum EndDateCase {
    _END_DATE_NOT_SET = 0,
    END_DATE = 5,
  }
}

export class ListPlatformEarningsResponse extends jspb.Message {
  getEarningsList(): Array<PlatformEarning>;
  setEarningsList(value: Array<PlatformEarning>): ListPlatformEarningsResponse;
  clearEarningsList(): ListPlatformEarningsResponse;
  addEarnings(value?: PlatformEarning, index?: number): PlatformEarning;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPlatformEarningsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlatformEarningsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlatformEarningsResponse): ListPlatformEarningsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPlatformEarningsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlatformEarningsResponse;
  static deserializeBinaryFromReader(message: ListPlatformEarningsResponse, reader: jspb.BinaryReader): ListPlatformEarningsResponse;
}

export namespace ListPlatformEarningsResponse {
  export type AsObject = {
    earningsList: Array<PlatformEarning.AsObject>;
    nextPageToken: string;
  };
}

export class GetPlatformEarningsSummaryRequest extends jspb.Message {
  getPeriodType(): PeriodType;
  setPeriodType(value: PeriodType): GetPlatformEarningsSummaryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlatformEarningsSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlatformEarningsSummaryRequest): GetPlatformEarningsSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetPlatformEarningsSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlatformEarningsSummaryRequest;
  static deserializeBinaryFromReader(message: GetPlatformEarningsSummaryRequest, reader: jspb.BinaryReader): GetPlatformEarningsSummaryRequest;
}

export namespace GetPlatformEarningsSummaryRequest {
  export type AsObject = {
    periodType: PeriodType;
  };
}

export class TimeSeriesDataPoint extends jspb.Message {
  getPeriod(): string;
  setPeriod(value: string): TimeSeriesDataPoint;

  getEarningsInCents(): number;
  setEarningsInCents(value: number): TimeSeriesDataPoint;

  getWithdrawalsInCents(): number;
  setWithdrawalsInCents(value: number): TimeSeriesDataPoint;

  getNetInCents(): number;
  setNetInCents(value: number): TimeSeriesDataPoint;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TimeSeriesDataPoint.AsObject;
  static toObject(includeInstance: boolean, msg: TimeSeriesDataPoint): TimeSeriesDataPoint.AsObject;
  static serializeBinaryToWriter(message: TimeSeriesDataPoint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TimeSeriesDataPoint;
  static deserializeBinaryFromReader(message: TimeSeriesDataPoint, reader: jspb.BinaryReader): TimeSeriesDataPoint;
}

export namespace TimeSeriesDataPoint {
  export type AsObject = {
    period: string;
    earningsInCents: number;
    withdrawalsInCents: number;
    netInCents: number;
  };
}

export class GetPlatformEarningsSummaryResponse extends jspb.Message {
  getTotalEarningsInCents(): number;
  setTotalEarningsInCents(value: number): GetPlatformEarningsSummaryResponse;

  getTotalWithdrawalsInCents(): number;
  setTotalWithdrawalsInCents(value: number): GetPlatformEarningsSummaryResponse;

  getCurrentBalanceInCents(): number;
  setCurrentBalanceInCents(value: number): GetPlatformEarningsSummaryResponse;

  getTotalOutstandingTokensInCents(): number;
  setTotalOutstandingTokensInCents(value: number): GetPlatformEarningsSummaryResponse;

  getTimeSeriesDataList(): Array<TimeSeriesDataPoint>;
  setTimeSeriesDataList(value: Array<TimeSeriesDataPoint>): GetPlatformEarningsSummaryResponse;
  clearTimeSeriesDataList(): GetPlatformEarningsSummaryResponse;
  addTimeSeriesData(value?: TimeSeriesDataPoint, index?: number): TimeSeriesDataPoint;

  getTotalRevenueInCents(): number;
  setTotalRevenueInCents(value: number): GetPlatformEarningsSummaryResponse;

  getTotalCashAssetsInCents(): number;
  setTotalCashAssetsInCents(value: number): GetPlatformEarningsSummaryResponse;

  getTotalLiabilitiesInCents(): number;
  setTotalLiabilitiesInCents(value: number): GetPlatformEarningsSummaryResponse;

  getTotalProviderFeesInCents(): number;
  setTotalProviderFeesInCents(value: number): GetPlatformEarningsSummaryResponse;

  getNetIncomeInCents(): number;
  setNetIncomeInCents(value: number): GetPlatformEarningsSummaryResponse;

  getTotalExpensesInCents(): number;
  setTotalExpensesInCents(value: number): GetPlatformEarningsSummaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPlatformEarningsSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPlatformEarningsSummaryResponse): GetPlatformEarningsSummaryResponse.AsObject;
  static serializeBinaryToWriter(message: GetPlatformEarningsSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPlatformEarningsSummaryResponse;
  static deserializeBinaryFromReader(message: GetPlatformEarningsSummaryResponse, reader: jspb.BinaryReader): GetPlatformEarningsSummaryResponse;
}

export namespace GetPlatformEarningsSummaryResponse {
  export type AsObject = {
    totalEarningsInCents: number;
    totalWithdrawalsInCents: number;
    currentBalanceInCents: number;
    totalOutstandingTokensInCents: number;
    timeSeriesDataList: Array<TimeSeriesDataPoint.AsObject>;
    totalRevenueInCents: number;
    totalCashAssetsInCents: number;
    totalLiabilitiesInCents: number;
    totalProviderFeesInCents: number;
    netIncomeInCents: number;
    totalExpensesInCents: number;
  };
}

export class CreatePlatformWithdrawalRequest extends jspb.Message {
  getAmountInCents(): number;
  setAmountInCents(value: number): CreatePlatformWithdrawalRequest;

  getNote(): string;
  setNote(value: string): CreatePlatformWithdrawalRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): CreatePlatformWithdrawalRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlatformWithdrawalRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlatformWithdrawalRequest): CreatePlatformWithdrawalRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePlatformWithdrawalRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlatformWithdrawalRequest;
  static deserializeBinaryFromReader(message: CreatePlatformWithdrawalRequest, reader: jspb.BinaryReader): CreatePlatformWithdrawalRequest;
}

export namespace CreatePlatformWithdrawalRequest {
  export type AsObject = {
    amountInCents: number;
    note: string;
    idempotencyKey: string;
  };
}

export class CreatePlatformWithdrawalResponse extends jspb.Message {
  getEarning(): PlatformEarning | undefined;
  setEarning(value?: PlatformEarning): CreatePlatformWithdrawalResponse;
  hasEarning(): boolean;
  clearEarning(): CreatePlatformWithdrawalResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePlatformWithdrawalResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePlatformWithdrawalResponse): CreatePlatformWithdrawalResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePlatformWithdrawalResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePlatformWithdrawalResponse;
  static deserializeBinaryFromReader(message: CreatePlatformWithdrawalResponse, reader: jspb.BinaryReader): CreatePlatformWithdrawalResponse;
}

export namespace CreatePlatformWithdrawalResponse {
  export type AsObject = {
    earning?: PlatformEarning.AsObject;
  };
}

export class PlatformBankCashMovement extends jspb.Message {
  getId(): string;
  setId(value: string): PlatformBankCashMovement;

  getMovementType(): PlatformBankCashMovementType;
  setMovementType(value: PlatformBankCashMovementType): PlatformBankCashMovement;

  getAmountInCents(): number;
  setAmountInCents(value: number): PlatformBankCashMovement;

  getCurrency(): string;
  setCurrency(value: string): PlatformBankCashMovement;

  getExternalReference(): string;
  setExternalReference(value: string): PlatformBankCashMovement;

  getOccurredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredAt(value?: google_protobuf_timestamp_pb.Timestamp): PlatformBankCashMovement;
  hasOccurredAt(): boolean;
  clearOccurredAt(): PlatformBankCashMovement;

  getNote(): string;
  setNote(value: string): PlatformBankCashMovement;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): PlatformBankCashMovement;
  hasCreatedAt(): boolean;
  clearCreatedAt(): PlatformBankCashMovement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlatformBankCashMovement.AsObject;
  static toObject(includeInstance: boolean, msg: PlatformBankCashMovement): PlatformBankCashMovement.AsObject;
  static serializeBinaryToWriter(message: PlatformBankCashMovement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlatformBankCashMovement;
  static deserializeBinaryFromReader(message: PlatformBankCashMovement, reader: jspb.BinaryReader): PlatformBankCashMovement;
}

export namespace PlatformBankCashMovement {
  export type AsObject = {
    id: string;
    movementType: PlatformBankCashMovementType;
    amountInCents: number;
    currency: string;
    externalReference: string;
    occurredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    note: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class RecordPlatformBankCashMovementRequest extends jspb.Message {
  getMovementType(): PlatformBankCashMovementType;
  setMovementType(value: PlatformBankCashMovementType): RecordPlatformBankCashMovementRequest;

  getAmountInCents(): number;
  setAmountInCents(value: number): RecordPlatformBankCashMovementRequest;

  getExternalReference(): string;
  setExternalReference(value: string): RecordPlatformBankCashMovementRequest;

  getOccurredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setOccurredAt(value?: google_protobuf_timestamp_pb.Timestamp): RecordPlatformBankCashMovementRequest;
  hasOccurredAt(): boolean;
  clearOccurredAt(): RecordPlatformBankCashMovementRequest;

  getNote(): string;
  setNote(value: string): RecordPlatformBankCashMovementRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): RecordPlatformBankCashMovementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPlatformBankCashMovementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPlatformBankCashMovementRequest): RecordPlatformBankCashMovementRequest.AsObject;
  static serializeBinaryToWriter(message: RecordPlatformBankCashMovementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPlatformBankCashMovementRequest;
  static deserializeBinaryFromReader(message: RecordPlatformBankCashMovementRequest, reader: jspb.BinaryReader): RecordPlatformBankCashMovementRequest;
}

export namespace RecordPlatformBankCashMovementRequest {
  export type AsObject = {
    movementType: PlatformBankCashMovementType;
    amountInCents: number;
    externalReference: string;
    occurredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    note: string;
    idempotencyKey: string;
  };
}

export class RecordPlatformBankCashMovementResponse extends jspb.Message {
  getMovement(): PlatformBankCashMovement | undefined;
  setMovement(value?: PlatformBankCashMovement): RecordPlatformBankCashMovementResponse;
  hasMovement(): boolean;
  clearMovement(): RecordPlatformBankCashMovementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RecordPlatformBankCashMovementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RecordPlatformBankCashMovementResponse): RecordPlatformBankCashMovementResponse.AsObject;
  static serializeBinaryToWriter(message: RecordPlatformBankCashMovementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RecordPlatformBankCashMovementResponse;
  static deserializeBinaryFromReader(message: RecordPlatformBankCashMovementResponse, reader: jspb.BinaryReader): RecordPlatformBankCashMovementResponse;
}

export namespace RecordPlatformBankCashMovementResponse {
  export type AsObject = {
    movement?: PlatformBankCashMovement.AsObject;
  };
}

export class ListPlatformBankCashMovementsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListPlatformBankCashMovementsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPlatformBankCashMovementsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlatformBankCashMovementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlatformBankCashMovementsRequest): ListPlatformBankCashMovementsRequest.AsObject;
  static serializeBinaryToWriter(message: ListPlatformBankCashMovementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlatformBankCashMovementsRequest;
  static deserializeBinaryFromReader(message: ListPlatformBankCashMovementsRequest, reader: jspb.BinaryReader): ListPlatformBankCashMovementsRequest;
}

export namespace ListPlatformBankCashMovementsRequest {
  export type AsObject = {
    pageSize: number;
    pageToken: string;
  };
}

export class ListPlatformBankCashMovementsResponse extends jspb.Message {
  getMovementsList(): Array<PlatformBankCashMovement>;
  setMovementsList(value: Array<PlatformBankCashMovement>): ListPlatformBankCashMovementsResponse;
  clearMovementsList(): ListPlatformBankCashMovementsResponse;
  addMovements(value?: PlatformBankCashMovement, index?: number): PlatformBankCashMovement;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPlatformBankCashMovementsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPlatformBankCashMovementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPlatformBankCashMovementsResponse): ListPlatformBankCashMovementsResponse.AsObject;
  static serializeBinaryToWriter(message: ListPlatformBankCashMovementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPlatformBankCashMovementsResponse;
  static deserializeBinaryFromReader(message: ListPlatformBankCashMovementsResponse, reader: jspb.BinaryReader): ListPlatformBankCashMovementsResponse;
}

export namespace ListPlatformBankCashMovementsResponse {
  export type AsObject = {
    movementsList: Array<PlatformBankCashMovement.AsObject>;
    nextPageToken: string;
  };
}

export class RunFinancialReconciliationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunFinancialReconciliationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RunFinancialReconciliationRequest): RunFinancialReconciliationRequest.AsObject;
  static serializeBinaryToWriter(message: RunFinancialReconciliationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunFinancialReconciliationRequest;
  static deserializeBinaryFromReader(message: RunFinancialReconciliationRequest, reader: jspb.BinaryReader): RunFinancialReconciliationRequest;
}

export namespace RunFinancialReconciliationRequest {
  export type AsObject = {
  };
}

export class Discrepancy extends jspb.Message {
  getId(): string;
  setId(value: string): Discrepancy;

  getCheckType(): string;
  setCheckType(value: string): Discrepancy;

  getDescription(): string;
  setDescription(value: string): Discrepancy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Discrepancy.AsObject;
  static toObject(includeInstance: boolean, msg: Discrepancy): Discrepancy.AsObject;
  static serializeBinaryToWriter(message: Discrepancy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Discrepancy;
  static deserializeBinaryFromReader(message: Discrepancy, reader: jspb.BinaryReader): Discrepancy;
}

export namespace Discrepancy {
  export type AsObject = {
    id: string;
    checkType: string;
    description: string;
  };
}

export class RunFinancialReconciliationResponse extends jspb.Message {
  getIsHealthy(): boolean;
  setIsHealthy(value: boolean): RunFinancialReconciliationResponse;

  getDiscrepanciesList(): Array<Discrepancy>;
  setDiscrepanciesList(value: Array<Discrepancy>): RunFinancialReconciliationResponse;
  clearDiscrepanciesList(): RunFinancialReconciliationResponse;
  addDiscrepancies(value?: Discrepancy, index?: number): Discrepancy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RunFinancialReconciliationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RunFinancialReconciliationResponse): RunFinancialReconciliationResponse.AsObject;
  static serializeBinaryToWriter(message: RunFinancialReconciliationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RunFinancialReconciliationResponse;
  static deserializeBinaryFromReader(message: RunFinancialReconciliationResponse, reader: jspb.BinaryReader): RunFinancialReconciliationResponse;
}

export namespace RunFinancialReconciliationResponse {
  export type AsObject = {
    isHealthy: boolean;
    discrepanciesList: Array<Discrepancy.AsObject>;
  };
}

export class AccountTrialBalanceItem extends jspb.Message {
  getAccountCode(): string;
  setAccountCode(value: string): AccountTrialBalanceItem;

  getAccountName(): string;
  setAccountName(value: string): AccountTrialBalanceItem;

  getAccountType(): string;
  setAccountType(value: string): AccountTrialBalanceItem;

  getNormalBalance(): string;
  setNormalBalance(value: string): AccountTrialBalanceItem;

  getTotalDebitCents(): number;
  setTotalDebitCents(value: number): AccountTrialBalanceItem;

  getTotalCreditCents(): number;
  setTotalCreditCents(value: number): AccountTrialBalanceItem;

  getNetBalanceCents(): number;
  setNetBalanceCents(value: number): AccountTrialBalanceItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountTrialBalanceItem.AsObject;
  static toObject(includeInstance: boolean, msg: AccountTrialBalanceItem): AccountTrialBalanceItem.AsObject;
  static serializeBinaryToWriter(message: AccountTrialBalanceItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountTrialBalanceItem;
  static deserializeBinaryFromReader(message: AccountTrialBalanceItem, reader: jspb.BinaryReader): AccountTrialBalanceItem;
}

export namespace AccountTrialBalanceItem {
  export type AsObject = {
    accountCode: string;
    accountName: string;
    accountType: string;
    normalBalance: string;
    totalDebitCents: number;
    totalCreditCents: number;
    netBalanceCents: number;
  };
}

export class GetTrialBalanceReportRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrialBalanceReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrialBalanceReportRequest): GetTrialBalanceReportRequest.AsObject;
  static serializeBinaryToWriter(message: GetTrialBalanceReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrialBalanceReportRequest;
  static deserializeBinaryFromReader(message: GetTrialBalanceReportRequest, reader: jspb.BinaryReader): GetTrialBalanceReportRequest;
}

export namespace GetTrialBalanceReportRequest {
  export type AsObject = {
  };
}

export class GetTrialBalanceReportResponse extends jspb.Message {
  getIsBalanced(): boolean;
  setIsBalanced(value: boolean): GetTrialBalanceReportResponse;

  getTotalDebitsInCents(): number;
  setTotalDebitsInCents(value: number): GetTrialBalanceReportResponse;

  getTotalCreditsInCents(): number;
  setTotalCreditsInCents(value: number): GetTrialBalanceReportResponse;

  getImbalanceInCents(): number;
  setImbalanceInCents(value: number): GetTrialBalanceReportResponse;

  getTotalAssetsInCents(): number;
  setTotalAssetsInCents(value: number): GetTrialBalanceReportResponse;

  getTotalLiabilitiesInCents(): number;
  setTotalLiabilitiesInCents(value: number): GetTrialBalanceReportResponse;

  getTotalRevenueInCents(): number;
  setTotalRevenueInCents(value: number): GetTrialBalanceReportResponse;

  getTotalExpenseInCents(): number;
  setTotalExpenseInCents(value: number): GetTrialBalanceReportResponse;

  getNetIncomeInCents(): number;
  setNetIncomeInCents(value: number): GetTrialBalanceReportResponse;

  getAccountsList(): Array<AccountTrialBalanceItem>;
  setAccountsList(value: Array<AccountTrialBalanceItem>): GetTrialBalanceReportResponse;
  clearAccountsList(): GetTrialBalanceReportResponse;
  addAccounts(value?: AccountTrialBalanceItem, index?: number): AccountTrialBalanceItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetTrialBalanceReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetTrialBalanceReportResponse): GetTrialBalanceReportResponse.AsObject;
  static serializeBinaryToWriter(message: GetTrialBalanceReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetTrialBalanceReportResponse;
  static deserializeBinaryFromReader(message: GetTrialBalanceReportResponse, reader: jspb.BinaryReader): GetTrialBalanceReportResponse;
}

export namespace GetTrialBalanceReportResponse {
  export type AsObject = {
    isBalanced: boolean;
    totalDebitsInCents: number;
    totalCreditsInCents: number;
    imbalanceInCents: number;
    totalAssetsInCents: number;
    totalLiabilitiesInCents: number;
    totalRevenueInCents: number;
    totalExpenseInCents: number;
    netIncomeInCents: number;
    accountsList: Array<AccountTrialBalanceItem.AsObject>;
  };
}

export class ProviderStatement extends jspb.Message {
  getId(): string;
  setId(value: string): ProviderStatement;

  getProvider(): string;
  setProvider(value: string): ProviderStatement;

  getStatementPeriod(): string;
  setStatementPeriod(value: string): ProviderStatement;

  getStatementIdentifier(): string;
  setStatementIdentifier(value: string): ProviderStatement;

  getCurrency(): string;
  setCurrency(value: string): ProviderStatement;

  getTotalOrders(): number;
  setTotalOrders(value: number): ProviderStatement;

  getMatchedOrders(): number;
  setMatchedOrders(value: number): ProviderStatement;

  getUnmatchedOrders(): number;
  setUnmatchedOrders(value: number): ProviderStatement;

  getTotalGrossCents(): number;
  setTotalGrossCents(value: number): ProviderStatement;

  getTotalTaxCents(): number;
  setTotalTaxCents(value: number): ProviderStatement;

  getTotalFeeCents(): number;
  setTotalFeeCents(value: number): ProviderStatement;

  getTotalNetCents(): number;
  setTotalNetCents(value: number): ProviderStatement;

  getFxAdjustmentCents(): number;
  setFxAdjustmentCents(value: number): ProviderStatement;

  getUploadedBy(): number;
  setUploadedBy(value: number): ProviderStatement;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProviderStatement;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ProviderStatement;

  getStatus(): string;
  setStatus(value: string): ProviderStatement;

  getRawTotalGrossCents(): number;
  setRawTotalGrossCents(value: number): ProviderStatement;

  getRawTotalNetCents(): number;
  setRawTotalNetCents(value: number): ProviderStatement;

  getRawTotalFeeCents(): number;
  setRawTotalFeeCents(value: number): ProviderStatement;

  getRawTotalTaxCents(): number;
  setRawTotalTaxCents(value: number): ProviderStatement;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProviderStatement;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): ProviderStatement;

  getContentHash(): string;
  setContentHash(value: string): ProviderStatement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderStatement.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderStatement): ProviderStatement.AsObject;
  static serializeBinaryToWriter(message: ProviderStatement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderStatement;
  static deserializeBinaryFromReader(message: ProviderStatement, reader: jspb.BinaryReader): ProviderStatement;
}

export namespace ProviderStatement {
  export type AsObject = {
    id: string;
    provider: string;
    statementPeriod: string;
    statementIdentifier: string;
    currency: string;
    totalOrders: number;
    matchedOrders: number;
    unmatchedOrders: number;
    totalGrossCents: number;
    totalTaxCents: number;
    totalFeeCents: number;
    totalNetCents: number;
    fxAdjustmentCents: number;
    uploadedBy: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    status: string;
    rawTotalGrossCents: number;
    rawTotalNetCents: number;
    rawTotalFeeCents: number;
    rawTotalTaxCents: number;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    contentHash: string;
  };
}

export class ImportProviderStatementRequest extends jspb.Message {
  getProvider(): string;
  setProvider(value: string): ImportProviderStatementRequest;

  getStatementPeriod(): string;
  setStatementPeriod(value: string): ImportProviderStatementRequest;

  getStatementIdentifier(): string;
  setStatementIdentifier(value: string): ImportProviderStatementRequest;

  getCurrency(): string;
  setCurrency(value: string): ImportProviderStatementRequest;

  getCsvContent(): string;
  setCsvContent(value: string): ImportProviderStatementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportProviderStatementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ImportProviderStatementRequest): ImportProviderStatementRequest.AsObject;
  static serializeBinaryToWriter(message: ImportProviderStatementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportProviderStatementRequest;
  static deserializeBinaryFromReader(message: ImportProviderStatementRequest, reader: jspb.BinaryReader): ImportProviderStatementRequest;
}

export namespace ImportProviderStatementRequest {
  export type AsObject = {
    provider: string;
    statementPeriod: string;
    statementIdentifier: string;
    currency: string;
    csvContent: string;
  };
}

export class ImportProviderStatementResponse extends jspb.Message {
  getStatementId(): string;
  setStatementId(value: string): ImportProviderStatementResponse;

  getStatementIdentifier(): string;
  setStatementIdentifier(value: string): ImportProviderStatementResponse;

  getTotalOrders(): number;
  setTotalOrders(value: number): ImportProviderStatementResponse;

  getMatchedOrders(): number;
  setMatchedOrders(value: number): ImportProviderStatementResponse;

  getUnmatchedOrders(): number;
  setUnmatchedOrders(value: number): ImportProviderStatementResponse;

  getTotalGrossCents(): number;
  setTotalGrossCents(value: number): ImportProviderStatementResponse;

  getTotalTaxCents(): number;
  setTotalTaxCents(value: number): ImportProviderStatementResponse;

  getTotalFeeCents(): number;
  setTotalFeeCents(value: number): ImportProviderStatementResponse;

  getTotalNetCents(): number;
  setTotalNetCents(value: number): ImportProviderStatementResponse;

  getFxAdjustmentCents(): number;
  setFxAdjustmentCents(value: number): ImportProviderStatementResponse;

  getUnmatchedIdsList(): Array<string>;
  setUnmatchedIdsList(value: Array<string>): ImportProviderStatementResponse;
  clearUnmatchedIdsList(): ImportProviderStatementResponse;
  addUnmatchedIds(value: string, index?: number): ImportProviderStatementResponse;

  getMessage(): string;
  setMessage(value: string): ImportProviderStatementResponse;

  getStatus(): string;
  setStatus(value: string): ImportProviderStatementResponse;

  getRawTotalGrossCents(): number;
  setRawTotalGrossCents(value: number): ImportProviderStatementResponse;

  getRawTotalNetCents(): number;
  setRawTotalNetCents(value: number): ImportProviderStatementResponse;

  getRawTotalFeeCents(): number;
  setRawTotalFeeCents(value: number): ImportProviderStatementResponse;

  getRawTotalTaxCents(): number;
  setRawTotalTaxCents(value: number): ImportProviderStatementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ImportProviderStatementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ImportProviderStatementResponse): ImportProviderStatementResponse.AsObject;
  static serializeBinaryToWriter(message: ImportProviderStatementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ImportProviderStatementResponse;
  static deserializeBinaryFromReader(message: ImportProviderStatementResponse, reader: jspb.BinaryReader): ImportProviderStatementResponse;
}

export namespace ImportProviderStatementResponse {
  export type AsObject = {
    statementId: string;
    statementIdentifier: string;
    totalOrders: number;
    matchedOrders: number;
    unmatchedOrders: number;
    totalGrossCents: number;
    totalTaxCents: number;
    totalFeeCents: number;
    totalNetCents: number;
    fxAdjustmentCents: number;
    unmatchedIdsList: Array<string>;
    message: string;
    status: string;
    rawTotalGrossCents: number;
    rawTotalNetCents: number;
    rawTotalFeeCents: number;
    rawTotalTaxCents: number;
  };
}

export class ListProviderStatementsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListProviderStatementsRequest;

  getPage(): number;
  setPage(value: number): ListProviderStatementsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProviderStatementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProviderStatementsRequest): ListProviderStatementsRequest.AsObject;
  static serializeBinaryToWriter(message: ListProviderStatementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProviderStatementsRequest;
  static deserializeBinaryFromReader(message: ListProviderStatementsRequest, reader: jspb.BinaryReader): ListProviderStatementsRequest;
}

export namespace ListProviderStatementsRequest {
  export type AsObject = {
    pageSize: number;
    page: number;
  };
}

export class ListProviderStatementsResponse extends jspb.Message {
  getStatementsList(): Array<ProviderStatement>;
  setStatementsList(value: Array<ProviderStatement>): ListProviderStatementsResponse;
  clearStatementsList(): ListProviderStatementsResponse;
  addStatements(value?: ProviderStatement, index?: number): ProviderStatement;

  getTotalCount(): number;
  setTotalCount(value: number): ListProviderStatementsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProviderStatementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProviderStatementsResponse): ListProviderStatementsResponse.AsObject;
  static serializeBinaryToWriter(message: ListProviderStatementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProviderStatementsResponse;
  static deserializeBinaryFromReader(message: ListProviderStatementsResponse, reader: jspb.BinaryReader): ListProviderStatementsResponse;
}

export namespace ListProviderStatementsResponse {
  export type AsObject = {
    statementsList: Array<ProviderStatement.AsObject>;
    totalCount: number;
  };
}

export class ProviderStatementLine extends jspb.Message {
  getId(): number;
  setId(value: number): ProviderStatementLine;

  getStatementId(): string;
  setStatementId(value: string): ProviderStatementLine;

  getStatementIdentifier(): string;
  setStatementIdentifier(value: string): ProviderStatementLine;

  getRowIndex(): number;
  setRowIndex(value: number): ProviderStatementLine;

  getOrderId(): string;
  setOrderId(value: string): ProviderStatementLine;

  getPlatformTransactionId(): string;
  setPlatformTransactionId(value: string): ProviderStatementLine;

  getEventType(): string;
  setEventType(value: string): ProviderStatementLine;

  getGrossAmountCents(): number;
  setGrossAmountCents(value: number): ProviderStatementLine;

  getNetAmountCents(): number;
  setNetAmountCents(value: number): ProviderStatementLine;

  getFeeAmountCents(): number;
  setFeeAmountCents(value: number): ProviderStatementLine;

  getTaxAmountCents(): number;
  setTaxAmountCents(value: number): ProviderStatementLine;

  getOriginalCurrency(): string;
  setOriginalCurrency(value: string): ProviderStatementLine;

  getOriginalAmountCents(): number;
  setOriginalAmountCents(value: number): ProviderStatementLine;

  getExchangeRate(): number;
  setExchangeRate(value: number): ProviderStatementLine;

  getStatus(): string;
  setStatus(value: string): ProviderStatementLine;

  getUnmatchedReason(): string;
  setUnmatchedReason(value: string): ProviderStatementLine;

  getMatchedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setMatchedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProviderStatementLine;
  hasMatchedAt(): boolean;
  clearMatchedAt(): ProviderStatementLine;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ProviderStatementLine;
  hasCreatedAt(): boolean;
  clearCreatedAt(): ProviderStatementLine;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProviderStatementLine.AsObject;
  static toObject(includeInstance: boolean, msg: ProviderStatementLine): ProviderStatementLine.AsObject;
  static serializeBinaryToWriter(message: ProviderStatementLine, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProviderStatementLine;
  static deserializeBinaryFromReader(message: ProviderStatementLine, reader: jspb.BinaryReader): ProviderStatementLine;
}

export namespace ProviderStatementLine {
  export type AsObject = {
    id: number;
    statementId: string;
    statementIdentifier: string;
    rowIndex: number;
    orderId: string;
    platformTransactionId: string;
    eventType: string;
    grossAmountCents: number;
    netAmountCents: number;
    feeAmountCents: number;
    taxAmountCents: number;
    originalCurrency: string;
    originalAmountCents: number;
    exchangeRate: number;
    status: string;
    unmatchedReason: string;
    matchedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class ListProviderStatementLinesRequest extends jspb.Message {
  getStatementId(): string;
  setStatementId(value: string): ListProviderStatementLinesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListProviderStatementLinesRequest;

  getPage(): number;
  setPage(value: number): ListProviderStatementLinesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProviderStatementLinesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListProviderStatementLinesRequest): ListProviderStatementLinesRequest.AsObject;
  static serializeBinaryToWriter(message: ListProviderStatementLinesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProviderStatementLinesRequest;
  static deserializeBinaryFromReader(message: ListProviderStatementLinesRequest, reader: jspb.BinaryReader): ListProviderStatementLinesRequest;
}

export namespace ListProviderStatementLinesRequest {
  export type AsObject = {
    statementId: string;
    pageSize: number;
    page: number;
  };
}

export class ListProviderStatementLinesResponse extends jspb.Message {
  getLinesList(): Array<ProviderStatementLine>;
  setLinesList(value: Array<ProviderStatementLine>): ListProviderStatementLinesResponse;
  clearLinesList(): ListProviderStatementLinesResponse;
  addLines(value?: ProviderStatementLine, index?: number): ProviderStatementLine;

  getTotalCount(): number;
  setTotalCount(value: number): ListProviderStatementLinesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListProviderStatementLinesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListProviderStatementLinesResponse): ListProviderStatementLinesResponse.AsObject;
  static serializeBinaryToWriter(message: ListProviderStatementLinesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListProviderStatementLinesResponse;
  static deserializeBinaryFromReader(message: ListProviderStatementLinesResponse, reader: jspb.BinaryReader): ListProviderStatementLinesResponse;
}

export namespace ListProviderStatementLinesResponse {
  export type AsObject = {
    linesList: Array<ProviderStatementLine.AsObject>;
    totalCount: number;
  };
}

export enum PeriodType {
  PERIOD_TYPE_UNSPECIFIED = 0,
  YEAR = 1,
  QUARTER = 2,
  MONTH = 3,
  WEEK = 4,
}
export enum PlatformBankCashMovementType {
  PLATFORM_BANK_CASH_MOVEMENT_TYPE_UNSPECIFIED = 0,
  PLATFORM_BANK_CASH_MOVEMENT_TYPE_OWNER_CONTRIBUTION = 1,
  PLATFORM_BANK_CASH_MOVEMENT_TYPE_OWNER_LOAN = 2,
  PLATFORM_BANK_CASH_MOVEMENT_TYPE_OWNER_DISTRIBUTION = 3,
  PLATFORM_BANK_CASH_MOVEMENT_TYPE_OWNER_LOAN_REPAYMENT = 4,
}
