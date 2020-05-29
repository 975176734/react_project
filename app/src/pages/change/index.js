import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import { List, InputItem, Toast } from 'antd-mobile';
import { Button, WhiteSpace } from 'antd-mobile';
import { Modal } from 'antd-mobile';
import store from "../../store/store";
import axios from "axios";
import "../../css/change/change.css"
const alert = Modal.alert;
class ChangePassword extends React.Component {
    //修改密码界面
    state = {
        hasError1: false,
        hasError2: false,
        hasError3: false,
        value1: '',
        value2: '',
        value3: ""
    }
    changePassword() {
        // 提示模态框
        alert('提示', '确定修改吗???', [
            { text: 'Cancel', onPress: () => console.log("cancel") },
            {
                text: 'Ok', onPress: () => {
                    if ((!this.state.hasError1) && (!this.state.hasError2) && (!this.state.hasError3)) {
                        if (this.state.value1.length == 0 || (this.state.value2.length == 0) || (this.state.value2.length == 0)) {
                            Toast.fail('输入有误', 2);
                            this.setState({
                                hasError1: true,
                                hasError2: true,
                                hasError3: true
                            })
                        } else {
                            if (this.state.value1 == this.state.value2) {
                                Toast.fail('新密码不能和原密码一样', 2);
                                this.setState({
                                    hasError1: true,
                                    hasError2: true,
                                    hasError3: true
                                })
                            } else {
                                if (this.state.value2 == this.state.value3) {
                                    axios.post(`http://127.0.0.1:7001/change`, { userName: `${localStorage.name}`, password: `${this.state.value2}` })
                                    .then(res=>{
                                       Toast.success("修改成功", 2)
                                       this.setState({
                                        value1: '',
                                        value2: '',
                                        value3: ""
                                    })
                                    })
                                } else {
                                    Toast.fail("两次输入密码不一致", 2)
                                    this.setState({
                                        hasError2: true,
                                        hasError3: true
                                    })
                                }
                            }
                        }
                    } else {
                        Toast.fail('输入有误', 2);
                    }
                }
            },
        ])

    }
    //重置表单
    changeReset() {
        this.setState({
            value1: '',
            value2: '',
            value3: ""
        })
    }
    //错误提示
    onErrorClick = () => {
        if (this.state.hasError1) {
            Toast.info('密码长度应为6-11位');
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
    //输入数据前端验证
    onChange = (value1) => {
        if (value1.replace(/\s/g, '').length > 11 || value1.replace(/\s/g, '').length < 6 || value1.replace(/\s/g, '').length == 0) {
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
            <div className="ChangePassword">
                {/* {顶部导航} */}
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.go(-1)
                        store.dispatch({type: "SHOW"})
                    }}
                >修改密码</NavBar>
                <div className="ChangePassword-body">
                    <h2>请设置密码</h2>
                    <List>
                        {/* {输入框组件} */}
                        <InputItem
                            type="password"
                            placeholder="请输入旧的密码"
                            error={this.state.hasError1}
                            onErrorClick={this.onErrorClick}
                            onChange={this.onChange}
                            value={this.state.value1}
                        >旧密码</InputItem>
                        <InputItem
                            type="password"
                            placeholder="请输入新的密码"
                            error={this.state.hasError2}
                            onErrorClick={this.onErrorClick2}
                            onChange={this.onChange2}
                            value={this.state.value2}
                        >新密码</InputItem>
                        <InputItem
                            type="password"
                            placeholder="请再次输入新的密码"
                            error={this.state.hasError3}
                            onErrorClick={this.onErrorClick3}
                            onChange={this.onChange3}
                            value={this.state.value3}
                        >再输入</InputItem>
                    </List>
                    <div className="ChangePassword-submit">
                        <Button onClick={this.changePassword.bind(this)}>确认修改</Button><WhiteSpace />
                        <Button onClick={this.changeReset.bind(this)}>重置修改</Button><WhiteSpace />
                    </div>
                </div>
            </div>
        )
    }
}

export default createForm()(ChangePassword);