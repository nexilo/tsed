import {Inject, PlatformHandler, PlatformStaticsOptions} from "@tsed/common";
import * as Koa from "koa";
import KoaApplication from "koa";
import {PlatformKoaDriver} from "./PlatformKoaDriver";

declare global {
  namespace TsED {
    export interface Application extends KoaApplication {
    }

    export interface StaticsOptions {
    }
  }
}

/**
 * @platform
 * @express
 */
export class PlatformKoaApplication extends PlatformKoaDriver<KoaApplication> {
  constructor(@Inject() platformHandler: PlatformHandler) {
    super(platformHandler);

    this.raw = new Koa();
  }

  statics(endpoint: string, options: PlatformStaticsOptions) {
    const {root, ...props} = options;

    // this.use(endpoint, staticsMiddleware(root, props));

    return this;
  }

  callback(): any {
    return this.raw.callback();
  }
}
