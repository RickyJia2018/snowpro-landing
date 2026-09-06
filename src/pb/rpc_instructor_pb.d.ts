import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as instructor_pb from './instructor_pb'; // proto import: "instructor.proto"
import * as rpc_instructor_certificate_pb from './rpc_instructor_certificate_pb'; // proto import: "rpc_instructor_certificate.proto"
import * as rpc_language_pb from './rpc_language_pb'; // proto import: "rpc_language.proto"
import * as user_pb from './user_pb'; // proto import: "user.proto"
import * as enums_pb from './enums_pb'; // proto import: "enums.proto"
import * as rpc_resort_pb from './rpc_resort_pb'; // proto import: "rpc_resort.proto"


export class InstructorRsp extends jspb.Message {
  getInstructor(): instructor_pb.Instructor | undefined;
  setInstructor(value?: instructor_pb.Instructor): InstructorRsp;
  hasInstructor(): boolean;
  clearInstructor(): InstructorRsp;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): InstructorRsp;
  hasUser(): boolean;
  clearUser(): InstructorRsp;

  getCertificatesList(): Array<rpc_instructor_certificate_pb.Certificate>;
  setCertificatesList(value: Array<rpc_instructor_certificate_pb.Certificate>): InstructorRsp;
  clearCertificatesList(): InstructorRsp;
  addCertificates(value?: rpc_instructor_certificate_pb.Certificate, index?: number): rpc_instructor_certificate_pb.Certificate;

  getLanguagesList(): Array<rpc_language_pb.Language>;
  setLanguagesList(value: Array<rpc_language_pb.Language>): InstructorRsp;
  clearLanguagesList(): InstructorRsp;
  addLanguages(value?: rpc_language_pb.Language, index?: number): rpc_language_pb.Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorRsp.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorRsp): InstructorRsp.AsObject;
  static serializeBinaryToWriter(message: InstructorRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorRsp;
  static deserializeBinaryFromReader(message: InstructorRsp, reader: jspb.BinaryReader): InstructorRsp;
}

export namespace InstructorRsp {
  export type AsObject = {
    instructor?: instructor_pb.Instructor.AsObject;
    user?: user_pb.User.AsObject;
    certificatesList: Array<rpc_instructor_certificate_pb.Certificate.AsObject>;
    languagesList: Array<rpc_language_pb.Language.AsObject>;
  };
}

export class InstructorCertificateInput extends jspb.Message {
  getCertificateTypeId(): number;
  setCertificateTypeId(value: number): InstructorCertificateInput;

  getLevel(): number;
  setLevel(value: number): InstructorCertificateInput;
  hasLevel(): boolean;
  clearLevel(): InstructorCertificateInput;

  getProveImage(): string;
  setProveImage(value: string): InstructorCertificateInput;

  getAchievement(): string;
  setAchievement(value: string): InstructorCertificateInput;
  hasAchievement(): boolean;
  clearAchievement(): InstructorCertificateInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorCertificateInput.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorCertificateInput): InstructorCertificateInput.AsObject;
  static serializeBinaryToWriter(message: InstructorCertificateInput, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorCertificateInput;
  static deserializeBinaryFromReader(message: InstructorCertificateInput, reader: jspb.BinaryReader): InstructorCertificateInput;
}

export namespace InstructorCertificateInput {
  export type AsObject = {
    certificateTypeId: number;
    level?: number;
    proveImage: string;
    achievement?: string;
  };

  export enum LevelCase {
    _LEVEL_NOT_SET = 0,
    LEVEL = 2,
  }

  export enum AchievementCase {
    _ACHIEVEMENT_NOT_SET = 0,
    ACHIEVEMENT = 4,
  }
}

export class CreateInstructorRequest extends jspb.Message {
  getSelfIntro(): string;
  setSelfIntro(value: string): CreateInstructorRequest;
  hasSelfIntro(): boolean;
  clearSelfIntro(): CreateInstructorRequest;

  getProvenImagesList(): Array<string>;
  setProvenImagesList(value: Array<string>): CreateInstructorRequest;
  clearProvenImagesList(): CreateInstructorRequest;
  addProvenImages(value: string, index?: number): CreateInstructorRequest;

  getPrice(): number;
  setPrice(value: number): CreateInstructorRequest;

  getComeFrom(): string;
  setComeFrom(value: string): CreateInstructorRequest;

  getBaseAt(): string;
  setBaseAt(value: string): CreateInstructorRequest;

  getInvitationCode(): string;
  setInvitationCode(value: string): CreateInstructorRequest;
  hasInvitationCode(): boolean;
  clearInvitationCode(): CreateInstructorRequest;

  getLanguageCode(): string;
  setLanguageCode(value: string): CreateInstructorRequest;
  hasLanguageCode(): boolean;
  clearLanguageCode(): CreateInstructorRequest;

  getCertificatesList(): Array<InstructorCertificateInput>;
  setCertificatesList(value: Array<InstructorCertificateInput>): CreateInstructorRequest;
  clearCertificatesList(): CreateInstructorRequest;
  addCertificates(value?: InstructorCertificateInput, index?: number): InstructorCertificateInput;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructorRequest): CreateInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructorRequest;
  static deserializeBinaryFromReader(message: CreateInstructorRequest, reader: jspb.BinaryReader): CreateInstructorRequest;
}

