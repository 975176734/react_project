import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import '../css/MyNavBar.css'

class MyNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            isshow: ''
        };
    }
    flag() {
        console.log("点击搜索")
        document.querySelector('.myBox1').style.display = 'none'
        document.querySelector('.mySearch').style.display = 'block'
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }
    handleclick() {
        this.props.myprops.history.push('/myGoodsItemShow?types=' + this.state.value);
    }
    back() {
        this.props.myprops.history.go(-1)
    }
    render() {
        return (
            <div className='MyNavBar'>
                <div className='myBox1' onClick={this.flag.bind(this)}>
                    <NavBar
                        mode="light"
                        icon={<Icon type="left" />}
                        onLeftClick={() => { this.props.myprops.history.go(-1) }}
                        rightContent={[
                            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                            <Icon key="1" type="ellipsis" />,
                        ]}
                    >
                        {this.props.NavBarTitle}
                    </NavBar>

                </div >
                <div className='mySearch'>
                    <div className='search'>
                        <div onClick={this.back.bind(this)}><Icon type="left" /></div>
                        <input placeholder='搜索图片类型' type='text' value={this.state.value} onChange={this.handleChange.bind(this)} />
                        <div onClick={this.handleclick.bind(this)}><Icon type="search" size='md' /></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default MyNavBar;