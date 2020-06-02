import React from "react";
import Axios from "axios";
import "./mystyle.css"
import Myitem_shop from "./my_items"
import store from "../../store/store";
import '../../css/GoodsDetail.css';
import { Icon } from 'antd-mobile';
class ShopcarPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myImg_database:[],
            AllPrice:0,
            changedata:0,
            my_img_lem:0
            
        }
    }
    componentWillMount(){
        Axios.get("http://localhost:7001/GetCar?userName="+localStorage.name).then((res)=>{
            
            let m=0 ;
            console.log(res.data)
            for (let index = 0; index < res.data.length; index++) {
                m = m +res.data[index].price
                
            }
            this.setState({
                myImg_database:res.data,
                AllPrice: m,
                my_img_lem:res.data.length
            })
            
        }).catch((err)=>{
            console.log(err)
            
        })
    }
    
    fn(data){
        this.setState({
            AllPrice:this.state.AllPrice+data
        })
    }
    fm(data1){
        this.setState({
            my_img_lem:data1
        })
    }
    /********************* */
    //页面数据更新重新做网络请求渲染
    componentWillUpdate(){
        Axios.get("http://localhost:7001/GetCar?userName="+localStorage.name).then((res)=>{
            
            let m=0 ;
            
            this.setState({
                myImg_database:res.data,
               
                my_img_lem:res.data.length
            })
            
        }).catch((err)=>{
            console.log(err)
            
        })
    }
    /******************/
    
    render(){
        
            if(this.state.my_img_lem==0) {
                return(
                    <div>
                        <div className='back' onClick={() => {
                            this.props.history.go(-1);
                            store.dispatch({ type: "SHOW" })
                        }}>
                        <Icon type='left' />
                        </div>
                        <div>购物车空空如也，赶紧去买东西吧</div>
                    </div>
                )
            }else{
                console.log(this.state.AllPrice)
                return(
                    <div>
                        <div className='back' onClick={() => {
                            this.props.history.go(-1);
                            store.dispatch({ type: "SHOW" })
                        }}>
                        <Icon type='left' />
                        </div>
                        {this.state.myImg_database.map((item,index)=>{
                            
                            return (
                               
                                <Myitem_shop myitem={item} myindex={index} key={index}  pfn={this.fn.bind(this)} myLen={this.state.my_img_lem} pfm={ this.fm.bind(this)} />
                                    )
                        })}
                        <div className="myAll_price">
                            {"总价为："+this.state.AllPrice}
                            <button className="mybtn">结算</button>
                            </div>
                    </div>
                )
                
                }
                
            
        
    }
}

export default ShopcarPage;