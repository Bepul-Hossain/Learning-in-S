import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleWare implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        console.log("Middleware function called");
        next()
    }
}