import React from "react";
import { TabBar } from 'antd-mobile';

import "../css/TabList.css";

import store from "../store/store";


class TabList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='tablist-box'>
            <div className="tablist">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={this.props.history.location.pathname === '/login'? true : store.getState().isHidden}
                >
                    <TabBar.Item
                        title="首页"
                        key="home"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                        }}
                        />
                        }
                        selected={this.props.history.location.pathname === '/'}
                        onPress={() => {
                            this.props.history.push("/");
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="图片"
                        key="picture"
                        selected={this.props.history.location.pathname === '/picture'}
                        onPress={() => {
                            this.props.history.push("/picture");
                        }}
                    >
                    </TabBar.Item>
					<TabBar.Item
					    icon={
					        <div style={{
					            width: '22px',
					            height: '22px',
					            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
					        }}
					        />
					    }
					    selectedIcon={
					        <div style={{
					            width: '22px',
					            height: '22px',
					            background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
					        }}
					        />
					    }
					    title="视频"
					    key="media"
					    selected={this.props.history.location.pathname === '/media'}
					    onPress={() => {
					        this.props.history.push("/media");
					    }}
					>
					</TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                        }
                        title="购物车"
                        key="shopcar"
                        selected={this.props.history.location.pathname === '/shopcar'}
                        onPress={() => {
                            this.props.history.push("/shopcar");
                            //点击购物车隐藏tabvar
                            store.getState().isHidden=true;
                        }}
                    >
                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="我的"
                        key="mine"
                        selected={this.props.history.location.pathname === '/mine'}
                        onPress={() => {
                            this.props.history.push("/mine");
                        }}
                    >
                    </TabBar.Item>
                </TabBar>
            </div>
            </div>
        )
    }
}

export default TabList;