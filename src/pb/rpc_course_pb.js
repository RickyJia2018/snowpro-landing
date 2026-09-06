// source: rpc_course.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = globalThis;

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.pb.AdminFreezeCourseEscrowRequest', null, global);
goog.exportSymbol('proto.pb.AdminFreezeCourseEscrowResponse', null, global);
goog.exportSymbol('proto.pb.AdminGetCoursePurchaseRefundDetailsRequest', null, global);
goog.exportSymbol('proto.pb.AdminGetCoursePurchaseRefundDetailsResponse', null, global);
goog.exportSymbol('proto.pb.AdminRefundCoursePurchaseRequest', null, global);
goog.exportSymbol('proto.pb.AdminRefundCoursePurchaseResponse', null, global);
goog.exportSymbol('proto.pb.AdminUnfreezeCourseEscrowRequest', null, global);
goog.exportSymbol('proto.pb.AdminUnfreezeCourseEscrowResponse', null, global);
goog.exportSymbol('proto.pb.AuditCourseVideoReviewRequest', null, global);
goog.exportSymbol('proto.pb.AuditCourseVideoReviewResponse', null, global);
goog.exportSymbol('proto.pb.ClaimSocialRewardRequest', null, global);
goog.exportSymbol('proto.pb.ClaimSocialRewardResponse', null, global);
goog.exportSymbol('proto.pb.CoachLevelCommission', null, global);
goog.exportSymbol('proto.pb.ConfirmCourseDownloadedRequest', null, global);
goog.exportSymbol('proto.pb.Course', null, global);
goog.exportSymbol('proto.pb.CourseMetaItem', null, global);
goog.exportSymbol('proto.pb.CoursePurchase', null, global);
goog.exportSymbol('proto.pb.CourseQAMessage', null, global);
goog.exportSymbol('proto.pb.CourseReviewLog', null, global);
goog.exportSymbol('proto.pb.CourseVideo', null, global);
goog.exportSymbol('proto.pb.CourseVideoLearningProgress', null, global);
goog.exportSymbol('proto.pb.CourseVideoProcessingJob', null, global);
goog.exportSymbol('proto.pb.CreateCourseMetaItemRequest', null, global);
goog.exportSymbol('proto.pb.CreateCourseQAMessageRequest', null, global);
goog.exportSymbol('proto.pb.CreateCourseQAMessageResponse', null, global);
goog.exportSymbol('proto.pb.CreateCourseRequest', null, global);
goog.exportSymbol('proto.pb.CreateCourseResponse', null, global);
goog.exportSymbol('proto.pb.CreateCourseVideoRequest', null, global);
goog.exportSymbol('proto.pb.CreateCourseVideoResponse', null, global);
goog.exportSymbol('proto.pb.DeleteCourseMetaItemRequest', null, global);
goog.exportSymbol('proto.pb.DeleteCourseRequest', null, global);
goog.exportSymbol('proto.pb.DeleteCourseVideoRequest', null, global);
goog.exportSymbol('proto.pb.GetCoachCommissionsRequest', null, global);
goog.exportSymbol('proto.pb.GetCoachCommissionsResponse', null, global);
goog.exportSymbol('proto.pb.GetCourseCertificateRequest', null, global);
goog.exportSymbol('proto.pb.GetCourseCertificateResponse', null, global);
goog.exportSymbol('proto.pb.GetCourseLearningProgressRequest', null, global);
goog.exportSymbol('proto.pb.GetCourseLearningProgressResponse', null, global);
goog.exportSymbol('proto.pb.GetCoursePlaybackInfoRequest', null, global);
goog.exportSymbol('proto.pb.GetCoursePlaybackInfoResponse', null, global);
goog.exportSymbol('proto.pb.GetCourseRequest', null, global);
goog.exportSymbol('proto.pb.GetCourseResponse', null, global);
goog.exportSymbol('proto.pb.GetCourseVideoDecryptKeyRequest', null, global);
goog.exportSymbol('proto.pb.GetCourseVideoDecryptKeyResponse', null, global);
goog.exportSymbol('proto.pb.GetCourseVideoLikeInfoRequest', null, global);
goog.exportSymbol('proto.pb.GetCourseVideoLikeInfoResponse', null, global);
goog.exportSymbol('proto.pb.GetHLSEncryptionKeyRequest', null, global);
goog.exportSymbol('proto.pb.GetHLSEncryptionKeyResponse', null, global);
goog.exportSymbol('proto.pb.GetInstructorSalesSummaryRequest', null, global);
goog.exportSymbol('proto.pb.GetInstructorSalesSummaryResponse', null, global);
goog.exportSymbol('proto.pb.GetMyCoursePurchaseStatusRequest', null, global);
goog.exportSymbol('proto.pb.GetMyCoursePurchaseStatusResponse', null, global);
goog.exportSymbol('proto.pb.InstructorSalesTransaction', null, global);
goog.exportSymbol('proto.pb.ListCourseLearningProgressRequest', null, global);
goog.exportSymbol('proto.pb.ListCourseLearningProgressResponse', null, global);
goog.exportSymbol('proto.pb.ListCourseMetaResponse', null, global);
goog.exportSymbol('proto.pb.ListCoursePurchasesRequest', null, global);
goog.exportSymbol('proto.pb.ListCoursePurchasesResponse', null, global);
goog.exportSymbol('proto.pb.ListCourseQAMessagesRequest', null, global);
goog.exportSymbol('proto.pb.ListCourseQAMessagesResponse', null, global);
goog.exportSymbol('proto.pb.ListCourseReviewLogsRequest', null, global);
goog.exportSymbol('proto.pb.ListCourseReviewLogsResponse', null, global);
goog.exportSymbol('proto.pb.ListCourseVideoProcessingJobsRequest', null, global);
goog.exportSymbol('proto.pb.ListCourseVideoProcessingJobsResponse', null, global);
goog.exportSymbol('proto.pb.ListCourseVideosRequest', null, global);
goog.exportSymbol('proto.pb.ListCourseVideosResponse', null, global);
goog.exportSymbol('proto.pb.ListCoursesRequest', null, global);
goog.exportSymbol('proto.pb.ListCoursesResponse', null, global);
goog.exportSymbol('proto.pb.ListInstructorSalesTransactionsRequest', null, global);
goog.exportSymbol('proto.pb.ListInstructorSalesTransactionsResponse', null, global);
goog.exportSymbol('proto.pb.ListMyPurchasedCoursesRequest', null, global);
goog.exportSymbol('proto.pb.ListMyPurchasedCoursesResponse', null, global);
goog.exportSymbol('proto.pb.ListUnreviewedVideosRequest', null, global);
goog.exportSymbol('proto.pb.ListUnreviewedVideosResponse', null, global);
goog.exportSymbol('proto.pb.PurchaseCourseRequest', null, global);
goog.exportSymbol('proto.pb.PurchaseCourseResponse', null, global);
goog.exportSymbol('proto.pb.RequestCourseRefundRequest', null, global);
goog.exportSymbol('proto.pb.RequestCourseRefundResponse', null, global);
goog.exportSymbol('proto.pb.RetryCourseVideoProcessingJobRequest', null, global);
goog.exportSymbol('proto.pb.RetryCourseVideoProcessingJobResponse', null, global);
goog.exportSymbol('proto.pb.SearchCoursesRequest', null, global);
goog.exportSymbol('proto.pb.SubmitCourseHomeworkRequest', null, global);
goog.exportSymbol('proto.pb.SubmitCourseHomeworkResponse', null, global);
goog.exportSymbol('proto.pb.ToggleCourseVideoLikeRequest', null, global);
goog.exportSymbol('proto.pb.ToggleCourseVideoLikeResponse', null, global);
goog.exportSymbol('proto.pb.UnreviewedVideo', null, global);
goog.exportSymbol('proto.pb.UpdateCoachCommissionRequest', null, global);
goog.exportSymbol('proto.pb.UpdateCoachCommissionResponse', null, global);
goog.exportSymbol('proto.pb.UpdateCourseLearningProgressRequest', null, global);
goog.exportSymbol('proto.pb.UpdateCourseLearningProgressResponse', null, global);
goog.exportSymbol('proto.pb.UpdateCourseMetaItemRequest', null, global);
goog.exportSymbol('proto.pb.UpdateCourseRequest', null, global);
goog.exportSymbol('proto.pb.UpdateCourseResponse', null, global);
goog.exportSymbol('proto.pb.UpdateCourseStatusRequest', null, global);
goog.exportSymbol('proto.pb.UpdateCourseStatusResponse', null, global);
goog.exportSymbol('proto.pb.UpdateCourseVideoRequest', null, global);
goog.exportSymbol('proto.pb.UpdateCourseVideoResponse', null, global);
goog.exportSymbol('proto.pb.UpdateVideoSubtitleTextRequest', null, global);
goog.exportSymbol('proto.pb.UpdateVideoSubtitleTextResponse', null, global);
goog.exportSymbol('proto.pb.VideoSubtitle', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CoachLevelCommission = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CoachLevelCommission, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CoachLevelCommission.displayName = 'proto.pb.CoachLevelCommission';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCoachCommissionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCoachCommissionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCoachCommissionsRequest.displayName = 'proto.pb.GetCoachCommissionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCoachCommissionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.GetCoachCommissionsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.GetCoachCommissionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCoachCommissionsResponse.displayName = 'proto.pb.GetCoachCommissionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCoachCommissionRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCoachCommissionRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCoachCommissionRequest.displayName = 'proto.pb.UpdateCoachCommissionRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCoachCommissionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCoachCommissionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCoachCommissionResponse.displayName = 'proto.pb.UpdateCoachCommissionResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.Course = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.Course.repeatedFields_, null);
};
goog.inherits(proto.pb.Course, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.Course.displayName = 'proto.pb.Course';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CourseVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.CourseVideo.repeatedFields_, null);
};
goog.inherits(proto.pb.CourseVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CourseVideo.displayName = 'proto.pb.CourseVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CreateCourseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CreateCourseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CreateCourseRequest.displayName = 'proto.pb.CreateCourseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CreateCourseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CreateCourseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CreateCourseResponse.displayName = 'proto.pb.CreateCourseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.UpdateCourseRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.UpdateCourseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseRequest.displayName = 'proto.pb.UpdateCourseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.DeleteCourseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.DeleteCourseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.DeleteCourseRequest.displayName = 'proto.pb.DeleteCourseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.DeleteCourseVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.DeleteCourseVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.DeleteCourseVideoRequest.displayName = 'proto.pb.DeleteCourseVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.SearchCoursesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.SearchCoursesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.SearchCoursesRequest.displayName = 'proto.pb.SearchCoursesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseResponse.displayName = 'proto.pb.UpdateCourseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CreateCourseVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CreateCourseVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CreateCourseVideoRequest.displayName = 'proto.pb.CreateCourseVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CreateCourseVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CreateCourseVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CreateCourseVideoResponse.displayName = 'proto.pb.CreateCourseVideoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseVideoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseVideoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseVideoRequest.displayName = 'proto.pb.UpdateCourseVideoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseVideoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseVideoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseVideoResponse.displayName = 'proto.pb.UpdateCourseVideoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseRequest.displayName = 'proto.pb.GetCourseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseResponse.displayName = 'proto.pb.GetCourseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseVideosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListCourseVideosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseVideosRequest.displayName = 'proto.pb.ListCourseVideosRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseVideosResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCourseVideosResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCourseVideosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseVideosResponse.displayName = 'proto.pb.ListCourseVideosResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseStatusRequest.displayName = 'proto.pb.UpdateCourseStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseStatusResponse.displayName = 'proto.pb.UpdateCourseStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CoursePurchase = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CoursePurchase, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CoursePurchase.displayName = 'proto.pb.CoursePurchase';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.PurchaseCourseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.PurchaseCourseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PurchaseCourseRequest.displayName = 'proto.pb.PurchaseCourseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.PurchaseCourseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.PurchaseCourseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PurchaseCourseResponse.displayName = 'proto.pb.PurchaseCourseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetHLSEncryptionKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetHLSEncryptionKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetHLSEncryptionKeyRequest.displayName = 'proto.pb.GetHLSEncryptionKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetHLSEncryptionKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetHLSEncryptionKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetHLSEncryptionKeyResponse.displayName = 'proto.pb.GetHLSEncryptionKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.VideoSubtitle = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.VideoSubtitle, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.VideoSubtitle.displayName = 'proto.pb.VideoSubtitle';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateVideoSubtitleTextRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateVideoSubtitleTextRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateVideoSubtitleTextRequest.displayName = 'proto.pb.UpdateVideoSubtitleTextRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateVideoSubtitleTextResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateVideoSubtitleTextResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateVideoSubtitleTextResponse.displayName = 'proto.pb.UpdateVideoSubtitleTextResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCoursePlaybackInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCoursePlaybackInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCoursePlaybackInfoRequest.displayName = 'proto.pb.GetCoursePlaybackInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCoursePlaybackInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.GetCoursePlaybackInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.GetCoursePlaybackInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCoursePlaybackInfoResponse.displayName = 'proto.pb.GetCoursePlaybackInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.SubmitCourseHomeworkRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.SubmitCourseHomeworkRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.SubmitCourseHomeworkRequest.displayName = 'proto.pb.SubmitCourseHomeworkRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.SubmitCourseHomeworkResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.SubmitCourseHomeworkResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.SubmitCourseHomeworkResponse.displayName = 'proto.pb.SubmitCourseHomeworkResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.RequestCourseRefundRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RequestCourseRefundRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RequestCourseRefundRequest.displayName = 'proto.pb.RequestCourseRefundRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.RequestCourseRefundResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RequestCourseRefundResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RequestCourseRefundResponse.displayName = 'proto.pb.RequestCourseRefundResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetMyCoursePurchaseStatusRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetMyCoursePurchaseStatusRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetMyCoursePurchaseStatusRequest.displayName = 'proto.pb.GetMyCoursePurchaseStatusRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetMyCoursePurchaseStatusResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetMyCoursePurchaseStatusResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetMyCoursePurchaseStatusResponse.displayName = 'proto.pb.GetMyCoursePurchaseStatusResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseCertificateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseCertificateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseCertificateRequest.displayName = 'proto.pb.GetCourseCertificateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseCertificateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseCertificateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseCertificateResponse.displayName = 'proto.pb.GetCourseCertificateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ClaimSocialRewardRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ClaimSocialRewardRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ClaimSocialRewardRequest.displayName = 'proto.pb.ClaimSocialRewardRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ClaimSocialRewardResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ClaimSocialRewardResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ClaimSocialRewardResponse.displayName = 'proto.pb.ClaimSocialRewardResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCoursesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListCoursesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCoursesRequest.displayName = 'proto.pb.ListCoursesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCoursesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCoursesResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCoursesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCoursesResponse.displayName = 'proto.pb.ListCoursesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCoursePurchasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListCoursePurchasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCoursePurchasesRequest.displayName = 'proto.pb.ListCoursePurchasesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCoursePurchasesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCoursePurchasesResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCoursePurchasesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCoursePurchasesResponse.displayName = 'proto.pb.ListCoursePurchasesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CourseMetaItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CourseMetaItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CourseMetaItem.displayName = 'proto.pb.CourseMetaItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseMetaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCourseMetaResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCourseMetaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseMetaResponse.displayName = 'proto.pb.ListCourseMetaResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CreateCourseMetaItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CreateCourseMetaItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CreateCourseMetaItemRequest.displayName = 'proto.pb.CreateCourseMetaItemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseMetaItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseMetaItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseMetaItemRequest.displayName = 'proto.pb.UpdateCourseMetaItemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.DeleteCourseMetaItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.DeleteCourseMetaItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.DeleteCourseMetaItemRequest.displayName = 'proto.pb.DeleteCourseMetaItemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CourseQAMessage = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CourseQAMessage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CourseQAMessage.displayName = 'proto.pb.CourseQAMessage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CreateCourseQAMessageRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CreateCourseQAMessageRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CreateCourseQAMessageRequest.displayName = 'proto.pb.CreateCourseQAMessageRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CreateCourseQAMessageResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CreateCourseQAMessageResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CreateCourseQAMessageResponse.displayName = 'proto.pb.CreateCourseQAMessageResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseQAMessagesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListCourseQAMessagesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseQAMessagesRequest.displayName = 'proto.pb.ListCourseQAMessagesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseQAMessagesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCourseQAMessagesResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCourseQAMessagesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseQAMessagesResponse.displayName = 'proto.pb.ListCourseQAMessagesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ToggleCourseVideoLikeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ToggleCourseVideoLikeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ToggleCourseVideoLikeRequest.displayName = 'proto.pb.ToggleCourseVideoLikeRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ToggleCourseVideoLikeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ToggleCourseVideoLikeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ToggleCourseVideoLikeResponse.displayName = 'proto.pb.ToggleCourseVideoLikeResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseVideoLikeInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseVideoLikeInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseVideoLikeInfoRequest.displayName = 'proto.pb.GetCourseVideoLikeInfoRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseVideoLikeInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseVideoLikeInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseVideoLikeInfoResponse.displayName = 'proto.pb.GetCourseVideoLikeInfoResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseVideoDecryptKeyRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseVideoDecryptKeyRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseVideoDecryptKeyRequest.displayName = 'proto.pb.GetCourseVideoDecryptKeyRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseVideoDecryptKeyResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseVideoDecryptKeyResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseVideoDecryptKeyResponse.displayName = 'proto.pb.GetCourseVideoDecryptKeyResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseLearningProgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseLearningProgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseLearningProgressRequest.displayName = 'proto.pb.UpdateCourseLearningProgressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UpdateCourseLearningProgressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.UpdateCourseLearningProgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UpdateCourseLearningProgressResponse.displayName = 'proto.pb.UpdateCourseLearningProgressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseLearningProgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseLearningProgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseLearningProgressRequest.displayName = 'proto.pb.GetCourseLearningProgressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetCourseLearningProgressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetCourseLearningProgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetCourseLearningProgressResponse.displayName = 'proto.pb.GetCourseLearningProgressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListUnreviewedVideosRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListUnreviewedVideosRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListUnreviewedVideosRequest.displayName = 'proto.pb.ListUnreviewedVideosRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.UnreviewedVideo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.UnreviewedVideo.repeatedFields_, null);
};
goog.inherits(proto.pb.UnreviewedVideo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.UnreviewedVideo.displayName = 'proto.pb.UnreviewedVideo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListUnreviewedVideosResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListUnreviewedVideosResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListUnreviewedVideosResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListUnreviewedVideosResponse.displayName = 'proto.pb.ListUnreviewedVideosResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CourseVideoProcessingJob = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CourseVideoProcessingJob, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CourseVideoProcessingJob.displayName = 'proto.pb.CourseVideoProcessingJob';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseVideoProcessingJobsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListCourseVideoProcessingJobsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseVideoProcessingJobsRequest.displayName = 'proto.pb.ListCourseVideoProcessingJobsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseVideoProcessingJobsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCourseVideoProcessingJobsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCourseVideoProcessingJobsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseVideoProcessingJobsResponse.displayName = 'proto.pb.ListCourseVideoProcessingJobsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.RetryCourseVideoProcessingJobRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RetryCourseVideoProcessingJobRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RetryCourseVideoProcessingJobRequest.displayName = 'proto.pb.RetryCourseVideoProcessingJobRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.RetryCourseVideoProcessingJobResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RetryCourseVideoProcessingJobResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RetryCourseVideoProcessingJobResponse.displayName = 'proto.pb.RetryCourseVideoProcessingJobResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ConfirmCourseDownloadedRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ConfirmCourseDownloadedRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ConfirmCourseDownloadedRequest.displayName = 'proto.pb.ConfirmCourseDownloadedRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetInstructorSalesSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetInstructorSalesSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetInstructorSalesSummaryRequest.displayName = 'proto.pb.GetInstructorSalesSummaryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.GetInstructorSalesSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetInstructorSalesSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetInstructorSalesSummaryResponse.displayName = 'proto.pb.GetInstructorSalesSummaryResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.InstructorSalesTransaction = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.InstructorSalesTransaction, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.InstructorSalesTransaction.displayName = 'proto.pb.InstructorSalesTransaction';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListInstructorSalesTransactionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListInstructorSalesTransactionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListInstructorSalesTransactionsRequest.displayName = 'proto.pb.ListInstructorSalesTransactionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListInstructorSalesTransactionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListInstructorSalesTransactionsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListInstructorSalesTransactionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListInstructorSalesTransactionsResponse.displayName = 'proto.pb.ListInstructorSalesTransactionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AuditCourseVideoReviewRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AuditCourseVideoReviewRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AuditCourseVideoReviewRequest.displayName = 'proto.pb.AuditCourseVideoReviewRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AuditCourseVideoReviewResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AuditCourseVideoReviewResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AuditCourseVideoReviewResponse.displayName = 'proto.pb.AuditCourseVideoReviewResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CourseReviewLog = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CourseReviewLog, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CourseReviewLog.displayName = 'proto.pb.CourseReviewLog';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseReviewLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListCourseReviewLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseReviewLogsRequest.displayName = 'proto.pb.ListCourseReviewLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseReviewLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCourseReviewLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCourseReviewLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseReviewLogsResponse.displayName = 'proto.pb.ListCourseReviewLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminRefundCoursePurchaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminRefundCoursePurchaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminRefundCoursePurchaseRequest.displayName = 'proto.pb.AdminRefundCoursePurchaseRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminRefundCoursePurchaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminRefundCoursePurchaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminRefundCoursePurchaseResponse.displayName = 'proto.pb.AdminRefundCoursePurchaseResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminFreezeCourseEscrowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminFreezeCourseEscrowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminFreezeCourseEscrowRequest.displayName = 'proto.pb.AdminFreezeCourseEscrowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminFreezeCourseEscrowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminFreezeCourseEscrowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminFreezeCourseEscrowResponse.displayName = 'proto.pb.AdminFreezeCourseEscrowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminUnfreezeCourseEscrowRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminUnfreezeCourseEscrowRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminUnfreezeCourseEscrowRequest.displayName = 'proto.pb.AdminUnfreezeCourseEscrowRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminUnfreezeCourseEscrowResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminUnfreezeCourseEscrowResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminUnfreezeCourseEscrowResponse.displayName = 'proto.pb.AdminUnfreezeCourseEscrowResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListMyPurchasedCoursesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListMyPurchasedCoursesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListMyPurchasedCoursesRequest.displayName = 'proto.pb.ListMyPurchasedCoursesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListMyPurchasedCoursesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListMyPurchasedCoursesResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListMyPurchasedCoursesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListMyPurchasedCoursesResponse.displayName = 'proto.pb.ListMyPurchasedCoursesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.CourseVideoLearningProgress = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CourseVideoLearningProgress, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CourseVideoLearningProgress.displayName = 'proto.pb.CourseVideoLearningProgress';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseLearningProgressRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ListCourseLearningProgressRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseLearningProgressRequest.displayName = 'proto.pb.ListCourseLearningProgressRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.ListCourseLearningProgressResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ListCourseLearningProgressResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ListCourseLearningProgressResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ListCourseLearningProgressResponse.displayName = 'proto.pb.ListCourseLearningProgressResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminGetCoursePurchaseRefundDetailsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.displayName = 'proto.pb.AdminGetCoursePurchaseRefundDetailsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminGetCoursePurchaseRefundDetailsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.displayName = 'proto.pb.AdminGetCoursePurchaseRefundDetailsResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CoachLevelCommission.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CoachLevelCommission.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CoachLevelCommission} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CoachLevelCommission.toObject = function(includeInstance, msg) {
  var f, obj = {
level: jspb.Message.getFieldWithDefault(msg, 1, 0),
analysisCommissionRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
courseCommissionRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CoachLevelCommission}
 */
proto.pb.CoachLevelCommission.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CoachLevelCommission;
  return proto.pb.CoachLevelCommission.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CoachLevelCommission} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CoachLevelCommission}
 */
