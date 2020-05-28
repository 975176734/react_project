import React from "react";
import GoodsItem from "../../components/GoodsItem";
import axios from "axios";
import store from "../../store/store";
import "./Recommended.css";
import Lunbo from "../../components/Lunbo";
import Classification from "../../components/Classification";
//首页
class Recommended extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goodsList: [],
           
        }
        this.Slideshow=[
            { id: 1, bag: 'https://d303.paixin.com/thumbs/10614052/294152776/staff_1024.jpg' },
            { id: 2, bag: 'https://d301.paixin.com/thumbs/1031062/121435340/staff_1024.jpg' },
            { id: 3, bag: 'https://d301.paixin.com/thumbs/3308451/105361790/staff_1024.jpg' },
            { id: 4, bag: 'https://d302.paixin.com/thumbs/2249091/166106316/staff_1024.jpg' }
        ]
        this.ClassifiData = [
            { types: '鲜花', imgsrc:require('../../assets/img/flower.png')},
            { types: '动物', imgsrc: require('../../assets/img/animal.png')},
            { types: '汽车交通',  imgsrc: require('../../assets/img/car.png') },
            { types: '人物情感',  imgsrc: require('../../assets/img/person.png')},
            { types: '城市',  imgsrc: require('../../assets/img/city.png')},
        ]
        this.ClassifiData2= [
            { types: '风景', imgsrc: require('../../assets/img/natural.png')},
            { types: '室内家具',  imgsrc: require('../../assets/img/shi.png')},
            { types: '建筑',  imgsrc: require('../../assets/img/building.png')},
            { types: '餐饮美食',  imgsrc: require('../../assets/img/food.png')},
            { types: '自然风景',  imgsrc: require('../../assets/img/scape.png')},
        ]
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:7001/goods?")
            .then(response => {
                this.setState({
                    goodsList: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }
    goclassifiPage(species) {
        this.props.myprops.history.push('/myGoodsItemShow?types=' + species);
    }
    handleclick(obj) {
        let id=obj.id
        let species=obj.species
        this.props.myprops.history.push(`/goodsdetail?gid=${id}&species=${species}`);
        store.dispatch({ type: "HIDDEN" })
    }
    render() {
        return (
            < div className='mybag'>
                <Lunbo mydata={this.Slideshow} />
                <Classification ClassifiData={this.ClassifiData} goclassifiPage={this.goclassifiPage.bind(this)} />
                <Classification ClassifiData={this.ClassifiData2} goclassifiPage={this.goclassifiPage.bind(this)} />
                <div className="goods-box">
                    {
                        this.state.goodsList.map((item, index) => {
                            return <GoodsItem
                                click={this.handleclick.bind(this)}
                                key={index}
                                all={item}
                            />
                        })
                    }
                </div>
            </div >
        )
    }
}

export default Recommended;