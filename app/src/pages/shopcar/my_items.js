import React from "react";
import "./mystyle.css"
import Axios from "axios";

class my_items extends React.Component {
   constructor(props){
        super(props);
        this.state={
            numV:1,
            // isDel: true,
            my_len:this.props.myLen
        }
   }
   //数量加
   add(price){
        
    this.setState({
        numV:this.state.numV+=1

    })
    this.props.pfn(price)
    

}
//数量减
decrease(price){
    
    if(this.state.numV<=0){
        this.setState({
            numV:0
        })
        this.props.pfn(0)
    }else{
        this.setState({
            numV:this.state.numV-=1
        })
        this.props.pfn(-price)
    }

}
//删除购物车某一项
delete_one(id,price,num,index){
    if(this.state.my_len>0){
        
        Axios.get(`http://localhost:7001/RemoveItem?itemID=${id}&userName=${localStorage.name}`).then(()=>{
            this.props.pfn(-price*num)
            this.setState({
                // isDel:false,
                my_len:this.state.my_len-=1
            })
            this.props.pfm(this.state.my_len)
        })
        
       
    }else if(this.state.my_len==0){
        this.props.pfm(this.state.my_len)
    }
}
   

    render(){
        return(
            //  this.state.isDel &&(
        <div key={this.props.myindex} className="mybox_xxx">
            <img src={this.props.myitem.src} />
            <p>{this.props.myitem.name}</p>
            <p className="myprice_777">{"价格" + this.props.myitem.price}</p>
            <div className="anniu">
                <button onClick={this.decrease.bind(this,this.props.myitem.price)}>-</button>
                <span>{this.state.numV}</span>
                <button onClick={this.add.bind(this,this.props.myitem.price)}>+</button>
            </div>
            <div className="my_delete" onClick={this.delete_one.bind(this,this.props.myitem.id,this.props.myitem.price,this.state.numV)}>
                <img src={require('../../assets/img/delete.png')}/>
            </div>
        </div>
            //  )
        )
    }
}

export default my_items;