import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class CoachLevelCommission extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): CoachLevelCommission;

  getAnalysisCommissionRate(): number;
  setAnalysisCommissionRate(value: number): CoachLevelCommission;

  getCourseCommissionRate(): number;
  setCourseCommissionRate(value: number): CoachLevelCommission;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CoachLevelCommission;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): CoachLevelCommission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoachLevelCommission.AsObject;
  static toObject(includeInstance: boolean, msg: CoachLevelCommission): CoachLevelCommission.AsObject;
  static serializeBinaryToWriter(message: CoachLevelCommission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoachLevelCommission;
  static deserializeBinaryFromReader(message: CoachLevelCommission, reader: jspb.BinaryReader): CoachLevelCommission;
}

export namespace CoachLevelCommission {
  export type AsObject = {
    level: number;
    analysisCommissionRate: number;
    courseCommissionRate: number;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class GetCoachCommissionsRequest extends jspb.Message {
  getInstructorId(): number;
  setInstructorId(value: number): GetCoachCommissionsRequest;
  hasInstructorId(): boolean;
  clearInstructorId(): GetCoachCommissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCoachCommissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCoachCommissionsRequest): GetCoachCommissionsRequest.AsObject;
  static serializeBinaryToWriter(message: GetCoachCommissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCoachCommissionsRequest;
  static deserializeBinaryFromReader(message: GetCoachCommissionsRequest, reader: jspb.BinaryReader): GetCoachCommissionsRequest;
}

export namespace GetCoachCommissionsRequest {
  export type AsObject = {
    instructorId?: number;
  };

  export enum InstructorIdCase {
    _INSTRUCTOR_ID_NOT_SET = 0,
    INSTRUCTOR_ID = 1,
  }
}

export class GetCoachCommissionsResponse extends jspb.Message {
  getLevelCommissionsList(): Array<CoachLevelCommission>;
  setLevelCommissionsList(value: Array<CoachLevelCommission>): GetCoachCommissionsResponse;
  clearLevelCommissionsList(): GetCoachCommissionsResponse;
  addLevelCommissions(value?: CoachLevelCommission, index?: number): CoachLevelCommission;

  getInstructorLevel(): number;
  setInstructorLevel(value: number): GetCoachCommissionsResponse;

  getInstructorAnalysisCommissionRate(): number;
  setInstructorAnalysisCommissionRate(value: number): GetCoachCommissionsResponse;

  getInstructorCourseCommissionRate(): number;
  setInstructorCourseCommissionRate(value: number): GetCoachCommissionsResponse;

  getIsOverride(): boolean;
  setIsOverride(value: boolean): GetCoachCommissionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCoachCommissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCoachCommissionsResponse): GetCoachCommissionsResponse.AsObject;
  static serializeBinaryToWriter(message: GetCoachCommissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCoachCommissionsResponse;
  static deserializeBinaryFromReader(message: GetCoachCommissionsResponse, reader: jspb.BinaryReader): GetCoachCommissionsResponse;
}

export namespace GetCoachCommissionsResponse {
  export type AsObject = {
    levelCommissionsList: Array<CoachLevelCommission.AsObject>;
    instructorLevel: number;
    instructorAnalysisCommissionRate: number;
    instructorCourseCommissionRate: number;
    isOverride: boolean;
  };
}

export class UpdateCoachCommissionRequest extends jspb.Message {
  getLevel(): number;
  setLevel(value: number): UpdateCoachCommissionRequest;

  getAnalysisCommissionRate(): number;
  setAnalysisCommissionRate(value: number): UpdateCoachCommissionRequest;

  getCourseCommissionRate(): number;
  setCourseCommissionRate(value: number): UpdateCoachCommissionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCoachCommissionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCoachCommissionRequest): UpdateCoachCommissionRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCoachCommissionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCoachCommissionRequest;
  static deserializeBinaryFromReader(message: UpdateCoachCommissionRequest, reader: jspb.BinaryReader): UpdateCoachCommissionRequest;
}

export namespace UpdateCoachCommissionRequest {
  export type AsObject = {
    level: number;
    analysisCommissionRate: number;
    courseCommissionRate: number;
  };
}

export class UpdateCoachCommissionResponse extends jspb.Message {
  getCommission(): CoachLevelCommission | undefined;
  setCommission(value?: CoachLevelCommission): UpdateCoachCommissionResponse;
  hasCommission(): boolean;
  clearCommission(): UpdateCoachCommissionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCoachCommissionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCoachCommissionResponse): UpdateCoachCommissionResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCoachCommissionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCoachCommissionResponse;
  static deserializeBinaryFromReader(message: UpdateCoachCommissionResponse, reader: jspb.BinaryReader): UpdateCoachCommissionResponse;
}

export namespace UpdateCoachCommissionResponse {
  export type AsObject = {
    commission?: CoachLevelCommission.AsObject;
  };
}

export class Course extends jspb.Message {
  getId(): number;
  setId(value: number): Course;

  getInstructorId(): number;
  setInstructorId(value: number): Course;

  getTitle(): string;
  setTitle(value: string): Course;

  getDescription(): string;
  setDescription(value: string): Course;

  getPrice(): number;
  setPrice(value: number): Course;

  getCoverImageUrl(): string;
  setCoverImageUrl(value: string): Course;

  getAudioLanguage(): string;
  setAudioLanguage(value: string): Course;

  getSupportedSubtitlesList(): Array<string>;
  setSupportedSubtitlesList(value: Array<string>): Course;
  clearSupportedSubtitlesList(): Course;
  addSupportedSubtitles(value: string, index?: number): Course;

  getDiscountPrice(): number;
  setDiscountPrice(value: number): Course;

  getDiscountStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDiscountStartAt(value?: google_protobuf_timestamp_pb.Timestamp): Course;
  hasDiscountStartAt(): boolean;
  clearDiscountStartAt(): Course;

  getDiscountEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDiscountEndAt(value?: google_protobuf_timestamp_pb.Timestamp): Course;
  hasDiscountEndAt(): boolean;
  clearDiscountEndAt(): Course;

  getHasAnalysisQuota(): boolean;
  setHasAnalysisQuota(value: boolean): Course;

  getAnalysisQuotaLimit(): number;
  setAnalysisQuotaLimit(value: number): Course;

  getStatus(): string;
  setStatus(value: string): Course;

  getRejectionReason(): string;
  setRejectionReason(value: string): Course;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Course;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Course;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Course;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Course;

  getCategoryCode(): string;
  setCategoryCode(value: string): Course;

  getStyleCode(): string;
  setStyleCode(value: string): Course;

  getLevelCode(): string;
  setLevelCode(value: string): Course;

  getInstructorNickname(): string;
  setInstructorNickname(value: string): Course;

  getDuration(): number;
  setDuration(value: number): Course;

  getAverageRating(): number;
  setAverageRating(value: number): Course;

  getTotalReviews(): number;
  setTotalReviews(value: number): Course;

  getTotalSold(): number;
  setTotalSold(value: number): Course;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Course.AsObject;
  static toObject(includeInstance: boolean, msg: Course): Course.AsObject;
  static serializeBinaryToWriter(message: Course, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Course;
  static deserializeBinaryFromReader(message: Course, reader: jspb.BinaryReader): Course;
}

export namespace Course {
  export type AsObject = {
    id: number;
    instructorId: number;
    title: string;
    description: string;
    price: number;
    coverImageUrl: string;
    audioLanguage: string;
    supportedSubtitlesList: Array<string>;
    discountPrice: number;
    discountStartAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    discountEndAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    hasAnalysisQuota: boolean;
    analysisQuotaLimit: number;
    status: string;
    rejectionReason: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    categoryCode: string;
    styleCode: string;
    levelCode: string;
    instructorNickname: string;
    duration: number;
    averageRating: number;
    totalReviews: number;
    totalSold: number;
  };
}

export class CourseVideo extends jspb.Message {
  getId(): number;
  setId(value: number): CourseVideo;

  getCourseId(): number;
  setCourseId(value: number): CourseVideo;

  getTitle(): string;
  setTitle(value: string): CourseVideo;

  getVideoUrl(): string;
  setVideoUrl(value: string): CourseVideo;

  getDuration(): number;
  setDuration(value: number): CourseVideo;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): CourseVideo;

  getIsPreviewable(): boolean;
  setIsPreviewable(value: boolean): CourseVideo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CourseVideo;

  getDecryptKey(): string;
  setDecryptKey(value: string): CourseVideo;
  hasDecryptKey(): boolean;
  clearDecryptKey(): CourseVideo;

  getSubtitlesList(): Array<VideoSubtitle>;
  setSubtitlesList(value: Array<VideoSubtitle>): CourseVideo;
  clearSubtitlesList(): CourseVideo;
  addSubtitles(value?: VideoSubtitle, index?: number): VideoSubtitle;

  getIsReviewed(): boolean;
  setIsReviewed(value: boolean): CourseVideo;

  getIsArchived(): boolean;
  setIsArchived(value: boolean): CourseVideo;

  getRejectionReason(): string;
  setRejectionReason(value: string): CourseVideo;
  hasRejectionReason(): boolean;
  clearRejectionReason(): CourseVideo;

  getReviewedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReviewedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideo;
  hasReviewedAt(): boolean;
  clearReviewedAt(): CourseVideo;

  getProcessingStatus(): string;
  setProcessingStatus(value: string): CourseVideo;

  getMissingSubtitleLanguagesList(): Array<string>;
  setMissingSubtitleLanguagesList(value: Array<string>): CourseVideo;
  clearMissingSubtitleLanguagesList(): CourseVideo;
  addMissingSubtitleLanguages(value: string, index?: number): CourseVideo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CourseVideo.AsObject;
  static toObject(includeInstance: boolean, msg: CourseVideo): CourseVideo.AsObject;
  static serializeBinaryToWriter(message: CourseVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CourseVideo;
  static deserializeBinaryFromReader(message: CourseVideo, reader: jspb.BinaryReader): CourseVideo;
}

export namespace CourseVideo {
  export type AsObject = {
    id: number;
    courseId: number;
    title: string;
    videoUrl: string;
    duration: number;
    sequenceNumber: number;
    isPreviewable: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    decryptKey?: string;
    subtitlesList: Array<VideoSubtitle.AsObject>;
    isReviewed: boolean;
    isArchived: boolean;
    rejectionReason?: string;
    reviewedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    processingStatus: string;
    missingSubtitleLanguagesList: Array<string>;
  };

  export enum DecryptKeyCase {
    _DECRYPT_KEY_NOT_SET = 0,
    DECRYPT_KEY = 9,
  }

  export enum RejectionReasonCase {
    _REJECTION_REASON_NOT_SET = 0,
    REJECTION_REASON = 13,
  }

  export enum ReviewedAtCase {
    _REVIEWED_AT_NOT_SET = 0,
    REVIEWED_AT = 14,
  }
}

export class CreateCourseRequest extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): CreateCourseRequest;

  getDescription(): string;
  setDescription(value: string): CreateCourseRequest;

  getPrice(): number;
  setPrice(value: number): CreateCourseRequest;

  getAudioLanguage(): string;
  setAudioLanguage(value: string): CreateCourseRequest;

  getHasAnalysisQuota(): boolean;
  setHasAnalysisQuota(value: boolean): CreateCourseRequest;

  getAnalysisQuotaLimit(): number;
  setAnalysisQuotaLimit(value: number): CreateCourseRequest;

  getCategoryCode(): string;
  setCategoryCode(value: string): CreateCourseRequest;
  hasCategoryCode(): boolean;
  clearCategoryCode(): CreateCourseRequest;

  getStyleCode(): string;
  setStyleCode(value: string): CreateCourseRequest;
  hasStyleCode(): boolean;
  clearStyleCode(): CreateCourseRequest;

  getLevelCode(): string;
  setLevelCode(value: string): CreateCourseRequest;
  hasLevelCode(): boolean;
  clearLevelCode(): CreateCourseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCourseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCourseRequest): CreateCourseRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCourseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCourseRequest;
  static deserializeBinaryFromReader(message: CreateCourseRequest, reader: jspb.BinaryReader): CreateCourseRequest;
}

export namespace CreateCourseRequest {
  export type AsObject = {
    title: string;
    description: string;
    price: number;
    audioLanguage: string;
    hasAnalysisQuota: boolean;
    analysisQuotaLimit: number;
    categoryCode?: string;
    styleCode?: string;
    levelCode?: string;
  };

  export enum CategoryCodeCase {
    _CATEGORY_CODE_NOT_SET = 0,
    CATEGORY_CODE = 7,
  }

  export enum StyleCodeCase {
    _STYLE_CODE_NOT_SET = 0,
    STYLE_CODE = 8,
  }

  export enum LevelCodeCase {
    _LEVEL_CODE_NOT_SET = 0,
    LEVEL_CODE = 9,
  }
}

export class CreateCourseResponse extends jspb.Message {
  getCourse(): Course | undefined;
  setCourse(value?: Course): CreateCourseResponse;
  hasCourse(): boolean;
  clearCourse(): CreateCourseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCourseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCourseResponse): CreateCourseResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCourseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCourseResponse;
  static deserializeBinaryFromReader(message: CreateCourseResponse, reader: jspb.BinaryReader): CreateCourseResponse;
}

export namespace CreateCourseResponse {
  export type AsObject = {
    course?: Course.AsObject;
  };
}

export class UpdateCourseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateCourseRequest;

  getTitle(): string;
  setTitle(value: string): UpdateCourseRequest;
  hasTitle(): boolean;
  clearTitle(): UpdateCourseRequest;

  getDescription(): string;
  setDescription(value: string): UpdateCourseRequest;
  hasDescription(): boolean;
  clearDescription(): UpdateCourseRequest;

  getPrice(): number;
  setPrice(value: number): UpdateCourseRequest;
  hasPrice(): boolean;
  clearPrice(): UpdateCourseRequest;

  getCoverImageUrl(): string;
  setCoverImageUrl(value: string): UpdateCourseRequest;
  hasCoverImageUrl(): boolean;
  clearCoverImageUrl(): UpdateCourseRequest;

  getAudioLanguage(): string;
  setAudioLanguage(value: string): UpdateCourseRequest;
  hasAudioLanguage(): boolean;
  clearAudioLanguage(): UpdateCourseRequest;

  getSupportedSubtitlesList(): Array<string>;
  setSupportedSubtitlesList(value: Array<string>): UpdateCourseRequest;
  clearSupportedSubtitlesList(): UpdateCourseRequest;
  addSupportedSubtitles(value: string, index?: number): UpdateCourseRequest;

  getDiscountPrice(): number;
  setDiscountPrice(value: number): UpdateCourseRequest;
  hasDiscountPrice(): boolean;
  clearDiscountPrice(): UpdateCourseRequest;

  getDiscountStartAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDiscountStartAt(value?: google_protobuf_timestamp_pb.Timestamp): UpdateCourseRequest;
  hasDiscountStartAt(): boolean;
  clearDiscountStartAt(): UpdateCourseRequest;

  getDiscountEndAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDiscountEndAt(value?: google_protobuf_timestamp_pb.Timestamp): UpdateCourseRequest;
  hasDiscountEndAt(): boolean;
  clearDiscountEndAt(): UpdateCourseRequest;

  getHasAnalysisQuota(): boolean;
  setHasAnalysisQuota(value: boolean): UpdateCourseRequest;
  hasHasAnalysisQuota(): boolean;
  clearHasAnalysisQuota(): UpdateCourseRequest;

  getAnalysisQuotaLimit(): number;
  setAnalysisQuotaLimit(value: number): UpdateCourseRequest;
  hasAnalysisQuotaLimit(): boolean;
  clearAnalysisQuotaLimit(): UpdateCourseRequest;

  getStatus(): string;
  setStatus(value: string): UpdateCourseRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateCourseRequest;

  getRejectionReason(): string;
  setRejectionReason(value: string): UpdateCourseRequest;
  hasRejectionReason(): boolean;
  clearRejectionReason(): UpdateCourseRequest;

  getCategoryCode(): string;
  setCategoryCode(value: string): UpdateCourseRequest;
  hasCategoryCode(): boolean;
  clearCategoryCode(): UpdateCourseRequest;

  getStyleCode(): string;
  setStyleCode(value: string): UpdateCourseRequest;
  hasStyleCode(): boolean;
  clearStyleCode(): UpdateCourseRequest;

  getLevelCode(): string;
  setLevelCode(value: string): UpdateCourseRequest;
  hasLevelCode(): boolean;
  clearLevelCode(): UpdateCourseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseRequest): UpdateCourseRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseRequest;
  static deserializeBinaryFromReader(message: UpdateCourseRequest, reader: jspb.BinaryReader): UpdateCourseRequest;
}

