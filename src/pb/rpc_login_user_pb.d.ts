import * as jspb from 'google-protobuf'

import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class LoginUserRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): LoginUserRequest;

  getPassword(): string;
  setPassword(value: string): LoginUserRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserRequest): LoginUserRequest.AsObject;
  static serializeBinaryToWriter(message: LoginUserRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserRequest;
  static deserializeBinaryFromReader(message: LoginUserRequest, reader: jspb.BinaryReader): LoginUserRequest;
}

export namespace LoginUserRequest {
  export type AsObject = {
    email: string;
    password: string;
  };
}

export class LoginUserResponse extends jspb.Message {
  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): LoginUserResponse;
  hasUser(): boolean;
  clearUser(): LoginUserResponse;

  getSessionId(): string;
  setSessionId(value: string): LoginUserResponse;

  getAccessToken(): string;
  setAccessToken(value: string): LoginUserResponse;

  getAccessTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setAccessTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginUserResponse;
  hasAccessTokenExpiresAt(): boolean;
  clearAccessTokenExpiresAt(): LoginUserResponse;

  getRefreshTokenExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefreshTokenExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): LoginUserResponse;
  hasRefreshTokenExpiresAt(): boolean;
  clearRefreshTokenExpiresAt(): LoginUserResponse;

  getRefreshToken(): string;
  setRefreshToken(value: string): LoginUserResponse;
  hasRefreshToken(): boolean;
  clearRefreshToken(): LoginUserResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginUserResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LoginUserResponse): LoginUserResponse.AsObject;
  static serializeBinaryToWriter(message: LoginUserResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginUserResponse;
  static deserializeBinaryFromReader(message: LoginUserResponse, reader: jspb.BinaryReader): LoginUserResponse;
}

export namespace LoginUserResponse {
  export type AsObject = {
    user?: user_pb.User.AsObject;
    sessionId: string;
    accessToken: string;
    accessTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refreshTokenExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refreshToken?: string;
  };

  export enum RefreshTokenCase {
    _REFRESH_TOKEN_NOT_SET = 0,
    REFRESH_TOKEN = 6,
  }
}

export class LoginWithGoogleRequest extends jspb.Message {
  getIdToken(): string;
  setIdToken(value: string): LoginWithGoogleRequest;

  getMainLanguageCode(): string;
  setMainLanguageCode(value: string): LoginWithGoogleRequest;
  hasMainLanguageCode(): boolean;
  clearMainLanguageCode(): LoginWithGoogleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginWithGoogleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginWithGoogleRequest): LoginWithGoogleRequest.AsObject;
  static serializeBinaryToWriter(message: LoginWithGoogleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginWithGoogleRequest;
  static deserializeBinaryFromReader(message: LoginWithGoogleRequest, reader: jspb.BinaryReader): LoginWithGoogleRequest;
}

export namespace LoginWithGoogleRequest {
  export type AsObject = {
    idToken: string;
    mainLanguageCode?: string;
  };

  export enum MainLanguageCodeCase {
    _MAIN_LANGUAGE_CODE_NOT_SET = 0,
    MAIN_LANGUAGE_CODE = 2,
  }
}

export class LoginWithAppleRequest extends jspb.Message {
  getIdentityToken(): string;
  setIdentityToken(value: string): LoginWithAppleRequest;

  getFirstName(): string;
  setFirstName(value: string): LoginWithAppleRequest;

  getLastName(): string;
  setLastName(value: string): LoginWithAppleRequest;

  getMainLanguageCode(): string;
  setMainLanguageCode(value: string): LoginWithAppleRequest;
  hasMainLanguageCode(): boolean;
  clearMainLanguageCode(): LoginWithAppleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LoginWithAppleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LoginWithAppleRequest): LoginWithAppleRequest.AsObject;
  static serializeBinaryToWriter(message: LoginWithAppleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LoginWithAppleRequest;
  static deserializeBinaryFromReader(message: LoginWithAppleRequest, reader: jspb.BinaryReader): LoginWithAppleRequest;
}

export namespace LoginWithAppleRequest {
  export type AsObject = {
    identityToken: string;
    firstName: string;
    lastName: string;
    mainLanguageCode?: string;
  };

  export enum MainLanguageCodeCase {
    _MAIN_LANGUAGE_CODE_NOT_SET = 0,
    MAIN_LANGUAGE_CODE = 4,
  }
}

export class BeginPasskeyRegistrationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginPasskeyRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeginPasskeyRegistrationRequest): BeginPasskeyRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: BeginPasskeyRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginPasskeyRegistrationRequest;
  static deserializeBinaryFromReader(message: BeginPasskeyRegistrationRequest, reader: jspb.BinaryReader): BeginPasskeyRegistrationRequest;
}

