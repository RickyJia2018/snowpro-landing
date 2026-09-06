import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as rpc_review_pb from './rpc_review_pb'; // proto import: "rpc_review.proto"
import * as rpc_dispute_pb from './rpc_dispute_pb'; // proto import: "rpc_dispute.proto"
import * as rpc_language_pb from './rpc_language_pb'; // proto import: "rpc_language.proto"


export class Lesson extends jspb.Message {
  getId(): string;
  setId(value: string): Lesson;

  getStudentId(): number;
  setStudentId(value: number): Lesson;

  getInstructorId(): number;
  setInstructorId(value: number): Lesson;

  getStatus(): LessonStatus;
  setStatus(value: LessonStatus): Lesson;

  getPrice(): number;
  setPrice(value: number): Lesson;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Lesson;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Lesson;

  getApprovedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setApprovedAt(value?: google_protobuf_timestamp_pb.Timestamp): Lesson;
  hasApprovedAt(): boolean;
  clearApprovedAt(): Lesson;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): Lesson;
  hasCompletedAt(): boolean;
  clearCompletedAt(): Lesson;

  getVideoUrl(): string;
  setVideoUrl(value: string): Lesson;

  getCommentsList(): Array<LessonComment>;
  setCommentsList(value: Array<LessonComment>): Lesson;
  clearCommentsList(): Lesson;
  addComments(value?: LessonComment, index?: number): LessonComment;

  getLanguage(): rpc_language_pb.Language | undefined;
  setLanguage(value?: rpc_language_pb.Language): Lesson;
  hasLanguage(): boolean;
  clearLanguage(): Lesson;

  getStudentCommentLimit(): number;
  setStudentCommentLimit(value: number): Lesson;

  getRequirementsSnapshot(): string;
  setRequirementsSnapshot(value: string): Lesson;
  hasRequirementsSnapshot(): boolean;
  clearRequirementsSnapshot(): Lesson;

  getFinishedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFinishedAt(value?: google_protobuf_timestamp_pb.Timestamp): Lesson;
  hasFinishedAt(): boolean;
  clearFinishedAt(): Lesson;

  getStudentUnread(): boolean;
  setStudentUnread(value: boolean): Lesson;

  getInstructorUnread(): boolean;
  setInstructorUnread(value: boolean): Lesson;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): Lesson;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Lesson.AsObject;
  static toObject(includeInstance: boolean, msg: Lesson): Lesson.AsObject;
  static serializeBinaryToWriter(message: Lesson, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Lesson;
  static deserializeBinaryFromReader(message: Lesson, reader: jspb.BinaryReader): Lesson;
}

export namespace Lesson {
  export type AsObject = {
    id: string;
    studentId: number;
    instructorId: number;
    status: LessonStatus;
    price: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    approvedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    videoUrl: string;
    commentsList: Array<LessonComment.AsObject>;
    language?: rpc_language_pb.Language.AsObject;
    studentCommentLimit: number;
    requirementsSnapshot?: string;
    finishedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    studentUnread: boolean;
    instructorUnread: boolean;
    thumbnailUrl: string;
  };

  export enum RequirementsSnapshotCase {
    _REQUIREMENTS_SNAPSHOT_NOT_SET = 0,
    REQUIREMENTS_SNAPSHOT = 13,
  }
}

export class LessonComment extends jspb.Message {
  getId(): string;
  setId(value: string): LessonComment;

  getLessonId(): string;
  setLessonId(value: string): LessonComment;

  getSenderId(): number;
  setSenderId(value: number): LessonComment;

  getSenderType(): LessonCommentSenderType;
  setSenderType(value: LessonCommentSenderType): LessonComment;

  getContent(): string;
  setContent(value: string): LessonComment;

