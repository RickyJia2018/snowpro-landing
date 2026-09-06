import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as enums_pb from './enums_pb'; // proto import: "enums.proto"
import * as rpc_resort_pb from './rpc_resort_pb'; // proto import: "rpc_resort.proto"


export class Instructor extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): Instructor;

  getVideosList(): Array<string>;
  setVideosList(value: Array<string>): Instructor;
  clearVideosList(): Instructor;
  addVideos(value: string, index?: number): Instructor;

  getImagesList(): Array<string>;
  setImagesList(value: Array<string>): Instructor;
  clearImagesList(): Instructor;
  addImages(value: string, index?: number): Instructor;

  getSelfIntro(): string;
  setSelfIntro(value: string): Instructor;

  getValidated(): boolean;
  setValidated(value: boolean): Instructor;

  getPrice(): number;
  setPrice(value: number): Instructor;

  getInstagram(): string;
  setInstagram(value: string): Instructor;

  getYoutube(): string;
  setYoutube(value: string): Instructor;

  getTiktok(): string;
  setTiktok(value: string): Instructor;

  getXiaohongshu(): string;
  setXiaohongshu(value: string): Instructor;

  getActive(): boolean;
  setActive(value: boolean): Instructor;

  getStar(): number;
  setStar(value: number): Instructor;

  getComeFrom(): string;
  setComeFrom(value: string): Instructor;

  getBaseAt(): string;
  setBaseAt(value: string): Instructor;

  getMaxOrder(): number;
  setMaxOrder(value: number): Instructor;

  getTotalReviews(): number;
  setTotalReviews(value: number): Instructor;

  getTotalTeached(): number;
  setTotalTeached(value: number): Instructor;

  getMediaList(): Array<string>;
  setMediaList(value: Array<string>): Instructor;
  clearMediaList(): Instructor;
  addMedia(value: string, index?: number): Instructor;

  getProvenImagesList(): Array<string>;
  setProvenImagesList(value: Array<string>): Instructor;
  clearProvenImagesList(): Instructor;
  addProvenImages(value: string, index?: number): Instructor;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Instructor;
  hasCreatedAt(): boolean;
  clearCreatedAt(): Instructor;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Instructor;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): Instructor;

  getVideoRequirement(): string;
  setVideoRequirement(value: string): Instructor;

  getApplicationStatus(): enums_pb.ApplicationStatus;
  setApplicationStatus(value: enums_pb.ApplicationStatus): Instructor;

  getPlatformCommissionFee(): number;
  setPlatformCommissionFee(value: number): Instructor;

  getPaypalId(): string;
  setPaypalId(value: string): Instructor;

  getStripeId(): string;
  setStripeId(value: string): Instructor;

  getPayoutCurrency(): string;
  setPayoutCurrency(value: string): Instructor;

  getPayoutCountry(): string;
  setPayoutCountry(value: string): Instructor;

  getPayoutRegion(): string;
  setPayoutRegion(value: string): Instructor;

  getTagsList(): Array<string>;
  setTagsList(value: Array<string>): Instructor;
  clearTagsList(): Instructor;
  addTags(value: string, index?: number): Instructor;

  getContributionPoints(): number;
  setContributionPoints(value: number): Instructor;

  getInvitedByUserId(): number;
  setInvitedByUserId(value: number): Instructor;
  hasInvitedByUserId(): boolean;
  clearInvitedByUserId(): Instructor;

  getRejectReason(): string;
  setRejectReason(value: string): Instructor;

  getTeachingSince(): number;
  setTeachingSince(value: number): Instructor;
  hasTeachingSince(): boolean;
  clearTeachingSince(): Instructor;

  getSkiingSince(): number;
  setSkiingSince(value: number): Instructor;
  hasSkiingSince(): boolean;
  clearSkiingSince(): Instructor;

  getRecommendScore(): number;
  setRecommendScore(value: number): Instructor;
  hasRecommendScore(): boolean;
  clearRecommendScore(): Instructor;

  getAllowedStudentComments(): number;
  setAllowedStudentComments(value: number): Instructor;

  getWiseRecipientId(): string;
  setWiseRecipientId(value: string): Instructor;

  getPayoutMethod(): string;
  setPayoutMethod(value: string): Instructor;

  getIsUsTaxResident(): boolean;
  setIsUsTaxResident(value: boolean): Instructor;

  getIsCaTaxResident(): boolean;
  setIsCaTaxResident(value: boolean): Instructor;

  getTaxDeclarationSignedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTaxDeclarationSignedAt(value?: google_protobuf_timestamp_pb.Timestamp): Instructor;
  hasTaxDeclarationSignedAt(): boolean;
  clearTaxDeclarationSignedAt(): Instructor;

  getTaxDeclarationIp(): string;
  setTaxDeclarationIp(value: string): Instructor;

  getResortsList(): Array<rpc_resort_pb.Resort>;
  setResortsList(value: Array<rpc_resort_pb.Resort>): Instructor;
  clearResortsList(): Instructor;
  addResorts(value?: rpc_resort_pb.Resort, index?: number): rpc_resort_pb.Resort;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Instructor.AsObject;
  static toObject(includeInstance: boolean, msg: Instructor): Instructor.AsObject;
  static serializeBinaryToWriter(message: Instructor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Instructor;
  static deserializeBinaryFromReader(message: Instructor, reader: jspb.BinaryReader): Instructor;
}

export namespace Instructor {
  export type AsObject = {
    userId: number;
    videosList: Array<string>;
    imagesList: Array<string>;
    selfIntro: string;
    validated: boolean;
    price: number;
    instagram: string;
    youtube: string;
    tiktok: string;
    xiaohongshu: string;
    active: boolean;
    star: number;
    comeFrom: string;
    baseAt: string;
    maxOrder: number;
    totalReviews: number;
    totalTeached: number;
    mediaList: Array<string>;
    provenImagesList: Array<string>;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    videoRequirement: string;
    applicationStatus: enums_pb.ApplicationStatus;
    platformCommissionFee: number;
    paypalId: string;
    stripeId: string;
    payoutCurrency: string;
    payoutCountry: string;
    payoutRegion: string;
    tagsList: Array<string>;
    contributionPoints: number;
    invitedByUserId?: number;
    rejectReason: string;
    teachingSince?: number;
    skiingSince?: number;
    recommendScore?: number;
    allowedStudentComments: number;
    wiseRecipientId: string;
    payoutMethod: string;
    isUsTaxResident: boolean;
    isCaTaxResident: boolean;
    taxDeclarationSignedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    taxDeclarationIp: string;
    resortsList: Array<rpc_resort_pb.Resort.AsObject>;
  };

  export enum InvitedByUserIdCase {
    _INVITED_BY_USER_ID_NOT_SET = 0,
    INVITED_BY_USER_ID = 31,
  }

  export enum TeachingSinceCase {
    _TEACHING_SINCE_NOT_SET = 0,
    TEACHING_SINCE = 33,
  }

  export enum SkiingSinceCase {
    _SKIING_SINCE_NOT_SET = 0,
    SKIING_SINCE = 34,
  }

  export enum RecommendScoreCase {
    _RECOMMEND_SCORE_NOT_SET = 0,
    RECOMMEND_SCORE = 48,
  }
}

