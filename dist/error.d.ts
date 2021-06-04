import { Request, Response } from "node-fetch";
export declare class ApiError extends Error {
    req: Request;
    res: Response | undefined;
    wrappedError: Error;
    constructor(req: Request, res: Response | undefined, wrappedError: Error);
}
