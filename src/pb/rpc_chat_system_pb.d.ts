import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class ActionPayload extends jspb.Message {
  getActionType(): string;
  setActionType(value: string): ActionPayload;

  getTargetId(): string;
  setTargetId(value: string): ActionPayload;

  getTitle(): string;
  setTitle(value: string): ActionPayload;

  getStatusText(): string;
  setStatusText(value: string): ActionPayload;

  getButtonText(): string;
  setButtonText(value: string): ActionPayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionPayload.AsObject;
  static toObject(includeInstance: boolean, msg: ActionPayload): ActionPayload.AsObject;
  static serializeBinaryToWriter(message: ActionPayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionPayload;
  static deserializeBinaryFromReader(message: ActionPayload, reader: jspb.BinaryReader): ActionPayload;
}

export namespace ActionPayload {
  export type AsObject = {
    actionType: string;
    targetId: string;
    title: string;
    statusText: string;
    buttonText: string;
  };
}

export class Message extends jspb.Message {
  getId(): string;
  setId(value: string): Message;

  getSender(): number;
  setSender(value: number): Message;

  getReceiver(): number;
  setReceiver(value: number): Message;

  getConversationId(): string;
  setConversationId(value: string): Message;

  getMessage(): string;
  setMessage(value: string): Message;

  getType(): MessageType;
  setType(value: MessageType): Message;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): Message;

  getActionPayload(): ActionPayload | undefined;
  setActionPayload(value?: ActionPayload): Message;
  hasActionPayload(): boolean;
  clearActionPayload(): Message;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Message;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Message;

  getClientMessageId(): string;
  setClientMessageId(value: string): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    id: string;
    sender: number;
    receiver: number;
    conversationId: string;
    message: string;
    type: MessageType;
    status: MessageStatus;
    actionPayload?: ActionPayload.AsObject;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    clientMessageId: string;
  };
}

export class SendMessageRequest extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): SendMessageRequest;

  getReceiver(): number;
  setReceiver(value: number): SendMessageRequest;

  getType(): MessageType;
  setType(value: MessageType): SendMessageRequest;

  getConversationId(): string;
  setConversationId(value: string): SendMessageRequest;

  getActionPayload(): ActionPayload | undefined;
  setActionPayload(value?: ActionPayload): SendMessageRequest;
  hasActionPayload(): boolean;
  clearActionPayload(): SendMessageRequest;

  getClientMessageId(): string;
  setClientMessageId(value: string): SendMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
  static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
  static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
  export type AsObject = {
    message: string;
    receiver: number;
    type: MessageType;
    conversationId: string;
    actionPayload?: ActionPayload.AsObject;
    clientMessageId: string;
  };
}

export class GetAllMessagesRequest extends jspb.Message {
  getReceiver(): number;
  setReceiver(value: number): GetAllMessagesRequest;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): GetAllMessagesRequest;
  hasStatus(): boolean;
  clearStatus(): GetAllMessagesRequest;

  getConversationId(): string;
  setConversationId(value: string): GetAllMessagesRequest;

  getPageSize(): number;
  setPageSize(value: number): GetAllMessagesRequest;

  getPageId(): number;
  setPageId(value: number): GetAllMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessagesRequest): GetAllMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: GetAllMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessagesRequest;
  static deserializeBinaryFromReader(message: GetAllMessagesRequest, reader: jspb.BinaryReader): GetAllMessagesRequest;
}

export namespace GetAllMessagesRequest {
  export type AsObject = {
    receiver: number;
    status?: MessageStatus;
    conversationId: string;
    pageSize: number;
    pageId: number;
  };

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 2,
  }
}

export class GetAllMessagesResponse extends jspb.Message {
  getMessagesList(): Array<Message>;
  setMessagesList(value: Array<Message>): GetAllMessagesResponse;
  clearMessagesList(): GetAllMessagesResponse;
  addMessages(value?: Message, index?: number): Message;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAllMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAllMessagesResponse): GetAllMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: GetAllMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAllMessagesResponse;
  static deserializeBinaryFromReader(message: GetAllMessagesResponse, reader: jspb.BinaryReader): GetAllMessagesResponse;
}