proto.pb.CoachLevelCommission.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnalysisCommissionRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCourseCommissionRate(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CoachLevelCommission.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CoachLevelCommission.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CoachLevelCommission} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CoachLevelCommission.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAnalysisCommissionRate();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCourseCommissionRate();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 level = 1;
 * @return {number}
 */
proto.pb.CoachLevelCommission.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoachLevelCommission} returns this
 */
proto.pb.CoachLevelCommission.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 analysis_commission_rate = 2;
 * @return {number}
 */
proto.pb.CoachLevelCommission.prototype.getAnalysisCommissionRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoachLevelCommission} returns this
 */
proto.pb.CoachLevelCommission.prototype.setAnalysisCommissionRate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 course_commission_rate = 3;
 * @return {number}
 */
proto.pb.CoachLevelCommission.prototype.getCourseCommissionRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoachLevelCommission} returns this
 */
proto.pb.CoachLevelCommission.prototype.setCourseCommissionRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp updated_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CoachLevelCommission.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CoachLevelCommission} returns this
*/
proto.pb.CoachLevelCommission.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CoachLevelCommission} returns this
 */
proto.pb.CoachLevelCommission.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoachLevelCommission.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCoachCommissionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCoachCommissionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCoachCommissionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoachCommissionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
instructorId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCoachCommissionsRequest}
 */
proto.pb.GetCoachCommissionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCoachCommissionsRequest;
  return proto.pb.GetCoachCommissionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCoachCommissionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCoachCommissionsRequest}
 */
proto.pb.GetCoachCommissionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInstructorId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCoachCommissionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCoachCommissionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCoachCommissionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoachCommissionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 instructor_id = 1;
 * @return {number}
 */
proto.pb.GetCoachCommissionsRequest.prototype.getInstructorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCoachCommissionsRequest} returns this
 */
proto.pb.GetCoachCommissionsRequest.prototype.setInstructorId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetCoachCommissionsRequest} returns this
 */
proto.pb.GetCoachCommissionsRequest.prototype.clearInstructorId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetCoachCommissionsRequest.prototype.hasInstructorId = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.GetCoachCommissionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCoachCommissionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCoachCommissionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCoachCommissionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoachCommissionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
levelCommissionsList: jspb.Message.toObjectList(msg.getLevelCommissionsList(),
    proto.pb.CoachLevelCommission.toObject, includeInstance),
instructorLevel: jspb.Message.getFieldWithDefault(msg, 2, 0),
instructorAnalysisCommissionRate: jspb.Message.getFieldWithDefault(msg, 3, 0),
instructorCourseCommissionRate: jspb.Message.getFieldWithDefault(msg, 4, 0),
isOverride: jspb.Message.getBooleanFieldWithDefault(msg, 5, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCoachCommissionsResponse}
 */
proto.pb.GetCoachCommissionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCoachCommissionsResponse;
  return proto.pb.GetCoachCommissionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCoachCommissionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCoachCommissionsResponse}
 */
proto.pb.GetCoachCommissionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CoachLevelCommission;
      reader.readMessage(value,proto.pb.CoachLevelCommission.deserializeBinaryFromReader);
      msg.addLevelCommissions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInstructorLevel(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInstructorAnalysisCommissionRate(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setInstructorCourseCommissionRate(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsOverride(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCoachCommissionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCoachCommissionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCoachCommissionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoachCommissionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevelCommissionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CoachLevelCommission.serializeBinaryToWriter
    );
  }
  f = message.getInstructorLevel();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getInstructorAnalysisCommissionRate();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getInstructorCourseCommissionRate();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getIsOverride();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
};


/**
 * repeated CoachLevelCommission level_commissions = 1;
 * @return {!Array<!proto.pb.CoachLevelCommission>}
 */
proto.pb.GetCoachCommissionsResponse.prototype.getLevelCommissionsList = function() {
  return /** @type{!Array<!proto.pb.CoachLevelCommission>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CoachLevelCommission, 1));
};


/**
 * @param {!Array<!proto.pb.CoachLevelCommission>} value
 * @return {!proto.pb.GetCoachCommissionsResponse} returns this
*/
proto.pb.GetCoachCommissionsResponse.prototype.setLevelCommissionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CoachLevelCommission=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CoachLevelCommission}
 */
proto.pb.GetCoachCommissionsResponse.prototype.addLevelCommissions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CoachLevelCommission, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.GetCoachCommissionsResponse} returns this
 */
proto.pb.GetCoachCommissionsResponse.prototype.clearLevelCommissionsList = function() {
  return this.setLevelCommissionsList([]);
};


/**
 * optional int32 instructor_level = 2;
 * @return {number}
 */
proto.pb.GetCoachCommissionsResponse.prototype.getInstructorLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCoachCommissionsResponse} returns this
 */
proto.pb.GetCoachCommissionsResponse.prototype.setInstructorLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 instructor_analysis_commission_rate = 3;
 * @return {number}
 */
proto.pb.GetCoachCommissionsResponse.prototype.getInstructorAnalysisCommissionRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCoachCommissionsResponse} returns this
 */
proto.pb.GetCoachCommissionsResponse.prototype.setInstructorAnalysisCommissionRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 instructor_course_commission_rate = 4;
 * @return {number}
 */
proto.pb.GetCoachCommissionsResponse.prototype.getInstructorCourseCommissionRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCoachCommissionsResponse} returns this
 */
proto.pb.GetCoachCommissionsResponse.prototype.setInstructorCourseCommissionRate = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool is_override = 5;
 * @return {boolean}
 */
proto.pb.GetCoachCommissionsResponse.prototype.getIsOverride = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetCoachCommissionsResponse} returns this
 */
proto.pb.GetCoachCommissionsResponse.prototype.setIsOverride = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCoachCommissionRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCoachCommissionRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCoachCommissionRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCoachCommissionRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
level: jspb.Message.getFieldWithDefault(msg, 1, 0),
analysisCommissionRate: jspb.Message.getFieldWithDefault(msg, 2, 0),
courseCommissionRate: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCoachCommissionRequest}
 */
proto.pb.UpdateCoachCommissionRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCoachCommissionRequest;
  return proto.pb.UpdateCoachCommissionRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCoachCommissionRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCoachCommissionRequest}
 */
proto.pb.UpdateCoachCommissionRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLevel(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnalysisCommissionRate(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCourseCommissionRate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCoachCommissionRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCoachCommissionRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCoachCommissionRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCoachCommissionRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLevel();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getAnalysisCommissionRate();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getCourseCommissionRate();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional int32 level = 1;
 * @return {number}
 */
proto.pb.UpdateCoachCommissionRequest.prototype.getLevel = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCoachCommissionRequest} returns this
 */
proto.pb.UpdateCoachCommissionRequest.prototype.setLevel = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 analysis_commission_rate = 2;
 * @return {number}
 */
proto.pb.UpdateCoachCommissionRequest.prototype.getAnalysisCommissionRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCoachCommissionRequest} returns this
 */
proto.pb.UpdateCoachCommissionRequest.prototype.setAnalysisCommissionRate = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 course_commission_rate = 3;
 * @return {number}
 */
proto.pb.UpdateCoachCommissionRequest.prototype.getCourseCommissionRate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCoachCommissionRequest} returns this
 */
proto.pb.UpdateCoachCommissionRequest.prototype.setCourseCommissionRate = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCoachCommissionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCoachCommissionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCoachCommissionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCoachCommissionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
commission: (f = msg.getCommission()) && proto.pb.CoachLevelCommission.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCoachCommissionResponse}
 */
proto.pb.UpdateCoachCommissionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCoachCommissionResponse;
  return proto.pb.UpdateCoachCommissionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCoachCommissionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCoachCommissionResponse}
 */
proto.pb.UpdateCoachCommissionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CoachLevelCommission;
      reader.readMessage(value,proto.pb.CoachLevelCommission.deserializeBinaryFromReader);
      msg.setCommission(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCoachCommissionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCoachCommissionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCoachCommissionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCoachCommissionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCommission();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.CoachLevelCommission.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoachLevelCommission commission = 1;
 * @return {?proto.pb.CoachLevelCommission}
 */
proto.pb.UpdateCoachCommissionResponse.prototype.getCommission = function() {
  return /** @type{?proto.pb.CoachLevelCommission} */ (
    jspb.Message.getWrapperField(this, proto.pb.CoachLevelCommission, 1));
};


/**
 * @param {?proto.pb.CoachLevelCommission|undefined} value
 * @return {!proto.pb.UpdateCoachCommissionResponse} returns this
*/
proto.pb.UpdateCoachCommissionResponse.prototype.setCommission = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCoachCommissionResponse} returns this
 */
