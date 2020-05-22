const Service = require('egg').Service;
class UserService extends Service {
  async goods(param) {
<<<<<<< HEAD
    // const sql=`select * from picture limit ${param.number},30`
	const sql=`select * from picture`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async  goodsdetail(paramObj) {
    const sql=`select * from picture where id= "${paramObj.id}"`
=======
    const sql=`select * from picture limit ${param.number},30`
    const data = await this.app.mysql.query(sql);
    return data;
  }
  async  SimilarImg(paramObj) {
    const sql=`select * from picture where species = "${paramObj.species}"`
>>>>>>> 47ea5131ccbf18d8be916c89cd6ccefb06bdf8f7
    const data = await this.app.mysql.query(sql);
    return data;
  }
}
module.exports = UserService;