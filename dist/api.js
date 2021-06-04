"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateDevice = exports.UpdateDevice = exports.QueryDevice = exports.isQueryDeviceResult = void 0;
// (c) PepperHQ Limited - All Right Reserved
const node_fetch_1 = __importStar(require("node-fetch"));
const uuid_1 = __importDefault(require("uuid"));
const error_1 = require("./error");
// TODO: Find a way of using unknown with object typeguards
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isQueryDeviceResult(result) {
    return typeof result.bit0 === 'boolean' &&
        typeof result.bit1 === 'boolean' &&
        typeof result.last_update_time === 'string';
}
exports.isQueryDeviceResult = isQueryDeviceResult;
async function QueryDevice(host, jwt, payload) {
    let request;
    let response;
    try {
        const url = `https://${host}/v1/query_two_bits`;
        const headers = {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        };
        const body = {
            device_token: payload.device_token,
            transaction_id: payload.transaction_id || uuid_1.default(),
            timestamp: payload.timestamp || Date.now()
        };
        request = new node_fetch_1.Request(url, { method: 'POST', headers, body: JSON.stringify(body) });
        response = await node_fetch_1.default(request);
        const responseBodyText = await response.clone().text();
        // Apple's API returns this text error with status 200 and application/json content type
        if (response.status !== 200 || responseBodyText == 'Failed to find bit state') {
            throw new Error(`Device check api returned ${response.status}: ${responseBodyText}`);
        }
        const responseBody = await response.clone().json();
        if (!isQueryDeviceResult(responseBody)) {
            throw new Error('Failed to parse response from device check api');
        }
        return responseBody;
    }
    catch (err) {
        if (request) {
            throw new error_1.ApiError(request, response, err);
        }
        throw err;
    }
}
exports.QueryDevice = QueryDevice;
async function UpdateDevice(host, jwt, payload) {
    let request;
    let response;
    try {
        const url = `https://${host}/v1/update_two_bits`;
        const headers = {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        };
        const body = {
            device_token: payload.device_token,
            bit0: payload.bit0,
            bit1: payload.bit1,
            transaction_id: payload.transaction_id || uuid_1.default(),
            timestamp: payload.timestamp || Date.now(),
        };
        request = new node_fetch_1.Request(url, { method: 'POST', headers, body: JSON.stringify(body) });
        response = await node_fetch_1.default(request);
        if (response.status !== 200) {
            throw new Error(`Device check api returned ${response.status}: ${await response.clone().text()}`);
        }
    }
    catch (err) {
        if (request) {
            throw new error_1.ApiError(request, response, err);
        }
        throw err;
    }
}
exports.UpdateDevice = UpdateDevice;
// The documentation is cryptic about what is returned if the token is invalid so we assume any error === invalid 
// and throw an error if one is returned instead of returning a boolean.
async function ValidateDevice(host, jwt, payload) {
    let request;
    let response;
    try {
        const url = `https://${host}/v1/validate_device_token`;
        const headers = {
            Authorization: `Bearer ${jwt}`,
            'Content-Type': 'application/json'
        };
        const body = {
            device_token: payload.device_token,
            transaction_id: payload.transaction_id || uuid_1.default(),
            timestamp: payload.timestamp || Date.now()
        };
        request = new node_fetch_1.Request(url, { method: 'POST', headers, body: JSON.stringify(body) });
        response = await node_fetch_1.default(request);
        if (response.status !== 200) {
            throw new Error(`Device check api returned ${response.status}: ${await response.clone().text()}`);
        }
    }
    catch (err) {
        if (request) {
            throw new error_1.ApiError(request, response, err);
        }
        throw err;
    }
}
exports.ValidateDevice = ValidateDevice;
//# sourceMappingURL=api.js.map