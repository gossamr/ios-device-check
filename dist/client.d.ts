import * as api from "./api";
import { Response } from 'node-fetch';
export declare enum ApiHost {
    PRODUCTION = "api.devicecheck.apple.com",
    DEVELOPMENT = "api.development.devicecheck.apple.com"
}
export declare class DeviceCheck {
    private host;
    constructor(host: ApiHost);
    QueryDevice(jwt: string, payload: api.QueryDevicePayload): Promise<api.QueryDeviceResult>;
    UpdateDevice(jwt: string, payload: api.UpdateDevicePayload): Promise<Response>;
    ValidateDevice(jwt: string, payload: api.ValidateDevicePayload): Promise<Response>;
}
