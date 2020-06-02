const Service = require('egg').Service;
class UserService extends Service {
    async changePassword(res) {
        console.log(res)
        let sql = `UPDATE user SET password='${res.password}' where name='${res.userName}'`
        console.log(sql)
        const data1 = await this.app.mysql.query(sql)
        return data1
    }
    async addInfo(res) {
        var sex=""
        if(res.sex==0){
            sex='男'
        }else if(res.sex==1){
            sex='女'
        }
        var d = new Date(res.date);
        var date = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();
        let sql = `insert into userinfo(name,sex,sign,date) values("${res.name}",'${sex}',"${res.sign}",'${date}')`
        const data1 = await this.app.mysql.query(sql)
        return data1
    }
    async getinfo(res) {
        let sql = `select * from userinfo where name="${res.name}"`
        const data1 = await this.app.mysql.query(sql)
        return data1
    }
}
module.exports = UserService;