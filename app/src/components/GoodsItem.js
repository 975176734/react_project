import React from "react";
import "../css/GoodsItem.css";
//商品组件
class GoodsItem extends React.Component {
    render() {
        return (
            <div className="goodsitem-box" onClick={this.props.click.bind(this,this.props.all.id)}>
                <img alt="" src={this.props.all.src} />
                <p>{this.props.all.name}</p>
                <p>{this.props.all.price}</p>
            </div>
        )
    }
}

export default GoodsItem;