proto.pb.UpdateCoachCommissionResponse.prototype.clearCommission = function() {
  return this.setCommission(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCoachCommissionResponse.prototype.hasCommission = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.Course.repeatedFields_ = [8];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.Course.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.Course.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.Course} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Course.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
instructorId: jspb.Message.getFieldWithDefault(msg, 2, 0),
title: jspb.Message.getFieldWithDefault(msg, 3, ""),
description: jspb.Message.getFieldWithDefault(msg, 4, ""),
price: jspb.Message.getFieldWithDefault(msg, 5, 0),
coverImageUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
audioLanguage: jspb.Message.getFieldWithDefault(msg, 7, ""),
supportedSubtitlesList: (f = jspb.Message.getRepeatedField(msg, 8)) == null ? undefined : f,
discountPrice: jspb.Message.getFieldWithDefault(msg, 9, 0),
discountStartAt: (f = msg.getDiscountStartAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
discountEndAt: (f = msg.getDiscountEndAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
hasAnalysisQuota: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
analysisQuotaLimit: jspb.Message.getFieldWithDefault(msg, 13, 0),
status: jspb.Message.getFieldWithDefault(msg, 14, ""),
rejectionReason: jspb.Message.getFieldWithDefault(msg, 15, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
categoryCode: jspb.Message.getFieldWithDefault(msg, 18, ""),
styleCode: jspb.Message.getFieldWithDefault(msg, 19, ""),
levelCode: jspb.Message.getFieldWithDefault(msg, 20, ""),
instructorNickname: jspb.Message.getFieldWithDefault(msg, 21, ""),
duration: jspb.Message.getFieldWithDefault(msg, 22, 0),
averageRating: jspb.Message.getFloatingPointFieldWithDefault(msg, 23, 0.0),
totalReviews: jspb.Message.getFieldWithDefault(msg, 24, 0),
totalSold: jspb.Message.getFieldWithDefault(msg, 25, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.Course}
 */
proto.pb.Course.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.Course;
  return proto.pb.Course.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.Course} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.Course}
 */
proto.pb.Course.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setInstructorId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCoverImageUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAudioLanguage(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSupportedSubtitles(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiscountPrice(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDiscountStartAt(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDiscountEndAt(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasAnalysisQuota(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnalysisQuotaLimit(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRejectionReason(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCategoryCode(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStyleCode(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLevelCode(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setInstructorNickname(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setAverageRating(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalReviews(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTotalSold(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.Course.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.Course.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.Course} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.Course.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getInstructorId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCoverImageUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAudioLanguage();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getSupportedSubtitlesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      8,
      f
    );
  }
  f = message.getDiscountPrice();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getDiscountStartAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDiscountEndAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHasAnalysisQuota();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getAnalysisQuotaLimit();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getRejectionReason();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCategoryCode();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getStyleCode();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getLevelCode();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getInstructorNickname();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      22,
      f
    );
  }
  f = message.getAverageRating();
  if (f !== 0.0) {
    writer.writeDouble(
      23,
      f
    );
  }
  f = message.getTotalReviews();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getTotalSold();
  if (f !== 0) {
    writer.writeInt32(
      25,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.Course.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 instructor_id = 2;
 * @return {number}
 */
proto.pb.Course.prototype.getInstructorId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setInstructorId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.pb.Course.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.pb.Course.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 price = 5;
 * @return {number}
 */
proto.pb.Course.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string cover_image_url = 6;
 * @return {string}
 */
proto.pb.Course.prototype.getCoverImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setCoverImageUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string audio_language = 7;
 * @return {string}
 */
proto.pb.Course.prototype.getAudioLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setAudioLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated string supported_subtitles = 8;
 * @return {!Array<string>}
 */
proto.pb.Course.prototype.getSupportedSubtitlesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 8));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setSupportedSubtitlesList = function(value) {
  return jspb.Message.setField(this, 8, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.addSupportedSubtitles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 8, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.clearSupportedSubtitlesList = function() {
  return this.setSupportedSubtitlesList([]);
};


/**
 * optional int32 discount_price = 9;
 * @return {number}
 */
proto.pb.Course.prototype.getDiscountPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setDiscountPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional google.protobuf.Timestamp discount_start_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Course.prototype.getDiscountStartAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Course} returns this
*/
proto.pb.Course.prototype.setDiscountStartAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.clearDiscountStartAt = function() {
  return this.setDiscountStartAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Course.prototype.hasDiscountStartAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional google.protobuf.Timestamp discount_end_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Course.prototype.getDiscountEndAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Course} returns this
*/
proto.pb.Course.prototype.setDiscountEndAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.clearDiscountEndAt = function() {
  return this.setDiscountEndAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Course.prototype.hasDiscountEndAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional bool has_analysis_quota = 12;
 * @return {boolean}
 */
proto.pb.Course.prototype.getHasAnalysisQuota = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setHasAnalysisQuota = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional int32 analysis_quota_limit = 13;
 * @return {number}
 */
proto.pb.Course.prototype.getAnalysisQuotaLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setAnalysisQuotaLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string status = 14;
 * @return {string}
 */
proto.pb.Course.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string rejection_reason = 15;
 * @return {string}
 */
proto.pb.Course.prototype.getRejectionReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setRejectionReason = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Course.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Course} returns this
*/
proto.pb.Course.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Course.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.Course.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.Course} returns this
*/
proto.pb.Course.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.Course.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string category_code = 18;
 * @return {string}
 */
proto.pb.Course.prototype.getCategoryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setCategoryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string style_code = 19;
 * @return {string}
 */
proto.pb.Course.prototype.getStyleCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setStyleCode = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string level_code = 20;
 * @return {string}
 */
proto.pb.Course.prototype.getLevelCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setLevelCode = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string instructor_nickname = 21;
 * @return {string}
 */
proto.pb.Course.prototype.getInstructorNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setInstructorNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional int32 duration = 22;
 * @return {number}
 */
proto.pb.Course.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional double average_rating = 23;
 * @return {number}
 */
proto.pb.Course.prototype.getAverageRating = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 23, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setAverageRating = function(value) {
  return jspb.Message.setProto3FloatField(this, 23, value);
};


/**
 * optional int32 total_reviews = 24;
 * @return {number}
 */
proto.pb.Course.prototype.getTotalReviews = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setTotalReviews = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional int32 total_sold = 25;
 * @return {number}
 */
proto.pb.Course.prototype.getTotalSold = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.Course} returns this
 */
proto.pb.Course.prototype.setTotalSold = function(value) {
  return jspb.Message.setProto3IntField(this, 25, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.CourseVideo.repeatedFields_ = [10,16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CourseVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CourseVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CourseVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
courseId: jspb.Message.getFieldWithDefault(msg, 2, 0),
title: jspb.Message.getFieldWithDefault(msg, 3, ""),
videoUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
duration: jspb.Message.getFieldWithDefault(msg, 5, 0),
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 6, 0),
isPreviewable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
decryptKey: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
subtitlesList: jspb.Message.toObjectList(msg.getSubtitlesList(),
    proto.pb.VideoSubtitle.toObject, includeInstance),
isReviewed: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
isArchived: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
rejectionReason: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
reviewedAt: (f = msg.getReviewedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
processingStatus: jspb.Message.getFieldWithDefault(msg, 15, ""),
missingSubtitleLanguagesList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CourseVideo}
 */
proto.pb.CourseVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CourseVideo;
  return proto.pb.CourseVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CourseVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CourseVideo}
 */
proto.pb.CourseVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVideoUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreviewable(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDecryptKey(value);
      break;
    case 10:
      var value = new proto.pb.VideoSubtitle;
      reader.readMessage(value,proto.pb.VideoSubtitle.deserializeBinaryFromReader);
      msg.addSubtitles(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReviewed(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsArchived(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRejectionReason(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReviewedAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProcessingStatus(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addMissingSubtitleLanguages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CourseVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CourseVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CourseVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVideoUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getIsPreviewable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getSubtitlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto.pb.VideoSubtitle.serializeBinaryToWriter
    );
  }
  f = message.getIsReviewed();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getIsArchived();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getReviewedAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProcessingStatus();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getMissingSubtitleLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.CourseVideo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 course_id = 2;
 * @return {number}
 */
proto.pb.CourseVideo.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.pb.CourseVideo.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string video_url = 4;
 * @return {string}
 */
proto.pb.CourseVideo.prototype.getVideoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setVideoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 duration = 5;
 * @return {number}
 */
proto.pb.CourseVideo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 sequence_number = 6;
 * @return {number}
 */
proto.pb.CourseVideo.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool is_previewable = 7;
 * @return {boolean}
 */
proto.pb.CourseVideo.prototype.getIsPreviewable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setIsPreviewable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideo.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideo} returns this
*/
proto.pb.CourseVideo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideo.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string decrypt_key = 9;
 * @return {string}
 */
proto.pb.CourseVideo.prototype.getDecryptKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setDecryptKey = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.clearDecryptKey = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideo.prototype.hasDecryptKey = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * repeated VideoSubtitle subtitles = 10;
 * @return {!Array<!proto.pb.VideoSubtitle>}
 */
proto.pb.CourseVideo.prototype.getSubtitlesList = function() {
  return /** @type{!Array<!proto.pb.VideoSubtitle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.VideoSubtitle, 10));
};


/**
 * @param {!Array<!proto.pb.VideoSubtitle>} value
 * @return {!proto.pb.CourseVideo} returns this
*/
proto.pb.CourseVideo.prototype.setSubtitlesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.pb.VideoSubtitle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.VideoSubtitle}
 */
proto.pb.CourseVideo.prototype.addSubtitles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.pb.VideoSubtitle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.clearSubtitlesList = function() {
  return this.setSubtitlesList([]);
};


/**
 * optional bool is_reviewed = 11;
 * @return {boolean}
 */
proto.pb.CourseVideo.prototype.getIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setIsReviewed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional bool is_archived = 12;
 * @return {boolean}
 */
proto.pb.CourseVideo.prototype.getIsArchived = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setIsArchived = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional string rejection_reason = 13;
 * @return {string}
 */
proto.pb.CourseVideo.prototype.getRejectionReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setRejectionReason = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.clearRejectionReason = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideo.prototype.hasRejectionReason = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp reviewed_at = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideo.prototype.getReviewedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideo} returns this
*/
proto.pb.CourseVideo.prototype.setReviewedAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.clearReviewedAt = function() {
  return this.setReviewedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideo.prototype.hasReviewedAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string processing_status = 15;
 * @return {string}
 */
proto.pb.CourseVideo.prototype.getProcessingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setProcessingStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated string missing_subtitle_languages = 16;
 * @return {!Array<string>}
 */
proto.pb.CourseVideo.prototype.getMissingSubtitleLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.setMissingSubtitleLanguagesList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.addMissingSubtitleLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.CourseVideo} returns this
 */
proto.pb.CourseVideo.prototype.clearMissingSubtitleLanguagesList = function() {
  return this.setMissingSubtitleLanguagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CreateCourseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CreateCourseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CreateCourseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
title: jspb.Message.getFieldWithDefault(msg, 1, ""),
description: jspb.Message.getFieldWithDefault(msg, 2, ""),
price: jspb.Message.getFieldWithDefault(msg, 3, 0),
audioLanguage: jspb.Message.getFieldWithDefault(msg, 4, ""),
hasAnalysisQuota: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
analysisQuotaLimit: jspb.Message.getFieldWithDefault(msg, 6, 0),
categoryCode: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
styleCode: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
levelCode: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CreateCourseRequest}
 */
proto.pb.CreateCourseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CreateCourseRequest;
  return proto.pb.CreateCourseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CreateCourseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CreateCourseRequest}
 */
proto.pb.CreateCourseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAudioLanguage(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasAnalysisQuota(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnalysisQuotaLimit(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCategoryCode(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStyleCode(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLevelCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CreateCourseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CreateCourseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CreateCourseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPrice();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getAudioLanguage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHasAnalysisQuota();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getAnalysisQuotaLimit();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.pb.CreateCourseRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.pb.CreateCourseRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 price = 3;
 * @return {number}
 */
proto.pb.CreateCourseRequest.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string audio_language = 4;
 * @return {string}
 */
proto.pb.CreateCourseRequest.prototype.getAudioLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setAudioLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional bool has_analysis_quota = 5;
 * @return {boolean}
 */
proto.pb.CreateCourseRequest.prototype.getHasAnalysisQuota = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setHasAnalysisQuota = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int32 analysis_quota_limit = 6;
 * @return {number}
 */
proto.pb.CreateCourseRequest.prototype.getAnalysisQuotaLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setAnalysisQuotaLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string category_code = 7;
 * @return {string}
 */
proto.pb.CreateCourseRequest.prototype.getCategoryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setCategoryCode = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.clearCategoryCode = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CreateCourseRequest.prototype.hasCategoryCode = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string style_code = 8;
 * @return {string}
 */
proto.pb.CreateCourseRequest.prototype.getStyleCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setStyleCode = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.clearStyleCode = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CreateCourseRequest.prototype.hasStyleCode = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string level_code = 9;
 * @return {string}
 */
proto.pb.CreateCourseRequest.prototype.getLevelCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.setLevelCode = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CreateCourseRequest} returns this
 */
proto.pb.CreateCourseRequest.prototype.clearLevelCode = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CreateCourseRequest.prototype.hasLevelCode = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CreateCourseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CreateCourseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CreateCourseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
course: (f = msg.getCourse()) && proto.pb.Course.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CreateCourseResponse}
 */
proto.pb.CreateCourseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CreateCourseResponse;
  return proto.pb.CreateCourseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CreateCourseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CreateCourseResponse}
 */
proto.pb.CreateCourseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Course;
      reader.readMessage(value,proto.pb.Course.deserializeBinaryFromReader);
      msg.setCourse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CreateCourseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CreateCourseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CreateCourseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Course.serializeBinaryToWriter
    );
  }
};


/**
 * optional Course course = 1;
 * @return {?proto.pb.Course}
 */
proto.pb.CreateCourseResponse.prototype.getCourse = function() {
  return /** @type{?proto.pb.Course} */ (
    jspb.Message.getWrapperField(this, proto.pb.Course, 1));
};


/**
 * @param {?proto.pb.Course|undefined} value
 * @return {!proto.pb.CreateCourseResponse} returns this
*/
proto.pb.CreateCourseResponse.prototype.setCourse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CreateCourseResponse} returns this
 */
proto.pb.CreateCourseResponse.prototype.clearCourse = function() {
  return this.setCourse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CreateCourseResponse.prototype.hasCourse = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.UpdateCourseRequest.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
title: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
description: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
price: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
coverImageUrl: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
audioLanguage: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
supportedSubtitlesList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
discountPrice: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
discountStartAt: (f = msg.getDiscountStartAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
discountEndAt: (f = msg.getDiscountEndAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
hasAnalysisQuota: (f = jspb.Message.getBooleanField(msg, 11)) == null ? undefined : f,
analysisQuotaLimit: (f = jspb.Message.getField(msg, 12)) == null ? undefined : f,
status: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
rejectionReason: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
categoryCode: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
styleCode: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
levelCode: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseRequest}
 */
proto.pb.UpdateCourseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseRequest;
  return proto.pb.UpdateCourseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseRequest}
 */
proto.pb.UpdateCourseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDescription(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPrice(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCoverImageUrl(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAudioLanguage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addSupportedSubtitles(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDiscountPrice(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDiscountStartAt(value);
      break;
    case 10:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDiscountEndAt(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasAnalysisQuota(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnalysisQuotaLimit(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRejectionReason(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCategoryCode(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStyleCode(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLevelCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSupportedSubtitlesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getDiscountStartAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getDiscountEndAt();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 11));
  if (f != null) {
    writer.writeBool(
      11,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 12));
  if (f != null) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeString(
      17,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.UpdateCourseRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string description = 3;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setDescription = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearDescription = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasDescription = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 price = 4;
 * @return {number}
 */
proto.pb.UpdateCourseRequest.prototype.getPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setPrice = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearPrice = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasPrice = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string cover_image_url = 5;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getCoverImageUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setCoverImageUrl = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearCoverImageUrl = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasCoverImageUrl = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string audio_language = 6;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getAudioLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setAudioLanguage = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearAudioLanguage = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasAudioLanguage = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * repeated string supported_subtitles = 7;
 * @return {!Array<string>}
 */
proto.pb.UpdateCourseRequest.prototype.getSupportedSubtitlesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setSupportedSubtitlesList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.addSupportedSubtitles = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearSupportedSubtitlesList = function() {
  return this.setSupportedSubtitlesList([]);
};


/**
 * optional int32 discount_price = 8;
 * @return {number}
 */
proto.pb.UpdateCourseRequest.prototype.getDiscountPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setDiscountPrice = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearDiscountPrice = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasDiscountPrice = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp discount_start_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.UpdateCourseRequest.prototype.getDiscountStartAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
*/
proto.pb.UpdateCourseRequest.prototype.setDiscountStartAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearDiscountStartAt = function() {
  return this.setDiscountStartAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasDiscountStartAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional google.protobuf.Timestamp discount_end_at = 10;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.UpdateCourseRequest.prototype.getDiscountEndAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 10));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
*/
proto.pb.UpdateCourseRequest.prototype.setDiscountEndAt = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearDiscountEndAt = function() {
  return this.setDiscountEndAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasDiscountEndAt = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional bool has_analysis_quota = 11;
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.getHasAnalysisQuota = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setHasAnalysisQuota = function(value) {
  return jspb.Message.setField(this, 11, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearHasAnalysisQuota = function() {
  return jspb.Message.setField(this, 11, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasHasAnalysisQuota = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional int32 analysis_quota_limit = 12;
 * @return {number}
 */
proto.pb.UpdateCourseRequest.prototype.getAnalysisQuotaLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setAnalysisQuotaLimit = function(value) {
  return jspb.Message.setField(this, 12, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearAnalysisQuotaLimit = function() {
  return jspb.Message.setField(this, 12, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasAnalysisQuotaLimit = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional string status = 13;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string rejection_reason = 14;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getRejectionReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setRejectionReason = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearRejectionReason = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasRejectionReason = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string category_code = 15;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getCategoryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setCategoryCode = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearCategoryCode = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasCategoryCode = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string style_code = 16;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getStyleCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setStyleCode = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearStyleCode = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasStyleCode = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional string level_code = 17;
 * @return {string}
 */
proto.pb.UpdateCourseRequest.prototype.getLevelCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.setLevelCode = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseRequest} returns this
 */
proto.pb.UpdateCourseRequest.prototype.clearLevelCode = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseRequest.prototype.hasLevelCode = function() {
  return jspb.Message.getField(this, 17) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.DeleteCourseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.DeleteCourseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.DeleteCourseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DeleteCourseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.DeleteCourseRequest}
 */
proto.pb.DeleteCourseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.DeleteCourseRequest;
  return proto.pb.DeleteCourseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.DeleteCourseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.DeleteCourseRequest}
 */
proto.pb.DeleteCourseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.DeleteCourseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.DeleteCourseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.DeleteCourseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DeleteCourseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.DeleteCourseRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.DeleteCourseRequest} returns this
 */
proto.pb.DeleteCourseRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.DeleteCourseVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.DeleteCourseVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.DeleteCourseVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DeleteCourseVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.DeleteCourseVideoRequest}
 */
proto.pb.DeleteCourseVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.DeleteCourseVideoRequest;
  return proto.pb.DeleteCourseVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.DeleteCourseVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.DeleteCourseVideoRequest}
 */
proto.pb.DeleteCourseVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.DeleteCourseVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.DeleteCourseVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.DeleteCourseVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DeleteCourseVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.DeleteCourseVideoRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.DeleteCourseVideoRequest} returns this
 */
proto.pb.DeleteCourseVideoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.SearchCoursesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.SearchCoursesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.SearchCoursesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.SearchCoursesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
keyword: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
categoryCode: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
styleCode: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
levelCode: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
minPrice: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
maxPrice: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
sortBy: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
pageId: jspb.Message.getFieldWithDefault(msg, 8, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 9, 0),
audioLanguage: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.SearchCoursesRequest}
 */
proto.pb.SearchCoursesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.SearchCoursesRequest;
  return proto.pb.SearchCoursesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.SearchCoursesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.SearchCoursesRequest}
 */
proto.pb.SearchCoursesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setKeyword(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCategoryCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStyleCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLevelCode(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMinPrice(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxPrice(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSortBy(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAudioLanguage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.SearchCoursesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.SearchCoursesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.SearchCoursesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.SearchCoursesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPageId();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional string keyword = 1;
 * @return {string}
 */
proto.pb.SearchCoursesRequest.prototype.getKeyword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setKeyword = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearKeyword = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasKeyword = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string category_code = 2;
 * @return {string}
 */
proto.pb.SearchCoursesRequest.prototype.getCategoryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setCategoryCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearCategoryCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasCategoryCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string style_code = 3;
 * @return {string}
 */
proto.pb.SearchCoursesRequest.prototype.getStyleCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setStyleCode = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearStyleCode = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasStyleCode = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string level_code = 4;
 * @return {string}
 */
proto.pb.SearchCoursesRequest.prototype.getLevelCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setLevelCode = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearLevelCode = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasLevelCode = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 min_price = 5;
 * @return {number}
 */
proto.pb.SearchCoursesRequest.prototype.getMinPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setMinPrice = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearMinPrice = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasMinPrice = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 max_price = 6;
 * @return {number}
 */
proto.pb.SearchCoursesRequest.prototype.getMaxPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setMaxPrice = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearMaxPrice = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasMaxPrice = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string sort_by = 7;
 * @return {string}
 */
proto.pb.SearchCoursesRequest.prototype.getSortBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setSortBy = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearSortBy = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasSortBy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 page_id = 8;
 * @return {number}
 */
proto.pb.SearchCoursesRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 page_size = 9;
 * @return {number}
 */
proto.pb.SearchCoursesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string audio_language = 10;
 * @return {string}
 */
proto.pb.SearchCoursesRequest.prototype.getAudioLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.setAudioLanguage = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SearchCoursesRequest} returns this
 */
proto.pb.SearchCoursesRequest.prototype.clearAudioLanguage = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SearchCoursesRequest.prototype.hasAudioLanguage = function() {
  return jspb.Message.getField(this, 10) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
course: (f = msg.getCourse()) && proto.pb.Course.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseResponse}
 */
proto.pb.UpdateCourseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseResponse;
  return proto.pb.UpdateCourseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseResponse}
 */
proto.pb.UpdateCourseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Course;
      reader.readMessage(value,proto.pb.Course.deserializeBinaryFromReader);
      msg.setCourse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Course.serializeBinaryToWriter
    );
  }
};


/**
 * optional Course course = 1;
 * @return {?proto.pb.Course}
 */
proto.pb.UpdateCourseResponse.prototype.getCourse = function() {
  return /** @type{?proto.pb.Course} */ (
    jspb.Message.getWrapperField(this, proto.pb.Course, 1));
};


/**
 * @param {?proto.pb.Course|undefined} value
 * @return {!proto.pb.UpdateCourseResponse} returns this
*/
proto.pb.UpdateCourseResponse.prototype.setCourse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCourseResponse} returns this
 */
proto.pb.UpdateCourseResponse.prototype.clearCourse = function() {
  return this.setCourse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseResponse.prototype.hasCourse = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CreateCourseVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CreateCourseVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CreateCourseVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
videoUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
duration: jspb.Message.getFieldWithDefault(msg, 4, 0),
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 5, 0),
isPreviewable: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
decryptKey: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CreateCourseVideoRequest}
 */
proto.pb.CreateCourseVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CreateCourseVideoRequest;
  return proto.pb.CreateCourseVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CreateCourseVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CreateCourseVideoRequest}
 */
proto.pb.CreateCourseVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVideoUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreviewable(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDecryptKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CreateCourseVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CreateCourseVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CreateCourseVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVideoUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getIsPreviewable();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.CreateCourseVideoRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.pb.CreateCourseVideoRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string video_url = 3;
 * @return {string}
 */
proto.pb.CreateCourseVideoRequest.prototype.getVideoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.setVideoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 duration = 4;
 * @return {number}
 */
proto.pb.CreateCourseVideoRequest.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 sequence_number = 5;
 * @return {number}
 */
proto.pb.CreateCourseVideoRequest.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool is_previewable = 6;
 * @return {boolean}
 */
proto.pb.CreateCourseVideoRequest.prototype.getIsPreviewable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.setIsPreviewable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string decrypt_key = 7;
 * @return {string}
 */
proto.pb.CreateCourseVideoRequest.prototype.getDecryptKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.setDecryptKey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CreateCourseVideoRequest} returns this
 */
proto.pb.CreateCourseVideoRequest.prototype.clearDecryptKey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CreateCourseVideoRequest.prototype.hasDecryptKey = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CreateCourseVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CreateCourseVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CreateCourseVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
video: (f = msg.getVideo()) && proto.pb.CourseVideo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CreateCourseVideoResponse}
 */
proto.pb.CreateCourseVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CreateCourseVideoResponse;
  return proto.pb.CreateCourseVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CreateCourseVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CreateCourseVideoResponse}
 */
proto.pb.CreateCourseVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseVideo;
      reader.readMessage(value,proto.pb.CourseVideo.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CreateCourseVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CreateCourseVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CreateCourseVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.CourseVideo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CourseVideo video = 1;
 * @return {?proto.pb.CourseVideo}
 */
proto.pb.CreateCourseVideoResponse.prototype.getVideo = function() {
  return /** @type{?proto.pb.CourseVideo} */ (
    jspb.Message.getWrapperField(this, proto.pb.CourseVideo, 1));
};


/**
 * @param {?proto.pb.CourseVideo|undefined} value
 * @return {!proto.pb.CreateCourseVideoResponse} returns this
*/
proto.pb.CreateCourseVideoResponse.prototype.setVideo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CreateCourseVideoResponse} returns this
 */
proto.pb.CreateCourseVideoResponse.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CreateCourseVideoResponse.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseVideoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseVideoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseVideoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseVideoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
title: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
videoUrl: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
duration: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
sequenceNumber: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
isPreviewable: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
decryptKey: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
isReviewed: (f = jspb.Message.getBooleanField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseVideoRequest}
 */
proto.pb.UpdateCourseVideoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseVideoRequest;
  return proto.pb.UpdateCourseVideoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseVideoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseVideoRequest}
 */
proto.pb.UpdateCourseVideoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVideoUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreviewable(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDecryptKey(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReviewed(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseVideoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseVideoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseVideoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseVideoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeBool(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeBool(
      8,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setTitle = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.clearTitle = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.hasTitle = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string video_url = 3;
 * @return {string}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getVideoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setVideoUrl = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.clearVideoUrl = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.hasVideoUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int32 duration = 4;
 * @return {number}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setDuration = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.clearDuration = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.hasDuration = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 sequence_number = 5;
 * @return {number}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.clearSequenceNumber = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.hasSequenceNumber = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional bool is_previewable = 6;
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getIsPreviewable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setIsPreviewable = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.clearIsPreviewable = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.hasIsPreviewable = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string decrypt_key = 7;
 * @return {string}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getDecryptKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setDecryptKey = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.clearDecryptKey = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.hasDecryptKey = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional bool is_reviewed = 8;
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.getIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.setIsReviewed = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoRequest} returns this
 */
proto.pb.UpdateCourseVideoRequest.prototype.clearIsReviewed = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoRequest.prototype.hasIsReviewed = function() {
  return jspb.Message.getField(this, 8) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseVideoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseVideoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseVideoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseVideoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
video: (f = msg.getVideo()) && proto.pb.CourseVideo.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseVideoResponse}
 */
proto.pb.UpdateCourseVideoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseVideoResponse;
  return proto.pb.UpdateCourseVideoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseVideoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseVideoResponse}
 */
proto.pb.UpdateCourseVideoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseVideo;
      reader.readMessage(value,proto.pb.CourseVideo.deserializeBinaryFromReader);
      msg.setVideo(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseVideoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseVideoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseVideoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseVideoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideo();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.CourseVideo.serializeBinaryToWriter
    );
  }
};


/**
 * optional CourseVideo video = 1;
 * @return {?proto.pb.CourseVideo}
 */
proto.pb.UpdateCourseVideoResponse.prototype.getVideo = function() {
  return /** @type{?proto.pb.CourseVideo} */ (
    jspb.Message.getWrapperField(this, proto.pb.CourseVideo, 1));
};


/**
 * @param {?proto.pb.CourseVideo|undefined} value
 * @return {!proto.pb.UpdateCourseVideoResponse} returns this
*/
proto.pb.UpdateCourseVideoResponse.prototype.setVideo = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCourseVideoResponse} returns this
 */
proto.pb.UpdateCourseVideoResponse.prototype.clearVideo = function() {
  return this.setVideo(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseVideoResponse.prototype.hasVideo = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseRequest}
 */
proto.pb.GetCourseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseRequest;
  return proto.pb.GetCourseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseRequest}
 */
proto.pb.GetCourseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.GetCourseRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseRequest} returns this
 */
proto.pb.GetCourseRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
course: (f = msg.getCourse()) && proto.pb.Course.toObject(includeInstance, f),
isPurchased: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
hasDownloadedOffline: (f = jspb.Message.getBooleanField(msg, 3)) == null ? undefined : f,
isRepurchase: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseResponse}
 */
proto.pb.GetCourseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseResponse;
  return proto.pb.GetCourseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseResponse}
 */
proto.pb.GetCourseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Course;
      reader.readMessage(value,proto.pb.Course.deserializeBinaryFromReader);
      msg.setCourse(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPurchased(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDownloadedOffline(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRepurchase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Course.serializeBinaryToWriter
    );
  }
  f = message.getIsPurchased();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getIsRepurchase();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional Course course = 1;
 * @return {?proto.pb.Course}
 */
proto.pb.GetCourseResponse.prototype.getCourse = function() {
  return /** @type{?proto.pb.Course} */ (
    jspb.Message.getWrapperField(this, proto.pb.Course, 1));
};


/**
 * @param {?proto.pb.Course|undefined} value
 * @return {!proto.pb.GetCourseResponse} returns this
*/
proto.pb.GetCourseResponse.prototype.setCourse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.GetCourseResponse} returns this
 */
proto.pb.GetCourseResponse.prototype.clearCourse = function() {
  return this.setCourse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetCourseResponse.prototype.hasCourse = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool is_purchased = 2;
 * @return {boolean}
 */
proto.pb.GetCourseResponse.prototype.getIsPurchased = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetCourseResponse} returns this
 */
proto.pb.GetCourseResponse.prototype.setIsPurchased = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool has_downloaded_offline = 3;
 * @return {boolean}
 */
proto.pb.GetCourseResponse.prototype.getHasDownloadedOffline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetCourseResponse} returns this
 */
proto.pb.GetCourseResponse.prototype.setHasDownloadedOffline = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetCourseResponse} returns this
 */
proto.pb.GetCourseResponse.prototype.clearHasDownloadedOffline = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetCourseResponse.prototype.hasHasDownloadedOffline = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool is_repurchase = 4;
 * @return {boolean}
 */
proto.pb.GetCourseResponse.prototype.getIsRepurchase = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetCourseResponse} returns this
 */
proto.pb.GetCourseResponse.prototype.setIsRepurchase = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseVideosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseVideosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseVideosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseVideosRequest}
 */
proto.pb.ListCourseVideosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseVideosRequest;
  return proto.pb.ListCourseVideosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseVideosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseVideosRequest}
 */
proto.pb.ListCourseVideosRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseVideosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseVideosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseVideosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideosRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.ListCourseVideosRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseVideosRequest} returns this
 */
proto.pb.ListCourseVideosRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCourseVideosResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseVideosResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseVideosResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseVideosResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideosResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
videosList: jspb.Message.toObjectList(msg.getVideosList(),
    proto.pb.CourseVideo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseVideosResponse}
 */
proto.pb.ListCourseVideosResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseVideosResponse;
  return proto.pb.ListCourseVideosResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseVideosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseVideosResponse}
 */
proto.pb.ListCourseVideosResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseVideo;
      reader.readMessage(value,proto.pb.CourseVideo.deserializeBinaryFromReader);
      msg.addVideos(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseVideosResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseVideosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseVideosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideosResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CourseVideo.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CourseVideo videos = 1;
 * @return {!Array<!proto.pb.CourseVideo>}
 */
proto.pb.ListCourseVideosResponse.prototype.getVideosList = function() {
  return /** @type{!Array<!proto.pb.CourseVideo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseVideo, 1));
};


/**
 * @param {!Array<!proto.pb.CourseVideo>} value
 * @return {!proto.pb.ListCourseVideosResponse} returns this
*/
proto.pb.ListCourseVideosResponse.prototype.setVideosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CourseVideo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseVideo}
 */
proto.pb.ListCourseVideosResponse.prototype.addVideos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CourseVideo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseVideosResponse} returns this
 */
proto.pb.ListCourseVideosResponse.prototype.clearVideosList = function() {
  return this.setVideosList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
status: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
rejectionReason: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseStatusRequest}
 */
proto.pb.UpdateCourseStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseStatusRequest;
  return proto.pb.UpdateCourseStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseStatusRequest}
 */
proto.pb.UpdateCourseStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRejectionReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.UpdateCourseStatusRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseStatusRequest} returns this
 */
proto.pb.UpdateCourseStatusRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.pb.UpdateCourseStatusRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseStatusRequest} returns this
 */
proto.pb.UpdateCourseStatusRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseStatusRequest} returns this
 */
proto.pb.UpdateCourseStatusRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseStatusRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string rejection_reason = 3;
 * @return {string}
 */
proto.pb.UpdateCourseStatusRequest.prototype.getRejectionReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseStatusRequest} returns this
 */
proto.pb.UpdateCourseStatusRequest.prototype.setRejectionReason = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseStatusRequest} returns this
 */
proto.pb.UpdateCourseStatusRequest.prototype.clearRejectionReason = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseStatusRequest.prototype.hasRejectionReason = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
course: (f = msg.getCourse()) && proto.pb.Course.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseStatusResponse}
 */
proto.pb.UpdateCourseStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseStatusResponse;
  return proto.pb.UpdateCourseStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseStatusResponse}
 */
proto.pb.UpdateCourseStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Course;
      reader.readMessage(value,proto.pb.Course.deserializeBinaryFromReader);
      msg.setCourse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourse();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.Course.serializeBinaryToWriter
    );
  }
};


/**
 * optional Course course = 1;
 * @return {?proto.pb.Course}
 */
proto.pb.UpdateCourseStatusResponse.prototype.getCourse = function() {
  return /** @type{?proto.pb.Course} */ (
    jspb.Message.getWrapperField(this, proto.pb.Course, 1));
};


/**
 * @param {?proto.pb.Course|undefined} value
 * @return {!proto.pb.UpdateCourseStatusResponse} returns this
*/
proto.pb.UpdateCourseStatusResponse.prototype.setCourse = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCourseStatusResponse} returns this
 */
