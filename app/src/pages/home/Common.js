import React from "react";
import axios from "axios";
import store from "../../store/store";

class Animal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            goodsList:[],
            mylogo:'https://m.360buyimg.com/babel/jfs/t1/88482/12/8411/17294/5e0478f8E0033d54b/c72ba549122c4777.png',
            bagCloor:{}
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:7001/RelatedImages?species=" + this.props.species)
            .then(response => {
                this.setState({
                    goodsList: response.data
                })
            })
            if (this.props.species==='动物') {
                this.setState({                 
                    mylogo:'https://m.360buyimg.com/babel/jfs/t1/94123/1/14728/14710/5e69f0fcEa9c4a3e1/bbbbe6d58924372c.png'
                }) 
            }
    }
    handleclick(obj) {
        let id=obj.id
        let species=obj.species
        this.props.myprops.history.push(`/goodsdetail?gid=${id}&species=${species}`);
        store.dispatch({ type: "HIDDEN" })
    }
    render(){
        return(
            <div className='Animal' style={this.state.bagCloor}>
                <img className='mylogo' src={this.state.mylogo} alt=''></img>
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

export default Animal;