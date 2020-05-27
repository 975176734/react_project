import React from "react";
import "./index.css";
import axios from "axios";
<<<<<<< HEAD
import ClassifyItems from "../../components/ClassifyItems";
import store from "../../store/store";

import "./index.css";
=======
import Lunbo from "../../components/Lunbo";
import Recommended from './Recommended'
import Scenery from './Scenery'
import Food from './Food'

import { Tabs, WhiteSpace } from 'antd-mobile';
>>>>>>> 1dfbe5029a70aeffff531dd9acd4f282876cd193
//首页
class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            goodsList: []
        }
        this.tabs = [
            { title: '推荐' },
            { title: '自然风景' },
            { title: '餐饮美食' },
            { title: '建筑' },
            { title: '鲜花' },
            { title: '动物' },
            { title: '自然景观' },
            { title: '城市' },
            { title: '人物' },
            { title: '运动' },
        ];
    }
<<<<<<< HEAD

    componentDidMount() {
        axios.get("http://127.0.0.1:7001/goods")
            .then(response => {
                this.setState({
                    goodsList: response.data
                })
            })
            .catch(err => {
                console.error(err)
            })
    }

    handleclick(gid) {
        this.props.history.push("/goodsdetail?id=" + gid);
        store.dispatch({type: "HIDDEN"})
    }

    handleTitle(text) {
        console.log(text)
    }
    
=======
    renderContent = tab =>
        (<div>
            <div>
                {tab.title === '推荐' ? <Recommended myprops={this.props} species={tab.title}></Recommended> : ''}
                {tab.title === '自然风景' ? <Scenery myprops={this.props} species={tab.title}></Scenery> : ''}
                {tab.title === '餐饮美食' ? <Food myprops={this.props} species={tab.title}></Food> : ''}
                
            </div>
        </div>);
>>>>>>> 1dfbe5029a70aeffff531dd9acd4f282876cd193
    render() {
        console.log(this.props)
        return (
<<<<<<< HEAD
            <div>
                <h2>主页</h2>
                {/* <ClassifyItems  xxx={this.handleTitle.bind(this)}/> */}
                <ClassifyItems myprops={this.props}/>
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
=======
            < div >
           
                <div className='nav'>
                    <WhiteSpace />
                    <Tabs onTabClick={() => { console.log() }} tabs={this.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        {this.renderContent}
                    </Tabs>
                    <WhiteSpace />
>>>>>>> 1dfbe5029a70aeffff531dd9acd4f282876cd193
                </div>
            </div >
        )
    }
}

export default HomePage;