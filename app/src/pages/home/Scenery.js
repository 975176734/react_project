import React from "react";
import axios from "axios";
import store from "../../store/store";
import Lunbo from "../../components/Lunbo";
import './Scenery.css'

class Scenery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: []
        }
        this.Slideshow=[
            { id: 1, bag: 'http://img1.imgtn.bdimg.com/it/u=1074615169,3892956088&fm=26&gp=0.jpg' },
            { id: 2, bag: 'http://img5.imgtn.bdimg.com/it/u=2030496574,4228276781&fm=26&gp=0.jpg' },
            { id: 3, bag: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3965071570,1664745419&fm=26&gp=0.jpg' },
            { id: 4, bag: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2908571405,2903567050&fm=26&gp=0.jpg' }
        ]
    }
    componentDidUpdate() {
        axios.get("http://127.0.0.1:7001/RelatedImages?species=" + this.props.species)
            .then(response => {
                this.setState({
                    goodsList: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
    goGoodsDetail(obj) {
        let id=obj.id
        let species=obj.species
        this.props.myprops.history.push(`/goodsdetail?gid=${id}&species=${species}`);
        store.dispatch({ type: "HIDDEN" })
    }
    render() {
        return (
            < div className='scenery'>
                <Lunbo mydata={this.Slideshow} />
                <div className='mybox'>
                    {this.state.goodsList.map((item) => {
                        return <div key={item.id} className='itemBox' onClick={this.goGoodsDetail.bind(this,item)}>
                            <img src={item.src} alt='' />
                            <p className='name'>{item.name}</p>
                            <div className='samllBox'>
                            <p className='price'>￥{item.price}</p>
                            <p className='buy'>立即购买</p>
                            </div>                         
                        </div>
                    })}

                </div>

            </div >
        )
    }
}

export default Scenery;