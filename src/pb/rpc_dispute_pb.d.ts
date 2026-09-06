import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class Dispute extends jspb.Message {
  getId(): string;
  setId(value: string): Dispute;

  getLessonId(): string;
  setLessonId(value: string): Dispute;

  getStudentId(): number;
  setStudentId(value: number): Dispute;

  getInstructorId(): number;
  setInstructorId(value: number): Dispute;

  getReason(): string;
  setReason(value: string): Dispute;

  getStatus(): DisputeStatus;
  setStatus(value: DisputeStatus): Dispute;

  getResolutionType(): DisputeResolutionType;
  setResolutionType(value: DisputeResolutionType): Dispute;

  getResolutionNotes(): string;
  setResolutionNotes(value: string): Dispute;

  getAdminNotes(): string;
  setAdminNotes(value: string): Dispute;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dispute;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Dispute;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Dispute;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Dispute;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Dispute.AsObject;
  static toObject(includeInstance: boolean, msg: Dispute): Dispute.AsObject;
  static serializeBinaryToWriter(message: Dispute, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Dispute;
  static deserializeBinaryFromReader(message: Dispute, reader: jspb.BinaryReader): Dispute;
}

export namespace Dispute {
  export type AsObject = {
    id: string;
    lessonId: string;
    studentId: number;
    instructorId: number;
    reason: string;
    status: DisputeStatus;
    resolutionType: DisputeResolutionType;
    resolutionNotes: string;
    adminNotes: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class DisputeMessage extends jspb.Message {
  getId(): string;
  setId(value: string): DisputeMessage;

  getDisputeId(): string;
  setDisputeId(value: string): DisputeMessage;

  getSenderId(): number;
  setSenderId(value: number): DisputeMessage;

  getSenderRole(): string;
  setSenderRole(value: string): DisputeMessage;

  getContent(): string;
  setContent(value: string): DisputeMessage;

  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): DisputeMessage;
  clearAttachmentsList(): DisputeMessage;
  addAttachments(value: string, index?: number): DisputeMessage;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): DisputeMessage;
  hasCreatedAt(): boolean;
  clearCreatedAt(): DisputeMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisputeMessage.AsObject;
  static toObject(includeInstance: boolean, msg: DisputeMessage): DisputeMessage.AsObject;
  static serializeBinaryToWriter(message: DisputeMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisputeMessage;
  static deserializeBinaryFromReader(message: DisputeMessage, reader: jspb.BinaryReader): DisputeMessage;
}

export namespace DisputeMessage {
  export type AsObject = {
    id: string;
    disputeId: string;
    senderId: number;
    senderRole: string;
    content: string;
    attachmentsList: Array<string>;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateDisputeRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): CreateDisputeRequest;

  getReason(): string;
  setReason(value: string): CreateDisputeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDisputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDisputeRequest): CreateDisputeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateDisputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDisputeRequest;
  static deserializeBinaryFromReader(message: CreateDisputeRequest, reader: jspb.BinaryReader): CreateDisputeRequest;
}

export namespace CreateDisputeRequest {
  export type AsObject = {
    lessonId: string;
    reason: string;
  };
}

export class CreateDisputeResponse extends jspb.Message {
  getDispute(): Dispute | undefined;
  setDispute(value?: Dispute): CreateDisputeResponse;
  hasDispute(): boolean;
  clearDispute(): CreateDisputeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateDisputeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateDisputeResponse): CreateDisputeResponse.AsObject;
  static serializeBinaryToWriter(message: CreateDisputeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateDisputeResponse;
  static deserializeBinaryFromReader(message: CreateDisputeResponse, reader: jspb.BinaryReader): CreateDisputeResponse;
}

export namespace CreateDisputeResponse {
  export type AsObject = {
    dispute?: Dispute.AsObject;
  };
}

export class GetDisputeRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetDisputeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDisputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetDisputeRequest): GetDisputeRequest.AsObject;
  static serializeBinaryToWriter(message: GetDisputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDisputeRequest;
  static deserializeBinaryFromReader(message: GetDisputeRequest, reader: jspb.BinaryReader): GetDisputeRequest;
}

export namespace GetDisputeRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetDisputeResponse extends jspb.Message {
  getDispute(): Dispute | undefined;
  setDispute(value?: Dispute): GetDisputeResponse;
  hasDispute(): boolean;
  clearDispute(): GetDisputeResponse;

  getMessagesList(): Array<DisputeMessage>;
  setMessagesList(value: Array<DisputeMessage>): GetDisputeResponse;
  clearMessagesList(): GetDisputeResponse;
  addMessages(value?: DisputeMessage, index?: number): DisputeMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetDisputeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetDisputeResponse): GetDisputeResponse.AsObject;
  static serializeBinaryToWriter(message: GetDisputeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetDisputeResponse;
  static deserializeBinaryFromReader(message: GetDisputeResponse, reader: jspb.BinaryReader): GetDisputeResponse;
}

export namespace GetDisputeResponse {
  export type AsObject = {
    dispute?: Dispute.AsObject;
    messagesList: Array<DisputeMessage.AsObject>;
  };
}

export class ListDisputesRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListDisputesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListDisputesRequest;

  getStatus(): DisputeStatus;
  setStatus(value: DisputeStatus): ListDisputesRequest;
  hasStatus(): boolean;
  clearStatus(): ListDisputesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDisputesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListDisputesRequest): ListDisputesRequest.AsObject;
  static serializeBinaryToWriter(message: ListDisputesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDisputesRequest;
  static deserializeBinaryFromReader(message: ListDisputesRequest, reader: jspb.BinaryReader): ListDisputesRequest;
}