proto.pb.UpdateCourseStatusResponse.prototype.clearCourse = function() {
  return this.setCourse(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseStatusResponse.prototype.hasCourse = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CoursePurchase.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CoursePurchase.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CoursePurchase} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CoursePurchase.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
courseId: jspb.Message.getFieldWithDefault(msg, 3, 0),
purchasePrice: jspb.Message.getFieldWithDefault(msg, 4, 0),
remainingAnalysisQuota: jspb.Message.getFieldWithDefault(msg, 5, 0),
status: jspb.Message.getFieldWithDefault(msg, 6, ""),
escrowReleased: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
purchasedAt: (f = msg.getPurchasedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
hasDownloadedOffline: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
uuidId: jspb.Message.getFieldWithDefault(msg, 10, ""),
isRefundable: jspb.Message.getBooleanFieldWithDefault(msg, 11, false),
snapshotJson: jspb.Message.getFieldWithDefault(msg, 12, ""),
escrowStatus: jspb.Message.getFieldWithDefault(msg, 13, ""),
frozenReason: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
frozenByAdminId: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
frozenAt: (f = msg.getFrozenAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
unfrozenByAdminId: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
unfrozenAt: (f = msg.getUnfrozenAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
releaseDeadline: (f = msg.getReleaseDeadline()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
releaseEligible: (f = jspb.Message.getBooleanField(msg, 20)) == null ? undefined : f,
releaseReason: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
refundReason: (f = jspb.Message.getField(msg, 22)) == null ? undefined : f,
refundedAt: (f = msg.getRefundedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CoursePurchase}
 */
proto.pb.CoursePurchase.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CoursePurchase;
  return proto.pb.CoursePurchase.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CoursePurchase} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CoursePurchase}
 */
proto.pb.CoursePurchase.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPurchasePrice(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainingAnalysisQuota(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEscrowReleased(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPurchasedAt(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDownloadedOffline(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUuidId(value);
      break;
    case 11:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRefundable(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSnapshotJson(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEscrowStatus(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFrozenReason(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenByAdminId(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrozenAt(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUnfrozenByAdminId(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUnfrozenAt(value);
      break;
    case 19:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReleaseDeadline(value);
      break;
    case 20:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setReleaseEligible(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReleaseReason(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefundReason(value);
      break;
    case 23:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRefundedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CoursePurchase.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CoursePurchase.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CoursePurchase} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CoursePurchase.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPurchasePrice();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getRemainingAnalysisQuota();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEscrowReleased();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getPurchasedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHasDownloadedOffline();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getUuidId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getIsRefundable();
  if (f) {
    writer.writeBool(
      11,
      f
    );
  }
  f = message.getSnapshotJson();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getEscrowStatus();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getFrozenAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getUnfrozenAt();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getReleaseDeadline();
  if (f != null) {
    writer.writeMessage(
      19,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBool(
      20,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeString(
      21,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 22));
  if (f != null) {
    writer.writeString(
      22,
      f
    );
  }
  f = message.getRefundedAt();
  if (f != null) {
    writer.writeMessage(
      23,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.CoursePurchase.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.pb.CoursePurchase.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 course_id = 3;
 * @return {number}
 */
proto.pb.CoursePurchase.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 purchase_price = 4;
 * @return {number}
 */
proto.pb.CoursePurchase.prototype.getPurchasePrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setPurchasePrice = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 remaining_analysis_quota = 5;
 * @return {number}
 */
proto.pb.CoursePurchase.prototype.getRemainingAnalysisQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setRemainingAnalysisQuota = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string status = 6;
 * @return {string}
 */
proto.pb.CoursePurchase.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional bool escrow_released = 7;
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.getEscrowReleased = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setEscrowReleased = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp purchased_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CoursePurchase.prototype.getPurchasedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CoursePurchase} returns this
*/
proto.pb.CoursePurchase.prototype.setPurchasedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearPurchasedAt = function() {
  return this.setPurchasedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasPurchasedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional bool has_downloaded_offline = 9;
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.getHasDownloadedOffline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setHasDownloadedOffline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional string uuid_id = 10;
 * @return {string}
 */
proto.pb.CoursePurchase.prototype.getUuidId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setUuidId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional bool is_refundable = 11;
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.getIsRefundable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 11, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setIsRefundable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 11, value);
};


/**
 * optional string snapshot_json = 12;
 * @return {string}
 */
proto.pb.CoursePurchase.prototype.getSnapshotJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setSnapshotJson = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string escrow_status = 13;
 * @return {string}
 */
proto.pb.CoursePurchase.prototype.getEscrowStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setEscrowStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string frozen_reason = 14;
 * @return {string}
 */
proto.pb.CoursePurchase.prototype.getFrozenReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setFrozenReason = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearFrozenReason = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasFrozenReason = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional int64 frozen_by_admin_id = 15;
 * @return {number}
 */
proto.pb.CoursePurchase.prototype.getFrozenByAdminId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setFrozenByAdminId = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearFrozenByAdminId = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasFrozenByAdminId = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp frozen_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CoursePurchase.prototype.getFrozenAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CoursePurchase} returns this
*/
proto.pb.CoursePurchase.prototype.setFrozenAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearFrozenAt = function() {
  return this.setFrozenAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasFrozenAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int64 unfrozen_by_admin_id = 17;
 * @return {number}
 */
proto.pb.CoursePurchase.prototype.getUnfrozenByAdminId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setUnfrozenByAdminId = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearUnfrozenByAdminId = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasUnfrozenByAdminId = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp unfrozen_at = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CoursePurchase.prototype.getUnfrozenAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CoursePurchase} returns this
*/
proto.pb.CoursePurchase.prototype.setUnfrozenAt = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearUnfrozenAt = function() {
  return this.setUnfrozenAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasUnfrozenAt = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional google.protobuf.Timestamp release_deadline = 19;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CoursePurchase.prototype.getReleaseDeadline = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 19));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CoursePurchase} returns this
*/
proto.pb.CoursePurchase.prototype.setReleaseDeadline = function(value) {
  return jspb.Message.setWrapperField(this, 19, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearReleaseDeadline = function() {
  return this.setReleaseDeadline(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasReleaseDeadline = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional bool release_eligible = 20;
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.getReleaseEligible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 20, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setReleaseEligible = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearReleaseEligible = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasReleaseEligible = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string release_reason = 21;
 * @return {string}
 */
proto.pb.CoursePurchase.prototype.getReleaseReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setReleaseReason = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearReleaseReason = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasReleaseReason = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * optional string refund_reason = 22;
 * @return {string}
 */
proto.pb.CoursePurchase.prototype.getRefundReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 22, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.setRefundReason = function(value) {
  return jspb.Message.setField(this, 22, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearRefundReason = function() {
  return jspb.Message.setField(this, 22, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasRefundReason = function() {
  return jspb.Message.getField(this, 22) != null;
};


/**
 * optional google.protobuf.Timestamp refunded_at = 23;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CoursePurchase.prototype.getRefundedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 23));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CoursePurchase} returns this
*/
proto.pb.CoursePurchase.prototype.setRefundedAt = function(value) {
  return jspb.Message.setWrapperField(this, 23, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CoursePurchase} returns this
 */
proto.pb.CoursePurchase.prototype.clearRefundedAt = function() {
  return this.setRefundedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CoursePurchase.prototype.hasRefundedAt = function() {
  return jspb.Message.getField(this, 23) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.PurchaseCourseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PurchaseCourseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PurchaseCourseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PurchaseCourseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
agreedPolicyId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
expectedPriceInCents: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.PurchaseCourseRequest}
 */
proto.pb.PurchaseCourseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PurchaseCourseRequest;
  return proto.pb.PurchaseCourseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PurchaseCourseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PurchaseCourseRequest}
 */
proto.pb.PurchaseCourseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAgreedPolicyId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setExpectedPriceInCents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.PurchaseCourseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PurchaseCourseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PurchaseCourseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PurchaseCourseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.PurchaseCourseRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PurchaseCourseRequest} returns this
 */
proto.pb.PurchaseCourseRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 agreed_policy_id = 2;
 * @return {number}
 */
proto.pb.PurchaseCourseRequest.prototype.getAgreedPolicyId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PurchaseCourseRequest} returns this
 */
proto.pb.PurchaseCourseRequest.prototype.setAgreedPolicyId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.PurchaseCourseRequest} returns this
 */
proto.pb.PurchaseCourseRequest.prototype.clearAgreedPolicyId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.PurchaseCourseRequest.prototype.hasAgreedPolicyId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 expected_price_in_cents = 3;
 * @return {number}
 */
proto.pb.PurchaseCourseRequest.prototype.getExpectedPriceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PurchaseCourseRequest} returns this
 */
proto.pb.PurchaseCourseRequest.prototype.setExpectedPriceInCents = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.PurchaseCourseRequest} returns this
 */
proto.pb.PurchaseCourseRequest.prototype.clearExpectedPriceInCents = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.PurchaseCourseRequest.prototype.hasExpectedPriceInCents = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.PurchaseCourseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PurchaseCourseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PurchaseCourseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PurchaseCourseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
purchase: (f = msg.getPurchase()) && proto.pb.CoursePurchase.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.PurchaseCourseResponse}
 */
proto.pb.PurchaseCourseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PurchaseCourseResponse;
  return proto.pb.PurchaseCourseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PurchaseCourseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PurchaseCourseResponse}
 */
proto.pb.PurchaseCourseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CoursePurchase;
      reader.readMessage(value,proto.pb.CoursePurchase.deserializeBinaryFromReader);
      msg.setPurchase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.PurchaseCourseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PurchaseCourseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PurchaseCourseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PurchaseCourseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchase();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.CoursePurchase.serializeBinaryToWriter
    );
  }
};


/**
 * optional CoursePurchase purchase = 1;
 * @return {?proto.pb.CoursePurchase}
 */
proto.pb.PurchaseCourseResponse.prototype.getPurchase = function() {
  return /** @type{?proto.pb.CoursePurchase} */ (
    jspb.Message.getWrapperField(this, proto.pb.CoursePurchase, 1));
};


/**
 * @param {?proto.pb.CoursePurchase|undefined} value
 * @return {!proto.pb.PurchaseCourseResponse} returns this
*/
proto.pb.PurchaseCourseResponse.prototype.setPurchase = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.PurchaseCourseResponse} returns this
 */
proto.pb.PurchaseCourseResponse.prototype.clearPurchase = function() {
  return this.setPurchase(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.PurchaseCourseResponse.prototype.hasPurchase = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetHLSEncryptionKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetHLSEncryptionKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetHLSEncryptionKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetHLSEncryptionKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0),
requestOffline: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetHLSEncryptionKeyRequest}
 */
proto.pb.GetHLSEncryptionKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetHLSEncryptionKeyRequest;
  return proto.pb.GetHLSEncryptionKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetHLSEncryptionKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetHLSEncryptionKeyRequest}
 */
proto.pb.GetHLSEncryptionKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestOffline(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetHLSEncryptionKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetHLSEncryptionKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetHLSEncryptionKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetHLSEncryptionKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRequestOffline();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.GetHLSEncryptionKeyRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetHLSEncryptionKeyRequest} returns this
 */
proto.pb.GetHLSEncryptionKeyRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool request_offline = 2;
 * @return {boolean}
 */
proto.pb.GetHLSEncryptionKeyRequest.prototype.getRequestOffline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetHLSEncryptionKeyRequest} returns this
 */
proto.pb.GetHLSEncryptionKeyRequest.prototype.setRequestOffline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetHLSEncryptionKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetHLSEncryptionKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetHLSEncryptionKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetHLSEncryptionKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
key: msg.getKey_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetHLSEncryptionKeyResponse}
 */
proto.pb.GetHLSEncryptionKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetHLSEncryptionKeyResponse;
  return proto.pb.GetHLSEncryptionKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetHLSEncryptionKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetHLSEncryptionKeyResponse}
 */
proto.pb.GetHLSEncryptionKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetHLSEncryptionKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetHLSEncryptionKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetHLSEncryptionKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetHLSEncryptionKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes key = 1;
 * @return {!(string|Uint8Array)}
 */
proto.pb.GetHLSEncryptionKeyResponse.prototype.getKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes key = 1;
 * This is a type-conversion wrapper around `getKey()`
 * @return {string}
 */
proto.pb.GetHLSEncryptionKeyResponse.prototype.getKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getKey()));
};


/**
 * optional bytes key = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getKey()`
 * @return {!Uint8Array}
 */
proto.pb.GetHLSEncryptionKeyResponse.prototype.getKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.pb.GetHLSEncryptionKeyResponse} returns this
 */
proto.pb.GetHLSEncryptionKeyResponse.prototype.setKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.VideoSubtitle.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.VideoSubtitle.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.VideoSubtitle} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VideoSubtitle.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
videoId: jspb.Message.getFieldWithDefault(msg, 2, 0),
languageCode: jspb.Message.getFieldWithDefault(msg, 3, ""),
subtitleUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.VideoSubtitle}
 */
proto.pb.VideoSubtitle.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.VideoSubtitle;
  return proto.pb.VideoSubtitle.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.VideoSubtitle} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.VideoSubtitle}
 */
proto.pb.VideoSubtitle.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLanguageCode(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSubtitleUrl(value);
      break;
    case 5:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.VideoSubtitle.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.VideoSubtitle.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.VideoSubtitle} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VideoSubtitle.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubtitleUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.VideoSubtitle.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.VideoSubtitle} returns this
 */
proto.pb.VideoSubtitle.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 video_id = 2;
 * @return {number}
 */
proto.pb.VideoSubtitle.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.VideoSubtitle} returns this
 */
proto.pb.VideoSubtitle.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string language_code = 3;
 * @return {string}
 */
proto.pb.VideoSubtitle.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VideoSubtitle} returns this
 */
proto.pb.VideoSubtitle.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subtitle_url = 4;
 * @return {string}
 */
proto.pb.VideoSubtitle.prototype.getSubtitleUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VideoSubtitle} returns this
 */
proto.pb.VideoSubtitle.prototype.setSubtitleUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 5;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.VideoSubtitle.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 5));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.VideoSubtitle} returns this
*/
proto.pb.VideoSubtitle.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.VideoSubtitle} returns this
 */
proto.pb.VideoSubtitle.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.VideoSubtitle.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateVideoSubtitleTextRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateVideoSubtitleTextRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateVideoSubtitleTextRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0),
languageCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
subtitleContent: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateVideoSubtitleTextRequest}
 */
proto.pb.UpdateVideoSubtitleTextRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateVideoSubtitleTextRequest;
  return proto.pb.UpdateVideoSubtitleTextRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateVideoSubtitleTextRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateVideoSubtitleTextRequest}
 */
proto.pb.UpdateVideoSubtitleTextRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLanguageCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSubtitleContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateVideoSubtitleTextRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateVideoSubtitleTextRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateVideoSubtitleTextRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getLanguageCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubtitleContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateVideoSubtitleTextRequest} returns this
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string language_code = 2;
 * @return {string}
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.getLanguageCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateVideoSubtitleTextRequest} returns this
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.setLanguageCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subtitle_content = 3;
 * @return {string}
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.getSubtitleContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateVideoSubtitleTextRequest} returns this
 */
proto.pb.UpdateVideoSubtitleTextRequest.prototype.setSubtitleContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateVideoSubtitleTextResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateVideoSubtitleTextResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateVideoSubtitleTextResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateVideoSubtitleTextResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
subtitle: (f = msg.getSubtitle()) && proto.pb.VideoSubtitle.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateVideoSubtitleTextResponse}
 */
proto.pb.UpdateVideoSubtitleTextResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateVideoSubtitleTextResponse;
  return proto.pb.UpdateVideoSubtitleTextResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateVideoSubtitleTextResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateVideoSubtitleTextResponse}
 */
proto.pb.UpdateVideoSubtitleTextResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.VideoSubtitle;
      reader.readMessage(value,proto.pb.VideoSubtitle.deserializeBinaryFromReader);
      msg.setSubtitle(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateVideoSubtitleTextResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateVideoSubtitleTextResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateVideoSubtitleTextResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateVideoSubtitleTextResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSubtitle();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.VideoSubtitle.serializeBinaryToWriter
    );
  }
};


/**
 * optional VideoSubtitle subtitle = 1;
 * @return {?proto.pb.VideoSubtitle}
 */
proto.pb.UpdateVideoSubtitleTextResponse.prototype.getSubtitle = function() {
  return /** @type{?proto.pb.VideoSubtitle} */ (
    jspb.Message.getWrapperField(this, proto.pb.VideoSubtitle, 1));
};


/**
 * @param {?proto.pb.VideoSubtitle|undefined} value
 * @return {!proto.pb.UpdateVideoSubtitleTextResponse} returns this
*/
proto.pb.UpdateVideoSubtitleTextResponse.prototype.setSubtitle = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateVideoSubtitleTextResponse} returns this
 */
proto.pb.UpdateVideoSubtitleTextResponse.prototype.clearSubtitle = function() {
  return this.setSubtitle(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateVideoSubtitleTextResponse.prototype.hasSubtitle = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCoursePlaybackInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCoursePlaybackInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCoursePlaybackInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoursePlaybackInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCoursePlaybackInfoRequest}
 */
proto.pb.GetCoursePlaybackInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCoursePlaybackInfoRequest;
  return proto.pb.GetCoursePlaybackInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCoursePlaybackInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCoursePlaybackInfoRequest}
 */
proto.pb.GetCoursePlaybackInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCoursePlaybackInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCoursePlaybackInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCoursePlaybackInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoursePlaybackInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.GetCoursePlaybackInfoRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCoursePlaybackInfoRequest} returns this
 */
proto.pb.GetCoursePlaybackInfoRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.GetCoursePlaybackInfoResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCoursePlaybackInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCoursePlaybackInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCoursePlaybackInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoursePlaybackInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
videoUrl: jspb.Message.getFieldWithDefault(msg, 1, ""),
subtitlesList: jspb.Message.toObjectList(msg.getSubtitlesList(),
    proto.pb.VideoSubtitle.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCoursePlaybackInfoResponse}
 */
proto.pb.GetCoursePlaybackInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCoursePlaybackInfoResponse;
  return proto.pb.GetCoursePlaybackInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCoursePlaybackInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCoursePlaybackInfoResponse}
 */
proto.pb.GetCoursePlaybackInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVideoUrl(value);
      break;
    case 2:
      var value = new proto.pb.VideoSubtitle;
      reader.readMessage(value,proto.pb.VideoSubtitle.deserializeBinaryFromReader);
      msg.addSubtitles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCoursePlaybackInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCoursePlaybackInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCoursePlaybackInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCoursePlaybackInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSubtitlesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pb.VideoSubtitle.serializeBinaryToWriter
    );
  }
};


/**
 * optional string video_url = 1;
 * @return {string}
 */
proto.pb.GetCoursePlaybackInfoResponse.prototype.getVideoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetCoursePlaybackInfoResponse} returns this
 */
proto.pb.GetCoursePlaybackInfoResponse.prototype.setVideoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated VideoSubtitle subtitles = 2;
 * @return {!Array<!proto.pb.VideoSubtitle>}
 */
proto.pb.GetCoursePlaybackInfoResponse.prototype.getSubtitlesList = function() {
  return /** @type{!Array<!proto.pb.VideoSubtitle>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.VideoSubtitle, 2));
};


/**
 * @param {!Array<!proto.pb.VideoSubtitle>} value
 * @return {!proto.pb.GetCoursePlaybackInfoResponse} returns this
*/
proto.pb.GetCoursePlaybackInfoResponse.prototype.setSubtitlesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pb.VideoSubtitle=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.VideoSubtitle}
 */
proto.pb.GetCoursePlaybackInfoResponse.prototype.addSubtitles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pb.VideoSubtitle, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.GetCoursePlaybackInfoResponse} returns this
 */
proto.pb.GetCoursePlaybackInfoResponse.prototype.clearSubtitlesList = function() {
  return this.setSubtitlesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.SubmitCourseHomeworkRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.SubmitCourseHomeworkRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.SubmitCourseHomeworkRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
title: jspb.Message.getFieldWithDefault(msg, 2, ""),
videoUrl: jspb.Message.getFieldWithDefault(msg, 3, ""),
languageId: jspb.Message.getFieldWithDefault(msg, 4, 0),
message: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
requirementsSnapshot: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.SubmitCourseHomeworkRequest}
 */
proto.pb.SubmitCourseHomeworkRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.SubmitCourseHomeworkRequest;
  return proto.pb.SubmitCourseHomeworkRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.SubmitCourseHomeworkRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.SubmitCourseHomeworkRequest}
 */
proto.pb.SubmitCourseHomeworkRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVideoUrl(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLanguageId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRequirementsSnapshot(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.SubmitCourseHomeworkRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.SubmitCourseHomeworkRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.SubmitCourseHomeworkRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getVideoUrl();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLanguageId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getRequirementsSnapshot();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.SubmitCourseHomeworkRequest} returns this
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SubmitCourseHomeworkRequest} returns this
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string video_url = 3;
 * @return {string}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.getVideoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SubmitCourseHomeworkRequest} returns this
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.setVideoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 language_id = 4;
 * @return {number}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.getLanguageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.SubmitCourseHomeworkRequest} returns this
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.setLanguageId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SubmitCourseHomeworkRequest} returns this
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.setMessage = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.SubmitCourseHomeworkRequest} returns this
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.clearMessage = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string requirements_snapshot = 6;
 * @return {string}
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.getRequirementsSnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SubmitCourseHomeworkRequest} returns this
 */
proto.pb.SubmitCourseHomeworkRequest.prototype.setRequirementsSnapshot = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.SubmitCourseHomeworkResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.SubmitCourseHomeworkResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.SubmitCourseHomeworkResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.SubmitCourseHomeworkResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
lessonId: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.SubmitCourseHomeworkResponse}
 */
proto.pb.SubmitCourseHomeworkResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.SubmitCourseHomeworkResponse;
  return proto.pb.SubmitCourseHomeworkResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.SubmitCourseHomeworkResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.SubmitCourseHomeworkResponse}
 */
proto.pb.SubmitCourseHomeworkResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLessonId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.SubmitCourseHomeworkResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.SubmitCourseHomeworkResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.SubmitCourseHomeworkResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.SubmitCourseHomeworkResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLessonId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string lesson_id = 1;
 * @return {string}
 */
proto.pb.SubmitCourseHomeworkResponse.prototype.getLessonId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.SubmitCourseHomeworkResponse} returns this
 */
proto.pb.SubmitCourseHomeworkResponse.prototype.setLessonId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.RequestCourseRefundRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RequestCourseRefundRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RequestCourseRefundRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestCourseRefundRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.RequestCourseRefundRequest}
 */
proto.pb.RequestCourseRefundRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RequestCourseRefundRequest;
  return proto.pb.RequestCourseRefundRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RequestCourseRefundRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RequestCourseRefundRequest}
 */
proto.pb.RequestCourseRefundRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.RequestCourseRefundRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RequestCourseRefundRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RequestCourseRefundRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestCourseRefundRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.RequestCourseRefundRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.RequestCourseRefundRequest} returns this
 */
proto.pb.RequestCourseRefundRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.RequestCourseRefundResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RequestCourseRefundResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RequestCourseRefundResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestCourseRefundResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.RequestCourseRefundResponse}
 */
proto.pb.RequestCourseRefundResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RequestCourseRefundResponse;
  return proto.pb.RequestCourseRefundResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RequestCourseRefundResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RequestCourseRefundResponse}
 */
proto.pb.RequestCourseRefundResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.RequestCourseRefundResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RequestCourseRefundResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RequestCourseRefundResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestCourseRefundResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.pb.RequestCourseRefundResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.RequestCourseRefundResponse} returns this
 */
proto.pb.RequestCourseRefundResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetMyCoursePurchaseStatusRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetMyCoursePurchaseStatusRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetMyCoursePurchaseStatusRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetMyCoursePurchaseStatusRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetMyCoursePurchaseStatusRequest}
 */
proto.pb.GetMyCoursePurchaseStatusRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetMyCoursePurchaseStatusRequest;
  return proto.pb.GetMyCoursePurchaseStatusRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetMyCoursePurchaseStatusRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetMyCoursePurchaseStatusRequest}
 */
proto.pb.GetMyCoursePurchaseStatusRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetMyCoursePurchaseStatusRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetMyCoursePurchaseStatusRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetMyCoursePurchaseStatusRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetMyCoursePurchaseStatusRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusRequest} returns this
 */
proto.pb.GetMyCoursePurchaseStatusRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetMyCoursePurchaseStatusResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetMyCoursePurchaseStatusResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetMyCoursePurchaseStatusResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
isPurchased: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
refundEligible: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
refundIneligibleReason: jspb.Message.getFieldWithDefault(msg, 3, ""),
refundExpiresAt: (f = msg.getRefundExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
watchedPaidSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0),
totalPaidSeconds: jspb.Message.getFieldWithDefault(msg, 6, 0),
watchedPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 7, 0.0),
escrowStatus: jspb.Message.getFieldWithDefault(msg, 8, ""),
isRepurchase: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
remainingAnalysisQuota: jspb.Message.getFieldWithDefault(msg, 10, 0),
analysisQuotaLimit: jspb.Message.getFieldWithDefault(msg, 11, 0),
courseCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
completedVideosCount: jspb.Message.getFieldWithDefault(msg, 13, 0),
requiredVideosCount: jspb.Message.getFieldWithDefault(msg, 14, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetMyCoursePurchaseStatusResponse;
  return proto.pb.GetMyCoursePurchaseStatusResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetMyCoursePurchaseStatusResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPurchased(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefundEligible(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefundIneligibleReason(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRefundExpiresAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWatchedPaidSeconds(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalPaidSeconds(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWatchedPercent(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEscrowStatus(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRepurchase(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainingAnalysisQuota(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnalysisQuotaLimit(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCourseCompleted(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCompletedVideosCount(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRequiredVideosCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetMyCoursePurchaseStatusResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetMyCoursePurchaseStatusResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetMyCoursePurchaseStatusResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIsPurchased();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getRefundEligible();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getRefundIneligibleReason();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRefundExpiresAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWatchedPaidSeconds();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTotalPaidSeconds();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getWatchedPercent();
  if (f !== 0.0) {
    writer.writeDouble(
      7,
      f
    );
  }
  f = message.getEscrowStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getIsRepurchase();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getRemainingAnalysisQuota();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getAnalysisQuotaLimit();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getCourseCompleted();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getCompletedVideosCount();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = message.getRequiredVideosCount();
  if (f !== 0) {
    writer.writeInt32(
      14,
      f
    );
  }
};


/**
 * optional bool is_purchased = 1;
 * @return {boolean}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getIsPurchased = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setIsPurchased = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool refund_eligible = 2;
 * @return {boolean}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getRefundEligible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setRefundEligible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string refund_ineligible_reason = 3;
 * @return {string}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getRefundIneligibleReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setRefundIneligibleReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp refund_expires_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getRefundExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
*/
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setRefundExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.clearRefundExpiresAt = function() {
  return this.setRefundExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.hasRefundExpiresAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int64 watched_paid_seconds = 5;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getWatchedPaidSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setWatchedPaidSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 total_paid_seconds = 6;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getTotalPaidSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setTotalPaidSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional double watched_percent = 7;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getWatchedPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 7, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setWatchedPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 7, value);
};


/**
 * optional string escrow_status = 8;
 * @return {string}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getEscrowStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setEscrowStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional bool is_repurchase = 9;
 * @return {boolean}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getIsRepurchase = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setIsRepurchase = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional int32 remaining_analysis_quota = 10;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getRemainingAnalysisQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setRemainingAnalysisQuota = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 analysis_quota_limit = 11;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getAnalysisQuotaLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setAnalysisQuotaLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool course_completed = 12;
 * @return {boolean}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getCourseCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setCourseCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional int32 completed_videos_count = 13;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getCompletedVideosCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setCompletedVideosCount = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional int32 required_videos_count = 14;
 * @return {number}
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.getRequiredVideosCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetMyCoursePurchaseStatusResponse} returns this
 */
proto.pb.GetMyCoursePurchaseStatusResponse.prototype.setRequiredVideosCount = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseCertificateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseCertificateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseCertificateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseCertificateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
purchaseId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseCertificateRequest}
 */
proto.pb.GetCourseCertificateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseCertificateRequest;
  return proto.pb.GetCourseCertificateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseCertificateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseCertificateRequest}
 */
proto.pb.GetCourseCertificateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseCertificateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseCertificateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseCertificateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseCertificateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.GetCourseCertificateRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseCertificateRequest} returns this
 */
proto.pb.GetCourseCertificateRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 purchase_id = 2;
 * @return {number}
 */
proto.pb.GetCourseCertificateRequest.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseCertificateRequest} returns this
 */
proto.pb.GetCourseCertificateRequest.prototype.setPurchaseId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetCourseCertificateRequest} returns this
 */
proto.pb.GetCourseCertificateRequest.prototype.clearPurchaseId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetCourseCertificateRequest.prototype.hasPurchaseId = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseCertificateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseCertificateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseCertificateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseCertificateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
certificateUrl: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseCertificateResponse}
 */
proto.pb.GetCourseCertificateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseCertificateResponse;
  return proto.pb.GetCourseCertificateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseCertificateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseCertificateResponse}
 */
proto.pb.GetCourseCertificateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCertificateUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseCertificateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseCertificateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseCertificateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseCertificateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCertificateUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string certificate_url = 1;
 * @return {string}
 */
proto.pb.GetCourseCertificateResponse.prototype.getCertificateUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetCourseCertificateResponse} returns this
 */
proto.pb.GetCourseCertificateResponse.prototype.setCertificateUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ClaimSocialRewardRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ClaimSocialRewardRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ClaimSocialRewardRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ClaimSocialRewardRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ClaimSocialRewardRequest}
 */
proto.pb.ClaimSocialRewardRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ClaimSocialRewardRequest;
  return proto.pb.ClaimSocialRewardRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ClaimSocialRewardRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ClaimSocialRewardRequest}
 */
proto.pb.ClaimSocialRewardRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ClaimSocialRewardRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ClaimSocialRewardRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ClaimSocialRewardRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ClaimSocialRewardRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.ClaimSocialRewardRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ClaimSocialRewardRequest} returns this
 */
