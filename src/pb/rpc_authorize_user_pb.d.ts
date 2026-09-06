import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as user_pb from './user_pb'; // proto import: "user.proto"


export class AuthorizeUserRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeUserRequest): AuthorizeUserRequest.AsObject;
  static serializeBinaryToWriter(message: AuthorizeUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeUserRequest;
  static deserializeBinaryFromReader(message: AuthorizeUserRequest, reader: jspb.BinaryReader): AuthorizeUserRequest;
}

export namespace AuthorizeUserRequest {
  export type AsObject = {
  };
}

export class AuthorizeUserResponse extends jspb.Message {
  getId(): string;
  setId(value: string): AuthorizeUserResponse;

  getUserId(): number;
  setUserId(value: number): AuthorizeUserResponse;

  getIssuedat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setIssuedat(value?: google_protobuf_timestamp_pb.Timestamp): AuthorizeUserResponse;
  hasIssuedat(): boolean;
  clearIssuedat(): AuthorizeUserResponse;

  getExpiredat(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredat(value?: google_protobuf_timestamp_pb.Timestamp): AuthorizeUserResponse;
  hasExpiredat(): boolean;
  clearExpiredat(): AuthorizeUserResponse;

  getPermission(): number;
  setPermission(value: number): AuthorizeUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeUserResponse): AuthorizeUserResponse.AsObject;
  static serializeBinaryToWriter(message: AuthorizeUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeUserResponse;
  static deserializeBinaryFromReader(message: AuthorizeUserResponse, reader: jspb.BinaryReader): AuthorizeUserResponse;
}

export namespace AuthorizeUserResponse {
  export type AsObject = {
    id: string;
    userId: number;
    issuedat?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiredat?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    permission: number;
  };
}

export class LogoutUserRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): LogoutUserRequest;

  getLogoutAllDevices(): boolean;
  setLogoutAllDevices(value: boolean): LogoutUserRequest;
  hasLogoutAllDevices(): boolean;
  clearLogoutAllDevices(): LogoutUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutUserRequest): LogoutUserRequest.AsObject;
  static serializeBinaryToWriter(message: LogoutUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutUserRequest;
  static deserializeBinaryFromReader(message: LogoutUserRequest, reader: jspb.BinaryReader): LogoutUserRequest;
}

export namespace LogoutUserRequest {
  export type AsObject = {
    sessionId: string;
    logoutAllDevices?: boolean;
  };

  export enum LogoutAllDevicesCase {
    _LOGOUT_ALL_DEVICES_NOT_SET = 0,
    LOGOUT_ALL_DEVICES = 2,
  }
}

export class LogoutUserResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): LogoutUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LogoutUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LogoutUserResponse): LogoutUserResponse.AsObject;
  static serializeBinaryToWriter(message: LogoutUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LogoutUserResponse;
  static deserializeBinaryFromReader(message: LogoutUserResponse, reader: jspb.BinaryReader): LogoutUserResponse;
}

export namespace LogoutUserResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class UpdateUserPasswordRequest extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): UpdateUserPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): UpdateUserPasswordRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): UpdateUserPasswordRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): UpdateUserPasswordRequest;

  getOauthToken(): string;
  setOauthToken(value: string): UpdateUserPasswordRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): UpdateUserPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserPasswordRequest): UpdateUserPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserPasswordRequest;
  static deserializeBinaryFromReader(message: UpdateUserPasswordRequest, reader: jspb.BinaryReader): UpdateUserPasswordRequest;
}

export namespace UpdateUserPasswordRequest {
  export type AsObject = {
    oldPassword: string;
    newPassword: string;
    oauthProvider?: string;
    oauthToken?: string;
  };

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 3,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 4,
  }
}

export class UpdateUserLoginEmailRequest extends jspb.Message {
  getOldPassword(): string;
  setOldPassword(value: string): UpdateUserLoginEmailRequest;

  getNewEmail(): string;
  setNewEmail(value: string): UpdateUserLoginEmailRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): UpdateUserLoginEmailRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): UpdateUserLoginEmailRequest;

  getOauthToken(): string;
  setOauthToken(value: string): UpdateUserLoginEmailRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): UpdateUserLoginEmailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateUserLoginEmailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateUserLoginEmailRequest): UpdateUserLoginEmailRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateUserLoginEmailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateUserLoginEmailRequest;
  static deserializeBinaryFromReader(message: UpdateUserLoginEmailRequest, reader: jspb.BinaryReader): UpdateUserLoginEmailRequest;
}

export namespace UpdateUserLoginEmailRequest {
  export type AsObject = {
    oldPassword: string;
    newEmail: string;
    oauthProvider?: string;
    oauthToken?: string;
  };

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 3,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 4,
  }
}