  getMediaUrl(): string;
  setMediaUrl(value: string): LessonComment;
  hasMediaUrl(): boolean;
  clearMediaUrl(): LessonComment;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): LessonComment;
  hasCreatedAt(): boolean;
  clearCreatedAt(): LessonComment;

  getMediaWidth(): number;
  setMediaWidth(value: number): LessonComment;
  hasMediaWidth(): boolean;
  clearMediaWidth(): LessonComment;

  getMediaHeight(): number;
  setMediaHeight(value: number): LessonComment;
  hasMediaHeight(): boolean;
  clearMediaHeight(): LessonComment;

  getVideoTimestampMs(): number;
  setVideoTimestampMs(value: number): LessonComment;
  hasVideoTimestampMs(): boolean;
  clearVideoTimestampMs(): LessonComment;

  getAnnotationData(): string;
  setAnnotationData(value: string): LessonComment;
  hasAnnotationData(): boolean;
  clearAnnotationData(): LessonComment;

  getVideoDurationMs(): number;
  setVideoDurationMs(value: number): LessonComment;
  hasVideoDurationMs(): boolean;
  clearVideoDurationMs(): LessonComment;

  getAnnotationAudioUrl(): string;
  setAnnotationAudioUrl(value: string): LessonComment;
  hasAnnotationAudioUrl(): boolean;
  clearAnnotationAudioUrl(): LessonComment;

  getAnnotationAudioDurationMs(): number;
  setAnnotationAudioDurationMs(value: number): LessonComment;
  hasAnnotationAudioDurationMs(): boolean;
  clearAnnotationAudioDurationMs(): LessonComment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LessonComment.AsObject;
  static toObject(includeInstance: boolean, msg: LessonComment): LessonComment.AsObject;
  static serializeBinaryToWriter(message: LessonComment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LessonComment;
  static deserializeBinaryFromReader(message: LessonComment, reader: jspb.BinaryReader): LessonComment;
}

export namespace LessonComment {
  export type AsObject = {
    id: string;
    lessonId: string;
    senderId: number;
    senderType: LessonCommentSenderType;
    content: string;
    mediaUrl?: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    mediaWidth?: number;
    mediaHeight?: number;
    videoTimestampMs?: number;
    annotationData?: string;
    videoDurationMs?: number;
    annotationAudioUrl?: string;
    annotationAudioDurationMs?: number;
  };

  export enum MediaUrlCase {
    _MEDIA_URL_NOT_SET = 0,
    MEDIA_URL = 6,
  }

  export enum MediaWidthCase {
    _MEDIA_WIDTH_NOT_SET = 0,
    MEDIA_WIDTH = 8,
  }

  export enum MediaHeightCase {
    _MEDIA_HEIGHT_NOT_SET = 0,
    MEDIA_HEIGHT = 9,
  }

  export enum VideoTimestampMsCase {
    _VIDEO_TIMESTAMP_MS_NOT_SET = 0,
    VIDEO_TIMESTAMP_MS = 10,
  }

  export enum AnnotationDataCase {
    _ANNOTATION_DATA_NOT_SET = 0,
    ANNOTATION_DATA = 11,
  }

  export enum VideoDurationMsCase {
    _VIDEO_DURATION_MS_NOT_SET = 0,
    VIDEO_DURATION_MS = 12,
  }

  export enum AnnotationAudioUrlCase {
    _ANNOTATION_AUDIO_URL_NOT_SET = 0,
    ANNOTATION_AUDIO_URL = 13,
  }

  export enum AnnotationAudioDurationMsCase {
    _ANNOTATION_AUDIO_DURATION_MS_NOT_SET = 0,
    ANNOTATION_AUDIO_DURATION_MS = 14,
  }
}

export class GetLessonRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetLessonRequest): GetLessonRequest.AsObject;
  static serializeBinaryToWriter(message: GetLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLessonRequest;
  static deserializeBinaryFromReader(message: GetLessonRequest, reader: jspb.BinaryReader): GetLessonRequest;
}

export namespace GetLessonRequest {
  export type AsObject = {
    id: string;
  };
}

export class GetLessonResponse extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): GetLessonResponse;
  hasLesson(): boolean;
  clearLesson(): GetLessonResponse;

  getDispute(): rpc_dispute_pb.Dispute | undefined;
  setDispute(value?: rpc_dispute_pb.Dispute): GetLessonResponse;
  hasDispute(): boolean;
  clearDispute(): GetLessonResponse;

  getReview(): rpc_review_pb.Review | undefined;
  setReview(value?: rpc_review_pb.Review): GetLessonResponse;
  hasReview(): boolean;
  clearReview(): GetLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetLessonResponse): GetLessonResponse.AsObject;
  static serializeBinaryToWriter(message: GetLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetLessonResponse;
  static deserializeBinaryFromReader(message: GetLessonResponse, reader: jspb.BinaryReader): GetLessonResponse;
}

export namespace GetLessonResponse {
  export type AsObject = {
    lesson?: Lesson.AsObject;
    dispute?: rpc_dispute_pb.Dispute.AsObject;
    review?: rpc_review_pb.Review.AsObject;
  };

  export enum DisputeCase {
    _DISPUTE_NOT_SET = 0,
    DISPUTE = 2,
  }

