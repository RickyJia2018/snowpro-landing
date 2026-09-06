import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class FriendUserProfile extends jspb.Message {
  getId(): number;
  setId(value: number): FriendUserProfile;

  getCustomId(): string;
  setCustomId(value: string): FriendUserProfile;

  getNickname(): string;
  setNickname(value: string): FriendUserProfile;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): FriendUserProfile;

  getBio(): string;
  setBio(value: string): FriendUserProfile;

  getIsInstructor(): boolean;
  setIsInstructor(value: boolean): FriendUserProfile;

  getIsFriend(): boolean;
  setIsFriend(value: boolean): FriendUserProfile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendUserProfile.AsObject;
  static toObject(includeInstance: boolean, msg: FriendUserProfile): FriendUserProfile.AsObject;
  static serializeBinaryToWriter(message: FriendUserProfile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendUserProfile;
  static deserializeBinaryFromReader(message: FriendUserProfile, reader: jspb.BinaryReader): FriendUserProfile;
}

export namespace FriendUserProfile {
  export type AsObject = {
    id: number;
    customId: string;
    nickname: string;
    avatarUrl: string;
    bio: string;
    isInstructor: boolean;
    isFriend: boolean;
  };
}

export class SearchUserByCustomIdRequest extends jspb.Message {
  getCustomId(): string;
  setCustomId(value: string): SearchUserByCustomIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUserByCustomIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUserByCustomIdRequest): SearchUserByCustomIdRequest.AsObject;
  static serializeBinaryToWriter(message: SearchUserByCustomIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUserByCustomIdRequest;
  static deserializeBinaryFromReader(message: SearchUserByCustomIdRequest, reader: jspb.BinaryReader): SearchUserByCustomIdRequest;
}

export namespace SearchUserByCustomIdRequest {
  export type AsObject = {
    customId: string;
  };
}

export class SearchUserByCustomIdResponse extends jspb.Message {
  getUser(): FriendUserProfile | undefined;
  setUser(value?: FriendUserProfile): SearchUserByCustomIdResponse;
  hasUser(): boolean;
  clearUser(): SearchUserByCustomIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchUserByCustomIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchUserByCustomIdResponse): SearchUserByCustomIdResponse.AsObject;
  static serializeBinaryToWriter(message: SearchUserByCustomIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchUserByCustomIdResponse;
  static deserializeBinaryFromReader(message: SearchUserByCustomIdResponse, reader: jspb.BinaryReader): SearchUserByCustomIdResponse;
}

export namespace SearchUserByCustomIdResponse {
  export type AsObject = {
    user?: FriendUserProfile.AsObject;
  };
}

export class UpdateCustomIdRequest extends jspb.Message {
  getCustomId(): string;
  setCustomId(value: string): UpdateCustomIdRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomIdRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomIdRequest): UpdateCustomIdRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomIdRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomIdRequest;
  static deserializeBinaryFromReader(message: UpdateCustomIdRequest, reader: jspb.BinaryReader): UpdateCustomIdRequest;
}

export namespace UpdateCustomIdRequest {
  export type AsObject = {
    customId: string;
  };
}

export class UpdateCustomIdResponse extends jspb.Message {
  getCustomId(): string;
  setCustomId(value: string): UpdateCustomIdResponse;

  getIsCustomIdSet(): boolean;
  setIsCustomIdSet(value: boolean): UpdateCustomIdResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCustomIdResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCustomIdResponse): UpdateCustomIdResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCustomIdResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCustomIdResponse;
  static deserializeBinaryFromReader(message: UpdateCustomIdResponse, reader: jspb.BinaryReader): UpdateCustomIdResponse;
}

export namespace UpdateCustomIdResponse {
  export type AsObject = {
    customId: string;
    isCustomIdSet: boolean;
  };
}

export class SendFriendRequestRequest extends jspb.Message {
  getReceiverId(): number;
  setReceiverId(value: number): SendFriendRequestRequest;

  getMessage(): string;
  setMessage(value: string): SendFriendRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFriendRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SendFriendRequestRequest): SendFriendRequestRequest.AsObject;
  static serializeBinaryToWriter(message: SendFriendRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFriendRequestRequest;
  static deserializeBinaryFromReader(message: SendFriendRequestRequest, reader: jspb.BinaryReader): SendFriendRequestRequest;
}

export namespace SendFriendRequestRequest {
  export type AsObject = {
    receiverId: number;
    message: string;
  };
}

export class SendFriendRequestResponse extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): SendFriendRequestResponse;

  getStatus(): string;
  setStatus(value: string): SendFriendRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SendFriendRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SendFriendRequestResponse): SendFriendRequestResponse.AsObject;
  static serializeBinaryToWriter(message: SendFriendRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SendFriendRequestResponse;
  static deserializeBinaryFromReader(message: SendFriendRequestResponse, reader: jspb.BinaryReader): SendFriendRequestResponse;
}

