import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class GetAppVersionRequest extends jspb.Message {
  getPlatform(): string;
  setPlatform(value: string): GetAppVersionRequest;

  getCurrentVersion(): string;
  setCurrentVersion(value: string): GetAppVersionRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppVersionRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppVersionRequest): GetAppVersionRequest.AsObject;
  static serializeBinaryToWriter(message: GetAppVersionRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppVersionRequest;
  static deserializeBinaryFromReader(message: GetAppVersionRequest, reader: jspb.BinaryReader): GetAppVersionRequest;
}

export namespace GetAppVersionRequest {
  export type AsObject = {
    platform: string;
    currentVersion: string;
  };
}

export class MetadataVersion extends jspb.Message {
  getKey(): string;
  setKey(value: string): MetadataVersion;

  getLastUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setLastUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): MetadataVersion;
  hasLastUpdatedAt(): boolean;
  clearLastUpdatedAt(): MetadataVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetadataVersion.AsObject;
  static toObject(includeInstance: boolean, msg: MetadataVersion): MetadataVersion.AsObject;
  static serializeBinaryToWriter(message: MetadataVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetadataVersion;
  static deserializeBinaryFromReader(message: MetadataVersion, reader: jspb.BinaryReader): MetadataVersion;
}

export namespace MetadataVersion {
  export type AsObject = {
    key: string;
    lastUpdatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class GetAppVersionResponse extends jspb.Message {
  getMinVersion(): string;
  setMinVersion(value: string): GetAppVersionResponse;

  getLatestVersion(): string;
  setLatestVersion(value: string): GetAppVersionResponse;

  getTitle(): string;
  setTitle(value: string): GetAppVersionResponse;

  getMessage(): string;
  setMessage(value: string): GetAppVersionResponse;

  getStoreUrl(): string;
  setStoreUrl(value: string): GetAppVersionResponse;

  getForceUpdate(): boolean;
  setForceUpdate(value: boolean): GetAppVersionResponse;

  getMetadataVersionsList(): Array<MetadataVersion>;
  setMetadataVersionsList(value: Array<MetadataVersion>): GetAppVersionResponse;
  clearMetadataVersionsList(): GetAppVersionResponse;
  addMetadataVersions(value?: MetadataVersion, index?: number): MetadataVersion;

  getRemoteConfigsMap(): jspb.Map<string, string>;
  clearRemoteConfigsMap(): GetAppVersionResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetAppVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetAppVersionResponse): GetAppVersionResponse.AsObject;
  static serializeBinaryToWriter(message: GetAppVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetAppVersionResponse;
  static deserializeBinaryFromReader(message: GetAppVersionResponse, reader: jspb.BinaryReader): GetAppVersionResponse;
}

export namespace GetAppVersionResponse {
  export type AsObject = {
    minVersion: string;
    latestVersion: string;
    title: string;
    message: string;
    storeUrl: string;
    forceUpdate: boolean;
    metadataVersionsList: Array<MetadataVersion.AsObject>;
    remoteConfigsMap: Array<[string, string]>;
  };
}

