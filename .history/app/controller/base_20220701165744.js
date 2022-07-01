"use strict";

const Controller = require("egg").Controller;

class BaseController extends Controller {
  success(data) {
    console.log(this.ctx, "this.ctx");
    this.ctx = {
      respData: data,
      respMsg: "",
      respCode: "0000",
    };
  }
}

module.exports = BaseController;
