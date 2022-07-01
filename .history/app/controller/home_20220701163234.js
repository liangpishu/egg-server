"use strict";

const Controller = require("egg").Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = "hi, egg";
  }
  async login() {
    const { ctx } = this;
    console.log(ctx);
    ctx.body = {
      name: "123",
    };
  }
}

module.exports = HomeController;
