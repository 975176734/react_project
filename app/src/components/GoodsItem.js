import React from "react";
import "../css/GoodsItem.css";

class GoodsItem extends React.Component {
    
    render() {
        return (
            <div className="goodsitem-box" onClick={this.props.click.bind(this,this.props.all.id)}>
                <img alt="图片" src={this.props.all.src} />
                <p className='title'>{this.props.all.name}</p>
                <p className='myprice'>￥{this.props.all.price}</p>
                <button className='buy'>立即购买</button>
            </div>
        )
    }
}

export default GoodsItem;