export namespace CreateInstructorRequest {
  export type AsObject = {
    selfIntro?: string;
    provenImagesList: Array<string>;
    price: number;
    comeFrom: string;
    baseAt: string;
    invitationCode?: string;
    languageCode?: string;
    certificatesList: Array<InstructorCertificateInput.AsObject>;
  };

  export enum SelfIntroCase {
    _SELF_INTRO_NOT_SET = 0,
    SELF_INTRO = 1,
  }

  export enum InvitationCodeCase {
    _INVITATION_CODE_NOT_SET = 0,
    INVITATION_CODE = 6,
  }

  export enum LanguageCodeCase {
    _LANGUAGE_CODE_NOT_SET = 0,
    LANGUAGE_CODE = 7,
  }
}

export class CreateInstructorResponse extends jspb.Message {
  getInstructor(): instructor_pb.Instructor | undefined;
  setInstructor(value?: instructor_pb.Instructor): CreateInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): CreateInstructorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructorResponse): CreateInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: CreateInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructorResponse;
  static deserializeBinaryFromReader(message: CreateInstructorResponse, reader: jspb.BinaryReader): CreateInstructorResponse;
}

export namespace CreateInstructorResponse {
  export type AsObject = {
    instructor?: instructor_pb.Instructor.AsObject;
  };
}

export class GetInstructorRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetInstructorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorRequest): GetInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: GetInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorRequest;
  static deserializeBinaryFromReader(message: GetInstructorRequest, reader: jspb.BinaryReader): GetInstructorRequest;
}

export namespace GetInstructorRequest {
  export type AsObject = {
    userId: number;
  };
}

export class GetInstructorResponse extends jspb.Message {
  getInstructor(): instructor_pb.Instructor | undefined;
  setInstructor(value?: instructor_pb.Instructor): GetInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): GetInstructorResponse;

  getCertificatesList(): Array<rpc_instructor_certificate_pb.Certificate>;
  setCertificatesList(value: Array<rpc_instructor_certificate_pb.Certificate>): GetInstructorResponse;
  clearCertificatesList(): GetInstructorResponse;
  addCertificates(value?: rpc_instructor_certificate_pb.Certificate, index?: number): rpc_instructor_certificate_pb.Certificate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetInstructorResponse): GetInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: GetInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetInstructorResponse;
  static deserializeBinaryFromReader(message: GetInstructorResponse, reader: jspb.BinaryReader): GetInstructorResponse;
}

export namespace GetInstructorResponse {
  export type AsObject = {
    instructor?: instructor_pb.Instructor.AsObject;
    certificatesList: Array<rpc_instructor_certificate_pb.Certificate.AsObject>;
  };
}

export class UpdateInstructorRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): UpdateInstructorRequest;

  getVideosList(): Array<string>;
  setVideosList(value: Array<string>): UpdateInstructorRequest;
  clearVideosList(): UpdateInstructorRequest;
  addVideos(value: string, index?: number): UpdateInstructorRequest;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): UpdateInstructorRequest;
  clearImagesList(): UpdateInstructorRequest;
  addImages(value: string, index?: number): UpdateInstructorRequest;

  getSelfIntro(): string;
  setSelfIntro(value: string): UpdateInstructorRequest;
  hasSelfIntro(): boolean;
  clearSelfIntro(): UpdateInstructorRequest;

  getPrice(): number;
  setPrice(value: number): UpdateInstructorRequest;
  hasPrice(): boolean;
  clearPrice(): UpdateInstructorRequest;

  getInstagram(): string;
  setInstagram(value: string): UpdateInstructorRequest;
  hasInstagram(): boolean;
  clearInstagram(): UpdateInstructorRequest;

  getYoutube(): string;
  setYoutube(value: string): UpdateInstructorRequest;
  hasYoutube(): boolean;
  clearYoutube(): UpdateInstructorRequest;

  getTiktok(): string;
  setTiktok(value: string): UpdateInstructorRequest;
  hasTiktok(): boolean;
  clearTiktok(): UpdateInstructorRequest;

  getXiaohongshu(): string;
  setXiaohongshu(value: string): UpdateInstructorRequest;
  hasXiaohongshu(): boolean;
  clearXiaohongshu(): UpdateInstructorRequest;

  getPayoutCurrency(): string;
  setPayoutCurrency(value: string): UpdateInstructorRequest;
  hasPayoutCurrency(): boolean;
  clearPayoutCurrency(): UpdateInstructorRequest;

  getComeFrom(): string;
  setComeFrom(value: string): UpdateInstructorRequest;
  hasComeFrom(): boolean;
  clearComeFrom(): UpdateInstructorRequest;

  getBaseAt(): string;
  setBaseAt(value: string): UpdateInstructorRequest;
  hasBaseAt(): boolean;
  clearBaseAt(): UpdateInstructorRequest;

  getMaxOrder(): number;
  setMaxOrder(value: number): UpdateInstructorRequest;
  hasMaxOrder(): boolean;
  clearMaxOrder(): UpdateInstructorRequest;

  getMediaList(): Array<string>;
  setMediaList(value: Array<string>): UpdateInstructorRequest;
  clearMediaList(): UpdateInstructorRequest;
  addMedia(value: string, index?: number): UpdateInstructorRequest;

  getVideoRequirement(): string;
  setVideoRequirement(value: string): UpdateInstructorRequest;
  hasVideoRequirement(): boolean;
  clearVideoRequirement(): UpdateInstructorRequest;

  getActive(): boolean;
  setActive(value: boolean): UpdateInstructorRequest;
  hasActive(): boolean;
  clearActive(): UpdateInstructorRequest;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): UpdateInstructorRequest;
  clearTagsList(): UpdateInstructorRequest;
  addTags(value: string, index?: number): UpdateInstructorRequest;

  getPlatformCommissionFee(): number;
  setPlatformCommissionFee(value: number): UpdateInstructorRequest;
  hasPlatformCommissionFee(): boolean;
  clearPlatformCommissionFee(): UpdateInstructorRequest;

  getTeachingSince(): number;
  setTeachingSince(value: number): UpdateInstructorRequest;
  hasTeachingSince(): boolean;
  clearTeachingSince(): UpdateInstructorRequest;

  getSkiingSince(): number;
  setSkiingSince(value: number): UpdateInstructorRequest;
  hasSkiingSince(): boolean;
  clearSkiingSince(): UpdateInstructorRequest;

  getAllowedStudentComments(): number;
  setAllowedStudentComments(value: number): UpdateInstructorRequest;
  hasAllowedStudentComments(): boolean;
  clearAllowedStudentComments(): UpdateInstructorRequest;

  getResortIdsList(): Array<number>;
  setResortIdsList(value: Array<number>): UpdateInstructorRequest;
  clearResortIdsList(): UpdateInstructorRequest;
  addResortIds(value: number, index?: number): UpdateInstructorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorRequest): UpdateInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorRequest;
  static deserializeBinaryFromReader(message: UpdateInstructorRequest, reader: jspb.BinaryReader): UpdateInstructorRequest;
}

