import {Constant, PlatformApplication} from "@tsed/common";
import {Configuration, Inject} from "@tsed/di";
import Application from "koa";
import * as bodyParser from "koa-bodyparser";
import * as compress from "koa-compress";
import * as session from "koa-session";

const methodOverride = require("koa-override");

export const rootDir = __dirname;

@Configuration({
  logger: {
    // level: "off"
  },
  statics: {
    "/": `${rootDir}/public`
  },
  viewsDir: `${rootDir}/views`
})
export class Server {
  @Inject()
  app: PlatformApplication<Application>;

  @Constant("viewsDir")
  viewsDir: string;

  $beforeRoutesInit() {
    // this.app.raw.set("views", this.viewsDir);
    // this.app.raw.engine("ejs", ejs);
    this.app
      .use(compress())
      .use(methodOverride())
      .use(bodyParser())
      .use(
        session({
          secure: false
        }, this.app.raw as any)
      );
  }
}
