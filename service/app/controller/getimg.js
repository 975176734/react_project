'use strict';
const Controller = require('egg').Controller;
class getimgController extends Controller {
  async getimg() {
    const { ctx } = this;
    let result = await this.service.getimg.getimg(this.ctx.request.query)
    ctx.body = result;
  }
}
module.exports = getimgController;