export namespace UpdateInstructorRequest {
  export type AsObject = {
    userId: number;
    videosList: Array<string>;
    imagesList: Array<string>;
    selfIntro?: string;
    price?: number;
    instagram?: string;
    youtube?: string;
    tiktok?: string;
    xiaohongshu?: string;
    payoutCurrency?: string;
    comeFrom?: string;
    baseAt?: string;
    maxOrder?: number;
    mediaList: Array<string>;
    videoRequirement?: string;
    active?: boolean;
    tagsList: Array<string>;
    platformCommissionFee?: number;
    teachingSince?: number;
    skiingSince?: number;
    allowedStudentComments?: number;
    resortIdsList: Array<number>;
  };

  export enum SelfIntroCase {
    _SELF_INTRO_NOT_SET = 0,
    SELF_INTRO = 4,
  }

  export enum PriceCase {
    _PRICE_NOT_SET = 0,
    PRICE = 5,
  }

  export enum InstagramCase {
    _INSTAGRAM_NOT_SET = 0,
    INSTAGRAM = 6,
  }

  export enum YoutubeCase {
    _YOUTUBE_NOT_SET = 0,
    YOUTUBE = 7,
  }

  export enum TiktokCase {
    _TIKTOK_NOT_SET = 0,
    TIKTOK = 8,
  }

  export enum XiaohongshuCase {
    _XIAOHONGSHU_NOT_SET = 0,
    XIAOHONGSHU = 21,
  }

  export enum PayoutCurrencyCase {
    _PAYOUT_CURRENCY_NOT_SET = 0,
    PAYOUT_CURRENCY = 9,
  }

  export enum ComeFromCase {
    _COME_FROM_NOT_SET = 0,
    COME_FROM = 10,
  }

  export enum BaseAtCase {
    _BASE_AT_NOT_SET = 0,
    BASE_AT = 11,
  }

  export enum MaxOrderCase {
    _MAX_ORDER_NOT_SET = 0,
    MAX_ORDER = 12,
  }

  export enum VideoRequirementCase {
    _VIDEO_REQUIREMENT_NOT_SET = 0,
    VIDEO_REQUIREMENT = 14,
  }

  export enum ActiveCase {
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 15,
  }

  export enum PlatformCommissionFeeCase {
    _PLATFORM_COMMISSION_FEE_NOT_SET = 0,
    PLATFORM_COMMISSION_FEE = 17,
  }

  export enum TeachingSinceCase {
    _TEACHING_SINCE_NOT_SET = 0,
    TEACHING_SINCE = 18,
  }

  export enum SkiingSinceCase {
    _SKIING_SINCE_NOT_SET = 0,
    SKIING_SINCE = 19,
  }

  export enum AllowedStudentCommentsCase {
    _ALLOWED_STUDENT_COMMENTS_NOT_SET = 0,
    ALLOWED_STUDENT_COMMENTS = 20,
  }
}

export class UpdateInstructorResponse extends jspb.Message {
  getInstructor(): instructor_pb.Instructor | undefined;
  setInstructor(value?: instructor_pb.Instructor): UpdateInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): UpdateInstructorResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorResponse): UpdateInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorResponse;
  static deserializeBinaryFromReader(message: UpdateInstructorResponse, reader: jspb.BinaryReader): UpdateInstructorResponse;
}

export namespace UpdateInstructorResponse {
  export type AsObject = {
    instructor?: instructor_pb.Instructor.AsObject;
  };
}

export class UpdateApplicationStatusRequest extends jspb.Message {
  getStatus(): enums_pb.ApplicationStatus;
  setStatus(value: enums_pb.ApplicationStatus): UpdateApplicationStatusRequest;