  export enum ReviewCase {
    _REVIEW_NOT_SET = 0,
    REVIEW = 3,
  }
}

export class CreateLessonRequest extends jspb.Message {
  getStudentId(): number;
  setStudentId(value: number): CreateLessonRequest;

  getInstructorId(): number;
  setInstructorId(value: number): CreateLessonRequest;

  getPrice(): number;
  setPrice(value: number): CreateLessonRequest;

  getVideoUrl(): string;
  setVideoUrl(value: string): CreateLessonRequest;
  hasVideoUrl(): boolean;
  clearVideoUrl(): CreateLessonRequest;

  getLanguageId(): number;
  setLanguageId(value: number): CreateLessonRequest;

  getMessage(): string;
  setMessage(value: string): CreateLessonRequest;
  hasMessage(): boolean;
  clearMessage(): CreateLessonRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): CreateLessonRequest;

  getAgreedLessonPolicies(): boolean;
  setAgreedLessonPolicies(value: boolean): CreateLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonRequest): CreateLessonRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonRequest;
  static deserializeBinaryFromReader(message: CreateLessonRequest, reader: jspb.BinaryReader): CreateLessonRequest;
}

export namespace CreateLessonRequest {
  export type AsObject = {
    studentId: number;
    instructorId: number;
    price: number;
    videoUrl?: string;
    languageId: number;
    message?: string;
    idempotencyKey: string;
    agreedLessonPolicies: boolean;
  };

  export enum VideoUrlCase {
    _VIDEO_URL_NOT_SET = 0,
    VIDEO_URL = 4,
  }

  export enum MessageCase {
    _MESSAGE_NOT_SET = 0,
    MESSAGE = 6,
  }
}

export class CreateLessonResponse extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): CreateLessonResponse;
  hasLesson(): boolean;
  clearLesson(): CreateLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonResponse): CreateLessonResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonResponse;
  static deserializeBinaryFromReader(message: CreateLessonResponse, reader: jspb.BinaryReader): CreateLessonResponse;
}

export namespace CreateLessonResponse {
  export type AsObject = {
    lesson?: Lesson.AsObject;
  };
}

export class UpdateLessonRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateLessonRequest;

  getNewStatus(): LessonStatus;
  setNewStatus(value: LessonStatus): UpdateLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLessonRequest): UpdateLessonRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLessonRequest;
  static deserializeBinaryFromReader(message: UpdateLessonRequest, reader: jspb.BinaryReader): UpdateLessonRequest;
}

export namespace UpdateLessonRequest {
  export type AsObject = {
    id: string;
    newStatus: LessonStatus;
  };
}

export class UpdateLessonResponse extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): UpdateLessonResponse;
  hasLesson(): boolean;
  clearLesson(): UpdateLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateLessonResponse): UpdateLessonResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateLessonResponse;
  static deserializeBinaryFromReader(message: UpdateLessonResponse, reader: jspb.BinaryReader): UpdateLessonResponse;
}

export namespace UpdateLessonResponse {
  export type AsObject = {
    lesson?: Lesson.AsObject;
  };
}

export class ListLessonRequest extends jspb.Message {
  getStudentId(): number;
  setStudentId(value: number): ListLessonRequest;
  hasStudentId(): boolean;
  clearStudentId(): ListLessonRequest;

  getInstructorId(): number;
  setInstructorId(value: number): ListLessonRequest;
  hasInstructorId(): boolean;
  clearInstructorId(): ListLessonRequest;

  getOffset(): number;
  setOffset(value: number): ListLessonRequest;
  hasOffset(): boolean;
  clearOffset(): ListLessonRequest;

  getLimit(): number;
  setLimit(value: number): ListLessonRequest;
  hasLimit(): boolean;
  clearLimit(): ListLessonRequest;

  getStatus(): LessonStatus;
  setStatus(value: LessonStatus): ListLessonRequest;
  hasStatus(): boolean;
  clearStatus(): ListLessonRequest;

