const Service = require('egg').Service;
class UserService extends Service {
  async addtocar(res) {
    let itemID = res.itemID;
    let userName = res.userName;
    // let type = res.type
    let sql = `select * from car where userName="${userName}" and itemID="${itemID}" `
    const data1 = await this.app.mysql.query(sql)
    if(data1==""){
      let sql = `insert into car(userName,itemID,type) values("${userName}",'${itemID}',"picture")`
      const data2 = await this.app.mysql.query(sql)
      return {code:2000,info:"成功添加进购物车"}
    }else{
      return {code:4005,info:"该商品已存在购物车"}
    }
   
  }
}
module.exports = UserService;