proto.pb.ClaimSocialRewardRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ClaimSocialRewardResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ClaimSocialRewardResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ClaimSocialRewardResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ClaimSocialRewardResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
badgeName: jspb.Message.getFieldWithDefault(msg, 1, ""),
avatarFrame: jspb.Message.getFieldWithDefault(msg, 2, ""),
chatSuffix: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ClaimSocialRewardResponse}
 */
proto.pb.ClaimSocialRewardResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ClaimSocialRewardResponse;
  return proto.pb.ClaimSocialRewardResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ClaimSocialRewardResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ClaimSocialRewardResponse}
 */
proto.pb.ClaimSocialRewardResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBadgeName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAvatarFrame(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setChatSuffix(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ClaimSocialRewardResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ClaimSocialRewardResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ClaimSocialRewardResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ClaimSocialRewardResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getBadgeName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getAvatarFrame();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChatSuffix();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string badge_name = 1;
 * @return {string}
 */
proto.pb.ClaimSocialRewardResponse.prototype.getBadgeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ClaimSocialRewardResponse} returns this
 */
proto.pb.ClaimSocialRewardResponse.prototype.setBadgeName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string avatar_frame = 2;
 * @return {string}
 */
proto.pb.ClaimSocialRewardResponse.prototype.getAvatarFrame = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ClaimSocialRewardResponse} returns this
 */
proto.pb.ClaimSocialRewardResponse.prototype.setAvatarFrame = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string chat_suffix = 3;
 * @return {string}
 */
proto.pb.ClaimSocialRewardResponse.prototype.getChatSuffix = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ClaimSocialRewardResponse} returns this
 */
proto.pb.ClaimSocialRewardResponse.prototype.setChatSuffix = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCoursesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCoursesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCoursesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
status: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCoursesRequest}
 */
proto.pb.ListCoursesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCoursesRequest;
  return proto.pb.ListCoursesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCoursesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCoursesRequest}
 */
proto.pb.ListCoursesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCoursesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCoursesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCoursesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 page_id = 1;
 * @return {number}
 */
proto.pb.ListCoursesRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursesRequest} returns this
 */
proto.pb.ListCoursesRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.pb.ListCoursesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursesRequest} returns this
 */
proto.pb.ListCoursesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.pb.ListCoursesRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ListCoursesRequest} returns this
 */
proto.pb.ListCoursesRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCoursesRequest} returns this
 */
proto.pb.ListCoursesRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCoursesRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCoursesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCoursesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCoursesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCoursesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
coursesList: jspb.Message.toObjectList(msg.getCoursesList(),
    proto.pb.Course.toObject, includeInstance),
totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCoursesResponse}
 */
proto.pb.ListCoursesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCoursesResponse;
  return proto.pb.ListCoursesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCoursesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCoursesResponse}
 */
proto.pb.ListCoursesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Course;
      reader.readMessage(value,proto.pb.Course.deserializeBinaryFromReader);
      msg.addCourses(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCoursesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCoursesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCoursesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoursesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.Course.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated Course courses = 1;
 * @return {!Array<!proto.pb.Course>}
 */
proto.pb.ListCoursesResponse.prototype.getCoursesList = function() {
  return /** @type{!Array<!proto.pb.Course>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.Course, 1));
};


/**
 * @param {!Array<!proto.pb.Course>} value
 * @return {!proto.pb.ListCoursesResponse} returns this
*/
proto.pb.ListCoursesResponse.prototype.setCoursesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Course=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Course}
 */
proto.pb.ListCoursesResponse.prototype.addCourses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Course, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCoursesResponse} returns this
 */
proto.pb.ListCoursesResponse.prototype.clearCoursesList = function() {
  return this.setCoursesList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.ListCoursesResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursesResponse} returns this
 */
proto.pb.ListCoursesResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCoursePurchasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCoursePurchasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCoursePurchasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursePurchasesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
status: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
escrowReleased: (f = jspb.Message.getBooleanField(msg, 4)) == null ? undefined : f,
escrowStatus: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
userId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
courseId: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
query: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCoursePurchasesRequest}
 */
proto.pb.ListCoursePurchasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCoursePurchasesRequest;
  return proto.pb.ListCoursePurchasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCoursePurchasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCoursePurchasesRequest}
 */
proto.pb.ListCoursePurchasesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEscrowReleased(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEscrowStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCoursePurchasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCoursePurchasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCoursePurchasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursePurchasesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {boolean} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeBool(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int32 page_id = 1;
 * @return {number}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCoursePurchasesRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional bool escrow_released = 4;
 * @return {boolean}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getEscrowReleased = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setEscrowReleased = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.clearEscrowReleased = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCoursePurchasesRequest.prototype.hasEscrowReleased = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string escrow_status = 5;
 * @return {string}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getEscrowStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setEscrowStatus = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.clearEscrowStatus = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCoursePurchasesRequest.prototype.hasEscrowStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 user_id = 6;
 * @return {number}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCoursePurchasesRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 course_id = 7;
 * @return {number}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCoursePurchasesRequest.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string query = 8;
 * @return {string}
 */
proto.pb.ListCoursePurchasesRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.setQuery = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCoursePurchasesRequest} returns this
 */
proto.pb.ListCoursePurchasesRequest.prototype.clearQuery = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCoursePurchasesRequest.prototype.hasQuery = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCoursePurchasesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCoursePurchasesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCoursePurchasesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCoursePurchasesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursePurchasesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
purchasesList: jspb.Message.toObjectList(msg.getPurchasesList(),
    proto.pb.CoursePurchase.toObject, includeInstance),
totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
totalPurchasePriceInCents: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCoursePurchasesResponse}
 */
proto.pb.ListCoursePurchasesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCoursePurchasesResponse;
  return proto.pb.ListCoursePurchasesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCoursePurchasesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCoursePurchasesResponse}
 */
proto.pb.ListCoursePurchasesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CoursePurchase;
      reader.readMessage(value,proto.pb.CoursePurchase.deserializeBinaryFromReader);
      msg.addPurchases(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalPurchasePriceInCents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCoursePurchasesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCoursePurchasesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCoursePurchasesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCoursePurchasesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CoursePurchase.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotalPurchasePriceInCents();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * repeated CoursePurchase purchases = 1;
 * @return {!Array<!proto.pb.CoursePurchase>}
 */
proto.pb.ListCoursePurchasesResponse.prototype.getPurchasesList = function() {
  return /** @type{!Array<!proto.pb.CoursePurchase>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CoursePurchase, 1));
};


/**
 * @param {!Array<!proto.pb.CoursePurchase>} value
 * @return {!proto.pb.ListCoursePurchasesResponse} returns this
*/
proto.pb.ListCoursePurchasesResponse.prototype.setPurchasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CoursePurchase=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CoursePurchase}
 */
proto.pb.ListCoursePurchasesResponse.prototype.addPurchases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CoursePurchase, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCoursePurchasesResponse} returns this
 */
proto.pb.ListCoursePurchasesResponse.prototype.clearPurchasesList = function() {
  return this.setPurchasesList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.ListCoursePurchasesResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursePurchasesResponse} returns this
 */
proto.pb.ListCoursePurchasesResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total_purchase_price_in_cents = 3;
 * @return {number}
 */
proto.pb.ListCoursePurchasesResponse.prototype.getTotalPurchasePriceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCoursePurchasesResponse} returns this
 */
proto.pb.ListCoursePurchasesResponse.prototype.setTotalPurchasePriceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CourseMetaItem.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CourseMetaItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CourseMetaItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseMetaItem.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
code: jspb.Message.getFieldWithDefault(msg, 2, ""),
nameEn: jspb.Message.getFieldWithDefault(msg, 3, ""),
nameZh: jspb.Message.getFieldWithDefault(msg, 4, ""),
sortOrder: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CourseMetaItem}
 */
proto.pb.CourseMetaItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CourseMetaItem;
  return proto.pb.CourseMetaItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CourseMetaItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CourseMetaItem}
 */
proto.pb.CourseMetaItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNameEn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNameZh(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSortOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CourseMetaItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CourseMetaItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CourseMetaItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseMetaItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNameEn();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameZh();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSortOrder();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.CourseMetaItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseMetaItem} returns this
 */
proto.pb.CourseMetaItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.pb.CourseMetaItem.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseMetaItem} returns this
 */
proto.pb.CourseMetaItem.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name_en = 3;
 * @return {string}
 */
proto.pb.CourseMetaItem.prototype.getNameEn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseMetaItem} returns this
 */
proto.pb.CourseMetaItem.prototype.setNameEn = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name_zh = 4;
 * @return {string}
 */
proto.pb.CourseMetaItem.prototype.getNameZh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseMetaItem} returns this
 */
proto.pb.CourseMetaItem.prototype.setNameZh = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 sort_order = 5;
 * @return {number}
 */
proto.pb.CourseMetaItem.prototype.getSortOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseMetaItem} returns this
 */
proto.pb.CourseMetaItem.prototype.setSortOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCourseMetaResponse.repeatedFields_ = [1,2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseMetaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseMetaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseMetaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseMetaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(),
    proto.pb.CourseMetaItem.toObject, includeInstance),
stylesList: jspb.Message.toObjectList(msg.getStylesList(),
    proto.pb.CourseMetaItem.toObject, includeInstance),
levelsList: jspb.Message.toObjectList(msg.getLevelsList(),
    proto.pb.CourseMetaItem.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseMetaResponse}
 */
proto.pb.ListCourseMetaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseMetaResponse;
  return proto.pb.ListCourseMetaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseMetaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseMetaResponse}
 */
proto.pb.ListCourseMetaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseMetaItem;
      reader.readMessage(value,proto.pb.CourseMetaItem.deserializeBinaryFromReader);
      msg.addCategories(value);
      break;
    case 2:
      var value = new proto.pb.CourseMetaItem;
      reader.readMessage(value,proto.pb.CourseMetaItem.deserializeBinaryFromReader);
      msg.addStyles(value);
      break;
    case 3:
      var value = new proto.pb.CourseMetaItem;
      reader.readMessage(value,proto.pb.CourseMetaItem.deserializeBinaryFromReader);
      msg.addLevels(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseMetaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseMetaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseMetaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseMetaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CourseMetaItem.serializeBinaryToWriter
    );
  }
  f = message.getStylesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.pb.CourseMetaItem.serializeBinaryToWriter
    );
  }
  f = message.getLevelsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.pb.CourseMetaItem.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CourseMetaItem categories = 1;
 * @return {!Array<!proto.pb.CourseMetaItem>}
 */
proto.pb.ListCourseMetaResponse.prototype.getCategoriesList = function() {
  return /** @type{!Array<!proto.pb.CourseMetaItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseMetaItem, 1));
};


/**
 * @param {!Array<!proto.pb.CourseMetaItem>} value
 * @return {!proto.pb.ListCourseMetaResponse} returns this
*/
proto.pb.ListCourseMetaResponse.prototype.setCategoriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CourseMetaItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseMetaItem}
 */
proto.pb.ListCourseMetaResponse.prototype.addCategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CourseMetaItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseMetaResponse} returns this
 */
proto.pb.ListCourseMetaResponse.prototype.clearCategoriesList = function() {
  return this.setCategoriesList([]);
};


/**
 * repeated CourseMetaItem styles = 2;
 * @return {!Array<!proto.pb.CourseMetaItem>}
 */
proto.pb.ListCourseMetaResponse.prototype.getStylesList = function() {
  return /** @type{!Array<!proto.pb.CourseMetaItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseMetaItem, 2));
};


/**
 * @param {!Array<!proto.pb.CourseMetaItem>} value
 * @return {!proto.pb.ListCourseMetaResponse} returns this
*/
proto.pb.ListCourseMetaResponse.prototype.setStylesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.pb.CourseMetaItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseMetaItem}
 */
proto.pb.ListCourseMetaResponse.prototype.addStyles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.pb.CourseMetaItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseMetaResponse} returns this
 */
proto.pb.ListCourseMetaResponse.prototype.clearStylesList = function() {
  return this.setStylesList([]);
};


/**
 * repeated CourseMetaItem levels = 3;
 * @return {!Array<!proto.pb.CourseMetaItem>}
 */
proto.pb.ListCourseMetaResponse.prototype.getLevelsList = function() {
  return /** @type{!Array<!proto.pb.CourseMetaItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseMetaItem, 3));
};


/**
 * @param {!Array<!proto.pb.CourseMetaItem>} value
 * @return {!proto.pb.ListCourseMetaResponse} returns this
*/
proto.pb.ListCourseMetaResponse.prototype.setLevelsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.pb.CourseMetaItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseMetaItem}
 */
proto.pb.ListCourseMetaResponse.prototype.addLevels = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.pb.CourseMetaItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseMetaResponse} returns this
 */
proto.pb.ListCourseMetaResponse.prototype.clearLevelsList = function() {
  return this.setLevelsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CreateCourseMetaItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CreateCourseMetaItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CreateCourseMetaItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseMetaItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: jspb.Message.getFieldWithDefault(msg, 2, ""),
nameEn: jspb.Message.getFieldWithDefault(msg, 3, ""),
nameZh: jspb.Message.getFieldWithDefault(msg, 4, ""),
sortOrder: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CreateCourseMetaItemRequest}
 */
proto.pb.CreateCourseMetaItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CreateCourseMetaItemRequest;
  return proto.pb.CreateCourseMetaItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CreateCourseMetaItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CreateCourseMetaItemRequest}
 */
proto.pb.CreateCourseMetaItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNameEn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNameZh(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSortOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CreateCourseMetaItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CreateCourseMetaItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CreateCourseMetaItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseMetaItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNameEn();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNameZh();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSortOrder();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pb.CreateCourseMetaItemRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseMetaItemRequest} returns this
 */
proto.pb.CreateCourseMetaItemRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.pb.CreateCourseMetaItemRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseMetaItemRequest} returns this
 */
proto.pb.CreateCourseMetaItemRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name_en = 3;
 * @return {string}
 */
proto.pb.CreateCourseMetaItemRequest.prototype.getNameEn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseMetaItemRequest} returns this
 */
proto.pb.CreateCourseMetaItemRequest.prototype.setNameEn = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name_zh = 4;
 * @return {string}
 */
proto.pb.CreateCourseMetaItemRequest.prototype.getNameZh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseMetaItemRequest} returns this
 */
proto.pb.CreateCourseMetaItemRequest.prototype.setNameZh = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 sort_order = 5;
 * @return {number}
 */
proto.pb.CreateCourseMetaItemRequest.prototype.getSortOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseMetaItemRequest} returns this
 */
proto.pb.CreateCourseMetaItemRequest.prototype.setSortOrder = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseMetaItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseMetaItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseMetaItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: jspb.Message.getFieldWithDefault(msg, 2, ""),
nameEn: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
nameZh: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
sortOrder: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseMetaItemRequest}
 */
proto.pb.UpdateCourseMetaItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseMetaItemRequest;
  return proto.pb.UpdateCourseMetaItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseMetaItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseMetaItemRequest}
 */
proto.pb.UpdateCourseMetaItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNameEn(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNameZh(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSortOrder(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseMetaItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseMetaItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseMetaItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name_en = 3;
 * @return {string}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.getNameEn = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.setNameEn = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.clearNameEn = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.hasNameEn = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string name_zh = 4;
 * @return {string}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.getNameZh = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.setNameZh = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.clearNameZh = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.hasNameZh = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 sort_order = 5;
 * @return {number}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.getSortOrder = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.setSortOrder = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseMetaItemRequest} returns this
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.clearSortOrder = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseMetaItemRequest.prototype.hasSortOrder = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.DeleteCourseMetaItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.DeleteCourseMetaItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.DeleteCourseMetaItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DeleteCourseMetaItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
type: jspb.Message.getFieldWithDefault(msg, 1, ""),
code: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.DeleteCourseMetaItemRequest}
 */
proto.pb.DeleteCourseMetaItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.DeleteCourseMetaItemRequest;
  return proto.pb.DeleteCourseMetaItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.DeleteCourseMetaItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.DeleteCourseMetaItemRequest}
 */
proto.pb.DeleteCourseMetaItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setType(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.DeleteCourseMetaItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.DeleteCourseMetaItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.DeleteCourseMetaItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.DeleteCourseMetaItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string type = 1;
 * @return {string}
 */
proto.pb.DeleteCourseMetaItemRequest.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.DeleteCourseMetaItemRequest} returns this
 */
proto.pb.DeleteCourseMetaItemRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.pb.DeleteCourseMetaItemRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.DeleteCourseMetaItemRequest} returns this
 */
proto.pb.DeleteCourseMetaItemRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CourseQAMessage.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CourseQAMessage.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CourseQAMessage} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseQAMessage.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
videoId: jspb.Message.getFieldWithDefault(msg, 2, 0),
userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
parentId: jspb.Message.getFieldWithDefault(msg, 4, 0),
content: jspb.Message.getFieldWithDefault(msg, 5, ""),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
userNickname: jspb.Message.getFieldWithDefault(msg, 7, ""),
userAvatarUrl: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CourseQAMessage}
 */
proto.pb.CourseQAMessage.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CourseQAMessage;
  return proto.pb.CourseQAMessage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CourseQAMessage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CourseQAMessage}
 */
proto.pb.CourseQAMessage.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContent(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUserNickname(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUserAvatarUrl(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CourseQAMessage.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CourseQAMessage.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CourseQAMessage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseQAMessage.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUserNickname();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUserAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.CourseQAMessage.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 video_id = 2;
 * @return {number}
 */
proto.pb.CourseQAMessage.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 user_id = 3;
 * @return {number}
 */
proto.pb.CourseQAMessage.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 parent_id = 4;
 * @return {number}
 */
proto.pb.CourseQAMessage.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string content = 5;
 * @return {string}
 */
proto.pb.CourseQAMessage.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseQAMessage.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseQAMessage} returns this
*/
proto.pb.CourseQAMessage.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseQAMessage.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string user_nickname = 7;
 * @return {string}
 */
proto.pb.CourseQAMessage.prototype.getUserNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.setUserNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string user_avatar_url = 8;
 * @return {string}
 */
proto.pb.CourseQAMessage.prototype.getUserAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseQAMessage} returns this
 */
proto.pb.CourseQAMessage.prototype.setUserAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CreateCourseQAMessageRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CreateCourseQAMessageRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CreateCourseQAMessageRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseQAMessageRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0),
parentId: jspb.Message.getFieldWithDefault(msg, 2, 0),
content: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CreateCourseQAMessageRequest}
 */
proto.pb.CreateCourseQAMessageRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CreateCourseQAMessageRequest;
  return proto.pb.CreateCourseQAMessageRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CreateCourseQAMessageRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CreateCourseQAMessageRequest}
 */
proto.pb.CreateCourseQAMessageRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setParentId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setContent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CreateCourseQAMessageRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CreateCourseQAMessageRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CreateCourseQAMessageRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseQAMessageRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getParentId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getContent();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.CreateCourseQAMessageRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseQAMessageRequest} returns this
 */
proto.pb.CreateCourseQAMessageRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 parent_id = 2;
 * @return {number}
 */
proto.pb.CreateCourseQAMessageRequest.prototype.getParentId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CreateCourseQAMessageRequest} returns this
 */
proto.pb.CreateCourseQAMessageRequest.prototype.setParentId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string content = 3;
 * @return {string}
 */
proto.pb.CreateCourseQAMessageRequest.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CreateCourseQAMessageRequest} returns this
 */
proto.pb.CreateCourseQAMessageRequest.prototype.setContent = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CreateCourseQAMessageResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CreateCourseQAMessageResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CreateCourseQAMessageResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseQAMessageResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
message: (f = msg.getMessage()) && proto.pb.CourseQAMessage.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CreateCourseQAMessageResponse}
 */
proto.pb.CreateCourseQAMessageResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CreateCourseQAMessageResponse;
  return proto.pb.CreateCourseQAMessageResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CreateCourseQAMessageResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CreateCourseQAMessageResponse}
 */
proto.pb.CreateCourseQAMessageResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseQAMessage;
      reader.readMessage(value,proto.pb.CourseQAMessage.deserializeBinaryFromReader);
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CreateCourseQAMessageResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CreateCourseQAMessageResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CreateCourseQAMessageResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CreateCourseQAMessageResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.CourseQAMessage.serializeBinaryToWriter
    );
  }
};


/**
 * optional CourseQAMessage message = 1;
 * @return {?proto.pb.CourseQAMessage}
 */
proto.pb.CreateCourseQAMessageResponse.prototype.getMessage = function() {
  return /** @type{?proto.pb.CourseQAMessage} */ (
    jspb.Message.getWrapperField(this, proto.pb.CourseQAMessage, 1));
};


/**
 * @param {?proto.pb.CourseQAMessage|undefined} value
 * @return {!proto.pb.CreateCourseQAMessageResponse} returns this
*/
proto.pb.CreateCourseQAMessageResponse.prototype.setMessage = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CreateCourseQAMessageResponse} returns this
 */
proto.pb.CreateCourseQAMessageResponse.prototype.clearMessage = function() {
  return this.setMessage(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CreateCourseQAMessageResponse.prototype.hasMessage = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseQAMessagesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseQAMessagesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseQAMessagesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseQAMessagesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseQAMessagesRequest}
 */
proto.pb.ListCourseQAMessagesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseQAMessagesRequest;
  return proto.pb.ListCourseQAMessagesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseQAMessagesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseQAMessagesRequest}
 */
proto.pb.ListCourseQAMessagesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseQAMessagesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseQAMessagesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseQAMessagesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseQAMessagesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.ListCourseQAMessagesRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseQAMessagesRequest} returns this
 */
proto.pb.ListCourseQAMessagesRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCourseQAMessagesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseQAMessagesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseQAMessagesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseQAMessagesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseQAMessagesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
messagesList: jspb.Message.toObjectList(msg.getMessagesList(),
    proto.pb.CourseQAMessage.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseQAMessagesResponse}
 */
