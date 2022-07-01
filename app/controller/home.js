"use strict";

const BaseController = require("./base");
class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async login() {
    this.success({
      authKey: "egg",
    });
  }
}

module.exports = HomeController;
