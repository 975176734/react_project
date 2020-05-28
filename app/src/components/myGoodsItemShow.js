import React from "react";
import Axios from "axios";
import  '../css/detail_box.css'
import store from "../store/store";
import getparams from "../assets/utils/getparams";

class myGoodsItemShow extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
               myPicInfo:[]
        }
    }

    componentDidMount(){
        let types = getparams(this.props.location.search).search.types
        Axios.get(`http://localhost:7001/getimg?species=${types}`).then((res)=>{
            this.setState({myPicInfo: this.state.myPicInfo=[...res.data]});
        }).catch((err)=>{
            console.log(err)
        })
    }
    click(obj){
        let id=obj.id
        let species=obj.species
        this.props.history.push(`/goodsdetail?gid=${id}&species=${species}`);
        store.dispatch({ type: "HIDDEN" })
    }
    render() {
         return (
             <div className="detail_box">
                 {this.state.myPicInfo.map((item,index)=>{
                    // <img src={item.src}/>
                    return(
                    <div className="detail_items" key={index}>
                        <img src={item.src} key={index} /> 
                        <p>{item.describes}</p>
                        <p>描述：{item.name}</p>
                        <button className='buy3' onClick={this.click.bind(this,item)}>立即购买</button>
                    </div>
                    )
                   
                 })}
             </div>
         )
         
    }
}

export default myGoodsItemShow;