  getInstructorId(): number;
  setInstructorId(value: number): UpdateApplicationStatusRequest;

  getRejectReason(): string;
  setRejectReason(value: string): UpdateApplicationStatusRequest;
  hasRejectReason(): boolean;
  clearRejectReason(): UpdateApplicationStatusRequest;

  getApplicationId(): number;
  setApplicationId(value: number): UpdateApplicationStatusRequest;
  hasApplicationId(): boolean;
  clearApplicationId(): UpdateApplicationStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateApplicationStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateApplicationStatusRequest): UpdateApplicationStatusRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateApplicationStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateApplicationStatusRequest;
  static deserializeBinaryFromReader(message: UpdateApplicationStatusRequest, reader: jspb.BinaryReader): UpdateApplicationStatusRequest;
}

export namespace UpdateApplicationStatusRequest {
  export type AsObject = {
    status: enums_pb.ApplicationStatus;
    instructorId: number;
    rejectReason?: string;
    applicationId?: number;
  };

  export enum RejectReasonCase {
    _REJECT_REASON_NOT_SET = 0,
    REJECT_REASON = 3,
  }

  export enum ApplicationIdCase {
    _APPLICATION_ID_NOT_SET = 0,
    APPLICATION_ID = 4,
  }
}

export class UpdateInstructorValidationResponse extends jspb.Message {
  getInstructor(): instructor_pb.Instructor | undefined;
  setInstructor(value?: instructor_pb.Instructor): UpdateInstructorValidationResponse;
  hasInstructor(): boolean;
  clearInstructor(): UpdateInstructorValidationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInstructorValidationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInstructorValidationResponse): UpdateInstructorValidationResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateInstructorValidationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInstructorValidationResponse;
  static deserializeBinaryFromReader(message: UpdateInstructorValidationResponse, reader: jspb.BinaryReader): UpdateInstructorValidationResponse;
}

export namespace UpdateInstructorValidationResponse {
  export type AsObject = {
    instructor?: instructor_pb.Instructor.AsObject;
  };
}

export class CountInstructorsResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): CountInstructorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CountInstructorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CountInstructorsResponse): CountInstructorsResponse.AsObject;
  static serializeBinaryToWriter(message: CountInstructorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CountInstructorsResponse;
  static deserializeBinaryFromReader(message: CountInstructorsResponse, reader: jspb.BinaryReader): CountInstructorsResponse;
}

export namespace CountInstructorsResponse {
  export type AsObject = {
    count: number;
  };
}

export class GetPublicInstructorRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): GetPublicInstructorRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicInstructorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicInstructorRequest): GetPublicInstructorRequest.AsObject;
  static serializeBinaryToWriter(message: GetPublicInstructorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicInstructorRequest;
  static deserializeBinaryFromReader(message: GetPublicInstructorRequest, reader: jspb.BinaryReader): GetPublicInstructorRequest;
}

export namespace GetPublicInstructorRequest {
  export type AsObject = {
    userId: number;
  };
}

export class PublicInstructor extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): PublicInstructor;

  getUsername(): string;
  setUsername(value: string): PublicInstructor;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): PublicInstructor;

  getSelfIntro(): string;
  setSelfIntro(value: string): PublicInstructor;

  getPrice(): number;
  setPrice(value: number): PublicInstructor;

  getStar(): number;
  setStar(value: number): PublicInstructor;

  getComeFrom(): string;
  setComeFrom(value: string): PublicInstructor;

  getBaseAt(): string;
  setBaseAt(value: string): PublicInstructor;

  getTotalReviews(): number;
  setTotalReviews(value: number): PublicInstructor;

  getMediaList(): Array<string>;
  setMediaList(value: Array<string>): PublicInstructor;
  clearMediaList(): PublicInstructor;
  addMedia(value: string, index?: number): PublicInstructor;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): PublicInstructor;
  clearTagsList(): PublicInstructor;
  addTags(value: string, index?: number): PublicInstructor;

  getActive(): boolean;
  setActive(value: boolean): PublicInstructor;

  getTotalTeached(): number;
  setTotalTeached(value: number): PublicInstructor;

  getTeachingSince(): number;
  setTeachingSince(value: number): PublicInstructor;
  hasTeachingSince(): boolean;
  clearTeachingSince(): PublicInstructor;

  getSkiingSince(): number;
  setSkiingSince(value: number): PublicInstructor;
  hasSkiingSince(): boolean;
  clearSkiingSince(): PublicInstructor;

  getAllowedStudentComments(): number;
  setAllowedStudentComments(value: number): PublicInstructor;

  getResortsList(): Array<rpc_resort_pb.Resort>;
  setResortsList(value: Array<rpc_resort_pb.Resort>): PublicInstructor;
  clearResortsList(): PublicInstructor;
  addResorts(value?: rpc_resort_pb.Resort, index?: number): rpc_resort_pb.Resort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PublicInstructor.AsObject;
  static toObject(includeInstance: boolean, msg: PublicInstructor): PublicInstructor.AsObject;
  static serializeBinaryToWriter(message: PublicInstructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PublicInstructor;
  static deserializeBinaryFromReader(message: PublicInstructor, reader: jspb.BinaryReader): PublicInstructor;
}