export class SessionInfo extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): SessionInfo;

  getClientIp(): string;
  setClientIp(value: string): SessionInfo;

  getUserAgent(): string;
  setUserAgent(value: string): SessionInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): SessionInfo;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): SessionInfo;
  hasExpiresAt(): boolean;
  clearExpiresAt(): SessionInfo;

  getIsCurrent(): boolean;
  setIsCurrent(value: boolean): SessionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SessionInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SessionInfo): SessionInfo.AsObject;
  static serializeBinaryToWriter(message: SessionInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SessionInfo;
  static deserializeBinaryFromReader(message: SessionInfo, reader: jspb.BinaryReader): SessionInfo;
}

export namespace SessionInfo {
  export type AsObject = {
    sessionId: string;
    clientIp: string;
    userAgent: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    isCurrent: boolean;
  };
}

export class ListSessionsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsRequest): ListSessionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSessionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsRequest;
  static deserializeBinaryFromReader(message: ListSessionsRequest, reader: jspb.BinaryReader): ListSessionsRequest;
}

export namespace ListSessionsRequest {
  export type AsObject = {
  };
}

export class ListSessionsResponse extends jspb.Message {
  getSessionsList(): Array<SessionInfo>;
  setSessionsList(value: Array<SessionInfo>): ListSessionsResponse;
  clearSessionsList(): ListSessionsResponse;
  addSessions(value?: SessionInfo, index?: number): SessionInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSessionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSessionsResponse): ListSessionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSessionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSessionsResponse;
  static deserializeBinaryFromReader(message: ListSessionsResponse, reader: jspb.BinaryReader): ListSessionsResponse;
}

export namespace ListSessionsResponse {
  export type AsObject = {
    sessionsList: Array<SessionInfo.AsObject>;
  };
}

export class CreateWebHandoffCodeRequest extends jspb.Message {
  getScope(): string;
  setScope(value: string): CreateWebHandoffCodeRequest;
  hasScope(): boolean;
  clearScope(): CreateWebHandoffCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebHandoffCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebHandoffCodeRequest): CreateWebHandoffCodeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWebHandoffCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebHandoffCodeRequest;
  static deserializeBinaryFromReader(message: CreateWebHandoffCodeRequest, reader: jspb.BinaryReader): CreateWebHandoffCodeRequest;
}

export namespace CreateWebHandoffCodeRequest {
  export type AsObject = {
    scope?: string;
  };

  export enum ScopeCase {
    _SCOPE_NOT_SET = 0,
    SCOPE = 1,
  }
}

export class CreateWebHandoffCodeResponse extends jspb.Message {
  getHandoffCode(): string;
  setHandoffCode(value: string): CreateWebHandoffCodeResponse;

  getExpiresInSeconds(): number;
  setExpiresInSeconds(value: number): CreateWebHandoffCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWebHandoffCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWebHandoffCodeResponse): CreateWebHandoffCodeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateWebHandoffCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWebHandoffCodeResponse;
  static deserializeBinaryFromReader(message: CreateWebHandoffCodeResponse, reader: jspb.BinaryReader): CreateWebHandoffCodeResponse;
}

export namespace CreateWebHandoffCodeResponse {
  export type AsObject = {
    handoffCode: string;
    expiresInSeconds: number;
  };
}

export class ExchangeWebHandoffCodeRequest extends jspb.Message {
  getHandoffCode(): string;
  setHandoffCode(value: string): ExchangeWebHandoffCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeWebHandoffCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeWebHandoffCodeRequest): ExchangeWebHandoffCodeRequest.AsObject;
  static serializeBinaryToWriter(message: ExchangeWebHandoffCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeWebHandoffCodeRequest;
  static deserializeBinaryFromReader(message: ExchangeWebHandoffCodeRequest, reader: jspb.BinaryReader): ExchangeWebHandoffCodeRequest;
}

export namespace ExchangeWebHandoffCodeRequest {
  export type AsObject = {
    handoffCode: string;
  };
}

export class ExchangeWebHandoffCodeResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): ExchangeWebHandoffCodeResponse;
  hasUser(): boolean;
  clearUser(): ExchangeWebHandoffCodeResponse;

  getAccessToken(): string;
  setAccessToken(value: string): ExchangeWebHandoffCodeResponse;

  getSessionId(): string;
  setSessionId(value: string): ExchangeWebHandoffCodeResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): ExchangeWebHandoffCodeResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): ExchangeWebHandoffCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeWebHandoffCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeWebHandoffCodeResponse): ExchangeWebHandoffCodeResponse.AsObject;
  static serializeBinaryToWriter(message: ExchangeWebHandoffCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeWebHandoffCodeResponse;
  static deserializeBinaryFromReader(message: ExchangeWebHandoffCodeResponse, reader: jspb.BinaryReader): ExchangeWebHandoffCodeResponse;
}

export namespace ExchangeWebHandoffCodeResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject;
    accessToken: string;
    sessionId: string;
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

