import {PlatformResponse} from "@tsed/common";
import * as Koa from "koa";

declare global {
  namespace TsED {
    export interface Response extends Koa.Response {}
  }
}

/**
 * @platform
 * @koa
 */
export class PlatformKoaResponse extends PlatformResponse<Koa.Response> {}
