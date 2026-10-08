// source: rpc_token_system.proto
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

var rpc_policy_pb = require('./rpc_policy_pb.js');
goog.object.extend(proto, rpc_policy_pb);
var rpc_token_product_pb = require('./rpc_token_product_pb.js');
goog.object.extend(proto, rpc_token_product_pb);
goog.exportSymbol('proto.pb.AcceptInstructorPayoutAgreementRequest', null, global);
goog.exportSymbol('proto.pb.AdjustmentCategory', null, global);
goog.exportSymbol('proto.pb.AdjustmentStatus', null, global);
goog.exportSymbol('proto.pb.AdminAdjustUserBalanceRequest', null, global);
goog.exportSymbol('proto.pb.AdminAdjustUserBalanceResponse', null, global);
goog.exportSymbol('proto.pb.AdminBalanceAdjustmentItem', null, global);
goog.exportSymbol('proto.pb.AdminCompleteReviewedPayoutRequest', null, global);
goog.exportSymbol('proto.pb.AdminCompleteReviewedPayoutResponse', null, global);
goog.exportSymbol('proto.pb.AdminFreezeUserTokensRequest', null, global);
goog.exportSymbol('proto.pb.AdminFreezeUserTokensResponse', null, global);
goog.exportSymbol('proto.pb.AdminGetUserAdjustmentStatsRequest', null, global);
goog.exportSymbol('proto.pb.AdminGetUserAdjustmentStatsResponse', null, global);
goog.exportSymbol('proto.pb.AdminIAPNotificationItem', null, global);
goog.exportSymbol('proto.pb.AdminListBalanceAdjustmentsRequest', null, global);
goog.exportSymbol('proto.pb.AdminListBalanceAdjustmentsResponse', null, global);
goog.exportSymbol('proto.pb.AdminListIAPNotificationsRequest', null, global);
goog.exportSymbol('proto.pb.AdminListIAPNotificationsResponse', null, global);
goog.exportSymbol('proto.pb.AdminListTokenPurchasesRequest', null, global);
goog.exportSymbol('proto.pb.AdminListTokenPurchasesResponse', null, global);
goog.exportSymbol('proto.pb.AdminReplayIAPNotificationRequest', null, global);
goog.exportSymbol('proto.pb.AdminReplayIAPNotificationResponse', null, global);
goog.exportSymbol('proto.pb.AdminReverseBalanceAdjustmentRequest', null, global);
goog.exportSymbol('proto.pb.AdminReverseBalanceAdjustmentResponse', null, global);
goog.exportSymbol('proto.pb.AdminTokenPurchaseItem', null, global);
goog.exportSymbol('proto.pb.AdminTriggerPayoutReconciliationRequest', null, global);
goog.exportSymbol('proto.pb.AdminTriggerPayoutReconciliationResponse', null, global);
goog.exportSymbol('proto.pb.AdminUnfreezeUserTokensRequest', null, global);
goog.exportSymbol('proto.pb.AdminUnfreezeUserTokensResponse', null, global);
goog.exportSymbol('proto.pb.ApprovePayoutRequest', null, global);
goog.exportSymbol('proto.pb.BindWisePayoutMethodRequest', null, global);
goog.exportSymbol('proto.pb.CancelTokenPurchaseRequest', null, global);
goog.exportSymbol('proto.pb.CancelTokenPurchaseResponse', null, global);
goog.exportSymbol('proto.pb.EscrowType', null, global);
goog.exportSymbol('proto.pb.EstimatePayoutFeeRequest', null, global);
goog.exportSymbol('proto.pb.EstimatePayoutFeeResponse', null, global);
goog.exportSymbol('proto.pb.ExecuteBatchPayoutRequest', null, global);
goog.exportSymbol('proto.pb.ExecuteBatchPayoutResponse', null, global);
goog.exportSymbol('proto.pb.FailedPayoutDetail', null, global);
goog.exportSymbol('proto.pb.GetLinkPaypalUrlResponse', null, global);
goog.exportSymbol('proto.pb.GetPayoutAccountSummaryResponse', null, global);
goog.exportSymbol('proto.pb.GetPayoutBatchSummaryRequest', null, global);
goog.exportSymbol('proto.pb.GetPayoutBatchSummaryResponse', null, global);
goog.exportSymbol('proto.pb.GetPayoutListRequest', null, global);
goog.exportSymbol('proto.pb.GetPayoutListResponse', null, global);
goog.exportSymbol('proto.pb.GetStripeOnboardingUrlRequest', null, global);
goog.exportSymbol('proto.pb.GetStripeOnboardingUrlResponse', null, global);
goog.exportSymbol('proto.pb.GetTokenProductsRequest', null, global);
goog.exportSymbol('proto.pb.GetTokenProductsResponse', null, global);
goog.exportSymbol('proto.pb.HandleAppleNotificationRequest', null, global);
goog.exportSymbol('proto.pb.HandleAppleNotificationResponse', null, global);
goog.exportSymbol('proto.pb.HandleGoogleNotificationRequest', null, global);
goog.exportSymbol('proto.pb.HandleGoogleNotificationResponse', null, global);
goog.exportSymbol('proto.pb.InitiateTokenPurchaseRequest', null, global);
goog.exportSymbol('proto.pb.InitiateTokenPurchaseResponse', null, global);
goog.exportSymbol('proto.pb.LinkPaypalAccountRequest', null, global);
goog.exportSymbol('proto.pb.PaymentType', null, global);
goog.exportSymbol('proto.pb.PayoutInfo', null, global);
goog.exportSymbol('proto.pb.PayoutMethodSummary', null, global);
goog.exportSymbol('proto.pb.PurchaseStatus', null, global);
goog.exportSymbol('proto.pb.RejectPayoutRequest', null, global);
goog.exportSymbol('proto.pb.RequestPayoutRequest', null, global);
goog.exportSymbol('proto.pb.RequestPayoutResponse', null, global);
goog.exportSymbol('proto.pb.TransactionType', null, global);
goog.exportSymbol('proto.pb.VerifyReceiptRequest', null, global);
goog.exportSymbol('proto.pb.VerifyReceiptResponse', null, global);
goog.exportSymbol('proto.pb.VerifyStripeOrderRequest', null, global);
goog.exportSymbol('proto.pb.VerifyStripeOrderResponse', null, global);
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
proto.pb.GetTokenProductsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetTokenProductsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetTokenProductsRequest.displayName = 'proto.pb.GetTokenProductsRequest';
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
proto.pb.GetTokenProductsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.GetTokenProductsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.GetTokenProductsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetTokenProductsResponse.displayName = 'proto.pb.GetTokenProductsResponse';
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
proto.pb.InitiateTokenPurchaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.InitiateTokenPurchaseRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.InitiateTokenPurchaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.InitiateTokenPurchaseRequest.displayName = 'proto.pb.InitiateTokenPurchaseRequest';
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
proto.pb.InitiateTokenPurchaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.InitiateTokenPurchaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.InitiateTokenPurchaseResponse.displayName = 'proto.pb.InitiateTokenPurchaseResponse';
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
proto.pb.VerifyReceiptRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.VerifyReceiptRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.VerifyReceiptRequest.displayName = 'proto.pb.VerifyReceiptRequest';
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
proto.pb.VerifyReceiptResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.VerifyReceiptResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.VerifyReceiptResponse.displayName = 'proto.pb.VerifyReceiptResponse';
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
proto.pb.CancelTokenPurchaseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CancelTokenPurchaseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CancelTokenPurchaseRequest.displayName = 'proto.pb.CancelTokenPurchaseRequest';
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
proto.pb.CancelTokenPurchaseResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.CancelTokenPurchaseResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.CancelTokenPurchaseResponse.displayName = 'proto.pb.CancelTokenPurchaseResponse';
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
proto.pb.LinkPaypalAccountRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.LinkPaypalAccountRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.LinkPaypalAccountRequest.displayName = 'proto.pb.LinkPaypalAccountRequest';
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
proto.pb.GetLinkPaypalUrlResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetLinkPaypalUrlResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetLinkPaypalUrlResponse.displayName = 'proto.pb.GetLinkPaypalUrlResponse';
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
proto.pb.RequestPayoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RequestPayoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RequestPayoutRequest.displayName = 'proto.pb.RequestPayoutRequest';
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
proto.pb.RequestPayoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RequestPayoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RequestPayoutResponse.displayName = 'proto.pb.RequestPayoutResponse';
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
proto.pb.PayoutInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.PayoutInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PayoutInfo.displayName = 'proto.pb.PayoutInfo';
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
proto.pb.GetPayoutListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetPayoutListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetPayoutListRequest.displayName = 'proto.pb.GetPayoutListRequest';
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
proto.pb.GetPayoutListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.GetPayoutListResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.GetPayoutListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetPayoutListResponse.displayName = 'proto.pb.GetPayoutListResponse';
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
proto.pb.EstimatePayoutFeeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.EstimatePayoutFeeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.EstimatePayoutFeeRequest.displayName = 'proto.pb.EstimatePayoutFeeRequest';
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
proto.pb.EstimatePayoutFeeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.EstimatePayoutFeeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.EstimatePayoutFeeResponse.displayName = 'proto.pb.EstimatePayoutFeeResponse';
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
proto.pb.ApprovePayoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ApprovePayoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ApprovePayoutRequest.displayName = 'proto.pb.ApprovePayoutRequest';
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
proto.pb.RejectPayoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.RejectPayoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.RejectPayoutRequest.displayName = 'proto.pb.RejectPayoutRequest';
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
proto.pb.BindWisePayoutMethodRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.BindWisePayoutMethodRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.BindWisePayoutMethodRequest.displayName = 'proto.pb.BindWisePayoutMethodRequest';
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
proto.pb.GetStripeOnboardingUrlRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetStripeOnboardingUrlRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetStripeOnboardingUrlRequest.displayName = 'proto.pb.GetStripeOnboardingUrlRequest';
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
proto.pb.GetStripeOnboardingUrlResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetStripeOnboardingUrlResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetStripeOnboardingUrlResponse.displayName = 'proto.pb.GetStripeOnboardingUrlResponse';
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
proto.pb.GetPayoutBatchSummaryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetPayoutBatchSummaryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetPayoutBatchSummaryRequest.displayName = 'proto.pb.GetPayoutBatchSummaryRequest';
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
proto.pb.PayoutMethodSummary = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.PayoutMethodSummary, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.PayoutMethodSummary.displayName = 'proto.pb.PayoutMethodSummary';
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
proto.pb.GetPayoutBatchSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.GetPayoutBatchSummaryResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.GetPayoutBatchSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetPayoutBatchSummaryResponse.displayName = 'proto.pb.GetPayoutBatchSummaryResponse';
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
proto.pb.ExecuteBatchPayoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.ExecuteBatchPayoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ExecuteBatchPayoutRequest.displayName = 'proto.pb.ExecuteBatchPayoutRequest';
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
proto.pb.FailedPayoutDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.FailedPayoutDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.FailedPayoutDetail.displayName = 'proto.pb.FailedPayoutDetail';
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
proto.pb.ExecuteBatchPayoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.ExecuteBatchPayoutResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.ExecuteBatchPayoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.ExecuteBatchPayoutResponse.displayName = 'proto.pb.ExecuteBatchPayoutResponse';
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
proto.pb.GetPayoutAccountSummaryResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.GetPayoutAccountSummaryResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.GetPayoutAccountSummaryResponse.displayName = 'proto.pb.GetPayoutAccountSummaryResponse';
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
proto.pb.AcceptInstructorPayoutAgreementRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.AcceptInstructorPayoutAgreementRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.AcceptInstructorPayoutAgreementRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AcceptInstructorPayoutAgreementRequest.displayName = 'proto.pb.AcceptInstructorPayoutAgreementRequest';
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
proto.pb.VerifyStripeOrderRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.VerifyStripeOrderRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.VerifyStripeOrderRequest.displayName = 'proto.pb.VerifyStripeOrderRequest';
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
proto.pb.VerifyStripeOrderResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.VerifyStripeOrderResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.VerifyStripeOrderResponse.displayName = 'proto.pb.VerifyStripeOrderResponse';
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
proto.pb.HandleAppleNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.HandleAppleNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.HandleAppleNotificationRequest.displayName = 'proto.pb.HandleAppleNotificationRequest';
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
proto.pb.HandleAppleNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.HandleAppleNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.HandleAppleNotificationResponse.displayName = 'proto.pb.HandleAppleNotificationResponse';
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
proto.pb.HandleGoogleNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.HandleGoogleNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.HandleGoogleNotificationRequest.displayName = 'proto.pb.HandleGoogleNotificationRequest';
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
proto.pb.HandleGoogleNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.HandleGoogleNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.HandleGoogleNotificationResponse.displayName = 'proto.pb.HandleGoogleNotificationResponse';
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
proto.pb.AdminTokenPurchaseItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminTokenPurchaseItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminTokenPurchaseItem.displayName = 'proto.pb.AdminTokenPurchaseItem';
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
proto.pb.AdminListTokenPurchasesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminListTokenPurchasesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminListTokenPurchasesRequest.displayName = 'proto.pb.AdminListTokenPurchasesRequest';
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
proto.pb.AdminListTokenPurchasesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.AdminListTokenPurchasesResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.AdminListTokenPurchasesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminListTokenPurchasesResponse.displayName = 'proto.pb.AdminListTokenPurchasesResponse';
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
proto.pb.AdminIAPNotificationItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminIAPNotificationItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminIAPNotificationItem.displayName = 'proto.pb.AdminIAPNotificationItem';
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
proto.pb.AdminListIAPNotificationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminListIAPNotificationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminListIAPNotificationsRequest.displayName = 'proto.pb.AdminListIAPNotificationsRequest';
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
proto.pb.AdminListIAPNotificationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.AdminListIAPNotificationsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.AdminListIAPNotificationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminListIAPNotificationsResponse.displayName = 'proto.pb.AdminListIAPNotificationsResponse';
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
proto.pb.AdminAdjustUserBalanceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.AdminAdjustUserBalanceRequest.repeatedFields_, null);
};
goog.inherits(proto.pb.AdminAdjustUserBalanceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminAdjustUserBalanceRequest.displayName = 'proto.pb.AdminAdjustUserBalanceRequest';
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
proto.pb.AdminAdjustUserBalanceResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminAdjustUserBalanceResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminAdjustUserBalanceResponse.displayName = 'proto.pb.AdminAdjustUserBalanceResponse';
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
proto.pb.AdminBalanceAdjustmentItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.AdminBalanceAdjustmentItem.repeatedFields_, null);
};
goog.inherits(proto.pb.AdminBalanceAdjustmentItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminBalanceAdjustmentItem.displayName = 'proto.pb.AdminBalanceAdjustmentItem';
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
proto.pb.AdminListBalanceAdjustmentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminListBalanceAdjustmentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminListBalanceAdjustmentsRequest.displayName = 'proto.pb.AdminListBalanceAdjustmentsRequest';
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
proto.pb.AdminListBalanceAdjustmentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.AdminListBalanceAdjustmentsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.AdminListBalanceAdjustmentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminListBalanceAdjustmentsResponse.displayName = 'proto.pb.AdminListBalanceAdjustmentsResponse';
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
proto.pb.AdminReplayIAPNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminReplayIAPNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminReplayIAPNotificationRequest.displayName = 'proto.pb.AdminReplayIAPNotificationRequest';
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
proto.pb.AdminReplayIAPNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminReplayIAPNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminReplayIAPNotificationResponse.displayName = 'proto.pb.AdminReplayIAPNotificationResponse';
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
proto.pb.AdminTriggerPayoutReconciliationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminTriggerPayoutReconciliationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminTriggerPayoutReconciliationRequest.displayName = 'proto.pb.AdminTriggerPayoutReconciliationRequest';
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
proto.pb.AdminTriggerPayoutReconciliationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminTriggerPayoutReconciliationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminTriggerPayoutReconciliationResponse.displayName = 'proto.pb.AdminTriggerPayoutReconciliationResponse';
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
proto.pb.AdminGetUserAdjustmentStatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminGetUserAdjustmentStatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminGetUserAdjustmentStatsRequest.displayName = 'proto.pb.AdminGetUserAdjustmentStatsRequest';
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
proto.pb.AdminGetUserAdjustmentStatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.pb.AdminGetUserAdjustmentStatsResponse.repeatedFields_, null);
};
goog.inherits(proto.pb.AdminGetUserAdjustmentStatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminGetUserAdjustmentStatsResponse.displayName = 'proto.pb.AdminGetUserAdjustmentStatsResponse';
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
proto.pb.AdminFreezeUserTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminFreezeUserTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminFreezeUserTokensRequest.displayName = 'proto.pb.AdminFreezeUserTokensRequest';
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
proto.pb.AdminFreezeUserTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminFreezeUserTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminFreezeUserTokensResponse.displayName = 'proto.pb.AdminFreezeUserTokensResponse';
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
proto.pb.AdminUnfreezeUserTokensRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminUnfreezeUserTokensRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminUnfreezeUserTokensRequest.displayName = 'proto.pb.AdminUnfreezeUserTokensRequest';
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
proto.pb.AdminUnfreezeUserTokensResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminUnfreezeUserTokensResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminUnfreezeUserTokensResponse.displayName = 'proto.pb.AdminUnfreezeUserTokensResponse';
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
proto.pb.AdminReverseBalanceAdjustmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminReverseBalanceAdjustmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminReverseBalanceAdjustmentRequest.displayName = 'proto.pb.AdminReverseBalanceAdjustmentRequest';
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
proto.pb.AdminReverseBalanceAdjustmentResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminReverseBalanceAdjustmentResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminReverseBalanceAdjustmentResponse.displayName = 'proto.pb.AdminReverseBalanceAdjustmentResponse';
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
proto.pb.AdminCompleteReviewedPayoutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminCompleteReviewedPayoutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminCompleteReviewedPayoutRequest.displayName = 'proto.pb.AdminCompleteReviewedPayoutRequest';
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
proto.pb.AdminCompleteReviewedPayoutResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.AdminCompleteReviewedPayoutResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.pb.AdminCompleteReviewedPayoutResponse.displayName = 'proto.pb.AdminCompleteReviewedPayoutResponse';
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
proto.pb.GetTokenProductsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetTokenProductsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetTokenProductsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetTokenProductsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
includeInactive: (f = jspb.Message.getBooleanField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.pb.GetTokenProductsRequest}
 */
proto.pb.GetTokenProductsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetTokenProductsRequest;
  return proto.pb.GetTokenProductsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetTokenProductsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetTokenProductsRequest}
 */
