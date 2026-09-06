import * as jspb from 'google-protobuf'



export class ResetPasswordRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): ResetPasswordRequest;

  getToken(): string;
  setToken(value: string): ResetPasswordRequest;

  getNewPassword(): string;
  setNewPassword(value: string): ResetPasswordRequest;

  getEmail(): string;
  setEmail(value: string): ResetPasswordRequest;
  hasEmail(): boolean;
  clearEmail(): ResetPasswordRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordRequest): ResetPasswordRequest.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordRequest;
  static deserializeBinaryFromReader(message: ResetPasswordRequest, reader: jspb.BinaryReader): ResetPasswordRequest;
}

export namespace ResetPasswordRequest {
  export type AsObject = {
    userId: number;
    token: string;
    newPassword: string;
    email?: string;
  };

  export enum EmailCase {
    _EMAIL_NOT_SET = 0,
    EMAIL = 4,
  }
}

export class ResetPasswordResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ResetPasswordResponse;

  getMessage(): string;
  setMessage(value: string): ResetPasswordResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResetPasswordResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResetPasswordResponse): ResetPasswordResponse.AsObject;
  static serializeBinaryToWriter(message: ResetPasswordResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResetPasswordResponse;
  static deserializeBinaryFromReader(message: ResetPasswordResponse, reader: jspb.BinaryReader): ResetPasswordResponse;
}

export namespace ResetPasswordResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