export namespace SendFriendRequestResponse {
  export type AsObject = {
    requestId: number;
    status: string;
  };
}

export class FriendRequestItem extends jspb.Message {
  getId(): number;
  setId(value: number): FriendRequestItem;

  getSenderId(): number;
  setSenderId(value: number): FriendRequestItem;

  getReceiverId(): number;
  setReceiverId(value: number): FriendRequestItem;

  getSenderNickname(): string;
  setSenderNickname(value: string): FriendRequestItem;

  getSenderAvatarUrl(): string;
  setSenderAvatarUrl(value: string): FriendRequestItem;

  getSenderCustomId(): string;
  setSenderCustomId(value: string): FriendRequestItem;

  getReceiverNickname(): string;
  setReceiverNickname(value: string): FriendRequestItem;

  getReceiverAvatarUrl(): string;
  setReceiverAvatarUrl(value: string): FriendRequestItem;

  getReceiverCustomId(): string;
  setReceiverCustomId(value: string): FriendRequestItem;

  getMessage(): string;
  setMessage(value: string): FriendRequestItem;

  getStatus(): string;
  setStatus(value: string): FriendRequestItem;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): FriendRequestItem;
  hasCreatedAt(): boolean;
  clearCreatedAt(): FriendRequestItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendRequestItem.AsObject;
  static toObject(includeInstance: boolean, msg: FriendRequestItem): FriendRequestItem.AsObject;
  static serializeBinaryToWriter(message: FriendRequestItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendRequestItem;
  static deserializeBinaryFromReader(message: FriendRequestItem, reader: jspb.BinaryReader): FriendRequestItem;
}

export namespace FriendRequestItem {
  export type AsObject = {
    id: number;
    senderId: number;
    receiverId: number;
    senderNickname: string;
    senderAvatarUrl: string;
    senderCustomId: string;
    receiverNickname: string;
    receiverAvatarUrl: string;
    receiverCustomId: string;
    message: string;
    status: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class ListFriendRequestsRequest extends jspb.Message {
  getFilter(): string;
  setFilter(value: string): ListFriendRequestsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListFriendRequestsRequest;

  getPageId(): number;
  setPageId(value: number): ListFriendRequestsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFriendRequestsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFriendRequestsRequest): ListFriendRequestsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFriendRequestsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFriendRequestsRequest;
  static deserializeBinaryFromReader(message: ListFriendRequestsRequest, reader: jspb.BinaryReader): ListFriendRequestsRequest;
}

export namespace ListFriendRequestsRequest {
  export type AsObject = {
    filter: string;
    pageSize: number;
    pageId: number;
  };
}

export class ListFriendRequestsResponse extends jspb.Message {
  getRequestsList(): Array<FriendRequestItem>;
  setRequestsList(value: Array<FriendRequestItem>): ListFriendRequestsResponse;
  clearRequestsList(): ListFriendRequestsResponse;
  addRequests(value?: FriendRequestItem, index?: number): FriendRequestItem;

  getUnhandledCount(): number;
  setUnhandledCount(value: number): ListFriendRequestsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFriendRequestsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFriendRequestsResponse): ListFriendRequestsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFriendRequestsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFriendRequestsResponse;
  static deserializeBinaryFromReader(message: ListFriendRequestsResponse, reader: jspb.BinaryReader): ListFriendRequestsResponse;
}

export namespace ListFriendRequestsResponse {
  export type AsObject = {
    requestsList: Array<FriendRequestItem.AsObject>;
    unhandledCount: number;
  };
}

export class HandleFriendRequestRequest extends jspb.Message {
  getRequestId(): number;
  setRequestId(value: number): HandleFriendRequestRequest;

  getAction(): string;
  setAction(value: string): HandleFriendRequestRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleFriendRequestRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleFriendRequestRequest): HandleFriendRequestRequest.AsObject;
  static serializeBinaryToWriter(message: HandleFriendRequestRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleFriendRequestRequest;
  static deserializeBinaryFromReader(message: HandleFriendRequestRequest, reader: jspb.BinaryReader): HandleFriendRequestRequest;
}

export namespace HandleFriendRequestRequest {
  export type AsObject = {
    requestId: number;
    action: string;
  };
}

export class HandleFriendRequestResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): HandleFriendRequestResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleFriendRequestResponse.AsObject;
  static toObject(includeInstance: boolean, msg: HandleFriendRequestResponse): HandleFriendRequestResponse.AsObject;
  static serializeBinaryToWriter(message: HandleFriendRequestResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleFriendRequestResponse;
  static deserializeBinaryFromReader(message: HandleFriendRequestResponse, reader: jspb.BinaryReader): HandleFriendRequestResponse;
}

