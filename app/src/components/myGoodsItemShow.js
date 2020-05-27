import React from "react";
import Axios from "axios";
import  detail_box from '../css/detail_box.css'

class myGoodsItemShow extends React.Component  {

    constructor(props){

        super(props);

        this.state = {
               myPicInfo:[]
        }
    }

    componentDidMount(){
        console.log(this.props.location.search.split('?')[1].split('=')[1]);
        let a = this.props.location.search.split('?')[1].split('=')[1]
        Axios.get(`http://localhost:7001/getimg?keywords=${a}`).then((res)=>{
            // console.log(res.data)
            this.setState({myPicInfo: this.state.myPicInfo=[...res.data]});
            console.log(this.state.myPicInfo)
        }).catch((err)=>{
            console.log(err)
        })
    }

    render() {
         return (
             <div class="detail_box">
                 {this.state.myPicInfo.map((item,index)=>{
                    // <img src={item.src}/>
                    return(
                    <div class="detail_items">
                        <img src={item.src} key={index} /> 
                        <p>{item.describes}</p>
                        <p>描述：{item.name}</p>
                    </div>
                    )
                   
                 })}
             </div>
         )
         
    }
}

export default myGoodsItemShow;