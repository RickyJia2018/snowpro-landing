import * as jspb from 'google-protobuf'

import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb'; // proto import: "google/protobuf/timestamp.proto"


export class UploadedFile extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): UploadedFile;

  getUserId(): number;
  setUserId(value: number): UploadedFile;

  getFileSize(): number;
  setFileSize(value: number): UploadedFile;

  getFileType(): string;
  setFileType(value: string): UploadedFile;

  getFilePath(): string;
  setFilePath(value: string): UploadedFile;

  getCategory(): string;
  setCategory(value: string): UploadedFile;

  getInUse(): boolean;
  setInUse(value: boolean): UploadedFile;

  getBucketName(): string;
  setBucketName(value: string): UploadedFile;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): UploadedFile;
  hasCreatedAt(): boolean;
  clearCreatedAt(): UploadedFile;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): UploadedFile;
  hasExpiredAt(): boolean;
  clearExpiredAt(): UploadedFile;

  getId(): string;
  setId(value: string): UploadedFile;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): UploadedFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadedFile.AsObject;
  static toObject(includeInstance: boolean, msg: UploadedFile): UploadedFile.AsObject;
  static serializeBinaryToWriter(message: UploadedFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadedFile;
  static deserializeBinaryFromReader(message: UploadedFile, reader: jspb.BinaryReader): UploadedFile;
}

export namespace UploadedFile {
  export type AsObject = {
    fileName: string;
    userId: number;
    fileSize: number;
    fileType: string;
    filePath: string;
    category: string;
    inUse: boolean;
    bucketName: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    id: string;
    thumbnailUrl: string;
  };
}

export class ConfirmUploadRequest extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): ConfirmUploadRequest;

  getFileSize(): number;
  setFileSize(value: number): ConfirmUploadRequest;

  getFileType(): string;
  setFileType(value: string): ConfirmUploadRequest;

  getCategory(): string;
  setCategory(value: string): ConfirmUploadRequest;

  getIsPrivateFile(): boolean;
  setIsPrivateFile(value: boolean): ConfirmUploadRequest;

  getInUse(): boolean;
  setInUse(value: boolean): ConfirmUploadRequest;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): ConfirmUploadRequest;
  hasExpiredAt(): boolean;
  clearExpiredAt(): ConfirmUploadRequest;

  getFilePath(): string;
  setFilePath(value: string): ConfirmUploadRequest;

  getFileId(): string;
  setFileId(value: string): ConfirmUploadRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmUploadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmUploadRequest): ConfirmUploadRequest.AsObject;
  static serializeBinaryToWriter(message: ConfirmUploadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmUploadRequest;
  static deserializeBinaryFromReader(message: ConfirmUploadRequest, reader: jspb.BinaryReader): ConfirmUploadRequest;
}

export namespace ConfirmUploadRequest {
  export type AsObject = {
    fileName: string;
    fileSize: number;
    fileType: string;
    category: string;
    isPrivateFile: boolean;
    inUse: boolean;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    filePath: string;
    fileId: string;
  };
}

export class ConfirmUploadResponse extends jspb.Message {
  getUploadedFile(): UploadedFile | undefined;
  setUploadedFile(value?: UploadedFile): ConfirmUploadResponse;
  hasUploadedFile(): boolean;
  clearUploadedFile(): ConfirmUploadResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConfirmUploadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ConfirmUploadResponse): ConfirmUploadResponse.AsObject;
  static serializeBinaryToWriter(message: ConfirmUploadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConfirmUploadResponse;
  static deserializeBinaryFromReader(message: ConfirmUploadResponse, reader: jspb.BinaryReader): ConfirmUploadResponse;
}

export namespace ConfirmUploadResponse {
  export type AsObject = {
    uploadedFile?: UploadedFile.AsObject;
  };
}

