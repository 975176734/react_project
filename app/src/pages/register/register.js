import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import { List, InputItem, Toast } from 'antd-mobile';
import { Button, WhiteSpace } from 'antd-mobile';
import { Modal } from 'antd-mobile';
import store from "../../store/store";
import logoURL from "../../assets/img/注册.png"
import "../../css/RegisterPage/RegisterPage.css"
import axios from "axios";
const alert = Modal.alert;
class RegisterPage extends React.Component {
    //注册页面
    state = {
        hasError1: false,
        hasError2: false,
        hasError3: false,
        value1: '',
        value2: '',
        value3: ""
    }
    Register() {
        alert('提示', '确定注册吗???', [
            { text: 'Cancel', onPress: () => console.log("cancel") },
            {
                text: 'Ok', onPress: () => {
                    if ((!this.state.hasError1) && (!this.state.hasError2) && (!this.state.hasError3)) {
                        if (this.state.value1.length == 0) {
                            Toast.fail('请输入用户名', 2);
                            this.setState({
                                hasError1: true,
                            })
                        } 
                        else {
                            if (this.state.value2 == this.state.value3) {
                                axios.post(`http://127.0.0.1:7001/Register`, { name: `${this.state.value1}`, password: `${this.state.value2}` })
                                    .then(res => {
                                        if (res.data.code == 4002) {
                                            Toast.fail(res.data.info, 2);
                                        } else if (res.data.code = 2000) {
                                            localStorage.name = this.state.value1;
                                            Toast.success(res.data.info, 2, () => {
                                                this.props.history.push("/addinfo")
                                                store.dispatch({type: "SIGN_IN"})
                                            });
                                        }
                                    })
                            } else {
                                Toast.fail("两次输入密码不一致", 2)
                                this.setState({
                                    hasError2: true,
                                    hasError3: true
                                })
                            }
                        }
                    } else {
                        Toast.fail('输入有误', 2);
                    }
                }
            },
        ])

    }
    changeReset() {
        this.setState({
            value1: '',
            value2: '',
            value3: "",
            hasError1: false,
            hasError2: false,
            hasError3: false,
        })
    }
    onErrorClick = () => {
        if (this.state.hasError1) {
            Toast.info('用户名长度应为3-11位');
        }
    }
    onErrorClick2 = () => {
        if (this.state.hasError2) {
            Toast.info('密码长度应为6-11位');
        }
    }
    onErrorClick3 = () => {
        if (this.state.hasError3) {
            Toast.info('密码长度应为6-11位');
        }
    }
    onChange = (value1) => {
        if (value1.replace(/\s/g, '').length > 11 || value1.replace(/\s/g, '').length < 3 || value1.replace(/\s/g, '').length == 0) {
            this.setState({
                hasError1: true,
            });
        } else {
            this.setState({
                hasError1: false,
            });
        }
        this.setState({
            value1,
        });
    }
    onChange2 = (value2) => {
        if (value2.replace(/\s/g, '').length > 11 || value2.replace(/\s/g, '').length < 6 || value2.replace(/\s/g, '').length == 0) {
            this.setState({
                hasError2: true,
            });
        } else {
            this.setState({
                hasError2: false,
            });
        }
        this.setState({
            value2,
        });
    }
    onChange3 = (value3) => {
        if (value3.replace(/\s/g, '').length > 11 || value3.replace(/\s/g, '').length < 6 || value3.replace(/\s/g, '').length == 0) {
            this.setState({
                hasError3: true,
            });
        }
        else {
            this.setState({
                hasError3: false,
            });
        }
        this.setState({
            value3,
        });
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="RegisterPage">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    leftContent="返回登录"
                    onLeftClick={() => {
                        this.props.history.go(-1)
                    }}
                ></NavBar>
                <div className="Register-logo">
                    <img src={logoURL}></img>
                </div>
                <div className="Register-title">
                    <h3>注册账号</h3>
                </div>
                <div className="Register-body">
                    <List>
                        <InputItem
                            type="text"
                            placeholder="请输入用户名"
                            error={this.state.hasError1}
                            onErrorClick={this.onErrorClick}
                            onChange={this.onChange}
                            value={this.state.value1}
                        >用户名</InputItem>
                        <InputItem
                            type="password"
                            placeholder="请输入密码"
                            error={this.state.hasError2}
                            onErrorClick={this.onErrorClick2}
                            onChange={this.onChange2}
                            value={this.state.value2}
                        >输入密码</InputItem>
                        <InputItem
                            type="password"
                            placeholder="确认输入的密码"
                            error={this.state.hasError3}
                            onErrorClick={this.onErrorClick3}
                            onChange={this.onChange3}
                            value={this.state.value3}
                        >确认密码</InputItem>
                    </List>
                    <div className="Register-submit">
                        <Button type="primary" onClick={this.Register.bind(this)}>点击注册</Button><WhiteSpace />
                        <Button type="primary" onClick={this.changeReset.bind(this)}>重置信息</Button><WhiteSpace />
                    </div>
                </div>
            </div>
        )
    }
}

export default createForm()(RegisterPage);