import React from "react";
import { Drawer, List, NavBar, Icon } from 'antd-mobile';
import "../../css/media/media.css"
import Axios from "axios";
class MediaPage extends React.Component {
    //视频页面
    state = {
        docked: true,
        selected: 0,
        ItemArr: [],
        play: false
    }
    onDock = (d) => {
        this.setState({
            [d]: !this.state[d],
        });
    }
    select(num, item) {
        this.setState({
            selected: num
        });
        if (item === "推荐") {
            Axios.get(`http://127.0.0.1:7001/getMedia`)
                .then(res => {
                    this.setState({
                        ItemArr: res.data
                    })
                })
        }
        Axios.get(`http://127.0.0.1:7001/SearchMedia?keywords=${item}`)
            .then(res => {
                this.setState({
                    ItemArr: res.data
                })
            })
    }
    play(e) {
        if (this.state.play) {
            e.target.pause()
            this.setState({
                play: false
            })
        } else {
            e.target.play()
            this.setState({
                play: true
            })
        }
    }
    componentDidMount() {
        Axios.get(`http://127.0.0.1:7001/getMedia`)
            .then(res => {
                this.setState({
                    ItemArr: res.data
                })
            })
    }
    render() {
        const ListArr = ["推荐", "自然", "动物", "运动", "旅游", "建筑", "航拍", "水下", "极限运动", "自然", "动物", "运动", "旅游", "建筑", "航拍", "水下", "极限运动", "自然", "动物", "运动", "旅游", "建筑", "航拍", "水下", "极限运动"]
        const sidebar = (<div>
            {ListArr.map((item, index) => {
                return (<li key={index} onClick={this.select.bind(this, index, ListArr[index])} className={this.state.selected === index ? "selected " : "list"}
                >{item}</li>);
            })}
        </div>);
        return (
            <div style={{ height: '100%' }}>
                <NavBar>
                    视频
                </NavBar>
                <Drawer
                    className="my-drawer"
                    style={{ minHeight: document.documentElement.clientHeight }}
                    contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42, backgroundColor: '#FFFFFF' }}
                    sidebarStyle={{ border: '0' }}
                    sidebar={sidebar}
                    docked={this.state.docked}
                >
                    <div className="category_title">
                        <span>{ListArr[this.state.selected]}</span>
                    </div>
                    {this.state.ItemArr.map((item, index) => {
                        return (
                            <div className="category_item">
                                <div className="category_item_name">{item.name}</div>
                                <video width="200px" height="100px" onClick={this.play.bind(this)} src={item.src}></video>
                            </div>
                        )
                    })}

                </Drawer>
            </div>
        )
    }
}

export default MediaPage;