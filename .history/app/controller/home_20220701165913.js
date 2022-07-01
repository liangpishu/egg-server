"use strict";

const BaseController = require("./base");
class HomeController extends BaseController {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async login() {
    this.ctx = {
      resp: "123",
    };
    // this.success({
    //   user: "123",
    // });
  }
}

module.exports = HomeController;
