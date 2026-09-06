import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class CarpoolTrip extends jspb.Message {
  getId(): string;
  setId(value: string): CarpoolTrip;

  getDriverId(): number;
  setDriverId(value: number): CarpoolTrip;

  getDepartureLatitude(): number;
  setDepartureLatitude(value: number): CarpoolTrip;

  getDepartureLongitude(): number;
  setDepartureLongitude(value: number): CarpoolTrip;

  getDepartureAddress(): string;
  setDepartureAddress(value: string): CarpoolTrip;

  getDestinationLatitude(): number;
  setDestinationLatitude(value: number): CarpoolTrip;

  getDestinationLongitude(): number;
  setDestinationLongitude(value: number): CarpoolTrip;

  getDestinationAddress(): string;
  setDestinationAddress(value: string): CarpoolTrip;

  getDepartureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDepartureTime(value?: google_protobuf_timestamp_pb.Timestamp): CarpoolTrip;
  hasDepartureTime(): boolean;
  clearDepartureTime(): CarpoolTrip;

  getIsRoundTrip(): boolean;
  setIsRoundTrip(value: boolean): CarpoolTrip;

  getReturnTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReturnTime(value?: google_protobuf_timestamp_pb.Timestamp): CarpoolTrip;
  hasReturnTime(): boolean;
  clearReturnTime(): CarpoolTrip;

  getTotalSeats(): number;
  setTotalSeats(value: number): CarpoolTrip;

  getAvailableSeats(): number;
  setAvailableSeats(value: number): CarpoolTrip;

  getPriceCents(): number;
  setPriceCents(value: number): CarpoolTrip;

  getPaymentMethodsList(): Array<string>;
  setPaymentMethodsList(value: Array<string>): CarpoolTrip;
  clearPaymentMethodsList(): CarpoolTrip;
  addPaymentMethods(value: string, index?: number): CarpoolTrip;

  getGearRestriction(): number;
  setGearRestriction(value: number): CarpoolTrip;

  getStatus(): number;
  setStatus(value: number): CarpoolTrip;

  getNote(): string;
  setNote(value: string): CarpoolTrip;
  hasNote(): boolean;
  clearNote(): CarpoolTrip;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CarpoolTrip;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CarpoolTrip;

  getDropoffLocation(): string;
  setDropoffLocation(value: string): CarpoolTrip;
  hasDropoffLocation(): boolean;
  clearDropoffLocation(): CarpoolTrip;

  getPrivateDepartureAddress(): string;
  setPrivateDepartureAddress(value: string): CarpoolTrip;
  hasPrivateDepartureAddress(): boolean;
  clearPrivateDepartureAddress(): CarpoolTrip;

  getPendingCount(): number;
  setPendingCount(value: number): CarpoolTrip;

  getAcceptedCount(): number;
  setAcceptedCount(value: number): CarpoolTrip;

  getVehicleImageUrl(): string;
  setVehicleImageUrl(value: string): CarpoolTrip;
  hasVehicleImageUrl(): boolean;
  clearVehicleImageUrl(): CarpoolTrip;

  getPublishMethod(): CarpoolPublishMethod;
  setPublishMethod(value: CarpoolPublishMethod): CarpoolTrip;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarpoolTrip.AsObject;
  static toObject(includeInstance: boolean, msg: CarpoolTrip): CarpoolTrip.AsObject;
  static serializeBinaryToWriter(message: CarpoolTrip, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarpoolTrip;
  static deserializeBinaryFromReader(message: CarpoolTrip, reader: jspb.BinaryReader): CarpoolTrip;
}

export namespace CarpoolTrip {
  export type AsObject = {
    id: string;
    driverId: number;
    departureLatitude: number;
    departureLongitude: number;
    departureAddress: string;
    destinationLatitude: number;
    destinationLongitude: number;
    destinationAddress: string;
    departureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    isRoundTrip: boolean;
    returnTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    totalSeats: number;
    availableSeats: number;
    priceCents: number;
    paymentMethodsList: Array<string>;
    gearRestriction: number;
    status: number;
    note?: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    dropoffLocation?: string;
    privateDepartureAddress?: string;
    pendingCount: number;
    acceptedCount: number;
    vehicleImageUrl?: string;
    publishMethod: CarpoolPublishMethod;
  };

  export enum ReturnTimeCase {
    _RETURN_TIME_NOT_SET = 0,
    RETURN_TIME = 11,
  }

  export enum NoteCase {
    _NOTE_NOT_SET = 0,
    NOTE = 18,
  }

  export enum DropoffLocationCase {
    _DROPOFF_LOCATION_NOT_SET = 0,
    DROPOFF_LOCATION = 20,
  }

  export enum PrivateDepartureAddressCase {
    _PRIVATE_DEPARTURE_ADDRESS_NOT_SET = 0,
    PRIVATE_DEPARTURE_ADDRESS = 21,
  }

  export enum VehicleImageUrlCase {
    _VEHICLE_IMAGE_URL_NOT_SET = 0,
    VEHICLE_IMAGE_URL = 24,
  }
}

export class CarpoolBooking extends jspb.Message {
  getId(): string;
  setId(value: string): CarpoolBooking;

  getTripId(): string;
  setTripId(value: string): CarpoolBooking;

  getPassengerId(): number;
  setPassengerId(value: number): CarpoolBooking;

  getSeatsBooked(): number;
  setSeatsBooked(value: number): CarpoolBooking;

  getProposedPickupLatitude(): number;
  setProposedPickupLatitude(value: number): CarpoolBooking;
  hasProposedPickupLatitude(): boolean;
  clearProposedPickupLatitude(): CarpoolBooking;

  getProposedPickupLongitude(): number;
  setProposedPickupLongitude(value: number): CarpoolBooking;
  hasProposedPickupLongitude(): boolean;
  clearProposedPickupLongitude(): CarpoolBooking;

  getProposedPickupAddress(): string;
  setProposedPickupAddress(value: string): CarpoolBooking;
  hasProposedPickupAddress(): boolean;
  clearProposedPickupAddress(): CarpoolBooking;

  getStatus(): number;
  setStatus(value: number): CarpoolBooking;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CarpoolBooking;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CarpoolBooking;

  getPassengerNickname(): string;
  setPassengerNickname(value: string): CarpoolBooking;
  hasPassengerNickname(): boolean;
  clearPassengerNickname(): CarpoolBooking;

  getPassengerAvatarUrl(): string;
  setPassengerAvatarUrl(value: string): CarpoolBooking;
  hasPassengerAvatarUrl(): boolean;
  clearPassengerAvatarUrl(): CarpoolBooking;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarpoolBooking.AsObject;
  static toObject(includeInstance: boolean, msg: CarpoolBooking): CarpoolBooking.AsObject;
  static serializeBinaryToWriter(message: CarpoolBooking, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarpoolBooking;
  static deserializeBinaryFromReader(message: CarpoolBooking, reader: jspb.BinaryReader): CarpoolBooking;
}

export namespace CarpoolBooking {
  export type AsObject = {
    id: string;
    tripId: string;
    passengerId: number;
    seatsBooked: number;
    proposedPickupLatitude?: number;
    proposedPickupLongitude?: number;
    proposedPickupAddress?: string;
    status: number;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    passengerNickname?: string;
    passengerAvatarUrl?: string;
  };

  export enum ProposedPickupLatitudeCase {
    _PROPOSED_PICKUP_LATITUDE_NOT_SET = 0,
    PROPOSED_PICKUP_LATITUDE = 5,
  }

  export enum ProposedPickupLongitudeCase {
    _PROPOSED_PICKUP_LONGITUDE_NOT_SET = 0,
    PROPOSED_PICKUP_LONGITUDE = 6,
  }

  export enum ProposedPickupAddressCase {
    _PROPOSED_PICKUP_ADDRESS_NOT_SET = 0,
    PROPOSED_PICKUP_ADDRESS = 7,
  }

  export enum PassengerNicknameCase {
    _PASSENGER_NICKNAME_NOT_SET = 0,
    PASSENGER_NICKNAME = 10,
  }

  export enum PassengerAvatarUrlCase {
    _PASSENGER_AVATAR_URL_NOT_SET = 0,
    PASSENGER_AVATAR_URL = 11,
  }
}

export class Stopover extends jspb.Message {
  getId(): string;
  setId(value: string): Stopover;

  getLatitude(): number;
  setLatitude(value: number): Stopover;

  getLongitude(): number;
  setLongitude(value: number): Stopover;

  getAddress(): string;
  setAddress(value: string): Stopover;

  getStopOrder(): number;
  setStopOrder(value: number): Stopover;

  getBookingId(): string;
  setBookingId(value: string): Stopover;
  hasBookingId(): boolean;
  clearBookingId(): Stopover;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Stopover.AsObject;
  static toObject(includeInstance: boolean, msg: Stopover): Stopover.AsObject;
  static serializeBinaryToWriter(message: Stopover, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Stopover;
  static deserializeBinaryFromReader(message: Stopover, reader: jspb.BinaryReader): Stopover;
}

export namespace Stopover {
  export type AsObject = {
    id: string;
    latitude: number;
    longitude: number;
    address: string;
    stopOrder: number;
    bookingId?: string;
  };

  export enum BookingIdCase {
    _BOOKING_ID_NOT_SET = 0,
    BOOKING_ID = 6,
  }
}

export class CreateCarpoolTripRequest extends jspb.Message {
  getDepartureLatitude(): number;
  setDepartureLatitude(value: number): CreateCarpoolTripRequest;

  getDepartureLongitude(): number;
  setDepartureLongitude(value: number): CreateCarpoolTripRequest;

  getDepartureAddress(): string;
  setDepartureAddress(value: string): CreateCarpoolTripRequest;

  getDestinationLatitude(): number;
  setDestinationLatitude(value: number): CreateCarpoolTripRequest;

  getDestinationLongitude(): number;
  setDestinationLongitude(value: number): CreateCarpoolTripRequest;

  getDestinationAddress(): string;
  setDestinationAddress(value: string): CreateCarpoolTripRequest;

  getDepartureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDepartureTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateCarpoolTripRequest;
  hasDepartureTime(): boolean;
  clearDepartureTime(): CreateCarpoolTripRequest;

  getIsRoundTrip(): boolean;
  setIsRoundTrip(value: boolean): CreateCarpoolTripRequest;

  getReturnTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReturnTime(value?: google_protobuf_timestamp_pb.Timestamp): CreateCarpoolTripRequest;
  hasReturnTime(): boolean;
  clearReturnTime(): CreateCarpoolTripRequest;

  getTotalSeats(): number;
  setTotalSeats(value: number): CreateCarpoolTripRequest;

  getPriceCents(): number;
  setPriceCents(value: number): CreateCarpoolTripRequest;

  getPaymentMethodsList(): Array<string>;
  setPaymentMethodsList(value: Array<string>): CreateCarpoolTripRequest;
  clearPaymentMethodsList(): CreateCarpoolTripRequest;
  addPaymentMethods(value: string, index?: number): CreateCarpoolTripRequest;

  getGearRestriction(): number;
  setGearRestriction(value: number): CreateCarpoolTripRequest;

  getNote(): string;
  setNote(value: string): CreateCarpoolTripRequest;
  hasNote(): boolean;
  clearNote(): CreateCarpoolTripRequest;

  getAdVerificationToken(): string;
  setAdVerificationToken(value: string): CreateCarpoolTripRequest;
  hasAdVerificationToken(): boolean;
  clearAdVerificationToken(): CreateCarpoolTripRequest;

  getDropoffLocation(): string;
  setDropoffLocation(value: string): CreateCarpoolTripRequest;
  hasDropoffLocation(): boolean;
  clearDropoffLocation(): CreateCarpoolTripRequest;

  getPrivateDepartureAddress(): string;
  setPrivateDepartureAddress(value: string): CreateCarpoolTripRequest;
  hasPrivateDepartureAddress(): boolean;
  clearPrivateDepartureAddress(): CreateCarpoolTripRequest;

  getPolicyVersionId(): number;
  setPolicyVersionId(value: number): CreateCarpoolTripRequest;
  hasPolicyVersionId(): boolean;
  clearPolicyVersionId(): CreateCarpoolTripRequest;

  getVehicleImageUrl(): string;
  setVehicleImageUrl(value: string): CreateCarpoolTripRequest;
  hasVehicleImageUrl(): boolean;
  clearVehicleImageUrl(): CreateCarpoolTripRequest;

  getVehicleImageFileId(): string;
  setVehicleImageFileId(value: string): CreateCarpoolTripRequest;
  hasVehicleImageFileId(): boolean;
  clearVehicleImageFileId(): CreateCarpoolTripRequest;

  getPublishMethod(): CarpoolPublishMethod;
  setPublishMethod(value: CarpoolPublishMethod): CreateCarpoolTripRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCarpoolTripRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCarpoolTripRequest): CreateCarpoolTripRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCarpoolTripRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCarpoolTripRequest;
  static deserializeBinaryFromReader(message: CreateCarpoolTripRequest, reader: jspb.BinaryReader): CreateCarpoolTripRequest;
}

export namespace CreateCarpoolTripRequest {
  export type AsObject = {
    departureLatitude: number;
    departureLongitude: number;
    departureAddress: string;
    destinationLatitude: number;
    destinationLongitude: number;
    destinationAddress: string;
    departureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    isRoundTrip: boolean;
    returnTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    totalSeats: number;
    priceCents: number;
    paymentMethodsList: Array<string>;
    gearRestriction: number;
    note?: string;
    adVerificationToken?: string;
    dropoffLocation?: string;
    privateDepartureAddress?: string;
    policyVersionId?: number;
    vehicleImageUrl?: string;
    vehicleImageFileId?: string;
    publishMethod: CarpoolPublishMethod;
  };

  export enum ReturnTimeCase {
    _RETURN_TIME_NOT_SET = 0,
    RETURN_TIME = 9,
  }

  export enum NoteCase {
    _NOTE_NOT_SET = 0,
    NOTE = 14,
  }

  export enum AdVerificationTokenCase {
    _AD_VERIFICATION_TOKEN_NOT_SET = 0,
    AD_VERIFICATION_TOKEN = 15,
  }

  export enum DropoffLocationCase {
    _DROPOFF_LOCATION_NOT_SET = 0,
    DROPOFF_LOCATION = 16,
  }

  export enum PrivateDepartureAddressCase {
    _PRIVATE_DEPARTURE_ADDRESS_NOT_SET = 0,
    PRIVATE_DEPARTURE_ADDRESS = 17,
  }

  export enum PolicyVersionIdCase {
    _POLICY_VERSION_ID_NOT_SET = 0,
    POLICY_VERSION_ID = 18,
  }

  export enum VehicleImageUrlCase {
    _VEHICLE_IMAGE_URL_NOT_SET = 0,
    VEHICLE_IMAGE_URL = 19,
  }

  export enum VehicleImageFileIdCase {
    _VEHICLE_IMAGE_FILE_ID_NOT_SET = 0,
    VEHICLE_IMAGE_FILE_ID = 20,
  }
}

export class CarpoolSubscriptionEntitlement extends jspb.Message {
  getId(): string;
  setId(value: string): CarpoolSubscriptionEntitlement;

  getUserId(): number;
  setUserId(value: number): CarpoolSubscriptionEntitlement;

  getPlatform(): string;
  setPlatform(value: string): CarpoolSubscriptionEntitlement;

  getProductId(): string;
  setProductId(value: string): CarpoolSubscriptionEntitlement;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): CarpoolSubscriptionEntitlement;
  hasExpiresAt(): boolean;
  clearExpiresAt(): CarpoolSubscriptionEntitlement;

  getRevokedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRevokedAt(value?: google_protobuf_timestamp_pb.Timestamp): CarpoolSubscriptionEntitlement;
  hasRevokedAt(): boolean;
  clearRevokedAt(): CarpoolSubscriptionEntitlement;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): CarpoolSubscriptionEntitlement;
  hasCreatedAt(): boolean;
  clearCreatedAt(): CarpoolSubscriptionEntitlement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CarpoolSubscriptionEntitlement.AsObject;
  static toObject(includeInstance: boolean, msg: CarpoolSubscriptionEntitlement): CarpoolSubscriptionEntitlement.AsObject;
  static serializeBinaryToWriter(message: CarpoolSubscriptionEntitlement, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CarpoolSubscriptionEntitlement;
  static deserializeBinaryFromReader(message: CarpoolSubscriptionEntitlement, reader: jspb.BinaryReader): CarpoolSubscriptionEntitlement;
}

export namespace CarpoolSubscriptionEntitlement {
  export type AsObject = {
    id: string;
    userId: number;
    platform: string;
    productId: string;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    revokedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };

  export enum RevokedAtCase {
    _REVOKED_AT_NOT_SET = 0,
    REVOKED_AT = 6,
  }
}

export class GetMyCarpoolSubscriptionRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyCarpoolSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyCarpoolSubscriptionRequest): GetMyCarpoolSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: GetMyCarpoolSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyCarpoolSubscriptionRequest;
  static deserializeBinaryFromReader(message: GetMyCarpoolSubscriptionRequest, reader: jspb.BinaryReader): GetMyCarpoolSubscriptionRequest;
}