export namespace PublicInstructor {
  export type AsObject = {
    userId: number;
    username: string;
    avatarUrl: string;
    selfIntro: string;
    price: number;
    star: number;
    comeFrom: string;
    baseAt: string;
    totalReviews: number;
    mediaList: Array<string>;
    tagsList: Array<string>;
    active: boolean;
    totalTeached: number;
    teachingSince?: number;
    skiingSince?: number;
    allowedStudentComments: number;
    resortsList: Array<rpc_resort_pb.Resort.AsObject>;
  };

  export enum TeachingSinceCase {
    _TEACHING_SINCE_NOT_SET = 0,
    TEACHING_SINCE = 14,
  }

  export enum SkiingSinceCase {
    _SKIING_SINCE_NOT_SET = 0,
    SKIING_SINCE = 15,
  }
}

export class GetPublicInstructorResponse extends jspb.Message {
  getInstructor(): PublicInstructor | undefined;
  setInstructor(value?: PublicInstructor): GetPublicInstructorResponse;
  hasInstructor(): boolean;
  clearInstructor(): GetPublicInstructorResponse;

  getCertificatesList(): Array<rpc_instructor_certificate_pb.Certificate>;
  setCertificatesList(value: Array<rpc_instructor_certificate_pb.Certificate>): GetPublicInstructorResponse;
  clearCertificatesList(): GetPublicInstructorResponse;
  addCertificates(value?: rpc_instructor_certificate_pb.Certificate, index?: number): rpc_instructor_certificate_pb.Certificate;

  getLanguagesList(): Array<rpc_language_pb.Language>;
  setLanguagesList(value: Array<rpc_language_pb.Language>): GetPublicInstructorResponse;
  clearLanguagesList(): GetPublicInstructorResponse;
  addLanguages(value?: rpc_language_pb.Language, index?: number): rpc_language_pb.Language;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPublicInstructorResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPublicInstructorResponse): GetPublicInstructorResponse.AsObject;
  static serializeBinaryToWriter(message: GetPublicInstructorResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPublicInstructorResponse;
  static deserializeBinaryFromReader(message: GetPublicInstructorResponse, reader: jspb.BinaryReader): GetPublicInstructorResponse;
}

export namespace GetPublicInstructorResponse {
  export type AsObject = {
    instructor?: PublicInstructor.AsObject;
    certificatesList: Array<rpc_instructor_certificate_pb.Certificate.AsObject>;
    languagesList: Array<rpc_language_pb.Language.AsObject>;
  };
}

export class ListInstructorsRequest extends jspb.Message {
  getSearchQuery(): string;
  setSearchQuery(value: string): ListInstructorsRequest;
  hasSearchQuery(): boolean;
  clearSearchQuery(): ListInstructorsRequest;

  getMinRating(): number;
  setMinRating(value: number): ListInstructorsRequest;
  hasMinRating(): boolean;
  clearMinRating(): ListInstructorsRequest;

  getMinPrice(): number;
  setMinPrice(value: number): ListInstructorsRequest;
  hasMinPrice(): boolean;
  clearMinPrice(): ListInstructorsRequest;

  getMaxPrice(): number;
  setMaxPrice(value: number): ListInstructorsRequest;
  hasMaxPrice(): boolean;
  clearMaxPrice(): ListInstructorsRequest;

  getCertificationTypesList(): Array<string>;
  setCertificationTypesList(value: Array<string>): ListInstructorsRequest;
  clearCertificationTypesList(): ListInstructorsRequest;
  addCertificationTypes(value: string, index?: number): ListInstructorsRequest;

  getLevelsList(): Array<number>;
  setLevelsList(value: Array<number>): ListInstructorsRequest;
  clearLevelsList(): ListInstructorsRequest;
  addLevels(value: number, index?: number): ListInstructorsRequest;

  getLimit(): number;
  setLimit(value: number): ListInstructorsRequest;

  getOffset(): number;
  setOffset(value: number): ListInstructorsRequest;

  getValidated(): boolean;
  setValidated(value: boolean): ListInstructorsRequest;
  hasValidated(): boolean;
  clearValidated(): ListInstructorsRequest;

  getApplicationStatus(): enums_pb.ApplicationStatus;
  setApplicationStatus(value: enums_pb.ApplicationStatus): ListInstructorsRequest;
  hasApplicationStatus(): boolean;
  clearApplicationStatus(): ListInstructorsRequest;

  getActive(): boolean;
  setActive(value: boolean): ListInstructorsRequest;
  hasActive(): boolean;
  clearActive(): ListInstructorsRequest;

  getLanguagesList(): Array<string>;
  setLanguagesList(value: Array<string>): ListInstructorsRequest;
  clearLanguagesList(): ListInstructorsRequest;
  addLanguages(value: string, index?: number): ListInstructorsRequest;

  getBaseAt(): string;
  setBaseAt(value: string): ListInstructorsRequest;
  hasBaseAt(): boolean;
  clearBaseAt(): ListInstructorsRequest;

  getMinTeachingYears(): number;
  setMinTeachingYears(value: number): ListInstructorsRequest;
  hasMinTeachingYears(): boolean;
  clearMinTeachingYears(): ListInstructorsRequest;

  getRandomSeed(): string;
  setRandomSeed(value: string): ListInstructorsRequest;
  hasRandomSeed(): boolean;
  clearRandomSeed(): ListInstructorsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorsRequest): ListInstructorsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstructorsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorsRequest;
  static deserializeBinaryFromReader(message: ListInstructorsRequest, reader: jspb.BinaryReader): ListInstructorsRequest;
}