export namespace UpdateCourseRequest {
  export type AsObject = {
    id: number;
    title?: string;
    description?: string;
    price?: number;
    coverImageUrl?: string;
    audioLanguage?: string;
    supportedSubtitlesList: Array<string>;
    discountPrice?: number;
    discountStartAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    discountEndAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    hasAnalysisQuota?: boolean;
    analysisQuotaLimit?: number;
    status?: string;
    rejectionReason?: string;
    categoryCode?: string;
    styleCode?: string;
    levelCode?: string;
  };

  export enum TitleCase {
    _TITLE_NOT_SET = 0,
    TITLE = 2,
  }

  export enum DescriptionCase {
    _DESCRIPTION_NOT_SET = 0,
    DESCRIPTION = 3,
  }

  export enum PriceCase {
    _PRICE_NOT_SET = 0,
    PRICE = 4,
  }

  export enum CoverImageUrlCase {
    _COVER_IMAGE_URL_NOT_SET = 0,
    COVER_IMAGE_URL = 5,
  }

  export enum AudioLanguageCase {
    _AUDIO_LANGUAGE_NOT_SET = 0,
    AUDIO_LANGUAGE = 6,
  }

  export enum DiscountPriceCase {
    _DISCOUNT_PRICE_NOT_SET = 0,
    DISCOUNT_PRICE = 8,
  }

  export enum HasAnalysisQuotaCase {
    _HAS_ANALYSIS_QUOTA_NOT_SET = 0,
    HAS_ANALYSIS_QUOTA = 11,
  }

  export enum AnalysisQuotaLimitCase {
    _ANALYSIS_QUOTA_LIMIT_NOT_SET = 0,
    ANALYSIS_QUOTA_LIMIT = 12,
  }

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 13,
  }

  export enum RejectionReasonCase {
    _REJECTION_REASON_NOT_SET = 0,
    REJECTION_REASON = 14,
  }

  export enum CategoryCodeCase {
    _CATEGORY_CODE_NOT_SET = 0,
    CATEGORY_CODE = 15,
  }

  export enum StyleCodeCase {
    _STYLE_CODE_NOT_SET = 0,
    STYLE_CODE = 16,
  }

  export enum LevelCodeCase {
    _LEVEL_CODE_NOT_SET = 0,
    LEVEL_CODE = 17,
  }
}

export class DeleteCourseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteCourseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCourseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCourseRequest): DeleteCourseRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCourseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCourseRequest;
  static deserializeBinaryFromReader(message: DeleteCourseRequest, reader: jspb.BinaryReader): DeleteCourseRequest;
}

export namespace DeleteCourseRequest {
  export type AsObject = {
    id: number;
  };
}

export class DeleteCourseVideoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteCourseVideoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCourseVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCourseVideoRequest): DeleteCourseVideoRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCourseVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCourseVideoRequest;
  static deserializeBinaryFromReader(message: DeleteCourseVideoRequest, reader: jspb.BinaryReader): DeleteCourseVideoRequest;
}

export namespace DeleteCourseVideoRequest {
  export type AsObject = {
    id: number;
  };
}

export class SearchCoursesRequest extends jspb.Message {
  getKeyword(): string;
  setKeyword(value: string): SearchCoursesRequest;
  hasKeyword(): boolean;
  clearKeyword(): SearchCoursesRequest;

  getCategoryCode(): string;
  setCategoryCode(value: string): SearchCoursesRequest;
  hasCategoryCode(): boolean;
  clearCategoryCode(): SearchCoursesRequest;

  getStyleCode(): string;
  setStyleCode(value: string): SearchCoursesRequest;
  hasStyleCode(): boolean;
  clearStyleCode(): SearchCoursesRequest;

  getLevelCode(): string;
  setLevelCode(value: string): SearchCoursesRequest;
  hasLevelCode(): boolean;
  clearLevelCode(): SearchCoursesRequest;

  getMinPrice(): number;
  setMinPrice(value: number): SearchCoursesRequest;
  hasMinPrice(): boolean;
  clearMinPrice(): SearchCoursesRequest;

  getMaxPrice(): number;
  setMaxPrice(value: number): SearchCoursesRequest;
  hasMaxPrice(): boolean;
  clearMaxPrice(): SearchCoursesRequest;

  getSortBy(): string;
  setSortBy(value: string): SearchCoursesRequest;
  hasSortBy(): boolean;
  clearSortBy(): SearchCoursesRequest;

  getPageId(): number;
  setPageId(value: number): SearchCoursesRequest;

  getPageSize(): number;
  setPageSize(value: number): SearchCoursesRequest;

  getAudioLanguage(): string;
  setAudioLanguage(value: string): SearchCoursesRequest;
  hasAudioLanguage(): boolean;
  clearAudioLanguage(): SearchCoursesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchCoursesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchCoursesRequest): SearchCoursesRequest.AsObject;
  static serializeBinaryToWriter(message: SearchCoursesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchCoursesRequest;
  static deserializeBinaryFromReader(message: SearchCoursesRequest, reader: jspb.BinaryReader): SearchCoursesRequest;
}

export namespace SearchCoursesRequest {
  export type AsObject = {
    keyword?: string;
    categoryCode?: string;
    styleCode?: string;
    levelCode?: string;
    minPrice?: number;
    maxPrice?: number;
    sortBy?: string;
    pageId: number;
    pageSize: number;
    audioLanguage?: string;
  };

  export enum KeywordCase {
    _KEYWORD_NOT_SET = 0,
    KEYWORD = 1,
  }

  export enum CategoryCodeCase {
    _CATEGORY_CODE_NOT_SET = 0,
    CATEGORY_CODE = 2,
  }

  export enum StyleCodeCase {
    _STYLE_CODE_NOT_SET = 0,
    STYLE_CODE = 3,
  }

  export enum LevelCodeCase {
    _LEVEL_CODE_NOT_SET = 0,
    LEVEL_CODE = 4,
  }

  export enum MinPriceCase {
    _MIN_PRICE_NOT_SET = 0,
    MIN_PRICE = 5,
  }

  export enum MaxPriceCase {
    _MAX_PRICE_NOT_SET = 0,
    MAX_PRICE = 6,
  }

  export enum SortByCase {
    _SORT_BY_NOT_SET = 0,
    SORT_BY = 7,
  }

  export enum AudioLanguageCase {
    _AUDIO_LANGUAGE_NOT_SET = 0,
    AUDIO_LANGUAGE = 10,
  }
}

export class UpdateCourseResponse extends jspb.Message {
  getCourse(): Course | undefined;
  setCourse(value?: Course): UpdateCourseResponse;
  hasCourse(): boolean;
  clearCourse(): UpdateCourseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseResponse): UpdateCourseResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseResponse;
  static deserializeBinaryFromReader(message: UpdateCourseResponse, reader: jspb.BinaryReader): UpdateCourseResponse;
}

export namespace UpdateCourseResponse {
  export type AsObject = {
    course?: Course.AsObject;
  };
}

export class CreateCourseVideoRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): CreateCourseVideoRequest;

  getTitle(): string;
  setTitle(value: string): CreateCourseVideoRequest;

  getVideoUrl(): string;
  setVideoUrl(value: string): CreateCourseVideoRequest;

  getDuration(): number;
  setDuration(value: number): CreateCourseVideoRequest;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): CreateCourseVideoRequest;

  getIsPreviewable(): boolean;
  setIsPreviewable(value: boolean): CreateCourseVideoRequest;

  getDecryptKey(): string;
  setDecryptKey(value: string): CreateCourseVideoRequest;
  hasDecryptKey(): boolean;
  clearDecryptKey(): CreateCourseVideoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCourseVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCourseVideoRequest): CreateCourseVideoRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCourseVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCourseVideoRequest;
  static deserializeBinaryFromReader(message: CreateCourseVideoRequest, reader: jspb.BinaryReader): CreateCourseVideoRequest;
}

export namespace CreateCourseVideoRequest {
  export type AsObject = {
    courseId: number;
    title: string;
    videoUrl: string;
    duration: number;
    sequenceNumber: number;
    isPreviewable: boolean;
    decryptKey?: string;
  };

  export enum DecryptKeyCase {
    _DECRYPT_KEY_NOT_SET = 0,
    DECRYPT_KEY = 7,
  }
}

export class CreateCourseVideoResponse extends jspb.Message {
  getVideo(): CourseVideo | undefined;
  setVideo(value?: CourseVideo): CreateCourseVideoResponse;
  hasVideo(): boolean;
  clearVideo(): CreateCourseVideoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCourseVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCourseVideoResponse): CreateCourseVideoResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCourseVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCourseVideoResponse;
  static deserializeBinaryFromReader(message: CreateCourseVideoResponse, reader: jspb.BinaryReader): CreateCourseVideoResponse;
}

export namespace CreateCourseVideoResponse {
  export type AsObject = {
    video?: CourseVideo.AsObject;
  };
}

export class UpdateCourseVideoRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateCourseVideoRequest;

  getTitle(): string;
  setTitle(value: string): UpdateCourseVideoRequest;
  hasTitle(): boolean;
  clearTitle(): UpdateCourseVideoRequest;

  getVideoUrl(): string;
  setVideoUrl(value: string): UpdateCourseVideoRequest;
  hasVideoUrl(): boolean;
  clearVideoUrl(): UpdateCourseVideoRequest;

  getDuration(): number;
  setDuration(value: number): UpdateCourseVideoRequest;
  hasDuration(): boolean;
  clearDuration(): UpdateCourseVideoRequest;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): UpdateCourseVideoRequest;
  hasSequenceNumber(): boolean;
  clearSequenceNumber(): UpdateCourseVideoRequest;

  getIsPreviewable(): boolean;
  setIsPreviewable(value: boolean): UpdateCourseVideoRequest;
  hasIsPreviewable(): boolean;
  clearIsPreviewable(): UpdateCourseVideoRequest;

  getDecryptKey(): string;
  setDecryptKey(value: string): UpdateCourseVideoRequest;
  hasDecryptKey(): boolean;
  clearDecryptKey(): UpdateCourseVideoRequest;

  getIsReviewed(): boolean;
  setIsReviewed(value: boolean): UpdateCourseVideoRequest;
  hasIsReviewed(): boolean;
  clearIsReviewed(): UpdateCourseVideoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseVideoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseVideoRequest): UpdateCourseVideoRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseVideoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseVideoRequest;
  static deserializeBinaryFromReader(message: UpdateCourseVideoRequest, reader: jspb.BinaryReader): UpdateCourseVideoRequest;
}

export namespace UpdateCourseVideoRequest {
  export type AsObject = {
    id: number;
    title?: string;
    videoUrl?: string;
    duration?: number;
    sequenceNumber?: number;
    isPreviewable?: boolean;
    decryptKey?: string;
    isReviewed?: boolean;
  };

  export enum TitleCase {
    _TITLE_NOT_SET = 0,
    TITLE = 2,
  }

  export enum VideoUrlCase {
    _VIDEO_URL_NOT_SET = 0,
    VIDEO_URL = 3,
  }

  export enum DurationCase {
    _DURATION_NOT_SET = 0,
    DURATION = 4,
  }

  export enum SequenceNumberCase {
    _SEQUENCE_NUMBER_NOT_SET = 0,
    SEQUENCE_NUMBER = 5,
  }

  export enum IsPreviewableCase {
    _IS_PREVIEWABLE_NOT_SET = 0,
    IS_PREVIEWABLE = 6,
  }

  export enum DecryptKeyCase {
    _DECRYPT_KEY_NOT_SET = 0,
    DECRYPT_KEY = 7,
  }

  export enum IsReviewedCase {
    _IS_REVIEWED_NOT_SET = 0,
    IS_REVIEWED = 8,
  }
}

export class UpdateCourseVideoResponse extends jspb.Message {
  getVideo(): CourseVideo | undefined;
  setVideo(value?: CourseVideo): UpdateCourseVideoResponse;
  hasVideo(): boolean;
  clearVideo(): UpdateCourseVideoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseVideoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseVideoResponse): UpdateCourseVideoResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseVideoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseVideoResponse;
  static deserializeBinaryFromReader(message: UpdateCourseVideoResponse, reader: jspb.BinaryReader): UpdateCourseVideoResponse;
}

export namespace UpdateCourseVideoResponse {
  export type AsObject = {
    video?: CourseVideo.AsObject;
  };
}

export class GetCourseRequest extends jspb.Message {
  getId(): number;
  setId(value: number): GetCourseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseRequest): GetCourseRequest.AsObject;
  static serializeBinaryToWriter(message: GetCourseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseRequest;
  static deserializeBinaryFromReader(message: GetCourseRequest, reader: jspb.BinaryReader): GetCourseRequest;
}

export namespace GetCourseRequest {
  export type AsObject = {
    id: number;
  };
}

export class GetCourseResponse extends jspb.Message {
  getCourse(): Course | undefined;
  setCourse(value?: Course): GetCourseResponse;
  hasCourse(): boolean;
  clearCourse(): GetCourseResponse;

  getIsPurchased(): boolean;
  setIsPurchased(value: boolean): GetCourseResponse;

  getHasDownloadedOffline(): boolean;
  setHasDownloadedOffline(value: boolean): GetCourseResponse;
  hasHasDownloadedOffline(): boolean;
  clearHasDownloadedOffline(): GetCourseResponse;

  getIsRepurchase(): boolean;
  setIsRepurchase(value: boolean): GetCourseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseResponse): GetCourseResponse.AsObject;
  static serializeBinaryToWriter(message: GetCourseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseResponse;
  static deserializeBinaryFromReader(message: GetCourseResponse, reader: jspb.BinaryReader): GetCourseResponse;
}

export namespace GetCourseResponse {
  export type AsObject = {
    course?: Course.AsObject;
    isPurchased: boolean;
    hasDownloadedOffline?: boolean;
    isRepurchase: boolean;
  };

  export enum HasDownloadedOfflineCase {
    _HAS_DOWNLOADED_OFFLINE_NOT_SET = 0,
    HAS_DOWNLOADED_OFFLINE = 3,
  }
}

export class ListCourseVideosRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): ListCourseVideosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseVideosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseVideosRequest): ListCourseVideosRequest.AsObject;
  static serializeBinaryToWriter(message: ListCourseVideosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseVideosRequest;
  static deserializeBinaryFromReader(message: ListCourseVideosRequest, reader: jspb.BinaryReader): ListCourseVideosRequest;
}

export namespace ListCourseVideosRequest {
  export type AsObject = {
    courseId: number;
  };
}

