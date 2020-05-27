import React from "react";
import axios from "axios";
import Lunbo from "../../components/Lunbo";
import './Food.css'

class Scenery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Slideshow: [
                { id: 1, bag: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3738682196,3719071227&fm=26&gp=0.jpg' },
                { id: 2, bag: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3368360457,3097777087&fm=26&gp=0.jpg' },
                { id: 3, bag: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3288722113,2814942024&fm=26&gp=0.jpg' },
                { id: 4, bag: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3965831567,797745749&fm=26&gp=0.jpg' }
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
                <Lunbo mydata={this.state.Slideshow} />
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