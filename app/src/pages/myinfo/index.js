import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import store from "../../store/store";
import "../../css/MyInfoPage/MyInfoPage.css"
import axios from "axios";
import { Modal } from 'antd-mobile';
const alert = Modal.alert;
class MyInfoPage extends React.Component {
    //个人信息页面
    loginOut() {
        alert('提示', '确定退出吗???', [
            { text: 'Cancel', onPress: () => console.log("cancel") },
            {
                text: 'Ok', onPress: () => {
                    store.dispatch({ type: "SIGN_OUT" })
                    store.dispatch({ type: "SHOW" })
                    localStorage.name = "";
                    this.props.history.push("/mine")
                }
            }
        ])
    }
    state = {
        name: "",
        sex: "",
        id: "",
        date: "",
        mysign: ""
    }
    componentDidMount() {
        axios.get(`http://127.0.0.1:7001/getinfo?name=${localStorage.name}`)
            .then(res => {
                if (res.data.length!=0) {
                    console.log(res.data)
                    let date = res.data[0].date.split("T")[0]
                    this.setState({
                        name: res.data[0].name,
                        sex: res.data[0].sex,
                        id: res.data[0].UID,
                        date: date,
                        mysign: res.data[0].sign
                    })
                }

            })
    }
    render() {
        return (
            <div className="MyInfoPage">
                <NavBar
                    mode="light"
                >个人资料</NavBar>
                <div className="MyInfoPage-body">
                    <div className="MyInfoPage-list">
                        <span className="body-left">昵称</span>
                        <span className="body-right">{this.state.name}</span>
                    </div>
                    <div className="MyInfoPage-list">
                        <span className="body-left">UID</span> <span className="body-right">{this.state.id}</span>
                    </div>
                    <div className="MyInfoPage-list">
                        <span className="body-left">性别</span> <span className="body-right">{this.state.sex}</span>
                    </div>
                    <div className="MyInfoPage-list">
                        <span className="body-left">生日</span> <span className="body-right">{this.state.date}</span>
                    </div>
                    <div className="MyInfoPage-list lastList">
                        <span className="body-left">个人签名</span> <span className="body-right">{this.state.mysign}</span>
                    </div>
                </div>
                <div className="MyInfoPage-body">
                    <div className="MyInfoPage-list body-center" onClick={this.loginOut.bind(this)}>
                        退出登录
                    </div>
                    <div className="MyInfoPage-list body-center" onClick={() => {
                        this.props.history.go(-1)
                        store.dispatch({ type: "SHOW" })
                    }}>
                        返回中心
                    </div>
                </div>
            </div>
        )
    }
}

export default MyInfoPage;