export namespace BeginPasskeyRegistrationRequest {
  export type AsObject = {
  };
}

export class BeginPasskeyRegistrationResponse extends jspb.Message {
  getOptionsJson(): string;
  setOptionsJson(value: string): BeginPasskeyRegistrationResponse;

  getSessionToken(): string;
  setSessionToken(value: string): BeginPasskeyRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginPasskeyRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BeginPasskeyRegistrationResponse): BeginPasskeyRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: BeginPasskeyRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginPasskeyRegistrationResponse;
  static deserializeBinaryFromReader(message: BeginPasskeyRegistrationResponse, reader: jspb.BinaryReader): BeginPasskeyRegistrationResponse;
}

export namespace BeginPasskeyRegistrationResponse {
  export type AsObject = {
    optionsJson: string;
    sessionToken: string;
  };
}

export class FinishPasskeyRegistrationRequest extends jspb.Message {
  getCredentialJson(): string;
  setCredentialJson(value: string): FinishPasskeyRegistrationRequest;

  getSessionToken(): string;
  setSessionToken(value: string): FinishPasskeyRegistrationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishPasskeyRegistrationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishPasskeyRegistrationRequest): FinishPasskeyRegistrationRequest.AsObject;
  static serializeBinaryToWriter(message: FinishPasskeyRegistrationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishPasskeyRegistrationRequest;
  static deserializeBinaryFromReader(message: FinishPasskeyRegistrationRequest, reader: jspb.BinaryReader): FinishPasskeyRegistrationRequest;
}

export namespace FinishPasskeyRegistrationRequest {
  export type AsObject = {
    credentialJson: string;
    sessionToken: string;
  };
}

export class FinishPasskeyRegistrationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): FinishPasskeyRegistrationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishPasskeyRegistrationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FinishPasskeyRegistrationResponse): FinishPasskeyRegistrationResponse.AsObject;
  static serializeBinaryToWriter(message: FinishPasskeyRegistrationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishPasskeyRegistrationResponse;
  static deserializeBinaryFromReader(message: FinishPasskeyRegistrationResponse, reader: jspb.BinaryReader): FinishPasskeyRegistrationResponse;
}

export namespace FinishPasskeyRegistrationResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class BeginPasskeyLoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): BeginPasskeyLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginPasskeyLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BeginPasskeyLoginRequest): BeginPasskeyLoginRequest.AsObject;
  static serializeBinaryToWriter(message: BeginPasskeyLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginPasskeyLoginRequest;
  static deserializeBinaryFromReader(message: BeginPasskeyLoginRequest, reader: jspb.BinaryReader): BeginPasskeyLoginRequest;
}

export namespace BeginPasskeyLoginRequest {
  export type AsObject = {
    email: string;
  };
}

export class BeginPasskeyLoginResponse extends jspb.Message {
  getOptionsJson(): string;
  setOptionsJson(value: string): BeginPasskeyLoginResponse;

  getSessionToken(): string;
  setSessionToken(value: string): BeginPasskeyLoginResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BeginPasskeyLoginResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BeginPasskeyLoginResponse): BeginPasskeyLoginResponse.AsObject;
  static serializeBinaryToWriter(message: BeginPasskeyLoginResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BeginPasskeyLoginResponse;
  static deserializeBinaryFromReader(message: BeginPasskeyLoginResponse, reader: jspb.BinaryReader): BeginPasskeyLoginResponse;
}

export namespace BeginPasskeyLoginResponse {
  export type AsObject = {
    optionsJson: string;
    sessionToken: string;
  };
}

export class FinishPasskeyLoginRequest extends jspb.Message {
  getEmail(): string;
  setEmail(value: string): FinishPasskeyLoginRequest;

  getCredentialJson(): string;
  setCredentialJson(value: string): FinishPasskeyLoginRequest;

  getSessionToken(): string;
  setSessionToken(value: string): FinishPasskeyLoginRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FinishPasskeyLoginRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FinishPasskeyLoginRequest): FinishPasskeyLoginRequest.AsObject;
  static serializeBinaryToWriter(message: FinishPasskeyLoginRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FinishPasskeyLoginRequest;
  static deserializeBinaryFromReader(message: FinishPasskeyLoginRequest, reader: jspb.BinaryReader): FinishPasskeyLoginRequest;
}

export namespace FinishPasskeyLoginRequest {
  export type AsObject = {
    email: string;
    credentialJson: string;
    sessionToken: string;
  };
}

