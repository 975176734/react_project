import React from "react";
import axios from "axios";
import store from "../store/store";
import '../css/PictureShow.css'
class PictureShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            goodsList: [],
            logoImg:''
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:7001/getpictures?str=" + this.props.mytabs)
            .then(response => {
                this.setState({
                    goodsList: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
            if (this.props.mytabs==='DESC') {
                this.setState({
                    logoImg:'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5668ceaa38558bd7b5fcfb4c68e95ea4.jpg?thumb=1&w=720&h=76'
                })           
            }else if (this.props.mytabs==='ASC') {
                this.setState({
                    logoImg:'https://i8.mifile.cn/v1/a1/72411ddf-3df9-8d3a-7e5d-9429991710dc.webp'
                }) 
            }

    }
    handleclick(obj) {
        let id=obj.id
        let species=obj.species
        this.props.myprops.history.push(`/goodsdetail?gid=${id}&species=${species}`);
        store.dispatch({ type: "HIDDEN" })
    }
    render() {
        return (
            <div className='PictureShow1'>
               <img className='mylogo' alt='' src={this.state.logoImg} ></img>
                <div className="PictureShow">
                    {this.state.goodsList.map((item, index) => {
                        return <div key={index} className="goodsitem" onClick={this.handleclick.bind(this, item)}>
                            <div>
                                <img alt="图片" src={item.src} />
                                <p className='title1'>{item.name}</p>
                                <p className='myprice1'>￥{item.price}</p>
                                <button className='buy1'>立即购买</button>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        )
    }
}

export default PictureShow;