export class ListCourseVideosResponse extends jspb.Message {
  getVideosList(): Array<CourseVideo>;
  setVideosList(value: Array<CourseVideo>): ListCourseVideosResponse;
  clearVideosList(): ListCourseVideosResponse;
  addVideos(value?: CourseVideo, index?: number): CourseVideo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseVideosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseVideosResponse): ListCourseVideosResponse.AsObject;
  static serializeBinaryToWriter(message: ListCourseVideosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseVideosResponse;
  static deserializeBinaryFromReader(message: ListCourseVideosResponse, reader: jspb.BinaryReader): ListCourseVideosResponse;
}

export namespace ListCourseVideosResponse {
  export type AsObject = {
    videosList: Array<CourseVideo.AsObject>;
  };
}

export class UpdateCourseStatusRequest extends jspb.Message {
  getId(): number;
  setId(value: number): UpdateCourseStatusRequest;

  getStatus(): string;
  setStatus(value: string): UpdateCourseStatusRequest;
  hasStatus(): boolean;
  clearStatus(): UpdateCourseStatusRequest;

  getRejectionReason(): string;
  setRejectionReason(value: string): UpdateCourseStatusRequest;
  hasRejectionReason(): boolean;
  clearRejectionReason(): UpdateCourseStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseStatusRequest): UpdateCourseStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseStatusRequest;
  static deserializeBinaryFromReader(message: UpdateCourseStatusRequest, reader: jspb.BinaryReader): UpdateCourseStatusRequest;
}

export namespace UpdateCourseStatusRequest {
  export type AsObject = {
    id: number;
    status?: string;
    rejectionReason?: string;
  };

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 2,
  }

  export enum RejectionReasonCase {
    _REJECTION_REASON_NOT_SET = 0,
    REJECTION_REASON = 3,
  }
}

export class UpdateCourseStatusResponse extends jspb.Message {
  getCourse(): Course | undefined;
  setCourse(value?: Course): UpdateCourseStatusResponse;
  hasCourse(): boolean;
  clearCourse(): UpdateCourseStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseStatusResponse): UpdateCourseStatusResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseStatusResponse;
  static deserializeBinaryFromReader(message: UpdateCourseStatusResponse, reader: jspb.BinaryReader): UpdateCourseStatusResponse;
}

export namespace UpdateCourseStatusResponse {
  export type AsObject = {
    course?: Course.AsObject;
  };
}

export class CoursePurchase extends jspb.Message {
  getId(): number;
  setId(value: number): CoursePurchase;

  getUserId(): number;
  setUserId(value: number): CoursePurchase;

  getCourseId(): number;
  setCourseId(value: number): CoursePurchase;

  getPurchasePrice(): number;
  setPurchasePrice(value: number): CoursePurchase;

  getRemainingAnalysisQuota(): number;
  setRemainingAnalysisQuota(value: number): CoursePurchase;

  getStatus(): string;
  setStatus(value: string): CoursePurchase;

  getEscrowReleased(): boolean;
  setEscrowReleased(value: boolean): CoursePurchase;

  getPurchasedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPurchasedAt(value?: google_protobuf_timestamp_pb.Timestamp): CoursePurchase;
  hasPurchasedAt(): boolean;
  clearPurchasedAt(): CoursePurchase;

  getHasDownloadedOffline(): boolean;
  setHasDownloadedOffline(value: boolean): CoursePurchase;

  getUuidId(): string;
  setUuidId(value: string): CoursePurchase;

  getIsRefundable(): boolean;
  setIsRefundable(value: boolean): CoursePurchase;

  getSnapshotJson(): string;
  setSnapshotJson(value: string): CoursePurchase;

  getEscrowStatus(): string;
  setEscrowStatus(value: string): CoursePurchase;

  getFrozenReason(): string;
  setFrozenReason(value: string): CoursePurchase;
  hasFrozenReason(): boolean;
  clearFrozenReason(): CoursePurchase;

  getFrozenByAdminId(): number;
  setFrozenByAdminId(value: number): CoursePurchase;
  hasFrozenByAdminId(): boolean;
  clearFrozenByAdminId(): CoursePurchase;

  getFrozenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrozenAt(value?: google_protobuf_timestamp_pb.Timestamp): CoursePurchase;
  hasFrozenAt(): boolean;
  clearFrozenAt(): CoursePurchase;

  getUnfrozenByAdminId(): number;
  setUnfrozenByAdminId(value: number): CoursePurchase;
  hasUnfrozenByAdminId(): boolean;
  clearUnfrozenByAdminId(): CoursePurchase;

  getUnfrozenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUnfrozenAt(value?: google_protobuf_timestamp_pb.Timestamp): CoursePurchase;
  hasUnfrozenAt(): boolean;
  clearUnfrozenAt(): CoursePurchase;

  getReleaseDeadline(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReleaseDeadline(value?: google_protobuf_timestamp_pb.Timestamp): CoursePurchase;
  hasReleaseDeadline(): boolean;
  clearReleaseDeadline(): CoursePurchase;

  getReleaseEligible(): boolean;
  setReleaseEligible(value: boolean): CoursePurchase;
  hasReleaseEligible(): boolean;
  clearReleaseEligible(): CoursePurchase;

  getReleaseReason(): string;
  setReleaseReason(value: string): CoursePurchase;
  hasReleaseReason(): boolean;
  clearReleaseReason(): CoursePurchase;

  getRefundReason(): string;
  setRefundReason(value: string): CoursePurchase;
  hasRefundReason(): boolean;
  clearRefundReason(): CoursePurchase;

  getRefundedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefundedAt(value?: google_protobuf_timestamp_pb.Timestamp): CoursePurchase;
  hasRefundedAt(): boolean;
  clearRefundedAt(): CoursePurchase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CoursePurchase.AsObject;
  static toObject(includeInstance: boolean, msg: CoursePurchase): CoursePurchase.AsObject;
  static serializeBinaryToWriter(message: CoursePurchase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CoursePurchase;
  static deserializeBinaryFromReader(message: CoursePurchase, reader: jspb.BinaryReader): CoursePurchase;
}

export namespace CoursePurchase {
  export type AsObject = {
    id: number;
    userId: number;
    courseId: number;
    purchasePrice: number;
    remainingAnalysisQuota: number;
    status: string;
    escrowReleased: boolean;
    purchasedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    hasDownloadedOffline: boolean;
    uuidId: string;
    isRefundable: boolean;
    snapshotJson: string;
    escrowStatus: string;
    frozenReason?: string;
    frozenByAdminId?: number;
    frozenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    unfrozenByAdminId?: number;
    unfrozenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    releaseDeadline?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    releaseEligible?: boolean;
    releaseReason?: string;
    refundReason?: string;
    refundedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum FrozenReasonCase {
    _FROZEN_REASON_NOT_SET = 0,
    FROZEN_REASON = 14,
  }

  export enum FrozenByAdminIdCase {
    _FROZEN_BY_ADMIN_ID_NOT_SET = 0,
    FROZEN_BY_ADMIN_ID = 15,
  }

  export enum FrozenAtCase {
    _FROZEN_AT_NOT_SET = 0,
    FROZEN_AT = 16,
  }

  export enum UnfrozenByAdminIdCase {
    _UNFROZEN_BY_ADMIN_ID_NOT_SET = 0,
    UNFROZEN_BY_ADMIN_ID = 17,
  }

  export enum UnfrozenAtCase {
    _UNFROZEN_AT_NOT_SET = 0,
    UNFROZEN_AT = 18,
  }

  export enum ReleaseDeadlineCase {
    _RELEASE_DEADLINE_NOT_SET = 0,
    RELEASE_DEADLINE = 19,
  }

  export enum ReleaseEligibleCase {
    _RELEASE_ELIGIBLE_NOT_SET = 0,
    RELEASE_ELIGIBLE = 20,
  }

  export enum ReleaseReasonCase {
    _RELEASE_REASON_NOT_SET = 0,
    RELEASE_REASON = 21,
  }

  export enum RefundReasonCase {
    _REFUND_REASON_NOT_SET = 0,
    REFUND_REASON = 22,
  }

  export enum RefundedAtCase {
    _REFUNDED_AT_NOT_SET = 0,
    REFUNDED_AT = 23,
  }
}

export class PurchaseCourseRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): PurchaseCourseRequest;

  getAgreedPolicyId(): number;
  setAgreedPolicyId(value: number): PurchaseCourseRequest;
  hasAgreedPolicyId(): boolean;
  clearAgreedPolicyId(): PurchaseCourseRequest;

  getExpectedPriceInCents(): number;
  setExpectedPriceInCents(value: number): PurchaseCourseRequest;
  hasExpectedPriceInCents(): boolean;
  clearExpectedPriceInCents(): PurchaseCourseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseCourseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseCourseRequest): PurchaseCourseRequest.AsObject;
  static serializeBinaryToWriter(message: PurchaseCourseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseCourseRequest;
  static deserializeBinaryFromReader(message: PurchaseCourseRequest, reader: jspb.BinaryReader): PurchaseCourseRequest;
}

export namespace PurchaseCourseRequest {
  export type AsObject = {
    courseId: number;
    agreedPolicyId?: number;
    expectedPriceInCents?: number;
  };

  export enum AgreedPolicyIdCase {
    _AGREED_POLICY_ID_NOT_SET = 0,
    AGREED_POLICY_ID = 2,
  }

  export enum ExpectedPriceInCentsCase {
    _EXPECTED_PRICE_IN_CENTS_NOT_SET = 0,
    EXPECTED_PRICE_IN_CENTS = 3,
  }
}

export class PurchaseCourseResponse extends jspb.Message {
  getPurchase(): CoursePurchase | undefined;
  setPurchase(value?: CoursePurchase): PurchaseCourseResponse;
  hasPurchase(): boolean;
  clearPurchase(): PurchaseCourseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseCourseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseCourseResponse): PurchaseCourseResponse.AsObject;
  static serializeBinaryToWriter(message: PurchaseCourseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseCourseResponse;
  static deserializeBinaryFromReader(message: PurchaseCourseResponse, reader: jspb.BinaryReader): PurchaseCourseResponse;
}

export namespace PurchaseCourseResponse {
  export type AsObject = {
    purchase?: CoursePurchase.AsObject;
  };
}

export class GetHLSEncryptionKeyRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): GetHLSEncryptionKeyRequest;

  getRequestOffline(): boolean;
  setRequestOffline(value: boolean): GetHLSEncryptionKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHLSEncryptionKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetHLSEncryptionKeyRequest): GetHLSEncryptionKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetHLSEncryptionKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHLSEncryptionKeyRequest;
  static deserializeBinaryFromReader(message: GetHLSEncryptionKeyRequest, reader: jspb.BinaryReader): GetHLSEncryptionKeyRequest;
}

export namespace GetHLSEncryptionKeyRequest {
  export type AsObject = {
    videoId: number;
    requestOffline: boolean;
  };
}

export class GetHLSEncryptionKeyResponse extends jspb.Message {
  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): GetHLSEncryptionKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetHLSEncryptionKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetHLSEncryptionKeyResponse): GetHLSEncryptionKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetHLSEncryptionKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetHLSEncryptionKeyResponse;
  static deserializeBinaryFromReader(message: GetHLSEncryptionKeyResponse, reader: jspb.BinaryReader): GetHLSEncryptionKeyResponse;
}

export namespace GetHLSEncryptionKeyResponse {
  export type AsObject = {
    key: Uint8Array | string;
  };
}

export class VideoSubtitle extends jspb.Message {
  getId(): number;
  setId(value: number): VideoSubtitle;

  getVideoId(): number;
  setVideoId(value: number): VideoSubtitle;

  getLanguageCode(): string;
  setLanguageCode(value: string): VideoSubtitle;

  getSubtitleUrl(): string;
  setSubtitleUrl(value: string): VideoSubtitle;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): VideoSubtitle;
  hasCreatedAt(): boolean;
  clearCreatedAt(): VideoSubtitle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VideoSubtitle.AsObject;
  static toObject(includeInstance: boolean, msg: VideoSubtitle): VideoSubtitle.AsObject;
  static serializeBinaryToWriter(message: VideoSubtitle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VideoSubtitle;
  static deserializeBinaryFromReader(message: VideoSubtitle, reader: jspb.BinaryReader): VideoSubtitle;
}

export namespace VideoSubtitle {
  export type AsObject = {
    id: number;
    videoId: number;
    languageCode: string;
    subtitleUrl: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class UpdateVideoSubtitleTextRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): UpdateVideoSubtitleTextRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): UpdateVideoSubtitleTextRequest;

  getSubtitleContent(): string;
  setSubtitleContent(value: string): UpdateVideoSubtitleTextRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVideoSubtitleTextRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVideoSubtitleTextRequest): UpdateVideoSubtitleTextRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateVideoSubtitleTextRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVideoSubtitleTextRequest;
  static deserializeBinaryFromReader(message: UpdateVideoSubtitleTextRequest, reader: jspb.BinaryReader): UpdateVideoSubtitleTextRequest;
}

export namespace UpdateVideoSubtitleTextRequest {
  export type AsObject = {
    videoId: number;
    languageCode: string;
    subtitleContent: string;
  };
}

export class UpdateVideoSubtitleTextResponse extends jspb.Message {
  getSubtitle(): VideoSubtitle | undefined;
  setSubtitle(value?: VideoSubtitle): UpdateVideoSubtitleTextResponse;
  hasSubtitle(): boolean;
  clearSubtitle(): UpdateVideoSubtitleTextResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateVideoSubtitleTextResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateVideoSubtitleTextResponse): UpdateVideoSubtitleTextResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateVideoSubtitleTextResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateVideoSubtitleTextResponse;
  static deserializeBinaryFromReader(message: UpdateVideoSubtitleTextResponse, reader: jspb.BinaryReader): UpdateVideoSubtitleTextResponse;
}

export namespace UpdateVideoSubtitleTextResponse {
  export type AsObject = {
    subtitle?: VideoSubtitle.AsObject;
  };
}

export class GetCoursePlaybackInfoRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): GetCoursePlaybackInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCoursePlaybackInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCoursePlaybackInfoRequest): GetCoursePlaybackInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCoursePlaybackInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCoursePlaybackInfoRequest;
  static deserializeBinaryFromReader(message: GetCoursePlaybackInfoRequest, reader: jspb.BinaryReader): GetCoursePlaybackInfoRequest;
}

export namespace GetCoursePlaybackInfoRequest {
  export type AsObject = {
    videoId: number;
  };
}

export class GetCoursePlaybackInfoResponse extends jspb.Message {
  getVideoUrl(): string;
  setVideoUrl(value: string): GetCoursePlaybackInfoResponse;

  getSubtitlesList(): Array<VideoSubtitle>;
  setSubtitlesList(value: Array<VideoSubtitle>): GetCoursePlaybackInfoResponse;
  clearSubtitlesList(): GetCoursePlaybackInfoResponse;
  addSubtitles(value?: VideoSubtitle, index?: number): VideoSubtitle;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCoursePlaybackInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCoursePlaybackInfoResponse): GetCoursePlaybackInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCoursePlaybackInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCoursePlaybackInfoResponse;
  static deserializeBinaryFromReader(message: GetCoursePlaybackInfoResponse, reader: jspb.BinaryReader): GetCoursePlaybackInfoResponse;
}

export namespace GetCoursePlaybackInfoResponse {
  export type AsObject = {
    videoUrl: string;
    subtitlesList: Array<VideoSubtitle.AsObject>;
  };
}

export class SubmitCourseHomeworkRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): SubmitCourseHomeworkRequest;

  getTitle(): string;
  setTitle(value: string): SubmitCourseHomeworkRequest;

  getVideoUrl(): string;
  setVideoUrl(value: string): SubmitCourseHomeworkRequest;

  getLanguageId(): number;
  setLanguageId(value: number): SubmitCourseHomeworkRequest;

  getMessage(): string;
  setMessage(value: string): SubmitCourseHomeworkRequest;
  hasMessage(): boolean;
  clearMessage(): SubmitCourseHomeworkRequest;

  getRequirementsSnapshot(): string;
  setRequirementsSnapshot(value: string): SubmitCourseHomeworkRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitCourseHomeworkRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitCourseHomeworkRequest): SubmitCourseHomeworkRequest.AsObject;
  static serializeBinaryToWriter(message: SubmitCourseHomeworkRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitCourseHomeworkRequest;
  static deserializeBinaryFromReader(message: SubmitCourseHomeworkRequest, reader: jspb.BinaryReader): SubmitCourseHomeworkRequest;
}

export namespace SubmitCourseHomeworkRequest {
  export type AsObject = {
    courseId: number;
    title: string;
    videoUrl: string;
    languageId: number;
    message?: string;
    requirementsSnapshot: string;
  };

  export enum MessageCase {
    _MESSAGE_NOT_SET = 0,
    MESSAGE = 5,
  }
}

export class SubmitCourseHomeworkResponse extends jspb.Message {
  getLessonId(): string;
  setLessonId(value: string): SubmitCourseHomeworkResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubmitCourseHomeworkResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubmitCourseHomeworkResponse): SubmitCourseHomeworkResponse.AsObject;
  static serializeBinaryToWriter(message: SubmitCourseHomeworkResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubmitCourseHomeworkResponse;
  static deserializeBinaryFromReader(message: SubmitCourseHomeworkResponse, reader: jspb.BinaryReader): SubmitCourseHomeworkResponse;
}

export namespace SubmitCourseHomeworkResponse {
  export type AsObject = {
    lessonId: string;
  };
}

export class RequestCourseRefundRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): RequestCourseRefundRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCourseRefundRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCourseRefundRequest): RequestCourseRefundRequest.AsObject;
  static serializeBinaryToWriter(message: RequestCourseRefundRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCourseRefundRequest;
  static deserializeBinaryFromReader(message: RequestCourseRefundRequest, reader: jspb.BinaryReader): RequestCourseRefundRequest;
}

export namespace RequestCourseRefundRequest {
  export type AsObject = {
    courseId: number;
  };
}

export class RequestCourseRefundResponse extends jspb.Message {
  getStatus(): string;
  setStatus(value: string): RequestCourseRefundResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RequestCourseRefundResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RequestCourseRefundResponse): RequestCourseRefundResponse.AsObject;
  static serializeBinaryToWriter(message: RequestCourseRefundResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RequestCourseRefundResponse;
  static deserializeBinaryFromReader(message: RequestCourseRefundResponse, reader: jspb.BinaryReader): RequestCourseRefundResponse;
}

export namespace RequestCourseRefundResponse {
  export type AsObject = {
    status: string;
  };
}

export class GetMyCoursePurchaseStatusRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): GetMyCoursePurchaseStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyCoursePurchaseStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyCoursePurchaseStatusRequest): GetMyCoursePurchaseStatusRequest.AsObject;
  static serializeBinaryToWriter(message: GetMyCoursePurchaseStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyCoursePurchaseStatusRequest;
  static deserializeBinaryFromReader(message: GetMyCoursePurchaseStatusRequest, reader: jspb.BinaryReader): GetMyCoursePurchaseStatusRequest;
}

export namespace GetMyCoursePurchaseStatusRequest {
  export type AsObject = {
    courseId: number;
  };
}

export class GetMyCoursePurchaseStatusResponse extends jspb.Message {
  getIsPurchased(): boolean;
  setIsPurchased(value: boolean): GetMyCoursePurchaseStatusResponse;

  getRefundEligible(): boolean;
  setRefundEligible(value: boolean): GetMyCoursePurchaseStatusResponse;

  getRefundIneligibleReason(): string;
  setRefundIneligibleReason(value: string): GetMyCoursePurchaseStatusResponse;

  getRefundExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefundExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): GetMyCoursePurchaseStatusResponse;
  hasRefundExpiresAt(): boolean;
  clearRefundExpiresAt(): GetMyCoursePurchaseStatusResponse;

  getWatchedPaidSeconds(): number;
  setWatchedPaidSeconds(value: number): GetMyCoursePurchaseStatusResponse;

  getTotalPaidSeconds(): number;
  setTotalPaidSeconds(value: number): GetMyCoursePurchaseStatusResponse;

  getWatchedPercent(): number;
  setWatchedPercent(value: number): GetMyCoursePurchaseStatusResponse;

  getEscrowStatus(): string;
  setEscrowStatus(value: string): GetMyCoursePurchaseStatusResponse;

  getIsRepurchase(): boolean;
  setIsRepurchase(value: boolean): GetMyCoursePurchaseStatusResponse;

  getRemainingAnalysisQuota(): number;
  setRemainingAnalysisQuota(value: number): GetMyCoursePurchaseStatusResponse;

  getAnalysisQuotaLimit(): number;
  setAnalysisQuotaLimit(value: number): GetMyCoursePurchaseStatusResponse;

  getCourseCompleted(): boolean;
  setCourseCompleted(value: boolean): GetMyCoursePurchaseStatusResponse;

  getCompletedVideosCount(): number;
  setCompletedVideosCount(value: number): GetMyCoursePurchaseStatusResponse;

  getRequiredVideosCount(): number;
  setRequiredVideosCount(value: number): GetMyCoursePurchaseStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyCoursePurchaseStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyCoursePurchaseStatusResponse): GetMyCoursePurchaseStatusResponse.AsObject;
  static serializeBinaryToWriter(message: GetMyCoursePurchaseStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyCoursePurchaseStatusResponse;
  static deserializeBinaryFromReader(message: GetMyCoursePurchaseStatusResponse, reader: jspb.BinaryReader): GetMyCoursePurchaseStatusResponse;
}

export namespace GetMyCoursePurchaseStatusResponse {
  export type AsObject = {
    isPurchased: boolean;
    refundEligible: boolean;
    refundIneligibleReason: string;
    refundExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    watchedPaidSeconds: number;
    totalPaidSeconds: number;
    watchedPercent: number;
    escrowStatus: string;
    isRepurchase: boolean;
    remainingAnalysisQuota: number;
    analysisQuotaLimit: number;
    courseCompleted: boolean;
    completedVideosCount: number;
    requiredVideosCount: number;
  };

  export enum RefundExpiresAtCase {
    _REFUND_EXPIRES_AT_NOT_SET = 0,
    REFUND_EXPIRES_AT = 4,
  }
}

export class GetCourseCertificateRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): GetCourseCertificateRequest;

  getPurchaseId(): number;
  setPurchaseId(value: number): GetCourseCertificateRequest;
  hasPurchaseId(): boolean;
  clearPurchaseId(): GetCourseCertificateRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseCertificateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseCertificateRequest): GetCourseCertificateRequest.AsObject;
  static serializeBinaryToWriter(message: GetCourseCertificateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseCertificateRequest;
  static deserializeBinaryFromReader(message: GetCourseCertificateRequest, reader: jspb.BinaryReader): GetCourseCertificateRequest;
}

export namespace GetCourseCertificateRequest {
  export type AsObject = {
    courseId: number;
    purchaseId?: number;
  };

  export enum PurchaseIdCase {
    _PURCHASE_ID_NOT_SET = 0,
    PURCHASE_ID = 2,
  }
}

export class GetCourseCertificateResponse extends jspb.Message {
  getCertificateUrl(): string;
  setCertificateUrl(value: string): GetCourseCertificateResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseCertificateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseCertificateResponse): GetCourseCertificateResponse.AsObject;
  static serializeBinaryToWriter(message: GetCourseCertificateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseCertificateResponse;
  static deserializeBinaryFromReader(message: GetCourseCertificateResponse, reader: jspb.BinaryReader): GetCourseCertificateResponse;
}

export namespace GetCourseCertificateResponse {
  export type AsObject = {
    certificateUrl: string;
  };
}

export class ClaimSocialRewardRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): ClaimSocialRewardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimSocialRewardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimSocialRewardRequest): ClaimSocialRewardRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimSocialRewardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimSocialRewardRequest;
  static deserializeBinaryFromReader(message: ClaimSocialRewardRequest, reader: jspb.BinaryReader): ClaimSocialRewardRequest;
}

export namespace ClaimSocialRewardRequest {
  export type AsObject = {
    courseId: number;
  };
}

export class ClaimSocialRewardResponse extends jspb.Message {
  getBadgeName(): string;
  setBadgeName(value: string): ClaimSocialRewardResponse;

  getAvatarFrame(): string;
  setAvatarFrame(value: string): ClaimSocialRewardResponse;

  getChatSuffix(): string;
  setChatSuffix(value: string): ClaimSocialRewardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimSocialRewardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimSocialRewardResponse): ClaimSocialRewardResponse.AsObject;
  static serializeBinaryToWriter(message: ClaimSocialRewardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimSocialRewardResponse;
  static deserializeBinaryFromReader(message: ClaimSocialRewardResponse, reader: jspb.BinaryReader): ClaimSocialRewardResponse;
}

export namespace ClaimSocialRewardResponse {
  export type AsObject = {
    badgeName: string;
    avatarFrame: string;
    chatSuffix: string;
  };
}

export class ListCoursesRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListCoursesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCoursesRequest;

  getStatus(): string;
  setStatus(value: string): ListCoursesRequest;
  hasStatus(): boolean;
  clearStatus(): ListCoursesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoursesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoursesRequest): ListCoursesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCoursesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoursesRequest;
  static deserializeBinaryFromReader(message: ListCoursesRequest, reader: jspb.BinaryReader): ListCoursesRequest;
}

export namespace ListCoursesRequest {
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

export class ListCoursesResponse extends jspb.Message {
  getCoursesList(): Array<Course>;
  setCoursesList(value: Array<Course>): ListCoursesResponse;
  clearCoursesList(): ListCoursesResponse;
  addCourses(value?: Course, index?: number): Course;

  getTotalCount(): number;
  setTotalCount(value: number): ListCoursesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoursesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoursesResponse): ListCoursesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCoursesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoursesResponse;
  static deserializeBinaryFromReader(message: ListCoursesResponse, reader: jspb.BinaryReader): ListCoursesResponse;
}

export namespace ListCoursesResponse {
  export type AsObject = {
    coursesList: Array<Course.AsObject>;
    totalCount: number;
  };
}

export class ListCoursePurchasesRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListCoursePurchasesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCoursePurchasesRequest;

  getStatus(): string;
  setStatus(value: string): ListCoursePurchasesRequest;
  hasStatus(): boolean;
  clearStatus(): ListCoursePurchasesRequest;

  getEscrowReleased(): boolean;
  setEscrowReleased(value: boolean): ListCoursePurchasesRequest;
  hasEscrowReleased(): boolean;
  clearEscrowReleased(): ListCoursePurchasesRequest;

  getEscrowStatus(): string;
  setEscrowStatus(value: string): ListCoursePurchasesRequest;
  hasEscrowStatus(): boolean;
  clearEscrowStatus(): ListCoursePurchasesRequest;

  getUserId(): number;
  setUserId(value: number): ListCoursePurchasesRequest;
  hasUserId(): boolean;
  clearUserId(): ListCoursePurchasesRequest;

  getCourseId(): number;
  setCourseId(value: number): ListCoursePurchasesRequest;
  hasCourseId(): boolean;
  clearCourseId(): ListCoursePurchasesRequest;

  getQuery(): string;
  setQuery(value: string): ListCoursePurchasesRequest;
  hasQuery(): boolean;
  clearQuery(): ListCoursePurchasesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoursePurchasesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoursePurchasesRequest): ListCoursePurchasesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCoursePurchasesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoursePurchasesRequest;
  static deserializeBinaryFromReader(message: ListCoursePurchasesRequest, reader: jspb.BinaryReader): ListCoursePurchasesRequest;
}

export namespace ListCoursePurchasesRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    status?: string;
    escrowReleased?: boolean;
    escrowStatus?: string;
    userId?: number;
    courseId?: number;
    query?: string;
  };

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 3,
  }

  export enum EscrowReleasedCase {
    _ESCROW_RELEASED_NOT_SET = 0,
    ESCROW_RELEASED = 4,
  }

  export enum EscrowStatusCase {
    _ESCROW_STATUS_NOT_SET = 0,
    ESCROW_STATUS = 5,
  }

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 6,
  }

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 7,
  }

  export enum QueryCase {
    _QUERY_NOT_SET = 0,
    QUERY = 8,
  }
}

export class ListCoursePurchasesResponse extends jspb.Message {
  getPurchasesList(): Array<CoursePurchase>;
  setPurchasesList(value: Array<CoursePurchase>): ListCoursePurchasesResponse;
  clearPurchasesList(): ListCoursePurchasesResponse;
  addPurchases(value?: CoursePurchase, index?: number): CoursePurchase;

  getTotalCount(): number;
  setTotalCount(value: number): ListCoursePurchasesResponse;

  getTotalPurchasePriceInCents(): number;
  setTotalPurchasePriceInCents(value: number): ListCoursePurchasesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCoursePurchasesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCoursePurchasesResponse): ListCoursePurchasesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCoursePurchasesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCoursePurchasesResponse;
  static deserializeBinaryFromReader(message: ListCoursePurchasesResponse, reader: jspb.BinaryReader): ListCoursePurchasesResponse;
}

export namespace ListCoursePurchasesResponse {
  export type AsObject = {
    purchasesList: Array<CoursePurchase.AsObject>;
    totalCount: number;
    totalPurchasePriceInCents: number;
  };
}

export class CourseMetaItem extends jspb.Message {
  getId(): number;
  setId(value: number): CourseMetaItem;

  getCode(): string;
  setCode(value: string): CourseMetaItem;

  getNameEn(): string;
  setNameEn(value: string): CourseMetaItem;

  getNameZh(): string;
  setNameZh(value: string): CourseMetaItem;

  getSortOrder(): number;
  setSortOrder(value: number): CourseMetaItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CourseMetaItem.AsObject;
  static toObject(includeInstance: boolean, msg: CourseMetaItem): CourseMetaItem.AsObject;
  static serializeBinaryToWriter(message: CourseMetaItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CourseMetaItem;
  static deserializeBinaryFromReader(message: CourseMetaItem, reader: jspb.BinaryReader): CourseMetaItem;
}

export namespace CourseMetaItem {
  export type AsObject = {
    id: number;
    code: string;
    nameEn: string;
    nameZh: string;
    sortOrder: number;
  };
}

export class ListCourseMetaResponse extends jspb.Message {
  getCategoriesList(): Array<CourseMetaItem>;
  setCategoriesList(value: Array<CourseMetaItem>): ListCourseMetaResponse;
  clearCategoriesList(): ListCourseMetaResponse;
  addCategories(value?: CourseMetaItem, index?: number): CourseMetaItem;

  getStylesList(): Array<CourseMetaItem>;
  setStylesList(value: Array<CourseMetaItem>): ListCourseMetaResponse;
  clearStylesList(): ListCourseMetaResponse;
  addStyles(value?: CourseMetaItem, index?: number): CourseMetaItem;

  getLevelsList(): Array<CourseMetaItem>;
  setLevelsList(value: Array<CourseMetaItem>): ListCourseMetaResponse;
  clearLevelsList(): ListCourseMetaResponse;
  addLevels(value?: CourseMetaItem, index?: number): CourseMetaItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseMetaResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseMetaResponse): ListCourseMetaResponse.AsObject;
  static serializeBinaryToWriter(message: ListCourseMetaResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseMetaResponse;
  static deserializeBinaryFromReader(message: ListCourseMetaResponse, reader: jspb.BinaryReader): ListCourseMetaResponse;
}

export namespace ListCourseMetaResponse {
  export type AsObject = {
    categoriesList: Array<CourseMetaItem.AsObject>;
    stylesList: Array<CourseMetaItem.AsObject>;
    levelsList: Array<CourseMetaItem.AsObject>;
  };
}

export class CreateCourseMetaItemRequest extends jspb.Message {
  getType(): string;
  setType(value: string): CreateCourseMetaItemRequest;

