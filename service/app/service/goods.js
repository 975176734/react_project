const Service = require('egg').Service;
class UserService extends Service {
  async goods() {
    // const sql=`select * from picture limit ${param.number},30`
	const sql=`select * from picture`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async  GoodsDetail(paramObj) {
    const sql=`select * from picture where id = "${paramObj.id}"`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async  RelatedImages(paramObj) {
    const sql=`select * from picture where species = "${paramObj.species}"`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  
  
}
module.exports = UserService;