proto.pb.GetTokenProductsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIncludeInactive(value);
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
proto.pb.GetTokenProductsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetTokenProductsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetTokenProductsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetTokenProductsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {boolean} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool include_inactive = 1;
 * @return {boolean}
 */
proto.pb.GetTokenProductsRequest.prototype.getIncludeInactive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetTokenProductsRequest} returns this
 */
proto.pb.GetTokenProductsRequest.prototype.setIncludeInactive = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetTokenProductsRequest} returns this
 */
proto.pb.GetTokenProductsRequest.prototype.clearIncludeInactive = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetTokenProductsRequest.prototype.hasIncludeInactive = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.GetTokenProductsResponse.repeatedFields_ = [1];



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
proto.pb.GetTokenProductsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetTokenProductsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetTokenProductsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetTokenProductsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
productsList: jspb.Message.toObjectList(msg.getProductsList(),
    rpc_token_product_pb.TokenProduct.toObject, includeInstance)
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
 * @return {!proto.pb.GetTokenProductsResponse}
 */
proto.pb.GetTokenProductsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetTokenProductsResponse;
  return proto.pb.GetTokenProductsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetTokenProductsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetTokenProductsResponse}
 */
proto.pb.GetTokenProductsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new rpc_token_product_pb.TokenProduct;
      reader.readMessage(value,rpc_token_product_pb.TokenProduct.deserializeBinaryFromReader);
      msg.addProducts(value);
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
proto.pb.GetTokenProductsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetTokenProductsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetTokenProductsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetTokenProductsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProductsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      rpc_token_product_pb.TokenProduct.serializeBinaryToWriter
    );
  }
};


/**
 * repeated TokenProduct products = 1;
 * @return {!Array<!proto.pb.TokenProduct>}
 */
proto.pb.GetTokenProductsResponse.prototype.getProductsList = function() {
  return /** @type{!Array<!proto.pb.TokenProduct>} */ (
    jspb.Message.getRepeatedWrapperField(this, rpc_token_product_pb.TokenProduct, 1));
};


/**
 * @param {!Array<!proto.pb.TokenProduct>} value
 * @return {!proto.pb.GetTokenProductsResponse} returns this
*/
proto.pb.GetTokenProductsResponse.prototype.setProductsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.TokenProduct=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.TokenProduct}
 */
proto.pb.GetTokenProductsResponse.prototype.addProducts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.TokenProduct, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.GetTokenProductsResponse} returns this
 */
proto.pb.GetTokenProductsResponse.prototype.clearProductsList = function() {
  return this.setProductsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.InitiateTokenPurchaseRequest.repeatedFields_ = [50];



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
proto.pb.InitiateTokenPurchaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.InitiateTokenPurchaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.InitiateTokenPurchaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.InitiateTokenPurchaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
policyConsentsList: jspb.Message.toObjectList(msg.getPolicyConsentsList(),
    rpc_policy_pb.PolicyConsent.toObject, includeInstance),
productId: jspb.Message.getFieldWithDefault(msg, 1, ""),
paymentType: jspb.Message.getFieldWithDefault(msg, 2, 0),
successUrl: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
cancelUrl: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
agreedTokenPolicy: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
expectedTokenAmountInCents: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
expectedPriceInCents: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.pb.InitiateTokenPurchaseRequest}
 */
proto.pb.InitiateTokenPurchaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.InitiateTokenPurchaseRequest;
  return proto.pb.InitiateTokenPurchaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.InitiateTokenPurchaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.InitiateTokenPurchaseRequest}
 */
proto.pb.InitiateTokenPurchaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 50:
      var value = new rpc_policy_pb.PolicyConsent;
      reader.readMessage(value,rpc_policy_pb.PolicyConsent.deserializeBinaryFromReader);
      msg.addPolicyConsents(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProductId(value);
      break;
    case 2:
      var value = /** @type {!proto.pb.PaymentType} */ (reader.readEnum());
      msg.setPaymentType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSuccessUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCancelUrl(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAgreedTokenPolicy(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readInt64String());
      msg.setExpectedTokenAmountInCents(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readInt64String());
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
proto.pb.InitiateTokenPurchaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.InitiateTokenPurchaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.InitiateTokenPurchaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.InitiateTokenPurchaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyConsentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      rpc_policy_pb.PolicyConsent.serializeBinaryToWriter
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentType();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = message.getAgreedTokenPolicy();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeInt64String(
      6,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeInt64String(
      7,
      f
    );
  }
};


/**
 * repeated PolicyConsent policy_consents = 50;
 * @return {!Array<!proto.pb.PolicyConsent>}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getPolicyConsentsList = function() {
  return /** @type{!Array<!proto.pb.PolicyConsent>} */ (
    jspb.Message.getRepeatedWrapperField(this, rpc_policy_pb.PolicyConsent, 50));
};


/**
 * @param {!Array<!proto.pb.PolicyConsent>} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
*/
proto.pb.InitiateTokenPurchaseRequest.prototype.setPolicyConsentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.pb.PolicyConsent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PolicyConsent}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.addPolicyConsents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.pb.PolicyConsent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.clearPolicyConsentsList = function() {
  return this.setPolicyConsentsList([]);
};


/**
 * optional string product_id = 1;
 * @return {string}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional PaymentType payment_type = 2;
 * @return {!proto.pb.PaymentType}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getPaymentType = function() {
  return /** @type {!proto.pb.PaymentType} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {!proto.pb.PaymentType} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.setPaymentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 2, value);
};


/**
 * optional string success_url = 3;
 * @return {string}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getSuccessUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.setSuccessUrl = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.clearSuccessUrl = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.hasSuccessUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string cancel_url = 4;
 * @return {string}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getCancelUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.setCancelUrl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.clearCancelUrl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.hasCancelUrl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bool agreed_token_policy = 5;
 * @return {boolean}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getAgreedTokenPolicy = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.setAgreedTokenPolicy = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional int64 expected_token_amount_in_cents = 6;
 * @return {string}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getExpectedTokenAmountInCents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, "0"));
};


/**
 * @param {string} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.setExpectedTokenAmountInCents = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.clearExpectedTokenAmountInCents = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.hasExpectedTokenAmountInCents = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional int64 expected_price_in_cents = 7;
 * @return {string}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.getExpectedPriceInCents = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, "0"));
};


/**
 * @param {string} value
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.setExpectedPriceInCents = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.InitiateTokenPurchaseRequest} returns this
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.clearExpectedPriceInCents = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.InitiateTokenPurchaseRequest.prototype.hasExpectedPriceInCents = function() {
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
proto.pb.InitiateTokenPurchaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.InitiateTokenPurchaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.InitiateTokenPurchaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.InitiateTokenPurchaseResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
orderId: jspb.Message.getFieldWithDefault(msg, 1, ""),
stripeCheckoutUrl: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pb.InitiateTokenPurchaseResponse}
 */
proto.pb.InitiateTokenPurchaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.InitiateTokenPurchaseResponse;
  return proto.pb.InitiateTokenPurchaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.InitiateTokenPurchaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.InitiateTokenPurchaseResponse}
 */
proto.pb.InitiateTokenPurchaseResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrderId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStripeCheckoutUrl(value);
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
proto.pb.InitiateTokenPurchaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.InitiateTokenPurchaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.InitiateTokenPurchaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.InitiateTokenPurchaseResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
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
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.pb.InitiateTokenPurchaseResponse.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InitiateTokenPurchaseResponse} returns this
 */
proto.pb.InitiateTokenPurchaseResponse.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string stripe_checkout_url = 2;
 * @return {string}
 */
proto.pb.InitiateTokenPurchaseResponse.prototype.getStripeCheckoutUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.InitiateTokenPurchaseResponse} returns this
 */
proto.pb.InitiateTokenPurchaseResponse.prototype.setStripeCheckoutUrl = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.InitiateTokenPurchaseResponse} returns this
 */
proto.pb.InitiateTokenPurchaseResponse.prototype.clearStripeCheckoutUrl = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.InitiateTokenPurchaseResponse.prototype.hasStripeCheckoutUrl = function() {
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
proto.pb.VerifyReceiptRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.VerifyReceiptRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.VerifyReceiptRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyReceiptRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
transactionId: jspb.Message.getFieldWithDefault(msg, 1, ""),
paymentNetwork: jspb.Message.getFieldWithDefault(msg, 2, ""),
paymentType: jspb.Message.getFieldWithDefault(msg, 3, 0),
productId: jspb.Message.getFieldWithDefault(msg, 4, ""),
purchaseToken: jspb.Message.getFieldWithDefault(msg, 5, ""),
orderId: jspb.Message.getFieldWithDefault(msg, 6, ""),
billingName: jspb.Message.getFieldWithDefault(msg, 7, ""),
billingAddress: jspb.Message.getFieldWithDefault(msg, 8, ""),
totalPrice: jspb.Message.getFieldWithDefault(msg, 9, 0),
actualPayment: jspb.Message.getFieldWithDefault(msg, 10, ""),
currencyCode: jspb.Message.getFieldWithDefault(msg, 11, "")
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
 * @return {!proto.pb.VerifyReceiptRequest}
 */
proto.pb.VerifyReceiptRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.VerifyReceiptRequest;
  return proto.pb.VerifyReceiptRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.VerifyReceiptRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.VerifyReceiptRequest}
 */
proto.pb.VerifyReceiptRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransactionId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPaymentNetwork(value);
      break;
    case 3:
      var value = /** @type {!proto.pb.PaymentType} */ (reader.readEnum());
      msg.setPaymentType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProductId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPurchaseToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrderId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBillingName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBillingAddress(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalPrice(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setActualPayment(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCurrencyCode(value);
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
proto.pb.VerifyReceiptRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.VerifyReceiptRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.VerifyReceiptRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyReceiptRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPaymentNetwork();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaymentType();
  if (f !== 0.0) {
    writer.writeEnum(
      3,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPurchaseToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getBillingName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getBillingAddress();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTotalPrice();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
  f = message.getActualPayment();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string transaction_id = 1;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string payment_network = 2;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getPaymentNetwork = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setPaymentNetwork = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional PaymentType payment_type = 3;
 * @return {!proto.pb.PaymentType}
 */
proto.pb.VerifyReceiptRequest.prototype.getPaymentType = function() {
  return /** @type {!proto.pb.PaymentType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {!proto.pb.PaymentType} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setPaymentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 3, value);
};


/**
 * optional string product_id = 4;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string purchase_token = 5;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getPurchaseToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setPurchaseToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string order_id = 6;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string billing_name = 7;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getBillingName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setBillingName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string billing_address = 8;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getBillingAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setBillingAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 total_price = 9;
 * @return {number}
 */
proto.pb.VerifyReceiptRequest.prototype.getTotalPrice = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setTotalPrice = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string actual_payment = 10;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getActualPayment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setActualPayment = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string currency_code = 11;
 * @return {string}
 */
proto.pb.VerifyReceiptRequest.prototype.getCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptRequest} returns this
 */
proto.pb.VerifyReceiptRequest.prototype.setCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
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
proto.pb.VerifyReceiptResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.VerifyReceiptResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.VerifyReceiptResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyReceiptResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
actualPaidPriceInCents: jspb.Message.getFieldWithDefault(msg, 3, 0),
platformFeeInCents: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.pb.VerifyReceiptResponse}
 */
proto.pb.VerifyReceiptResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.VerifyReceiptResponse;
  return proto.pb.VerifyReceiptResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.VerifyReceiptResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.VerifyReceiptResponse}
 */
proto.pb.VerifyReceiptResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActualPaidPriceInCents(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlatformFeeInCents(value);
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
proto.pb.VerifyReceiptResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.VerifyReceiptResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.VerifyReceiptResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyReceiptResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getActualPaidPriceInCents();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPlatformFeeInCents();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.VerifyReceiptResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.VerifyReceiptResponse} returns this
 */
proto.pb.VerifyReceiptResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.VerifyReceiptResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyReceiptResponse} returns this
 */
proto.pb.VerifyReceiptResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 actual_paid_price_in_cents = 3;
 * @return {number}
 */
proto.pb.VerifyReceiptResponse.prototype.getActualPaidPriceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.VerifyReceiptResponse} returns this
 */
proto.pb.VerifyReceiptResponse.prototype.setActualPaidPriceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int64 platform_fee_in_cents = 4;
 * @return {number}
 */
proto.pb.VerifyReceiptResponse.prototype.getPlatformFeeInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.VerifyReceiptResponse} returns this
 */
proto.pb.VerifyReceiptResponse.prototype.setPlatformFeeInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
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
proto.pb.CancelTokenPurchaseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CancelTokenPurchaseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CancelTokenPurchaseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CancelTokenPurchaseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
orderId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.CancelTokenPurchaseRequest}
 */
proto.pb.CancelTokenPurchaseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CancelTokenPurchaseRequest;
  return proto.pb.CancelTokenPurchaseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CancelTokenPurchaseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CancelTokenPurchaseRequest}
 */
proto.pb.CancelTokenPurchaseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrderId(value);
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
proto.pb.CancelTokenPurchaseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CancelTokenPurchaseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CancelTokenPurchaseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CancelTokenPurchaseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string order_id = 1;
 * @return {string}
 */
proto.pb.CancelTokenPurchaseRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.CancelTokenPurchaseRequest} returns this
 */
proto.pb.CancelTokenPurchaseRequest.prototype.setOrderId = function(value) {
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
proto.pb.CancelTokenPurchaseResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.CancelTokenPurchaseResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.CancelTokenPurchaseResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CancelTokenPurchaseResponse.toObject = function(includeInstance, msg) {
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
 * @return {!proto.pb.CancelTokenPurchaseResponse}
 */
proto.pb.CancelTokenPurchaseResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.CancelTokenPurchaseResponse;
  return proto.pb.CancelTokenPurchaseResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.CancelTokenPurchaseResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.CancelTokenPurchaseResponse}
 */
proto.pb.CancelTokenPurchaseResponse.deserializeBinaryFromReader = function(msg, reader) {
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
proto.pb.CancelTokenPurchaseResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.CancelTokenPurchaseResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.CancelTokenPurchaseResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.CancelTokenPurchaseResponse.serializeBinaryToWriter = function(message, writer) {
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
proto.pb.LinkPaypalAccountRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.LinkPaypalAccountRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.LinkPaypalAccountRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.LinkPaypalAccountRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
code: jspb.Message.getFieldWithDefault(msg, 1, ""),
password: jspb.Message.getFieldWithDefault(msg, 2, ""),
state: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
oauthProvider: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
oauthToken: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pb.LinkPaypalAccountRequest}
 */
proto.pb.LinkPaypalAccountRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.LinkPaypalAccountRequest;
  return proto.pb.LinkPaypalAccountRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.LinkPaypalAccountRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.LinkPaypalAccountRequest}
 */
proto.pb.LinkPaypalAccountRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCode(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setState(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthProvider(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthToken(value);
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
proto.pb.LinkPaypalAccountRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.LinkPaypalAccountRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.LinkPaypalAccountRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.LinkPaypalAccountRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string code = 1;
 * @return {string}
 */
proto.pb.LinkPaypalAccountRequest.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.pb.LinkPaypalAccountRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string state = 3;
 * @return {string}
 */
proto.pb.LinkPaypalAccountRequest.prototype.getState = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.setState = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.clearState = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.LinkPaypalAccountRequest.prototype.hasState = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string oauth_provider = 4;
 * @return {string}
 */
proto.pb.LinkPaypalAccountRequest.prototype.getOauthProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.setOauthProvider = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.clearOauthProvider = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.LinkPaypalAccountRequest.prototype.hasOauthProvider = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string oauth_token = 5;
 * @return {string}
 */
proto.pb.LinkPaypalAccountRequest.prototype.getOauthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.setOauthToken = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.LinkPaypalAccountRequest} returns this
 */
proto.pb.LinkPaypalAccountRequest.prototype.clearOauthToken = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.LinkPaypalAccountRequest.prototype.hasOauthToken = function() {
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
proto.pb.GetLinkPaypalUrlResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetLinkPaypalUrlResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetLinkPaypalUrlResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetLinkPaypalUrlResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.GetLinkPaypalUrlResponse}
 */
proto.pb.GetLinkPaypalUrlResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetLinkPaypalUrlResponse;
  return proto.pb.GetLinkPaypalUrlResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetLinkPaypalUrlResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetLinkPaypalUrlResponse}
 */
proto.pb.GetLinkPaypalUrlResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
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
proto.pb.GetLinkPaypalUrlResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetLinkPaypalUrlResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetLinkPaypalUrlResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetLinkPaypalUrlResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.pb.GetLinkPaypalUrlResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetLinkPaypalUrlResponse} returns this
 */
proto.pb.GetLinkPaypalUrlResponse.prototype.setUrl = function(value) {
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
proto.pb.RequestPayoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RequestPayoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RequestPayoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestPayoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
password: jspb.Message.getFieldWithDefault(msg, 2, ""),
idempotencyKey: jspb.Message.getFieldWithDefault(msg, 3, ""),
oauthProvider: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
oauthToken: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
expectedQuoteFingerprint: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.pb.RequestPayoutRequest}
 */
proto.pb.RequestPayoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RequestPayoutRequest;
  return proto.pb.RequestPayoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RequestPayoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RequestPayoutRequest}
 */
