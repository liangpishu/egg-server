"use strict";

const BaseController = require("./base");
class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async login() {
    const { ctx } = this;
    console.log(ctx);
    ths;
  }
}

module.exports = HomeController;