  getCode(): string;
  setCode(value: string): CreateCourseMetaItemRequest;

  getNameEn(): string;
  setNameEn(value: string): CreateCourseMetaItemRequest;

  getNameZh(): string;
  setNameZh(value: string): CreateCourseMetaItemRequest;

  getSortOrder(): number;
  setSortOrder(value: number): CreateCourseMetaItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCourseMetaItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCourseMetaItemRequest): CreateCourseMetaItemRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCourseMetaItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCourseMetaItemRequest;
  static deserializeBinaryFromReader(message: CreateCourseMetaItemRequest, reader: jspb.BinaryReader): CreateCourseMetaItemRequest;
}

export namespace CreateCourseMetaItemRequest {
  export type AsObject = {
    type: string;
    code: string;
    nameEn: string;
    nameZh: string;
    sortOrder: number;
  };
}

export class UpdateCourseMetaItemRequest extends jspb.Message {
  getType(): string;
  setType(value: string): UpdateCourseMetaItemRequest;

  getCode(): string;
  setCode(value: string): UpdateCourseMetaItemRequest;

  getNameEn(): string;
  setNameEn(value: string): UpdateCourseMetaItemRequest;
  hasNameEn(): boolean;
  clearNameEn(): UpdateCourseMetaItemRequest;

  getNameZh(): string;
  setNameZh(value: string): UpdateCourseMetaItemRequest;
  hasNameZh(): boolean;
  clearNameZh(): UpdateCourseMetaItemRequest;

  getSortOrder(): number;
  setSortOrder(value: number): UpdateCourseMetaItemRequest;
  hasSortOrder(): boolean;
  clearSortOrder(): UpdateCourseMetaItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseMetaItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseMetaItemRequest): UpdateCourseMetaItemRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseMetaItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseMetaItemRequest;
  static deserializeBinaryFromReader(message: UpdateCourseMetaItemRequest, reader: jspb.BinaryReader): UpdateCourseMetaItemRequest;
}

export namespace UpdateCourseMetaItemRequest {
  export type AsObject = {
    type: string;
    code: string;
    nameEn?: string;
    nameZh?: string;
    sortOrder?: number;
  };

  export enum NameEnCase {
    _NAME_EN_NOT_SET = 0,
    NAME_EN = 3,
  }

  export enum NameZhCase {
    _NAME_ZH_NOT_SET = 0,
    NAME_ZH = 4,
  }

  export enum SortOrderCase {
    _SORT_ORDER_NOT_SET = 0,
    SORT_ORDER = 5,
  }
}

export class DeleteCourseMetaItemRequest extends jspb.Message {
  getType(): string;
  setType(value: string): DeleteCourseMetaItemRequest;

  getCode(): string;
  setCode(value: string): DeleteCourseMetaItemRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCourseMetaItemRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCourseMetaItemRequest): DeleteCourseMetaItemRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCourseMetaItemRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCourseMetaItemRequest;
  static deserializeBinaryFromReader(message: DeleteCourseMetaItemRequest, reader: jspb.BinaryReader): DeleteCourseMetaItemRequest;
}

export namespace DeleteCourseMetaItemRequest {
  export type AsObject = {
    type: string;
    code: string;
  };
}

export class CourseQAMessage extends jspb.Message {
  getId(): number;
  setId(value: number): CourseQAMessage;

  getVideoId(): number;
  setVideoId(value: number): CourseQAMessage;

  getUserId(): number;
  setUserId(value: number): CourseQAMessage;

  getParentId(): number;
  setParentId(value: number): CourseQAMessage;

  getContent(): string;
  setContent(value: string): CourseQAMessage;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseQAMessage;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CourseQAMessage;

  getUserNickname(): string;
  setUserNickname(value: string): CourseQAMessage;

  getUserAvatarUrl(): string;
  setUserAvatarUrl(value: string): CourseQAMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CourseQAMessage.AsObject;
  static toObject(includeInstance: boolean, msg: CourseQAMessage): CourseQAMessage.AsObject;
  static serializeBinaryToWriter(message: CourseQAMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CourseQAMessage;
  static deserializeBinaryFromReader(message: CourseQAMessage, reader: jspb.BinaryReader): CourseQAMessage;
}

export namespace CourseQAMessage {
  export type AsObject = {
    id: number;
    videoId: number;
    userId: number;
    parentId: number;
    content: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    userNickname: string;
    userAvatarUrl: string;
  };
}

export class CreateCourseQAMessageRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): CreateCourseQAMessageRequest;

  getParentId(): number;
  setParentId(value: number): CreateCourseQAMessageRequest;

  getContent(): string;
  setContent(value: string): CreateCourseQAMessageRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCourseQAMessageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCourseQAMessageRequest): CreateCourseQAMessageRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCourseQAMessageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCourseQAMessageRequest;
  static deserializeBinaryFromReader(message: CreateCourseQAMessageRequest, reader: jspb.BinaryReader): CreateCourseQAMessageRequest;
}

export namespace CreateCourseQAMessageRequest {
  export type AsObject = {
    videoId: number;
    parentId: number;
    content: string;
  };
}

export class CreateCourseQAMessageResponse extends jspb.Message {
  getMessage(): CourseQAMessage | undefined;
  setMessage(value?: CourseQAMessage): CreateCourseQAMessageResponse;
  hasMessage(): boolean;
  clearMessage(): CreateCourseQAMessageResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCourseQAMessageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCourseQAMessageResponse): CreateCourseQAMessageResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCourseQAMessageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCourseQAMessageResponse;
  static deserializeBinaryFromReader(message: CreateCourseQAMessageResponse, reader: jspb.BinaryReader): CreateCourseQAMessageResponse;
}

export namespace CreateCourseQAMessageResponse {
  export type AsObject = {
    message?: CourseQAMessage.AsObject;
  };
}

export class ListCourseQAMessagesRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): ListCourseQAMessagesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseQAMessagesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseQAMessagesRequest): ListCourseQAMessagesRequest.AsObject;
  static serializeBinaryToWriter(message: ListCourseQAMessagesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseQAMessagesRequest;
  static deserializeBinaryFromReader(message: ListCourseQAMessagesRequest, reader: jspb.BinaryReader): ListCourseQAMessagesRequest;
}

export namespace ListCourseQAMessagesRequest {
  export type AsObject = {
    videoId: number;
  };
}

export class ListCourseQAMessagesResponse extends jspb.Message {
  getMessagesList(): Array<CourseQAMessage>;
  setMessagesList(value: Array<CourseQAMessage>): ListCourseQAMessagesResponse;
  clearMessagesList(): ListCourseQAMessagesResponse;
  addMessages(value?: CourseQAMessage, index?: number): CourseQAMessage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseQAMessagesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseQAMessagesResponse): ListCourseQAMessagesResponse.AsObject;
  static serializeBinaryToWriter(message: ListCourseQAMessagesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseQAMessagesResponse;
  static deserializeBinaryFromReader(message: ListCourseQAMessagesResponse, reader: jspb.BinaryReader): ListCourseQAMessagesResponse;
}

export namespace ListCourseQAMessagesResponse {
  export type AsObject = {
    messagesList: Array<CourseQAMessage.AsObject>;
  };
}

export class ToggleCourseVideoLikeRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): ToggleCourseVideoLikeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleCourseVideoLikeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleCourseVideoLikeRequest): ToggleCourseVideoLikeRequest.AsObject;
  static serializeBinaryToWriter(message: ToggleCourseVideoLikeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleCourseVideoLikeRequest;
  static deserializeBinaryFromReader(message: ToggleCourseVideoLikeRequest, reader: jspb.BinaryReader): ToggleCourseVideoLikeRequest;
}

export namespace ToggleCourseVideoLikeRequest {
  export type AsObject = {
    videoId: number;
  };
}

export class ToggleCourseVideoLikeResponse extends jspb.Message {
  getLikeCount(): number;
  setLikeCount(value: number): ToggleCourseVideoLikeResponse;

  getIsLiked(): boolean;
  setIsLiked(value: boolean): ToggleCourseVideoLikeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ToggleCourseVideoLikeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ToggleCourseVideoLikeResponse): ToggleCourseVideoLikeResponse.AsObject;
  static serializeBinaryToWriter(message: ToggleCourseVideoLikeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ToggleCourseVideoLikeResponse;
  static deserializeBinaryFromReader(message: ToggleCourseVideoLikeResponse, reader: jspb.BinaryReader): ToggleCourseVideoLikeResponse;
}

export namespace ToggleCourseVideoLikeResponse {
  export type AsObject = {
    likeCount: number;
    isLiked: boolean;
  };
}

export class GetCourseVideoLikeInfoRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): GetCourseVideoLikeInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseVideoLikeInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseVideoLikeInfoRequest): GetCourseVideoLikeInfoRequest.AsObject;
  static serializeBinaryToWriter(message: GetCourseVideoLikeInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseVideoLikeInfoRequest;
  static deserializeBinaryFromReader(message: GetCourseVideoLikeInfoRequest, reader: jspb.BinaryReader): GetCourseVideoLikeInfoRequest;
}

export namespace GetCourseVideoLikeInfoRequest {
  export type AsObject = {
    videoId: number;
  };
}

export class GetCourseVideoLikeInfoResponse extends jspb.Message {
  getLikeCount(): number;
  setLikeCount(value: number): GetCourseVideoLikeInfoResponse;

  getIsLiked(): boolean;
  setIsLiked(value: boolean): GetCourseVideoLikeInfoResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseVideoLikeInfoResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseVideoLikeInfoResponse): GetCourseVideoLikeInfoResponse.AsObject;
  static serializeBinaryToWriter(message: GetCourseVideoLikeInfoResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseVideoLikeInfoResponse;
  static deserializeBinaryFromReader(message: GetCourseVideoLikeInfoResponse, reader: jspb.BinaryReader): GetCourseVideoLikeInfoResponse;
}

export namespace GetCourseVideoLikeInfoResponse {
  export type AsObject = {
    likeCount: number;
    isLiked: boolean;
  };
}

export class GetCourseVideoDecryptKeyRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): GetCourseVideoDecryptKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseVideoDecryptKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseVideoDecryptKeyRequest): GetCourseVideoDecryptKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetCourseVideoDecryptKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseVideoDecryptKeyRequest;
  static deserializeBinaryFromReader(message: GetCourseVideoDecryptKeyRequest, reader: jspb.BinaryReader): GetCourseVideoDecryptKeyRequest;
}

export namespace GetCourseVideoDecryptKeyRequest {
  export type AsObject = {
    videoId: number;
  };
}

export class GetCourseVideoDecryptKeyResponse extends jspb.Message {
  getDecryptKey(): string;
  setDecryptKey(value: string): GetCourseVideoDecryptKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseVideoDecryptKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseVideoDecryptKeyResponse): GetCourseVideoDecryptKeyResponse.AsObject;
  static serializeBinaryToWriter(message: GetCourseVideoDecryptKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseVideoDecryptKeyResponse;
  static deserializeBinaryFromReader(message: GetCourseVideoDecryptKeyResponse, reader: jspb.BinaryReader): GetCourseVideoDecryptKeyResponse;
}

export namespace GetCourseVideoDecryptKeyResponse {
  export type AsObject = {
    decryptKey: string;
  };
}

export class UpdateCourseLearningProgressRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): UpdateCourseLearningProgressRequest;

  getProgressSeconds(): number;
  setProgressSeconds(value: number): UpdateCourseLearningProgressRequest;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): UpdateCourseLearningProgressRequest;

  getDeltaSeconds(): number;
  setDeltaSeconds(value: number): UpdateCourseLearningProgressRequest;
  hasDeltaSeconds(): boolean;
  clearDeltaSeconds(): UpdateCourseLearningProgressRequest;

  getPlaybackSessionId(): string;
  setPlaybackSessionId(value: string): UpdateCourseLearningProgressRequest;
  hasPlaybackSessionId(): boolean;
  clearPlaybackSessionId(): UpdateCourseLearningProgressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseLearningProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseLearningProgressRequest): UpdateCourseLearningProgressRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseLearningProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseLearningProgressRequest;
  static deserializeBinaryFromReader(message: UpdateCourseLearningProgressRequest, reader: jspb.BinaryReader): UpdateCourseLearningProgressRequest;
}

export namespace UpdateCourseLearningProgressRequest {
  export type AsObject = {
    videoId: number;
    progressSeconds: number;
    isCompleted: boolean;
    deltaSeconds?: number;
    playbackSessionId?: string;
  };

  export enum DeltaSecondsCase {
    _DELTA_SECONDS_NOT_SET = 0,
    DELTA_SECONDS = 4,
  }

  export enum PlaybackSessionIdCase {
    _PLAYBACK_SESSION_ID_NOT_SET = 0,
    PLAYBACK_SESSION_ID = 5,
  }
}

export class UpdateCourseLearningProgressResponse extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): UpdateCourseLearningProgressResponse;

  getProgressSeconds(): number;
  setProgressSeconds(value: number): UpdateCourseLearningProgressResponse;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): UpdateCourseLearningProgressResponse;

  getLastWatchedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastWatchedAt(value?: google_protobuf_timestamp_pb.Timestamp): UpdateCourseLearningProgressResponse;
  hasLastWatchedAt(): boolean;
  clearLastWatchedAt(): UpdateCourseLearningProgressResponse;

  getWatchedSeconds(): number;
  setWatchedSeconds(value: number): UpdateCourseLearningProgressResponse;

  getLastHeartbeatAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastHeartbeatAt(value?: google_protobuf_timestamp_pb.Timestamp): UpdateCourseLearningProgressResponse;
  hasLastHeartbeatAt(): boolean;
  clearLastHeartbeatAt(): UpdateCourseLearningProgressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCourseLearningProgressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCourseLearningProgressResponse): UpdateCourseLearningProgressResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCourseLearningProgressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCourseLearningProgressResponse;
  static deserializeBinaryFromReader(message: UpdateCourseLearningProgressResponse, reader: jspb.BinaryReader): UpdateCourseLearningProgressResponse;
}

export namespace UpdateCourseLearningProgressResponse {
  export type AsObject = {
    videoId: number;
    progressSeconds: number;
    isCompleted: boolean;
    lastWatchedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    watchedSeconds: number;
    lastHeartbeatAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class GetCourseLearningProgressRequest extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): GetCourseLearningProgressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseLearningProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseLearningProgressRequest): GetCourseLearningProgressRequest.AsObject;
  static serializeBinaryToWriter(message: GetCourseLearningProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseLearningProgressRequest;
  static deserializeBinaryFromReader(message: GetCourseLearningProgressRequest, reader: jspb.BinaryReader): GetCourseLearningProgressRequest;
}

export namespace GetCourseLearningProgressRequest {
  export type AsObject = {
    videoId: number;
  };
}

export class GetCourseLearningProgressResponse extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): GetCourseLearningProgressResponse;

  getProgressSeconds(): number;
  setProgressSeconds(value: number): GetCourseLearningProgressResponse;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): GetCourseLearningProgressResponse;

  getLastWatchedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastWatchedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetCourseLearningProgressResponse;
  hasLastWatchedAt(): boolean;
  clearLastWatchedAt(): GetCourseLearningProgressResponse;

  getWatchedSeconds(): number;
  setWatchedSeconds(value: number): GetCourseLearningProgressResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCourseLearningProgressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetCourseLearningProgressResponse): GetCourseLearningProgressResponse.AsObject;
  static serializeBinaryToWriter(message: GetCourseLearningProgressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCourseLearningProgressResponse;
  static deserializeBinaryFromReader(message: GetCourseLearningProgressResponse, reader: jspb.BinaryReader): GetCourseLearningProgressResponse;
}

