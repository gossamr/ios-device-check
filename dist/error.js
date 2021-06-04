"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiError = void 0;
class ApiError extends Error {
    constructor(req, res, wrappedError) {
        super(wrappedError.message);
        this.req = req;
        this.res = res;
        this.wrappedError = wrappedError;
    }
}
exports.ApiError = ApiError;
//# sourceMappingURL=error.js.map