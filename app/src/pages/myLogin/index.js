import React from "react";
import store from "../../store/store";
import { List, InputItem, WhiteSpace, Toast } from 'antd-mobile';
import { Button, WingBlank } from 'antd-mobile';
import { createForm } from 'rc-form';
import viewImg from "../../assets/img/view.png"
import view_offImg from "../../assets/img/view_off.png"
import logoImg from "../../assets/img/logo-cat.png"
import "../../css/myLogin/myLogin.css"
import axios from "axios";
class LoginPage extends React.Component {
    //登录界面
    state = {
        view: false,
        type: "password",
        name: "",
        password: "",
    }
    changView() {
        if (this.state.view === false) {
            this.setState({
                view: true,
                type: "text"
            })
        } else {
            this.setState({
                view: false,
                type: "password"
            })
        }
    }
    login() {
        if (this.props.form.getFieldsValue().name.length === 0) {
            Toast.fail('用户名不能为空', 1);
        } else if (this.props.form.getFieldsValue().password.length === 0) {
            Toast.fail('密码不能为空', 1);
        } else {
            axios.post(`http://127.0.0.1:7001/login`, { name: `${this.props.form.getFieldsValue().name}`, password: `${this.props.form.getFieldsValue().password}` })
                .then(res=>{
                    if(res.data.code===4004){
                        Toast.fail(res.data.info, 2);
                    }else if(res.data.code===2000){
                        Toast.success(res.data.info, 2,()=>{
                            this.props.history.go(-1)
                            store.dispatch({type: "SHOW"})
                            store.dispatch({type: "SIGN_IN"})
                            localStorage.name = `${this.props.form.getFieldsValue().name}`;
                        });
                    }
                })
        }
    }
    toRegister() {
        this.props.history.push("/register")
        store.dispatch({ type: "HIDDEN" })
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="LoginPage">
                <div className="Logo">
                    <img src={logoImg}></img>
                </div>
                <div className="login-title">
                    账号登录
                </div>
                <div className="login-body">
                    <List>
                        <InputItem
                            {...getFieldProps('name',
                                {
                                    initialValue: this.state.name,
                                })}
                            placeholder="用户名"
                        />
                        <InputItem
                            {...getFieldProps('password',
                                {
                                    initialValue: this.state.password,
                                })}
                            type={this.state.type}
                            placeholder="密码"
                            ref="password"
                        ></InputItem>
                    </List>
                    {this.state.view ? (<img className="password-isview" onClick={this.changView.bind(this)} src={viewImg}></img>) : (<img className="password-isview" onClick={this.changView.bind(this)} src={view_offImg}></img>)}
                </div>
                <Button type="primary" className="login-btn" onClick={this.login.bind(this)}>登录</Button><WhiteSpace />
                <Button className="reg-btn" onClick={this.toRegister.bind(this)}>没有账号？</Button><WhiteSpace />
            </div>
        )
    }
}

export default createForm()(LoginPage);