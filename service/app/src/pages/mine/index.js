import React from "react";
import store from "../../store/store";

class MinePage extends React.Component {

    // componentDidMount() {
    //     // 订阅更新
    //     store.subscribe(this.changeStore.bind(this));
    // }

    // changeStore() {
    //     this.setState(store.getState())
    // }

    goLoginPage() {
        this.props.history.push("/login")
        store.dispatch({type: "HIDDEN"})
    }

    render(){
        return(
            <div>
                个人中心
                <h2>{String(store.getState().isLogin)}</h2>
                {/* 通过条件渲染显示不同的组件：
                当用户登录成功后，显示用户名和安全退出按钮
                否则，显示登录按钮 */}
                {
                    store.getState().isLogin 
                        ? 
                        <div>
                            <h2>{localStorage['username']}</h2>
                            <button onClick={() => {
                                localStorage.clear();
                                // 分发动作
                                store.dispatch({type: "SIGN_OUT"})
                                this.props.history.replace("/mine")
                            }}>安全退出</button>
                        </div>
                        : 
                        <button onClick={this.goLoginPage.bind(this)}>登录/注册</button>
                
                }
                
                
            
                
            </div>
            
        )
    }
}

export default MinePage;