import * as jspb from 'google-protobuf'



export class TestNotificationRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): TestNotificationRequest;

  getTitle(): string;
  setTitle(value: string): TestNotificationRequest;

  getBody(): string;
  setBody(value: string): TestNotificationRequest;

  getDataMap(): jspb.Map<string, string>;
  clearDataMap(): TestNotificationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestNotificationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestNotificationRequest): TestNotificationRequest.AsObject;
  static serializeBinaryToWriter(message: TestNotificationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestNotificationRequest;
  static deserializeBinaryFromReader(message: TestNotificationRequest, reader: jspb.BinaryReader): TestNotificationRequest;
}

export namespace TestNotificationRequest {
  export type AsObject = {
    userId: number;
    title: string;
    body: string;
    dataMap: Array<[string, string]>;
  };
}

export class TestNotificationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): TestNotificationResponse;

  getMessage(): string;
  setMessage(value: string): TestNotificationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestNotificationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestNotificationResponse): TestNotificationResponse.AsObject;
  static serializeBinaryToWriter(message: TestNotificationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestNotificationResponse;
  static deserializeBinaryFromReader(message: TestNotificationResponse, reader: jspb.BinaryReader): TestNotificationResponse;
}

export namespace TestNotificationResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