proto.pb.RequestPayoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIdempotencyKey(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthProvider(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthToken(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setExpectedQuoteFingerprint(value);
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
proto.pb.RequestPayoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RequestPayoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RequestPayoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestPayoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIdempotencyKey();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getExpectedQuoteFingerprint();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional int64 amount = 1;
 * @return {number}
 */
proto.pb.RequestPayoutRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.pb.RequestPayoutRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string idempotency_key = 3;
 * @return {string}
 */
proto.pb.RequestPayoutRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string oauth_provider = 4;
 * @return {string}
 */
proto.pb.RequestPayoutRequest.prototype.getOauthProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.setOauthProvider = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.clearOauthProvider = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.RequestPayoutRequest.prototype.hasOauthProvider = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string oauth_token = 5;
 * @return {string}
 */
proto.pb.RequestPayoutRequest.prototype.getOauthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.setOauthToken = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.clearOauthToken = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.RequestPayoutRequest.prototype.hasOauthToken = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string expected_quote_fingerprint = 6;
 * @return {string}
 */
proto.pb.RequestPayoutRequest.prototype.getExpectedQuoteFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.RequestPayoutRequest} returns this
 */
proto.pb.RequestPayoutRequest.prototype.setExpectedQuoteFingerprint = function(value) {
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
proto.pb.RequestPayoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RequestPayoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RequestPayoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestPayoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutId: jspb.Message.getFieldWithDefault(msg, 1, 0),
status: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.pb.RequestPayoutResponse}
 */
proto.pb.RequestPayoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RequestPayoutResponse;
  return proto.pb.RequestPayoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RequestPayoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RequestPayoutResponse}
 */
proto.pb.RequestPayoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPayoutId(value);
      break;
    case 2:
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
proto.pb.RequestPayoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RequestPayoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RequestPayoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RequestPayoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutId();
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
};


/**
 * optional int64 payout_id = 1;
 * @return {number}
 */
proto.pb.RequestPayoutResponse.prototype.getPayoutId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.RequestPayoutResponse} returns this
 */
proto.pb.RequestPayoutResponse.prototype.setPayoutId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.pb.RequestPayoutResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.RequestPayoutResponse} returns this
 */
proto.pb.RequestPayoutResponse.prototype.setStatus = function(value) {
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
proto.pb.PayoutInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PayoutInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PayoutInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PayoutInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
amount: jspb.Message.getFieldWithDefault(msg, 3, 0),
currency: jspb.Message.getFieldWithDefault(msg, 4, ""),
payoutMethod: jspb.Message.getFieldWithDefault(msg, 5, ""),
paypalBatchId: jspb.Message.getFieldWithDefault(msg, 6, ""),
paypalReceiver: jspb.Message.getFieldWithDefault(msg, 7, ""),
status: jspb.Message.getFieldWithDefault(msg, 8, ""),
note: jspb.Message.getFieldWithDefault(msg, 9, ""),
createdAt: jspb.Message.getFieldWithDefault(msg, 10, ""),
updatedAt: jspb.Message.getFieldWithDefault(msg, 11, ""),
stripeTransferId: jspb.Message.getFieldWithDefault(msg, 12, ""),
wiseTransferId: jspb.Message.getFieldWithDefault(msg, 13, ""),
feeAmount: jspb.Message.getFieldWithDefault(msg, 14, 0),
netAmount: jspb.Message.getFieldWithDefault(msg, 15, 0),
feeRate: jspb.Message.getFieldWithDefault(msg, 16, ""),
stripeId: jspb.Message.getFieldWithDefault(msg, 17, ""),
taxResidencySnapshot: jspb.Message.getFieldWithDefault(msg, 18, ""),
agreementVersion: jspb.Message.getFieldWithDefault(msg, 19, ""),
agreementSignedAt: jspb.Message.getFieldWithDefault(msg, 20, ""),
paypalItemId: jspb.Message.getFieldWithDefault(msg, 21, ""),
returnedAmount: jspb.Message.getFieldWithDefault(msg, 22, 0),
requiresManualReview: jspb.Message.getBooleanFieldWithDefault(msg, 23, false)
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
 * @return {!proto.pb.PayoutInfo}
 */
proto.pb.PayoutInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PayoutInfo;
  return proto.pb.PayoutInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PayoutInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PayoutInfo}
 */
proto.pb.PayoutInfo.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCurrency(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPayoutMethod(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPaypalBatchId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPaypalReceiver(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNote(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCreatedAt(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUpdatedAt(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStripeTransferId(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setWiseTransferId(value);
      break;
    case 14:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeeAmount(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetAmount(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFeeRate(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStripeId(value);
      break;
    case 18:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTaxResidencySnapshot(value);
      break;
    case 19:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAgreementVersion(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAgreementSignedAt(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPaypalItemId(value);
      break;
    case 22:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReturnedAmount(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequiresManualReview(value);
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
proto.pb.PayoutInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PayoutInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PayoutInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PayoutInfo.serializeBinaryToWriter = function(message, writer) {
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
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPayoutMethod();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPaypalBatchId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPaypalReceiver();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getNote();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getStripeTransferId();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getWiseTransferId();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getFeeAmount();
  if (f !== 0) {
    writer.writeInt64(
      14,
      f
    );
  }
  f = message.getNetAmount();
  if (f !== 0) {
    writer.writeInt64(
      15,
      f
    );
  }
  f = message.getFeeRate();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getStripeId();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getTaxResidencySnapshot();
  if (f.length > 0) {
    writer.writeString(
      18,
      f
    );
  }
  f = message.getAgreementVersion();
  if (f.length > 0) {
    writer.writeString(
      19,
      f
    );
  }
  f = message.getAgreementSignedAt();
  if (f.length > 0) {
    writer.writeString(
      20,
      f
    );
  }
  f = message.getPaypalItemId();
  if (f.length > 0) {
    writer.writeString(
      21,
      f
    );
  }
  f = message.getReturnedAmount();
  if (f !== 0) {
    writer.writeInt64(
      22,
      f
    );
  }
  f = message.getRequiresManualReview();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.PayoutInfo.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.pb.PayoutInfo.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 amount = 3;
 * @return {number}
 */
proto.pb.PayoutInfo.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string currency = 4;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string payout_method = 5;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getPayoutMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setPayoutMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string paypal_batch_id = 6;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getPaypalBatchId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setPaypalBatchId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string paypal_receiver = 7;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getPaypalReceiver = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setPaypalReceiver = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string status = 8;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string note = 9;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setNote = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string created_at = 10;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string updated_at = 11;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string stripe_transfer_id = 12;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getStripeTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setStripeTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string wise_transfer_id = 13;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getWiseTransferId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setWiseTransferId = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional int64 fee_amount = 14;
 * @return {number}
 */
proto.pb.PayoutInfo.prototype.getFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 14, value);
};


/**
 * optional int64 net_amount = 15;
 * @return {number}
 */
proto.pb.PayoutInfo.prototype.getNetAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setNetAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string fee_rate = 16;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string stripe_id = 17;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getStripeId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setStripeId = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional string tax_residency_snapshot = 18;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getTaxResidencySnapshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 18, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setTaxResidencySnapshot = function(value) {
  return jspb.Message.setProto3StringField(this, 18, value);
};


/**
 * optional string agreement_version = 19;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getAgreementVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 19, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setAgreementVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 19, value);
};


/**
 * optional string agreement_signed_at = 20;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getAgreementSignedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setAgreementSignedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 20, value);
};


/**
 * optional string paypal_item_id = 21;
 * @return {string}
 */
proto.pb.PayoutInfo.prototype.getPaypalItemId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setPaypalItemId = function(value) {
  return jspb.Message.setProto3StringField(this, 21, value);
};


/**
 * optional int64 returned_amount = 22;
 * @return {number}
 */
proto.pb.PayoutInfo.prototype.getReturnedAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 22, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setReturnedAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 22, value);
};


/**
 * optional bool requires_manual_review = 23;
 * @return {boolean}
 */
proto.pb.PayoutInfo.prototype.getRequiresManualReview = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.PayoutInfo} returns this
 */
proto.pb.PayoutInfo.prototype.setRequiresManualReview = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
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
proto.pb.GetPayoutListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetPayoutListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetPayoutListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageId: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
userId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
year: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
month: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
payoutMethod: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
idempotencyKey: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f
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
 * @return {!proto.pb.GetPayoutListRequest}
 */
proto.pb.GetPayoutListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetPayoutListRequest;
  return proto.pb.GetPayoutListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetPayoutListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetPayoutListRequest}
 */
proto.pb.GetPayoutListRequest.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPayoutMethod(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIdempotencyKey(value);
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
proto.pb.GetPayoutListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetPayoutListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetPayoutListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutListRequest.serializeBinaryToWriter = function(message, writer) {
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
proto.pb.GetPayoutListRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.pb.GetPayoutListRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 user_id = 3;
 * @return {number}
 */
proto.pb.GetPayoutListRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutListRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.pb.GetPayoutListRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutListRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional int32 year = 5;
 * @return {number}
 */
proto.pb.GetPayoutListRequest.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setYear = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.clearYear = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutListRequest.prototype.hasYear = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 month = 6;
 * @return {number}
 */
proto.pb.GetPayoutListRequest.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setMonth = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.clearMonth = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutListRequest.prototype.hasMonth = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string payout_method = 7;
 * @return {string}
 */
proto.pb.GetPayoutListRequest.prototype.getPayoutMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setPayoutMethod = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.clearPayoutMethod = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutListRequest.prototype.hasPayoutMethod = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string idempotency_key = 8;
 * @return {string}
 */
proto.pb.GetPayoutListRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutListRequest} returns this
 */
proto.pb.GetPayoutListRequest.prototype.clearIdempotencyKey = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutListRequest.prototype.hasIdempotencyKey = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.GetPayoutListResponse.repeatedFields_ = [1];



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
proto.pb.GetPayoutListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetPayoutListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetPayoutListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutsList: jspb.Message.toObjectList(msg.getPayoutsList(),
    proto.pb.PayoutInfo.toObject, includeInstance),
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
 * @return {!proto.pb.GetPayoutListResponse}
 */
proto.pb.GetPayoutListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetPayoutListResponse;
  return proto.pb.GetPayoutListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetPayoutListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetPayoutListResponse}
 */
proto.pb.GetPayoutListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.PayoutInfo;
      reader.readMessage(value,proto.pb.PayoutInfo.deserializeBinaryFromReader);
      msg.addPayouts(value);
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
proto.pb.GetPayoutListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetPayoutListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetPayoutListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.PayoutInfo.serializeBinaryToWriter
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
 * repeated PayoutInfo payouts = 1;
 * @return {!Array<!proto.pb.PayoutInfo>}
 */
proto.pb.GetPayoutListResponse.prototype.getPayoutsList = function() {
  return /** @type{!Array<!proto.pb.PayoutInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.PayoutInfo, 1));
};


/**
 * @param {!Array<!proto.pb.PayoutInfo>} value
 * @return {!proto.pb.GetPayoutListResponse} returns this
*/
proto.pb.GetPayoutListResponse.prototype.setPayoutsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.PayoutInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PayoutInfo}
 */
proto.pb.GetPayoutListResponse.prototype.addPayouts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.PayoutInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.GetPayoutListResponse} returns this
 */
proto.pb.GetPayoutListResponse.prototype.clearPayoutsList = function() {
  return this.setPayoutsList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.GetPayoutListResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutListResponse} returns this
 */
proto.pb.GetPayoutListResponse.prototype.setTotalCount = function(value) {
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
proto.pb.EstimatePayoutFeeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.EstimatePayoutFeeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.EstimatePayoutFeeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.EstimatePayoutFeeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
amount: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.pb.EstimatePayoutFeeRequest}
 */
proto.pb.EstimatePayoutFeeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.EstimatePayoutFeeRequest;
  return proto.pb.EstimatePayoutFeeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.EstimatePayoutFeeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.EstimatePayoutFeeRequest}
 */
proto.pb.EstimatePayoutFeeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
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
proto.pb.EstimatePayoutFeeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.EstimatePayoutFeeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.EstimatePayoutFeeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.EstimatePayoutFeeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 amount = 1;
 * @return {number}
 */
proto.pb.EstimatePayoutFeeRequest.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.EstimatePayoutFeeRequest} returns this
 */
proto.pb.EstimatePayoutFeeRequest.prototype.setAmount = function(value) {
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
proto.pb.EstimatePayoutFeeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.EstimatePayoutFeeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.EstimatePayoutFeeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.EstimatePayoutFeeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
amount: jspb.Message.getFieldWithDefault(msg, 1, 0),
feeAmount: jspb.Message.getFieldWithDefault(msg, 2, 0),
netAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
feeRate: jspb.Message.getFieldWithDefault(msg, 4, ""),
payoutMethod: jspb.Message.getFieldWithDefault(msg, 5, ""),
quoteFingerprint: jspb.Message.getFieldWithDefault(msg, 6, ""),
payoutDestination: jspb.Message.getFieldWithDefault(msg, 7, "")
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
 * @return {!proto.pb.EstimatePayoutFeeResponse}
 */
proto.pb.EstimatePayoutFeeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.EstimatePayoutFeeResponse;
  return proto.pb.EstimatePayoutFeeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.EstimatePayoutFeeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.EstimatePayoutFeeResponse}
 */
proto.pb.EstimatePayoutFeeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAmount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFeeAmount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNetAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setFeeRate(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPayoutMethod(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setQuoteFingerprint(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPayoutDestination(value);
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
proto.pb.EstimatePayoutFeeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.EstimatePayoutFeeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.EstimatePayoutFeeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.EstimatePayoutFeeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAmount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFeeAmount();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNetAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFeeRate();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPayoutMethod();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getQuoteFingerprint();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPayoutDestination();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int64 amount = 1;
 * @return {number}
 */
proto.pb.EstimatePayoutFeeResponse.prototype.getAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.EstimatePayoutFeeResponse} returns this
 */
proto.pb.EstimatePayoutFeeResponse.prototype.setAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 fee_amount = 2;
 * @return {number}
 */
proto.pb.EstimatePayoutFeeResponse.prototype.getFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.EstimatePayoutFeeResponse} returns this
 */
proto.pb.EstimatePayoutFeeResponse.prototype.setFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 net_amount = 3;
 * @return {number}
 */
proto.pb.EstimatePayoutFeeResponse.prototype.getNetAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.EstimatePayoutFeeResponse} returns this
 */
proto.pb.EstimatePayoutFeeResponse.prototype.setNetAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string fee_rate = 4;
 * @return {string}
 */
proto.pb.EstimatePayoutFeeResponse.prototype.getFeeRate = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.EstimatePayoutFeeResponse} returns this
 */
proto.pb.EstimatePayoutFeeResponse.prototype.setFeeRate = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string payout_method = 5;
 * @return {string}
 */
proto.pb.EstimatePayoutFeeResponse.prototype.getPayoutMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.EstimatePayoutFeeResponse} returns this
 */
proto.pb.EstimatePayoutFeeResponse.prototype.setPayoutMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string quote_fingerprint = 6;
 * @return {string}
 */
proto.pb.EstimatePayoutFeeResponse.prototype.getQuoteFingerprint = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.EstimatePayoutFeeResponse} returns this
 */
proto.pb.EstimatePayoutFeeResponse.prototype.setQuoteFingerprint = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string payout_destination = 7;
 * @return {string}
 */
proto.pb.EstimatePayoutFeeResponse.prototype.getPayoutDestination = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.EstimatePayoutFeeResponse} returns this
 */
proto.pb.EstimatePayoutFeeResponse.prototype.setPayoutDestination = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
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
proto.pb.ApprovePayoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ApprovePayoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ApprovePayoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ApprovePayoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.pb.ApprovePayoutRequest}
 */
proto.pb.ApprovePayoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ApprovePayoutRequest;
  return proto.pb.ApprovePayoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ApprovePayoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ApprovePayoutRequest}
 */
proto.pb.ApprovePayoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPayoutId(value);
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
proto.pb.ApprovePayoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ApprovePayoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ApprovePayoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ApprovePayoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 payout_id = 1;
 * @return {number}
 */
proto.pb.ApprovePayoutRequest.prototype.getPayoutId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ApprovePayoutRequest} returns this
 */
proto.pb.ApprovePayoutRequest.prototype.setPayoutId = function(value) {
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
proto.pb.RejectPayoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.RejectPayoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.RejectPayoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RejectPayoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.pb.RejectPayoutRequest}
 */
