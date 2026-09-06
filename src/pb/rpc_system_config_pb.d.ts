import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class SystemConfig extends jspb.Message {
  getConfigKey(): string;
  setConfigKey(value: string): SystemConfig;

  getConfigValue(): string;
  setConfigValue(value: string): SystemConfig;

  getValueType(): string;
  setValueType(value: string): SystemConfig;

  getModuleName(): string;
  setModuleName(value: string): SystemConfig;

  getDescription(): string;
  setDescription(value: string): SystemConfig;

  getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): SystemConfig;
  hasUpdatedAt(): boolean;
  clearUpdatedAt(): SystemConfig;

  getLastUpdatedByEmail(): string;
  setLastUpdatedByEmail(value: string): SystemConfig;

  getLastUpdatedByUserId(): number;
  setLastUpdatedByUserId(value: number): SystemConfig;

  getLastUpdateReason(): string;
  setLastUpdateReason(value: string): SystemConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemConfig.AsObject;
  static toObject(includeInstance: boolean, msg: SystemConfig): SystemConfig.AsObject;
  static serializeBinaryToWriter(message: SystemConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemConfig;
  static deserializeBinaryFromReader(message: SystemConfig, reader: jspb.BinaryReader): SystemConfig;
}

export namespace SystemConfig {
  export type AsObject = {
    configKey: string;
    configValue: string;
    valueType: string;
    moduleName: string;
    description: string;
    updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    lastUpdatedByEmail: string;
    lastUpdatedByUserId: number;
    lastUpdateReason: string;
  };
}

export class ListSystemConfigsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSystemConfigsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListSystemConfigsRequest): ListSystemConfigsRequest.AsObject;
  static serializeBinaryToWriter(message: ListSystemConfigsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSystemConfigsRequest;
  static deserializeBinaryFromReader(message: ListSystemConfigsRequest, reader: jspb.BinaryReader): ListSystemConfigsRequest;
}

export namespace ListSystemConfigsRequest {
  export type AsObject = {
  };
}

export class ListSystemConfigsResponse extends jspb.Message {
  getConfigsList(): Array<SystemConfig>;
  setConfigsList(value: Array<SystemConfig>): ListSystemConfigsResponse;
  clearConfigsList(): ListSystemConfigsResponse;
  addConfigs(value?: SystemConfig, index?: number): SystemConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListSystemConfigsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListSystemConfigsResponse): ListSystemConfigsResponse.AsObject;
  static serializeBinaryToWriter(message: ListSystemConfigsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListSystemConfigsResponse;
  static deserializeBinaryFromReader(message: ListSystemConfigsResponse, reader: jspb.BinaryReader): ListSystemConfigsResponse;
}

export namespace ListSystemConfigsResponse {
  export type AsObject = {
    configsList: Array<SystemConfig.AsObject>;
  };
}

export class UpdateSystemConfigRequest extends jspb.Message {
  getConfigKey(): string;
  setConfigKey(value: string): UpdateSystemConfigRequest;

  getConfigValue(): string;
  setConfigValue(value: string): UpdateSystemConfigRequest;

  getReason(): string;
  setReason(value: string): UpdateSystemConfigRequest;

  getExpectedUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpectedUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UpdateSystemConfigRequest;
  hasExpectedUpdatedAt(): boolean;
  clearExpectedUpdatedAt(): UpdateSystemConfigRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSystemConfigRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSystemConfigRequest): UpdateSystemConfigRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateSystemConfigRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSystemConfigRequest;
  static deserializeBinaryFromReader(message: UpdateSystemConfigRequest, reader: jspb.BinaryReader): UpdateSystemConfigRequest;
}

export namespace UpdateSystemConfigRequest {
  export type AsObject = {
    configKey: string;
    configValue: string;
    reason: string;
    expectedUpdatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class UpdateSystemConfigResponse extends jspb.Message {
  getConfig(): SystemConfig | undefined;
  setConfig(value?: SystemConfig): UpdateSystemConfigResponse;
  hasConfig(): boolean;
  clearConfig(): UpdateSystemConfigResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateSystemConfigResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateSystemConfigResponse): UpdateSystemConfigResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateSystemConfigResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateSystemConfigResponse;
  static deserializeBinaryFromReader(message: UpdateSystemConfigResponse, reader: jspb.BinaryReader): UpdateSystemConfigResponse;
}

export namespace UpdateSystemConfigResponse {
  export type AsObject = {
    config?: SystemConfig.AsObject;
  };
}

export class FeatureAvailabilityItem extends jspb.Message {
  getEnabled(): boolean;
  setEnabled(value: boolean): FeatureAvailabilityItem;

  getReason(): string;
  setReason(value: string): FeatureAvailabilityItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FeatureAvailabilityItem.AsObject;
  static toObject(includeInstance: boolean, msg: FeatureAvailabilityItem): FeatureAvailabilityItem.AsObject;
  static serializeBinaryToWriter(message: FeatureAvailabilityItem, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FeatureAvailabilityItem;
  static deserializeBinaryFromReader(message: FeatureAvailabilityItem, reader: jspb.BinaryReader): FeatureAvailabilityItem;
}

export namespace FeatureAvailabilityItem {
  export type AsObject = {
    enabled: boolean;
    reason: string;
  };
}

export class GetFeatureAvailabilityRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureAvailabilityRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureAvailabilityRequest): GetFeatureAvailabilityRequest.AsObject;
  static serializeBinaryToWriter(message: GetFeatureAvailabilityRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureAvailabilityRequest;
  static deserializeBinaryFromReader(message: GetFeatureAvailabilityRequest, reader: jspb.BinaryReader): GetFeatureAvailabilityRequest;
}

export namespace GetFeatureAvailabilityRequest {
  export type AsObject = {
  };
}

export class GetFeatureAvailabilityResponse extends jspb.Message {
  getFeaturesMap(): jspb.Map<string, FeatureAvailabilityItem>;
  clearFeaturesMap(): GetFeatureAvailabilityResponse;

  getFetchedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setFetchedAt(value?: google_protobuf_timestamp_pb.Timestamp): GetFeatureAvailabilityResponse;
  hasFetchedAt(): boolean;
  clearFetchedAt(): GetFeatureAvailabilityResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetFeatureAvailabilityResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetFeatureAvailabilityResponse): GetFeatureAvailabilityResponse.AsObject;
  static serializeBinaryToWriter(message: GetFeatureAvailabilityResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetFeatureAvailabilityResponse;
  static deserializeBinaryFromReader(message: GetFeatureAvailabilityResponse, reader: jspb.BinaryReader): GetFeatureAvailabilityResponse;
}

export namespace GetFeatureAvailabilityResponse {
  export type AsObject = {
    featuresMap: Array<[string, FeatureAvailabilityItem.AsObject]>;
    fetchedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