export namespace ListInstructorsRequest {
  export type AsObject = {
    searchQuery?: string;
    minRating?: number;
    minPrice?: number;
    maxPrice?: number;
    certificationTypesList: Array<string>;
    levelsList: Array<number>;
    limit: number;
    offset: number;
    validated?: boolean;
    applicationStatus?: enums_pb.ApplicationStatus;
    active?: boolean;
    languagesList: Array<string>;
    baseAt?: string;
    minTeachingYears?: number;
    randomSeed?: string;
  };

  export enum SearchQueryCase {
    _SEARCH_QUERY_NOT_SET = 0,
    SEARCH_QUERY = 1,
  }

  export enum MinRatingCase {
    _MIN_RATING_NOT_SET = 0,
    MIN_RATING = 2,
  }

  export enum MinPriceCase {
    _MIN_PRICE_NOT_SET = 0,
    MIN_PRICE = 3,
  }

  export enum MaxPriceCase {
    _MAX_PRICE_NOT_SET = 0,
    MAX_PRICE = 4,
  }

  export enum ValidatedCase {
    _VALIDATED_NOT_SET = 0,
    VALIDATED = 9,
  }

  export enum ApplicationStatusCase {
    _APPLICATION_STATUS_NOT_SET = 0,
    APPLICATION_STATUS = 10,
  }

  export enum ActiveCase {
    _ACTIVE_NOT_SET = 0,
    ACTIVE = 11,
  }

  export enum BaseAtCase {
    _BASE_AT_NOT_SET = 0,
    BASE_AT = 13,
  }

  export enum MinTeachingYearsCase {
    _MIN_TEACHING_YEARS_NOT_SET = 0,
    MIN_TEACHING_YEARS = 14,
  }

  export enum RandomSeedCase {
    _RANDOM_SEED_NOT_SET = 0,
    RANDOM_SEED = 15,
  }
}

export class ListInstructorsResponse extends jspb.Message {
  getDataList(): Array<InstructorRsp>;
  setDataList(value: Array<InstructorRsp>): ListInstructorsResponse;
  clearDataList(): ListInstructorsResponse;
  addData(value?: InstructorRsp, index?: number): InstructorRsp;

  getLimit(): number;
  setLimit(value: number): ListInstructorsResponse;

  getOffset(): number;
  setOffset(value: number): ListInstructorsResponse;

  getTotal(): number;
  setTotal(value: number): ListInstructorsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorsResponse): ListInstructorsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstructorsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorsResponse;
  static deserializeBinaryFromReader(message: ListInstructorsResponse, reader: jspb.BinaryReader): ListInstructorsResponse;
}

export namespace ListInstructorsResponse {
  export type AsObject = {
    dataList: Array<InstructorRsp.AsObject>;
    limit: number;
    offset: number;
    total: number;
  };
}

export class CreateInstructorInvitationCodeRequest extends jspb.Message {
  getCustomCode(): string;
  setCustomCode(value: string): CreateInstructorInvitationCodeRequest;
  hasCustomCode(): boolean;
  clearCustomCode(): CreateInstructorInvitationCodeRequest;

  getMaxUses(): number;
  setMaxUses(value: number): CreateInstructorInvitationCodeRequest;
  hasMaxUses(): boolean;
  clearMaxUses(): CreateInstructorInvitationCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateInstructorInvitationCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateInstructorInvitationCodeRequest): CreateInstructorInvitationCodeRequest.AsObject;
  static serializeBinaryToWriter(message: CreateInstructorInvitationCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateInstructorInvitationCodeRequest;
  static deserializeBinaryFromReader(message: CreateInstructorInvitationCodeRequest, reader: jspb.BinaryReader): CreateInstructorInvitationCodeRequest;
}

export namespace CreateInstructorInvitationCodeRequest {
  export type AsObject = {
    customCode?: string;
    maxUses?: number;
  };

  export enum CustomCodeCase {
    _CUSTOM_CODE_NOT_SET = 0,
    CUSTOM_CODE = 1,
  }

  export enum MaxUsesCase {
    _MAX_USES_NOT_SET = 0,
    MAX_USES = 2,
  }
}

export class InstructorInvitationCode extends jspb.Message {
  getCode(): string;
  setCode(value: string): InstructorInvitationCode;

  getCreatorId(): number;
  setCreatorId(value: number): InstructorInvitationCode;

  getMaxUses(): number;
  setMaxUses(value: number): InstructorInvitationCode;

  getUseCount(): number;
  setUseCount(value: number): InstructorInvitationCode;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): InstructorInvitationCode;
  hasExpiresAt(): boolean;
  clearExpiresAt(): InstructorInvitationCode;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstructorInvitationCode;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InstructorInvitationCode;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorInvitationCode.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorInvitationCode): InstructorInvitationCode.AsObject;
  static serializeBinaryToWriter(message: InstructorInvitationCode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorInvitationCode;
  static deserializeBinaryFromReader(message: InstructorInvitationCode, reader: jspb.BinaryReader): InstructorInvitationCode;
}

export namespace InstructorInvitationCode {
  export type AsObject = {
    code: string;
    creatorId: number;
    maxUses: number;
    useCount: number;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class VerifyInstructorInvitationCodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): VerifyInstructorInvitationCodeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyInstructorInvitationCodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyInstructorInvitationCodeRequest): VerifyInstructorInvitationCodeRequest.AsObject;
  static serializeBinaryToWriter(message: VerifyInstructorInvitationCodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyInstructorInvitationCodeRequest;
  static deserializeBinaryFromReader(message: VerifyInstructorInvitationCodeRequest, reader: jspb.BinaryReader): VerifyInstructorInvitationCodeRequest;
}