proto.pb.RejectPayoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.RejectPayoutRequest;
  return proto.pb.RejectPayoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.RejectPayoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.RejectPayoutRequest}
 */
proto.pb.RejectPayoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPayoutId(value);
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
proto.pb.RejectPayoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.RejectPayoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.RejectPayoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.RejectPayoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 payout_id = 1;
 * @return {number}
 */
proto.pb.RejectPayoutRequest.prototype.getPayoutId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.RejectPayoutRequest} returns this
 */
proto.pb.RejectPayoutRequest.prototype.setPayoutId = function(value) {
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
proto.pb.BindWisePayoutMethodRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.BindWisePayoutMethodRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.BindWisePayoutMethodRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.BindWisePayoutMethodRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
accountHolderName: jspb.Message.getFieldWithDefault(msg, 1, ""),
countryCode: jspb.Message.getFieldWithDefault(msg, 2, ""),
currency: jspb.Message.getFieldWithDefault(msg, 3, ""),
bankCode: jspb.Message.getFieldWithDefault(msg, 4, ""),
accountNumber: jspb.Message.getFieldWithDefault(msg, 5, ""),
isNotUsCaResident: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
password: jspb.Message.getFieldWithDefault(msg, 7, ""),
oauthProvider: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
oauthToken: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.pb.BindWisePayoutMethodRequest}
 */
proto.pb.BindWisePayoutMethodRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.BindWisePayoutMethodRequest;
  return proto.pb.BindWisePayoutMethodRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.BindWisePayoutMethodRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.BindWisePayoutMethodRequest}
 */
proto.pb.BindWisePayoutMethodRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAccountHolderName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCountryCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCurrency(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBankCode(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAccountNumber(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsNotUsCaResident(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPassword(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthProvider(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthToken(value);
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
proto.pb.BindWisePayoutMethodRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.BindWisePayoutMethodRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.BindWisePayoutMethodRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.BindWisePayoutMethodRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountHolderName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCountryCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBankCode();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAccountNumber();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIsNotUsCaResident();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPassword();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 9));
  if (f != null) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * optional string account_holder_name = 1;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getAccountHolderName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setAccountHolderName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string country_code = 2;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getCountryCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setCountryCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string currency = 3;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string bank_code = 4;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getBankCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setBankCode = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string account_number = 5;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getAccountNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setAccountNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_not_us_ca_resident = 6;
 * @return {boolean}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getIsNotUsCaResident = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setIsNotUsCaResident = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string password = 7;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string oauth_provider = 8;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getOauthProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setOauthProvider = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.clearOauthProvider = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.hasOauthProvider = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string oauth_token = 9;
 * @return {string}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.getOauthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.setOauthToken = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.BindWisePayoutMethodRequest} returns this
 */
proto.pb.BindWisePayoutMethodRequest.prototype.clearOauthToken = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.BindWisePayoutMethodRequest.prototype.hasOauthToken = function() {
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
proto.pb.GetStripeOnboardingUrlRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetStripeOnboardingUrlRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetStripeOnboardingUrlRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetStripeOnboardingUrlRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
country: jspb.Message.getFieldWithDefault(msg, 1, ""),
email: jspb.Message.getFieldWithDefault(msg, 2, ""),
returnUrl: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
refreshUrl: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
password: jspb.Message.getFieldWithDefault(msg, 5, ""),
isCaTaxResident: (f = jspb.Message.getBooleanField(msg, 6)) == null ? undefined : f,
isUsTaxResident: (f = jspb.Message.getBooleanField(msg, 7)) == null ? undefined : f,
oauthProvider: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
oauthToken: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f
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
 * @return {!proto.pb.GetStripeOnboardingUrlRequest}
 */
proto.pb.GetStripeOnboardingUrlRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetStripeOnboardingUrlRequest;
  return proto.pb.GetStripeOnboardingUrlRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetStripeOnboardingUrlRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetStripeOnboardingUrlRequest}
 */
proto.pb.GetStripeOnboardingUrlRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCountry(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReturnUrl(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRefreshUrl(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPassword(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCaTaxResident(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUsTaxResident(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthProvider(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOauthToken(value);
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
proto.pb.GetStripeOnboardingUrlRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetStripeOnboardingUrlRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetStripeOnboardingUrlRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetStripeOnboardingUrlRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCountry();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
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
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
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
  f = /** @type {boolean} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBool(
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
 * optional string country = 1;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getCountry = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setCountry = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string return_url = 3;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getReturnUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setReturnUrl = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.clearReturnUrl = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.hasReturnUrl = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string refresh_url = 4;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getRefreshUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setRefreshUrl = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.clearRefreshUrl = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.hasRefreshUrl = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string password = 5;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool is_ca_tax_resident = 6;
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getIsCaTaxResident = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setIsCaTaxResident = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.clearIsCaTaxResident = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.hasIsCaTaxResident = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bool is_us_tax_resident = 7;
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getIsUsTaxResident = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setIsUsTaxResident = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.clearIsUsTaxResident = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.hasIsUsTaxResident = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string oauth_provider = 8;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getOauthProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setOauthProvider = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.clearOauthProvider = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.hasOauthProvider = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string oauth_token = 9;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.getOauthToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.setOauthToken = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetStripeOnboardingUrlRequest} returns this
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.clearOauthToken = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetStripeOnboardingUrlRequest.prototype.hasOauthToken = function() {
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
proto.pb.GetStripeOnboardingUrlResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetStripeOnboardingUrlResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetStripeOnboardingUrlResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetStripeOnboardingUrlResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
url: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.GetStripeOnboardingUrlResponse}
 */
proto.pb.GetStripeOnboardingUrlResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetStripeOnboardingUrlResponse;
  return proto.pb.GetStripeOnboardingUrlResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetStripeOnboardingUrlResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetStripeOnboardingUrlResponse}
 */
proto.pb.GetStripeOnboardingUrlResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUrl(value);
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
proto.pb.GetStripeOnboardingUrlResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetStripeOnboardingUrlResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetStripeOnboardingUrlResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetStripeOnboardingUrlResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUrl();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string url = 1;
 * @return {string}
 */
proto.pb.GetStripeOnboardingUrlResponse.prototype.getUrl = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetStripeOnboardingUrlResponse} returns this
 */
proto.pb.GetStripeOnboardingUrlResponse.prototype.setUrl = function(value) {
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
proto.pb.GetPayoutBatchSummaryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetPayoutBatchSummaryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetPayoutBatchSummaryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutBatchSummaryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
year: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
month: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f
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
 * @return {!proto.pb.GetPayoutBatchSummaryRequest}
 */
proto.pb.GetPayoutBatchSummaryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetPayoutBatchSummaryRequest;
  return proto.pb.GetPayoutBatchSummaryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetPayoutBatchSummaryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetPayoutBatchSummaryRequest}
 */
proto.pb.GetPayoutBatchSummaryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
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
proto.pb.GetPayoutBatchSummaryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetPayoutBatchSummaryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetPayoutBatchSummaryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutBatchSummaryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional int32 year = 1;
 * @return {number}
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutBatchSummaryRequest} returns this
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.setYear = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutBatchSummaryRequest} returns this
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.clearYear = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.hasYear = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 month = 2;
 * @return {number}
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutBatchSummaryRequest} returns this
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.setMonth = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.GetPayoutBatchSummaryRequest} returns this
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.clearMonth = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.GetPayoutBatchSummaryRequest.prototype.hasMonth = function() {
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
proto.pb.PayoutMethodSummary.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.PayoutMethodSummary.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.PayoutMethodSummary} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PayoutMethodSummary.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutMethod: jspb.Message.getFieldWithDefault(msg, 1, ""),
count: jspb.Message.getFieldWithDefault(msg, 2, 0),
totalAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
currency: jspb.Message.getFieldWithDefault(msg, 4, ""),
totalNetAmount: jspb.Message.getFieldWithDefault(msg, 5, 0),
totalFeeAmount: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.pb.PayoutMethodSummary}
 */
proto.pb.PayoutMethodSummary.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.PayoutMethodSummary;
  return proto.pb.PayoutMethodSummary.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.PayoutMethodSummary} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.PayoutMethodSummary}
 */
proto.pb.PayoutMethodSummary.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPayoutMethod(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalAmount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCurrency(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalNetAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalFeeAmount(value);
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
proto.pb.PayoutMethodSummary.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.PayoutMethodSummary.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.PayoutMethodSummary} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.PayoutMethodSummary.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutMethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTotalNetAmount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTotalFeeAmount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional string payout_method = 1;
 * @return {string}
 */
proto.pb.PayoutMethodSummary.prototype.getPayoutMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutMethodSummary} returns this
 */
proto.pb.PayoutMethodSummary.prototype.setPayoutMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 count = 2;
 * @return {number}
 */
proto.pb.PayoutMethodSummary.prototype.getCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutMethodSummary} returns this
 */
proto.pb.PayoutMethodSummary.prototype.setCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total_amount = 3;
 * @return {number}
 */
proto.pb.PayoutMethodSummary.prototype.getTotalAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutMethodSummary} returns this
 */
proto.pb.PayoutMethodSummary.prototype.setTotalAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string currency = 4;
 * @return {string}
 */
proto.pb.PayoutMethodSummary.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.PayoutMethodSummary} returns this
 */
proto.pb.PayoutMethodSummary.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 total_net_amount = 5;
 * @return {number}
 */
proto.pb.PayoutMethodSummary.prototype.getTotalNetAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutMethodSummary} returns this
 */
proto.pb.PayoutMethodSummary.prototype.setTotalNetAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 total_fee_amount = 6;
 * @return {number}
 */
proto.pb.PayoutMethodSummary.prototype.getTotalFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.PayoutMethodSummary} returns this
 */
proto.pb.PayoutMethodSummary.prototype.setTotalFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.GetPayoutBatchSummaryResponse.repeatedFields_ = [1];



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
proto.pb.GetPayoutBatchSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetPayoutBatchSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetPayoutBatchSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutBatchSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
summariesList: jspb.Message.toObjectList(msg.getSummariesList(),
    proto.pb.PayoutMethodSummary.toObject, includeInstance),
year: jspb.Message.getFieldWithDefault(msg, 2, 0),
month: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pb.GetPayoutBatchSummaryResponse}
 */
proto.pb.GetPayoutBatchSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetPayoutBatchSummaryResponse;
  return proto.pb.GetPayoutBatchSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetPayoutBatchSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetPayoutBatchSummaryResponse}
 */
proto.pb.GetPayoutBatchSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.PayoutMethodSummary;
      reader.readMessage(value,proto.pb.PayoutMethodSummary.deserializeBinaryFromReader);
      msg.addSummaries(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
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
proto.pb.GetPayoutBatchSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetPayoutBatchSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetPayoutBatchSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutBatchSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSummariesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.PayoutMethodSummary.serializeBinaryToWriter
    );
  }
  f = message.getYear();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getMonth();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * repeated PayoutMethodSummary summaries = 1;
 * @return {!Array<!proto.pb.PayoutMethodSummary>}
 */
proto.pb.GetPayoutBatchSummaryResponse.prototype.getSummariesList = function() {
  return /** @type{!Array<!proto.pb.PayoutMethodSummary>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.PayoutMethodSummary, 1));
};


/**
 * @param {!Array<!proto.pb.PayoutMethodSummary>} value
 * @return {!proto.pb.GetPayoutBatchSummaryResponse} returns this
*/
proto.pb.GetPayoutBatchSummaryResponse.prototype.setSummariesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.PayoutMethodSummary=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PayoutMethodSummary}
 */
proto.pb.GetPayoutBatchSummaryResponse.prototype.addSummaries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.PayoutMethodSummary, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.GetPayoutBatchSummaryResponse} returns this
 */
proto.pb.GetPayoutBatchSummaryResponse.prototype.clearSummariesList = function() {
  return this.setSummariesList([]);
};


/**
 * optional int32 year = 2;
 * @return {number}
 */
proto.pb.GetPayoutBatchSummaryResponse.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutBatchSummaryResponse} returns this
 */
proto.pb.GetPayoutBatchSummaryResponse.prototype.setYear = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 month = 3;
 * @return {number}
 */
proto.pb.GetPayoutBatchSummaryResponse.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutBatchSummaryResponse} returns this
 */
proto.pb.GetPayoutBatchSummaryResponse.prototype.setMonth = function(value) {
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
proto.pb.ExecuteBatchPayoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ExecuteBatchPayoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ExecuteBatchPayoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExecuteBatchPayoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutMethod: jspb.Message.getFieldWithDefault(msg, 1, ""),
year: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
month: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f
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
 * @return {!proto.pb.ExecuteBatchPayoutRequest}
 */
proto.pb.ExecuteBatchPayoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ExecuteBatchPayoutRequest;
  return proto.pb.ExecuteBatchPayoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ExecuteBatchPayoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ExecuteBatchPayoutRequest}
 */
proto.pb.ExecuteBatchPayoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPayoutMethod(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setYear(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setMonth(value);
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
proto.pb.ExecuteBatchPayoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ExecuteBatchPayoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ExecuteBatchPayoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExecuteBatchPayoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutMethod();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional string payout_method = 1;
 * @return {string}
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.getPayoutMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ExecuteBatchPayoutRequest} returns this
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.setPayoutMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 year = 2;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.getYear = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutRequest} returns this
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.setYear = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ExecuteBatchPayoutRequest} returns this
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.clearYear = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.hasYear = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 month = 3;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.getMonth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutRequest} returns this
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.setMonth = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.ExecuteBatchPayoutRequest} returns this
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.clearMonth = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.ExecuteBatchPayoutRequest.prototype.hasMonth = function() {
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
proto.pb.FailedPayoutDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.FailedPayoutDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.FailedPayoutDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.FailedPayoutDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutId: jspb.Message.getFieldWithDefault(msg, 1, 0),
userId: jspb.Message.getFieldWithDefault(msg, 2, 0),
errorMessage: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.pb.FailedPayoutDetail}
 */
proto.pb.FailedPayoutDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.FailedPayoutDetail;
  return proto.pb.FailedPayoutDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.FailedPayoutDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.FailedPayoutDetail}
 */
proto.pb.FailedPayoutDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPayoutId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setErrorMessage(value);
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
proto.pb.FailedPayoutDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.FailedPayoutDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.FailedPayoutDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.FailedPayoutDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutId();
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
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 payout_id = 1;
 * @return {number}
 */
proto.pb.FailedPayoutDetail.prototype.getPayoutId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.FailedPayoutDetail} returns this
 */
proto.pb.FailedPayoutDetail.prototype.setPayoutId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 user_id = 2;
 * @return {number}
 */
proto.pb.FailedPayoutDetail.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.FailedPayoutDetail} returns this
 */
proto.pb.FailedPayoutDetail.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string error_message = 3;
 * @return {string}
 */
proto.pb.FailedPayoutDetail.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.FailedPayoutDetail} returns this
 */
proto.pb.FailedPayoutDetail.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.ExecuteBatchPayoutResponse.repeatedFields_ = [4];



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
proto.pb.ExecuteBatchPayoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.ExecuteBatchPayoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.ExecuteBatchPayoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExecuteBatchPayoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
successCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
failedCount: jspb.Message.getFieldWithDefault(msg, 2, 0),
totalAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
failedDetailsList: jspb.Message.toObjectList(msg.getFailedDetailsList(),
    proto.pb.FailedPayoutDetail.toObject, includeInstance),
totalNetAmount: jspb.Message.getFieldWithDefault(msg, 5, 0),
totalFeeAmount: jspb.Message.getFieldWithDefault(msg, 6, 0),
externalPendingCount: jspb.Message.getFieldWithDefault(msg, 7, 0),
batchId: jspb.Message.getFieldWithDefault(msg, 8, 0),
batchStatus: jspb.Message.getFieldWithDefault(msg, 9, ""),
processingCount: jspb.Message.getFieldWithDefault(msg, 10, 0)
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
 * @return {!proto.pb.ExecuteBatchPayoutResponse}
 */
proto.pb.ExecuteBatchPayoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.ExecuteBatchPayoutResponse;
  return proto.pb.ExecuteBatchPayoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.ExecuteBatchPayoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.ExecuteBatchPayoutResponse}
 */