export class GCSUploadPresignUrlRequest extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): GCSUploadPresignUrlRequest;

  getFileTypeEnum(): FileType;
  setFileTypeEnum(value: FileType): GCSUploadPresignUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): GCSUploadPresignUrlRequest;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): GCSUploadPresignUrlRequest;
  hasExpiredAt(): boolean;
  clearExpiredAt(): GCSUploadPresignUrlRequest;

  getContentType(): string;
  setContentType(value: string): GCSUploadPresignUrlRequest;

  getResourceType(): ResourceType;
  setResourceType(value: ResourceType): GCSUploadPresignUrlRequest;

  getResourceId(): string;
  setResourceId(value: string): GCSUploadPresignUrlRequest;

  getIsResumable(): boolean;
  setIsResumable(value: boolean): GCSUploadPresignUrlRequest;
  hasIsResumable(): boolean;
  clearIsResumable(): GCSUploadPresignUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSUploadPresignUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSUploadPresignUrlRequest): GCSUploadPresignUrlRequest.AsObject;
  static serializeBinaryToWriter(message: GCSUploadPresignUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSUploadPresignUrlRequest;
  static deserializeBinaryFromReader(message: GCSUploadPresignUrlRequest, reader: jspb.BinaryReader): GCSUploadPresignUrlRequest;
}

export namespace GCSUploadPresignUrlRequest {
  export type AsObject = {
    fileName: string;
    fileTypeEnum: FileType;
    isPrivate: boolean;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    contentType: string;
    resourceType: ResourceType;
    resourceId: string;
    isResumable?: boolean;
  };

  export enum IsResumableCase {
    _IS_RESUMABLE_NOT_SET = 0,
    IS_RESUMABLE = 9,
  }
}

export class GCSUploadPresignUrlResponse extends jspb.Message {
  getPresignedUrl(): string;
  setPresignedUrl(value: string): GCSUploadPresignUrlResponse;

  getFileUrl(): string;
  setFileUrl(value: string): GCSUploadPresignUrlResponse;

  getMessage(): string;
  setMessage(value: string): GCSUploadPresignUrlResponse;

  getFileId(): string;
  setFileId(value: string): GCSUploadPresignUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSUploadPresignUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSUploadPresignUrlResponse): GCSUploadPresignUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GCSUploadPresignUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSUploadPresignUrlResponse;
  static deserializeBinaryFromReader(message: GCSUploadPresignUrlResponse, reader: jspb.BinaryReader): GCSUploadPresignUrlResponse;
}

export namespace GCSUploadPresignUrlResponse {
  export type AsObject = {
    presignedUrl: string;
    fileUrl: string;
    message: string;
    fileId: string;
  };
}

export class GCSFetchPresignUrlRequest extends jspb.Message {
  getFileUrl(): string;
  setFileUrl(value: string): GCSFetchPresignUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): GCSFetchPresignUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSFetchPresignUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GCSFetchPresignUrlRequest): GCSFetchPresignUrlRequest.AsObject;
  static serializeBinaryToWriter(message: GCSFetchPresignUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSFetchPresignUrlRequest;
  static deserializeBinaryFromReader(message: GCSFetchPresignUrlRequest, reader: jspb.BinaryReader): GCSFetchPresignUrlRequest;
}

export namespace GCSFetchPresignUrlRequest {
  export type AsObject = {
    fileUrl: string;
    isPrivate: boolean;
  };
}

export class GCSFetchPresignUrlResponse extends jspb.Message {
  getPresignedUrl(): string;
  setPresignedUrl(value: string): GCSFetchPresignUrlResponse;

  getMessage(): string;
  setMessage(value: string): GCSFetchPresignUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GCSFetchPresignUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GCSFetchPresignUrlResponse): GCSFetchPresignUrlResponse.AsObject;
  static serializeBinaryToWriter(message: GCSFetchPresignUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GCSFetchPresignUrlResponse;
  static deserializeBinaryFromReader(message: GCSFetchPresignUrlResponse, reader: jspb.BinaryReader): GCSFetchPresignUrlResponse;
}

export namespace GCSFetchPresignUrlResponse {
  export type AsObject = {
    presignedUrl: string;
    message: string;
  };
}

export class BatchGetGCSFetchPresignUrlRequest extends jspb.Message {
  getFileUrlsList(): Array<string>;
  setFileUrlsList(value: Array<string>): BatchGetGCSFetchPresignUrlRequest;
  clearFileUrlsList(): BatchGetGCSFetchPresignUrlRequest;
  addFileUrls(value: string, index?: number): BatchGetGCSFetchPresignUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): BatchGetGCSFetchPresignUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetGCSFetchPresignUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetGCSFetchPresignUrlRequest): BatchGetGCSFetchPresignUrlRequest.AsObject;
  static serializeBinaryToWriter(message: BatchGetGCSFetchPresignUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetGCSFetchPresignUrlRequest;
  static deserializeBinaryFromReader(message: BatchGetGCSFetchPresignUrlRequest, reader: jspb.BinaryReader): BatchGetGCSFetchPresignUrlRequest;
}