proto.pb.ListCourseQAMessagesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseQAMessagesResponse;
  return proto.pb.ListCourseQAMessagesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseQAMessagesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseQAMessagesResponse}
 */
proto.pb.ListCourseQAMessagesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseQAMessage;
      reader.readMessage(value,proto.pb.CourseQAMessage.deserializeBinaryFromReader);
      msg.addMessages(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseQAMessagesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseQAMessagesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseQAMessagesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseQAMessagesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessagesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CourseQAMessage.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CourseQAMessage messages = 1;
 * @return {!Array<!proto.pb.CourseQAMessage>}
 */
proto.pb.ListCourseQAMessagesResponse.prototype.getMessagesList = function() {
  return /** @type{!Array<!proto.pb.CourseQAMessage>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseQAMessage, 1));
};


/**
 * @param {!Array<!proto.pb.CourseQAMessage>} value
 * @return {!proto.pb.ListCourseQAMessagesResponse} returns this
*/
proto.pb.ListCourseQAMessagesResponse.prototype.setMessagesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CourseQAMessage=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseQAMessage}
 */
proto.pb.ListCourseQAMessagesResponse.prototype.addMessages = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CourseQAMessage, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseQAMessagesResponse} returns this
 */
proto.pb.ListCourseQAMessagesResponse.prototype.clearMessagesList = function() {
  return this.setMessagesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ToggleCourseVideoLikeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ToggleCourseVideoLikeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ToggleCourseVideoLikeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ToggleCourseVideoLikeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ToggleCourseVideoLikeRequest}
 */
proto.pb.ToggleCourseVideoLikeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ToggleCourseVideoLikeRequest;
  return proto.pb.ToggleCourseVideoLikeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ToggleCourseVideoLikeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ToggleCourseVideoLikeRequest}
 */
proto.pb.ToggleCourseVideoLikeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ToggleCourseVideoLikeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ToggleCourseVideoLikeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ToggleCourseVideoLikeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ToggleCourseVideoLikeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.ToggleCourseVideoLikeRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ToggleCourseVideoLikeRequest} returns this
 */
proto.pb.ToggleCourseVideoLikeRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ToggleCourseVideoLikeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ToggleCourseVideoLikeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ToggleCourseVideoLikeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ToggleCourseVideoLikeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
likeCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
isLiked: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ToggleCourseVideoLikeResponse}
 */
proto.pb.ToggleCourseVideoLikeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ToggleCourseVideoLikeResponse;
  return proto.pb.ToggleCourseVideoLikeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ToggleCourseVideoLikeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ToggleCourseVideoLikeResponse}
 */
proto.pb.ToggleCourseVideoLikeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLikeCount(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLiked(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ToggleCourseVideoLikeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ToggleCourseVideoLikeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ToggleCourseVideoLikeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ToggleCourseVideoLikeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLikeCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsLiked();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 like_count = 1;
 * @return {number}
 */
proto.pb.ToggleCourseVideoLikeResponse.prototype.getLikeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ToggleCourseVideoLikeResponse} returns this
 */
proto.pb.ToggleCourseVideoLikeResponse.prototype.setLikeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_liked = 2;
 * @return {boolean}
 */
proto.pb.ToggleCourseVideoLikeResponse.prototype.getIsLiked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.ToggleCourseVideoLikeResponse} returns this
 */
proto.pb.ToggleCourseVideoLikeResponse.prototype.setIsLiked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseVideoLikeInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseVideoLikeInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseVideoLikeInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoLikeInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseVideoLikeInfoRequest}
 */
proto.pb.GetCourseVideoLikeInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseVideoLikeInfoRequest;
  return proto.pb.GetCourseVideoLikeInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseVideoLikeInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseVideoLikeInfoRequest}
 */
proto.pb.GetCourseVideoLikeInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseVideoLikeInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseVideoLikeInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseVideoLikeInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoLikeInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.GetCourseVideoLikeInfoRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseVideoLikeInfoRequest} returns this
 */
proto.pb.GetCourseVideoLikeInfoRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseVideoLikeInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseVideoLikeInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseVideoLikeInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoLikeInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
likeCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
isLiked: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseVideoLikeInfoResponse}
 */
proto.pb.GetCourseVideoLikeInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseVideoLikeInfoResponse;
  return proto.pb.GetCourseVideoLikeInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseVideoLikeInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseVideoLikeInfoResponse}
 */
proto.pb.GetCourseVideoLikeInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLikeCount(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLiked(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseVideoLikeInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseVideoLikeInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseVideoLikeInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoLikeInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLikeCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsLiked();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional int64 like_count = 1;
 * @return {number}
 */
proto.pb.GetCourseVideoLikeInfoResponse.prototype.getLikeCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseVideoLikeInfoResponse} returns this
 */
proto.pb.GetCourseVideoLikeInfoResponse.prototype.setLikeCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_liked = 2;
 * @return {boolean}
 */
proto.pb.GetCourseVideoLikeInfoResponse.prototype.getIsLiked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetCourseVideoLikeInfoResponse} returns this
 */
proto.pb.GetCourseVideoLikeInfoResponse.prototype.setIsLiked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseVideoDecryptKeyRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseVideoDecryptKeyRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseVideoDecryptKeyRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoDecryptKeyRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseVideoDecryptKeyRequest}
 */
proto.pb.GetCourseVideoDecryptKeyRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseVideoDecryptKeyRequest;
  return proto.pb.GetCourseVideoDecryptKeyRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseVideoDecryptKeyRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseVideoDecryptKeyRequest}
 */
proto.pb.GetCourseVideoDecryptKeyRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseVideoDecryptKeyRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseVideoDecryptKeyRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseVideoDecryptKeyRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoDecryptKeyRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.GetCourseVideoDecryptKeyRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseVideoDecryptKeyRequest} returns this
 */
proto.pb.GetCourseVideoDecryptKeyRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseVideoDecryptKeyResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseVideoDecryptKeyResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseVideoDecryptKeyResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoDecryptKeyResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
decryptKey: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseVideoDecryptKeyResponse}
 */
proto.pb.GetCourseVideoDecryptKeyResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseVideoDecryptKeyResponse;
  return proto.pb.GetCourseVideoDecryptKeyResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseVideoDecryptKeyResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseVideoDecryptKeyResponse}
 */
proto.pb.GetCourseVideoDecryptKeyResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDecryptKey(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseVideoDecryptKeyResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseVideoDecryptKeyResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseVideoDecryptKeyResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseVideoDecryptKeyResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDecryptKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string decrypt_key = 1;
 * @return {string}
 */
proto.pb.GetCourseVideoDecryptKeyResponse.prototype.getDecryptKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetCourseVideoDecryptKeyResponse} returns this
 */
proto.pb.GetCourseVideoDecryptKeyResponse.prototype.setDecryptKey = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseLearningProgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseLearningProgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseLearningProgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0),
progressSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
isCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
deltaSeconds: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
playbackSessionId: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseLearningProgressRequest}
 */
proto.pb.UpdateCourseLearningProgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseLearningProgressRequest;
  return proto.pb.UpdateCourseLearningProgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseLearningProgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseLearningProgressRequest}
 */
proto.pb.UpdateCourseLearningProgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressSeconds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompleted(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDeltaSeconds(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPlaybackSessionId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseLearningProgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseLearningProgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseLearningProgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProgressSeconds();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsCompleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseLearningProgressRequest} returns this
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 progress_seconds = 2;
 * @return {number}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.getProgressSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseLearningProgressRequest} returns this
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.setProgressSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_completed = 3;
 * @return {boolean}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.getIsCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.UpdateCourseLearningProgressRequest} returns this
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.setIsCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 delta_seconds = 4;
 * @return {number}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.getDeltaSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseLearningProgressRequest} returns this
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.setDeltaSeconds = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseLearningProgressRequest} returns this
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.clearDeltaSeconds = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.hasDeltaSeconds = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string playback_session_id = 5;
 * @return {string}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.getPlaybackSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UpdateCourseLearningProgressRequest} returns this
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.setPlaybackSessionId = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UpdateCourseLearningProgressRequest} returns this
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.clearPlaybackSessionId = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseLearningProgressRequest.prototype.hasPlaybackSessionId = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UpdateCourseLearningProgressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UpdateCourseLearningProgressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseLearningProgressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0),
progressSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
isCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
lastWatchedAt: (f = msg.getLastWatchedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
watchedSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0),
lastHeartbeatAt: (f = msg.getLastHeartbeatAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UpdateCourseLearningProgressResponse}
 */
proto.pb.UpdateCourseLearningProgressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UpdateCourseLearningProgressResponse;
  return proto.pb.UpdateCourseLearningProgressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UpdateCourseLearningProgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UpdateCourseLearningProgressResponse}
 */
proto.pb.UpdateCourseLearningProgressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressSeconds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompleted(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastWatchedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWatchedSeconds(value);
      break;
    case 6:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastHeartbeatAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UpdateCourseLearningProgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UpdateCourseLearningProgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UpdateCourseLearningProgressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProgressSeconds();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsCompleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLastWatchedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWatchedSeconds();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getLastHeartbeatAt();
  if (f != null) {
    writer.writeMessage(
      6,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 progress_seconds = 2;
 * @return {number}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.getProgressSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.setProgressSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_completed = 3;
 * @return {boolean}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.getIsCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.setIsCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp last_watched_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.getLastWatchedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
*/
proto.pb.UpdateCourseLearningProgressResponse.prototype.setLastWatchedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.clearLastWatchedAt = function() {
  return this.setLastWatchedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.hasLastWatchedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 watched_seconds = 5;
 * @return {number}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.getWatchedSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.setWatchedSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional google.protobuf.Timestamp last_heartbeat_at = 6;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.getLastHeartbeatAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 6));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
*/
proto.pb.UpdateCourseLearningProgressResponse.prototype.setLastHeartbeatAt = function(value) {
  return jspb.Message.setWrapperField(this, 6, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UpdateCourseLearningProgressResponse} returns this
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.clearLastHeartbeatAt = function() {
  return this.setLastHeartbeatAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UpdateCourseLearningProgressResponse.prototype.hasLastHeartbeatAt = function() {
  return jspb.Message.getField(this, 6) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseLearningProgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseLearningProgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseLearningProgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseLearningProgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseLearningProgressRequest}
 */
proto.pb.GetCourseLearningProgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseLearningProgressRequest;
  return proto.pb.GetCourseLearningProgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseLearningProgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseLearningProgressRequest}
 */
proto.pb.GetCourseLearningProgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseLearningProgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseLearningProgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseLearningProgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseLearningProgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.GetCourseLearningProgressRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseLearningProgressRequest} returns this
 */
proto.pb.GetCourseLearningProgressRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetCourseLearningProgressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetCourseLearningProgressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseLearningProgressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0),
progressSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
isCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
lastWatchedAt: (f = msg.getLastWatchedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
watchedSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetCourseLearningProgressResponse}
 */
proto.pb.GetCourseLearningProgressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetCourseLearningProgressResponse;
  return proto.pb.GetCourseLearningProgressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetCourseLearningProgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetCourseLearningProgressResponse}
 */
proto.pb.GetCourseLearningProgressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressSeconds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompleted(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastWatchedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWatchedSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetCourseLearningProgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetCourseLearningProgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetCourseLearningProgressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProgressSeconds();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsCompleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLastWatchedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWatchedSeconds();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseLearningProgressResponse} returns this
 */
proto.pb.GetCourseLearningProgressResponse.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 progress_seconds = 2;
 * @return {number}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.getProgressSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseLearningProgressResponse} returns this
 */
proto.pb.GetCourseLearningProgressResponse.prototype.setProgressSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_completed = 3;
 * @return {boolean}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.getIsCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetCourseLearningProgressResponse} returns this
 */
proto.pb.GetCourseLearningProgressResponse.prototype.setIsCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp last_watched_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.getLastWatchedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.GetCourseLearningProgressResponse} returns this
*/
proto.pb.GetCourseLearningProgressResponse.prototype.setLastWatchedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.GetCourseLearningProgressResponse} returns this
 */
proto.pb.GetCourseLearningProgressResponse.prototype.clearLastWatchedAt = function() {
  return this.setLastWatchedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.hasLastWatchedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 watched_seconds = 5;
 * @return {number}
 */
proto.pb.GetCourseLearningProgressResponse.prototype.getWatchedSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetCourseLearningProgressResponse} returns this
 */
proto.pb.GetCourseLearningProgressResponse.prototype.setWatchedSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListUnreviewedVideosRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListUnreviewedVideosRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListUnreviewedVideosRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListUnreviewedVideosRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
filter: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListUnreviewedVideosRequest}
 */
proto.pb.ListUnreviewedVideosRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListUnreviewedVideosRequest;
  return proto.pb.ListUnreviewedVideosRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListUnreviewedVideosRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListUnreviewedVideosRequest}
 */
proto.pb.ListUnreviewedVideosRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFilter(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListUnreviewedVideosRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListUnreviewedVideosRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListUnreviewedVideosRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListUnreviewedVideosRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int32 page_id = 1;
 * @return {number}
 */
proto.pb.ListUnreviewedVideosRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListUnreviewedVideosRequest} returns this
 */
proto.pb.ListUnreviewedVideosRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.pb.ListUnreviewedVideosRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListUnreviewedVideosRequest} returns this
 */
proto.pb.ListUnreviewedVideosRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string filter = 3;
 * @return {string}
 */
proto.pb.ListUnreviewedVideosRequest.prototype.getFilter = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ListUnreviewedVideosRequest} returns this
 */
proto.pb.ListUnreviewedVideosRequest.prototype.setFilter = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListUnreviewedVideosRequest} returns this
 */
proto.pb.ListUnreviewedVideosRequest.prototype.clearFilter = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListUnreviewedVideosRequest.prototype.hasFilter = function() {
  return jspb.Message.getField(this, 3) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.UnreviewedVideo.repeatedFields_ = [16];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.UnreviewedVideo.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.UnreviewedVideo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.UnreviewedVideo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UnreviewedVideo.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
courseId: jspb.Message.getFieldWithDefault(msg, 2, 0),
title: jspb.Message.getFieldWithDefault(msg, 3, ""),
videoUrl: jspb.Message.getFieldWithDefault(msg, 4, ""),
duration: jspb.Message.getFieldWithDefault(msg, 5, 0),
sequenceNumber: jspb.Message.getFieldWithDefault(msg, 6, 0),
isPreviewable: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
decryptKey: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
isReviewed: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
courseTitle: jspb.Message.getFieldWithDefault(msg, 11, ""),
instructorNickname: jspb.Message.getFieldWithDefault(msg, 12, ""),
rejectionReason: (f = jspb.Message.getField(msg, 13)) == null ? undefined : f,
reviewedAt: (f = msg.getReviewedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
processingStatus: jspb.Message.getFieldWithDefault(msg, 15, ""),
missingSubtitleLanguagesList: (f = jspb.Message.getRepeatedField(msg, 16)) == null ? undefined : f,
processingProgressPercent: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
processingProgressStage: (f = jspb.Message.getField(msg, 18)) == null ? undefined : f,
processingLastError: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
processingAttemptCount: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
processingJobId: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.UnreviewedVideo}
 */
proto.pb.UnreviewedVideo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.UnreviewedVideo;
  return proto.pb.UnreviewedVideo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.UnreviewedVideo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.UnreviewedVideo}
 */
