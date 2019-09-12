import { NextFunction, Request, Response } from "express";


export interface CustomRequest extends Request {
    user?: string;
}

export interface CustomResponse extends Response {

}

export type CustomRequestHandler = (req: CustomRequest, res: CustomResponse, next: NextFunction) => any; 