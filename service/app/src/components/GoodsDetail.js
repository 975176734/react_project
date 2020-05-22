import React from "react";
import axios from "axios";
import getparams from "../assets/utils/getparams";

import store from "../store/store";

// 商品详情页：根据商品id从服务器获取商品详细信息
class GoodsDetail extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props)

        this.state = {
            goodsdetail: {}
        }
    }

    componentDidMount() {

        let id = getparams(this.props.location.search).search.id
        console.log("id---", id);

        axios.get("http://127.0.0.1:7001/SimilarImg?id="+id)
            .then(response => {
                this.setState({
                    goodsdetail: response.data[0]
                    
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <div>
                <h2>商品详细信息页面</h2>
                <button onClick={()=> {
                    this.props.history.go(-1);
                    store.dispatch({type: "SHOW"})
                }}>返回</button>
                <div>
                    <h2>{this.state.goodsdetail.gid}</h2>
                    <img alt="" src={this.state.goodsdetail.src} />
                    <p>{this.state.goodsdetail.name}</p>
                    <p>{this.state.goodsdetail.price}</p>
                </div>
            </div>
        )
    }
}

export default GoodsDetail;