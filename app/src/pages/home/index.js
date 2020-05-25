import React from "react";
import "./index.css";
import axios from "axios";
import Lunbo from "../../components/Lunbo";
import Recommended from './Recommended'
import Scenery from './Scenery'
import Food from './Food'

import { Tabs, WhiteSpace } from 'antd-mobile';
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
    renderContent = tab =>
        (<div>
            <div>
                {tab.title === '推荐' ? <Recommended myprops={this.props} species={tab.title}></Recommended> : ''}
                {tab.title === '自然风景' ? <Scenery myprops={this.props} species={tab.title}></Scenery> : ''}
                {tab.title === '餐饮美食' ? <Food myprops={this.props} species={tab.title}></Food> : ''}
                
            </div>
        </div>);
    render() {
        return (
            < div >
           
                <div className='nav'>
                    <WhiteSpace />
                    <Tabs onTabClick={() => { console.log() }} tabs={this.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                        {this.renderContent}
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div >
        )
    }
}

export default HomePage;