export namespace GetAllMessagesResponse {
  export type AsObject = {
    messagesList: Array<Message.AsObject>;
  };
}

export class UpdateMessageRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateMessageRequest;

  getStatus(): MessageStatus;
  setStatus(value: MessageStatus): UpdateMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateMessageRequest): UpdateMessageRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateMessageRequest;
  static deserializeBinaryFromReader(message: UpdateMessageRequest, reader: jspb.BinaryReader): UpdateMessageRequest;
}

export namespace UpdateMessageRequest {
  export type AsObject = {
    id: string;
    status: MessageStatus;
  };
}

export class ConversationSummary extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): ConversationSummary;

  getType(): number;
  setType(value: number): ConversationSummary;

  getTargetId(): number;
  setTargetId(value: number): ConversationSummary;

  getTitle(): string;
  setTitle(value: string): ConversationSummary;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): ConversationSummary;

  getUnreadCount(): number;
  setUnreadCount(value: number): ConversationSummary;

  getIsPinned(): boolean;
  setIsPinned(value: boolean): ConversationSummary;

  getLastMessage(): Message | undefined;
  setLastMessage(value?: Message): ConversationSummary;
  hasLastMessage(): boolean;
  clearLastMessage(): ConversationSummary;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): ConversationSummary;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): ConversationSummary;

  getIsMuted(): boolean;
  setIsMuted(value: boolean): ConversationSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConversationSummary.AsObject;
  static toObject(includeInstance: boolean, msg: ConversationSummary): ConversationSummary.AsObject;
  static serializeBinaryToWriter(message: ConversationSummary, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConversationSummary;
  static deserializeBinaryFromReader(message: ConversationSummary, reader: jspb.BinaryReader): ConversationSummary;
}

export namespace ConversationSummary {
  export type AsObject = {
    conversationId: string;
    type: number;
    targetId: number;
    title: string;
    avatarUrl: string;
    unreadCount: number;
    isPinned: boolean;
    lastMessage?: Message.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    isMuted: boolean;
  };
}

export class ListConversationsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListConversationsRequest;

  getPageId(): number;
  setPageId(value: number): ListConversationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsRequest): ListConversationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListConversationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsRequest;
  static deserializeBinaryFromReader(message: ListConversationsRequest, reader: jspb.BinaryReader): ListConversationsRequest;
}

export namespace ListConversationsRequest {
  export type AsObject = {
    pageSize: number;
    pageId: number;
  };
}

export class ListConversationsResponse extends jspb.Message {
  getConversationsList(): Array<ConversationSummary>;
  setConversationsList(value: Array<ConversationSummary>): ListConversationsResponse;
  clearConversationsList(): ListConversationsResponse;
  addConversations(value?: ConversationSummary, index?: number): ConversationSummary;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListConversationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListConversationsResponse): ListConversationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListConversationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListConversationsResponse;
  static deserializeBinaryFromReader(message: ListConversationsResponse, reader: jspb.BinaryReader): ListConversationsResponse;
}

export namespace ListConversationsResponse {
  export type AsObject = {
    conversationsList: Array<ConversationSummary.AsObject>;
  };
}

export class MarkAsReadRequest extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): MarkAsReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAsReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAsReadRequest): MarkAsReadRequest.AsObject;
  static serializeBinaryToWriter(message: MarkAsReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAsReadRequest;
  static deserializeBinaryFromReader(message: MarkAsReadRequest, reader: jspb.BinaryReader): MarkAsReadRequest;
}

export namespace MarkAsReadRequest {
  export type AsObject = {
    conversationId: string;
  };
}

export class MarkAsReadResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): MarkAsReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkAsReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkAsReadResponse): MarkAsReadResponse.AsObject;
  static serializeBinaryToWriter(message: MarkAsReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkAsReadResponse;
  static deserializeBinaryFromReader(message: MarkAsReadResponse, reader: jspb.BinaryReader): MarkAsReadResponse;
}