export namespace BatchGetGCSFetchPresignUrlRequest {
  export type AsObject = {
    fileUrlsList: Array<string>;
    isPrivate: boolean;
  };
}

export class BatchGetGCSFetchPresignUrlResponse extends jspb.Message {
  getPresignedUrlsMap(): jspb.Map<string, string>;
  clearPresignedUrlsMap(): BatchGetGCSFetchPresignUrlResponse;

  getFailedUrlsList(): Array<string>;
  setFailedUrlsList(value: Array<string>): BatchGetGCSFetchPresignUrlResponse;
  clearFailedUrlsList(): BatchGetGCSFetchPresignUrlResponse;
  addFailedUrls(value: string, index?: number): BatchGetGCSFetchPresignUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetGCSFetchPresignUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetGCSFetchPresignUrlResponse): BatchGetGCSFetchPresignUrlResponse.AsObject;
  static serializeBinaryToWriter(message: BatchGetGCSFetchPresignUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetGCSFetchPresignUrlResponse;
  static deserializeBinaryFromReader(message: BatchGetGCSFetchPresignUrlResponse, reader: jspb.BinaryReader): BatchGetGCSFetchPresignUrlResponse;
}

export namespace BatchGetGCSFetchPresignUrlResponse {
  export type AsObject = {
    presignedUrlsMap: Array<[string, string]>;
    failedUrlsList: Array<string>;
  };
}

export class UploadPresignedUrlRequest extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): UploadPresignedUrlRequest;

  getFileTypeEnum(): FileType;
  setFileTypeEnum(value: FileType): UploadPresignedUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): UploadPresignedUrlRequest;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): UploadPresignedUrlRequest;
  hasExpiredAt(): boolean;
  clearExpiredAt(): UploadPresignedUrlRequest;

  getContentType(): string;
  setContentType(value: string): UploadPresignedUrlRequest;

  getResourceType(): ResourceType;
  setResourceType(value: ResourceType): UploadPresignedUrlRequest;

  getResourceId(): string;
  setResourceId(value: string): UploadPresignedUrlRequest;

  getIsResumable(): boolean;
  setIsResumable(value: boolean): UploadPresignedUrlRequest;
  hasIsResumable(): boolean;
  clearIsResumable(): UploadPresignedUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadPresignedUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadPresignedUrlRequest): UploadPresignedUrlRequest.AsObject;
  static serializeBinaryToWriter(message: UploadPresignedUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadPresignedUrlRequest;
  static deserializeBinaryFromReader(message: UploadPresignedUrlRequest, reader: jspb.BinaryReader): UploadPresignedUrlRequest;
}

export namespace UploadPresignedUrlRequest {
  export type AsObject = {
    fileName: string;
    fileTypeEnum: FileType;
    isPrivate: boolean;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    contentType: string;
    resourceType: ResourceType;
    resourceId: string;
    isResumable?: boolean;
  };

  export enum IsResumableCase {
    _IS_RESUMABLE_NOT_SET = 0,
    IS_RESUMABLE = 9,
  }
}

export class UploadPresignedUrlResponse extends jspb.Message {
  getPresignedUrl(): string;
  setPresignedUrl(value: string): UploadPresignedUrlResponse;

  getFileUrl(): string;
  setFileUrl(value: string): UploadPresignedUrlResponse;

  getMessage(): string;
  setMessage(value: string): UploadPresignedUrlResponse;

  getFileId(): string;
  setFileId(value: string): UploadPresignedUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadPresignedUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadPresignedUrlResponse): UploadPresignedUrlResponse.AsObject;
  static serializeBinaryToWriter(message: UploadPresignedUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadPresignedUrlResponse;
  static deserializeBinaryFromReader(message: UploadPresignedUrlResponse, reader: jspb.BinaryReader): UploadPresignedUrlResponse;
}

export namespace UploadPresignedUrlResponse {
  export type AsObject = {
    presignedUrl: string;
    fileUrl: string;
    message: string;
    fileId: string;
  };
}

export class FetchPresignedUrlRequest extends jspb.Message {
  getFileUrl(): string;
  setFileUrl(value: string): FetchPresignedUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): FetchPresignedUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchPresignedUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchPresignedUrlRequest): FetchPresignedUrlRequest.AsObject;
  static serializeBinaryToWriter(message: FetchPresignedUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchPresignedUrlRequest;
  static deserializeBinaryFromReader(message: FetchPresignedUrlRequest, reader: jspb.BinaryReader): FetchPresignedUrlRequest;
}

