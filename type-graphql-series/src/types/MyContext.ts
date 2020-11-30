import { Request, Response } from "express";
import { Session } from 'express-session';
import { createAuthorsLoader } from "../utils/authorsLoader";


interface ExtendsRequest extends Request {
  session: ExtendsSession;
}

interface ExtendsSession extends Session {
  userId: any;
}

export interface MyContext {
  req: ExtendsRequest;
}


export interface MyContext {
  req: ExtendsRequest;
  res: Response;
  authorsLoader: ReturnType<typeof createAuthorsLoader>;
}
