const Service = require('egg').Service;
class getimgUserService extends Service {
  async getimg(obj) {
    const sql=`select * from picture where species="${obj.species}"`
    const data = await this.app.mysql.query(sql);
    return data;
  }
}
module.exports = getimgUserService;