export namespace MarkAsReadResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class JoinCarpoolGroupRequest extends jspb.Message {
  getTripId(): string;
  setTripId(value: string): JoinCarpoolGroupRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinCarpoolGroupRequest.AsObject;
  static toObject(includeInstance: boolean, msg: JoinCarpoolGroupRequest): JoinCarpoolGroupRequest.AsObject;
  static serializeBinaryToWriter(message: JoinCarpoolGroupRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinCarpoolGroupRequest;
  static deserializeBinaryFromReader(message: JoinCarpoolGroupRequest, reader: jspb.BinaryReader): JoinCarpoolGroupRequest;
}

export namespace JoinCarpoolGroupRequest {
  export type AsObject = {
    tripId: string;
  };
}

export class JoinCarpoolGroupResponse extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): JoinCarpoolGroupResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): JoinCarpoolGroupResponse.AsObject;
  static toObject(includeInstance: boolean, msg: JoinCarpoolGroupResponse): JoinCarpoolGroupResponse.AsObject;
  static serializeBinaryToWriter(message: JoinCarpoolGroupResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): JoinCarpoolGroupResponse;
  static deserializeBinaryFromReader(message: JoinCarpoolGroupResponse, reader: jspb.BinaryReader): JoinCarpoolGroupResponse;
}

export namespace JoinCarpoolGroupResponse {
  export type AsObject = {
    conversationId: string;
  };
}

export class UpdateChatContextRequest extends jspb.Message {
  getActiveConversationId(): string;
  setActiveConversationId(value: string): UpdateChatContextRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatContextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatContextRequest): UpdateChatContextRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateChatContextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatContextRequest;
  static deserializeBinaryFromReader(message: UpdateChatContextRequest, reader: jspb.BinaryReader): UpdateChatContextRequest;
}

export namespace UpdateChatContextRequest {
  export type AsObject = {
    activeConversationId: string;
  };
}

export class UpdateChatContextResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): UpdateChatContextResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateChatContextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateChatContextResponse): UpdateChatContextResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateChatContextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateChatContextResponse;
  static deserializeBinaryFromReader(message: UpdateChatContextResponse, reader: jspb.BinaryReader): UpdateChatContextResponse;
}

export namespace UpdateChatContextResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class RevokeMessageRequest extends jspb.Message {
  getMessageId(): string;
  setMessageId(value: string): RevokeMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeMessageRequest): RevokeMessageRequest.AsObject;
  static serializeBinaryToWriter(message: RevokeMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeMessageRequest;
  static deserializeBinaryFromReader(message: RevokeMessageRequest, reader: jspb.BinaryReader): RevokeMessageRequest;
}

export namespace RevokeMessageRequest {
  export type AsObject = {
    messageId: string;
  };
}

export class RevokeMessageResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): RevokeMessageResponse;

  getMessageId(): string;
  setMessageId(value: string): RevokeMessageResponse;

  getConversationId(): string;
  setConversationId(value: string): RevokeMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RevokeMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RevokeMessageResponse): RevokeMessageResponse.AsObject;
  static serializeBinaryToWriter(message: RevokeMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RevokeMessageResponse;
  static deserializeBinaryFromReader(message: RevokeMessageResponse, reader: jspb.BinaryReader): RevokeMessageResponse;
}

export namespace RevokeMessageResponse {
  export type AsObject = {
    success: boolean;
    messageId: string;
    conversationId: string;
  };
}

export class DeleteConversationRequest extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): DeleteConversationRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationRequest): DeleteConversationRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteConversationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationRequest;
  static deserializeBinaryFromReader(message: DeleteConversationRequest, reader: jspb.BinaryReader): DeleteConversationRequest;
}

export namespace DeleteConversationRequest {
  export type AsObject = {
    conversationId: string;
  };
}

export class DeleteConversationResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteConversationResponse;

  getIsPhysicallyDeleted(): boolean;
  setIsPhysicallyDeleted(value: boolean): DeleteConversationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteConversationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteConversationResponse): DeleteConversationResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteConversationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteConversationResponse;
  static deserializeBinaryFromReader(message: DeleteConversationResponse, reader: jspb.BinaryReader): DeleteConversationResponse;
}

export namespace DeleteConversationResponse {
  export type AsObject = {
    success: boolean;
    isPhysicallyDeleted: boolean;
  };
}

