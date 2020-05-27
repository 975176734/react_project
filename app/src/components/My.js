import React from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';
import Lunbo from './Lunbo'
import Classification from './Classification'

class My extends React.Component {
    constructor(props) {
        super(props)
        this.tabs = [
            { title: '风景' },
            { title: '美食' },
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
            {/* <p>{tab.title}</p>
            <div>我的内容</div> */}
            <div>
            {tab.title==='美食'?<Lunbo></Lunbo>:''}

            </div>
            

        </div>);
    
    render() {
        return (
            <div>
                <WhiteSpace />
                <Tabs onTabClick={() => { console.log() }} tabs={this.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />


            </div>
        )
    }
}

export default My;