export namespace GetMyCarpoolSubscriptionRequest {
  export type AsObject = {
  };
}

export class GetMyCarpoolSubscriptionResponse extends jspb.Message {
  getActive(): boolean;
  setActive(value: boolean): GetMyCarpoolSubscriptionResponse;

  getEntitlement(): CarpoolSubscriptionEntitlement | undefined;
  setEntitlement(value?: CarpoolSubscriptionEntitlement): GetMyCarpoolSubscriptionResponse;
  hasEntitlement(): boolean;
  clearEntitlement(): GetMyCarpoolSubscriptionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetMyCarpoolSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetMyCarpoolSubscriptionResponse): GetMyCarpoolSubscriptionResponse.AsObject;
  static serializeBinaryToWriter(message: GetMyCarpoolSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetMyCarpoolSubscriptionResponse;
  static deserializeBinaryFromReader(message: GetMyCarpoolSubscriptionResponse, reader: jspb.BinaryReader): GetMyCarpoolSubscriptionResponse;
}

export namespace GetMyCarpoolSubscriptionResponse {
  export type AsObject = {
    active: boolean;
    entitlement?: CarpoolSubscriptionEntitlement.AsObject;
  };

  export enum EntitlementCase {
    _ENTITLEMENT_NOT_SET = 0,
    ENTITLEMENT = 2,
  }
}

export class AdminGrantCarpoolSubscriptionRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): AdminGrantCarpoolSubscriptionRequest;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminGrantCarpoolSubscriptionRequest;
  hasExpiresAt(): boolean;
  clearExpiresAt(): AdminGrantCarpoolSubscriptionRequest;

  getReason(): string;
  setReason(value: string): AdminGrantCarpoolSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGrantCarpoolSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGrantCarpoolSubscriptionRequest): AdminGrantCarpoolSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: AdminGrantCarpoolSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGrantCarpoolSubscriptionRequest;
  static deserializeBinaryFromReader(message: AdminGrantCarpoolSubscriptionRequest, reader: jspb.BinaryReader): AdminGrantCarpoolSubscriptionRequest;
}

export namespace AdminGrantCarpoolSubscriptionRequest {
  export type AsObject = {
    userId: number;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    reason: string;
  };
}

export class AdminRevokeCarpoolSubscriptionRequest extends jspb.Message {
  getEntitlementId(): string;
  setEntitlementId(value: string): AdminRevokeCarpoolSubscriptionRequest;

  getReason(): string;
  setReason(value: string): AdminRevokeCarpoolSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminRevokeCarpoolSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminRevokeCarpoolSubscriptionRequest): AdminRevokeCarpoolSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: AdminRevokeCarpoolSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminRevokeCarpoolSubscriptionRequest;
  static deserializeBinaryFromReader(message: AdminRevokeCarpoolSubscriptionRequest, reader: jspb.BinaryReader): AdminRevokeCarpoolSubscriptionRequest;
}

