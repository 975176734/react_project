import React from "react";
import axios from "axios";
import Lunbo from "../../components/Lunbo";
import './Scenery.css'

class Scenery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            SceneryData: [
                { id: 1, bag: 'http://img1.imgtn.bdimg.com/it/u=1074615169,3892956088&fm=26&gp=0.jpg' },
                { id: 2, bag: 'http://img5.imgtn.bdimg.com/it/u=2030496574,4228276781&fm=26&gp=0.jpg' },
                { id: 3, bag: 'http://img2.imgtn.bdimg.com/it/u=3313838802,2768404782&fm=26&gp=0.jpg' },
                { id: 4, bag: 'http://img1.imgtn.bdimg.com/it/u=1419680109,1976069404&fm=26&gp=0.jpg' }
            ],
            goodsList: []
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:7001/RelatedImages?species=" + this.props.species)
            .then(response => {
                this.setState({
                    goodsList: response.data
                })
                console.log(response,'444444')
            })
            .catch(err => {
                console.error(err)
            })
    }
    goGoodsDetail(gid){
        this.props.myprops.history.push("/goodsdetail?id=" + gid);
        // store.dispatch({ type: "HIDDEN" })
    }
    render() {
        return (
            < div className='scenery'>
                <Lunbo mydata={this.state.SceneryData} />
                <div className='mybox'>
                    {this.state.goodsList.map((item) => {
                        return <div key={item.id} className='itemBox' onClick={this.goGoodsDetail.bind(this,item.id)}>
                            <img src={item.src} />
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