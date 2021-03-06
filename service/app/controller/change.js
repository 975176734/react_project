'use strict';
const Controller = require('egg').Controller;
class changeController extends Controller {
  async changePassword() {
    const { ctx } = this;
    let result=await this.service.change1.changePassword(ctx.request.body)
    ctx.body = result;
  }
  async addInfo() {
    const { ctx } = this;
    let result=await this.service.change1.addInfo(ctx.request.body)
    ctx.body = result;
  }
  async getinfo() {
    const { ctx } = this;
    let result=await this.service.change1.getinfo(ctx.request.query)
    ctx.body = result;
  }
}
module.exports = changeController;