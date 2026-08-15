// src/lib/peakpalClient.ts
import { PeakPalClient } from '../pb/Service_peakpalServiceClientPb';
import { Request, UnaryResponse, ClientReadableStream } from 'grpc-web'; // Import Request type

const peakPalClient = new PeakPalClient(
  "https://skiapp-api.googuar.com",
  null,
  {
    unaryInterceptors: [
      {
        intercept: <REQ, RESP>(request: Request<REQ, RESP>, invoker: (request: Request<REQ, RESP>) => Promise<UnaryResponse<REQ, RESP>>) => {
          const token = sessionStorage.getItem('recharge_access_token');
          if (token) {
            request.getMetadata().Authorization = `Bearer ${token}`;
          }
          return invoker(request);
        },
      },
    ],
    streamInterceptors: [
      {
        intercept: <REQ, RESP>(request: Request<REQ, RESP>, invoker: (request: Request<REQ, RESP>) => ClientReadableStream<RESP>) => {
          const token = sessionStorage.getItem('recharge_access_token');
          if (token) {
            request.getMetadata().Authorization = `Bearer ${token}`;
          }
          return invoker(request);
        },
      },
    ],
  }
);

export default peakPalClient;