export namespace AdminRevokeCarpoolSubscriptionRequest {
  export type AsObject = {
    entitlementId: string;
    reason: string;
  };
}

export class AdminListCarpoolSubscriptionsRequest extends jspb.Message {
  getUserId(): number;
  setUserId(value: number): AdminListCarpoolSubscriptionsRequest;
  hasUserId(): boolean;
  clearUserId(): AdminListCarpoolSubscriptionsRequest;

  getPage(): number;
  setPage(value: number): AdminListCarpoolSubscriptionsRequest;

  getLimit(): number;
  setLimit(value: number): AdminListCarpoolSubscriptionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListCarpoolSubscriptionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListCarpoolSubscriptionsRequest): AdminListCarpoolSubscriptionsRequest.AsObject;
  static serializeBinaryToWriter(message: AdminListCarpoolSubscriptionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListCarpoolSubscriptionsRequest;
  static deserializeBinaryFromReader(message: AdminListCarpoolSubscriptionsRequest, reader: jspb.BinaryReader): AdminListCarpoolSubscriptionsRequest;
}

export namespace AdminListCarpoolSubscriptionsRequest {
  export type AsObject = {
    userId?: number;
    page: number;
    limit: number;
  };

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 1,
  }
}

export class AdminListCarpoolSubscriptionsResponse extends jspb.Message {
  getEntitlementsList(): Array<CarpoolSubscriptionEntitlement>;
  setEntitlementsList(value: Array<CarpoolSubscriptionEntitlement>): AdminListCarpoolSubscriptionsResponse;
  clearEntitlementsList(): AdminListCarpoolSubscriptionsResponse;
  addEntitlements(value?: CarpoolSubscriptionEntitlement, index?: number): CarpoolSubscriptionEntitlement;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListCarpoolSubscriptionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListCarpoolSubscriptionsResponse): AdminListCarpoolSubscriptionsResponse.AsObject;
  static serializeBinaryToWriter(message: AdminListCarpoolSubscriptionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListCarpoolSubscriptionsResponse;
  static deserializeBinaryFromReader(message: AdminListCarpoolSubscriptionsResponse, reader: jspb.BinaryReader): AdminListCarpoolSubscriptionsResponse;
}

export namespace AdminListCarpoolSubscriptionsResponse {
  export type AsObject = {
    entitlementsList: Array<CarpoolSubscriptionEntitlement.AsObject>;
  };
}

export class ListCarpoolTripsRequest extends jspb.Message {
  getUserLatitude(): number;
  setUserLatitude(value: number): ListCarpoolTripsRequest;
  hasUserLatitude(): boolean;
  clearUserLatitude(): ListCarpoolTripsRequest;

  getUserLongitude(): number;
  setUserLongitude(value: number): ListCarpoolTripsRequest;
  hasUserLongitude(): boolean;
  clearUserLongitude(): ListCarpoolTripsRequest;

  getDestinationQuery(): string;
  setDestinationQuery(value: string): ListCarpoolTripsRequest;
  hasDestinationQuery(): boolean;
  clearDestinationQuery(): ListCarpoolTripsRequest;

  getPage(): number;
  setPage(value: number): ListCarpoolTripsRequest;
  hasPage(): boolean;
  clearPage(): ListCarpoolTripsRequest;

  getLimit(): number;
  setLimit(value: number): ListCarpoolTripsRequest;
  hasLimit(): boolean;
  clearLimit(): ListCarpoolTripsRequest;

  getDriverId(): number;
  setDriverId(value: number): ListCarpoolTripsRequest;
  hasDriverId(): boolean;
  clearDriverId(): ListCarpoolTripsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCarpoolTripsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListCarpoolTripsRequest): ListCarpoolTripsRequest.AsObject;
  static serializeBinaryToWriter(message: ListCarpoolTripsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCarpoolTripsRequest;
  static deserializeBinaryFromReader(message: ListCarpoolTripsRequest, reader: jspb.BinaryReader): ListCarpoolTripsRequest;
}

export namespace ListCarpoolTripsRequest {
  export type AsObject = {
    userLatitude?: number;
    userLongitude?: number;
    destinationQuery?: string;
    page?: number;
    limit?: number;
    driverId?: number;
  };

  export enum UserLatitudeCase {
    _USER_LATITUDE_NOT_SET = 0,
    USER_LATITUDE = 1,
  }

  export enum UserLongitudeCase {
    _USER_LONGITUDE_NOT_SET = 0,
    USER_LONGITUDE = 2,
  }

  export enum DestinationQueryCase {
    _DESTINATION_QUERY_NOT_SET = 0,
    DESTINATION_QUERY = 3,
  }

  export enum PageCase {
    _PAGE_NOT_SET = 0,
    PAGE = 4,
  }

  export enum LimitCase {
    _LIMIT_NOT_SET = 0,
    LIMIT = 5,
  }

  export enum DriverIdCase {
    _DRIVER_ID_NOT_SET = 0,
    DRIVER_ID = 6,
  }
}

export class ListCarpoolTripsResponse extends jspb.Message {
  getTripsList(): Array<CarpoolTrip>;
  setTripsList(value: Array<CarpoolTrip>): ListCarpoolTripsResponse;
  clearTripsList(): ListCarpoolTripsResponse;
  addTrips(value?: CarpoolTrip, index?: number): CarpoolTrip;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListCarpoolTripsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListCarpoolTripsResponse): ListCarpoolTripsResponse.AsObject;
  static serializeBinaryToWriter(message: ListCarpoolTripsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListCarpoolTripsResponse;
  static deserializeBinaryFromReader(message: ListCarpoolTripsResponse, reader: jspb.BinaryReader): ListCarpoolTripsResponse;
}