export namespace FetchPresignedUrlRequest {
  export type AsObject = {
    fileUrl: string;
    isPrivate: boolean;
  };
}

export class FetchPresignedUrlResponse extends jspb.Message {
  getPresignedUrl(): string;
  setPresignedUrl(value: string): FetchPresignedUrlResponse;

  getMessage(): string;
  setMessage(value: string): FetchPresignedUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchPresignedUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchPresignedUrlResponse): FetchPresignedUrlResponse.AsObject;
  static serializeBinaryToWriter(message: FetchPresignedUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchPresignedUrlResponse;
  static deserializeBinaryFromReader(message: FetchPresignedUrlResponse, reader: jspb.BinaryReader): FetchPresignedUrlResponse;
}

export namespace FetchPresignedUrlResponse {
  export type AsObject = {
    presignedUrl: string;
    message: string;
  };
}

export class BatchGetFetchPresignedUrlRequest extends jspb.Message {
  getFileUrlsList(): Array<string>;
  setFileUrlsList(value: Array<string>): BatchGetFetchPresignedUrlRequest;
  clearFileUrlsList(): BatchGetFetchPresignedUrlRequest;
  addFileUrls(value: string, index?: number): BatchGetFetchPresignedUrlRequest;

  getIsPrivate(): boolean;
  setIsPrivate(value: boolean): BatchGetFetchPresignedUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetFetchPresignedUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetFetchPresignedUrlRequest): BatchGetFetchPresignedUrlRequest.AsObject;
  static serializeBinaryToWriter(message: BatchGetFetchPresignedUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetFetchPresignedUrlRequest;
  static deserializeBinaryFromReader(message: BatchGetFetchPresignedUrlRequest, reader: jspb.BinaryReader): BatchGetFetchPresignedUrlRequest;
}

export namespace BatchGetFetchPresignedUrlRequest {
  export type AsObject = {
    fileUrlsList: Array<string>;
    isPrivate: boolean;
  };
}

export class BatchGetFetchPresignedUrlResponse extends jspb.Message {
  getPresignedUrlsMap(): jspb.Map<string, string>;
  clearPresignedUrlsMap(): BatchGetFetchPresignedUrlResponse;

  getFailedUrlsList(): Array<string>;
  setFailedUrlsList(value: Array<string>): BatchGetFetchPresignedUrlResponse;
  clearFailedUrlsList(): BatchGetFetchPresignedUrlResponse;
  addFailedUrls(value: string, index?: number): BatchGetFetchPresignedUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetFetchPresignedUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetFetchPresignedUrlResponse): BatchGetFetchPresignedUrlResponse.AsObject;
  static serializeBinaryToWriter(message: BatchGetFetchPresignedUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetFetchPresignedUrlResponse;
  static deserializeBinaryFromReader(message: BatchGetFetchPresignedUrlResponse, reader: jspb.BinaryReader): BatchGetFetchPresignedUrlResponse;
}

export namespace BatchGetFetchPresignedUrlResponse {
  export type AsObject = {
    presignedUrlsMap: Array<[string, string]>;
    failedUrlsList: Array<string>;
  };
}

export class FileInfo extends jspb.Message {
  getFileName(): string;
  setFileName(value: string): FileInfo;

  getFileType(): string;
  setFileType(value: string): FileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    fileName: string;
    fileType: string;
  };
}

export class UploadFileRequest extends jspb.Message {
  getInfo(): FileInfo | undefined;
  setInfo(value?: FileInfo): UploadFileRequest;
  hasInfo(): boolean;
  clearInfo(): UploadFileRequest;

  getFileChunk(): Uint8Array | string;
  getFileChunk_asU8(): Uint8Array;
  getFileChunk_asB64(): string;
  setFileChunk(value: Uint8Array | string): UploadFileRequest;
  hasFileChunk(): boolean;
  clearFileChunk(): UploadFileRequest;

  getDataCase(): UploadFileRequest.DataCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileRequest): UploadFileRequest.AsObject;
  static serializeBinaryToWriter(message: UploadFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileRequest;
  static deserializeBinaryFromReader(message: UploadFileRequest, reader: jspb.BinaryReader): UploadFileRequest;
}

