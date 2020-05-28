import React from "react";
import axios from "axios";
import store from "../../store/store";
import Lunbo from "../../components/Lunbo";
class Scenery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            goodsList: [],
            Slideshow:[]
        }
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:7001/RelatedImages?species=" + this.props.species)
            .then(response => {
                this.setState({
                    goodsList: response.data,
                    Slideshow:[
                        { id: 1, bag:response.data[1].src },
                        { id: 2, bag: response.data[1].src  },
                        { id: 3, bag: response.data[1].src },
                        { id: 4, bag: response.data[2].src }
                    ]
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
                <Lunbo mydata={this.state.Slideshow} />
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