import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class RefreshTokenRequest extends jspb.Message {
  getSessionId(): string;
  setSessionId(value: string): RefreshTokenRequest;

  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshTokenRequest;
  hasRefreshToken(): boolean;
  clearRefreshToken(): RefreshTokenRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenRequest): RefreshTokenRequest.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenRequest;
  static deserializeBinaryFromReader(message: RefreshTokenRequest, reader: jspb.BinaryReader): RefreshTokenRequest;
}

export namespace RefreshTokenRequest {
  export type AsObject = {
    sessionId: string;
    refreshToken?: string;
  };

  export enum RefreshTokenCase {
    _REFRESH_TOKEN_NOT_SET = 0,
    REFRESH_TOKEN = 2,
  }
}

export class RefreshTokenResponse extends jspb.Message {
  getAccessToken(): string;
  setAccessToken(value: string): RefreshTokenResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): RefreshTokenResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): RefreshTokenResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): RefreshTokenResponse;
  hasRefreshToken(): boolean;
  clearRefreshToken(): RefreshTokenResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): RefreshTokenResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): RefreshTokenResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RefreshTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RefreshTokenResponse): RefreshTokenResponse.AsObject;
  static serializeBinaryToWriter(message: RefreshTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RefreshTokenResponse;
  static deserializeBinaryFromReader(message: RefreshTokenResponse, reader: jspb.BinaryReader): RefreshTokenResponse;
}

export namespace RefreshTokenResponse {
  export type AsObject = {
    accessToken: string;
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refreshToken?: string;
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum RefreshTokenCase {
    _REFRESH_TOKEN_NOT_SET = 0,
    REFRESH_TOKEN = 3,
  }

  export enum RefreshTokenExpiresAtCase {
    _REFRESH_TOKEN_EXPIRES_AT_NOT_SET = 0,
    REFRESH_TOKEN_EXPIRES_AT = 4,
  }
}

