import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class AdminAnnouncementInfo extends jspb.Message {
  getId(): string;
  setId(value: string): AdminAnnouncementInfo;

  getTitle(): string;
  setTitle(value: string): AdminAnnouncementInfo;

  getContent(): string;
  setContent(value: string): AdminAnnouncementInfo;

  getTargetAudience(): string;
  setTargetAudience(value: string): AdminAnnouncementInfo;

  getTargetUserIdsList(): Array<number>;
  setTargetUserIdsList(value: Array<number>): AdminAnnouncementInfo;
  clearTargetUserIdsList(): AdminAnnouncementInfo;
  addTargetUserIds(value: number, index?: number): AdminAnnouncementInfo;

  getPriority(): string;
  setPriority(value: string): AdminAnnouncementInfo;

  getActionUrl(): string;
  setActionUrl(value: string): AdminAnnouncementInfo;

  getAdminUserId(): number;
  setAdminUserId(value: number): AdminAnnouncementInfo;

  getAdminEmail(): string;
  setAdminEmail(value: string): AdminAnnouncementInfo;

  getSentCount(): number;
  setSentCount(value: number): AdminAnnouncementInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminAnnouncementInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): AdminAnnouncementInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminAnnouncementInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdminAnnouncementInfo): AdminAnnouncementInfo.AsObject;
  static serializeBinaryToWriter(message: AdminAnnouncementInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminAnnouncementInfo;
  static deserializeBinaryFromReader(message: AdminAnnouncementInfo, reader: jspb.BinaryReader): AdminAnnouncementInfo;
}

export namespace AdminAnnouncementInfo {
  export type AsObject = {
    id: string;
    title: string;
    content: string;
    targetAudience: string;
    targetUserIdsList: Array<number>;
    priority: string;
    actionUrl: string;
    adminUserId: number;
    adminEmail: string;
    sentCount: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class AdminCreateAnnouncementRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): AdminCreateAnnouncementRequest;

  getContent(): string;
  setContent(value: string): AdminCreateAnnouncementRequest;

  getTargetAudience(): string;
  setTargetAudience(value: string): AdminCreateAnnouncementRequest;

  getTargetUserIdsList(): Array<number>;
  setTargetUserIdsList(value: Array<number>): AdminCreateAnnouncementRequest;
  clearTargetUserIdsList(): AdminCreateAnnouncementRequest;
  addTargetUserIds(value: number, index?: number): AdminCreateAnnouncementRequest;

  getPriority(): string;
  setPriority(value: string): AdminCreateAnnouncementRequest;

  getActionUrl(): string;
  setActionUrl(value: string): AdminCreateAnnouncementRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCreateAnnouncementRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCreateAnnouncementRequest): AdminCreateAnnouncementRequest.AsObject;
  static serializeBinaryToWriter(message: AdminCreateAnnouncementRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCreateAnnouncementRequest;
  static deserializeBinaryFromReader(message: AdminCreateAnnouncementRequest, reader: jspb.BinaryReader): AdminCreateAnnouncementRequest;
}

export namespace AdminCreateAnnouncementRequest {
  export type AsObject = {
    title: string;
    content: string;
    targetAudience: string;
    targetUserIdsList: Array<number>;
    priority: string;
    actionUrl: string;
  };
}

export class AdminCreateAnnouncementResponse extends jspb.Message {
  getAnnouncement(): AdminAnnouncementInfo | undefined;
  setAnnouncement(value?: AdminAnnouncementInfo): AdminCreateAnnouncementResponse;
  hasAnnouncement(): boolean;
  clearAnnouncement(): AdminCreateAnnouncementResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminCreateAnnouncementResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminCreateAnnouncementResponse): AdminCreateAnnouncementResponse.AsObject;
  static serializeBinaryToWriter(message: AdminCreateAnnouncementResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminCreateAnnouncementResponse;
  static deserializeBinaryFromReader(message: AdminCreateAnnouncementResponse, reader: jspb.BinaryReader): AdminCreateAnnouncementResponse;
}

export namespace AdminCreateAnnouncementResponse {
  export type AsObject = {
    announcement?: AdminAnnouncementInfo.AsObject;
  };
}

export class AdminListAnnouncementsRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): AdminListAnnouncementsRequest;

  getPageSize(): number;
  setPageSize(value: number): AdminListAnnouncementsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListAnnouncementsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListAnnouncementsRequest): AdminListAnnouncementsRequest.AsObject;
  static serializeBinaryToWriter(message: AdminListAnnouncementsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListAnnouncementsRequest;
  static deserializeBinaryFromReader(message: AdminListAnnouncementsRequest, reader: jspb.BinaryReader): AdminListAnnouncementsRequest;
}

export namespace AdminListAnnouncementsRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
  };
}

export class AdminListAnnouncementsResponse extends jspb.Message {
  getAnnouncementsList(): Array<AdminAnnouncementInfo>;
  setAnnouncementsList(value: Array<AdminAnnouncementInfo>): AdminListAnnouncementsResponse;
  clearAnnouncementsList(): AdminListAnnouncementsResponse;
  addAnnouncements(value?: AdminAnnouncementInfo, index?: number): AdminAnnouncementInfo;