  getCreatedAtStart(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAtStart(value?: google_protobuf_timestamp_pb.Timestamp): ListLessonRequest;
  hasCreatedAtStart(): boolean;
  clearCreatedAtStart(): ListLessonRequest;

  getCreatedAtEnd(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAtEnd(value?: google_protobuf_timestamp_pb.Timestamp): ListLessonRequest;
  hasCreatedAtEnd(): boolean;
  clearCreatedAtEnd(): ListLessonRequest;

  getSortOrder(): string;
  setSortOrder(value: string): ListLessonRequest;
  hasSortOrder(): boolean;
  clearSortOrder(): ListLessonRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonRequest): ListLessonRequest.AsObject;
  static serializeBinaryToWriter(message: ListLessonRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonRequest;
  static deserializeBinaryFromReader(message: ListLessonRequest, reader: jspb.BinaryReader): ListLessonRequest;
}

export namespace ListLessonRequest {
  export type AsObject = {
    studentId?: number;
    instructorId?: number;
    offset?: number;
    limit?: number;
    status?: LessonStatus;
    createdAtStart?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    createdAtEnd?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    sortOrder?: string;
  };

  export enum StudentIdCase {
    _STUDENT_ID_NOT_SET = 0,
    STUDENT_ID = 1,
  }

  export enum InstructorIdCase {
    _INSTRUCTOR_ID_NOT_SET = 0,
    INSTRUCTOR_ID = 2,
  }

  export enum OffsetCase {
    _OFFSET_NOT_SET = 0,
    OFFSET = 3,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 4,
  }

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 5,
  }

  export enum CreatedAtStartCase {
    _CREATED_AT_START_NOT_SET = 0,
    CREATED_AT_START = 6,
  }

  export enum CreatedAtEndCase {
    _CREATED_AT_END_NOT_SET = 0,
    CREATED_AT_END = 7,
  }

  export enum SortOrderCase {
    _SORT_ORDER_NOT_SET = 0,
    SORT_ORDER = 8,
  }
}

export class LessonData extends jspb.Message {
  getLesson(): Lesson | undefined;
  setLesson(value?: Lesson): LessonData;
  hasLesson(): boolean;
  clearLesson(): LessonData;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): LessonData;
  hasUser(): boolean;
  clearUser(): LessonData;

  getReview(): rpc_review_pb.Review | undefined;
  setReview(value?: rpc_review_pb.Review): LessonData;
  hasReview(): boolean;
  clearReview(): LessonData;

  getLessonCommentsList(): Array<LessonComment>;
  setLessonCommentsList(value: Array<LessonComment>): LessonData;
  clearLessonCommentsList(): LessonData;
  addLessonComments(value?: LessonComment, index?: number): LessonComment;

  getDispute(): rpc_dispute_pb.Dispute | undefined;
  setDispute(value?: rpc_dispute_pb.Dispute): LessonData;
  hasDispute(): boolean;
  clearDispute(): LessonData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LessonData.AsObject;
  static toObject(includeInstance: boolean, msg: LessonData): LessonData.AsObject;
  static serializeBinaryToWriter(message: LessonData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LessonData;
  static deserializeBinaryFromReader(message: LessonData, reader: jspb.BinaryReader): LessonData;
}

export namespace LessonData {
  export type AsObject = {
    lesson?: Lesson.AsObject;
    user?: user_pb.User.AsObject;
    review?: rpc_review_pb.Review.AsObject;
    lessonCommentsList: Array<LessonComment.AsObject>;
    dispute?: rpc_dispute_pb.Dispute.AsObject;
  };

  export enum DisputeCase {
    _DISPUTE_NOT_SET = 0,
    DISPUTE = 5,
  }
}

export class ListLessonResponse extends jspb.Message {
  getDataList(): Array<LessonData>;
  setDataList(value: Array<LessonData>): ListLessonResponse;
  clearDataList(): ListLessonResponse;
  addData(value?: LessonData, index?: number): LessonData;