export namespace ListCarpoolTripsResponse {
  export type AsObject = {
    tripsList: Array<CarpoolTrip.AsObject>;
  };
}

export class GetCarpoolTripDetailRequest extends jspb.Message {
  getId(): string;
  setId(value: string): GetCarpoolTripDetailRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetCarpoolTripDetailRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetCarpoolTripDetailRequest): GetCarpoolTripDetailRequest.AsObject;
  static serializeBinaryToWriter(message: GetCarpoolTripDetailRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetCarpoolTripDetailRequest;
  static deserializeBinaryFromReader(message: GetCarpoolTripDetailRequest, reader: jspb.BinaryReader): GetCarpoolTripDetailRequest;
}

export namespace GetCarpoolTripDetailRequest {
  export type AsObject = {
    id: string;
  };
}

export class TripDetailResponse extends jspb.Message {
  getTrip(): CarpoolTrip | undefined;
  setTrip(value?: CarpoolTrip): TripDetailResponse;
  hasTrip(): boolean;
  clearTrip(): TripDetailResponse;

  getStopoversList(): Array<Stopover>;
  setStopoversList(value: Array<Stopover>): TripDetailResponse;
  clearStopoversList(): TripDetailResponse;
  addStopovers(value?: Stopover, index?: number): Stopover;

  getAcceptedBookingsList(): Array<CarpoolBooking>;
  setAcceptedBookingsList(value: Array<CarpoolBooking>): TripDetailResponse;
  clearAcceptedBookingsList(): TripDetailResponse;
  addAcceptedBookings(value?: CarpoolBooking, index?: number): CarpoolBooking;

  getPendingBookingsList(): Array<CarpoolBooking>;
  setPendingBookingsList(value: Array<CarpoolBooking>): TripDetailResponse;
  clearPendingBookingsList(): TripDetailResponse;
  addPendingBookings(value?: CarpoolBooking, index?: number): CarpoolBooking;

  getDriverNickname(): string;
  setDriverNickname(value: string): TripDetailResponse;

  getDriverAvatarUrl(): string;
  setDriverAvatarUrl(value: string): TripDetailResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TripDetailResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TripDetailResponse): TripDetailResponse.AsObject;
  static serializeBinaryToWriter(message: TripDetailResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TripDetailResponse;
  static deserializeBinaryFromReader(message: TripDetailResponse, reader: jspb.BinaryReader): TripDetailResponse;
}

export namespace TripDetailResponse {
  export type AsObject = {
    trip?: CarpoolTrip.AsObject;
    stopoversList: Array<Stopover.AsObject>;
    acceptedBookingsList: Array<CarpoolBooking.AsObject>;
    pendingBookingsList: Array<CarpoolBooking.AsObject>;
    driverNickname: string;
    driverAvatarUrl: string;
  };
}

export class ApplyCarpoolRequest extends jspb.Message {
  getTripId(): string;
  setTripId(value: string): ApplyCarpoolRequest;

  getSeatsBooked(): number;
  setSeatsBooked(value: number): ApplyCarpoolRequest;

  getProposedPickupLatitude(): number;
  setProposedPickupLatitude(value: number): ApplyCarpoolRequest;
  hasProposedPickupLatitude(): boolean;
  clearProposedPickupLatitude(): ApplyCarpoolRequest;

  getProposedPickupLongitude(): number;
  setProposedPickupLongitude(value: number): ApplyCarpoolRequest;
  hasProposedPickupLongitude(): boolean;
  clearProposedPickupLongitude(): ApplyCarpoolRequest;

  getProposedPickupAddress(): string;
  setProposedPickupAddress(value: string): ApplyCarpoolRequest;
  hasProposedPickupAddress(): boolean;
  clearProposedPickupAddress(): ApplyCarpoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApplyCarpoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ApplyCarpoolRequest): ApplyCarpoolRequest.AsObject;
  static serializeBinaryToWriter(message: ApplyCarpoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApplyCarpoolRequest;
  static deserializeBinaryFromReader(message: ApplyCarpoolRequest, reader: jspb.BinaryReader): ApplyCarpoolRequest;
}

export namespace ApplyCarpoolRequest {
  export type AsObject = {
    tripId: string;
    seatsBooked: number;
    proposedPickupLatitude?: number;
    proposedPickupLongitude?: number;
    proposedPickupAddress?: string;
  };

  export enum ProposedPickupLatitudeCase {
    _PROPOSED_PICKUP_LATITUDE_NOT_SET = 0,
    PROPOSED_PICKUP_LATITUDE = 3,
  }

  export enum ProposedPickupLongitudeCase {
    _PROPOSED_PICKUP_LONGITUDE_NOT_SET = 0,
    PROPOSED_PICKUP_LONGITUDE = 4,
  }

  export enum ProposedPickupAddressCase {
    _PROPOSED_PICKUP_ADDRESS_NOT_SET = 0,
    PROPOSED_PICKUP_ADDRESS = 5,
  }
}

export class HandleBookingRequest extends jspb.Message {
  getBookingId(): string;
  setBookingId(value: string): HandleBookingRequest;

  getAccept(): boolean;
  setAccept(value: boolean): HandleBookingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): HandleBookingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: HandleBookingRequest): HandleBookingRequest.AsObject;
  static serializeBinaryToWriter(message: HandleBookingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): HandleBookingRequest;
  static deserializeBinaryFromReader(message: HandleBookingRequest, reader: jspb.BinaryReader): HandleBookingRequest;
}

export namespace HandleBookingRequest {
  export type AsObject = {
    bookingId: string;
    accept: boolean;
  };
}

export class ReorderStopoversRequest extends jspb.Message {
  getTripId(): string;
  setTripId(value: string): ReorderStopoversRequest;

  getStopoverIdsList(): Array<string>;
  setStopoverIdsList(value: Array<string>): ReorderStopoversRequest;
  clearStopoverIdsList(): ReorderStopoversRequest;
  addStopoverIds(value: string, index?: number): ReorderStopoversRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReorderStopoversRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReorderStopoversRequest): ReorderStopoversRequest.AsObject;
  static serializeBinaryToWriter(message: ReorderStopoversRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReorderStopoversRequest;
  static deserializeBinaryFromReader(message: ReorderStopoversRequest, reader: jspb.BinaryReader): ReorderStopoversRequest;
}

export namespace ReorderStopoversRequest {
  export type AsObject = {
    tripId: string;
    stopoverIdsList: Array<string>;
  };
}

