import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class RequestAccountDeletionRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): RequestAccountDeletionRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): RequestAccountDeletionRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): RequestAccountDeletionRequest;

  getOauthToken(): string;
  setOauthToken(value: string): RequestAccountDeletionRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): RequestAccountDeletionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestAccountDeletionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestAccountDeletionRequest): RequestAccountDeletionRequest.AsObject;
  static serializeBinaryToWriter(message: RequestAccountDeletionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestAccountDeletionRequest;
  static deserializeBinaryFromReader(message: RequestAccountDeletionRequest, reader: jspb.BinaryReader): RequestAccountDeletionRequest;
}

export namespace RequestAccountDeletionRequest {
  export type AsObject = {
    password: string;
    oauthProvider?: string;
    oauthToken?: string;
  };

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 2,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 3,
  }
}

export class RequestAccountDeletionResponse extends jspb.Message {
  getFinalDeletionTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinalDeletionTime(value?: google_protobuf_timestamp_pb.Timestamp): RequestAccountDeletionResponse;
  hasFinalDeletionTime(): boolean;
  clearFinalDeletionTime(): RequestAccountDeletionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestAccountDeletionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestAccountDeletionResponse): RequestAccountDeletionResponse.AsObject;
  static serializeBinaryToWriter(message: RequestAccountDeletionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestAccountDeletionResponse;
  static deserializeBinaryFromReader(message: RequestAccountDeletionResponse, reader: jspb.BinaryReader): RequestAccountDeletionResponse;
}

export namespace RequestAccountDeletionResponse {
  export type AsObject = {
    finalDeletionTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class RestoreAccountRequest extends jspb.Message {
  getPassword(): string;
  setPassword(value: string): RestoreAccountRequest;

  getOauthProvider(): string;
  setOauthProvider(value: string): RestoreAccountRequest;
  hasOauthProvider(): boolean;
  clearOauthProvider(): RestoreAccountRequest;

  getOauthToken(): string;
  setOauthToken(value: string): RestoreAccountRequest;
  hasOauthToken(): boolean;
  clearOauthToken(): RestoreAccountRequest;

  getEmail(): string;
  setEmail(value: string): RestoreAccountRequest;
  hasEmail(): boolean;
  clearEmail(): RestoreAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAccountRequest): RestoreAccountRequest.AsObject;
  static serializeBinaryToWriter(message: RestoreAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAccountRequest;
  static deserializeBinaryFromReader(message: RestoreAccountRequest, reader: jspb.BinaryReader): RestoreAccountRequest;
}

export namespace RestoreAccountRequest {
  export type AsObject = {
    password: string;
    oauthProvider?: string;
    oauthToken?: string;
    email?: string;
  };

  export enum OauthProviderCase {
    _OAUTH_PROVIDER_NOT_SET = 0,
    OAUTH_PROVIDER = 2,
  }

  export enum OauthTokenCase {
    _OAUTH_TOKEN_NOT_SET = 0,
    OAUTH_TOKEN = 3,
  }

  export enum EmailCase {
    _EMAIL_NOT_SET = 0,
    EMAIL = 4,
  }
}

export class RestoreAccountResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): RestoreAccountResponse;
  hasUser(): boolean;
  clearUser(): RestoreAccountResponse;

  getSessionId(): string;
  setSessionId(value: string): RestoreAccountResponse;

  getAccessToken(): string;
  setAccessToken(value: string): RestoreAccountResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): RestoreAccountResponse;
  hasRefreshToken(): boolean;
  clearRefreshToken(): RestoreAccountResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): RestoreAccountResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): RestoreAccountResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): RestoreAccountResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): RestoreAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RestoreAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RestoreAccountResponse): RestoreAccountResponse.AsObject;
  static serializeBinaryToWriter(message: RestoreAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RestoreAccountResponse;
  static deserializeBinaryFromReader(message: RestoreAccountResponse, reader: jspb.BinaryReader): RestoreAccountResponse;
}

export namespace RestoreAccountResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject;
    sessionId: string;
    accessToken: string;
    refreshToken?: string;
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum RefreshTokenCase {
    _REFRESH_TOKEN_NOT_SET = 0,
    REFRESH_TOKEN = 4,
  }
}

