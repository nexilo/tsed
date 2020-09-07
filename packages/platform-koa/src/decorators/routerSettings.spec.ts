import {Store} from "@tsed/core";
import {CaseSensitive, Strict} from "@tsed/platform-koa";
import {expect} from "chai";

class Test {
}

xdescribe("RouterSettings", () => {
  describe("CaseSensitive", () => {
    it("should call merge method for mergeParams options", () => {
      CaseSensitive(true)(Test);
      const store = Store.from(Test).get("routerOptions");
      expect(store.caseSensitive).to.eq(true);
    });
  });

  describe("Strict", () => {
    it("should call merge method for mergeParams options", () => {
      Strict(true)(Test);
      const store = Store.from(Test).get("routerOptions");
      expect(store.strict).to.eq(true);
    });
  });
});
