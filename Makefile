# Regenerate only the changed catalog contract; preserve unrelated clients.
proto-token-product:
	/opt/homebrew/bin/protoc -I=../peakpal-server/proto -I=./node_modules/google-protobuf/ \
	  --js_out=import_style=commonjs,binary:src/pb \
	  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:src/pb ../peakpal-server/proto/rpc_token_product.proto
.PHONY: proto-token-product

# The website consumes entitlement messages, not administrator operation RPCs.
# Keep its existing service client and unrelated message dependencies together.
proto-admin-pass-operation:
	/opt/homebrew/bin/protoc -I=../peakpal-server/proto -I=./node_modules/google-protobuf/ \
	  --js_out=import_style=commonjs,binary:src/pb \
	  --grpc-web_out=import_style=typescript,mode=grpcwebtext:src/pb ../peakpal-server/proto/rpc_carpool.proto
.PHONY: proto-admin-pass-operation