export class ToggleConversationPinRequest extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): ToggleConversationPinRequest;

  getIsPinned(): boolean;
  setIsPinned(value: boolean): ToggleConversationPinRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleConversationPinRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleConversationPinRequest): ToggleConversationPinRequest.AsObject;
  static serializeBinaryToWriter(message: ToggleConversationPinRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleConversationPinRequest;
  static deserializeBinaryFromReader(message: ToggleConversationPinRequest, reader: jspb.BinaryReader): ToggleConversationPinRequest;
}

export namespace ToggleConversationPinRequest {
  export type AsObject = {
    conversationId: string;
    isPinned: boolean;
  };
}

export class ToggleConversationPinResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ToggleConversationPinResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleConversationPinResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleConversationPinResponse): ToggleConversationPinResponse.AsObject;
  static serializeBinaryToWriter(message: ToggleConversationPinResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleConversationPinResponse;
  static deserializeBinaryFromReader(message: ToggleConversationPinResponse, reader: jspb.BinaryReader): ToggleConversationPinResponse;
}

export namespace ToggleConversationPinResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class ToggleConversationMuteRequest extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): ToggleConversationMuteRequest;

  getIsMuted(): boolean;
  setIsMuted(value: boolean): ToggleConversationMuteRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleConversationMuteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleConversationMuteRequest): ToggleConversationMuteRequest.AsObject;
  static serializeBinaryToWriter(message: ToggleConversationMuteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleConversationMuteRequest;
  static deserializeBinaryFromReader(message: ToggleConversationMuteRequest, reader: jspb.BinaryReader): ToggleConversationMuteRequest;
}

export namespace ToggleConversationMuteRequest {
  export type AsObject = {
    conversationId: string;
    isMuted: boolean;
  };
}

export class ToggleConversationMuteResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ToggleConversationMuteResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleConversationMuteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleConversationMuteResponse): ToggleConversationMuteResponse.AsObject;
  static serializeBinaryToWriter(message: ToggleConversationMuteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleConversationMuteResponse;
  static deserializeBinaryFromReader(message: ToggleConversationMuteResponse, reader: jspb.BinaryReader): ToggleConversationMuteResponse;
}

export namespace ToggleConversationMuteResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class ClearChatHistoryRequest extends jspb.Message {
  getConversationId(): string;
  setConversationId(value: string): ClearChatHistoryRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearChatHistoryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClearChatHistoryRequest): ClearChatHistoryRequest.AsObject;
  static serializeBinaryToWriter(message: ClearChatHistoryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearChatHistoryRequest;
  static deserializeBinaryFromReader(message: ClearChatHistoryRequest, reader: jspb.BinaryReader): ClearChatHistoryRequest;
}

export namespace ClearChatHistoryRequest {
  export type AsObject = {
    conversationId: string;
  };
}

export class ClearChatHistoryResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): ClearChatHistoryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClearChatHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClearChatHistoryResponse): ClearChatHistoryResponse.AsObject;
  static serializeBinaryToWriter(message: ClearChatHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClearChatHistoryResponse;
  static deserializeBinaryFromReader(message: ClearChatHistoryResponse, reader: jspb.BinaryReader): ClearChatHistoryResponse;
}

export namespace ClearChatHistoryResponse {
  export type AsObject = {
    success: boolean;
  };
}

export enum MessageType {
  MESSAGE_TYPE_INITIAL = 0,
  MESSAGE_TYPE_TEXT = 1,
  MESSAGE_TYPE_IMAGE = 2,
  MESSAGE_TYPE_VOICE = 3,
  MESSAGE_TYPE_FILE = 4,
  MESSAGE_TYPE_VIDEO = 5,
  MESSAGE_TYPE_SYSTEM = 6,
  MESSAGE_TYPE_REVOKE = 7,
}
export enum MessageStatus {
  MESSAGE_STATUS_SENT = 0,
  MESSAGE_STATUS_DELIVERED = 1,
  MESSAGE_STATUS_FAILED = 2,
  MESSAGE_STATUS_READ = 3,
  MESSAGE_STATUS_REVOKED = 4,
}
