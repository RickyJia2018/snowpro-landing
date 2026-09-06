import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class ResortDatePlan extends jspb.Message {
  getResortName(): string;
  setResortName(value: string): ResortDatePlan;

  getDateText(): string;
  setDateText(value: string): ResortDatePlan;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): ResortDatePlan;
  hasStartDate(): boolean;
  clearStartDate(): ResortDatePlan;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): ResortDatePlan;
  hasEndDate(): boolean;
  clearEndDate(): ResortDatePlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResortDatePlan.AsObject;
  static toObject(includeInstance: boolean, msg: ResortDatePlan): ResortDatePlan.AsObject;
  static serializeBinaryToWriter(message: ResortDatePlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResortDatePlan;
  static deserializeBinaryFromReader(message: ResortDatePlan, reader: jspb.BinaryReader): ResortDatePlan;
}

export namespace ResortDatePlan {
  export type AsObject = {
    resortName: string;
    dateText: string;
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum StartDateCase {
    _START_DATE_NOT_SET = 0,
    START_DATE = 3,
  }

  export enum EndDateCase {
    _END_DATE_NOT_SET = 0,
    END_DATE = 4,
  }
}

export class BuddyPost extends jspb.Message {
  getId(): string;
  setId(value: string): BuddyPost;

  getUserId(): number;
  setUserId(value: number): BuddyPost;

  getNickname(): string;
  setNickname(value: string): BuddyPost;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): BuddyPost;

  getIsVip(): boolean;
  setIsVip(value: boolean): BuddyPost;

  getGender(): string;
  setGender(value: string): BuddyPost;

  getResortName(): string;
  setResortName(value: string): BuddyPost;

  getTargetDate(): string;
  setTargetDate(value: string): BuddyPost;

  getResortPlansList(): Array<ResortDatePlan>;
  setResortPlansList(value: Array<ResortDatePlan>): BuddyPost;
  clearResortPlansList(): BuddyPost;
  addResortPlans(value?: ResortDatePlan, index?: number): ResortDatePlan;

  getBoardType(): string;
  setBoardType(value: string): BuddyPost;

  getSkiLevel(): string;
  setSkiLevel(value: string): BuddyPost;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): BuddyPost;
  clearTagsList(): BuddyPost;
  addTags(value: string, index?: number): BuddyPost;

  getDescription(): string;
  setDescription(value: string): BuddyPost;

  getIsPinned(): boolean;
  setIsPinned(value: boolean): BuddyPost;

  getIsUnlocked(): boolean;
  setIsUnlocked(value: boolean): BuddyPost;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): BuddyPost;
  hasCreatedAt(): boolean;
  clearCreatedAt(): BuddyPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BuddyPost.AsObject;
  static toObject(includeInstance: boolean, msg: BuddyPost): BuddyPost.AsObject;
  static serializeBinaryToWriter(message: BuddyPost, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BuddyPost;
  static deserializeBinaryFromReader(message: BuddyPost, reader: jspb.BinaryReader): BuddyPost;
}

export namespace BuddyPost {
  export type AsObject = {
    id: string;
    userId: number;
    nickname: string;
    avatarUrl: string;
    isVip: boolean;
    gender: string;
    resortName: string;
    targetDate: string;
    resortPlansList: Array<ResortDatePlan.AsObject>;
    boardType: string;
    skiLevel: string;
    tagsList: Array<string>;
    description: string;
    isPinned: boolean;
    isUnlocked: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class CreateBuddyPostRequest extends jspb.Message {
  getResortPlansList(): Array<ResortDatePlan>;
  setResortPlansList(value: Array<ResortDatePlan>): CreateBuddyPostRequest;
  clearResortPlansList(): CreateBuddyPostRequest;
  addResortPlans(value?: ResortDatePlan, index?: number): ResortDatePlan;

  getBoardType(): string;
  setBoardType(value: string): CreateBuddyPostRequest;

  getSkiLevel(): string;
  setSkiLevel(value: string): CreateBuddyPostRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): CreateBuddyPostRequest;
  clearTagsList(): CreateBuddyPostRequest;
  addTags(value: string, index?: number): CreateBuddyPostRequest;

  getDescription(): string;
  setDescription(value: string): CreateBuddyPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuddyPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuddyPostRequest): CreateBuddyPostRequest.AsObject;
  static serializeBinaryToWriter(message: CreateBuddyPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuddyPostRequest;
  static deserializeBinaryFromReader(message: CreateBuddyPostRequest, reader: jspb.BinaryReader): CreateBuddyPostRequest;
}

export namespace CreateBuddyPostRequest {
  export type AsObject = {
    resortPlansList: Array<ResortDatePlan.AsObject>;
    boardType: string;
    skiLevel: string;
    tagsList: Array<string>;
    description: string;
  };
}

export class CreateBuddyPostResponse extends jspb.Message {
  getPost(): BuddyPost | undefined;
  setPost(value?: BuddyPost): CreateBuddyPostResponse;
  hasPost(): boolean;
  clearPost(): CreateBuddyPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateBuddyPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateBuddyPostResponse): CreateBuddyPostResponse.AsObject;
  static serializeBinaryToWriter(message: CreateBuddyPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateBuddyPostResponse;
  static deserializeBinaryFromReader(message: CreateBuddyPostResponse, reader: jspb.BinaryReader): CreateBuddyPostResponse;
}

export namespace CreateBuddyPostResponse {
  export type AsObject = {
    post?: BuddyPost.AsObject;
  };
}

export class ListBuddyPostsRequest extends jspb.Message {
  getResortName(): string;
  setResortName(value: string): ListBuddyPostsRequest;
  hasResortName(): boolean;
  clearResortName(): ListBuddyPostsRequest;

