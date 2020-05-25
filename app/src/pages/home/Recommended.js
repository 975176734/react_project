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
            Slideshow: [
                { id: 1, bag: 'https://d303.paixin.com/thumbs/10614052/294152776/staff_1024.jpg' },
                { id: 2, bag: 'https://d301.paixin.com/thumbs/1031062/121435340/staff_1024.jpg' },
                { id: 3, bag: 'https://d301.paixin.com/thumbs/3308451/105361790/staff_1024.jpg' },
                { id: 4, bag: 'https://d302.paixin.com/thumbs/2249091/166106316/staff_1024.jpg' }
            ]
        }
        this.ClassifiData = [
            { types: '秒杀', imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152' },
            { types: '小米', imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152' },
            { types: '秒杀', imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152' },
            { types: '小米', imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152' },
            { types: '秒杀', imgsrc: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?thumb=1&w=144&h=152' }
        ]
    }

    componentDidMount() {
        axios.get("http://127.0.0.1:7001/goods?species=" + this.props.species)
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
    goclassifiPage(types) {
        this.props.myprops.history.push('/picture?types=' + types);
    }
    handleclick(gid) {
        this.props.myprops.history.push("/goodsdetail?id=" + gid);
        store.dispatch({ type: "HIDDEN" })
    }
    render() {
        return (
            < div >
                <Lunbo mydata={this.state.Slideshow} />
                <Classification ClassifiData={this.ClassifiData} goclassifiPage={this.goclassifiPage.bind(this)} />
                <Classification ClassifiData={this.ClassifiData} goclassifiPage={this.goclassifiPage.bind(this)} />
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