export namespace VerifyInstructorInvitationCodeRequest {
  export type AsObject = {
    code: string;
  };
}

export class VerifyInstructorInvitationCodeResponse extends jspb.Message {
  getIsValid(): boolean;
  setIsValid(value: boolean): VerifyInstructorInvitationCodeResponse;

  getMessage(): string;
  setMessage(value: string): VerifyInstructorInvitationCodeResponse;

  getInviterName(): string;
  setInviterName(value: string): VerifyInstructorInvitationCodeResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifyInstructorInvitationCodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: VerifyInstructorInvitationCodeResponse): VerifyInstructorInvitationCodeResponse.AsObject;
  static serializeBinaryToWriter(message: VerifyInstructorInvitationCodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifyInstructorInvitationCodeResponse;
  static deserializeBinaryFromReader(message: VerifyInstructorInvitationCodeResponse, reader: jspb.BinaryReader): VerifyInstructorInvitationCodeResponse;
}

export namespace VerifyInstructorInvitationCodeResponse {
  export type AsObject = {
    isValid: boolean;
    message: string;
    inviterName: string;
  };
}

export class GetReferralDetailsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReferralDetailsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetReferralDetailsRequest): GetReferralDetailsRequest.AsObject;
  static serializeBinaryToWriter(message: GetReferralDetailsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReferralDetailsRequest;
  static deserializeBinaryFromReader(message: GetReferralDetailsRequest, reader: jspb.BinaryReader): GetReferralDetailsRequest;
}

export namespace GetReferralDetailsRequest {
  export type AsObject = {
  };
}

export class Invitee extends jspb.Message {
  getInviteeId(): number;
  setInviteeId(value: number): Invitee;

  getFirstName(): string;
  setFirstName(value: string): Invitee;

  getLastName(): string;
  setLastName(value: string): Invitee;

  getNickname(): string;
  setNickname(value: string): Invitee;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): Invitee;

  getStatus(): number;
  setStatus(value: number): Invitee;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Invitee;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Invitee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Invitee.AsObject;
  static toObject(includeInstance: boolean, msg: Invitee): Invitee.AsObject;
  static serializeBinaryToWriter(message: Invitee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Invitee;
  static deserializeBinaryFromReader(message: Invitee, reader: jspb.BinaryReader): Invitee;
}

export namespace Invitee {
  export type AsObject = {
    inviteeId: number;
    firstName: string;
    lastName: string;
    nickname: string;
    avatarUrl: string;
    status: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class GetReferralDetailsResponse extends jspb.Message {
  getActiveCode(): InstructorInvitationCode | undefined;
  setActiveCode(value?: InstructorInvitationCode): GetReferralDetailsResponse;
  hasActiveCode(): boolean;
  clearActiveCode(): GetReferralDetailsResponse;

  getInviteesList(): Array<Invitee>;
  setInviteesList(value: Array<Invitee>): GetReferralDetailsResponse;
  clearInviteesList(): GetReferralDetailsResponse;
  addInvitees(value?: Invitee, index?: number): Invitee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetReferralDetailsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetReferralDetailsResponse): GetReferralDetailsResponse.AsObject;
  static serializeBinaryToWriter(message: GetReferralDetailsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetReferralDetailsResponse;
  static deserializeBinaryFromReader(message: GetReferralDetailsResponse, reader: jspb.BinaryReader): GetReferralDetailsResponse;
}

export namespace GetReferralDetailsResponse {
  export type AsObject = {
    activeCode?: InstructorInvitationCode.AsObject;
    inviteesList: Array<Invitee.AsObject>;
  };
}

export class InstructorApplication extends jspb.Message {
  getId(): number;
  setId(value: number): InstructorApplication;

  getUserId(): number;
  setUserId(value: number): InstructorApplication;

  getSelfIntro(): string;
  setSelfIntro(value: string): InstructorApplication;

  getProvenImagesList(): Array<string>;
  setProvenImagesList(value: Array<string>): InstructorApplication;
  clearProvenImagesList(): InstructorApplication;
  addProvenImages(value: string, index?: number): InstructorApplication;

  getPrice(): number;
  setPrice(value: number): InstructorApplication;

  getComeFrom(): string;
  setComeFrom(value: string): InstructorApplication;

  getBaseAt(): string;
  setBaseAt(value: string): InstructorApplication;

  getStatus(): enums_pb.ApplicationStatus;
  setStatus(value: enums_pb.ApplicationStatus): InstructorApplication;

  getRejectReason(): string;
  setRejectReason(value: string): InstructorApplication;

  getInvitedByUserId(): number;
  setInvitedByUserId(value: number): InstructorApplication;
  hasInvitedByUserId(): boolean;
  clearInvitedByUserId(): InstructorApplication;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstructorApplication;
  hasCreatedAt(): boolean;
  clearCreatedAt(): InstructorApplication;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): InstructorApplication;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): InstructorApplication;

  getLanguageCode(): string;
  setLanguageCode(value: string): InstructorApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorApplication.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorApplication): InstructorApplication.AsObject;
  static serializeBinaryToWriter(message: InstructorApplication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorApplication;
  static deserializeBinaryFromReader(message: InstructorApplication, reader: jspb.BinaryReader): InstructorApplication;
}

