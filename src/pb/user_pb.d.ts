import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"
import * as permission_pb from './permission_pb'; // proto import: "permission.proto"
import * as rpc_language_pb from './rpc_language_pb'; // proto import: "rpc_language.proto"
import * as rpc_carpool_pb from './rpc_carpool_pb'; // proto import: "rpc_carpool.proto"
import * as instructor_pb from './instructor_pb'; // proto import: "instructor.proto"


export class User extends jspb.Message {
  getId(): number;
  setId(value: number): User;

  getEmail(): string;
  setEmail(value: string): User;

  getFirstName(): string;
  setFirstName(value: string): User;

  getLastName(): string;
  setLastName(value: string): User;

  getPhone(): string;
  setPhone(value: string): User;

  getPermission(): permission_pb.Permission;
  setPermission(value: permission_pb.Permission): User;

  getMainLanguageId(): number;
  setMainLanguageId(value: number): User;

  getIsEmailVerified(): boolean;
  setIsEmailVerified(value: boolean): User;

  getIsPhoneVerified(): boolean;
  setIsPhoneVerified(value: boolean): User;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasCreatedAt(): boolean;
  clearCreatedAt(): User;

  getAvatarUrl(): string;
  setAvatarUrl(value: string): User;

  getBalance(): number;
  setBalance(value: number): User;

  getNickname(): string;
  setNickname(value: string): User;

  getIsInstructor(): boolean;
  setIsInstructor(value: boolean): User;

  getFcmToken(): string;
  setFcmToken(value: string): User;

  getIsBanned(): boolean;
  setIsBanned(value: boolean): User;

  getSpokenLanguagesList(): Array<rpc_language_pb.Language>;
  setSpokenLanguagesList(value: Array<rpc_language_pb.Language>): User;
  clearSpokenLanguagesList(): User;
  addSpokenLanguages(value?: rpc_language_pb.Language, index?: number): rpc_language_pb.Language;

  getDeletedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeletedAt(value?: google_protobuf_timestamp_pb.Timestamp): User;
  hasDeletedAt(): boolean;
  clearDeletedAt(): User;

  getNotifyMessage(): boolean;
  setNotifyMessage(value: boolean): User;

  getNotifyLesson(): boolean;
  setNotifyLesson(value: boolean): User;

  getCarpoolRating(): number;
  setCarpoolRating(value: number): User;

  getCarpoolDriveCount(): number;
  setCarpoolDriveCount(value: number): User;

  getCarpoolRideCount(): number;
  setCarpoolRideCount(value: number): User;

  getBio(): string;
  setBio(value: string): User;

  getCustomId(): string;
  setCustomId(value: string): User;

  getIsCustomIdSet(): boolean;
  setIsCustomIdSet(value: boolean): User;

  getCarpoolSubscription(): rpc_carpool_pb.CarpoolSubscriptionEntitlement | undefined;
  setCarpoolSubscription(value?: rpc_carpool_pb.CarpoolSubscriptionEntitlement): User;
  hasCarpoolSubscription(): boolean;
  clearCarpoolSubscription(): User;

  getInstructor(): instructor_pb.Instructor | undefined;
  setInstructor(value?: instructor_pb.Instructor): User;
  hasInstructor(): boolean;
  clearInstructor(): User;

  getOauthProvidersList(): Array<string>;
  setOauthProvidersList(value: Array<string>): User;
  clearOauthProvidersList(): User;
  addOauthProviders(value: string, index?: number): User;

  getHasPassword(): boolean;
  setHasPassword(value: boolean): User;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): User.AsObject;
  static toObject(includeInstance: boolean, msg: User): User.AsObject;
  static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): User;
  static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
  export type AsObject = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    permission: permission_pb.Permission;
    mainLanguageId: number;
    isEmailVerified: boolean;
    isPhoneVerified: boolean;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    avatarUrl: string;
    balance: number;
    nickname: string;
    isInstructor: boolean;
    fcmToken: string;
    isBanned: boolean;
    spokenLanguagesList: Array<rpc_language_pb.Language.AsObject>;
    deletedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    notifyMessage: boolean;
    notifyLesson: boolean;
    carpoolRating: number;
    carpoolDriveCount: number;
    carpoolRideCount: number;
    bio: string;
    customId: string;
    isCustomIdSet: boolean;
    carpoolSubscription?: rpc_carpool_pb.CarpoolSubscriptionEntitlement.AsObject;
    instructor?: instructor_pb.Instructor.AsObject;
    oauthProvidersList: Array<string>;
    hasPassword: boolean;
  };

  export enum CarpoolSubscriptionCase {
    _CARPOOL_SUBSCRIPTION_NOT_SET = 0,
    CARPOOL_SUBSCRIPTION = 27,
  }

  export enum InstructorCase {
    _INSTRUCTOR_NOT_SET = 0,
    INSTRUCTOR = 28,
  }
}

