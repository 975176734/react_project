import React from "react";
import GoodsItem from "../../components/GoodsItem";
import axios from "axios";

import store from "../../store/store";

import "./index.css";
//首页
class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            goodsList: []
        }
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:7001/goods")
            .then(response => {
                this.setState({
                    goodsList: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleclick(gid) {
        this.props.history.push("/goodsdetail?gid=" + gid);
        store.dispatch({type: "HIDDEN"})
    }

    render() {
        return (
            <div>
                <h2>主页</h2>
                <div className="goods-box">
                   {
                       this.state.goodsList.map((item, index) => {
                           return <GoodsItem 
                                click={this.handleclick.bind(this)}
                                key={index}
                                all={item}
                               />
                       })
                   }
                </div>
            </div>
        )
    }
}

export default HomePage;