export namespace UploadFileRequest {
  export type AsObject = {
    info?: FileInfo.AsObject;
    fileChunk?: Uint8Array | string;
  };

  export enum DataCase {
    DATA_NOT_SET = 0,
    INFO = 1,
    FILE_CHUNK = 2,
  }
}

export class UploadFileResponse extends jspb.Message {
  getFilePath(): string;
  setFilePath(value: string): UploadFileResponse;

  getFileSize(): number;
  setFileSize(value: number): UploadFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadFileResponse): UploadFileResponse.AsObject;
  static serializeBinaryToWriter(message: UploadFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadFileResponse;
  static deserializeBinaryFromReader(message: UploadFileResponse, reader: jspb.BinaryReader): UploadFileResponse;
}

export namespace UploadFileResponse {
  export type AsObject = {
    filePath: string;
    fileSize: number;
  };
}

export class AdminListUploadedFilesRequest extends jspb.Message {
  getPageId(): number;
  setPageId(value: number): AdminListUploadedFilesRequest;

  getPageSize(): number;
  setPageSize(value: number): AdminListUploadedFilesRequest;

  getUserId(): number;
  setUserId(value: number): AdminListUploadedFilesRequest;
  hasUserId(): boolean;
  clearUserId(): AdminListUploadedFilesRequest;

  getUserEmail(): string;
  setUserEmail(value: string): AdminListUploadedFilesRequest;
  hasUserEmail(): boolean;
  clearUserEmail(): AdminListUploadedFilesRequest;

  getCategory(): string;
  setCategory(value: string): AdminListUploadedFilesRequest;
  hasCategory(): boolean;
  clearCategory(): AdminListUploadedFilesRequest;

  getFileType(): string;
  setFileType(value: string): AdminListUploadedFilesRequest;
  hasFileType(): boolean;
  clearFileType(): AdminListUploadedFilesRequest;

  getInUse(): boolean;
  setInUse(value: boolean): AdminListUploadedFilesRequest;
  hasInUse(): boolean;
  clearInUse(): AdminListUploadedFilesRequest;

  getBucketName(): string;
  setBucketName(value: string): AdminListUploadedFilesRequest;
  hasBucketName(): boolean;
  clearBucketName(): AdminListUploadedFilesRequest;

  getStartDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setStartDate(value?: google_protobuf_timestamp_pb.Timestamp): AdminListUploadedFilesRequest;
  hasStartDate(): boolean;
  clearStartDate(): AdminListUploadedFilesRequest;

  getEndDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setEndDate(value?: google_protobuf_timestamp_pb.Timestamp): AdminListUploadedFilesRequest;
  hasEndDate(): boolean;
  clearEndDate(): AdminListUploadedFilesRequest;

  getSearchKeyword(): string;
  setSearchKeyword(value: string): AdminListUploadedFilesRequest;
  hasSearchKeyword(): boolean;
  clearSearchKeyword(): AdminListUploadedFilesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListUploadedFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListUploadedFilesRequest): AdminListUploadedFilesRequest.AsObject;
  static serializeBinaryToWriter(message: AdminListUploadedFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListUploadedFilesRequest;
  static deserializeBinaryFromReader(message: AdminListUploadedFilesRequest, reader: jspb.BinaryReader): AdminListUploadedFilesRequest;
}

export namespace AdminListUploadedFilesRequest {
  export type AsObject = {
    pageId: number;
    pageSize: number;
    userId?: number;
    userEmail?: string;
    category?: string;
    fileType?: string;
    inUse?: boolean;
    bucketName?: string;
    startDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    endDate?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    searchKeyword?: string;
  };

  export enum UserIdCase {
    _USER_ID_NOT_SET = 0,
    USER_ID = 3,
  }

  export enum UserEmailCase {
    _USER_EMAIL_NOT_SET = 0,
    USER_EMAIL = 4,
  }

  export enum CategoryCase {
    _CATEGORY_NOT_SET = 0,
    CATEGORY = 5,
  }

  export enum FileTypeCase {
    _FILE_TYPE_NOT_SET = 0,
    FILE_TYPE = 6,
  }

  export enum InUseCase {
    _IN_USE_NOT_SET = 0,
    IN_USE = 7,
  }

  export enum BucketNameCase {
    _BUCKET_NAME_NOT_SET = 0,
    BUCKET_NAME = 8,
  }

