import React from "react";
import store from "../../store/store";
import "../../css/mine/mine.css"
import mineUrl from "../../assets/img/个人中心.png"
import imgUrl1 from "../../assets/img/1.png"
import imgUrl2 from "../../assets/img/2.png"
import imgUrl3 from "../../assets/img/3.png"
import { Icon, Grid } from 'antd-mobile';
import imgUrl4 from "../../assets/img/4.png"
import imgUrl5 from "../../assets/img/5.png"
import imgUrl6 from "../../assets/img/6.png"
import imgUrl7 from "../../assets/img/7.png"
import imgUrl8 from "../../assets/img/login.png"
class MinePage extends React.Component {
    componentDidMount() {
        // 订阅更新
        store.subscribe(this.changeStore.bind(this));
    }
    changeStore() {
        this.setState(store.getState())
    }
    goLoginPage() {
        this.props.history.push("/login")
        store.dispatch({ type: "HIDDEN" })
    }
    toVip() {
        this.props.history.push("/vip")
        store.dispatch({ type: "HIDDEN" })
    }
    toMyInfo() {
        if (store.getState().isLogin) {
            this.props.history.push("/myinfo")
            store.dispatch({ type: "HIDDEN" })
        }else{
            this.props.history.push("/mylogin")
            store.dispatch({ type: "HIDDEN" })
        }
    }
    toChange() {
        if (store.getState().isLogin) {
            this.props.history.push("/change")
            store.dispatch({ type: "HIDDEN" })
        }else{
            this.props.history.push("/mylogin")
            store.dispatch({ type: "HIDDEN" })
        }
    }
    toCustomer() {
        this.props.history.push("/customer")
        store.dispatch({ type: "HIDDEN" })
    }
    toLogin() {
        this.props.history.push("/mylogin")
        store.dispatch({ type: "HIDDEN" })
    }
    render() {
        return (
            <div className="mine-center">
                <div className="mine-header">
                    <img src={mineUrl} className="mineImg"></img>
                    个人中心
                </div>
                <div className="toMycar">
                    <span className="mycar-left">我的订单</span>
                    <div>
                        <Icon className="icon-right" type="right" />
                        <span className="mycar-right">全部订单</span>
                    </div>
                </div>
                <div className="Mycar-body">
                    <div className="Mycar-body-item">
                        <img src={imgUrl1}></img>
                        <p>代付款</p>
                    </div>
                    <div className="Mycar-body-item">
                        <img src={imgUrl2}></img>
                        <p>待收货</p>
                    </div>
                    <div className="Mycar-body-item">
                        <img src={imgUrl3}></img>
                        <p>售后</p>
                    </div>
                </div>
                <div className="ui-line"></div>
                <div className="mine-list" onClick={this.toVip.bind(this)}>
                    <img src={imgUrl4} className="mine-list-img"></img>
                    <div className="mine-list-right">
                        <span>会员中心</span>
                        <Icon className="icon-right" type="right" />
                    </div>
                </div>
                <div className="mine-list" onClick={this.toMyInfo.bind(this)}>
                    <img src={imgUrl5} className="mine-list-img"></img>
                    <div className="mine-list-right">
                        <span>个人资料</span>
                        <Icon className="icon-right" type="right" />
                    </div>
                </div>
                <div className="ui-line"></div>
                <div className="mine-list" onClick={this.toChange.bind(this)}>
                    <img src={imgUrl6} className="mine-list-img"></img>
                    <div className="mine-list-right">
                        <span>修改密码</span>
                        <Icon className="icon-right" type="right" />
                    </div>
                </div>
                <div className="mine-list" onClick={this.toCustomer.bind(this)}>
                    <img src={imgUrl7} className="mine-list-img"></img>
                    <div className="mine-list-right">
                        <span>联系客服</span>
                        <Icon className="icon-right" type="right" />
                    </div>
                </div>
                <div className6="ui-line"></div>
                {!store.getState().isLogin && <div className="mine-list" onClick={this.toLogin.bind(this)}>
                    <img src={imgUrl8} className="mine-list-img"></img>
                    <div className="mine-list-right">
                        <span>登录注册</span>
                        <Icon className="icon-right" type="right" />
                    </div>
                </div>
                }
            </div>

        )
    }
}

export default MinePage;