proto.pb.UnreviewedVideo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTitle(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setVideoUrl(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequenceNumber(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsPreviewable(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setDecryptKey(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReviewed(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCourseTitle(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setInstructorNickname(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRejectionReason(value);
      break;
    case 14:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setReviewedAt(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProcessingStatus(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addMissingSubtitleLanguages(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProcessingProgressPercent(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProcessingProgressStage(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProcessingLastError(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProcessingAttemptCount(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setProcessingJobId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.UnreviewedVideo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.UnreviewedVideo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.UnreviewedVideo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.UnreviewedVideo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getVideoUrl();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getIsPreviewable();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsReviewed();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getCourseTitle();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getInstructorNickname();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 13));
  if (f != null) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getReviewedAt();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getProcessingStatus();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getMissingSubtitleLanguagesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt32(
      17,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 18));
  if (f != null) {
    writer.writeString(
      18,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeString(
      19,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeInt32(
      20,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 21));
  if (f != null) {
    writer.writeInt64(
      21,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.UnreviewedVideo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 course_id = 2;
 * @return {number}
 */
proto.pb.UnreviewedVideo.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string title = 3;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string video_url = 4;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getVideoUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setVideoUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 duration = 5;
 * @return {number}
 */
proto.pb.UnreviewedVideo.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 sequence_number = 6;
 * @return {number}
 */
proto.pb.UnreviewedVideo.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional bool is_previewable = 7;
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.getIsPreviewable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setIsPreviewable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.UnreviewedVideo.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.UnreviewedVideo} returns this
*/
proto.pb.UnreviewedVideo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string decrypt_key = 9;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getDecryptKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setDecryptKey = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearDecryptKey = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasDecryptKey = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional bool is_reviewed = 10;
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.getIsReviewed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setIsReviewed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional string course_title = 11;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getCourseTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setCourseTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string instructor_nickname = 12;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getInstructorNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setInstructorNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string rejection_reason = 13;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getRejectionReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setRejectionReason = function(value) {
  return jspb.Message.setField(this, 13, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearRejectionReason = function() {
  return jspb.Message.setField(this, 13, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasRejectionReason = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional google.protobuf.Timestamp reviewed_at = 14;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.UnreviewedVideo.prototype.getReviewedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 14));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.UnreviewedVideo} returns this
*/
proto.pb.UnreviewedVideo.prototype.setReviewedAt = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearReviewedAt = function() {
  return this.setReviewedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasReviewedAt = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string processing_status = 15;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getProcessingStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setProcessingStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * repeated string missing_subtitle_languages = 16;
 * @return {!Array<string>}
 */
proto.pb.UnreviewedVideo.prototype.getMissingSubtitleLanguagesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 16));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setMissingSubtitleLanguagesList = function(value) {
  return jspb.Message.setField(this, 16, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.addMissingSubtitleLanguages = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 16, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearMissingSubtitleLanguagesList = function() {
  return this.setMissingSubtitleLanguagesList([]);
};


/**
 * optional int32 processing_progress_percent = 17;
 * @return {number}
 */
proto.pb.UnreviewedVideo.prototype.getProcessingProgressPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setProcessingProgressPercent = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearProcessingProgressPercent = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasProcessingProgressPercent = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional string processing_progress_stage = 18;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getProcessingProgressStage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setProcessingProgressStage = function(value) {
  return jspb.Message.setField(this, 18, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearProcessingProgressStage = function() {
  return jspb.Message.setField(this, 18, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasProcessingProgressStage = function() {
  return jspb.Message.getField(this, 18) != null;
};


/**
 * optional string processing_last_error = 19;
 * @return {string}
 */
proto.pb.UnreviewedVideo.prototype.getProcessingLastError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setProcessingLastError = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearProcessingLastError = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasProcessingLastError = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional int32 processing_attempt_count = 20;
 * @return {number}
 */
proto.pb.UnreviewedVideo.prototype.getProcessingAttemptCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setProcessingAttemptCount = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearProcessingAttemptCount = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasProcessingAttemptCount = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional int64 processing_job_id = 21;
 * @return {number}
 */
proto.pb.UnreviewedVideo.prototype.getProcessingJobId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.setProcessingJobId = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.UnreviewedVideo} returns this
 */
proto.pb.UnreviewedVideo.prototype.clearProcessingJobId = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.UnreviewedVideo.prototype.hasProcessingJobId = function() {
  return jspb.Message.getField(this, 21) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListUnreviewedVideosResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListUnreviewedVideosResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListUnreviewedVideosResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListUnreviewedVideosResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListUnreviewedVideosResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
videosList: jspb.Message.toObjectList(msg.getVideosList(),
    proto.pb.UnreviewedVideo.toObject, includeInstance),
totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListUnreviewedVideosResponse}
 */
proto.pb.ListUnreviewedVideosResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListUnreviewedVideosResponse;
  return proto.pb.ListUnreviewedVideosResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListUnreviewedVideosResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListUnreviewedVideosResponse}
 */
proto.pb.ListUnreviewedVideosResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.UnreviewedVideo;
      reader.readMessage(value,proto.pb.UnreviewedVideo.deserializeBinaryFromReader);
      msg.addVideos(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListUnreviewedVideosResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListUnreviewedVideosResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListUnreviewedVideosResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListUnreviewedVideosResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideosList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.UnreviewedVideo.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated UnreviewedVideo videos = 1;
 * @return {!Array<!proto.pb.UnreviewedVideo>}
 */
proto.pb.ListUnreviewedVideosResponse.prototype.getVideosList = function() {
  return /** @type{!Array<!proto.pb.UnreviewedVideo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.UnreviewedVideo, 1));
};


/**
 * @param {!Array<!proto.pb.UnreviewedVideo>} value
 * @return {!proto.pb.ListUnreviewedVideosResponse} returns this
*/
proto.pb.ListUnreviewedVideosResponse.prototype.setVideosList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.UnreviewedVideo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.UnreviewedVideo}
 */
proto.pb.ListUnreviewedVideosResponse.prototype.addVideos = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.UnreviewedVideo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListUnreviewedVideosResponse} returns this
 */
proto.pb.ListUnreviewedVideosResponse.prototype.clearVideosList = function() {
  return this.setVideosList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.ListUnreviewedVideosResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListUnreviewedVideosResponse} returns this
 */
proto.pb.ListUnreviewedVideosResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CourseVideoProcessingJob.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CourseVideoProcessingJob.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CourseVideoProcessingJob} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseVideoProcessingJob.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
videoId: jspb.Message.getFieldWithDefault(msg, 2, 0),
courseId: jspb.Message.getFieldWithDefault(msg, 3, 0),
jobType: jspb.Message.getFieldWithDefault(msg, 4, ""),
status: jspb.Message.getFieldWithDefault(msg, 5, ""),
sourceVersion: jspb.Message.getFieldWithDefault(msg, 6, ""),
lockedBy: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
lockedAt: (f = msg.getLockedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
heartbeatAt: (f = msg.getHeartbeatAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
leaseTimeoutSeconds: jspb.Message.getFieldWithDefault(msg, 10, 0),
attemptCount: jspb.Message.getFieldWithDefault(msg, 11, 0),
maxAttempts: jspb.Message.getFieldWithDefault(msg, 12, 0),
progressPercent: jspb.Message.getFieldWithDefault(msg, 13, 0),
progressStage: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
lastError: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
completedAt: (f = msg.getCompletedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CourseVideoProcessingJob}
 */
proto.pb.CourseVideoProcessingJob.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CourseVideoProcessingJob;
  return proto.pb.CourseVideoProcessingJob.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CourseVideoProcessingJob} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CourseVideoProcessingJob}
 */
proto.pb.CourseVideoProcessingJob.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setJobType(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSourceVersion(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLockedBy(value);
      break;
    case 8:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLockedAt(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setHeartbeatAt(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLeaseTimeoutSeconds(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAttemptCount(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMaxAttempts(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressPercent(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProgressStage(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setLastError(value);
      break;
    case 16:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 17:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    case 18:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCompletedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CourseVideoProcessingJob.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CourseVideoProcessingJob.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CourseVideoProcessingJob} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseVideoProcessingJob.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getJobType();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getSourceVersion();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getLockedAt();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getHeartbeatAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getLeaseTimeoutSeconds();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getAttemptCount();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getMaxAttempts();
  if (f !== 0) {
    writer.writeInt32(
      12,
      f
    );
  }
  f = message.getProgressPercent();
  if (f !== 0) {
    writer.writeInt32(
      13,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      17,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getCompletedAt();
  if (f != null) {
    writer.writeMessage(
      18,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.CourseVideoProcessingJob.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 video_id = 2;
 * @return {number}
 */
proto.pb.CourseVideoProcessingJob.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 course_id = 3;
 * @return {number}
 */
proto.pb.CourseVideoProcessingJob.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string job_type = 4;
 * @return {string}
 */
proto.pb.CourseVideoProcessingJob.prototype.getJobType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setJobType = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string status = 5;
 * @return {string}
 */
proto.pb.CourseVideoProcessingJob.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string source_version = 6;
 * @return {string}
 */
proto.pb.CourseVideoProcessingJob.prototype.getSourceVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setSourceVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string locked_by = 7;
 * @return {string}
 */
proto.pb.CourseVideoProcessingJob.prototype.getLockedBy = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setLockedBy = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearLockedBy = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasLockedBy = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional google.protobuf.Timestamp locked_at = 8;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideoProcessingJob.prototype.getLockedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 8));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
*/
proto.pb.CourseVideoProcessingJob.prototype.setLockedAt = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearLockedAt = function() {
  return this.setLockedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasLockedAt = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp heartbeat_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideoProcessingJob.prototype.getHeartbeatAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
*/
proto.pb.CourseVideoProcessingJob.prototype.setHeartbeatAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearHeartbeatAt = function() {
  return this.setHeartbeatAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasHeartbeatAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional int32 lease_timeout_seconds = 10;
 * @return {number}
 */
proto.pb.CourseVideoProcessingJob.prototype.getLeaseTimeoutSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setLeaseTimeoutSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int32 attempt_count = 11;
 * @return {number}
 */
proto.pb.CourseVideoProcessingJob.prototype.getAttemptCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setAttemptCount = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int32 max_attempts = 12;
 * @return {number}
 */
proto.pb.CourseVideoProcessingJob.prototype.getMaxAttempts = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setMaxAttempts = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int32 progress_percent = 13;
 * @return {number}
 */
proto.pb.CourseVideoProcessingJob.prototype.getProgressPercent = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setProgressPercent = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional string progress_stage = 14;
 * @return {string}
 */
proto.pb.CourseVideoProcessingJob.prototype.getProgressStage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setProgressStage = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearProgressStage = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasProgressStage = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional string last_error = 15;
 * @return {string}
 */
proto.pb.CourseVideoProcessingJob.prototype.getLastError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.setLastError = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearLastError = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasLastError = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 16;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideoProcessingJob.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 16));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
*/
proto.pb.CourseVideoProcessingJob.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 17;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideoProcessingJob.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 17));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
*/
proto.pb.CourseVideoProcessingJob.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 17, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional google.protobuf.Timestamp completed_at = 18;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideoProcessingJob.prototype.getCompletedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 18));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
*/
proto.pb.CourseVideoProcessingJob.prototype.setCompletedAt = function(value) {
  return jspb.Message.setWrapperField(this, 18, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideoProcessingJob} returns this
 */
proto.pb.CourseVideoProcessingJob.prototype.clearCompletedAt = function() {
  return this.setCompletedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoProcessingJob.prototype.hasCompletedAt = function() {
  return jspb.Message.getField(this, 18) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseVideoProcessingJobsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseVideoProcessingJobsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideoProcessingJobsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
courseId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseVideoProcessingJobsRequest;
  return proto.pb.ListCourseVideoProcessingJobsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseVideoProcessingJobsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseVideoProcessingJobsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseVideoProcessingJobsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideoProcessingJobsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 page_id = 1;
 * @return {number}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest} returns this
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest} returns this
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 course_id = 3;
 * @return {number}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest} returns this
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest} returns this
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest} returns this
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCourseVideoProcessingJobsRequest} returns this
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCourseVideoProcessingJobsRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCourseVideoProcessingJobsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseVideoProcessingJobsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseVideoProcessingJobsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideoProcessingJobsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
jobsList: jspb.Message.toObjectList(msg.getJobsList(),
    proto.pb.CourseVideoProcessingJob.toObject, includeInstance),
totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseVideoProcessingJobsResponse}
 */
proto.pb.ListCourseVideoProcessingJobsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseVideoProcessingJobsResponse;
  return proto.pb.ListCourseVideoProcessingJobsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseVideoProcessingJobsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseVideoProcessingJobsResponse}
 */
proto.pb.ListCourseVideoProcessingJobsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseVideoProcessingJob;
      reader.readMessage(value,proto.pb.CourseVideoProcessingJob.deserializeBinaryFromReader);
      msg.addJobs(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseVideoProcessingJobsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseVideoProcessingJobsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseVideoProcessingJobsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CourseVideoProcessingJob.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated CourseVideoProcessingJob jobs = 1;
 * @return {!Array<!proto.pb.CourseVideoProcessingJob>}
 */
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.getJobsList = function() {
  return /** @type{!Array<!proto.pb.CourseVideoProcessingJob>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseVideoProcessingJob, 1));
};


/**
 * @param {!Array<!proto.pb.CourseVideoProcessingJob>} value
 * @return {!proto.pb.ListCourseVideoProcessingJobsResponse} returns this
*/
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.setJobsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CourseVideoProcessingJob=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseVideoProcessingJob}
 */
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.addJobs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CourseVideoProcessingJob, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseVideoProcessingJobsResponse} returns this
 */
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.clearJobsList = function() {
  return this.setJobsList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseVideoProcessingJobsResponse} returns this
 */
proto.pb.ListCourseVideoProcessingJobsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.RetryCourseVideoProcessingJobRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RetryCourseVideoProcessingJobRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RetryCourseVideoProcessingJobRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RetryCourseVideoProcessingJobRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
jobId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.RetryCourseVideoProcessingJobRequest}
 */
proto.pb.RetryCourseVideoProcessingJobRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RetryCourseVideoProcessingJobRequest;
  return proto.pb.RetryCourseVideoProcessingJobRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RetryCourseVideoProcessingJobRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RetryCourseVideoProcessingJobRequest}
 */
proto.pb.RetryCourseVideoProcessingJobRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setJobId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.RetryCourseVideoProcessingJobRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RetryCourseVideoProcessingJobRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RetryCourseVideoProcessingJobRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RetryCourseVideoProcessingJobRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJobId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 job_id = 1;
 * @return {number}
 */
proto.pb.RetryCourseVideoProcessingJobRequest.prototype.getJobId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.RetryCourseVideoProcessingJobRequest} returns this
 */
proto.pb.RetryCourseVideoProcessingJobRequest.prototype.setJobId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.RetryCourseVideoProcessingJobResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RetryCourseVideoProcessingJobResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RetryCourseVideoProcessingJobResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RetryCourseVideoProcessingJobResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
job: (f = msg.getJob()) && proto.pb.CourseVideoProcessingJob.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.RetryCourseVideoProcessingJobResponse}
 */
proto.pb.RetryCourseVideoProcessingJobResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RetryCourseVideoProcessingJobResponse;
  return proto.pb.RetryCourseVideoProcessingJobResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RetryCourseVideoProcessingJobResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RetryCourseVideoProcessingJobResponse}
 */
proto.pb.RetryCourseVideoProcessingJobResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseVideoProcessingJob;
      reader.readMessage(value,proto.pb.CourseVideoProcessingJob.deserializeBinaryFromReader);
      msg.setJob(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.RetryCourseVideoProcessingJobResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RetryCourseVideoProcessingJobResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RetryCourseVideoProcessingJobResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RetryCourseVideoProcessingJobResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJob();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.CourseVideoProcessingJob.serializeBinaryToWriter
    );
  }
};


/**
 * optional CourseVideoProcessingJob job = 1;
 * @return {?proto.pb.CourseVideoProcessingJob}
 */
proto.pb.RetryCourseVideoProcessingJobResponse.prototype.getJob = function() {
  return /** @type{?proto.pb.CourseVideoProcessingJob} */ (
    jspb.Message.getWrapperField(this, proto.pb.CourseVideoProcessingJob, 1));
};


/**
 * @param {?proto.pb.CourseVideoProcessingJob|undefined} value
 * @return {!proto.pb.RetryCourseVideoProcessingJobResponse} returns this
*/
proto.pb.RetryCourseVideoProcessingJobResponse.prototype.setJob = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.RetryCourseVideoProcessingJobResponse} returns this
 */
proto.pb.RetryCourseVideoProcessingJobResponse.prototype.clearJob = function() {
  return this.setJob(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.RetryCourseVideoProcessingJobResponse.prototype.hasJob = function() {
  return jspb.Message.getField(this, 1) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ConfirmCourseDownloadedRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ConfirmCourseDownloadedRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ConfirmCourseDownloadedRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ConfirmCourseDownloadedRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ConfirmCourseDownloadedRequest}
 */
proto.pb.ConfirmCourseDownloadedRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ConfirmCourseDownloadedRequest;
  return proto.pb.ConfirmCourseDownloadedRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ConfirmCourseDownloadedRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ConfirmCourseDownloadedRequest}
 */
proto.pb.ConfirmCourseDownloadedRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ConfirmCourseDownloadedRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ConfirmCourseDownloadedRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ConfirmCourseDownloadedRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ConfirmCourseDownloadedRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.ConfirmCourseDownloadedRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ConfirmCourseDownloadedRequest} returns this
 */
proto.pb.ConfirmCourseDownloadedRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetInstructorSalesSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetInstructorSalesSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetInstructorSalesSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetInstructorSalesSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetInstructorSalesSummaryRequest}
 */
proto.pb.GetInstructorSalesSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetInstructorSalesSummaryRequest;
  return proto.pb.GetInstructorSalesSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetInstructorSalesSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetInstructorSalesSummaryRequest}
 */
proto.pb.GetInstructorSalesSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetInstructorSalesSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetInstructorSalesSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetInstructorSalesSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetInstructorSalesSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetInstructorSalesSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetInstructorSalesSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetInstructorSalesSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
pendingAmountCents: jspb.Message.getFieldWithDefault(msg, 1, 0),
releasedAmountCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
refundedAmountCents: jspb.Message.getFieldWithDefault(msg, 3, 0),
totalCompletedSales: jspb.Message.getFieldWithDefault(msg, 4, 0),
totalRefundedSales: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.GetInstructorSalesSummaryResponse}
 */
proto.pb.GetInstructorSalesSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetInstructorSalesSummaryResponse;
  return proto.pb.GetInstructorSalesSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetInstructorSalesSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetInstructorSalesSummaryResponse}
 */
proto.pb.GetInstructorSalesSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPendingAmountCents(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReleasedAmountCents(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRefundedAmountCents(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCompletedSales(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalRefundedSales(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetInstructorSalesSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetInstructorSalesSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetInstructorSalesSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPendingAmountCents();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReleasedAmountCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getRefundedAmountCents();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getTotalCompletedSales();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getTotalRefundedSales();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional int64 pending_amount_cents = 1;
 * @return {number}
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.getPendingAmountCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetInstructorSalesSummaryResponse} returns this
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.setPendingAmountCents = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 released_amount_cents = 2;
 * @return {number}
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.getReleasedAmountCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetInstructorSalesSummaryResponse} returns this
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.setReleasedAmountCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 refunded_amount_cents = 3;
 * @return {number}
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.getRefundedAmountCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetInstructorSalesSummaryResponse} returns this
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.setRefundedAmountCents = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 total_completed_sales = 4;
 * @return {number}
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.getTotalCompletedSales = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetInstructorSalesSummaryResponse} returns this
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.setTotalCompletedSales = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 total_refunded_sales = 5;
 * @return {number}
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.getTotalRefundedSales = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetInstructorSalesSummaryResponse} returns this
 */
proto.pb.GetInstructorSalesSummaryResponse.prototype.setTotalRefundedSales = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.InstructorSalesTransaction.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.InstructorSalesTransaction.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.InstructorSalesTransaction} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.InstructorSalesTransaction.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
buyerUserId: jspb.Message.getFieldWithDefault(msg, 2, 0),
buyerNickname: jspb.Message.getFieldWithDefault(msg, 3, ""),
courseId: jspb.Message.getFieldWithDefault(msg, 4, 0),
courseTitle: jspb.Message.getFieldWithDefault(msg, 5, ""),
purchasePrice: jspb.Message.getFieldWithDefault(msg, 6, 0),
purchaseStatus: jspb.Message.getFieldWithDefault(msg, 7, ""),
escrowReleased: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
purchasedAt: (f = msg.getPurchasedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
snapshotJson: jspb.Message.getFieldWithDefault(msg, 10, ""),
commissionRateBasisPoints: jspb.Message.getFieldWithDefault(msg, 11, 0),
platformFeeInCents: jspb.Message.getFieldWithDefault(msg, 12, 0),
netAmountInCents: jspb.Message.getFieldWithDefault(msg, 13, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.InstructorSalesTransaction}
 */
proto.pb.InstructorSalesTransaction.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.InstructorSalesTransaction;
  return proto.pb.InstructorSalesTransaction.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.InstructorSalesTransaction} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.InstructorSalesTransaction}
 */
proto.pb.InstructorSalesTransaction.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBuyerUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBuyerNickname(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCourseTitle(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPurchasePrice(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPurchaseStatus(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEscrowReleased(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPurchasedAt(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSnapshotJson(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCommissionRateBasisPoints(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlatformFeeInCents(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetAmountInCents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.InstructorSalesTransaction.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.InstructorSalesTransaction.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.InstructorSalesTransaction} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.InstructorSalesTransaction.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchaseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getBuyerUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getBuyerNickname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getCourseTitle();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPurchasePrice();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPurchaseStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEscrowReleased();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getPurchasedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getSnapshotJson();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCommissionRateBasisPoints();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getPlatformFeeInCents();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getNetAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.InstructorSalesTransaction.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 buyer_user_id = 2;
 * @return {number}
 */
proto.pb.InstructorSalesTransaction.prototype.getBuyerUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setBuyerUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string buyer_nickname = 3;
 * @return {string}
 */
proto.pb.InstructorSalesTransaction.prototype.getBuyerNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setBuyerNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 course_id = 4;
 * @return {number}
 */
proto.pb.InstructorSalesTransaction.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string course_title = 5;
 * @return {string}
 */
proto.pb.InstructorSalesTransaction.prototype.getCourseTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setCourseTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 purchase_price = 6;
 * @return {number}
 */
proto.pb.InstructorSalesTransaction.prototype.getPurchasePrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setPurchasePrice = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string purchase_status = 7;
 * @return {string}
 */
proto.pb.InstructorSalesTransaction.prototype.getPurchaseStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setPurchaseStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool escrow_released = 8;
 * @return {boolean}
 */
proto.pb.InstructorSalesTransaction.prototype.getEscrowReleased = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setEscrowReleased = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional google.protobuf.Timestamp purchased_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.InstructorSalesTransaction.prototype.getPurchasedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
*/
proto.pb.InstructorSalesTransaction.prototype.setPurchasedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.clearPurchasedAt = function() {
  return this.setPurchasedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.InstructorSalesTransaction.prototype.hasPurchasedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string snapshot_json = 10;
 * @return {string}
 */
proto.pb.InstructorSalesTransaction.prototype.getSnapshotJson = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setSnapshotJson = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int32 commission_rate_basis_points = 11;
 * @return {number}
 */
proto.pb.InstructorSalesTransaction.prototype.getCommissionRateBasisPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setCommissionRateBasisPoints = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 platform_fee_in_cents = 12;
 * @return {number}
 */
proto.pb.InstructorSalesTransaction.prototype.getPlatformFeeInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setPlatformFeeInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 net_amount_in_cents = 13;
 * @return {number}
 */
proto.pb.InstructorSalesTransaction.prototype.getNetAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.InstructorSalesTransaction} returns this
 */
proto.pb.InstructorSalesTransaction.prototype.setNetAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListInstructorSalesTransactionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListInstructorSalesTransactionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListInstructorSalesTransactionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListInstructorSalesTransactionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListInstructorSalesTransactionsRequest}
 */
proto.pb.ListInstructorSalesTransactionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListInstructorSalesTransactionsRequest;
  return proto.pb.ListInstructorSalesTransactionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListInstructorSalesTransactionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListInstructorSalesTransactionsRequest}
 */
proto.pb.ListInstructorSalesTransactionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListInstructorSalesTransactionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListInstructorSalesTransactionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListInstructorSalesTransactionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListInstructorSalesTransactionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 page_id = 1;
 * @return {number}
 */
proto.pb.ListInstructorSalesTransactionsRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListInstructorSalesTransactionsRequest} returns this
 */
proto.pb.ListInstructorSalesTransactionsRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.pb.ListInstructorSalesTransactionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListInstructorSalesTransactionsRequest} returns this
 */
proto.pb.ListInstructorSalesTransactionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListInstructorSalesTransactionsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListInstructorSalesTransactionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListInstructorSalesTransactionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListInstructorSalesTransactionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListInstructorSalesTransactionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
transactionsList: jspb.Message.toObjectList(msg.getTransactionsList(),
    proto.pb.InstructorSalesTransaction.toObject, includeInstance),
totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListInstructorSalesTransactionsResponse}
 */
proto.pb.ListInstructorSalesTransactionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListInstructorSalesTransactionsResponse;
  return proto.pb.ListInstructorSalesTransactionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListInstructorSalesTransactionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListInstructorSalesTransactionsResponse}
 */
proto.pb.ListInstructorSalesTransactionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.InstructorSalesTransaction;
      reader.readMessage(value,proto.pb.InstructorSalesTransaction.deserializeBinaryFromReader);
      msg.addTransactions(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListInstructorSalesTransactionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListInstructorSalesTransactionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListInstructorSalesTransactionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListInstructorSalesTransactionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.InstructorSalesTransaction.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated InstructorSalesTransaction transactions = 1;
 * @return {!Array<!proto.pb.InstructorSalesTransaction>}
 */
proto.pb.ListInstructorSalesTransactionsResponse.prototype.getTransactionsList = function() {
  return /** @type{!Array<!proto.pb.InstructorSalesTransaction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.InstructorSalesTransaction, 1));
};


/**
 * @param {!Array<!proto.pb.InstructorSalesTransaction>} value
 * @return {!proto.pb.ListInstructorSalesTransactionsResponse} returns this
*/
proto.pb.ListInstructorSalesTransactionsResponse.prototype.setTransactionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.InstructorSalesTransaction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.InstructorSalesTransaction}
 */
proto.pb.ListInstructorSalesTransactionsResponse.prototype.addTransactions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.InstructorSalesTransaction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListInstructorSalesTransactionsResponse} returns this
 */
proto.pb.ListInstructorSalesTransactionsResponse.prototype.clearTransactionsList = function() {
  return this.setTransactionsList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.ListInstructorSalesTransactionsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListInstructorSalesTransactionsResponse} returns this
 */
proto.pb.ListInstructorSalesTransactionsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AuditCourseVideoReviewRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AuditCourseVideoReviewRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AuditCourseVideoReviewRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
videoId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
action: jspb.Message.getFieldWithDefault(msg, 3, ""),
reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AuditCourseVideoReviewRequest}
 */
proto.pb.AuditCourseVideoReviewRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AuditCourseVideoReviewRequest;
  return proto.pb.AuditCourseVideoReviewRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AuditCourseVideoReviewRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AuditCourseVideoReviewRequest}
 */
proto.pb.AuditCourseVideoReviewRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AuditCourseVideoReviewRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AuditCourseVideoReviewRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AuditCourseVideoReviewRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AuditCourseVideoReviewRequest} returns this
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AuditCourseVideoReviewRequest} returns this
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 video_id = 2;
 * @return {number}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AuditCourseVideoReviewRequest} returns this
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AuditCourseVideoReviewRequest} returns this
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.clearVideoId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.hasVideoId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string action = 3;
 * @return {string}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AuditCourseVideoReviewRequest} returns this
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AuditCourseVideoReviewRequest} returns this
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AuditCourseVideoReviewRequest} returns this
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AuditCourseVideoReviewRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AuditCourseVideoReviewResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AuditCourseVideoReviewResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AuditCourseVideoReviewResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AuditCourseVideoReviewResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AuditCourseVideoReviewResponse}
 */
proto.pb.AuditCourseVideoReviewResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AuditCourseVideoReviewResponse;
  return proto.pb.AuditCourseVideoReviewResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AuditCourseVideoReviewResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AuditCourseVideoReviewResponse}
 */
proto.pb.AuditCourseVideoReviewResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AuditCourseVideoReviewResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AuditCourseVideoReviewResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AuditCourseVideoReviewResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AuditCourseVideoReviewResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.AuditCourseVideoReviewResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AuditCourseVideoReviewResponse} returns this
 */
proto.pb.AuditCourseVideoReviewResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CourseReviewLog.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CourseReviewLog.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CourseReviewLog} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseReviewLog.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
courseId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
videoId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
reviewerId: jspb.Message.getFieldWithDefault(msg, 4, 0),
reviewerNickname: jspb.Message.getFieldWithDefault(msg, 5, ""),
reviewerAvatarUrl: jspb.Message.getFieldWithDefault(msg, 6, ""),
action: jspb.Message.getFieldWithDefault(msg, 7, ""),
reason: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CourseReviewLog}
 */
proto.pb.CourseReviewLog.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CourseReviewLog;
  return proto.pb.CourseReviewLog.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CourseReviewLog} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CourseReviewLog}
 */
proto.pb.CourseReviewLog.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReviewerId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReviewerNickname(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReviewerAvatarUrl(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAction(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 9:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CourseReviewLog.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CourseReviewLog.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CourseReviewLog} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseReviewLog.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getReviewerId();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getReviewerNickname();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReviewerAvatarUrl();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 8));
  if (f != null) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.CourseReviewLog.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 course_id = 2;
 * @return {number}
 */
proto.pb.CourseReviewLog.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseReviewLog.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 video_id = 3;
 * @return {number}
 */
proto.pb.CourseReviewLog.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setVideoId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.clearVideoId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseReviewLog.prototype.hasVideoId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional int64 reviewer_id = 4;
 * @return {number}
 */
proto.pb.CourseReviewLog.prototype.getReviewerId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setReviewerId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string reviewer_nickname = 5;
 * @return {string}
 */
proto.pb.CourseReviewLog.prototype.getReviewerNickname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setReviewerNickname = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string reviewer_avatar_url = 6;
 * @return {string}
 */
proto.pb.CourseReviewLog.prototype.getReviewerAvatarUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setReviewerAvatarUrl = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string action = 7;
 * @return {string}
 */
proto.pb.CourseReviewLog.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string reason = 8;
 * @return {string}
 */
proto.pb.CourseReviewLog.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.clearReason = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseReviewLog.prototype.hasReason = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional google.protobuf.Timestamp created_at = 9;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseReviewLog.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 9));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseReviewLog} returns this
*/
proto.pb.CourseReviewLog.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseReviewLog} returns this
 */
proto.pb.CourseReviewLog.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseReviewLog.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 9) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseReviewLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseReviewLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseReviewLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseReviewLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
videoId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseReviewLogsRequest}
 */
proto.pb.ListCourseReviewLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseReviewLogsRequest;
  return proto.pb.ListCourseReviewLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseReviewLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseReviewLogsRequest}
 */
proto.pb.ListCourseReviewLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseReviewLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseReviewLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseReviewLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseReviewLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.ListCourseReviewLogsRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseReviewLogsRequest} returns this
 */
proto.pb.ListCourseReviewLogsRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCourseReviewLogsRequest} returns this
 */
proto.pb.ListCourseReviewLogsRequest.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCourseReviewLogsRequest.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 video_id = 2;
 * @return {number}
 */
proto.pb.ListCourseReviewLogsRequest.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseReviewLogsRequest} returns this
 */
proto.pb.ListCourseReviewLogsRequest.prototype.setVideoId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ListCourseReviewLogsRequest} returns this
 */
proto.pb.ListCourseReviewLogsRequest.prototype.clearVideoId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ListCourseReviewLogsRequest.prototype.hasVideoId = function() {
  return jspb.Message.getField(this, 2) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCourseReviewLogsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseReviewLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseReviewLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseReviewLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseReviewLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
logsList: jspb.Message.toObjectList(msg.getLogsList(),
    proto.pb.CourseReviewLog.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseReviewLogsResponse}
 */
proto.pb.ListCourseReviewLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseReviewLogsResponse;
  return proto.pb.ListCourseReviewLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseReviewLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseReviewLogsResponse}
 */