  getTagFilter(): string;
  setTagFilter(value: string): ListBuddyPostsRequest;
  hasTagFilter(): boolean;
  clearTagFilter(): ListBuddyPostsRequest;

  getBoardFilter(): string;
  setBoardFilter(value: string): ListBuddyPostsRequest;
  hasBoardFilter(): boolean;
  clearBoardFilter(): ListBuddyPostsRequest;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): ListBuddyPostsRequest;
  hasStartDate(): boolean;
  clearStartDate(): ListBuddyPostsRequest;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): ListBuddyPostsRequest;
  hasEndDate(): boolean;
  clearEndDate(): ListBuddyPostsRequest;

  getPage(): number;
  setPage(value: number): ListBuddyPostsRequest;
  hasPage(): boolean;
  clearPage(): ListBuddyPostsRequest;

  getLimit(): number;
  setLimit(value: number): ListBuddyPostsRequest;
  hasLimit(): boolean;
  clearLimit(): ListBuddyPostsRequest;

  getUserId(): number;
  setUserId(value: number): ListBuddyPostsRequest;
  hasUserId(): boolean;
  clearUserId(): ListBuddyPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuddyPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuddyPostsRequest): ListBuddyPostsRequest.AsObject;
  static serializeBinaryToWriter(message: ListBuddyPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuddyPostsRequest;
  static deserializeBinaryFromReader(message: ListBuddyPostsRequest, reader: jspb.BinaryReader): ListBuddyPostsRequest;
}

export namespace ListBuddyPostsRequest {
  export type AsObject = {
    resortName?: string;
    tagFilter?: string;
    boardFilter?: string;
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    page?: number;
    limit?: number;
    userId?: number;
  };

  export enum ResortNameCase {
    _RESORT_NAME_NOT_SET = 0,
    RESORT_NAME = 1,
  }

  export enum TagFilterCase {
    _TAG_FILTER_NOT_SET = 0,
    TAG_FILTER = 2,
  }

  export enum BoardFilterCase {
    _BOARD_FILTER_NOT_SET = 0,
    BOARD_FILTER = 3,
  }

  export enum StartDateCase {
    _START_DATE_NOT_SET = 0,
    START_DATE = 4,
  }

  export enum EndDateCase {
    _END_DATE_NOT_SET = 0,
    END_DATE = 5,
  }

  export enum PageCase {
    _PAGE_NOT_SET = 0,
    PAGE = 6,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 7,
  }

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 8,
  }
}

export class ListBuddyPostsResponse extends jspb.Message {
  getPostsList(): Array<BuddyPost>;
  setPostsList(value: Array<BuddyPost>): ListBuddyPostsResponse;
  clearPostsList(): ListBuddyPostsResponse;
  addPosts(value?: BuddyPost, index?: number): BuddyPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListBuddyPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListBuddyPostsResponse): ListBuddyPostsResponse.AsObject;
  static serializeBinaryToWriter(message: ListBuddyPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListBuddyPostsResponse;
  static deserializeBinaryFromReader(message: ListBuddyPostsResponse, reader: jspb.BinaryReader): ListBuddyPostsResponse;
}

export namespace ListBuddyPostsResponse {
  export type AsObject = {
    postsList: Array<BuddyPost.AsObject>;
  };
}

