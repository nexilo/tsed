import {
  PlatformApplication,
  PlatformBuilder,
  PlatformHandler,
  PlatformRequest,
  PlatformResponse,
  PlatformRouter
} from "@tsed/common";
import {Type} from "@tsed/core";
import {Context, Next} from "koa";
import {
  PlatformKoaApplication,
  PlatformKoaHandler,
  PlatformKoaRequest,
  PlatformKoaResponse,
  PlatformKoaRouter
} from "../services";

/**
 * @platform
 * @koa
 */
export class PlatformKoa extends PlatformBuilder {
  static providers = [
    {
      provide: PlatformResponse,
      useClass: PlatformKoaResponse
    },
    {
      provide: PlatformRequest,
      useClass: PlatformKoaRequest
    },
    {
      provide: PlatformHandler,
      useClass: PlatformKoaHandler
    },
    {
      provide: PlatformRouter,
      useClass: PlatformKoaRouter
    },
    {
      provide: PlatformApplication,
      useClass: PlatformKoaApplication
    }
  ];

  static async bootstrap(module: Type<any>, settings: Partial<TsED.Configuration> = {}): Promise<PlatformKoa> {
    return this.build<PlatformKoa>(PlatformKoa).bootstrap(module, settings);
  }

  protected useContext(): this {
    this.app.use(async (ctx: Context, next: Next) => {
      await this.createContext(ctx.request, ctx.response);

      return next();
    });

    return this;
  }
}