export class SearchAddressRequest extends jspb.Message {
  getQuery(): string;
  setQuery(value: string): SearchAddressRequest;

  getLanguage(): string;
  setLanguage(value: string): SearchAddressRequest;
  hasLanguage(): boolean;
  clearLanguage(): SearchAddressRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAddressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAddressRequest): SearchAddressRequest.AsObject;
  static serializeBinaryToWriter(message: SearchAddressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAddressRequest;
  static deserializeBinaryFromReader(message: SearchAddressRequest, reader: jspb.BinaryReader): SearchAddressRequest;
}

export namespace SearchAddressRequest {
  export type AsObject = {
    query: string;
    language?: string;
  };

  export enum LanguageCase {
    _LANGUAGE_NOT_SET = 0,
    LANGUAGE = 2,
  }
}

export class MapAddressSuggestion extends jspb.Message {
  getDisplayName(): string;
  setDisplayName(value: string): MapAddressSuggestion;

  getLat(): number;
  setLat(value: number): MapAddressSuggestion;

  getLon(): number;
  setLon(value: number): MapAddressSuggestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapAddressSuggestion.AsObject;
  static toObject(includeInstance: boolean, msg: MapAddressSuggestion): MapAddressSuggestion.AsObject;
  static serializeBinaryToWriter(message: MapAddressSuggestion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapAddressSuggestion;
  static deserializeBinaryFromReader(message: MapAddressSuggestion, reader: jspb.BinaryReader): MapAddressSuggestion;
}

export namespace MapAddressSuggestion {
  export type AsObject = {
    displayName: string;
    lat: number;
    lon: number;
  };
}

export class SearchAddressResponse extends jspb.Message {
  getSuggestionsList(): Array<MapAddressSuggestion>;
  setSuggestionsList(value: Array<MapAddressSuggestion>): SearchAddressResponse;
  clearSuggestionsList(): SearchAddressResponse;
  addSuggestions(value?: MapAddressSuggestion, index?: number): MapAddressSuggestion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SearchAddressResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SearchAddressResponse): SearchAddressResponse.AsObject;
  static serializeBinaryToWriter(message: SearchAddressResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SearchAddressResponse;
  static deserializeBinaryFromReader(message: SearchAddressResponse, reader: jspb.BinaryReader): SearchAddressResponse;
}

export namespace SearchAddressResponse {
  export type AsObject = {
    suggestionsList: Array<MapAddressSuggestion.AsObject>;
  };
}

export class ListMyCarpoolTripsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListMyCarpoolTripsRequest;

  getLimit(): number;
  setLimit(value: number): ListMyCarpoolTripsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyCarpoolTripsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyCarpoolTripsRequest): ListMyCarpoolTripsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMyCarpoolTripsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyCarpoolTripsRequest;
  static deserializeBinaryFromReader(message: ListMyCarpoolTripsRequest, reader: jspb.BinaryReader): ListMyCarpoolTripsRequest;
}

export namespace ListMyCarpoolTripsRequest {
  export type AsObject = {
    page: number;
    limit: number;
  };
}

export class ListMyCarpoolTripsResponse extends jspb.Message {
  getTripsList(): Array<CarpoolTrip>;
  setTripsList(value: Array<CarpoolTrip>): ListMyCarpoolTripsResponse;
  clearTripsList(): ListMyCarpoolTripsResponse;
  addTrips(value?: CarpoolTrip, index?: number): CarpoolTrip;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyCarpoolTripsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyCarpoolTripsResponse): ListMyCarpoolTripsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMyCarpoolTripsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyCarpoolTripsResponse;
  static deserializeBinaryFromReader(message: ListMyCarpoolTripsResponse, reader: jspb.BinaryReader): ListMyCarpoolTripsResponse;
}

export namespace ListMyCarpoolTripsResponse {
  export type AsObject = {
    tripsList: Array<CarpoolTrip.AsObject>;
  };
}

export class MyCarpoolBookingDetail extends jspb.Message {
  getBooking(): CarpoolBooking | undefined;
  setBooking(value?: CarpoolBooking): MyCarpoolBookingDetail;
  hasBooking(): boolean;
  clearBooking(): MyCarpoolBookingDetail;

  getTrip(): CarpoolTrip | undefined;
  setTrip(value?: CarpoolTrip): MyCarpoolBookingDetail;
  hasTrip(): boolean;
  clearTrip(): MyCarpoolBookingDetail;

  getDriverNickname(): string;
  setDriverNickname(value: string): MyCarpoolBookingDetail;

  getDriverAvatarUrl(): string;
  setDriverAvatarUrl(value: string): MyCarpoolBookingDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MyCarpoolBookingDetail.AsObject;
  static toObject(includeInstance: boolean, msg: MyCarpoolBookingDetail): MyCarpoolBookingDetail.AsObject;
  static serializeBinaryToWriter(message: MyCarpoolBookingDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MyCarpoolBookingDetail;
  static deserializeBinaryFromReader(message: MyCarpoolBookingDetail, reader: jspb.BinaryReader): MyCarpoolBookingDetail;
}

export namespace MyCarpoolBookingDetail {
  export type AsObject = {
    booking?: CarpoolBooking.AsObject;
    trip?: CarpoolTrip.AsObject;
    driverNickname: string;
    driverAvatarUrl: string;
  };
}

export class ListMyCarpoolBookingsRequest extends jspb.Message {
  getPage(): number;
  setPage(value: number): ListMyCarpoolBookingsRequest;

  getLimit(): number;
  setLimit(value: number): ListMyCarpoolBookingsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyCarpoolBookingsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyCarpoolBookingsRequest): ListMyCarpoolBookingsRequest.AsObject;
  static serializeBinaryToWriter(message: ListMyCarpoolBookingsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyCarpoolBookingsRequest;
  static deserializeBinaryFromReader(message: ListMyCarpoolBookingsRequest, reader: jspb.BinaryReader): ListMyCarpoolBookingsRequest;
}

export namespace ListMyCarpoolBookingsRequest {
  export type AsObject = {
    page: number;
    limit: number;
  };
}

export class ListMyCarpoolBookingsResponse extends jspb.Message {
  getBookingsList(): Array<MyCarpoolBookingDetail>;
  setBookingsList(value: Array<MyCarpoolBookingDetail>): ListMyCarpoolBookingsResponse;
  clearBookingsList(): ListMyCarpoolBookingsResponse;
  addBookings(value?: MyCarpoolBookingDetail, index?: number): MyCarpoolBookingDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListMyCarpoolBookingsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListMyCarpoolBookingsResponse): ListMyCarpoolBookingsResponse.AsObject;
  static serializeBinaryToWriter(message: ListMyCarpoolBookingsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListMyCarpoolBookingsResponse;
  static deserializeBinaryFromReader(message: ListMyCarpoolBookingsResponse, reader: jspb.BinaryReader): ListMyCarpoolBookingsResponse;
}

export namespace ListMyCarpoolBookingsResponse {
  export type AsObject = {
    bookingsList: Array<MyCarpoolBookingDetail.AsObject>;
  };
}

export class CancelCarpoolTripRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CancelCarpoolTripRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelCarpoolTripRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelCarpoolTripRequest): CancelCarpoolTripRequest.AsObject;
  static serializeBinaryToWriter(message: CancelCarpoolTripRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelCarpoolTripRequest;
  static deserializeBinaryFromReader(message: CancelCarpoolTripRequest, reader: jspb.BinaryReader): CancelCarpoolTripRequest;
}

