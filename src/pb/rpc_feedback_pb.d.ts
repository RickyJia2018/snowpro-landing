import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Feedback extends jspb.Message {
  getId(): number;
  setId(value: number): Feedback;

  getUserId(): number;
  setUserId(value: number): Feedback;

  getFeedbackType(): string;
  setFeedbackType(value: string): Feedback;

  getContent(): string;
  setContent(value: string): Feedback;

  getContactInfo(): string;
  setContactInfo(value: string): Feedback;

  getStatus(): string;
  setStatus(value: string): Feedback;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Feedback;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Feedback;

  getResolvedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setResolvedAt(value?: google_protobuf_timestamp_pb.Timestamp): Feedback;
  hasResolvedAt(): boolean;
  clearResolvedAt(): Feedback;

  getUserEmail(): string;
  setUserEmail(value: string): Feedback;

  getUserNickname(): string;
  setUserNickname(value: string): Feedback;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feedback.AsObject;
  static toObject(includeInstance: boolean, msg: Feedback): Feedback.AsObject;
  static serializeBinaryToWriter(message: Feedback, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feedback;
  static deserializeBinaryFromReader(message: Feedback, reader: jspb.BinaryReader): Feedback;
}

export namespace Feedback {
  export type AsObject = {
    id: number;
    userId: number;
    feedbackType: string;
    content: string;
    contactInfo: string;
    status: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    resolvedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    userEmail: string;
    userNickname: string;
  };
}

export class CreateFeedbackRequest extends jspb.Message {
  getFeedbackType(): string;
  setFeedbackType(value: string): CreateFeedbackRequest;

  getContent(): string;
  setContent(value: string): CreateFeedbackRequest;

  getContactInfo(): string;
  setContactInfo(value: string): CreateFeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeedbackRequest): CreateFeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: CreateFeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeedbackRequest;
  static deserializeBinaryFromReader(message: CreateFeedbackRequest, reader: jspb.BinaryReader): CreateFeedbackRequest;
}

export namespace CreateFeedbackRequest {
  export type AsObject = {
    feedbackType: string;
    content: string;
    contactInfo: string;
  };
}

export class CreateFeedbackResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): CreateFeedbackResponse;

  getMessage(): string;
  setMessage(value: string): CreateFeedbackResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateFeedbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateFeedbackResponse): CreateFeedbackResponse.AsObject;
  static serializeBinaryToWriter(message: CreateFeedbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateFeedbackResponse;
  static deserializeBinaryFromReader(message: CreateFeedbackResponse, reader: jspb.BinaryReader): CreateFeedbackResponse;
}

export namespace CreateFeedbackResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class ListFeedbacksRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListFeedbacksRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFeedbacksRequest;

  getStatus(): string;
  setStatus(value: string): ListFeedbacksRequest;
  hasStatus(): boolean;
  clearStatus(): ListFeedbacksRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeedbacksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeedbacksRequest): ListFeedbacksRequest.AsObject;
  static serializeBinaryToWriter(message: ListFeedbacksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeedbacksRequest;
  static deserializeBinaryFromReader(message: ListFeedbacksRequest, reader: jspb.BinaryReader): ListFeedbacksRequest;
}

export namespace ListFeedbacksRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    status?: string;
  };

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 3,
  }
}

export class ListFeedbacksResponse extends jspb.Message {
  getFeedbacksList(): Array<Feedback>;
  setFeedbacksList(value: Array<Feedback>): ListFeedbacksResponse;
  clearFeedbacksList(): ListFeedbacksResponse;
  addFeedbacks(value?: Feedback, index?: number): Feedback;

  getTotal(): number;
  setTotal(value: number): ListFeedbacksResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFeedbacksResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFeedbacksResponse): ListFeedbacksResponse.AsObject;
  static serializeBinaryToWriter(message: ListFeedbacksResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFeedbacksResponse;
  static deserializeBinaryFromReader(message: ListFeedbacksResponse, reader: jspb.BinaryReader): ListFeedbacksResponse;
}

export namespace ListFeedbacksResponse {
  export type AsObject = {
    feedbacksList: Array<Feedback.AsObject>;
    total: number;
  };
}

export class ResolveFeedbackRequest extends jspb.Message {
  getFeedbackId(): number;
  setFeedbackId(value: number): ResolveFeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveFeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveFeedbackRequest): ResolveFeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: ResolveFeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveFeedbackRequest;
  static deserializeBinaryFromReader(message: ResolveFeedbackRequest, reader: jspb.BinaryReader): ResolveFeedbackRequest;
}

export namespace ResolveFeedbackRequest {
  export type AsObject = {
    feedbackId: number;
  };
}

export class ResolveFeedbackResponse extends jspb.Message {
  getFeedback(): Feedback | undefined;
  setFeedback(value?: Feedback): ResolveFeedbackResponse;
  hasFeedback(): boolean;
  clearFeedback(): ResolveFeedbackResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveFeedbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveFeedbackResponse): ResolveFeedbackResponse.AsObject;
  static serializeBinaryToWriter(message: ResolveFeedbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveFeedbackResponse;
  static deserializeBinaryFromReader(message: ResolveFeedbackResponse, reader: jspb.BinaryReader): ResolveFeedbackResponse;
}

export namespace ResolveFeedbackResponse {
  export type AsObject = {
    feedback?: Feedback.AsObject;
  };
}

export class ReplyFeedbackRequest extends jspb.Message {
  getFeedbackId(): number;
  setFeedbackId(value: number): ReplyFeedbackRequest;

  getContent(): string;
  setContent(value: string): ReplyFeedbackRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplyFeedbackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReplyFeedbackRequest): ReplyFeedbackRequest.AsObject;
  static serializeBinaryToWriter(message: ReplyFeedbackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplyFeedbackRequest;
  static deserializeBinaryFromReader(message: ReplyFeedbackRequest, reader: jspb.BinaryReader): ReplyFeedbackRequest;
}

export namespace ReplyFeedbackRequest {
  export type AsObject = {
    feedbackId: number;
    content: string;
  };
}

export class ReplyFeedbackResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ReplyFeedbackResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReplyFeedbackResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReplyFeedbackResponse): ReplyFeedbackResponse.AsObject;
  static serializeBinaryToWriter(message: ReplyFeedbackResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReplyFeedbackResponse;
  static deserializeBinaryFromReader(message: ReplyFeedbackResponse, reader: jspb.BinaryReader): ReplyFeedbackResponse;
}

export namespace ReplyFeedbackResponse {
  export type AsObject = {
    success: boolean;
  };
}

