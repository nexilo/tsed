import * as KoaRouter from "@koa/router";
import {RouterOptions} from "@koa/router";
import {PLATFORM_ROUTER_OPTIONS, PlatformHandler} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";
import {PlatformKoaDriver} from "./PlatformKoaDriver";

declare global {
  namespace TsED {
    export interface Router extends RouterOptions {
    }
  }
}

export class PlatformKoaRouter extends PlatformKoaDriver<KoaRouter> {
  constructor(
    platform: PlatformHandler,
    @Configuration() configuration: Configuration,
    @Inject(PLATFORM_ROUTER_OPTIONS) routerOptions: any
  ) {
    super(platform);

    const options = Object.assign({}, configuration.koa?.router || {}, routerOptions);

    this.raw = new KoaRouter(options) as any;
  }

  callback() {
    // @ts-ignore
    return this.raw.routes();
  }
}