  getTotalCount(): number;
  setTotalCount(value: number): AdminListAnnouncementsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListAnnouncementsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListAnnouncementsResponse): AdminListAnnouncementsResponse.AsObject;
  static serializeBinaryToWriter(message: AdminListAnnouncementsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListAnnouncementsResponse;
  static deserializeBinaryFromReader(message: AdminListAnnouncementsResponse, reader: jspb.BinaryReader): AdminListAnnouncementsResponse;
}

export namespace AdminListAnnouncementsResponse {
  export type AsObject = {
    announcementsList: Array<AdminAnnouncementInfo.AsObject>;
    totalCount: number;
  };
}

export class AdminAuditLogInfo extends jspb.Message {
  getId(): string;
  setId(value: string): AdminAuditLogInfo;

  getAdminUserId(): number;
  setAdminUserId(value: number): AdminAuditLogInfo;

  getAdminEmail(): string;
  setAdminEmail(value: string): AdminAuditLogInfo;

  getActionType(): string;
  setActionType(value: string): AdminAuditLogInfo;

  getTargetResourceType(): string;
  setTargetResourceType(value: string): AdminAuditLogInfo;

  getTargetResourceId(): string;
  setTargetResourceId(value: string): AdminAuditLogInfo;

  getDetailsJson(): string;
  setDetailsJson(value: string): AdminAuditLogInfo;

  getIpAddress(): string;
  setIpAddress(value: string): AdminAuditLogInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminAuditLogInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): AdminAuditLogInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminAuditLogInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdminAuditLogInfo): AdminAuditLogInfo.AsObject;
  static serializeBinaryToWriter(message: AdminAuditLogInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminAuditLogInfo;
  static deserializeBinaryFromReader(message: AdminAuditLogInfo, reader: jspb.BinaryReader): AdminAuditLogInfo;
}

export namespace AdminAuditLogInfo {
  export type AsObject = {
    id: string;
    adminUserId: number;
    adminEmail: string;
    actionType: string;
    targetResourceType: string;
    targetResourceId: string;
    detailsJson: string;
    ipAddress: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class AdminListAuditLogsRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): AdminListAuditLogsRequest;

  getPageSize(): number;
  setPageSize(value: number): AdminListAuditLogsRequest;

  getActionType(): string;
  setActionType(value: string): AdminListAuditLogsRequest;
  hasActionType(): boolean;
  clearActionType(): AdminListAuditLogsRequest;

  getAdminUserId(): number;
  setAdminUserId(value: number): AdminListAuditLogsRequest;
  hasAdminUserId(): boolean;
  clearAdminUserId(): AdminListAuditLogsRequest;

  getTargetResourceType(): string;
  setTargetResourceType(value: string): AdminListAuditLogsRequest;
  hasTargetResourceType(): boolean;
  clearTargetResourceType(): AdminListAuditLogsRequest;

  getTargetResourceId(): string;
  setTargetResourceId(value: string): AdminListAuditLogsRequest;
  hasTargetResourceId(): boolean;
  clearTargetResourceId(): AdminListAuditLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListAuditLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListAuditLogsRequest): AdminListAuditLogsRequest.AsObject;
  static serializeBinaryToWriter(message: AdminListAuditLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListAuditLogsRequest;
  static deserializeBinaryFromReader(message: AdminListAuditLogsRequest, reader: jspb.BinaryReader): AdminListAuditLogsRequest;
}

export namespace AdminListAuditLogsRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    actionType?: string;
    adminUserId?: number;
    targetResourceType?: string;
    targetResourceId?: string;
  };

  export enum ActionTypeCase {
    _ACTION_TYPE_NOT_SET = 0,
    ACTION_TYPE = 3,
  }

  export enum AdminUserIdCase {
    _ADMIN_USER_ID_NOT_SET = 0,
    ADMIN_USER_ID = 4,
  }

  export enum TargetResourceTypeCase {
    _TARGET_RESOURCE_TYPE_NOT_SET = 0,
    TARGET_RESOURCE_TYPE = 5,
  }

  export enum TargetResourceIdCase {
    _TARGET_RESOURCE_ID_NOT_SET = 0,
    TARGET_RESOURCE_ID = 6,
  }
}

export class AdminListAuditLogsResponse extends jspb.Message {
  getAuditLogsList(): Array<AdminAuditLogInfo>;
  setAuditLogsList(value: Array<AdminAuditLogInfo>): AdminListAuditLogsResponse;
  clearAuditLogsList(): AdminListAuditLogsResponse;
  addAuditLogs(value?: AdminAuditLogInfo, index?: number): AdminAuditLogInfo;

  getTotalCount(): number;
  setTotalCount(value: number): AdminListAuditLogsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListAuditLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListAuditLogsResponse): AdminListAuditLogsResponse.AsObject;
  static serializeBinaryToWriter(message: AdminListAuditLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListAuditLogsResponse;
  static deserializeBinaryFromReader(message: AdminListAuditLogsResponse, reader: jspb.BinaryReader): AdminListAuditLogsResponse;
}

export namespace AdminListAuditLogsResponse {
  export type AsObject = {
    auditLogsList: Array<AdminAuditLogInfo.AsObject>;
    totalCount: number;
  };
}

