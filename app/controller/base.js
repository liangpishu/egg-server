"use strict";

const Controller = require("egg").Controller;

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      respData: data,
      respMsg: "",
      respCode: "0000",
    };
  }
}

module.exports = BaseController;
