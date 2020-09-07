import "@koa/router";
import {PlatformContext, PlatformRequest} from "@tsed/common";
import * as Koa from "koa";

declare global {
  namespace Koa {
    export interface Request {
      id: string;
      $ctx: PlatformContext;
    }
  }
  namespace TsED {
    export interface Request extends Koa.Request {
    }
  }
}

/**
 * @platform
 * @koa
 */
export class PlatformKoaRequest extends PlatformRequest<Koa.Request> {
}
