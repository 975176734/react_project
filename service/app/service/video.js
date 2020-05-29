const Service = require('egg').Service;
class UserService extends Service {
  async getMedia() {
    const sql=`select * from media order by name limit 1,20;`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async SearchMedia(keywords){
    const sql=`select * from media where keywords='${keywords}'`
    const data = await this.app.mysql.query(sql);
    return data;
  }
}
module.exports = UserService;