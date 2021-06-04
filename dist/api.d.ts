import { Response } from 'node-fetch';
export interface QueryDevicePayload {
    device_token: string;
    transaction_id?: string;
    timestamp?: number;
}
export interface QueryDeviceResult {
    bit0: boolean;
    bit1: boolean;
    last_update_time: string;
}
export declare function isQueryDeviceResult(result: any): result is QueryDeviceResult;
export declare function QueryDevice(host: string, jwt: string, payload: QueryDevicePayload): Promise<QueryDeviceResult>;
export interface UpdateDevicePayload extends QueryDevicePayload {
    bit0: boolean;
    bit1: boolean;
}
export declare function UpdateDevice(host: string, jwt: string, payload: UpdateDevicePayload): Promise<Response>;
export declare type ValidateDevicePayload = QueryDevicePayload;
export declare function ValidateDevice(host: string, jwt: string, payload: ValidateDevicePayload): Promise<Response>;
