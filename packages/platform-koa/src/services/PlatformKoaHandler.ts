import {HandlerContext, HandlerMetadata, HandlerType, ParamTypes, PlatformHandler} from "@tsed/common";
import {Context, Next} from "koa";

export class PlatformKoaHandler extends PlatformHandler {
  protected getArg(type: ParamTypes | string, h: HandlerContext): any {
    switch (String(type)) {
      case ParamTypes.RES:
        return h.res;

      case ParamTypes.REQ:
        return h.req;

      case "ctx":
        return h.request.ctx;

      default:
        return super.getArg(type, h);
    }
  }

  protected createRawHandler(metadata: HandlerMetadata) {
    switch (metadata.type) {
      default:
      case HandlerType.FUNCTION:
        return metadata.handler;

      case HandlerType.$CTX:
        return (req: any, res: any, next: any) => {
          metadata.handler(req.$ctx);
          next();
        };

      case HandlerType.CONTROLLER:
      case HandlerType.MIDDLEWARE:
        return (ctx: Context, next: Next) =>
          this.onRequest(
            new HandlerContext({
              injector: this.injector,
              request: ctx.request as any,
              response: ctx.response as any,
              res: ctx.res,
              req: ctx.req,
              next,
              metadata,
              args: []
            })
          );
    }
  }

  protected async onRequest(h: HandlerContext): Promise<void> {
    if (h.isDone) {
      return;
    }

    if (h.metadata.hasErrorParam) {
      if (!h.ctx.has("$err")) {
        return h.next();
      } else {
        h.err = h.ctx.get("$err");
      }
    }

    return super.onRequest(h);
  }

  protected onError(error: unknown, h: HandlerContext): any {
    h.ctx.set("$err", error);

    return h.next();
  }
}