proto.pb.ExecuteBatchPayoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSuccessCount(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFailedCount(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalAmount(value);
      break;
    case 4:
      var value = new proto.pb.FailedPayoutDetail;
      reader.readMessage(value,proto.pb.FailedPayoutDetail.deserializeBinaryFromReader);
      msg.addFailedDetails(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalNetAmount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalFeeAmount(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setExternalPendingCount(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBatchId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setBatchStatus(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setProcessingCount(value);
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
proto.pb.ExecuteBatchPayoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.ExecuteBatchPayoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.ExecuteBatchPayoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.ExecuteBatchPayoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccessCount();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getFailedCount();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTotalAmount();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getFailedDetailsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pb.FailedPayoutDetail.serializeBinaryToWriter
    );
  }
  f = message.getTotalNetAmount();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTotalFeeAmount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getExternalPendingCount();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getBatchId();
  if (f !== 0) {
    writer.writeInt64(
      8,
      f
    );
  }
  f = message.getBatchStatus();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProcessingCount();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
};


/**
 * optional int32 success_count = 1;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getSuccessCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setSuccessCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 failed_count = 2;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getFailedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setFailedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total_amount = 3;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getTotalAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setTotalAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated FailedPayoutDetail failed_details = 4;
 * @return {!Array<!proto.pb.FailedPayoutDetail>}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getFailedDetailsList = function() {
  return /** @type{!Array<!proto.pb.FailedPayoutDetail>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.FailedPayoutDetail, 4));
};


/**
 * @param {!Array<!proto.pb.FailedPayoutDetail>} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
*/
proto.pb.ExecuteBatchPayoutResponse.prototype.setFailedDetailsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pb.FailedPayoutDetail=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.FailedPayoutDetail}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.addFailedDetails = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pb.FailedPayoutDetail, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.clearFailedDetailsList = function() {
  return this.setFailedDetailsList([]);
};


/**
 * optional int64 total_net_amount = 5;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getTotalNetAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setTotalNetAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 total_fee_amount = 6;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getTotalFeeAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setTotalFeeAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 external_pending_count = 7;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getExternalPendingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setExternalPendingCount = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int64 batch_id = 8;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getBatchId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setBatchId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string batch_status = 9;
 * @return {string}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getBatchStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setBatchStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 processing_count = 10;
 * @return {number}
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.getProcessingCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.ExecuteBatchPayoutResponse} returns this
 */
proto.pb.ExecuteBatchPayoutResponse.prototype.setProcessingCount = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
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
proto.pb.GetPayoutAccountSummaryResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.GetPayoutAccountSummaryResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.GetPayoutAccountSummaryResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutAccountSummaryResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
availableAmountInCents: jspb.Message.getFieldWithDefault(msg, 1, 0),
frozenAmountInCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
nonWithdrawableTokenBalance: jspb.Message.getFieldWithDefault(msg, 3, 0),
currency: jspb.Message.getFieldWithDefault(msg, 4, ""),
minimumPayoutInCents: jspb.Message.getFieldWithDefault(msg, 5, 0),
requestWindowOpen: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
payoutMethod: jspb.Message.getFieldWithDefault(msg, 7, ""),
accountStatus: jspb.Message.getFieldWithDefault(msg, 8, ""),
totalTokenBalanceInCents: jspb.Message.getFieldWithDefault(msg, 11, 0),
frozenTokenRiskInCents: jspb.Message.getFieldWithDefault(msg, 12, 0),
availableTokenBalanceInCents: jspb.Message.getFieldWithDefault(msg, 13, 0)
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
 * @return {!proto.pb.GetPayoutAccountSummaryResponse}
 */
proto.pb.GetPayoutAccountSummaryResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.GetPayoutAccountSummaryResponse;
  return proto.pb.GetPayoutAccountSummaryResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.GetPayoutAccountSummaryResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.GetPayoutAccountSummaryResponse}
 */
proto.pb.GetPayoutAccountSummaryResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvailableAmountInCents(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenAmountInCents(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNonWithdrawableTokenBalance(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCurrency(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMinimumPayoutInCents(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setRequestWindowOpen(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPayoutMethod(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAccountStatus(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalTokenBalanceInCents(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setFrozenTokenRiskInCents(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAvailableTokenBalanceInCents(value);
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
proto.pb.GetPayoutAccountSummaryResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.GetPayoutAccountSummaryResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.GetPayoutAccountSummaryResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.GetPayoutAccountSummaryResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAvailableAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFrozenAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNonWithdrawableTokenBalance();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCurrency();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getMinimumPayoutInCents();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getRequestWindowOpen();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getPayoutMethod();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getAccountStatus();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTotalTokenBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getFrozenTokenRiskInCents();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getAvailableTokenBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
};


/**
 * optional int64 available_amount_in_cents = 1;
 * @return {number}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getAvailableAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setAvailableAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 frozen_amount_in_cents = 2;
 * @return {number}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getFrozenAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setFrozenAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 non_withdrawable_token_balance = 3;
 * @return {number}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getNonWithdrawableTokenBalance = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setNonWithdrawableTokenBalance = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string currency = 4;
 * @return {string}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getCurrency = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setCurrency = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 minimum_payout_in_cents = 5;
 * @return {number}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getMinimumPayoutInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setMinimumPayoutInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional bool request_window_open = 6;
 * @return {boolean}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getRequestWindowOpen = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setRequestWindowOpen = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional string payout_method = 7;
 * @return {string}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getPayoutMethod = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setPayoutMethod = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string account_status = 8;
 * @return {string}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getAccountStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setAccountStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int64 total_token_balance_in_cents = 11;
 * @return {number}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getTotalTokenBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setTotalTokenBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 frozen_token_risk_in_cents = 12;
 * @return {number}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getFrozenTokenRiskInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setFrozenTokenRiskInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 available_token_balance_in_cents = 13;
 * @return {number}
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.getAvailableTokenBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.GetPayoutAccountSummaryResponse} returns this
 */
proto.pb.GetPayoutAccountSummaryResponse.prototype.setAvailableTokenBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.repeatedFields_ = [50];



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
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AcceptInstructorPayoutAgreementRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AcceptInstructorPayoutAgreementRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
policyConsentsList: jspb.Message.toObjectList(msg.getPolicyConsentsList(),
    rpc_policy_pb.PolicyConsent.toObject, includeInstance),
agreementVersion: jspb.Message.getFieldWithDefault(msg, 1, ""),
isUsTaxResident: jspb.Message.getBooleanFieldWithDefault(msg, 2, false),
isCaTaxResident: jspb.Message.getBooleanFieldWithDefault(msg, 3, false)
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
 * @return {!proto.pb.AcceptInstructorPayoutAgreementRequest}
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AcceptInstructorPayoutAgreementRequest;
  return proto.pb.AcceptInstructorPayoutAgreementRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AcceptInstructorPayoutAgreementRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AcceptInstructorPayoutAgreementRequest}
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 50:
      var value = new rpc_policy_pb.PolicyConsent;
      reader.readMessage(value,rpc_policy_pb.PolicyConsent.deserializeBinaryFromReader);
      msg.addPolicyConsents(value);
      break;
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAgreementVersion(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsUsTaxResident(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsCaTaxResident(value);
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
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AcceptInstructorPayoutAgreementRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AcceptInstructorPayoutAgreementRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPolicyConsentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      50,
      f,
      rpc_policy_pb.PolicyConsent.serializeBinaryToWriter
    );
  }
  f = message.getAgreementVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIsUsTaxResident();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getIsCaTaxResident();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * repeated PolicyConsent policy_consents = 50;
 * @return {!Array<!proto.pb.PolicyConsent>}
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.getPolicyConsentsList = function() {
  return /** @type{!Array<!proto.pb.PolicyConsent>} */ (
    jspb.Message.getRepeatedWrapperField(this, rpc_policy_pb.PolicyConsent, 50));
};


/**
 * @param {!Array<!proto.pb.PolicyConsent>} value
 * @return {!proto.pb.AcceptInstructorPayoutAgreementRequest} returns this
*/
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.setPolicyConsentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 50, value);
};


/**
 * @param {!proto.pb.PolicyConsent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.PolicyConsent}
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.addPolicyConsents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 50, opt_value, proto.pb.PolicyConsent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.AcceptInstructorPayoutAgreementRequest} returns this
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.clearPolicyConsentsList = function() {
  return this.setPolicyConsentsList([]);
};


/**
 * optional string agreement_version = 1;
 * @return {string}
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.getAgreementVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AcceptInstructorPayoutAgreementRequest} returns this
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.setAgreementVersion = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool is_us_tax_resident = 2;
 * @return {boolean}
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.getIsUsTaxResident = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AcceptInstructorPayoutAgreementRequest} returns this
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.setIsUsTaxResident = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * optional bool is_ca_tax_resident = 3;
 * @return {boolean}
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.getIsCaTaxResident = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AcceptInstructorPayoutAgreementRequest} returns this
 */
proto.pb.AcceptInstructorPayoutAgreementRequest.prototype.setIsCaTaxResident = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
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
proto.pb.VerifyStripeOrderRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.VerifyStripeOrderRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.VerifyStripeOrderRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyStripeOrderRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
sessionId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.VerifyStripeOrderRequest}
 */
proto.pb.VerifyStripeOrderRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.VerifyStripeOrderRequest;
  return proto.pb.VerifyStripeOrderRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.VerifyStripeOrderRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.VerifyStripeOrderRequest}
 */
proto.pb.VerifyStripeOrderRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSessionId(value);
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
proto.pb.VerifyStripeOrderRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.VerifyStripeOrderRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.VerifyStripeOrderRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyStripeOrderRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSessionId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string session_id = 1;
 * @return {string}
 */
proto.pb.VerifyStripeOrderRequest.prototype.getSessionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyStripeOrderRequest} returns this
 */
proto.pb.VerifyStripeOrderRequest.prototype.setSessionId = function(value) {
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
proto.pb.VerifyStripeOrderResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.VerifyStripeOrderResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.VerifyStripeOrderResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyStripeOrderResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
purchasedTokenAmountInCents: jspb.Message.getFieldWithDefault(msg, 3, 0)
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
 * @return {!proto.pb.VerifyStripeOrderResponse}
 */
proto.pb.VerifyStripeOrderResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.VerifyStripeOrderResponse;
  return proto.pb.VerifyStripeOrderResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.VerifyStripeOrderResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.VerifyStripeOrderResponse}
 */
proto.pb.VerifyStripeOrderResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchasedTokenAmountInCents(value);
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
proto.pb.VerifyStripeOrderResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.VerifyStripeOrderResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.VerifyStripeOrderResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.VerifyStripeOrderResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPurchasedTokenAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.VerifyStripeOrderResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.VerifyStripeOrderResponse} returns this
 */
proto.pb.VerifyStripeOrderResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.VerifyStripeOrderResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.VerifyStripeOrderResponse} returns this
 */
proto.pb.VerifyStripeOrderResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 purchased_token_amount_in_cents = 3;
 * @return {number}
 */
proto.pb.VerifyStripeOrderResponse.prototype.getPurchasedTokenAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.VerifyStripeOrderResponse} returns this
 */
proto.pb.VerifyStripeOrderResponse.prototype.setPurchasedTokenAmountInCents = function(value) {
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
proto.pb.HandleAppleNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.HandleAppleNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.HandleAppleNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleAppleNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
signedPayload: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.HandleAppleNotificationRequest}
 */
proto.pb.HandleAppleNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.HandleAppleNotificationRequest;
  return proto.pb.HandleAppleNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.HandleAppleNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.HandleAppleNotificationRequest}
 */
proto.pb.HandleAppleNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setSignedPayload(value);
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
proto.pb.HandleAppleNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.HandleAppleNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.HandleAppleNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleAppleNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignedPayload();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string signed_payload = 1;
 * @return {string}
 */
proto.pb.HandleAppleNotificationRequest.prototype.getSignedPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.HandleAppleNotificationRequest} returns this
 */
proto.pb.HandleAppleNotificationRequest.prototype.setSignedPayload = function(value) {
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
proto.pb.HandleAppleNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.HandleAppleNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.HandleAppleNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleAppleNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.pb.HandleAppleNotificationResponse}
 */
proto.pb.HandleAppleNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.HandleAppleNotificationResponse;
  return proto.pb.HandleAppleNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.HandleAppleNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.HandleAppleNotificationResponse}
 */
proto.pb.HandleAppleNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
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
proto.pb.HandleAppleNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.HandleAppleNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.HandleAppleNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleAppleNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.HandleAppleNotificationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.HandleAppleNotificationResponse} returns this
 */
proto.pb.HandleAppleNotificationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.HandleAppleNotificationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.HandleAppleNotificationResponse} returns this
 */
proto.pb.HandleAppleNotificationResponse.prototype.setMessage = function(value) {
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
proto.pb.HandleGoogleNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.HandleGoogleNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.HandleGoogleNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleGoogleNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
messageData: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.HandleGoogleNotificationRequest}
 */
proto.pb.HandleGoogleNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.HandleGoogleNotificationRequest;
  return proto.pb.HandleGoogleNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.HandleGoogleNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.HandleGoogleNotificationRequest}
 */
proto.pb.HandleGoogleNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessageData(value);
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
proto.pb.HandleGoogleNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.HandleGoogleNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.HandleGoogleNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleGoogleNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageData();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message_data = 1;
 * @return {string}
 */
proto.pb.HandleGoogleNotificationRequest.prototype.getMessageData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.HandleGoogleNotificationRequest} returns this
 */
proto.pb.HandleGoogleNotificationRequest.prototype.setMessageData = function(value) {
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
proto.pb.HandleGoogleNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.HandleGoogleNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.HandleGoogleNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleGoogleNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, "")
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
 * @return {!proto.pb.HandleGoogleNotificationResponse}
 */
proto.pb.HandleGoogleNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.HandleGoogleNotificationResponse;
  return proto.pb.HandleGoogleNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.HandleGoogleNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.HandleGoogleNotificationResponse}
 */
proto.pb.HandleGoogleNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
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
proto.pb.HandleGoogleNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.HandleGoogleNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.HandleGoogleNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.HandleGoogleNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.HandleGoogleNotificationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.HandleGoogleNotificationResponse} returns this
 */
proto.pb.HandleGoogleNotificationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.HandleGoogleNotificationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.HandleGoogleNotificationResponse} returns this
 */
proto.pb.HandleGoogleNotificationResponse.prototype.setMessage = function(value) {
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
proto.pb.AdminTokenPurchaseItem.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminTokenPurchaseItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminTokenPurchaseItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminTokenPurchaseItem.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, 0),
orderId: jspb.Message.getFieldWithDefault(msg, 2, ""),
userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
userEmail: jspb.Message.getFieldWithDefault(msg, 4, ""),
productId: jspb.Message.getFieldWithDefault(msg, 5, ""),
purchasedTokenAmountInCents: jspb.Message.getFieldWithDefault(msg, 6, 0),
purchasedPriceInCents: jspb.Message.getFieldWithDefault(msg, 7, 0),
paymentType: jspb.Message.getFieldWithDefault(msg, 8, 0),
status: jspb.Message.getFieldWithDefault(msg, 9, 0),
platformTransactionId: jspb.Message.getFieldWithDefault(msg, 10, ""),
actualPaidPriceInCents: jspb.Message.getFieldWithDefault(msg, 11, 0),
platformFeeInCents: jspb.Message.getFieldWithDefault(msg, 12, 0),
actualPayment: jspb.Message.getFieldWithDefault(msg, 13, ""),
actualPaymentCurrencyCode: jspb.Message.getFieldWithDefault(msg, 14, ""),
createdAt: jspb.Message.getFieldWithDefault(msg, 15, ""),
updatedAt: jspb.Message.getFieldWithDefault(msg, 16, "")
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
 * @return {!proto.pb.AdminTokenPurchaseItem}
 */
proto.pb.AdminTokenPurchaseItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminTokenPurchaseItem;
  return proto.pb.AdminTokenPurchaseItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminTokenPurchaseItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminTokenPurchaseItem}
 */
proto.pb.AdminTokenPurchaseItem.deserializeBinaryFromReader = function(msg, reader) {
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
      msg.setOrderId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setUserEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProductId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchasedTokenAmountInCents(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPurchasedPriceInCents(value);
      break;
    case 8:
      var value = /** @type {!proto.pb.PaymentType} */ (reader.readEnum());
      msg.setPaymentType(value);
      break;
    case 9:
      var value = /** @type {!proto.pb.PurchaseStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPlatformTransactionId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setActualPaidPriceInCents(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPlatformFeeInCents(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setActualPayment(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setActualPaymentCurrencyCode(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCreatedAt(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
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
proto.pb.AdminTokenPurchaseItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminTokenPurchaseItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminTokenPurchaseItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminTokenPurchaseItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOrderId();
  if (f.length > 0) {
    writer.writeString(
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
  f = message.getUserEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProductId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPurchasedTokenAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getPurchasedPriceInCents();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getPaymentType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getPlatformTransactionId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getActualPaidPriceInCents();
  if (f !== 0) {
    writer.writeInt64(
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
  f = message.getActualPayment();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getActualPaymentCurrencyCode();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getUpdatedAt();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string order_id = 2;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 user_id = 3;
 * @return {number}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string user_email = 4;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getUserEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setUserEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string product_id = 5;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getProductId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setProductId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int64 purchased_token_amount_in_cents = 6;
 * @return {number}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getPurchasedTokenAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setPurchasedTokenAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int64 purchased_price_in_cents = 7;
 * @return {number}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getPurchasedPriceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setPurchasedPriceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional PaymentType payment_type = 8;
 * @return {!proto.pb.PaymentType}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getPaymentType = function() {
  return /** @type {!proto.pb.PaymentType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.pb.PaymentType} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setPaymentType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional PurchaseStatus status = 9;
 * @return {!proto.pb.PurchaseStatus}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getStatus = function() {
  return /** @type {!proto.pb.PurchaseStatus} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.pb.PurchaseStatus} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional string platform_transaction_id = 10;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getPlatformTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setPlatformTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 actual_paid_price_in_cents = 11;
 * @return {number}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getActualPaidPriceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setActualPaidPriceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 platform_fee_in_cents = 12;
 * @return {number}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getPlatformFeeInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setPlatformFeeInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional string actual_payment = 13;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getActualPayment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setActualPayment = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string actual_payment_currency_code = 14;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getActualPaymentCurrencyCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setActualPaymentCurrencyCode = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional string created_at = 15;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string updated_at = 16;
 * @return {string}
 */
proto.pb.AdminTokenPurchaseItem.prototype.getUpdatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTokenPurchaseItem} returns this
 */
proto.pb.AdminTokenPurchaseItem.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
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
proto.pb.AdminListTokenPurchasesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminListTokenPurchasesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminListTokenPurchasesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListTokenPurchasesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageId: jspb.Message.getFieldWithDefault(msg, 2, 0),
userId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
status: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
paymentType: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
orderId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
platformTransactionId: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f
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
 * @return {!proto.pb.AdminListTokenPurchasesRequest}
 */
proto.pb.AdminListTokenPurchasesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminListTokenPurchasesRequest;
  return proto.pb.AdminListTokenPurchasesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminListTokenPurchasesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminListTokenPurchasesRequest}
 */