export namespace HandleFriendRequestResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class FriendItem extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): FriendItem;

  getCustomId(): string;
  setCustomId(value: string): FriendItem;

  getNickname(): string;
  setNickname(value: string): FriendItem;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): FriendItem;

  getRemark(): string;
  setRemark(value: string): FriendItem;

  getIsStarred(): boolean;
  setIsStarred(value: boolean): FriendItem;

  getBio(): string;
  setBio(value: string): FriendItem;

  getFriendSince(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFriendSince(value?: google_protobuf_timestamp_pb.Timestamp): FriendItem;
  hasFriendSince(): boolean;
  clearFriendSince(): FriendItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FriendItem.AsObject;
  static toObject(includeInstance: boolean, msg: FriendItem): FriendItem.AsObject;
  static serializeBinaryToWriter(message: FriendItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FriendItem;
  static deserializeBinaryFromReader(message: FriendItem, reader: jspb.BinaryReader): FriendItem;
}

export namespace FriendItem {
  export type AsObject = {
    userId: number;
    customId: string;
    nickname: string;
    avatarUrl: string;
    remark: string;
    isStarred: boolean;
    bio: string;
    friendSince?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class ListFriendsRequest extends jspb.Message {
  getPageSize(): number;
  setPageSize(value: number): ListFriendsRequest;

  getPageId(): number;
  setPageId(value: number): ListFriendsRequest;

  getSearchQuery(): string;
  setSearchQuery(value: string): ListFriendsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFriendsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListFriendsRequest): ListFriendsRequest.AsObject;
  static serializeBinaryToWriter(message: ListFriendsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFriendsRequest;
  static deserializeBinaryFromReader(message: ListFriendsRequest, reader: jspb.BinaryReader): ListFriendsRequest;
}

export namespace ListFriendsRequest {
  export type AsObject = {
    pageSize: number;
    pageId: number;
    searchQuery: string;
  };
}

export class ListFriendsResponse extends jspb.Message {
  getFriendsList(): Array<FriendItem>;
  setFriendsList(value: Array<FriendItem>): ListFriendsResponse;
  clearFriendsList(): ListFriendsResponse;
  addFriends(value?: FriendItem, index?: number): FriendItem;

  getTotalCount(): number;
  setTotalCount(value: number): ListFriendsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListFriendsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListFriendsResponse): ListFriendsResponse.AsObject;
  static serializeBinaryToWriter(message: ListFriendsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListFriendsResponse;
  static deserializeBinaryFromReader(message: ListFriendsResponse, reader: jspb.BinaryReader): ListFriendsResponse;
}

export namespace ListFriendsResponse {
  export type AsObject = {
    friendsList: Array<FriendItem.AsObject>;
    totalCount: number;
  };
}

export class SetFriendRemarkRequest extends jspb.Message {
  getFriendId(): number;
  setFriendId(value: number): SetFriendRemarkRequest;

  getRemark(): string;
  setRemark(value: string): SetFriendRemarkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetFriendRemarkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetFriendRemarkRequest): SetFriendRemarkRequest.AsObject;
  static serializeBinaryToWriter(message: SetFriendRemarkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetFriendRemarkRequest;
  static deserializeBinaryFromReader(message: SetFriendRemarkRequest, reader: jspb.BinaryReader): SetFriendRemarkRequest;
}

export namespace SetFriendRemarkRequest {
  export type AsObject = {
    friendId: number;
    remark: string;
  };
}

export class SetFriendRemarkResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): SetFriendRemarkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetFriendRemarkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SetFriendRemarkResponse): SetFriendRemarkResponse.AsObject;
  static serializeBinaryToWriter(message: SetFriendRemarkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetFriendRemarkResponse;
  static deserializeBinaryFromReader(message: SetFriendRemarkResponse, reader: jspb.BinaryReader): SetFriendRemarkResponse;
}

export namespace SetFriendRemarkResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class DeleteFriendRequest extends jspb.Message {
  getFriendId(): number;
  setFriendId(value: number): DeleteFriendRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFriendRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFriendRequest): DeleteFriendRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteFriendRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFriendRequest;
  static deserializeBinaryFromReader(message: DeleteFriendRequest, reader: jspb.BinaryReader): DeleteFriendRequest;
}

export namespace DeleteFriendRequest {
  export type AsObject = {
    friendId: number;
  };
}

export class DeleteFriendResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteFriendResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFriendResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFriendResponse): DeleteFriendResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteFriendResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFriendResponse;
  static deserializeBinaryFromReader(message: DeleteFriendResponse, reader: jspb.BinaryReader): DeleteFriendResponse;
}

export namespace DeleteFriendResponse {
  export type AsObject = {
    success: boolean;
  };
}

