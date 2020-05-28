const Service = require('egg').Service;
class UserService extends Service {
  async getpicture() {
    let sql = `select * from picture order by price`
    const data = await this.app.mysql.query(sql)
    return data
  }
  async getpictures(obj) {
    let sql = `select * from picture order by price ${obj.str}`
    const data = await this.app.mysql.query(sql)
    return data
  }
}
module.exports = UserService;