  export enum StartDateCase {
    _START_DATE_NOT_SET = 0,
    START_DATE = 9,
  }

  export enum EndDateCase {
    _END_DATE_NOT_SET = 0,
    END_DATE = 10,
  }

  export enum SearchKeywordCase {
    _SEARCH_KEYWORD_NOT_SET = 0,
    SEARCH_KEYWORD = 11,
  }
}

export class AdminUploadedFileInfo extends jspb.Message {
  getId(): string;
  setId(value: string): AdminUploadedFileInfo;

  getUserId(): number;
  setUserId(value: number): AdminUploadedFileInfo;

  getUserName(): string;
  setUserName(value: string): AdminUploadedFileInfo;

  getUserEmail(): string;
  setUserEmail(value: string): AdminUploadedFileInfo;

  getFileName(): string;
  setFileName(value: string): AdminUploadedFileInfo;

  getFileSize(): number;
  setFileSize(value: number): AdminUploadedFileInfo;

  getFileType(): string;
  setFileType(value: string): AdminUploadedFileInfo;

  getFilePath(): string;
  setFilePath(value: string): AdminUploadedFileInfo;

  getCategory(): string;
  setCategory(value: string): AdminUploadedFileInfo;

  getInUse(): boolean;
  setInUse(value: boolean): AdminUploadedFileInfo;

  getBucketName(): string;
  setBucketName(value: string): AdminUploadedFileInfo;

  getThumbnailUrl(): string;
  setThumbnailUrl(value: string): AdminUploadedFileInfo;

  getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminUploadedFileInfo;
  hasCreatedAt(): boolean;
  clearCreatedAt(): AdminUploadedFileInfo;

  getExpiredAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setExpiredAt(value?: google_protobuf_timestamp_pb.Timestamp): AdminUploadedFileInfo;
  hasExpiredAt(): boolean;
  clearExpiredAt(): AdminUploadedFileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminUploadedFileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AdminUploadedFileInfo): AdminUploadedFileInfo.AsObject;
  static serializeBinaryToWriter(message: AdminUploadedFileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminUploadedFileInfo;
  static deserializeBinaryFromReader(message: AdminUploadedFileInfo, reader: jspb.BinaryReader): AdminUploadedFileInfo;
}

export namespace AdminUploadedFileInfo {
  export type AsObject = {
    id: string;
    userId: number;
    userName: string;
    userEmail: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    filePath: string;
    category: string;
    inUse: boolean;
    bucketName: string;
    thumbnailUrl: string;
    createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
    expiredAt?: google_protobuf_timestamp_pb.Timestamp.AsObject;
  };
}

export class AdminListUploadedFilesResponse extends jspb.Message {
  getFilesList(): Array<AdminUploadedFileInfo>;
  setFilesList(value: Array<AdminUploadedFileInfo>): AdminListUploadedFilesResponse;
  clearFilesList(): AdminListUploadedFilesResponse;
  addFiles(value?: AdminUploadedFileInfo, index?: number): AdminUploadedFileInfo;

  getTotalCount(): number;
  setTotalCount(value: number): AdminListUploadedFilesResponse;

  getTotalSizeBytes(): number;
  setTotalSizeBytes(value: number): AdminListUploadedFilesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminListUploadedFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminListUploadedFilesResponse): AdminListUploadedFilesResponse.AsObject;
  static serializeBinaryToWriter(message: AdminListUploadedFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminListUploadedFilesResponse;
  static deserializeBinaryFromReader(message: AdminListUploadedFilesResponse, reader: jspb.BinaryReader): AdminListUploadedFilesResponse;
}

export namespace AdminListUploadedFilesResponse {
  export type AsObject = {
    filesList: Array<AdminUploadedFileInfo.AsObject>;
    totalCount: number;
    totalSizeBytes: number;
  };
}

export class AdminGetStorageStatisticsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetStorageStatisticsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetStorageStatisticsRequest): AdminGetStorageStatisticsRequest.AsObject;
  static serializeBinaryToWriter(message: AdminGetStorageStatisticsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetStorageStatisticsRequest;
  static deserializeBinaryFromReader(message: AdminGetStorageStatisticsRequest, reader: jspb.BinaryReader): AdminGetStorageStatisticsRequest;
}

export namespace AdminGetStorageStatisticsRequest {
  export type AsObject = {
  };
}

