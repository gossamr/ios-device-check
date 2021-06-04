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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceCheck = exports.ApiHost = void 0;
// (c) PepperHQ Limited - All Right Reserved
const api = __importStar(require("./api"));
var ApiHost;
(function (ApiHost) {
    ApiHost["PRODUCTION"] = "api.devicecheck.apple.com";
    ApiHost["DEVELOPMENT"] = "api.development.devicecheck.apple.com";
})(ApiHost = exports.ApiHost || (exports.ApiHost = {}));
class DeviceCheck {
    constructor(host) {
        this.host = host;
    }
    QueryDevice(jwt, payload) {
        return api.QueryDevice(this.host, jwt, payload);
    }
    UpdateDevice(jwt, payload) {
        return api.UpdateDevice(this.host, jwt, payload);
    }
    ValidateDevice(jwt, payload) {
        return api.ValidateDevice(this.host, jwt, payload);
    }
}
exports.DeviceCheck = DeviceCheck;
//# sourceMappingURL=client.js.map