  getTotalCount(): number;
  setTotalCount(value: number): ListLessonResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonResponse): ListLessonResponse.AsObject;
  static serializeBinaryToWriter(message: ListLessonResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonResponse;
  static deserializeBinaryFromReader(message: ListLessonResponse, reader: jspb.BinaryReader): ListLessonResponse;
}

export namespace ListLessonResponse {
  export type AsObject = {
    dataList: Array<LessonData.AsObject>;
    totalCount: number;
  };
}

export class CreateLessonCommentRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): CreateLessonCommentRequest;

  getContent(): string;
  setContent(value: string): CreateLessonCommentRequest;

  getMediaUrl(): string;
  setMediaUrl(value: string): CreateLessonCommentRequest;
  hasMediaUrl(): boolean;
  clearMediaUrl(): CreateLessonCommentRequest;

  getMediaWidth(): number;
  setMediaWidth(value: number): CreateLessonCommentRequest;
  hasMediaWidth(): boolean;
  clearMediaWidth(): CreateLessonCommentRequest;

  getMediaHeight(): number;
  setMediaHeight(value: number): CreateLessonCommentRequest;
  hasMediaHeight(): boolean;
  clearMediaHeight(): CreateLessonCommentRequest;

  getVideoTimestampMs(): number;
  setVideoTimestampMs(value: number): CreateLessonCommentRequest;
  hasVideoTimestampMs(): boolean;
  clearVideoTimestampMs(): CreateLessonCommentRequest;

  getAnnotationData(): string;
  setAnnotationData(value: string): CreateLessonCommentRequest;
  hasAnnotationData(): boolean;
  clearAnnotationData(): CreateLessonCommentRequest;

  getVideoDurationMs(): number;
  setVideoDurationMs(value: number): CreateLessonCommentRequest;
  hasVideoDurationMs(): boolean;
  clearVideoDurationMs(): CreateLessonCommentRequest;

  getAnnotationAudioUrl(): string;
  setAnnotationAudioUrl(value: string): CreateLessonCommentRequest;
  hasAnnotationAudioUrl(): boolean;
  clearAnnotationAudioUrl(): CreateLessonCommentRequest;

  getAnnotationAudioDurationMs(): number;
  setAnnotationAudioDurationMs(value: number): CreateLessonCommentRequest;
  hasAnnotationAudioDurationMs(): boolean;
  clearAnnotationAudioDurationMs(): CreateLessonCommentRequest;

  getIdempotencyKey(): string;
  setIdempotencyKey(value: string): CreateLessonCommentRequest;
  hasIdempotencyKey(): boolean;
  clearIdempotencyKey(): CreateLessonCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonCommentRequest): CreateLessonCommentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateLessonCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonCommentRequest;
  static deserializeBinaryFromReader(message: CreateLessonCommentRequest, reader: jspb.BinaryReader): CreateLessonCommentRequest;
}

export namespace CreateLessonCommentRequest {
  export type AsObject = {
    lessonId: string;
    content: string;
    mediaUrl?: string;
    mediaWidth?: number;
    mediaHeight?: number;
    videoTimestampMs?: number;
    annotationData?: string;
    videoDurationMs?: number;
    annotationAudioUrl?: string;
    annotationAudioDurationMs?: number;
    idempotencyKey?: string;
  };

  export enum MediaUrlCase {
    _MEDIA_URL_NOT_SET = 0,
    MEDIA_URL = 3,
  }

  export enum MediaWidthCase {
    _MEDIA_WIDTH_NOT_SET = 0,
    MEDIA_WIDTH = 4,
  }

  export enum MediaHeightCase {
    _MEDIA_HEIGHT_NOT_SET = 0,
    MEDIA_HEIGHT = 5,
  }

  export enum VideoTimestampMsCase {
    _VIDEO_TIMESTAMP_MS_NOT_SET = 0,
    VIDEO_TIMESTAMP_MS = 6,
  }

  export enum AnnotationDataCase {
    _ANNOTATION_DATA_NOT_SET = 0,
    ANNOTATION_DATA = 7,
  }

  export enum VideoDurationMsCase {
    _VIDEO_DURATION_MS_NOT_SET = 0,
    VIDEO_DURATION_MS = 8,
  }

  export enum AnnotationAudioUrlCase {
    _ANNOTATION_AUDIO_URL_NOT_SET = 0,
    ANNOTATION_AUDIO_URL = 9,
  }

  export enum AnnotationAudioDurationMsCase {
    _ANNOTATION_AUDIO_DURATION_MS_NOT_SET = 0,
    ANNOTATION_AUDIO_DURATION_MS = 10,
  }

  export enum IdempotencyKeyCase {
    _IDEMPOTENCY_KEY_NOT_SET = 0,
    IDEMPOTENCY_KEY = 11,
  }
}

export class CreateLessonCommentResponse extends jspb.Message {
  getLessonComment(): LessonComment | undefined;
  setLessonComment(value?: LessonComment): CreateLessonCommentResponse;
  hasLessonComment(): boolean;
  clearLessonComment(): CreateLessonCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateLessonCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateLessonCommentResponse): CreateLessonCommentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateLessonCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateLessonCommentResponse;
  static deserializeBinaryFromReader(message: CreateLessonCommentResponse, reader: jspb.BinaryReader): CreateLessonCommentResponse;
}

export namespace CreateLessonCommentResponse {
  export type AsObject = {
    lessonComment?: LessonComment.AsObject;
  };
}