proto.pb.ListCourseReviewLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseReviewLog;
      reader.readMessage(value,proto.pb.CourseReviewLog.deserializeBinaryFromReader);
      msg.addLogs(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseReviewLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseReviewLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseReviewLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseReviewLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CourseReviewLog.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CourseReviewLog logs = 1;
 * @return {!Array<!proto.pb.CourseReviewLog>}
 */
proto.pb.ListCourseReviewLogsResponse.prototype.getLogsList = function() {
  return /** @type{!Array<!proto.pb.CourseReviewLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseReviewLog, 1));
};


/**
 * @param {!Array<!proto.pb.CourseReviewLog>} value
 * @return {!proto.pb.ListCourseReviewLogsResponse} returns this
*/
proto.pb.ListCourseReviewLogsResponse.prototype.setLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CourseReviewLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseReviewLog}
 */
proto.pb.ListCourseReviewLogsResponse.prototype.addLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CourseReviewLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseReviewLogsResponse} returns this
 */
proto.pb.ListCourseReviewLogsResponse.prototype.clearLogsList = function() {
  return this.setLogsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminRefundCoursePurchaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminRefundCoursePurchaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminRefundCoursePurchaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
userId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
courseId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
purchaseUuid: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest}
 */
proto.pb.AdminRefundCoursePurchaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminRefundCoursePurchaseRequest;
  return proto.pb.AdminRefundCoursePurchaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminRefundCoursePurchaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest}
 */
proto.pb.AdminRefundCoursePurchaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPurchaseUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminRefundCoursePurchaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminRefundCoursePurchaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminRefundCoursePurchaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.setPurchaseId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.clearPurchaseId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.hasPurchaseId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 course_id = 3;
 * @return {number}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string purchase_uuid = 5;
 * @return {string}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.getPurchaseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.setPurchaseUuid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminRefundCoursePurchaseRequest} returns this
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.clearPurchaseUuid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminRefundCoursePurchaseRequest.prototype.hasPurchaseUuid = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminRefundCoursePurchaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminRefundCoursePurchaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminRefundCoursePurchaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
status: jspb.Message.getFieldWithDefault(msg, 2, ""),
escrowStatus: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminRefundCoursePurchaseResponse}
 */
proto.pb.AdminRefundCoursePurchaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminRefundCoursePurchaseResponse;
  return proto.pb.AdminRefundCoursePurchaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminRefundCoursePurchaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminRefundCoursePurchaseResponse}
 */
proto.pb.AdminRefundCoursePurchaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEscrowStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminRefundCoursePurchaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminRefundCoursePurchaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminRefundCoursePurchaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchaseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEscrowStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminRefundCoursePurchaseResponse} returns this
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminRefundCoursePurchaseResponse} returns this
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string escrow_status = 3;
 * @return {string}
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.getEscrowStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminRefundCoursePurchaseResponse} returns this
 */
proto.pb.AdminRefundCoursePurchaseResponse.prototype.setEscrowStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminFreezeCourseEscrowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminFreezeCourseEscrowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeCourseEscrowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
userId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
courseId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
reason: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
purchaseUuid: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest}
 */
proto.pb.AdminFreezeCourseEscrowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminFreezeCourseEscrowRequest;
  return proto.pb.AdminFreezeCourseEscrowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminFreezeCourseEscrowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest}
 */
proto.pb.AdminFreezeCourseEscrowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPurchaseUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminFreezeCourseEscrowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminFreezeCourseEscrowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeCourseEscrowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.setPurchaseId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.clearPurchaseId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.hasPurchaseId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 course_id = 3;
 * @return {number}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.clearReason = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string purchase_uuid = 5;
 * @return {string}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.getPurchaseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.setPurchaseUuid = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminFreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.clearPurchaseUuid = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminFreezeCourseEscrowRequest.prototype.hasPurchaseUuid = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminFreezeCourseEscrowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminFreezeCourseEscrowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeCourseEscrowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
isFrozen: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
status: jspb.Message.getFieldWithDefault(msg, 3, ""),
escrowStatus: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminFreezeCourseEscrowResponse}
 */
proto.pb.AdminFreezeCourseEscrowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminFreezeCourseEscrowResponse;
  return proto.pb.AdminFreezeCourseEscrowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminFreezeCourseEscrowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminFreezeCourseEscrowResponse}
 */
proto.pb.AdminFreezeCourseEscrowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsFrozen(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEscrowStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminFreezeCourseEscrowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminFreezeCourseEscrowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeCourseEscrowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchaseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsFrozen();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEscrowStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_frozen = 2;
 * @return {boolean}
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.getIsFrozen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminFreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.setIsFrozen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string escrow_status = 4;
 * @return {string}
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.getEscrowStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminFreezeCourseEscrowResponse.prototype.setEscrowStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminUnfreezeCourseEscrowRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminUnfreezeCourseEscrowRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
userId: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
courseId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
purchaseUuid: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
reason: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminUnfreezeCourseEscrowRequest;
  return proto.pb.AdminUnfreezeCourseEscrowRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminUnfreezeCourseEscrowRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPurchaseUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminUnfreezeCourseEscrowRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminUnfreezeCourseEscrowRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.setPurchaseId = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.clearPurchaseId = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.hasPurchaseId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int64 course_id = 3;
 * @return {number}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.clearCourseId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.hasCourseId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string purchase_uuid = 4;
 * @return {string}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.getPurchaseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.setPurchaseUuid = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.clearPurchaseUuid = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.hasPurchaseUuid = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string reason = 5;
 * @return {string}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.setReason = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowRequest} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.clearReason = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminUnfreezeCourseEscrowRequest.prototype.hasReason = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminUnfreezeCourseEscrowResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminUnfreezeCourseEscrowResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
isUnfrozen: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
status: jspb.Message.getFieldWithDefault(msg, 3, ""),
escrowStatus: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowResponse}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminUnfreezeCourseEscrowResponse;
  return proto.pb.AdminUnfreezeCourseEscrowResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminUnfreezeCourseEscrowResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminUnfreezeCourseEscrowResponse}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUnfrozen(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEscrowStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminUnfreezeCourseEscrowResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminUnfreezeCourseEscrowResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchaseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getIsUnfrozen();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEscrowStatus();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional bool is_unfrozen = 2;
 * @return {boolean}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.getIsUnfrozen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.setIsUnfrozen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional string status = 3;
 * @return {string}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string escrow_status = 4;
 * @return {string}
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.getEscrowStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeCourseEscrowResponse} returns this
 */
proto.pb.AdminUnfreezeCourseEscrowResponse.prototype.setEscrowStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListMyPurchasedCoursesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListMyPurchasedCoursesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListMyPurchasedCoursesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListMyPurchasedCoursesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListMyPurchasedCoursesRequest}
 */
proto.pb.ListMyPurchasedCoursesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListMyPurchasedCoursesRequest;
  return proto.pb.ListMyPurchasedCoursesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListMyPurchasedCoursesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListMyPurchasedCoursesRequest}
 */
proto.pb.ListMyPurchasedCoursesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListMyPurchasedCoursesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListMyPurchasedCoursesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListMyPurchasedCoursesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListMyPurchasedCoursesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 page_id = 1;
 * @return {number}
 */
proto.pb.ListMyPurchasedCoursesRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListMyPurchasedCoursesRequest} returns this
 */
proto.pb.ListMyPurchasedCoursesRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.pb.ListMyPurchasedCoursesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListMyPurchasedCoursesRequest} returns this
 */
proto.pb.ListMyPurchasedCoursesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListMyPurchasedCoursesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListMyPurchasedCoursesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListMyPurchasedCoursesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListMyPurchasedCoursesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListMyPurchasedCoursesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
coursesList: jspb.Message.toObjectList(msg.getCoursesList(),
    proto.pb.Course.toObject, includeInstance),
totalCount: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListMyPurchasedCoursesResponse}
 */
proto.pb.ListMyPurchasedCoursesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListMyPurchasedCoursesResponse;
  return proto.pb.ListMyPurchasedCoursesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListMyPurchasedCoursesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListMyPurchasedCoursesResponse}
 */
proto.pb.ListMyPurchasedCoursesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.Course;
      reader.readMessage(value,proto.pb.Course.deserializeBinaryFromReader);
      msg.addCourses(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalCount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListMyPurchasedCoursesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListMyPurchasedCoursesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListMyPurchasedCoursesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListMyPurchasedCoursesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCoursesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.Course.serializeBinaryToWriter
    );
  }
  f = message.getTotalCount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * repeated Course courses = 1;
 * @return {!Array<!proto.pb.Course>}
 */
proto.pb.ListMyPurchasedCoursesResponse.prototype.getCoursesList = function() {
  return /** @type{!Array<!proto.pb.Course>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.Course, 1));
};


/**
 * @param {!Array<!proto.pb.Course>} value
 * @return {!proto.pb.ListMyPurchasedCoursesResponse} returns this
*/
proto.pb.ListMyPurchasedCoursesResponse.prototype.setCoursesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.Course=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.Course}
 */
proto.pb.ListMyPurchasedCoursesResponse.prototype.addCourses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.Course, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListMyPurchasedCoursesResponse} returns this
 */
proto.pb.ListMyPurchasedCoursesResponse.prototype.clearCoursesList = function() {
  return this.setCoursesList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.ListMyPurchasedCoursesResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListMyPurchasedCoursesResponse} returns this
 */
proto.pb.ListMyPurchasedCoursesResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.CourseVideoLearningProgress.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CourseVideoLearningProgress.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CourseVideoLearningProgress} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseVideoLearningProgress.toObject = function(includeInstance, msg) {
  var f, obj = {
videoId: jspb.Message.getFieldWithDefault(msg, 1, 0),
progressSeconds: jspb.Message.getFieldWithDefault(msg, 2, 0),
isCompleted: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
lastWatchedAt: (f = msg.getLastWatchedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
watchedSeconds: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.CourseVideoLearningProgress}
 */
proto.pb.CourseVideoLearningProgress.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CourseVideoLearningProgress;
  return proto.pb.CourseVideoLearningProgress.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CourseVideoLearningProgress} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CourseVideoLearningProgress}
 */
proto.pb.CourseVideoLearningProgress.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setVideoId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProgressSeconds(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCompleted(value);
      break;
    case 4:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setLastWatchedAt(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWatchedSeconds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.CourseVideoLearningProgress.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CourseVideoLearningProgress.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CourseVideoLearningProgress} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CourseVideoLearningProgress.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVideoId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProgressSeconds();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getIsCompleted();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getLastWatchedAt();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getWatchedSeconds();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional int64 video_id = 1;
 * @return {number}
 */
proto.pb.CourseVideoLearningProgress.prototype.getVideoId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoLearningProgress} returns this
 */
proto.pb.CourseVideoLearningProgress.prototype.setVideoId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 progress_seconds = 2;
 * @return {number}
 */
proto.pb.CourseVideoLearningProgress.prototype.getProgressSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoLearningProgress} returns this
 */
proto.pb.CourseVideoLearningProgress.prototype.setProgressSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional bool is_completed = 3;
 * @return {boolean}
 */
proto.pb.CourseVideoLearningProgress.prototype.getIsCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.CourseVideoLearningProgress} returns this
 */
proto.pb.CourseVideoLearningProgress.prototype.setIsCompleted = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp last_watched_at = 4;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.CourseVideoLearningProgress.prototype.getLastWatchedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 4));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.CourseVideoLearningProgress} returns this
*/
proto.pb.CourseVideoLearningProgress.prototype.setLastWatchedAt = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.CourseVideoLearningProgress} returns this
 */
proto.pb.CourseVideoLearningProgress.prototype.clearLastWatchedAt = function() {
  return this.setLastWatchedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.CourseVideoLearningProgress.prototype.hasLastWatchedAt = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 watched_seconds = 5;
 * @return {number}
 */
proto.pb.CourseVideoLearningProgress.prototype.getWatchedSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.CourseVideoLearningProgress} returns this
 */
proto.pb.CourseVideoLearningProgress.prototype.setWatchedSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseLearningProgressRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseLearningProgressRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseLearningProgressRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseLearningProgressRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
courseId: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseLearningProgressRequest}
 */
proto.pb.ListCourseLearningProgressRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseLearningProgressRequest;
  return proto.pb.ListCourseLearningProgressRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseLearningProgressRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseLearningProgressRequest}
 */
proto.pb.ListCourseLearningProgressRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseLearningProgressRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseLearningProgressRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseLearningProgressRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseLearningProgressRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 course_id = 1;
 * @return {number}
 */
proto.pb.ListCourseLearningProgressRequest.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ListCourseLearningProgressRequest} returns this
 */
proto.pb.ListCourseLearningProgressRequest.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ListCourseLearningProgressResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.ListCourseLearningProgressResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ListCourseLearningProgressResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ListCourseLearningProgressResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseLearningProgressResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
progressesList: jspb.Message.toObjectList(msg.getProgressesList(),
    proto.pb.CourseVideoLearningProgress.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.ListCourseLearningProgressResponse}
 */
proto.pb.ListCourseLearningProgressResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ListCourseLearningProgressResponse;
  return proto.pb.ListCourseLearningProgressResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ListCourseLearningProgressResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ListCourseLearningProgressResponse}
 */
proto.pb.ListCourseLearningProgressResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.CourseVideoLearningProgress;
      reader.readMessage(value,proto.pb.CourseVideoLearningProgress.deserializeBinaryFromReader);
      msg.addProgresses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.ListCourseLearningProgressResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ListCourseLearningProgressResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ListCourseLearningProgressResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ListCourseLearningProgressResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProgressesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.CourseVideoLearningProgress.serializeBinaryToWriter
    );
  }
};


/**
 * repeated CourseVideoLearningProgress progresses = 1;
 * @return {!Array<!proto.pb.CourseVideoLearningProgress>}
 */
proto.pb.ListCourseLearningProgressResponse.prototype.getProgressesList = function() {
  return /** @type{!Array<!proto.pb.CourseVideoLearningProgress>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.CourseVideoLearningProgress, 1));
};


/**
 * @param {!Array<!proto.pb.CourseVideoLearningProgress>} value
 * @return {!proto.pb.ListCourseLearningProgressResponse} returns this
*/
proto.pb.ListCourseLearningProgressResponse.prototype.setProgressesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.CourseVideoLearningProgress=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.CourseVideoLearningProgress}
 */
proto.pb.ListCourseLearningProgressResponse.prototype.addProgresses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.CourseVideoLearningProgress, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ListCourseLearningProgressResponse} returns this
 */
proto.pb.ListCourseLearningProgressResponse.prototype.clearProgressesList = function() {
  return this.setProgressesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
purchaseUuid: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminGetCoursePurchaseRefundDetailsRequest;
  return proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPurchaseUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchaseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string purchase_uuid = 2;
 * @return {string}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.getPurchaseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.setPurchaseUuid = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsRequest} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.clearPurchaseUuid = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsRequest.prototype.hasPurchaseUuid = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
purchaseId: jspb.Message.getFieldWithDefault(msg, 1, 0),
userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
courseId: jspb.Message.getFieldWithDefault(msg, 3, 0),
purchaseUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
purchasePrice: jspb.Message.getFieldWithDefault(msg, 5, 0),
status: jspb.Message.getFieldWithDefault(msg, 6, ""),
escrowStatus: jspb.Message.getFieldWithDefault(msg, 7, ""),
escrowReleased: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
isRefundable: jspb.Message.getBooleanFieldWithDefault(msg, 9, false),
hasDownloadedOffline: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
purchasedAt: (f = msg.getPurchasedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
refundExpiresAt: (f = msg.getRefundExpiresAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
refundedAt: (f = msg.getRefundedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
refundReason: (f = jspb.Message.getField(msg, 14)) == null ? undefined : f,
frozenAt: (f = msg.getFrozenAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
frozenReason: (f = jspb.Message.getField(msg, 16)) == null ? undefined : f,
frozenByAdminId: (f = jspb.Message.getField(msg, 17)) == null ? undefined : f,
refundEligible: jspb.Message.getBooleanFieldWithDefault(msg, 18, false),
refundIneligibleReason: jspb.Message.getFieldWithDefault(msg, 19, ""),
watchedPaidSeconds: jspb.Message.getFieldWithDefault(msg, 20, 0),
totalPaidSeconds: jspb.Message.getFieldWithDefault(msg, 21, 0),
watchedPercent: jspb.Message.getFloatingPointFieldWithDefault(msg, 22, 0.0),
remainingAnalysisQuota: jspb.Message.getFieldWithDefault(msg, 23, 0),
analysisQuotaLimit: jspb.Message.getFieldWithDefault(msg, 24, 0),
isRepurchase: jspb.Message.getBooleanFieldWithDefault(msg, 25, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminGetCoursePurchaseRefundDetailsResponse;
  return proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchaseId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCourseId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPurchaseUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPurchasePrice(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEscrowStatus(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEscrowReleased(value);
      break;
    case 9:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRefundable(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setHasDownloadedOffline(value);
      break;
    case 11:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setPurchasedAt(value);
      break;
    case 12:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRefundExpiresAt(value);
      break;
    case 13:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setRefundedAt(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefundReason(value);
      break;
    case 15:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setFrozenAt(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFrozenReason(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenByAdminId(value);
      break;
    case 18:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRefundEligible(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefundIneligibleReason(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWatchedPaidSeconds(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalPaidSeconds(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readDouble());
      msg.setWatchedPercent(value);
      break;
    case 23:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRemainingAnalysisQuota(value);
      break;
    case 24:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAnalysisQuotaLimit(value);
      break;
    case 25:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsRepurchase(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchaseId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCourseId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPurchaseUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPurchasePrice();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getEscrowStatus();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getEscrowReleased();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getIsRefundable();
  if (f) {
    writer.writeBool(
      9,
      f
    );
  }
  f = message.getHasDownloadedOffline();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getPurchasedAt();
  if (f != null) {
    writer.writeMessage(
      11,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRefundExpiresAt();
  if (f != null) {
    writer.writeMessage(
      12,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getRefundedAt();
  if (f != null) {
    writer.writeMessage(
      13,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 14));
  if (f != null) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getFrozenAt();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 16));
  if (f != null) {
    writer.writeString(
      16,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 17));
  if (f != null) {
    writer.writeInt64(
      17,
      f
    );
  }
  f = message.getRefundEligible();
  if (f) {
    writer.writeBool(
      18,
      f
    );
  }
  f = message.getRefundIneligibleReason();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getWatchedPaidSeconds();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
  f = message.getTotalPaidSeconds();
  if (f !== 0) {
    writer.writeInt64(
      21,
      f
    );
  }
  f = message.getWatchedPercent();
  if (f !== 0.0) {
    writer.writeDouble(
      22,
      f
    );
  }
  f = message.getRemainingAnalysisQuota();
  if (f !== 0) {
    writer.writeInt32(
      23,
      f
    );
  }
  f = message.getAnalysisQuotaLimit();
  if (f !== 0) {
    writer.writeInt32(
      24,
      f
    );
  }
  f = message.getIsRepurchase();
  if (f) {
    writer.writeBool(
      25,
      f
    );
  }
};


/**
 * optional int64 purchase_id = 1;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getPurchaseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setPurchaseId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 course_id = 3;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getCourseId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setCourseId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string purchase_uuid = 4;
 * @return {string}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getPurchaseUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setPurchaseUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 purchase_price = 5;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getPurchasePrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setPurchasePrice = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string status = 6;
 * @return {string}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string escrow_status = 7;
 * @return {string}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getEscrowStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setEscrowStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional bool escrow_released = 8;
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getEscrowReleased = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setEscrowReleased = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * optional bool is_refundable = 9;
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getIsRefundable = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 9, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setIsRefundable = function(value) {
  return jspb.Message.setProto3BooleanField(this, 9, value);
};


/**
 * optional bool has_downloaded_offline = 10;
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getHasDownloadedOffline = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setHasDownloadedOffline = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional google.protobuf.Timestamp purchased_at = 11;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getPurchasedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 11));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
*/
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setPurchasedAt = function(value) {
  return jspb.Message.setWrapperField(this, 11, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.clearPurchasedAt = function() {
  return this.setPurchasedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.hasPurchasedAt = function() {
  return jspb.Message.getField(this, 11) != null;
};


/**
 * optional google.protobuf.Timestamp refund_expires_at = 12;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getRefundExpiresAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 12));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
*/
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setRefundExpiresAt = function(value) {
  return jspb.Message.setWrapperField(this, 12, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.clearRefundExpiresAt = function() {
  return this.setRefundExpiresAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.hasRefundExpiresAt = function() {
  return jspb.Message.getField(this, 12) != null;
};


/**
 * optional google.protobuf.Timestamp refunded_at = 13;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getRefundedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 13));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
*/
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setRefundedAt = function(value) {
  return jspb.Message.setWrapperField(this, 13, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.clearRefundedAt = function() {
  return this.setRefundedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.hasRefundedAt = function() {
  return jspb.Message.getField(this, 13) != null;
};


/**
 * optional string refund_reason = 14;
 * @return {string}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getRefundReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setRefundReason = function(value) {
  return jspb.Message.setField(this, 14, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.clearRefundReason = function() {
  return jspb.Message.setField(this, 14, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.hasRefundReason = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional google.protobuf.Timestamp frozen_at = 15;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getFrozenAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 15));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
*/
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setFrozenAt = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.clearFrozenAt = function() {
  return this.setFrozenAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.hasFrozenAt = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional string frozen_reason = 16;
 * @return {string}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getFrozenReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setFrozenReason = function(value) {
  return jspb.Message.setField(this, 16, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.clearFrozenReason = function() {
  return jspb.Message.setField(this, 16, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.hasFrozenReason = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * optional int64 frozen_by_admin_id = 17;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getFrozenByAdminId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setFrozenByAdminId = function(value) {
  return jspb.Message.setField(this, 17, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.clearFrozenByAdminId = function() {
  return jspb.Message.setField(this, 17, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.hasFrozenByAdminId = function() {
  return jspb.Message.getField(this, 17) != null;
};


/**
 * optional bool refund_eligible = 18;
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getRefundEligible = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 18, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setRefundEligible = function(value) {
  return jspb.Message.setProto3BooleanField(this, 18, value);
};


/**
 * optional string refund_ineligible_reason = 19;
 * @return {string}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getRefundIneligibleReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setRefundIneligibleReason = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional int64 watched_paid_seconds = 20;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getWatchedPaidSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setWatchedPaidSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional int64 total_paid_seconds = 21;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getTotalPaidSeconds = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setTotalPaidSeconds = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional double watched_percent = 22;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getWatchedPercent = function() {
  return /** @type {number} */ (jspb.Message.getFloatingPointFieldWithDefault(this, 22, 0.0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setWatchedPercent = function(value) {
  return jspb.Message.setProto3FloatField(this, 22, value);
};


/**
 * optional int32 remaining_analysis_quota = 23;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getRemainingAnalysisQuota = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 23, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setRemainingAnalysisQuota = function(value) {
  return jspb.Message.setProto3IntField(this, 23, value);
};


/**
 * optional int32 analysis_quota_limit = 24;
 * @return {number}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getAnalysisQuotaLimit = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 24, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setAnalysisQuotaLimit = function(value) {
  return jspb.Message.setProto3IntField(this, 24, value);
};


/**
 * optional bool is_repurchase = 25;
 * @return {boolean}
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.getIsRepurchase = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 25, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminGetCoursePurchaseRefundDetailsResponse} returns this
 */
proto.pb.AdminGetCoursePurchaseRefundDetailsResponse.prototype.setIsRepurchase = function(value) {
  return jspb.Message.setProto3BooleanField(this, 25, value);
};


goog.object.extend(exports, proto.pb);