export class CategoryStorageStat extends jspb.Message {
  getCategory(): string;
  setCategory(value: string): CategoryStorageStat;

  getFileCount(): number;
  setFileCount(value: number): CategoryStorageStat;

  getTotalSizeBytes(): number;
  setTotalSizeBytes(value: number): CategoryStorageStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CategoryStorageStat.AsObject;
  static toObject(includeInstance: boolean, msg: CategoryStorageStat): CategoryStorageStat.AsObject;
  static serializeBinaryToWriter(message: CategoryStorageStat, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CategoryStorageStat;
  static deserializeBinaryFromReader(message: CategoryStorageStat, reader: jspb.BinaryReader): CategoryStorageStat;
}

export namespace CategoryStorageStat {
  export type AsObject = {
    category: string;
    fileCount: number;
    totalSizeBytes: number;
  };
}

export class AdminGetStorageStatisticsResponse extends jspb.Message {
  getTotalFiles(): number;
  setTotalFiles(value: number): AdminGetStorageStatisticsResponse;

  getTotalSizeBytes(): number;
  setTotalSizeBytes(value: number): AdminGetStorageStatisticsResponse;

  getInUseFiles(): number;
  setInUseFiles(value: number): AdminGetStorageStatisticsResponse;

  getInUseSizeBytes(): number;
  setInUseSizeBytes(value: number): AdminGetStorageStatisticsResponse;

  getOrphanFiles(): number;
  setOrphanFiles(value: number): AdminGetStorageStatisticsResponse;

  getOrphanSizeBytes(): number;
  setOrphanSizeBytes(value: number): AdminGetStorageStatisticsResponse;

  getCategoryStatsList(): Array<CategoryStorageStat>;
  setCategoryStatsList(value: Array<CategoryStorageStat>): AdminGetStorageStatisticsResponse;
  clearCategoryStatsList(): AdminGetStorageStatisticsResponse;
  addCategoryStats(value?: CategoryStorageStat, index?: number): CategoryStorageStat;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetStorageStatisticsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetStorageStatisticsResponse): AdminGetStorageStatisticsResponse.AsObject;
  static serializeBinaryToWriter(message: AdminGetStorageStatisticsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetStorageStatisticsResponse;
  static deserializeBinaryFromReader(message: AdminGetStorageStatisticsResponse, reader: jspb.BinaryReader): AdminGetStorageStatisticsResponse;
}

export namespace AdminGetStorageStatisticsResponse {
  export type AsObject = {
    totalFiles: number;
    totalSizeBytes: number;
    inUseFiles: number;
    inUseSizeBytes: number;
    orphanFiles: number;
    orphanSizeBytes: number;
    categoryStatsList: Array<CategoryStorageStat.AsObject>;
  };
}

export class AdminGetFilePreviewUrlRequest extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): AdminGetFilePreviewUrlRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetFilePreviewUrlRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetFilePreviewUrlRequest): AdminGetFilePreviewUrlRequest.AsObject;
  static serializeBinaryToWriter(message: AdminGetFilePreviewUrlRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetFilePreviewUrlRequest;
  static deserializeBinaryFromReader(message: AdminGetFilePreviewUrlRequest, reader: jspb.BinaryReader): AdminGetFilePreviewUrlRequest;
}

export namespace AdminGetFilePreviewUrlRequest {
  export type AsObject = {
    fileId: string;
  };
}

export class AdminGetFilePreviewUrlResponse extends jspb.Message {
  getPreviewUrl(): string;
  setPreviewUrl(value: string): AdminGetFilePreviewUrlResponse;

  getFileType(): string;
  setFileType(value: string): AdminGetFilePreviewUrlResponse;

  getExpiresInSeconds(): number;
  setExpiresInSeconds(value: number): AdminGetFilePreviewUrlResponse;

  getFileName(): string;
  setFileName(value: string): AdminGetFilePreviewUrlResponse;

  getFileSize(): number;
  setFileSize(value: number): AdminGetFilePreviewUrlResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminGetFilePreviewUrlResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminGetFilePreviewUrlResponse): AdminGetFilePreviewUrlResponse.AsObject;
  static serializeBinaryToWriter(message: AdminGetFilePreviewUrlResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminGetFilePreviewUrlResponse;
  static deserializeBinaryFromReader(message: AdminGetFilePreviewUrlResponse, reader: jspb.BinaryReader): AdminGetFilePreviewUrlResponse;
}