export namespace ListDisputesRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    status?: DisputeStatus;
  };

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 3,
  }
}

export class ListDisputesResponse extends jspb.Message {
  getDisputesList(): Array<Dispute>;
  setDisputesList(value: Array<Dispute>): ListDisputesResponse;
  clearDisputesList(): ListDisputesResponse;
  addDisputes(value?: Dispute, index?: number): Dispute;

  getTotal(): number;
  setTotal(value: number): ListDisputesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListDisputesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListDisputesResponse): ListDisputesResponse.AsObject;
  static serializeBinaryToWriter(message: ListDisputesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListDisputesResponse;
  static deserializeBinaryFromReader(message: ListDisputesResponse, reader: jspb.BinaryReader): ListDisputesResponse;
}

export namespace ListDisputesResponse {
  export type AsObject = {
    disputesList: Array<Dispute.AsObject>;
    total: number;
  };
}

export class AddDisputeMessageRequest extends jspb.Message {
  getDisputeId(): string;
  setDisputeId(value: string): AddDisputeMessageRequest;

  getContent(): string;
  setContent(value: string): AddDisputeMessageRequest;

  getAttachmentsList(): Array<string>;
  setAttachmentsList(value: Array<string>): AddDisputeMessageRequest;
  clearAttachmentsList(): AddDisputeMessageRequest;
  addAttachments(value: string, index?: number): AddDisputeMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDisputeMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddDisputeMessageRequest): AddDisputeMessageRequest.AsObject;
  static serializeBinaryToWriter(message: AddDisputeMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDisputeMessageRequest;
  static deserializeBinaryFromReader(message: AddDisputeMessageRequest, reader: jspb.BinaryReader): AddDisputeMessageRequest;
}

export namespace AddDisputeMessageRequest {
  export type AsObject = {
    disputeId: string;
    content: string;
    attachmentsList: Array<string>;
  };
}

export class AddDisputeMessageResponse extends jspb.Message {
  getMessage(): DisputeMessage | undefined;
  setMessage(value?: DisputeMessage): AddDisputeMessageResponse;
  hasMessage(): boolean;
  clearMessage(): AddDisputeMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddDisputeMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddDisputeMessageResponse): AddDisputeMessageResponse.AsObject;
  static serializeBinaryToWriter(message: AddDisputeMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddDisputeMessageResponse;
  static deserializeBinaryFromReader(message: AddDisputeMessageResponse, reader: jspb.BinaryReader): AddDisputeMessageResponse;
}

export namespace AddDisputeMessageResponse {
  export type AsObject = {
    message?: DisputeMessage.AsObject;
  };
}

export class ResolveDisputeRequest extends jspb.Message {
  getDisputeId(): string;
  setDisputeId(value: string): ResolveDisputeRequest;

  getResolutionType(): DisputeResolutionType;
  setResolutionType(value: DisputeResolutionType): ResolveDisputeRequest;

  getResolutionNotes(): string;
  setResolutionNotes(value: string): ResolveDisputeRequest;

  getAdminNotes(): string;
  setAdminNotes(value: string): ResolveDisputeRequest;
  hasAdminNotes(): boolean;
  clearAdminNotes(): ResolveDisputeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveDisputeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveDisputeRequest): ResolveDisputeRequest.AsObject;
  static serializeBinaryToWriter(message: ResolveDisputeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveDisputeRequest;
  static deserializeBinaryFromReader(message: ResolveDisputeRequest, reader: jspb.BinaryReader): ResolveDisputeRequest;
}

export namespace ResolveDisputeRequest {
  export type AsObject = {
    disputeId: string;
    resolutionType: DisputeResolutionType;
    resolutionNotes: string;
    adminNotes?: string;
  };

  export enum AdminNotesCase {
    _ADMIN_NOTES_NOT_SET = 0,
    ADMIN_NOTES = 4,
  }
}

export class ResolveDisputeResponse extends jspb.Message {
  getDispute(): Dispute | undefined;
  setDispute(value?: Dispute): ResolveDisputeResponse;
  hasDispute(): boolean;
  clearDispute(): ResolveDisputeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResolveDisputeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ResolveDisputeResponse): ResolveDisputeResponse.AsObject;
  static serializeBinaryToWriter(message: ResolveDisputeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResolveDisputeResponse;
  static deserializeBinaryFromReader(message: ResolveDisputeResponse, reader: jspb.BinaryReader): ResolveDisputeResponse;
}

export namespace ResolveDisputeResponse {
  export type AsObject = {
    dispute?: Dispute.AsObject;
  };
}

export enum DisputeStatus {
  DISPUTE_STATUS_OPEN = 0,
  DISPUTE_STATUS_IN_PROGRESS = 1,
  DISPUTE_STATUS_RESOLVED = 2,
  DISPUTE_STATUS_CLOSED = 3,
}
export enum DisputeResolutionType {
  DISPUTE_RESOLUTION_TYPE_PENDING = 0,
  DISPUTE_RESOLUTION_TYPE_REFUND_TO_STUDENT = 1,
  DISPUTE_RESOLUTION_TYPE_RELEASE_TO_INSTRUCTOR = 2,
}