export class ListMyBuddyPostsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListMyBuddyPostsRequest;
  hasPage(): boolean;
  clearPage(): ListMyBuddyPostsRequest;

  getLimit(): number;
  setLimit(value: number): ListMyBuddyPostsRequest;
  hasLimit(): boolean;
  clearLimit(): ListMyBuddyPostsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyBuddyPostsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyBuddyPostsRequest): ListMyBuddyPostsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMyBuddyPostsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyBuddyPostsRequest;
  static deserializeBinaryFromReader(message: ListMyBuddyPostsRequest, reader: jspb.BinaryReader): ListMyBuddyPostsRequest;
}

export namespace ListMyBuddyPostsRequest {
  export type AsObject = {
    page?: number;
    limit?: number;
  };

  export enum PageCase {
    _PAGE_NOT_SET = 0,
    PAGE = 1,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 2,
  }
}

export class ListMyBuddyPostsResponse extends jspb.Message {
  getPostsList(): Array<BuddyPost>;
  setPostsList(value: Array<BuddyPost>): ListMyBuddyPostsResponse;
  clearPostsList(): ListMyBuddyPostsResponse;
  addPosts(value?: BuddyPost, index?: number): BuddyPost;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyBuddyPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyBuddyPostsResponse): ListMyBuddyPostsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMyBuddyPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyBuddyPostsResponse;
  static deserializeBinaryFromReader(message: ListMyBuddyPostsResponse, reader: jspb.BinaryReader): ListMyBuddyPostsResponse;
}

export namespace ListMyBuddyPostsResponse {
  export type AsObject = {
    postsList: Array<BuddyPost.AsObject>;
  };
}

export class UpdateBuddyPostRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateBuddyPostRequest;

  getResortPlansList(): Array<ResortDatePlan>;
  setResortPlansList(value: Array<ResortDatePlan>): UpdateBuddyPostRequest;
  clearResortPlansList(): UpdateBuddyPostRequest;
  addResortPlans(value?: ResortDatePlan, index?: number): ResortDatePlan;

  getBoardType(): string;
  setBoardType(value: string): UpdateBuddyPostRequest;

  getSkiLevel(): string;
  setSkiLevel(value: string): UpdateBuddyPostRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UpdateBuddyPostRequest;
  clearTagsList(): UpdateBuddyPostRequest;
  addTags(value: string, index?: number): UpdateBuddyPostRequest;

  getDescription(): string;
  setDescription(value: string): UpdateBuddyPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBuddyPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBuddyPostRequest): UpdateBuddyPostRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateBuddyPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBuddyPostRequest;
  static deserializeBinaryFromReader(message: UpdateBuddyPostRequest, reader: jspb.BinaryReader): UpdateBuddyPostRequest;
}

export namespace UpdateBuddyPostRequest {
  export type AsObject = {
    id: string;
    resortPlansList: Array<ResortDatePlan.AsObject>;
    boardType: string;
    skiLevel: string;
    tagsList: Array<string>;
    description: string;
  };
}

export class UpdateBuddyPostResponse extends jspb.Message {
  getPost(): BuddyPost | undefined;
  setPost(value?: BuddyPost): UpdateBuddyPostResponse;
  hasPost(): boolean;
  clearPost(): UpdateBuddyPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateBuddyPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateBuddyPostResponse): UpdateBuddyPostResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateBuddyPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateBuddyPostResponse;
  static deserializeBinaryFromReader(message: UpdateBuddyPostResponse, reader: jspb.BinaryReader): UpdateBuddyPostResponse;
}

export namespace UpdateBuddyPostResponse {
  export type AsObject = {
    post?: BuddyPost.AsObject;
  };
}

export class DeleteBuddyPostRequest extends jspb.Message {
  getId(): string;
  setId(value: string): DeleteBuddyPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBuddyPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBuddyPostRequest): DeleteBuddyPostRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteBuddyPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBuddyPostRequest;
  static deserializeBinaryFromReader(message: DeleteBuddyPostRequest, reader: jspb.BinaryReader): DeleteBuddyPostRequest;
}

export namespace DeleteBuddyPostRequest {
  export type AsObject = {
    id: string;
  };
}

export class DeleteBuddyPostResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteBuddyPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteBuddyPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteBuddyPostResponse): DeleteBuddyPostResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteBuddyPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteBuddyPostResponse;
  static deserializeBinaryFromReader(message: DeleteBuddyPostResponse, reader: jspb.BinaryReader): DeleteBuddyPostResponse;
}

export namespace DeleteBuddyPostResponse {
  export type AsObject = {
    success: boolean;
  };
}