proto.pb.AdminListTokenPurchasesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setStatus(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPaymentType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOrderId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPlatformTransactionId(value);
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
proto.pb.AdminListTokenPurchasesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminListTokenPurchasesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminListTokenPurchasesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListTokenPurchasesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageId();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_id = 2;
 * @return {number}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 user_id = 3;
 * @return {number}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.clearUserId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.hasUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string status = 4;
 * @return {string}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string payment_type = 5;
 * @return {string}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.getPaymentType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.setPaymentType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.clearPaymentType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.hasPaymentType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string order_id = 6;
 * @return {string}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.getOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.setOrderId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.clearOrderId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.hasOrderId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string platform_transaction_id = 7;
 * @return {string}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.getPlatformTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.setPlatformTransactionId = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListTokenPurchasesRequest} returns this
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.clearPlatformTransactionId = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListTokenPurchasesRequest.prototype.hasPlatformTransactionId = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.AdminListTokenPurchasesResponse.repeatedFields_ = [1];



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
proto.pb.AdminListTokenPurchasesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminListTokenPurchasesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminListTokenPurchasesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListTokenPurchasesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
purchasesList: jspb.Message.toObjectList(msg.getPurchasesList(),
    proto.pb.AdminTokenPurchaseItem.toObject, includeInstance),
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
 * @return {!proto.pb.AdminListTokenPurchasesResponse}
 */
proto.pb.AdminListTokenPurchasesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminListTokenPurchasesResponse;
  return proto.pb.AdminListTokenPurchasesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminListTokenPurchasesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminListTokenPurchasesResponse}
 */
proto.pb.AdminListTokenPurchasesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.AdminTokenPurchaseItem;
      reader.readMessage(value,proto.pb.AdminTokenPurchaseItem.deserializeBinaryFromReader);
      msg.addPurchases(value);
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
proto.pb.AdminListTokenPurchasesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminListTokenPurchasesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminListTokenPurchasesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListTokenPurchasesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPurchasesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.AdminTokenPurchaseItem.serializeBinaryToWriter
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
 * repeated AdminTokenPurchaseItem purchases = 1;
 * @return {!Array<!proto.pb.AdminTokenPurchaseItem>}
 */
proto.pb.AdminListTokenPurchasesResponse.prototype.getPurchasesList = function() {
  return /** @type{!Array<!proto.pb.AdminTokenPurchaseItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.AdminTokenPurchaseItem, 1));
};


/**
 * @param {!Array<!proto.pb.AdminTokenPurchaseItem>} value
 * @return {!proto.pb.AdminListTokenPurchasesResponse} returns this
*/
proto.pb.AdminListTokenPurchasesResponse.prototype.setPurchasesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AdminTokenPurchaseItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AdminTokenPurchaseItem}
 */
proto.pb.AdminListTokenPurchasesResponse.prototype.addPurchases = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AdminTokenPurchaseItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.AdminListTokenPurchasesResponse} returns this
 */
proto.pb.AdminListTokenPurchasesResponse.prototype.clearPurchasesList = function() {
  return this.setPurchasesList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.AdminListTokenPurchasesResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListTokenPurchasesResponse} returns this
 */
proto.pb.AdminListTokenPurchasesResponse.prototype.setTotalCount = function(value) {
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
proto.pb.AdminIAPNotificationItem.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminIAPNotificationItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminIAPNotificationItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminIAPNotificationItem.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
platform: jspb.Message.getFieldWithDefault(msg, 2, ""),
notificationType: jspb.Message.getFieldWithDefault(msg, 3, ""),
transactionId: jspb.Message.getFieldWithDefault(msg, 4, ""),
processedStatus: jspb.Message.getFieldWithDefault(msg, 5, ""),
errorMessage: jspb.Message.getFieldWithDefault(msg, 6, ""),
originalPayload: jspb.Message.getFieldWithDefault(msg, 7, ""),
createdAt: jspb.Message.getFieldWithDefault(msg, 8, "")
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
 * @return {!proto.pb.AdminIAPNotificationItem}
 */
proto.pb.AdminIAPNotificationItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminIAPNotificationItem;
  return proto.pb.AdminIAPNotificationItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminIAPNotificationItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminIAPNotificationItem}
 */
proto.pb.AdminIAPNotificationItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPlatform(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNotificationType(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransactionId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProcessedStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setErrorMessage(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOriginalPayload(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
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
proto.pb.AdminIAPNotificationItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminIAPNotificationItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminIAPNotificationItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminIAPNotificationItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPlatform();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getNotificationType();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getProcessedStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getErrorMessage();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOriginalPayload();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string platform = 2;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setPlatform = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string notification_type = 3;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getNotificationType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setNotificationType = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string transaction_id = 4;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string processed_status = 5;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getProcessedStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setProcessedStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string error_message = 6;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getErrorMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setErrorMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string original_payload = 7;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getOriginalPayload = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setOriginalPayload = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string created_at = 8;
 * @return {string}
 */
proto.pb.AdminIAPNotificationItem.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminIAPNotificationItem} returns this
 */
proto.pb.AdminIAPNotificationItem.prototype.setCreatedAt = function(value) {
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
proto.pb.AdminListIAPNotificationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminListIAPNotificationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminListIAPNotificationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListIAPNotificationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageId: jspb.Message.getFieldWithDefault(msg, 2, 0),
platform: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
processedStatus: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pb.AdminListIAPNotificationsRequest}
 */
proto.pb.AdminListIAPNotificationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminListIAPNotificationsRequest;
  return proto.pb.AdminListIAPNotificationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminListIAPNotificationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminListIAPNotificationsRequest}
 */
proto.pb.AdminListIAPNotificationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setPlatform(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProcessedStatus(value);
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
proto.pb.AdminListIAPNotificationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminListIAPNotificationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminListIAPNotificationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListIAPNotificationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageId();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListIAPNotificationsRequest} returns this
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_id = 2;
 * @return {number}
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListIAPNotificationsRequest} returns this
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string platform = 3;
 * @return {string}
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.getPlatform = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminListIAPNotificationsRequest} returns this
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.setPlatform = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListIAPNotificationsRequest} returns this
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.clearPlatform = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.hasPlatform = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string processed_status = 4;
 * @return {string}
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.getProcessedStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminListIAPNotificationsRequest} returns this
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.setProcessedStatus = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListIAPNotificationsRequest} returns this
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.clearProcessedStatus = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListIAPNotificationsRequest.prototype.hasProcessedStatus = function() {
  return jspb.Message.getField(this, 4) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.AdminListIAPNotificationsResponse.repeatedFields_ = [1];



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
proto.pb.AdminListIAPNotificationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminListIAPNotificationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminListIAPNotificationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListIAPNotificationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
notificationsList: jspb.Message.toObjectList(msg.getNotificationsList(),
    proto.pb.AdminIAPNotificationItem.toObject, includeInstance),
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
 * @return {!proto.pb.AdminListIAPNotificationsResponse}
 */
proto.pb.AdminListIAPNotificationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminListIAPNotificationsResponse;
  return proto.pb.AdminListIAPNotificationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminListIAPNotificationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminListIAPNotificationsResponse}
 */
proto.pb.AdminListIAPNotificationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.AdminIAPNotificationItem;
      reader.readMessage(value,proto.pb.AdminIAPNotificationItem.deserializeBinaryFromReader);
      msg.addNotifications(value);
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
proto.pb.AdminListIAPNotificationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminListIAPNotificationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminListIAPNotificationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListIAPNotificationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotificationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.AdminIAPNotificationItem.serializeBinaryToWriter
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
 * repeated AdminIAPNotificationItem notifications = 1;
 * @return {!Array<!proto.pb.AdminIAPNotificationItem>}
 */
proto.pb.AdminListIAPNotificationsResponse.prototype.getNotificationsList = function() {
  return /** @type{!Array<!proto.pb.AdminIAPNotificationItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.AdminIAPNotificationItem, 1));
};


/**
 * @param {!Array<!proto.pb.AdminIAPNotificationItem>} value
 * @return {!proto.pb.AdminListIAPNotificationsResponse} returns this
*/
proto.pb.AdminListIAPNotificationsResponse.prototype.setNotificationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AdminIAPNotificationItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AdminIAPNotificationItem}
 */
proto.pb.AdminListIAPNotificationsResponse.prototype.addNotifications = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AdminIAPNotificationItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.AdminListIAPNotificationsResponse} returns this
 */
proto.pb.AdminListIAPNotificationsResponse.prototype.clearNotificationsList = function() {
  return this.setNotificationsList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.AdminListIAPNotificationsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListIAPNotificationsResponse} returns this
 */
proto.pb.AdminListIAPNotificationsResponse.prototype.setTotalCount = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.AdminAdjustUserBalanceRequest.repeatedFields_ = [11];



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
proto.pb.AdminAdjustUserBalanceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminAdjustUserBalanceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminAdjustUserBalanceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminAdjustUserBalanceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
tokenAmountInCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
relatedOrderId: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
idempotencyKey: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
category: jspb.Message.getFieldWithDefault(msg, 6, 0),
relatedEntityType: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
relatedEntityId: (f = jspb.Message.getField(msg, 8)) == null ? undefined : f,
customerNote: (f = jspb.Message.getField(msg, 9)) == null ? undefined : f,
adminPassword: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
evidenceUrlsList: (f = jspb.Message.getRepeatedField(msg, 11)) == null ? undefined : f
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
 * @return {!proto.pb.AdminAdjustUserBalanceRequest}
 */
proto.pb.AdminAdjustUserBalanceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminAdjustUserBalanceRequest;
  return proto.pb.AdminAdjustUserBalanceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminAdjustUserBalanceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest}
 */
proto.pb.AdminAdjustUserBalanceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTokenAmountInCents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRelatedOrderId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIdempotencyKey(value);
      break;
    case 6:
      var value = /** @type {!proto.pb.AdjustmentCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRelatedEntityType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRelatedEntityId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCustomerNote(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdminPassword(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addEvidenceUrls(value);
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
proto.pb.AdminAdjustUserBalanceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminAdjustUserBalanceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminAdjustUserBalanceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminAdjustUserBalanceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTokenAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getReason();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getEvidenceUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 token_amount_in_cents = 2;
 * @return {number}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getTokenAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setTokenAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string related_order_id = 4;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getRelatedOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setRelatedOrderId = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.clearRelatedOrderId = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.hasRelatedOrderId = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string idempotency_key = 5;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.clearIdempotencyKey = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.hasIdempotencyKey = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional AdjustmentCategory category = 6;
 * @return {!proto.pb.AdjustmentCategory}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getCategory = function() {
  return /** @type {!proto.pb.AdjustmentCategory} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.pb.AdjustmentCategory} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};


/**
 * optional string related_entity_type = 7;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getRelatedEntityType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setRelatedEntityType = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.clearRelatedEntityType = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.hasRelatedEntityType = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string related_entity_id = 8;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getRelatedEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setRelatedEntityId = function(value) {
  return jspb.Message.setField(this, 8, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.clearRelatedEntityId = function() {
  return jspb.Message.setField(this, 8, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.hasRelatedEntityId = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional string customer_note = 9;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getCustomerNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setCustomerNote = function(value) {
  return jspb.Message.setField(this, 9, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.clearCustomerNote = function() {
  return jspb.Message.setField(this, 9, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.hasCustomerNote = function() {
  return jspb.Message.getField(this, 9) != null;
};


/**
 * optional string admin_password = 10;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getAdminPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setAdminPassword = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.clearAdminPassword = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.hasAdminPassword = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * repeated string evidence_urls = 11;
 * @return {!Array<string>}
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.getEvidenceUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.setEvidenceUrlsList = function(value) {
  return jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.addEvidenceUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.AdminAdjustUserBalanceRequest} returns this
 */
proto.pb.AdminAdjustUserBalanceRequest.prototype.clearEvidenceUrlsList = function() {
  return this.setEvidenceUrlsList([]);
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
proto.pb.AdminAdjustUserBalanceResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminAdjustUserBalanceResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminAdjustUserBalanceResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminAdjustUserBalanceResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
newBalanceInCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
transactionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
message: jspb.Message.getFieldWithDefault(msg, 4, ""),
status: jspb.Message.getFieldWithDefault(msg, 5, 0),
adjustmentId: jspb.Message.getFieldWithDefault(msg, 6, "")
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
 * @return {!proto.pb.AdminAdjustUserBalanceResponse}
 */
proto.pb.AdminAdjustUserBalanceResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminAdjustUserBalanceResponse;
  return proto.pb.AdminAdjustUserBalanceResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminAdjustUserBalanceResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminAdjustUserBalanceResponse}
 */
proto.pb.AdminAdjustUserBalanceResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewBalanceInCents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransactionId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.AdjustmentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdjustmentId(value);
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
proto.pb.AdminAdjustUserBalanceResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminAdjustUserBalanceResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminAdjustUserBalanceResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminAdjustUserBalanceResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNewBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getAdjustmentId();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminAdjustUserBalanceResponse} returns this
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 new_balance_in_cents = 2;
 * @return {number}
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.getNewBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminAdjustUserBalanceResponse} returns this
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.setNewBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string transaction_id = 3;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceResponse} returns this
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceResponse} returns this
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional AdjustmentStatus status = 5;
 * @return {!proto.pb.AdjustmentStatus}
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.getStatus = function() {
  return /** @type {!proto.pb.AdjustmentStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.AdjustmentStatus} value
 * @return {!proto.pb.AdminAdjustUserBalanceResponse} returns this
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string adjustment_id = 6;
 * @return {string}
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.getAdjustmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminAdjustUserBalanceResponse} returns this
 */
proto.pb.AdminAdjustUserBalanceResponse.prototype.setAdjustmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.AdminBalanceAdjustmentItem.repeatedFields_ = [22];



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
proto.pb.AdminBalanceAdjustmentItem.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminBalanceAdjustmentItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminBalanceAdjustmentItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminBalanceAdjustmentItem.toObject = function(includeInstance, msg) {
  var f, obj = {
id: jspb.Message.getFieldWithDefault(msg, 1, ""),
idempotencyKey: jspb.Message.getFieldWithDefault(msg, 2, ""),
adminUserId: jspb.Message.getFieldWithDefault(msg, 3, 0),
adminEmail: jspb.Message.getFieldWithDefault(msg, 4, ""),
targetUserId: jspb.Message.getFieldWithDefault(msg, 5, 0),
targetUserEmail: jspb.Message.getFieldWithDefault(msg, 6, ""),
tokenAmountInCents: jspb.Message.getFieldWithDefault(msg, 7, 0),
reason: jspb.Message.getFieldWithDefault(msg, 8, ""),
relatedOrderId: jspb.Message.getFieldWithDefault(msg, 9, ""),
transactionId: jspb.Message.getFieldWithDefault(msg, 10, ""),
balanceAfterInCents: jspb.Message.getFieldWithDefault(msg, 11, 0),
createdAt: jspb.Message.getFieldWithDefault(msg, 12, ""),
completedAt: jspb.Message.getFieldWithDefault(msg, 13, ""),
category: jspb.Message.getFieldWithDefault(msg, 14, 0),
relatedEntityType: jspb.Message.getFieldWithDefault(msg, 15, ""),
relatedEntityId: jspb.Message.getFieldWithDefault(msg, 16, ""),
customerNote: jspb.Message.getFieldWithDefault(msg, 17, ""),
status: jspb.Message.getFieldWithDefault(msg, 18, 0),
approverAdminId: (f = jspb.Message.getField(msg, 19)) == null ? undefined : f,
approverEmail: (f = jspb.Message.getField(msg, 20)) == null ? undefined : f,
rejectionReason: (f = jspb.Message.getField(msg, 21)) == null ? undefined : f,
evidenceUrlsList: (f = jspb.Message.getRepeatedField(msg, 22)) == null ? undefined : f,
isReversed: jspb.Message.getBooleanFieldWithDefault(msg, 23, false),
reversedAt: jspb.Message.getFieldWithDefault(msg, 24, ""),
reversedByAdminId: (f = jspb.Message.getField(msg, 25)) == null ? undefined : f,
reversalAdjustmentId: jspb.Message.getFieldWithDefault(msg, 26, ""),
reversalOfAdjustmentId: jspb.Message.getFieldWithDefault(msg, 27, "")
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
 * @return {!proto.pb.AdminBalanceAdjustmentItem}
 */
proto.pb.AdminBalanceAdjustmentItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminBalanceAdjustmentItem;
  return proto.pb.AdminBalanceAdjustmentItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminBalanceAdjustmentItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminBalanceAdjustmentItem}
 */
proto.pb.AdminBalanceAdjustmentItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIdempotencyKey(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAdminUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdminEmail(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUserId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTargetUserEmail(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTokenAmountInCents(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRelatedOrderId(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransactionId(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setBalanceAfterInCents(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCreatedAt(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCompletedAt(value);
      break;
    case 14:
      var value = /** @type {!proto.pb.AdjustmentCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRelatedEntityType(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRelatedEntityId(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setCustomerNote(value);
      break;
    case 18:
      var value = /** @type {!proto.pb.AdjustmentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setApproverAdminId(value);
      break;
    case 20:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setApproverEmail(value);
      break;
    case 21:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setRejectionReason(value);
      break;
    case 22:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.addEvidenceUrls(value);
      break;
    case 23:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReversed(value);
      break;
    case 24:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReversedAt(value);
      break;
    case 25:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setReversedByAdminId(value);
      break;
    case 26:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReversalAdjustmentId(value);
      break;
    case 27:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReversalOfAdjustmentId(value);
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
proto.pb.AdminBalanceAdjustmentItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminBalanceAdjustmentItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminBalanceAdjustmentItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminBalanceAdjustmentItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getIdempotencyKey();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdminUserId();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getAdminEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTargetUserId();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getTargetUserEmail();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTokenAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      7,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getRelatedOrderId();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getBalanceAfterInCents();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getCreatedAt();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getCompletedAt();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getCategory();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getRelatedEntityType();
  if (f.length > 0) {
    writer.writeString(
      15,
      f
    );
  }
  f = message.getRelatedEntityId();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCustomerNote();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      18,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 19));
  if (f != null) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeString(
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
  f = message.getEvidenceUrlsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      22,
      f
    );
  }
  f = message.getIsReversed();
  if (f) {
    writer.writeBool(
      23,
      f
    );
  }
  f = message.getReversedAt();
  if (f.length > 0) {
    writer.writeString(
      24,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 25));
  if (f != null) {
    writer.writeInt64(
      25,
      f
    );
  }
  f = message.getReversalAdjustmentId();
  if (f.length > 0) {
    writer.writeString(
      26,
      f
    );
  }
  f = message.getReversalOfAdjustmentId();
  if (f.length > 0) {
    writer.writeString(
      27,
      f
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string idempotency_key = 2;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int64 admin_user_id = 3;
 * @return {number}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getAdminUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setAdminUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string admin_email = 4;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getAdminEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setAdminEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 target_user_id = 5;
 * @return {number}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getTargetUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setTargetUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string target_user_email = 6;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getTargetUserEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setTargetUserEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int64 token_amount_in_cents = 7;
 * @return {number}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getTokenAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setTokenAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string reason = 8;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string related_order_id = 9;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getRelatedOrderId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setRelatedOrderId = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string transaction_id = 10;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 balance_after_in_cents = 11;
 * @return {number}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getBalanceAfterInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setBalanceAfterInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string created_at = 12;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getCreatedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setCreatedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string completed_at = 13;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getCompletedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setCompletedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional AdjustmentCategory category = 14;
 * @return {!proto.pb.AdjustmentCategory}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getCategory = function() {
  return /** @type {!proto.pb.AdjustmentCategory} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.pb.AdjustmentCategory} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setCategory = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional string related_entity_type = 15;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getRelatedEntityType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setRelatedEntityType = function(value) {
  return jspb.Message.setProto3StringField(this, 15, value);
};


/**
 * optional string related_entity_id = 16;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getRelatedEntityId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setRelatedEntityId = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string customer_note = 17;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getCustomerNote = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setCustomerNote = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional AdjustmentStatus status = 18;
 * @return {!proto.pb.AdjustmentStatus}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getStatus = function() {
  return /** @type {!proto.pb.AdjustmentStatus} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {!proto.pb.AdjustmentStatus} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 18, value);
};


/**
 * optional int64 approver_admin_id = 19;
 * @return {number}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getApproverAdminId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setApproverAdminId = function(value) {
  return jspb.Message.setField(this, 19, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.clearApproverAdminId = function() {
  return jspb.Message.setField(this, 19, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.hasApproverAdminId = function() {
  return jspb.Message.getField(this, 19) != null;
};


/**
 * optional string approver_email = 20;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getApproverEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setApproverEmail = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.clearApproverEmail = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.hasApproverEmail = function() {
  return jspb.Message.getField(this, 20) != null;
};


/**
 * optional string rejection_reason = 21;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getRejectionReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 21, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setRejectionReason = function(value) {
  return jspb.Message.setField(this, 21, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.clearRejectionReason = function() {
  return jspb.Message.setField(this, 21, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.hasRejectionReason = function() {
  return jspb.Message.getField(this, 21) != null;
};


/**
 * repeated string evidence_urls = 22;
 * @return {!Array<string>}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getEvidenceUrlsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 22));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setEvidenceUrlsList = function(value) {
  return jspb.Message.setField(this, 22, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.addEvidenceUrls = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 22, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.clearEvidenceUrlsList = function() {
  return this.setEvidenceUrlsList([]);
};


/**
 * optional bool is_reversed = 23;
 * @return {boolean}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getIsReversed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 23, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setIsReversed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 23, value);
};


/**
 * optional string reversed_at = 24;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getReversedAt = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 24, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setReversedAt = function(value) {
  return jspb.Message.setProto3StringField(this, 24, value);
};


/**
 * optional int64 reversed_by_admin_id = 25;
 * @return {number}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getReversedByAdminId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 25, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setReversedByAdminId = function(value) {
  return jspb.Message.setField(this, 25, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.clearReversedByAdminId = function() {
  return jspb.Message.setField(this, 25, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.hasReversedByAdminId = function() {
  return jspb.Message.getField(this, 25) != null;
};


/**
 * optional string reversal_adjustment_id = 26;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getReversalAdjustmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 26, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setReversalAdjustmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 26, value);
};


/**
 * optional string reversal_of_adjustment_id = 27;
 * @return {string}
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.getReversalOfAdjustmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 27, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminBalanceAdjustmentItem} returns this
 */
proto.pb.AdminBalanceAdjustmentItem.prototype.setReversalOfAdjustmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 27, value);
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
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminListBalanceAdjustmentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminListBalanceAdjustmentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListBalanceAdjustmentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
pageSize: jspb.Message.getFieldWithDefault(msg, 1, 0),
pageId: jspb.Message.getFieldWithDefault(msg, 2, 0),
targetUserId: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
category: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
status: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
adminUserId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f
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
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminListBalanceAdjustmentsRequest;
  return proto.pb.AdminListBalanceAdjustmentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminListBalanceAdjustmentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageId(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUserId(value);
      break;
    case 4:
      var value = /** @type {!proto.pb.AdjustmentCategory} */ (reader.readEnum());
      msg.setCategory(value);
      break;
    case 5:
      var value = /** @type {!proto.pb.AdjustmentStatus} */ (reader.readEnum());
      msg.setStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAdminUserId(value);
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
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminListBalanceAdjustmentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminListBalanceAdjustmentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListBalanceAdjustmentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getPageId();
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
  f = /** @type {!proto.pb.AdjustmentCategory} */ (jspb.Message.getField(message, 4));
  if (f != null) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = /** @type {!proto.pb.AdjustmentStatus} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeEnum(
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
};


/**
 * optional int32 page_size = 1;
 * @return {number}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int32 page_id = 2;
 * @return {number}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.getPageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.setPageId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 target_user_id = 3;
 * @return {number}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.getTargetUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.setTargetUserId = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.clearTargetUserId = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.hasTargetUserId = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional AdjustmentCategory category = 4;
 * @return {!proto.pb.AdjustmentCategory}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.getCategory = function() {
  return /** @type {!proto.pb.AdjustmentCategory} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.pb.AdjustmentCategory} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.setCategory = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.clearCategory = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.hasCategory = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional AdjustmentStatus status = 5;
 * @return {!proto.pb.AdjustmentStatus}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.getStatus = function() {
  return /** @type {!proto.pb.AdjustmentStatus} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.pb.AdjustmentStatus} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.setStatus = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.clearStatus = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.hasStatus = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int64 admin_user_id = 6;
 * @return {number}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.getAdminUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.setAdminUserId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminListBalanceAdjustmentsRequest} returns this
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.clearAdminUserId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminListBalanceAdjustmentsRequest.prototype.hasAdminUserId = function() {
  return jspb.Message.getField(this, 6) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.AdminListBalanceAdjustmentsResponse.repeatedFields_ = [1];



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
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminListBalanceAdjustmentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminListBalanceAdjustmentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListBalanceAdjustmentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
adjustmentsList: jspb.Message.toObjectList(msg.getAdjustmentsList(),
    proto.pb.AdminBalanceAdjustmentItem.toObject, includeInstance),
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
 * @return {!proto.pb.AdminListBalanceAdjustmentsResponse}
 */
proto.pb.AdminListBalanceAdjustmentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminListBalanceAdjustmentsResponse;
  return proto.pb.AdminListBalanceAdjustmentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminListBalanceAdjustmentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminListBalanceAdjustmentsResponse}
 */
proto.pb.AdminListBalanceAdjustmentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.AdminBalanceAdjustmentItem;
      reader.readMessage(value,proto.pb.AdminBalanceAdjustmentItem.deserializeBinaryFromReader);
      msg.addAdjustments(value);
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
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminListBalanceAdjustmentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminListBalanceAdjustmentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminListBalanceAdjustmentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdjustmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.pb.AdminBalanceAdjustmentItem.serializeBinaryToWriter
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
 * repeated AdminBalanceAdjustmentItem adjustments = 1;
 * @return {!Array<!proto.pb.AdminBalanceAdjustmentItem>}
 */
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.getAdjustmentsList = function() {
  return /** @type{!Array<!proto.pb.AdminBalanceAdjustmentItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.AdminBalanceAdjustmentItem, 1));
};


/**
 * @param {!Array<!proto.pb.AdminBalanceAdjustmentItem>} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsResponse} returns this
*/
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.setAdjustmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.pb.AdminBalanceAdjustmentItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AdminBalanceAdjustmentItem}
 */
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.addAdjustments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.pb.AdminBalanceAdjustmentItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.AdminListBalanceAdjustmentsResponse} returns this
 */
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.clearAdjustmentsList = function() {
  return this.setAdjustmentsList([]);
};


/**
 * optional int64 total_count = 2;
 * @return {number}
 */
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.getTotalCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminListBalanceAdjustmentsResponse} returns this
 */
proto.pb.AdminListBalanceAdjustmentsResponse.prototype.setTotalCount = function(value) {
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
proto.pb.AdminReplayIAPNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminReplayIAPNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminReplayIAPNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReplayIAPNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
notificationId: jspb.Message.getFieldWithDefault(msg, 1, "")
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
 * @return {!proto.pb.AdminReplayIAPNotificationRequest}
 */
proto.pb.AdminReplayIAPNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminReplayIAPNotificationRequest;
  return proto.pb.AdminReplayIAPNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminReplayIAPNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminReplayIAPNotificationRequest}
 */
proto.pb.AdminReplayIAPNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNotificationId(value);
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
proto.pb.AdminReplayIAPNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminReplayIAPNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminReplayIAPNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReplayIAPNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNotificationId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string notification_id = 1;
 * @return {string}
 */
proto.pb.AdminReplayIAPNotificationRequest.prototype.getNotificationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReplayIAPNotificationRequest} returns this
 */
proto.pb.AdminReplayIAPNotificationRequest.prototype.setNotificationId = function(value) {
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
proto.pb.AdminReplayIAPNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminReplayIAPNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminReplayIAPNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReplayIAPNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
processedStatus: jspb.Message.getFieldWithDefault(msg, 3, "")
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
 * @return {!proto.pb.AdminReplayIAPNotificationResponse}
 */
proto.pb.AdminReplayIAPNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminReplayIAPNotificationResponse;
  return proto.pb.AdminReplayIAPNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminReplayIAPNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminReplayIAPNotificationResponse}
 */
proto.pb.AdminReplayIAPNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProcessedStatus(value);
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
proto.pb.AdminReplayIAPNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminReplayIAPNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminReplayIAPNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReplayIAPNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessedStatus();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.AdminReplayIAPNotificationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminReplayIAPNotificationResponse} returns this
 */
proto.pb.AdminReplayIAPNotificationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.AdminReplayIAPNotificationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReplayIAPNotificationResponse} returns this
 */
proto.pb.AdminReplayIAPNotificationResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string processed_status = 3;
 * @return {string}
 */
proto.pb.AdminReplayIAPNotificationResponse.prototype.getProcessedStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReplayIAPNotificationResponse} returns this
 */
proto.pb.AdminReplayIAPNotificationResponse.prototype.setProcessedStatus = function(value) {
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
proto.pb.AdminTriggerPayoutReconciliationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminTriggerPayoutReconciliationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminTriggerPayoutReconciliationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
provider: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f
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
 * @return {!proto.pb.AdminTriggerPayoutReconciliationRequest}
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminTriggerPayoutReconciliationRequest;
  return proto.pb.AdminTriggerPayoutReconciliationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminTriggerPayoutReconciliationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminTriggerPayoutReconciliationRequest}
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProvider(value);
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
proto.pb.AdminTriggerPayoutReconciliationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminTriggerPayoutReconciliationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminTriggerPayoutReconciliationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {string} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string provider = 1;
 * @return {string}
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.prototype.getProvider = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTriggerPayoutReconciliationRequest} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.prototype.setProvider = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminTriggerPayoutReconciliationRequest} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.prototype.clearProvider = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminTriggerPayoutReconciliationRequest.prototype.hasProvider = function() {
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
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminTriggerPayoutReconciliationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminTriggerPayoutReconciliationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
message: jspb.Message.getFieldWithDefault(msg, 2, ""),
paypalReconciledCount: jspb.Message.getFieldWithDefault(msg, 3, 0),
paypalReturnsCount: jspb.Message.getFieldWithDefault(msg, 4, 0),
stripeReturnsCount: jspb.Message.getFieldWithDefault(msg, 5, 0),
batchesRefreshedCount: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminTriggerPayoutReconciliationResponse;
  return proto.pb.AdminTriggerPayoutReconciliationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminTriggerPayoutReconciliationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypalReconciledCount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPaypalReturnsCount(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStripeReturnsCount(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setBatchesRefreshedCount(value);
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
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminTriggerPayoutReconciliationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminTriggerPayoutReconciliationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPaypalReconciledCount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPaypalReturnsCount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getStripeReturnsCount();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getBatchesRefreshedCount();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string message = 2;
 * @return {string}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 paypal_reconciled_count = 3;
 * @return {number}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.getPaypalReconciledCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.setPaypalReconciledCount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 paypal_returns_count = 4;
 * @return {number}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.getPaypalReturnsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.setPaypalReturnsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 stripe_returns_count = 5;
 * @return {number}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.getStripeReturnsCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.setStripeReturnsCount = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 batches_refreshed_count = 6;
 * @return {number}
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.getBatchesRefreshedCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminTriggerPayoutReconciliationResponse} returns this
 */
proto.pb.AdminTriggerPayoutReconciliationResponse.prototype.setBatchesRefreshedCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.pb.AdminGetUserAdjustmentStatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminGetUserAdjustmentStatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminGetUserAdjustmentStatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetUserAdjustmentStatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
targetUserId: jspb.Message.getFieldWithDefault(msg, 1, 0)
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
 * @return {!proto.pb.AdminGetUserAdjustmentStatsRequest}
 */
proto.pb.AdminGetUserAdjustmentStatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminGetUserAdjustmentStatsRequest;
  return proto.pb.AdminGetUserAdjustmentStatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminGetUserAdjustmentStatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminGetUserAdjustmentStatsRequest}
 */
proto.pb.AdminGetUserAdjustmentStatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTargetUserId(value);
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
proto.pb.AdminGetUserAdjustmentStatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminGetUserAdjustmentStatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminGetUserAdjustmentStatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetUserAdjustmentStatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTargetUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
};


/**
 * optional int64 target_user_id = 1;
 * @return {number}
 */
proto.pb.AdminGetUserAdjustmentStatsRequest.prototype.getTargetUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetUserAdjustmentStatsRequest} returns this
 */
proto.pb.AdminGetUserAdjustmentStatsRequest.prototype.setTargetUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.repeatedFields_ = [4];



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
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminGetUserAdjustmentStatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminGetUserAdjustmentStatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
count30d: jspb.Message.getFieldWithDefault(msg, 1, 0),
totalGrantedCents30d: jspb.Message.getFieldWithDefault(msg, 2, 0),
totalDeductedCents30d: jspb.Message.getFieldWithDefault(msg, 3, 0),
recentAdjustmentsList: jspb.Message.toObjectList(msg.getRecentAdjustmentsList(),
    proto.pb.AdminBalanceAdjustmentItem.toObject, includeInstance),
