'use strict';
const Controller = require('egg').Controller;
class changePWController extends Controller {
  async changePW() {
    const { ctx } = this;
    let result=await this.service.mycenter.updatePW(ctx.request.body)
    ctx.body = result;
  }
}
module.exports = changePWController;