export namespace CancelCarpoolTripRequest {
  export type AsObject = {
    id: string;
  };
}

export class CancelCarpoolBookingRequest extends jspb.Message {
  getId(): string;
  setId(value: string): CancelCarpoolBookingRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CancelCarpoolBookingRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CancelCarpoolBookingRequest): CancelCarpoolBookingRequest.AsObject;
  static serializeBinaryToWriter(message: CancelCarpoolBookingRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CancelCarpoolBookingRequest;
  static deserializeBinaryFromReader(message: CancelCarpoolBookingRequest, reader: jspb.BinaryReader): CancelCarpoolBookingRequest;
}

export namespace CancelCarpoolBookingRequest {
  export type AsObject = {
    id: string;
  };
}

export class UpdateCarpoolTripRequest extends jspb.Message {
  getId(): string;
  setId(value: string): UpdateCarpoolTripRequest;

  getDepartureLatitude(): number;
  setDepartureLatitude(value: number): UpdateCarpoolTripRequest;

  getDepartureLongitude(): number;
  setDepartureLongitude(value: number): UpdateCarpoolTripRequest;

  getDepartureAddress(): string;
  setDepartureAddress(value: string): UpdateCarpoolTripRequest;

  getDestinationLatitude(): number;
  setDestinationLatitude(value: number): UpdateCarpoolTripRequest;

  getDestinationLongitude(): number;
  setDestinationLongitude(value: number): UpdateCarpoolTripRequest;

  getDestinationAddress(): string;
  setDestinationAddress(value: string): UpdateCarpoolTripRequest;

  getDepartureTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDepartureTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateCarpoolTripRequest;
  hasDepartureTime(): boolean;
  clearDepartureTime(): UpdateCarpoolTripRequest;

  getIsRoundTrip(): boolean;
  setIsRoundTrip(value: boolean): UpdateCarpoolTripRequest;

  getReturnTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setReturnTime(value?: google_protobuf_timestamp_pb.Timestamp): UpdateCarpoolTripRequest;
  hasReturnTime(): boolean;
  clearReturnTime(): UpdateCarpoolTripRequest;

  getTotalSeats(): number;
  setTotalSeats(value: number): UpdateCarpoolTripRequest;

  getPriceCents(): number;
  setPriceCents(value: number): UpdateCarpoolTripRequest;

  getPaymentMethodsList(): Array<string>;
  setPaymentMethodsList(value: Array<string>): UpdateCarpoolTripRequest;
  clearPaymentMethodsList(): UpdateCarpoolTripRequest;
  addPaymentMethods(value: string, index?: number): UpdateCarpoolTripRequest;

  getGearRestriction(): number;
  setGearRestriction(value: number): UpdateCarpoolTripRequest;

  getNote(): string;
  setNote(value: string): UpdateCarpoolTripRequest;
  hasNote(): boolean;
  clearNote(): UpdateCarpoolTripRequest;

  getDropoffLocation(): string;
  setDropoffLocation(value: string): UpdateCarpoolTripRequest;
  hasDropoffLocation(): boolean;
  clearDropoffLocation(): UpdateCarpoolTripRequest;

  getPrivateDepartureAddress(): string;
  setPrivateDepartureAddress(value: string): UpdateCarpoolTripRequest;
  hasPrivateDepartureAddress(): boolean;
  clearPrivateDepartureAddress(): UpdateCarpoolTripRequest;

  getVehicleImageUrl(): string;
  setVehicleImageUrl(value: string): UpdateCarpoolTripRequest;
  hasVehicleImageUrl(): boolean;
  clearVehicleImageUrl(): UpdateCarpoolTripRequest;

  getVehicleImageFileId(): string;
  setVehicleImageFileId(value: string): UpdateCarpoolTripRequest;
  hasVehicleImageFileId(): boolean;
  clearVehicleImageFileId(): UpdateCarpoolTripRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCarpoolTripRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCarpoolTripRequest): UpdateCarpoolTripRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCarpoolTripRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCarpoolTripRequest;
  static deserializeBinaryFromReader(message: UpdateCarpoolTripRequest, reader: jspb.BinaryReader): UpdateCarpoolTripRequest;
}

export namespace UpdateCarpoolTripRequest {
  export type AsObject = {
    id: string;
    departureLatitude: number;
    departureLongitude: number;
    departureAddress: string;
    destinationLatitude: number;
    destinationLongitude: number;
    destinationAddress: string;
    departureTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    isRoundTrip: boolean;
    returnTime?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    totalSeats: number;
    priceCents: number;
    paymentMethodsList: Array<string>;
    gearRestriction: number;
    note?: string;
    dropoffLocation?: string;
    privateDepartureAddress?: string;
    vehicleImageUrl?: string;
    vehicleImageFileId?: string;
  };

  export enum ReturnTimeCase {
    _RETURN_TIME_NOT_SET = 0,
    RETURN_TIME = 10,
  }

  export enum NoteCase {
    _NOTE_NOT_SET = 0,
    NOTE = 15,
  }

  export enum DropoffLocationCase {
    _DROPOFF_LOCATION_NOT_SET = 0,
    DROPOFF_LOCATION = 16,
  }

  export enum PrivateDepartureAddressCase {
    _PRIVATE_DEPARTURE_ADDRESS_NOT_SET = 0,
    PRIVATE_DEPARTURE_ADDRESS = 17,
  }

  export enum VehicleImageUrlCase {
    _VEHICLE_IMAGE_URL_NOT_SET = 0,
    VEHICLE_IMAGE_URL = 18,
  }