adminDailyQuotaCents: jspb.Message.getFieldWithDefault(msg, 5, 0),
adminDailyUsedCents: jspb.Message.getFieldWithDefault(msg, 6, 0)
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
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminGetUserAdjustmentStatsResponse;
  return proto.pb.AdminGetUserAdjustmentStatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminGetUserAdjustmentStatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCount30d(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalGrantedCents30d(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTotalDeductedCents30d(value);
      break;
    case 4:
      var value = new proto.pb.AdminBalanceAdjustmentItem;
      reader.readMessage(value,proto.pb.AdminBalanceAdjustmentItem.deserializeBinaryFromReader);
      msg.addRecentAdjustments(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAdminDailyQuotaCents(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setAdminDailyUsedCents(value);
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
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminGetUserAdjustmentStatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminGetUserAdjustmentStatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCount30d();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getTotalGrantedCents30d();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getTotalDeductedCents30d();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getRecentAdjustmentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto.pb.AdminBalanceAdjustmentItem.serializeBinaryToWriter
    );
  }
  f = message.getAdminDailyQuotaCents();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getAdminDailyUsedCents();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
};


/**
 * optional int32 count_30d = 1;
 * @return {number}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.getCount30d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse} returns this
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.setCount30d = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 total_granted_cents_30d = 2;
 * @return {number}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.getTotalGrantedCents30d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse} returns this
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.setTotalGrantedCents30d = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 total_deducted_cents_30d = 3;
 * @return {number}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.getTotalDeductedCents30d = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse} returns this
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.setTotalDeductedCents30d = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * repeated AdminBalanceAdjustmentItem recent_adjustments = 4;
 * @return {!Array<!proto.pb.AdminBalanceAdjustmentItem>}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.getRecentAdjustmentsList = function() {
  return /** @type{!Array<!proto.pb.AdminBalanceAdjustmentItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.pb.AdminBalanceAdjustmentItem, 4));
};


/**
 * @param {!Array<!proto.pb.AdminBalanceAdjustmentItem>} value
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse} returns this
*/
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.setRecentAdjustmentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.pb.AdminBalanceAdjustmentItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.pb.AdminBalanceAdjustmentItem}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.addRecentAdjustments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.pb.AdminBalanceAdjustmentItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse} returns this
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.clearRecentAdjustmentsList = function() {
  return this.setRecentAdjustmentsList([]);
};


/**
 * optional int64 admin_daily_quota_cents = 5;
 * @return {number}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.getAdminDailyQuotaCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse} returns this
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.setAdminDailyQuotaCents = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 admin_daily_used_cents = 6;
 * @return {number}
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.getAdminDailyUsedCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminGetUserAdjustmentStatsResponse} returns this
 */
proto.pb.AdminGetUserAdjustmentStatsResponse.prototype.setAdminDailyUsedCents = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
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
proto.pb.AdminFreezeUserTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminFreezeUserTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminFreezeUserTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeUserTokensRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
tokenAmountInCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
adminPassword: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
idempotencyKey: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pb.AdminFreezeUserTokensRequest}
 */
proto.pb.AdminFreezeUserTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminFreezeUserTokensRequest;
  return proto.pb.AdminFreezeUserTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminFreezeUserTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminFreezeUserTokensRequest}
 */
proto.pb.AdminFreezeUserTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTokenAmountInCents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdminPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIdempotencyKey(value);
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
proto.pb.AdminFreezeUserTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminFreezeUserTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminFreezeUserTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeUserTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTokenAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getReason();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeUserTokensRequest} returns this
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 token_amount_in_cents = 2;
 * @return {number}
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.getTokenAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeUserTokensRequest} returns this
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.setTokenAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeUserTokensRequest} returns this
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string admin_password = 4;
 * @return {string}
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.getAdminPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeUserTokensRequest} returns this
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.setAdminPassword = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminFreezeUserTokensRequest} returns this
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.clearAdminPassword = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.hasAdminPassword = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string idempotency_key = 5;
 * @return {string}
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeUserTokensRequest} returns this
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminFreezeUserTokensRequest} returns this
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.clearIdempotencyKey = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminFreezeUserTokensRequest.prototype.hasIdempotencyKey = function() {
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
proto.pb.AdminFreezeUserTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminFreezeUserTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminFreezeUserTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeUserTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
newBalanceInCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
newFrozenBalanceInCents: jspb.Message.getFieldWithDefault(msg, 3, 0),
message: jspb.Message.getFieldWithDefault(msg, 4, ""),
transactionId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.pb.AdminFreezeUserTokensResponse}
 */
proto.pb.AdminFreezeUserTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminFreezeUserTokensResponse;
  return proto.pb.AdminFreezeUserTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminFreezeUserTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminFreezeUserTokensResponse}
 */
proto.pb.AdminFreezeUserTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewBalanceInCents(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewFrozenBalanceInCents(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransactionId(value);
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
proto.pb.AdminFreezeUserTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminFreezeUserTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminFreezeUserTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminFreezeUserTokensResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNewBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNewFrozenBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminFreezeUserTokensResponse} returns this
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 new_balance_in_cents = 2;
 * @return {number}
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.getNewBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeUserTokensResponse} returns this
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.setNewBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 new_frozen_balance_in_cents = 3;
 * @return {number}
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.getNewFrozenBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminFreezeUserTokensResponse} returns this
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.setNewFrozenBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeUserTokensResponse} returns this
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string transaction_id = 5;
 * @return {string}
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminFreezeUserTokensResponse} returns this
 */
proto.pb.AdminFreezeUserTokensResponse.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.pb.AdminUnfreezeUserTokensRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminUnfreezeUserTokensRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminUnfreezeUserTokensRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeUserTokensRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
userId: jspb.Message.getFieldWithDefault(msg, 1, 0),
tokenAmountInCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
reason: jspb.Message.getFieldWithDefault(msg, 3, ""),
adminPassword: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f,
idempotencyKey: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f
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
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest}
 */
proto.pb.AdminUnfreezeUserTokensRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminUnfreezeUserTokensRequest;
  return proto.pb.AdminUnfreezeUserTokensRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminUnfreezeUserTokensRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest}
 */
proto.pb.AdminUnfreezeUserTokensRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserId(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTokenAmountInCents(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdminPassword(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIdempotencyKey(value);
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
proto.pb.AdminUnfreezeUserTokensRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminUnfreezeUserTokensRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminUnfreezeUserTokensRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeUserTokensRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTokenAmountInCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getReason();
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
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 user_id = 1;
 * @return {number}
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest} returns this
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional int64 token_amount_in_cents = 2;
 * @return {number}
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.getTokenAmountInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest} returns this
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.setTokenAmountInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string reason = 3;
 * @return {string}
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest} returns this
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string admin_password = 4;
 * @return {string}
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.getAdminPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest} returns this
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.setAdminPassword = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest} returns this
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.clearAdminPassword = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.hasAdminPassword = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string idempotency_key = 5;
 * @return {string}
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest} returns this
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminUnfreezeUserTokensRequest} returns this
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.clearIdempotencyKey = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminUnfreezeUserTokensRequest.prototype.hasIdempotencyKey = function() {
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
proto.pb.AdminUnfreezeUserTokensResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminUnfreezeUserTokensResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminUnfreezeUserTokensResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeUserTokensResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
newBalanceInCents: jspb.Message.getFieldWithDefault(msg, 2, 0),
newFrozenBalanceInCents: jspb.Message.getFieldWithDefault(msg, 3, 0),
message: jspb.Message.getFieldWithDefault(msg, 4, ""),
transactionId: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.pb.AdminUnfreezeUserTokensResponse}
 */
proto.pb.AdminUnfreezeUserTokensResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminUnfreezeUserTokensResponse;
  return proto.pb.AdminUnfreezeUserTokensResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminUnfreezeUserTokensResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminUnfreezeUserTokensResponse}
 */
proto.pb.AdminUnfreezeUserTokensResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewBalanceInCents(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewFrozenBalanceInCents(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setMessage(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransactionId(value);
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
proto.pb.AdminUnfreezeUserTokensResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminUnfreezeUserTokensResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminUnfreezeUserTokensResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminUnfreezeUserTokensResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNewBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getNewFrozenBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminUnfreezeUserTokensResponse} returns this
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional int64 new_balance_in_cents = 2;
 * @return {number}
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.getNewBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeUserTokensResponse} returns this
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.setNewBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 new_frozen_balance_in_cents = 3;
 * @return {number}
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.getNewFrozenBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminUnfreezeUserTokensResponse} returns this
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.setNewFrozenBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string message = 4;
 * @return {string}
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeUserTokensResponse} returns this
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string transaction_id = 5;
 * @return {string}
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminUnfreezeUserTokensResponse} returns this
 */
proto.pb.AdminUnfreezeUserTokensResponse.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminReverseBalanceAdjustmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminReverseBalanceAdjustmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
adjustmentId: jspb.Message.getFieldWithDefault(msg, 1, ""),
reason: jspb.Message.getFieldWithDefault(msg, 2, ""),
adminPassword: jspb.Message.getFieldWithDefault(msg, 3, ""),
idempotencyKey: (f = jspb.Message.getField(msg, 4)) == null ? undefined : f
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
 * @return {!proto.pb.AdminReverseBalanceAdjustmentRequest}
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminReverseBalanceAdjustmentRequest;
  return proto.pb.AdminReverseBalanceAdjustmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminReverseBalanceAdjustmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminReverseBalanceAdjustmentRequest}
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdjustmentId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdminPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setIdempotencyKey(value);
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
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminReverseBalanceAdjustmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminReverseBalanceAdjustmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAdjustmentId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAdminPassword();
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
 * optional string adjustment_id = 1;
 * @return {string}
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.getAdjustmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentRequest} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.setAdjustmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string reason = 2;
 * @return {string}
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentRequest} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string admin_password = 3;
 * @return {string}
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.getAdminPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentRequest} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.setAdminPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string idempotency_key = 4;
 * @return {string}
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.getIdempotencyKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentRequest} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.setIdempotencyKey = function(value) {
  return jspb.Message.setField(this, 4, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.pb.AdminReverseBalanceAdjustmentRequest} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.clearIdempotencyKey = function() {
  return jspb.Message.setField(this, 4, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminReverseBalanceAdjustmentRequest.prototype.hasIdempotencyKey = function() {
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
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminReverseBalanceAdjustmentResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminReverseBalanceAdjustmentResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false),
newAdjustmentId: jspb.Message.getFieldWithDefault(msg, 2, ""),
transactionId: jspb.Message.getFieldWithDefault(msg, 3, ""),
newBalanceInCents: jspb.Message.getFieldWithDefault(msg, 4, 0),
message: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.pb.AdminReverseBalanceAdjustmentResponse}
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminReverseBalanceAdjustmentResponse;
  return proto.pb.AdminReverseBalanceAdjustmentResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminReverseBalanceAdjustmentResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminReverseBalanceAdjustmentResponse}
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.deserializeBinaryFromReader = function(msg, reader) {
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
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setNewAdjustmentId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setTransactionId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setNewBalanceInCents(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
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
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminReverseBalanceAdjustmentResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminReverseBalanceAdjustmentResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNewAdjustmentId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTransactionId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNewBalanceInCents();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentResponse} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional string new_adjustment_id = 2;
 * @return {string}
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.getNewAdjustmentId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentResponse} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.setNewAdjustmentId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string transaction_id = 3;
 * @return {string}
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.getTransactionId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentResponse} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.setTransactionId = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 new_balance_in_cents = 4;
 * @return {number}
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.getNewBalanceInCents = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentResponse} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.setNewBalanceInCents = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string message = 5;
 * @return {string}
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminReverseBalanceAdjustmentResponse} returns this
 */
proto.pb.AdminReverseBalanceAdjustmentResponse.prototype.setMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminCompleteReviewedPayoutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminCompleteReviewedPayoutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminCompleteReviewedPayoutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
payoutId: jspb.Message.getFieldWithDefault(msg, 1, 0),
operationId: jspb.Message.getFieldWithDefault(msg, 2, ""),
providerReference: jspb.Message.getFieldWithDefault(msg, 3, ""),
reason: jspb.Message.getFieldWithDefault(msg, 4, ""),
adminPassword: jspb.Message.getFieldWithDefault(msg, 5, "")
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
 * @return {!proto.pb.AdminCompleteReviewedPayoutRequest}
 */
proto.pb.AdminCompleteReviewedPayoutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminCompleteReviewedPayoutRequest;
  return proto.pb.AdminCompleteReviewedPayoutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminCompleteReviewedPayoutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminCompleteReviewedPayoutRequest}
 */
proto.pb.AdminCompleteReviewedPayoutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setPayoutId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setOperationId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setProviderReference(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setReason(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readStringRequireUtf8());
      msg.setAdminPassword(value);
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
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminCompleteReviewedPayoutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminCompleteReviewedPayoutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminCompleteReviewedPayoutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayoutId();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getOperationId();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProviderReference();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReason();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAdminPassword();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional int64 payout_id = 1;
 * @return {number}
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.getPayoutId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.pb.AdminCompleteReviewedPayoutRequest} returns this
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.setPayoutId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string operation_id = 2;
 * @return {string}
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.getOperationId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminCompleteReviewedPayoutRequest} returns this
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.setOperationId = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string provider_reference = 3;
 * @return {string}
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.getProviderReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminCompleteReviewedPayoutRequest} returns this
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.setProviderReference = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reason = 4;
 * @return {string}
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.getReason = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminCompleteReviewedPayoutRequest} returns this
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.setReason = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string admin_password = 5;
 * @return {string}
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.getAdminPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.pb.AdminCompleteReviewedPayoutRequest} returns this
 */
proto.pb.AdminCompleteReviewedPayoutRequest.prototype.setAdminPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
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
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.AdminCompleteReviewedPayoutResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.AdminCompleteReviewedPayoutResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminCompleteReviewedPayoutResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
payout: (f = msg.getPayout()) && proto.pb.PayoutInfo.toObject(includeInstance, f),
alreadyProcessed: jspb.Message.getBooleanFieldWithDefault(msg, 2, false)
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
 * @return {!proto.pb.AdminCompleteReviewedPayoutResponse}
 */
proto.pb.AdminCompleteReviewedPayoutResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.pb.AdminCompleteReviewedPayoutResponse;
  return proto.pb.AdminCompleteReviewedPayoutResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.pb.AdminCompleteReviewedPayoutResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.pb.AdminCompleteReviewedPayoutResponse}
 */
proto.pb.AdminCompleteReviewedPayoutResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.pb.PayoutInfo;
      reader.readMessage(value,proto.pb.PayoutInfo.deserializeBinaryFromReader);
      msg.setPayout(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setAlreadyProcessed(value);
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
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.pb.AdminCompleteReviewedPayoutResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.pb.AdminCompleteReviewedPayoutResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.pb.AdminCompleteReviewedPayoutResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPayout();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.pb.PayoutInfo.serializeBinaryToWriter
    );
  }
  f = message.getAlreadyProcessed();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional PayoutInfo payout = 1;
 * @return {?proto.pb.PayoutInfo}
 */
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.getPayout = function() {
  return /** @type{?proto.pb.PayoutInfo} */ (
    jspb.Message.getWrapperField(this, proto.pb.PayoutInfo, 1));
};


/**
 * @param {?proto.pb.PayoutInfo|undefined} value
 * @return {!proto.pb.AdminCompleteReviewedPayoutResponse} returns this
*/
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.setPayout = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.pb.AdminCompleteReviewedPayoutResponse} returns this
 */
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.clearPayout = function() {
  return this.setPayout(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.hasPayout = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bool already_processed = 2;
 * @return {boolean}
 */
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.getAlreadyProcessed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 2, false));
};


/**
 * @param {boolean} value
 * @return {!proto.pb.AdminCompleteReviewedPayoutResponse} returns this
 */
proto.pb.AdminCompleteReviewedPayoutResponse.prototype.setAlreadyProcessed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * @enum {number}
 */
proto.pb.TransactionType = {
  PURCHASE: 0,
  ESCROW: 1,
  WITHDRAWAL: 2,
  TRANSFER: 3,
  PLATFORM_FEE: 4,
  TRANSACTION_REFUND: 5,
  COURSE_PURCHASE: 6,
  COURSE_REFUND: 7,
  COURSE_RELEASE: 8,
  TRANSACTION_REFUND_REVERSAL: 9,
  PAYOUT_REVERSAL: 10,
  ADMIN_ADJUSTMENT: 11
};

/**
 * @enum {number}
 */
proto.pb.AdjustmentCategory = {
  ADJUSTMENT_CATEGORY_UNSPECIFIED: 0,
  GOODWILL_COMPENSATION: 1,
  DISPUTE_RESOLUTION: 2,
  CAMPAIGN_REWARD: 3,
  CHARGEBACK_CLAWBACK: 4,
  FRAUD_PENALTY: 5,
  SYSTEM_CORRECTION: 6
};

/**
 * @enum {number}
 */
proto.pb.AdjustmentStatus = {
  ADJUSTMENT_STATUS_UNSPECIFIED: 0,
  ADJUSTMENT_APPROVED: 1,
  ADJUSTMENT_PENDING_APPROVAL: 2,
  ADJUSTMENT_REJECTED: 3
};

/**
 * @enum {number}
 */
proto.pb.EscrowType = {
  PENDING: 0,
  RELEASED: 1,
  REFUNDED: 2
};

/**
 * @enum {number}
 */
proto.pb.PaymentType = {
  PAYMENT_TYPE_UNSPECIFIED: 0,
  GOOGLE_PAY: 1,
  WECHAT_PAY: 2,
  ALIPAY: 3,
  PAYPAL: 4,
  STRIPE: 5,
  APPLE_PAY: 6
};

/**
 * @enum {number}
 */
proto.pb.PurchaseStatus = {
  PURCHASE_STATUS_UNSPECIFIED: 0,
  PURCHASE_PENDING: 1,
  PURCHASE_COMPLETED: 2,
  PURCHASE_FAILED: 3,
  PURCHASE_CANCELED: 4,
  PURCHASE_REFUNDED: 5
};

goog.object.extend(exports, proto.pb);