export class ListLessonCommentsRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): ListLessonCommentsRequest;

  getOffset(): number;
  setOffset(value: number): ListLessonCommentsRequest;
  hasOffset(): boolean;
  clearOffset(): ListLessonCommentsRequest;

  getLimit(): number;
  setLimit(value: number): ListLessonCommentsRequest;
  hasLimit(): boolean;
  clearLimit(): ListLessonCommentsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonCommentsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonCommentsRequest): ListLessonCommentsRequest.AsObject;
  static serializeBinaryToWriter(message: ListLessonCommentsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonCommentsRequest;
  static deserializeBinaryFromReader(message: ListLessonCommentsRequest, reader: jspb.BinaryReader): ListLessonCommentsRequest;
}

export namespace ListLessonCommentsRequest {
  export type AsObject = {
    lessonId: string;
    offset?: number;
    limit?: number;
  };

  export enum OffsetCase {
    _OFFSET_NOT_SET = 0,
    OFFSET = 2,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 3,
  }
}

export class ListLessonCommentsResponse extends jspb.Message {
  getLessonCommentsList(): Array<LessonComment>;
  setLessonCommentsList(value: Array<LessonComment>): ListLessonCommentsResponse;
  clearLessonCommentsList(): ListLessonCommentsResponse;
  addLessonComments(value?: LessonComment, index?: number): LessonComment;

  getTotalCount(): number;
  setTotalCount(value: number): ListLessonCommentsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListLessonCommentsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListLessonCommentsResponse): ListLessonCommentsResponse.AsObject;
  static serializeBinaryToWriter(message: ListLessonCommentsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListLessonCommentsResponse;
  static deserializeBinaryFromReader(message: ListLessonCommentsResponse, reader: jspb.BinaryReader): ListLessonCommentsResponse;
}

export namespace ListLessonCommentsResponse {
  export type AsObject = {
    lessonCommentsList: Array<LessonComment.AsObject>;
    totalCount: number;
  };
}

export class MarkLessonAsReadRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): MarkLessonAsReadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkLessonAsReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MarkLessonAsReadRequest): MarkLessonAsReadRequest.AsObject;
  static serializeBinaryToWriter(message: MarkLessonAsReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkLessonAsReadRequest;
  static deserializeBinaryFromReader(message: MarkLessonAsReadRequest, reader: jspb.BinaryReader): MarkLessonAsReadRequest;
}

export namespace MarkLessonAsReadRequest {
  export type AsObject = {
    lessonId: string;
  };
}

export class MarkLessonAsReadResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): MarkLessonAsReadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MarkLessonAsReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: MarkLessonAsReadResponse): MarkLessonAsReadResponse.AsObject;
  static serializeBinaryToWriter(message: MarkLessonAsReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MarkLessonAsReadResponse;
  static deserializeBinaryFromReader(message: MarkLessonAsReadResponse, reader: jspb.BinaryReader): MarkLessonAsReadResponse;
}

export namespace MarkLessonAsReadResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class DeleteLessonCommentRequest extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): DeleteLessonCommentRequest;

  getCommentId(): string;
  setCommentId(value: string): DeleteLessonCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLessonCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLessonCommentRequest): DeleteLessonCommentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteLessonCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLessonCommentRequest;
  static deserializeBinaryFromReader(message: DeleteLessonCommentRequest, reader: jspb.BinaryReader): DeleteLessonCommentRequest;
}

export namespace DeleteLessonCommentRequest {
  export type AsObject = {
    lessonId: string;
    commentId: string;
  };
}

export class DeleteLessonCommentResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): DeleteLessonCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteLessonCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteLessonCommentResponse): DeleteLessonCommentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteLessonCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteLessonCommentResponse;
  static deserializeBinaryFromReader(message: DeleteLessonCommentResponse, reader: jspb.BinaryReader): DeleteLessonCommentResponse;
}

export namespace DeleteLessonCommentResponse {
  export type AsObject = {
    success: boolean;
  };
}

export enum LessonStatus {
  REQUESTED = 0,
  APPROVED = 1,
  FINISHED = 2,
  AUDITING = 3,
  COMPLETED = 4,
  CANCELLED = 5,
  REJECTED = 6,
  REFUND = 7,
}
export enum LessonCommentSenderType {
  LESSON_COMMENT_SENDER_TYPE_UNSPECIFIED = 0,
  LESSON_COMMENT_SENDER_TYPE_STUDENT = 1,
  LESSON_COMMENT_SENDER_TYPE_INSTRUCTOR = 2,
}
