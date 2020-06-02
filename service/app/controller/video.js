'use strict';
const Controller = require('egg').Controller;
class videoController extends Controller {
  async getMedia() {
    const { ctx } = this;
    let data =await this.service.video.getMedia()
    this.ctx.body = data
  }
  async SearchMedia(){
    const { ctx } = this;
    let data =await this.service.video.SearchMedia(this.ctx.query.keywords)
    this.ctx.body = data
  }
}
module.exports = videoController;