export namespace AdminGetFilePreviewUrlResponse {
  export type AsObject = {
    previewUrl: string;
    fileType: string;
    expiresInSeconds: number;
    fileName: string;
    fileSize: number;
  };
}

export class AdminDeleteFileRequest extends jspb.Message {
  getFileId(): string;
  setFileId(value: string): AdminDeleteFileRequest;

  getReason(): string;
  setReason(value: string): AdminDeleteFileRequest;
  hasReason(): boolean;
  clearReason(): AdminDeleteFileRequest;

  getForce(): boolean;
  setForce(value: boolean): AdminDeleteFileRequest;
  hasForce(): boolean;
  clearForce(): AdminDeleteFileRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminDeleteFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminDeleteFileRequest): AdminDeleteFileRequest.AsObject;
  static serializeBinaryToWriter(message: AdminDeleteFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminDeleteFileRequest;
  static deserializeBinaryFromReader(message: AdminDeleteFileRequest, reader: jspb.BinaryReader): AdminDeleteFileRequest;
}

export namespace AdminDeleteFileRequest {
  export type AsObject = {
    fileId: string;
    reason?: string;
    force?: boolean;
  };

  export enum ReasonCase {
    _REASON_NOT_SET = 0,
    REASON = 2,
  }

  export enum ForceCase {
    _FORCE_NOT_SET = 0,
    FORCE = 3,
  }
}

export class AdminDeleteFileResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): AdminDeleteFileResponse;

  getMessage(): string;
  setMessage(value: string): AdminDeleteFileResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminDeleteFileResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminDeleteFileResponse): AdminDeleteFileResponse.AsObject;
  static serializeBinaryToWriter(message: AdminDeleteFileResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminDeleteFileResponse;
  static deserializeBinaryFromReader(message: AdminDeleteFileResponse, reader: jspb.BinaryReader): AdminDeleteFileResponse;
}

export namespace AdminDeleteFileResponse {
  export type AsObject = {
    success: boolean;
    message: string;
  };
}

export class AdminTriggerCleanupExpiredFilesRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminTriggerCleanupExpiredFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AdminTriggerCleanupExpiredFilesRequest): AdminTriggerCleanupExpiredFilesRequest.AsObject;
  static serializeBinaryToWriter(message: AdminTriggerCleanupExpiredFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminTriggerCleanupExpiredFilesRequest;
  static deserializeBinaryFromReader(message: AdminTriggerCleanupExpiredFilesRequest, reader: jspb.BinaryReader): AdminTriggerCleanupExpiredFilesRequest;
}

export namespace AdminTriggerCleanupExpiredFilesRequest {
  export type AsObject = {
  };
}

export class AdminTriggerCleanupExpiredFilesResponse extends jspb.Message {
  getCleanedCount(): number;
  setCleanedCount(value: number): AdminTriggerCleanupExpiredFilesResponse;

  getFreedBytes(): number;
  setFreedBytes(value: number): AdminTriggerCleanupExpiredFilesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AdminTriggerCleanupExpiredFilesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AdminTriggerCleanupExpiredFilesResponse): AdminTriggerCleanupExpiredFilesResponse.AsObject;
  static serializeBinaryToWriter(message: AdminTriggerCleanupExpiredFilesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AdminTriggerCleanupExpiredFilesResponse;
  static deserializeBinaryFromReader(message: AdminTriggerCleanupExpiredFilesResponse, reader: jspb.BinaryReader): AdminTriggerCleanupExpiredFilesResponse;
}

export namespace AdminTriggerCleanupExpiredFilesResponse {
  export type AsObject = {
    cleanedCount: number;
    freedBytes: number;
  };
}

export enum FileType {
  PERMANENT = 0,
  TEMPORARY = 1,
}
export enum FileVisibility {
  PUBLIC = 0,
  PRIVATE = 1,
}
export enum ResourceType {
  USER_AVATAR = 0,
  USER_CERTIFICATE = 1,
  LESSON_MEDIA = 2,
  COURSE_VIDEO = 3,
  COURSE_COVER = 4,
  COURSE_SUBTITLE = 5,
  USER_PORTFOLIO_MEDIA = 6,
  USER_IDENTITY_ID_CARD = 7,
  USER_IDENTITY_SELFIE = 8,
  CHAT_MEDIA = 9,
  CARPOOL_IMAGE = 10,
}
