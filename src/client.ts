// (c) PepperHQ Limited - All Right Reserved
import * as api from "./api";
import { Response } from 'node-fetch';

export enum ApiHost {
    PRODUCTION = 'api.devicecheck.apple.com',
    DEVELOPMENT = 'api.development.devicecheck.apple.com'
}

export class DeviceCheck {
    constructor(private host: ApiHost) { }

    public QueryDevice(jwt: string, payload: api.QueryDevicePayload): Promise<api.QueryDeviceResult> {
        return api.QueryDevice(this.host, jwt, payload);
    }

    public UpdateDevice(jwt: string, payload: api.UpdateDevicePayload): Promise<Response> {
        return api.UpdateDevice(this.host, jwt, payload);
    }

    public ValidateDevice(jwt: string, payload: api.ValidateDevicePayload): Promise<Response> {
        return api.ValidateDevice(this.host, jwt, payload);
    }
}
