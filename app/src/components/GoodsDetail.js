import React from "react";
import axios from "axios";
import getparams from "../assets/utils/getparams";
import '../css/GoodsDetail.css';
import { Icon } from 'antd-mobile';
import store from "../store/store";
import BaseLink from "./BaseLink";
class GoodsDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goodsdetail: [],
            relatedImg: []
        }

    }
    componentDidMount() {
        window.scrollTo(0, 0)
        let id = getparams(this.props.location.search).search.gid
        axios.get("http://127.0.0.1:7001/GoodsDetail?id=" + id)
            .then(response => {
                this.setState({
                    goodsdetail: response.data[0],
                    imgsrc:response.data[0].src

                })
            })
            .catch(err => {
                console.error(err);
            });


        let species = getparams(this.props.location.search).search.species
        axios.get("http://127.0.0.1:7001/RelatedImages?species=" + species)
            .then(response => {
                this.setState({
                    relatedImg: response.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }
    refresh(obj) {
        window.scrollTo(0, 0)
        this.setState({
            goodsdetail:obj
        })
    }
    //加入购物车按钮
    addCar(param){
        // console.log('点击添加到购物车,此为商品id=',param)
        console.log(store.getState().isLogin)
        if(store.getState().isLogin){
            //已经登录
            let myinfo = {username:localStorage.username,itemID:param}
            axios.get(`http://localhost:7001/AddToCar?userName=${localStorage.name}&itemID=${param}`).then(
                (res)=>{
                    console.log(res)
                    alert(res.data.info)
                }
            ).catch(
                (err)=>{
                    console.log(err)
                    alert(err)
            })
        }else{
            alert("请登录")
        }
        
    }
    render() {
        return (
            <div className='GoodsDetail'>
                <div className='detailBox'>

                    <div className='back' onClick={() => {
                        this.props.history.go(-1);
                        store.dispatch({ type: "SHOW" })
                    }}>
                        <Icon type='left' />
                    </div>

                    <div className='goodsbox'>
                        <img alt="" src={this.state.goodsdetail.src} />
                        <p>￥{this.state.goodsdetail.price}</p>
                        <p>{this.state.goodsdetail.name}</p>
                        <p>{this.state.goodsdetail.species}</p>
                        <button className='addCar' onClick={this.addCar.bind(this,this.state.goodsdetail.id)}>加入购物车</button>
                    </div>
                </div>
                <div className='bag'>
                 
                <div className='recommend'>—— 类似推荐 ——</div>
                <div className='relatedImg'>

                    {this.state.relatedImg.map((item, index) => {
                        return <div key={index} className='item_box' onClick={this.refresh.bind(this,item)}>
                            <img alt="图片" src={item.src} />
                            <p className='title2'>{item.name}</p>
                            <p className='myprice2'>￥{item.price}</p>
                            <button className='buy2' >立即购买</button>
                        </div>
                    })}

                </div>
                   
                </div>
                <BaseLink></BaseLink>
            </div>
        )
    }
}

export default GoodsDetail;