  export enum VehicleImageFileIdCase {
    _VEHICLE_IMAGE_FILE_ID_NOT_SET = 0,
    VEHICLE_IMAGE_FILE_ID = 19,
  }
}

export class ClaimCarpoolAdRewardRequest extends jspb.Message {
  getAdUnitId(): string;
  setAdUnitId(value: string): ClaimCarpoolAdRewardRequest;
  hasAdUnitId(): boolean;
  clearAdUnitId(): ClaimCarpoolAdRewardRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimCarpoolAdRewardRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimCarpoolAdRewardRequest): ClaimCarpoolAdRewardRequest.AsObject;
  static serializeBinaryToWriter(message: ClaimCarpoolAdRewardRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimCarpoolAdRewardRequest;
  static deserializeBinaryFromReader(message: ClaimCarpoolAdRewardRequest, reader: jspb.BinaryReader): ClaimCarpoolAdRewardRequest;
}

export namespace ClaimCarpoolAdRewardRequest {
  export type AsObject = {
    adUnitId?: string;
  };

  export enum AdUnitIdCase {
    _AD_UNIT_ID_NOT_SET = 0,
    AD_UNIT_ID = 1,
  }
}

export class ClaimCarpoolAdRewardResponse extends jspb.Message {
  getAdRewardToken(): string;
  setAdRewardToken(value: string): ClaimCarpoolAdRewardResponse;

  getExpiresAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiresAt(value?: google_protobuf_timestamp_pb.Timestamp): ClaimCarpoolAdRewardResponse;
  hasExpiresAt(): boolean;
  clearExpiresAt(): ClaimCarpoolAdRewardResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimCarpoolAdRewardResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimCarpoolAdRewardResponse): ClaimCarpoolAdRewardResponse.AsObject;
  static serializeBinaryToWriter(message: ClaimCarpoolAdRewardResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimCarpoolAdRewardResponse;
  static deserializeBinaryFromReader(message: ClaimCarpoolAdRewardResponse, reader: jspb.BinaryReader): ClaimCarpoolAdRewardResponse;
}

export namespace ClaimCarpoolAdRewardResponse {
  export type AsObject = {
    adRewardToken: string;
    expiresAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class PurchaseCarpoolSubscriptionRequest extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): PurchaseCarpoolSubscriptionRequest;

  getProductId(): string;
  setProductId(value: string): PurchaseCarpoolSubscriptionRequest;

  getTransactionId(): string;
  setTransactionId(value: string): PurchaseCarpoolSubscriptionRequest;

  getOrderId(): string;
  setOrderId(value: string): PurchaseCarpoolSubscriptionRequest;
  hasOrderId(): boolean;
  clearOrderId(): PurchaseCarpoolSubscriptionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseCarpoolSubscriptionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseCarpoolSubscriptionRequest): PurchaseCarpoolSubscriptionRequest.AsObject;
  static serializeBinaryToWriter(message: PurchaseCarpoolSubscriptionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseCarpoolSubscriptionRequest;
  static deserializeBinaryFromReader(message: PurchaseCarpoolSubscriptionRequest, reader: jspb.BinaryReader): PurchaseCarpoolSubscriptionRequest;
}

export namespace PurchaseCarpoolSubscriptionRequest {
  export type AsObject = {
    platform: string;
    productId: string;
    transactionId: string;
    orderId?: string;
  };

  export enum OrderIdCase {
    _ORDER_ID_NOT_SET = 0,
    ORDER_ID = 4,
  }
}

export class PurchaseCarpoolSubscriptionResponse extends jspb.Message {
  getEntitlement(): CarpoolSubscriptionEntitlement | undefined;
  setEntitlement(value?: CarpoolSubscriptionEntitlement): PurchaseCarpoolSubscriptionResponse;
  hasEntitlement(): boolean;
  clearEntitlement(): PurchaseCarpoolSubscriptionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PurchaseCarpoolSubscriptionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PurchaseCarpoolSubscriptionResponse): PurchaseCarpoolSubscriptionResponse.AsObject;
  static serializeBinaryToWriter(message: PurchaseCarpoolSubscriptionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PurchaseCarpoolSubscriptionResponse;
  static deserializeBinaryFromReader(message: PurchaseCarpoolSubscriptionResponse, reader: jspb.BinaryReader): PurchaseCarpoolSubscriptionResponse;
}

export namespace PurchaseCarpoolSubscriptionResponse {
  export type AsObject = {
    entitlement?: CarpoolSubscriptionEntitlement.AsObject;
  };
}

export class InitiateCarpoolPassCheckoutRequest extends jspb.Message {
  getProductId(): string;
  setProductId(value: string): InitiateCarpoolPassCheckoutRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateCarpoolPassCheckoutRequest.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateCarpoolPassCheckoutRequest): InitiateCarpoolPassCheckoutRequest.AsObject;
  static serializeBinaryToWriter(message: InitiateCarpoolPassCheckoutRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateCarpoolPassCheckoutRequest;
  static deserializeBinaryFromReader(message: InitiateCarpoolPassCheckoutRequest, reader: jspb.BinaryReader): InitiateCarpoolPassCheckoutRequest;
}

export namespace InitiateCarpoolPassCheckoutRequest {
  export type AsObject = {
    productId: string;
  };
}

export class InitiateCarpoolPassCheckoutResponse extends jspb.Message {
  getOrderId(): string;
  setOrderId(value: string): InitiateCarpoolPassCheckoutResponse;

  getStripeCheckoutUrl(): string;
  setStripeCheckoutUrl(value: string): InitiateCarpoolPassCheckoutResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): InitiateCarpoolPassCheckoutResponse.AsObject;
  static toObject(includeInstance: boolean, msg: InitiateCarpoolPassCheckoutResponse): InitiateCarpoolPassCheckoutResponse.AsObject;
  static serializeBinaryToWriter(message: InitiateCarpoolPassCheckoutResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): InitiateCarpoolPassCheckoutResponse;
  static deserializeBinaryFromReader(message: InitiateCarpoolPassCheckoutResponse, reader: jspb.BinaryReader): InitiateCarpoolPassCheckoutResponse;
}

export namespace InitiateCarpoolPassCheckoutResponse {
  export type AsObject = {
    orderId: string;
    stripeCheckoutUrl: string;
  };
}

export enum CarpoolPublishMethod {
  CARPOOL_PUBLISH_METHOD_DIRECT = 0,
  CARPOOL_PUBLISH_METHOD_AD = 1,
  CARPOOL_PUBLISH_METHOD_MEMBERSHIP = 2,
}