export namespace GetCourseLearningProgressResponse {
  export type AsObject = {
    videoId: number;
    progressSeconds: number;
    isCompleted: boolean;
    lastWatchedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    watchedSeconds: number;
  };
}

export class ListUnreviewedVideosRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListUnreviewedVideosRequest;

  getPageSize(): number;
  setPageSize(value: number): ListUnreviewedVideosRequest;

  getFilter(): string;
  setFilter(value: string): ListUnreviewedVideosRequest;
  hasFilter(): boolean;
  clearFilter(): ListUnreviewedVideosRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnreviewedVideosRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnreviewedVideosRequest): ListUnreviewedVideosRequest.AsObject;
  static serializeBinaryToWriter(message: ListUnreviewedVideosRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnreviewedVideosRequest;
  static deserializeBinaryFromReader(message: ListUnreviewedVideosRequest, reader: jspb.BinaryReader): ListUnreviewedVideosRequest;
}

export namespace ListUnreviewedVideosRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    filter?: string;
  };

  export enum FilterCase {
    _FILTER_NOT_SET = 0,
    FILTER = 3,
  }
}

export class UnreviewedVideo extends jspb.Message {
  getId(): number;
  setId(value: number): UnreviewedVideo;

  getCourseId(): number;
  setCourseId(value: number): UnreviewedVideo;

  getTitle(): string;
  setTitle(value: string): UnreviewedVideo;

  getVideoUrl(): string;
  setVideoUrl(value: string): UnreviewedVideo;

  getDuration(): number;
  setDuration(value: number): UnreviewedVideo;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): UnreviewedVideo;

  getIsPreviewable(): boolean;
  setIsPreviewable(value: boolean): UnreviewedVideo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UnreviewedVideo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): UnreviewedVideo;

  getDecryptKey(): string;
  setDecryptKey(value: string): UnreviewedVideo;
  hasDecryptKey(): boolean;
  clearDecryptKey(): UnreviewedVideo;

  getIsReviewed(): boolean;
  setIsReviewed(value: boolean): UnreviewedVideo;

  getCourseTitle(): string;
  setCourseTitle(value: string): UnreviewedVideo;

  getInstructorNickname(): string;
  setInstructorNickname(value: string): UnreviewedVideo;

  getRejectionReason(): string;
  setRejectionReason(value: string): UnreviewedVideo;
  hasRejectionReason(): boolean;
  clearRejectionReason(): UnreviewedVideo;

  getReviewedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReviewedAt(value?: google_protobuf_timestamp_pb.Timestamp): UnreviewedVideo;
  hasReviewedAt(): boolean;
  clearReviewedAt(): UnreviewedVideo;

  getProcessingStatus(): string;
  setProcessingStatus(value: string): UnreviewedVideo;

  getMissingSubtitleLanguagesList(): Array<string>;
  setMissingSubtitleLanguagesList(value: Array<string>): UnreviewedVideo;
  clearMissingSubtitleLanguagesList(): UnreviewedVideo;
  addMissingSubtitleLanguages(value: string, index?: number): UnreviewedVideo;

  getProcessingProgressPercent(): number;
  setProcessingProgressPercent(value: number): UnreviewedVideo;
  hasProcessingProgressPercent(): boolean;
  clearProcessingProgressPercent(): UnreviewedVideo;

  getProcessingProgressStage(): string;
  setProcessingProgressStage(value: string): UnreviewedVideo;
  hasProcessingProgressStage(): boolean;
  clearProcessingProgressStage(): UnreviewedVideo;

  getProcessingLastError(): string;
  setProcessingLastError(value: string): UnreviewedVideo;
  hasProcessingLastError(): boolean;
  clearProcessingLastError(): UnreviewedVideo;

  getProcessingAttemptCount(): number;
  setProcessingAttemptCount(value: number): UnreviewedVideo;
  hasProcessingAttemptCount(): boolean;
  clearProcessingAttemptCount(): UnreviewedVideo;

  getProcessingJobId(): number;
  setProcessingJobId(value: number): UnreviewedVideo;
  hasProcessingJobId(): boolean;
  clearProcessingJobId(): UnreviewedVideo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnreviewedVideo.AsObject;
  static toObject(includeInstance: boolean, msg: UnreviewedVideo): UnreviewedVideo.AsObject;
  static serializeBinaryToWriter(message: UnreviewedVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnreviewedVideo;
  static deserializeBinaryFromReader(message: UnreviewedVideo, reader: jspb.BinaryReader): UnreviewedVideo;
}

export namespace UnreviewedVideo {
  export type AsObject = {
    id: number;
    courseId: number;
    title: string;
    videoUrl: string;
    duration: number;
    sequenceNumber: number;
    isPreviewable: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    decryptKey?: string;
    isReviewed: boolean;
    courseTitle: string;
    instructorNickname: string;
    rejectionReason?: string;
    reviewedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    processingStatus: string;
    missingSubtitleLanguagesList: Array<string>;
    processingProgressPercent?: number;
    processingProgressStage?: string;
    processingLastError?: string;
    processingAttemptCount?: number;
    processingJobId?: number;
  };

  export enum DecryptKeyCase {
    _DECRYPT_KEY_NOT_SET = 0,
    DECRYPT_KEY = 9,
  }

  export enum RejectionReasonCase {
    _REJECTION_REASON_NOT_SET = 0,
    REJECTION_REASON = 13,
  }

  export enum ReviewedAtCase {
    _REVIEWED_AT_NOT_SET = 0,
    REVIEWED_AT = 14,
  }

  export enum ProcessingProgressPercentCase {
    _PROCESSING_PROGRESS_PERCENT_NOT_SET = 0,
    PROCESSING_PROGRESS_PERCENT = 17,
  }

  export enum ProcessingProgressStageCase {
    _PROCESSING_PROGRESS_STAGE_NOT_SET = 0,
    PROCESSING_PROGRESS_STAGE = 18,
  }

  export enum ProcessingLastErrorCase {
    _PROCESSING_LAST_ERROR_NOT_SET = 0,
    PROCESSING_LAST_ERROR = 19,
  }

  export enum ProcessingAttemptCountCase {
    _PROCESSING_ATTEMPT_COUNT_NOT_SET = 0,
    PROCESSING_ATTEMPT_COUNT = 20,
  }

  export enum ProcessingJobIdCase {
    _PROCESSING_JOB_ID_NOT_SET = 0,
    PROCESSING_JOB_ID = 21,
  }
}

export class ListUnreviewedVideosResponse extends jspb.Message {
  getVideosList(): Array<UnreviewedVideo>;
  setVideosList(value: Array<UnreviewedVideo>): ListUnreviewedVideosResponse;
  clearVideosList(): ListUnreviewedVideosResponse;
  addVideos(value?: UnreviewedVideo, index?: number): UnreviewedVideo;

  getTotalCount(): number;
  setTotalCount(value: number): ListUnreviewedVideosResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUnreviewedVideosResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListUnreviewedVideosResponse): ListUnreviewedVideosResponse.AsObject;
  static serializeBinaryToWriter(message: ListUnreviewedVideosResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUnreviewedVideosResponse;
  static deserializeBinaryFromReader(message: ListUnreviewedVideosResponse, reader: jspb.BinaryReader): ListUnreviewedVideosResponse;
}

export namespace ListUnreviewedVideosResponse {
  export type AsObject = {
    videosList: Array<UnreviewedVideo.AsObject>;
    totalCount: number;
  };
}

export class CourseVideoProcessingJob extends jspb.Message {
  getId(): number;
  setId(value: number): CourseVideoProcessingJob;

  getVideoId(): number;
  setVideoId(value: number): CourseVideoProcessingJob;

  getCourseId(): number;
  setCourseId(value: number): CourseVideoProcessingJob;

  getJobType(): string;
  setJobType(value: string): CourseVideoProcessingJob;

  getStatus(): string;
  setStatus(value: string): CourseVideoProcessingJob;

  getSourceVersion(): string;
  setSourceVersion(value: string): CourseVideoProcessingJob;

  getLockedBy(): string;
  setLockedBy(value: string): CourseVideoProcessingJob;
  hasLockedBy(): boolean;
  clearLockedBy(): CourseVideoProcessingJob;

  getLockedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLockedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideoProcessingJob;
  hasLockedAt(): boolean;
  clearLockedAt(): CourseVideoProcessingJob;

  getHeartbeatAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setHeartbeatAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideoProcessingJob;
  hasHeartbeatAt(): boolean;
  clearHeartbeatAt(): CourseVideoProcessingJob;

  getLeaseTimeoutSeconds(): number;
  setLeaseTimeoutSeconds(value: number): CourseVideoProcessingJob;

  getAttemptCount(): number;
  setAttemptCount(value: number): CourseVideoProcessingJob;

  getMaxAttempts(): number;
  setMaxAttempts(value: number): CourseVideoProcessingJob;

  getProgressPercent(): number;
  setProgressPercent(value: number): CourseVideoProcessingJob;

  getProgressStage(): string;
  setProgressStage(value: string): CourseVideoProcessingJob;
  hasProgressStage(): boolean;
  clearProgressStage(): CourseVideoProcessingJob;

  getLastError(): string;
  setLastError(value: string): CourseVideoProcessingJob;
  hasLastError(): boolean;
  clearLastError(): CourseVideoProcessingJob;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideoProcessingJob;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CourseVideoProcessingJob;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideoProcessingJob;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): CourseVideoProcessingJob;

  getCompletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCompletedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideoProcessingJob;
  hasCompletedAt(): boolean;
  clearCompletedAt(): CourseVideoProcessingJob;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CourseVideoProcessingJob.AsObject;
  static toObject(includeInstance: boolean, msg: CourseVideoProcessingJob): CourseVideoProcessingJob.AsObject;
  static serializeBinaryToWriter(message: CourseVideoProcessingJob, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CourseVideoProcessingJob;
  static deserializeBinaryFromReader(message: CourseVideoProcessingJob, reader: jspb.BinaryReader): CourseVideoProcessingJob;
}

export namespace CourseVideoProcessingJob {
  export type AsObject = {
    id: number;
    videoId: number;
    courseId: number;
    jobType: string;
    status: string;
    sourceVersion: string;
    lockedBy?: string;
    lockedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    heartbeatAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    leaseTimeoutSeconds: number;
    attemptCount: number;
    maxAttempts: number;
    progressPercent: number;
    progressStage?: string;
    lastError?: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    completedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum LockedByCase {
    _LOCKED_BY_NOT_SET = 0,
    LOCKED_BY = 7,
  }

  export enum LockedAtCase {
    _LOCKED_AT_NOT_SET = 0,
    LOCKED_AT = 8,
  }

  export enum HeartbeatAtCase {
    _HEARTBEAT_AT_NOT_SET = 0,
    HEARTBEAT_AT = 9,
  }

  export enum ProgressStageCase {
    _PROGRESS_STAGE_NOT_SET = 0,
    PROGRESS_STAGE = 14,
  }

  export enum LastErrorCase {
    _LAST_ERROR_NOT_SET = 0,
    LAST_ERROR = 15,
  }

  export enum CompletedAtCase {
    _COMPLETED_AT_NOT_SET = 0,
    COMPLETED_AT = 18,
  }
}

export class ListCourseVideoProcessingJobsRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListCourseVideoProcessingJobsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListCourseVideoProcessingJobsRequest;

  getCourseId(): number;
  setCourseId(value: number): ListCourseVideoProcessingJobsRequest;
  hasCourseId(): boolean;
  clearCourseId(): ListCourseVideoProcessingJobsRequest;

  getStatus(): string;
  setStatus(value: string): ListCourseVideoProcessingJobsRequest;
  hasStatus(): boolean;
  clearStatus(): ListCourseVideoProcessingJobsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseVideoProcessingJobsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseVideoProcessingJobsRequest): ListCourseVideoProcessingJobsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCourseVideoProcessingJobsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseVideoProcessingJobsRequest;
  static deserializeBinaryFromReader(message: ListCourseVideoProcessingJobsRequest, reader: jspb.BinaryReader): ListCourseVideoProcessingJobsRequest;
}

export namespace ListCourseVideoProcessingJobsRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    courseId?: number;
    status?: string;
  };

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 3,
  }

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 4,
  }
}

export class ListCourseVideoProcessingJobsResponse extends jspb.Message {
  getJobsList(): Array<CourseVideoProcessingJob>;
  setJobsList(value: Array<CourseVideoProcessingJob>): ListCourseVideoProcessingJobsResponse;
  clearJobsList(): ListCourseVideoProcessingJobsResponse;
  addJobs(value?: CourseVideoProcessingJob, index?: number): CourseVideoProcessingJob;

  getTotalCount(): number;
  setTotalCount(value: number): ListCourseVideoProcessingJobsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseVideoProcessingJobsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseVideoProcessingJobsResponse): ListCourseVideoProcessingJobsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCourseVideoProcessingJobsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseVideoProcessingJobsResponse;
  static deserializeBinaryFromReader(message: ListCourseVideoProcessingJobsResponse, reader: jspb.BinaryReader): ListCourseVideoProcessingJobsResponse;
}

export namespace ListCourseVideoProcessingJobsResponse {
  export type AsObject = {
    jobsList: Array<CourseVideoProcessingJob.AsObject>;
    totalCount: number;
  };
}

export class RetryCourseVideoProcessingJobRequest extends jspb.Message {
  getJobId(): number;
  setJobId(value: number): RetryCourseVideoProcessingJobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryCourseVideoProcessingJobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RetryCourseVideoProcessingJobRequest): RetryCourseVideoProcessingJobRequest.AsObject;
  static serializeBinaryToWriter(message: RetryCourseVideoProcessingJobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryCourseVideoProcessingJobRequest;
  static deserializeBinaryFromReader(message: RetryCourseVideoProcessingJobRequest, reader: jspb.BinaryReader): RetryCourseVideoProcessingJobRequest;
}

export namespace RetryCourseVideoProcessingJobRequest {
  export type AsObject = {
    jobId: number;
  };
}

export class RetryCourseVideoProcessingJobResponse extends jspb.Message {
  getJob(): CourseVideoProcessingJob | undefined;
  setJob(value?: CourseVideoProcessingJob): RetryCourseVideoProcessingJobResponse;
  hasJob(): boolean;
  clearJob(): RetryCourseVideoProcessingJobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RetryCourseVideoProcessingJobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: RetryCourseVideoProcessingJobResponse): RetryCourseVideoProcessingJobResponse.AsObject;
  static serializeBinaryToWriter(message: RetryCourseVideoProcessingJobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RetryCourseVideoProcessingJobResponse;
  static deserializeBinaryFromReader(message: RetryCourseVideoProcessingJobResponse, reader: jspb.BinaryReader): RetryCourseVideoProcessingJobResponse;
}

export namespace RetryCourseVideoProcessingJobResponse {
  export type AsObject = {
    job?: CourseVideoProcessingJob.AsObject;
  };
}

export class ConfirmCourseDownloadedRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): ConfirmCourseDownloadedRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmCourseDownloadedRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmCourseDownloadedRequest): ConfirmCourseDownloadedRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmCourseDownloadedRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmCourseDownloadedRequest;
  static deserializeBinaryFromReader(message: ConfirmCourseDownloadedRequest, reader: jspb.BinaryReader): ConfirmCourseDownloadedRequest;
}

export namespace ConfirmCourseDownloadedRequest {
  export type AsObject = {
    courseId: number;
  };
}

export class GetInstructorSalesSummaryRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorSalesSummaryRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorSalesSummaryRequest): GetInstructorSalesSummaryRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstructorSalesSummaryRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorSalesSummaryRequest;
  static deserializeBinaryFromReader(message: GetInstructorSalesSummaryRequest, reader: jspb.BinaryReader): GetInstructorSalesSummaryRequest;
}

export namespace GetInstructorSalesSummaryRequest {
  export type AsObject = {
  };
}

export class GetInstructorSalesSummaryResponse extends jspb.Message {
  getPendingAmountCents(): number;
  setPendingAmountCents(value: number): GetInstructorSalesSummaryResponse;

  getReleasedAmountCents(): number;
  setReleasedAmountCents(value: number): GetInstructorSalesSummaryResponse;

  getRefundedAmountCents(): number;
  setRefundedAmountCents(value: number): GetInstructorSalesSummaryResponse;

  getTotalCompletedSales(): number;
  setTotalCompletedSales(value: number): GetInstructorSalesSummaryResponse;

  getTotalRefundedSales(): number;
  setTotalRefundedSales(value: number): GetInstructorSalesSummaryResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorSalesSummaryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorSalesSummaryResponse): GetInstructorSalesSummaryResponse.AsObject;
  static serializeBinaryToWriter(message: GetInstructorSalesSummaryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorSalesSummaryResponse;
  static deserializeBinaryFromReader(message: GetInstructorSalesSummaryResponse, reader: jspb.BinaryReader): GetInstructorSalesSummaryResponse;
}

export namespace GetInstructorSalesSummaryResponse {
  export type AsObject = {
    pendingAmountCents: number;
    releasedAmountCents: number;
    refundedAmountCents: number;
    totalCompletedSales: number;
    totalRefundedSales: number;
  };
}

export class InstructorSalesTransaction extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): InstructorSalesTransaction;

  getBuyerUserId(): number;
  setBuyerUserId(value: number): InstructorSalesTransaction;

  getBuyerNickname(): string;
  setBuyerNickname(value: string): InstructorSalesTransaction;

  getCourseId(): number;
  setCourseId(value: number): InstructorSalesTransaction;

  getCourseTitle(): string;
  setCourseTitle(value: string): InstructorSalesTransaction;

  getPurchasePrice(): number;
  setPurchasePrice(value: number): InstructorSalesTransaction;

  getPurchaseStatus(): string;
  setPurchaseStatus(value: string): InstructorSalesTransaction;

  getEscrowReleased(): boolean;
  setEscrowReleased(value: boolean): InstructorSalesTransaction;

  getPurchasedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPurchasedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstructorSalesTransaction;
  hasPurchasedAt(): boolean;
  clearPurchasedAt(): InstructorSalesTransaction;

  getSnapshotJson(): string;
  setSnapshotJson(value: string): InstructorSalesTransaction;

  getCommissionRateBasisPoints(): number;
  setCommissionRateBasisPoints(value: number): InstructorSalesTransaction;

  getPlatformFeeInCents(): number;
  setPlatformFeeInCents(value: number): InstructorSalesTransaction;

  getNetAmountInCents(): number;
  setNetAmountInCents(value: number): InstructorSalesTransaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorSalesTransaction.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorSalesTransaction): InstructorSalesTransaction.AsObject;
  static serializeBinaryToWriter(message: InstructorSalesTransaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorSalesTransaction;
  static deserializeBinaryFromReader(message: InstructorSalesTransaction, reader: jspb.BinaryReader): InstructorSalesTransaction;
}

export namespace InstructorSalesTransaction {
  export type AsObject = {
    purchaseId: number;
    buyerUserId: number;
    buyerNickname: string;
    courseId: number;
    courseTitle: string;
    purchasePrice: number;
    purchaseStatus: string;
    escrowReleased: boolean;
    purchasedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    snapshotJson: string;
    commissionRateBasisPoints: number;
    platformFeeInCents: number;
    netAmountInCents: number;
  };
}

export class ListInstructorSalesTransactionsRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListInstructorSalesTransactionsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListInstructorSalesTransactionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorSalesTransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorSalesTransactionsRequest): ListInstructorSalesTransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstructorSalesTransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorSalesTransactionsRequest;
  static deserializeBinaryFromReader(message: ListInstructorSalesTransactionsRequest, reader: jspb.BinaryReader): ListInstructorSalesTransactionsRequest;
}

export namespace ListInstructorSalesTransactionsRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
  };
}

export class ListInstructorSalesTransactionsResponse extends jspb.Message {
  getTransactionsList(): Array<InstructorSalesTransaction>;
  setTransactionsList(value: Array<InstructorSalesTransaction>): ListInstructorSalesTransactionsResponse;
  clearTransactionsList(): ListInstructorSalesTransactionsResponse;
  addTransactions(value?: InstructorSalesTransaction, index?: number): InstructorSalesTransaction;

  getTotalCount(): number;
  setTotalCount(value: number): ListInstructorSalesTransactionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorSalesTransactionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorSalesTransactionsResponse): ListInstructorSalesTransactionsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstructorSalesTransactionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorSalesTransactionsResponse;
  static deserializeBinaryFromReader(message: ListInstructorSalesTransactionsResponse, reader: jspb.BinaryReader): ListInstructorSalesTransactionsResponse;
}

export namespace ListInstructorSalesTransactionsResponse {
  export type AsObject = {
    transactionsList: Array<InstructorSalesTransaction.AsObject>;
    totalCount: number;
  };
}

export class AuditCourseVideoReviewRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): AuditCourseVideoReviewRequest;
  hasCourseId(): boolean;
  clearCourseId(): AuditCourseVideoReviewRequest;

  getVideoId(): number;
  setVideoId(value: number): AuditCourseVideoReviewRequest;
  hasVideoId(): boolean;
  clearVideoId(): AuditCourseVideoReviewRequest;

  getAction(): string;
  setAction(value: string): AuditCourseVideoReviewRequest;

  getReason(): string;
  setReason(value: string): AuditCourseVideoReviewRequest;
  hasReason(): boolean;
  clearReason(): AuditCourseVideoReviewRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditCourseVideoReviewRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuditCourseVideoReviewRequest): AuditCourseVideoReviewRequest.AsObject;
  static serializeBinaryToWriter(message: AuditCourseVideoReviewRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditCourseVideoReviewRequest;
  static deserializeBinaryFromReader(message: AuditCourseVideoReviewRequest, reader: jspb.BinaryReader): AuditCourseVideoReviewRequest;
}

export namespace AuditCourseVideoReviewRequest {
  export type AsObject = {
    courseId?: number;
    videoId?: number;
    action: string;
    reason?: string;
  };

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 1,
  }

  export enum VideoIdCase {
    _VIDEO_ID_NOT_SET = 0,
    VIDEO_ID = 2,
  }

  export enum ReasonCase {
    _REASON_NOT_SET = 0,
    REASON = 4,
  }
}

export class AuditCourseVideoReviewResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AuditCourseVideoReviewResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditCourseVideoReviewResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AuditCourseVideoReviewResponse): AuditCourseVideoReviewResponse.AsObject;
  static serializeBinaryToWriter(message: AuditCourseVideoReviewResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditCourseVideoReviewResponse;
  static deserializeBinaryFromReader(message: AuditCourseVideoReviewResponse, reader: jspb.BinaryReader): AuditCourseVideoReviewResponse;
}

export namespace AuditCourseVideoReviewResponse {
  export type AsObject = {
    success: boolean;
  };
}

export class CourseReviewLog extends jspb.Message {
  getId(): number;
  setId(value: number): CourseReviewLog;

  getCourseId(): number;
  setCourseId(value: number): CourseReviewLog;
  hasCourseId(): boolean;
  clearCourseId(): CourseReviewLog;

  getVideoId(): number;
  setVideoId(value: number): CourseReviewLog;
  hasVideoId(): boolean;
  clearVideoId(): CourseReviewLog;

  getReviewerId(): number;
  setReviewerId(value: number): CourseReviewLog;

  getReviewerNickname(): string;
  setReviewerNickname(value: string): CourseReviewLog;

  getReviewerAvatarUrl(): string;
  setReviewerAvatarUrl(value: string): CourseReviewLog;

  getAction(): string;
  setAction(value: string): CourseReviewLog;

  getReason(): string;
  setReason(value: string): CourseReviewLog;
  hasReason(): boolean;
  clearReason(): CourseReviewLog;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseReviewLog;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CourseReviewLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CourseReviewLog.AsObject;
  static toObject(includeInstance: boolean, msg: CourseReviewLog): CourseReviewLog.AsObject;
  static serializeBinaryToWriter(message: CourseReviewLog, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CourseReviewLog;
  static deserializeBinaryFromReader(message: CourseReviewLog, reader: jspb.BinaryReader): CourseReviewLog;
}

export namespace CourseReviewLog {
  export type AsObject = {
    id: number;
    courseId?: number;
    videoId?: number;
    reviewerId: number;
    reviewerNickname: string;
    reviewerAvatarUrl: string;
    action: string;
    reason?: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 2,
  }

  export enum VideoIdCase {
    _VIDEO_ID_NOT_SET = 0,
    VIDEO_ID = 3,
  }

  export enum ReasonCase {
    _REASON_NOT_SET = 0,
    REASON = 8,
  }
}

export class ListCourseReviewLogsRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): ListCourseReviewLogsRequest;
  hasCourseId(): boolean;
  clearCourseId(): ListCourseReviewLogsRequest;

  getVideoId(): number;
  setVideoId(value: number): ListCourseReviewLogsRequest;
  hasVideoId(): boolean;
  clearVideoId(): ListCourseReviewLogsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseReviewLogsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseReviewLogsRequest): ListCourseReviewLogsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCourseReviewLogsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseReviewLogsRequest;
  static deserializeBinaryFromReader(message: ListCourseReviewLogsRequest, reader: jspb.BinaryReader): ListCourseReviewLogsRequest;
}

export namespace ListCourseReviewLogsRequest {
  export type AsObject = {
    courseId?: number;
    videoId?: number;
  };

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 1,
  }

  export enum VideoIdCase {
    _VIDEO_ID_NOT_SET = 0,
    VIDEO_ID = 2,
  }
}

export class ListCourseReviewLogsResponse extends jspb.Message {
  getLogsList(): Array<CourseReviewLog>;
  setLogsList(value: Array<CourseReviewLog>): ListCourseReviewLogsResponse;
  clearLogsList(): ListCourseReviewLogsResponse;
  addLogs(value?: CourseReviewLog, index?: number): CourseReviewLog;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseReviewLogsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseReviewLogsResponse): ListCourseReviewLogsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCourseReviewLogsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseReviewLogsResponse;
  static deserializeBinaryFromReader(message: ListCourseReviewLogsResponse, reader: jspb.BinaryReader): ListCourseReviewLogsResponse;
}

export namespace ListCourseReviewLogsResponse {
  export type AsObject = {
    logsList: Array<CourseReviewLog.AsObject>;
  };
}

export class AdminRefundCoursePurchaseRequest extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminRefundCoursePurchaseRequest;
  hasPurchaseId(): boolean;
  clearPurchaseId(): AdminRefundCoursePurchaseRequest;

  getUserId(): number;
  setUserId(value: number): AdminRefundCoursePurchaseRequest;
  hasUserId(): boolean;
  clearUserId(): AdminRefundCoursePurchaseRequest;

  getCourseId(): number;
  setCourseId(value: number): AdminRefundCoursePurchaseRequest;
  hasCourseId(): boolean;
  clearCourseId(): AdminRefundCoursePurchaseRequest;

  getReason(): string;
  setReason(value: string): AdminRefundCoursePurchaseRequest;
  hasReason(): boolean;
  clearReason(): AdminRefundCoursePurchaseRequest;

  getPurchaseUuid(): string;
  setPurchaseUuid(value: string): AdminRefundCoursePurchaseRequest;
  hasPurchaseUuid(): boolean;
  clearPurchaseUuid(): AdminRefundCoursePurchaseRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminRefundCoursePurchaseRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminRefundCoursePurchaseRequest): AdminRefundCoursePurchaseRequest.AsObject;
  static serializeBinaryToWriter(message: AdminRefundCoursePurchaseRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminRefundCoursePurchaseRequest;
  static deserializeBinaryFromReader(message: AdminRefundCoursePurchaseRequest, reader: jspb.BinaryReader): AdminRefundCoursePurchaseRequest;
}

export namespace AdminRefundCoursePurchaseRequest {
  export type AsObject = {
    purchaseId?: number;
    userId?: number;
    courseId?: number;
    reason?: string;
    purchaseUuid?: string;
  };

  export enum PurchaseIdCase {
    _PURCHASE_ID_NOT_SET = 0,
    PURCHASE_ID = 1,
  }

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 2,
  }

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 3,
  }

  export enum ReasonCase {
    _REASON_NOT_SET = 0,
    REASON = 4,
  }

  export enum PurchaseUuidCase {
    _PURCHASE_UUID_NOT_SET = 0,
    PURCHASE_UUID = 5,
  }
}

export class AdminRefundCoursePurchaseResponse extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminRefundCoursePurchaseResponse;

  getStatus(): string;
  setStatus(value: string): AdminRefundCoursePurchaseResponse;

  getEscrowStatus(): string;
  setEscrowStatus(value: string): AdminRefundCoursePurchaseResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminRefundCoursePurchaseResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminRefundCoursePurchaseResponse): AdminRefundCoursePurchaseResponse.AsObject;
  static serializeBinaryToWriter(message: AdminRefundCoursePurchaseResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminRefundCoursePurchaseResponse;
  static deserializeBinaryFromReader(message: AdminRefundCoursePurchaseResponse, reader: jspb.BinaryReader): AdminRefundCoursePurchaseResponse;
}

export namespace AdminRefundCoursePurchaseResponse {
  export type AsObject = {
    purchaseId: number;
    status: string;
    escrowStatus: string;
  };
}

export class AdminFreezeCourseEscrowRequest extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminFreezeCourseEscrowRequest;
  hasPurchaseId(): boolean;
  clearPurchaseId(): AdminFreezeCourseEscrowRequest;

  getUserId(): number;
  setUserId(value: number): AdminFreezeCourseEscrowRequest;
  hasUserId(): boolean;
  clearUserId(): AdminFreezeCourseEscrowRequest;

  getCourseId(): number;
  setCourseId(value: number): AdminFreezeCourseEscrowRequest;
  hasCourseId(): boolean;
  clearCourseId(): AdminFreezeCourseEscrowRequest;

  getReason(): string;
  setReason(value: string): AdminFreezeCourseEscrowRequest;
  hasReason(): boolean;
  clearReason(): AdminFreezeCourseEscrowRequest;

  getPurchaseUuid(): string;
  setPurchaseUuid(value: string): AdminFreezeCourseEscrowRequest;
  hasPurchaseUuid(): boolean;
  clearPurchaseUuid(): AdminFreezeCourseEscrowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminFreezeCourseEscrowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminFreezeCourseEscrowRequest): AdminFreezeCourseEscrowRequest.AsObject;
  static serializeBinaryToWriter(message: AdminFreezeCourseEscrowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminFreezeCourseEscrowRequest;
  static deserializeBinaryFromReader(message: AdminFreezeCourseEscrowRequest, reader: jspb.BinaryReader): AdminFreezeCourseEscrowRequest;
}

export namespace AdminFreezeCourseEscrowRequest {
  export type AsObject = {
    purchaseId?: number;
    userId?: number;
    courseId?: number;
    reason?: string;
    purchaseUuid?: string;
  };