export namespace InstructorApplication {
  export type AsObject = {
    id: number;
    userId: number;
    selfIntro: string;
    provenImagesList: Array<string>;
    price: number;
    comeFrom: string;
    baseAt: string;
    status: enums_pb.ApplicationStatus;
    rejectReason: string;
    invitedByUserId?: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    languageCode: string;
  };

  export enum InvitedByUserIdCase {
    _INVITED_BY_USER_ID_NOT_SET = 0,
    INVITED_BY_USER_ID = 10,
  }
}

export class InstructorApplicationRsp extends jspb.Message {
  getApplication(): InstructorApplication | undefined;
  setApplication(value?: InstructorApplication): InstructorApplicationRsp;
  hasApplication(): boolean;
  clearApplication(): InstructorApplicationRsp;

  getUser(): user_pb.User | undefined;
  setUser(value?: user_pb.User): InstructorApplicationRsp;
  hasUser(): boolean;
  clearUser(): InstructorApplicationRsp;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InstructorApplicationRsp.AsObject;
  static toObject(includeInstance: boolean, msg: InstructorApplicationRsp): InstructorApplicationRsp.AsObject;
  static serializeBinaryToWriter(message: InstructorApplicationRsp, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InstructorApplicationRsp;
  static deserializeBinaryFromReader(message: InstructorApplicationRsp, reader: jspb.BinaryReader): InstructorApplicationRsp;
}

export namespace InstructorApplicationRsp {
  export type AsObject = {
    application?: InstructorApplication.AsObject;
    user?: user_pb.User.AsObject;
  };
}

export class ListInstructorApplicationsRequest extends jspb.Message {
  getStatus(): enums_pb.ApplicationStatus;
  setStatus(value: enums_pb.ApplicationStatus): ListInstructorApplicationsRequest;
  hasStatus(): boolean;
  clearStatus(): ListInstructorApplicationsRequest;

  getLimit(): number;
  setLimit(value: number): ListInstructorApplicationsRequest;

  getOffset(): number;
  setOffset(value: number): ListInstructorApplicationsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorApplicationsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorApplicationsRequest): ListInstructorApplicationsRequest.AsObject;
  static serializeBinaryToWriter(message: ListInstructorApplicationsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorApplicationsRequest;
  static deserializeBinaryFromReader(message: ListInstructorApplicationsRequest, reader: jspb.BinaryReader): ListInstructorApplicationsRequest;
}

export namespace ListInstructorApplicationsRequest {
  export type AsObject = {
    status?: enums_pb.ApplicationStatus;
    limit: number;
    offset: number;
  };

  export enum StatusCase {
    _STATUS_NOT_SET = 0,
    STATUS = 1,
  }
}

export class ListInstructorApplicationsResponse extends jspb.Message {
  getDataList(): Array<InstructorApplicationRsp>;
  setDataList(value: Array<InstructorApplicationRsp>): ListInstructorApplicationsResponse;
  clearDataList(): ListInstructorApplicationsResponse;
  addData(value?: InstructorApplicationRsp, index?: number): InstructorApplicationRsp;

  getLimit(): number;
  setLimit(value: number): ListInstructorApplicationsResponse;

  getOffset(): number;
  setOffset(value: number): ListInstructorApplicationsResponse;

  getTotal(): number;
  setTotal(value: number): ListInstructorApplicationsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListInstructorApplicationsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListInstructorApplicationsResponse): ListInstructorApplicationsResponse.AsObject;
  static serializeBinaryToWriter(message: ListInstructorApplicationsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListInstructorApplicationsResponse;
  static deserializeBinaryFromReader(message: ListInstructorApplicationsResponse, reader: jspb.BinaryReader): ListInstructorApplicationsResponse;
}

export namespace ListInstructorApplicationsResponse {
  export type AsObject = {
    dataList: Array<InstructorApplicationRsp.AsObject>;
    limit: number;
    offset: number;
    total: number;
  };
}

export class CancelInstructorApplicationRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelInstructorApplicationRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelInstructorApplicationRequest): CancelInstructorApplicationRequest.AsObject;
  static serializeBinaryToWriter(message: CancelInstructorApplicationRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelInstructorApplicationRequest;
  static deserializeBinaryFromReader(message: CancelInstructorApplicationRequest, reader: jspb.BinaryReader): CancelInstructorApplicationRequest;
}

export namespace CancelInstructorApplicationRequest {
  export type AsObject = {
  };
}

export class CancelInstructorApplicationResponse extends jspb.Message {
  getApplication(): InstructorApplication | undefined;
  setApplication(value?: InstructorApplication): CancelInstructorApplicationResponse;
  hasApplication(): boolean;
  clearApplication(): CancelInstructorApplicationResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelInstructorApplicationResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CancelInstructorApplicationResponse): CancelInstructorApplicationResponse.AsObject;
  static serializeBinaryToWriter(message: CancelInstructorApplicationResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelInstructorApplicationResponse;
  static deserializeBinaryFromReader(message: CancelInstructorApplicationResponse, reader: jspb.BinaryReader): CancelInstructorApplicationResponse;
}

export namespace CancelInstructorApplicationResponse {
  export type AsObject = {
    application?: InstructorApplication.AsObject;
  };
}

