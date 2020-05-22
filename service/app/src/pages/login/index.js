import React from "react";
import axios from "axios";
import { Toast } from "antd-mobile";
// import 'antd-mobile/lib/toast/style/css';

import store from "../../store/store";

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            passwd: ''
        }
    }

    // componentDidMount() {
    //     // 当直接输入地址访问此页面，底部的TabBar会使用初始值显示，这个操作是为了隐藏TabBar
    //     store.dispatch({type: "HIDDEN"})
    // }
   
    loginIn() {
        console.log("登录。。。", this.state);
        if (this.state.username.match(/^\s*$/)) {
            Toast.info("用户名不能为空", 1);
            return;
        }

        if (this.state.passwd.match(/^\s*$/)) {
            Toast.info("密码不能为空", 1);
            return;
        }

        axios.post("http://106.52.104.212:8080/login", {
            username: this.state.username,
            passwd: this.state.passwd
        }).then(response => {
            // console.log(response);
            if (response.data.code === -1 || response.data.code === 0) {
                Toast.info(response.data.Msg, 1);
                return;
            } else {
                localStorage['username'] = this.state.username;

                store.dispatch({ type: "SIGN_IN" })
                store.dispatch({type: "SHOW"})

                this.props.history.goBack();
            }

        }).catch(err => {

        })
    }

    render() {
        return (
            <div>
                <button onClick={() => {
                    this.props.history.go(-1);
                    store.dispatch({type: "SHOW"})
                }}>返回</button>
                <h2>登录页面</h2>
                <form onSubmit={this.loginIn.bind(this)}>
                    用户名: <input type="text" placeholder="电话/邮箱/ID" onChange={(e) => {
                        this.setState({
                            username: e.target.value
                        })
                    }} /> <br />

                密码: <input type="password" placeholder="密码" onChange={(e) => {
                        this.setState({
                            passwd: e.target.value
                        })
                    }} /> <br />
                    <input type="submit" value="登录" />
                </form>
            </div>

        )
    }
}

export default LoginPage;