  export enum PurchaseIdCase {
    _PURCHASE_ID_NOT_SET = 0,
    PURCHASE_ID = 1,
  }

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 2,
  }

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 3,
  }

  export enum ReasonCase {
    _REASON_NOT_SET = 0,
    REASON = 4,
  }

  export enum PurchaseUuidCase {
    _PURCHASE_UUID_NOT_SET = 0,
    PURCHASE_UUID = 5,
  }
}

export class AdminFreezeCourseEscrowResponse extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminFreezeCourseEscrowResponse;

  getIsFrozen(): boolean;
  setIsFrozen(value: boolean): AdminFreezeCourseEscrowResponse;

  getStatus(): string;
  setStatus(value: string): AdminFreezeCourseEscrowResponse;

  getEscrowStatus(): string;
  setEscrowStatus(value: string): AdminFreezeCourseEscrowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminFreezeCourseEscrowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminFreezeCourseEscrowResponse): AdminFreezeCourseEscrowResponse.AsObject;
  static serializeBinaryToWriter(message: AdminFreezeCourseEscrowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminFreezeCourseEscrowResponse;
  static deserializeBinaryFromReader(message: AdminFreezeCourseEscrowResponse, reader: jspb.BinaryReader): AdminFreezeCourseEscrowResponse;
}

export namespace AdminFreezeCourseEscrowResponse {
  export type AsObject = {
    purchaseId: number;
    isFrozen: boolean;
    status: string;
    escrowStatus: string;
  };
}

export class AdminUnfreezeCourseEscrowRequest extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminUnfreezeCourseEscrowRequest;
  hasPurchaseId(): boolean;
  clearPurchaseId(): AdminUnfreezeCourseEscrowRequest;

  getUserId(): number;
  setUserId(value: number): AdminUnfreezeCourseEscrowRequest;
  hasUserId(): boolean;
  clearUserId(): AdminUnfreezeCourseEscrowRequest;

  getCourseId(): number;
  setCourseId(value: number): AdminUnfreezeCourseEscrowRequest;
  hasCourseId(): boolean;
  clearCourseId(): AdminUnfreezeCourseEscrowRequest;

  getPurchaseUuid(): string;
  setPurchaseUuid(value: string): AdminUnfreezeCourseEscrowRequest;
  hasPurchaseUuid(): boolean;
  clearPurchaseUuid(): AdminUnfreezeCourseEscrowRequest;

  getReason(): string;
  setReason(value: string): AdminUnfreezeCourseEscrowRequest;
  hasReason(): boolean;
  clearReason(): AdminUnfreezeCourseEscrowRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUnfreezeCourseEscrowRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUnfreezeCourseEscrowRequest): AdminUnfreezeCourseEscrowRequest.AsObject;
  static serializeBinaryToWriter(message: AdminUnfreezeCourseEscrowRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUnfreezeCourseEscrowRequest;
  static deserializeBinaryFromReader(message: AdminUnfreezeCourseEscrowRequest, reader: jspb.BinaryReader): AdminUnfreezeCourseEscrowRequest;
}

export namespace AdminUnfreezeCourseEscrowRequest {
  export type AsObject = {
    purchaseId?: number;
    userId?: number;
    courseId?: number;
    purchaseUuid?: string;
    reason?: string;
  };

  export enum PurchaseIdCase {
    _PURCHASE_ID_NOT_SET = 0,
    PURCHASE_ID = 1,
  }

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 2,
  }

  export enum CourseIdCase {
    _COURSE_ID_NOT_SET = 0,
    COURSE_ID = 3,
  }

  export enum PurchaseUuidCase {
    _PURCHASE_UUID_NOT_SET = 0,
    PURCHASE_UUID = 4,
  }

  export enum ReasonCase {
    _REASON_NOT_SET = 0,
    REASON = 5,
  }
}

export class AdminUnfreezeCourseEscrowResponse extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminUnfreezeCourseEscrowResponse;

  getIsUnfrozen(): boolean;
  setIsUnfrozen(value: boolean): AdminUnfreezeCourseEscrowResponse;

  getStatus(): string;
  setStatus(value: string): AdminUnfreezeCourseEscrowResponse;

  getEscrowStatus(): string;
  setEscrowStatus(value: string): AdminUnfreezeCourseEscrowResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUnfreezeCourseEscrowResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUnfreezeCourseEscrowResponse): AdminUnfreezeCourseEscrowResponse.AsObject;
  static serializeBinaryToWriter(message: AdminUnfreezeCourseEscrowResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUnfreezeCourseEscrowResponse;
  static deserializeBinaryFromReader(message: AdminUnfreezeCourseEscrowResponse, reader: jspb.BinaryReader): AdminUnfreezeCourseEscrowResponse;
}

export namespace AdminUnfreezeCourseEscrowResponse {
  export type AsObject = {
    purchaseId: number;
    isUnfrozen: boolean;
    status: string;
    escrowStatus: string;
  };
}

export class ListMyPurchasedCoursesRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): ListMyPurchasedCoursesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListMyPurchasedCoursesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyPurchasedCoursesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyPurchasedCoursesRequest): ListMyPurchasedCoursesRequest.AsObject;
  static serializeBinaryToWriter(message: ListMyPurchasedCoursesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyPurchasedCoursesRequest;
  static deserializeBinaryFromReader(message: ListMyPurchasedCoursesRequest, reader: jspb.BinaryReader): ListMyPurchasedCoursesRequest;
}

export namespace ListMyPurchasedCoursesRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
  };
}

export class ListMyPurchasedCoursesResponse extends jspb.Message {
  getCoursesList(): Array<Course>;
  setCoursesList(value: Array<Course>): ListMyPurchasedCoursesResponse;
  clearCoursesList(): ListMyPurchasedCoursesResponse;
  addCourses(value?: Course, index?: number): Course;

  getTotalCount(): number;
  setTotalCount(value: number): ListMyPurchasedCoursesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyPurchasedCoursesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyPurchasedCoursesResponse): ListMyPurchasedCoursesResponse.AsObject;
  static serializeBinaryToWriter(message: ListMyPurchasedCoursesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyPurchasedCoursesResponse;
  static deserializeBinaryFromReader(message: ListMyPurchasedCoursesResponse, reader: jspb.BinaryReader): ListMyPurchasedCoursesResponse;
}

export namespace ListMyPurchasedCoursesResponse {
  export type AsObject = {
    coursesList: Array<Course.AsObject>;
    totalCount: number;
  };
}

export class CourseVideoLearningProgress extends jspb.Message {
  getVideoId(): number;
  setVideoId(value: number): CourseVideoLearningProgress;

  getProgressSeconds(): number;
  setProgressSeconds(value: number): CourseVideoLearningProgress;

  getIsCompleted(): boolean;
  setIsCompleted(value: boolean): CourseVideoLearningProgress;

  getLastWatchedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastWatchedAt(value?: google_protobuf_timestamp_pb.Timestamp): CourseVideoLearningProgress;
  hasLastWatchedAt(): boolean;
  clearLastWatchedAt(): CourseVideoLearningProgress;

  getWatchedSeconds(): number;
  setWatchedSeconds(value: number): CourseVideoLearningProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CourseVideoLearningProgress.AsObject;
  static toObject(includeInstance: boolean, msg: CourseVideoLearningProgress): CourseVideoLearningProgress.AsObject;
  static serializeBinaryToWriter(message: CourseVideoLearningProgress, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CourseVideoLearningProgress;
  static deserializeBinaryFromReader(message: CourseVideoLearningProgress, reader: jspb.BinaryReader): CourseVideoLearningProgress;
}

export namespace CourseVideoLearningProgress {
  export type AsObject = {
    videoId: number;
    progressSeconds: number;
    isCompleted: boolean;
    lastWatchedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    watchedSeconds: number;
  };
}

export class ListCourseLearningProgressRequest extends jspb.Message {
  getCourseId(): number;
  setCourseId(value: number): ListCourseLearningProgressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseLearningProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseLearningProgressRequest): ListCourseLearningProgressRequest.AsObject;
  static serializeBinaryToWriter(message: ListCourseLearningProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseLearningProgressRequest;
  static deserializeBinaryFromReader(message: ListCourseLearningProgressRequest, reader: jspb.BinaryReader): ListCourseLearningProgressRequest;
}

export namespace ListCourseLearningProgressRequest {
  export type AsObject = {
    courseId: number;
  };
}

export class ListCourseLearningProgressResponse extends jspb.Message {
  getProgressesList(): Array<CourseVideoLearningProgress>;
  setProgressesList(value: Array<CourseVideoLearningProgress>): ListCourseLearningProgressResponse;
  clearProgressesList(): ListCourseLearningProgressResponse;
  addProgresses(value?: CourseVideoLearningProgress, index?: number): CourseVideoLearningProgress;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCourseLearningProgressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCourseLearningProgressResponse): ListCourseLearningProgressResponse.AsObject;
  static serializeBinaryToWriter(message: ListCourseLearningProgressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCourseLearningProgressResponse;
  static deserializeBinaryFromReader(message: ListCourseLearningProgressResponse, reader: jspb.BinaryReader): ListCourseLearningProgressResponse;
}

export namespace ListCourseLearningProgressResponse {
  export type AsObject = {
    progressesList: Array<CourseVideoLearningProgress.AsObject>;
  };
}

export class AdminGetCoursePurchaseRefundDetailsRequest extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminGetCoursePurchaseRefundDetailsRequest;

  getPurchaseUuid(): string;
  setPurchaseUuid(value: string): AdminGetCoursePurchaseRefundDetailsRequest;
  hasPurchaseUuid(): boolean;
  clearPurchaseUuid(): AdminGetCoursePurchaseRefundDetailsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetCoursePurchaseRefundDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetCoursePurchaseRefundDetailsRequest): AdminGetCoursePurchaseRefundDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: AdminGetCoursePurchaseRefundDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetCoursePurchaseRefundDetailsRequest;
  static deserializeBinaryFromReader(message: AdminGetCoursePurchaseRefundDetailsRequest, reader: jspb.BinaryReader): AdminGetCoursePurchaseRefundDetailsRequest;
}

export namespace AdminGetCoursePurchaseRefundDetailsRequest {
  export type AsObject = {
    purchaseId: number;
    purchaseUuid?: string;
  };

  export enum PurchaseUuidCase {
    _PURCHASE_UUID_NOT_SET = 0,
    PURCHASE_UUID = 2,
  }
}

export class AdminGetCoursePurchaseRefundDetailsResponse extends jspb.Message {
  getPurchaseId(): number;
  setPurchaseId(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getUserId(): number;
  setUserId(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getCourseId(): number;
  setCourseId(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getPurchaseUuid(): string;
  setPurchaseUuid(value: string): AdminGetCoursePurchaseRefundDetailsResponse;

  getPurchasePrice(): number;
  setPurchasePrice(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getStatus(): string;
  setStatus(value: string): AdminGetCoursePurchaseRefundDetailsResponse;

  getEscrowStatus(): string;
  setEscrowStatus(value: string): AdminGetCoursePurchaseRefundDetailsResponse;

  getEscrowReleased(): boolean;
  setEscrowReleased(value: boolean): AdminGetCoursePurchaseRefundDetailsResponse;

  getIsRefundable(): boolean;
  setIsRefundable(value: boolean): AdminGetCoursePurchaseRefundDetailsResponse;

  getHasDownloadedOffline(): boolean;
  setHasDownloadedOffline(value: boolean): AdminGetCoursePurchaseRefundDetailsResponse;

  getPurchasedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setPurchasedAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminGetCoursePurchaseRefundDetailsResponse;
  hasPurchasedAt(): boolean;
  clearPurchasedAt(): AdminGetCoursePurchaseRefundDetailsResponse;

  getRefundExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefundExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminGetCoursePurchaseRefundDetailsResponse;
  hasRefundExpiresAt(): boolean;
  clearRefundExpiresAt(): AdminGetCoursePurchaseRefundDetailsResponse;

  getRefundedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRefundedAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminGetCoursePurchaseRefundDetailsResponse;
  hasRefundedAt(): boolean;
  clearRefundedAt(): AdminGetCoursePurchaseRefundDetailsResponse;

  getRefundReason(): string;
  setRefundReason(value: string): AdminGetCoursePurchaseRefundDetailsResponse;
  hasRefundReason(): boolean;
  clearRefundReason(): AdminGetCoursePurchaseRefundDetailsResponse;

  getFrozenAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFrozenAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminGetCoursePurchaseRefundDetailsResponse;
  hasFrozenAt(): boolean;
  clearFrozenAt(): AdminGetCoursePurchaseRefundDetailsResponse;

  getFrozenReason(): string;
  setFrozenReason(value: string): AdminGetCoursePurchaseRefundDetailsResponse;
  hasFrozenReason(): boolean;
  clearFrozenReason(): AdminGetCoursePurchaseRefundDetailsResponse;

  getFrozenByAdminId(): number;
  setFrozenByAdminId(value: number): AdminGetCoursePurchaseRefundDetailsResponse;
  hasFrozenByAdminId(): boolean;
  clearFrozenByAdminId(): AdminGetCoursePurchaseRefundDetailsResponse;

  getRefundEligible(): boolean;
  setRefundEligible(value: boolean): AdminGetCoursePurchaseRefundDetailsResponse;

  getRefundIneligibleReason(): string;
  setRefundIneligibleReason(value: string): AdminGetCoursePurchaseRefundDetailsResponse;

  getWatchedPaidSeconds(): number;
  setWatchedPaidSeconds(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getTotalPaidSeconds(): number;
  setTotalPaidSeconds(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getWatchedPercent(): number;
  setWatchedPercent(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getRemainingAnalysisQuota(): number;
  setRemainingAnalysisQuota(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getAnalysisQuotaLimit(): number;
  setAnalysisQuotaLimit(value: number): AdminGetCoursePurchaseRefundDetailsResponse;

  getIsRepurchase(): boolean;
  setIsRepurchase(value: boolean): AdminGetCoursePurchaseRefundDetailsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetCoursePurchaseRefundDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetCoursePurchaseRefundDetailsResponse): AdminGetCoursePurchaseRefundDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: AdminGetCoursePurchaseRefundDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetCoursePurchaseRefundDetailsResponse;
  static deserializeBinaryFromReader(message: AdminGetCoursePurchaseRefundDetailsResponse, reader: jspb.BinaryReader): AdminGetCoursePurchaseRefundDetailsResponse;
}

export namespace AdminGetCoursePurchaseRefundDetailsResponse {
  export type AsObject = {
    purchaseId: number;
    userId: number;
    courseId: number;
    purchaseUuid: string;
    purchasePrice: number;
    status: string;
    escrowStatus: string;
    escrowReleased: boolean;
    isRefundable: boolean;
    hasDownloadedOffline: boolean;
    purchasedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refundExpiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refundedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    refundReason?: string;
    frozenAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    frozenReason?: string;
    frozenByAdminId?: number;
    refundEligible: boolean;
    refundIneligibleReason: string;
    watchedPaidSeconds: number;
    totalPaidSeconds: number;
    watchedPercent: number;
    remainingAnalysisQuota: number;
    analysisQuotaLimit: number;
    isRepurchase: boolean;
  };

  export enum RefundedAtCase {
    _REFUNDED_AT_NOT_SET = 0,
    REFUNDED_AT = 13,
  }

  export enum RefundReasonCase {
    _REFUND_REASON_NOT_SET = 0,
    REFUND_REASON = 14,
  }

  export enum FrozenAtCase {
    _FROZEN_AT_NOT_SET = 0,
    FROZEN_AT = 15,
  }

  export enum FrozenReasonCase {
    _FROZEN_REASON_NOT_SET = 0,
    FROZEN_REASON = 16,
  }

  export enum FrozenByAdminIdCase {
    _FROZEN_BY_ADMIN_ID_NOT_SET = 0,
    FROZEN_BY_ADMIN_ID = 17,
  }
}

