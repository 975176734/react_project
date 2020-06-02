import React from "react";

import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
// import myButton from './myButton';

class SearchBarExample extends React.Component {
  state = {
    myvalue: '美食',
  };
  componentDidMount() {
    this.autoFocusInst.focus();
  }
  onChange= (value) => {
      console.log(value)
    this.setState({ myvalue:value });
  };
  clear = () => {
    this.setState({ value: '' });
  };
  handleClick = () => {
    this.manualFocusInst.focus();
  }
  toPicPage(){
    switch(this.state.myvalue){
        case '鲜花':
        case '动物':
        case '汽车交通':
        case '风景':
        case '室内家具':
        case '建筑':
        case '餐饮美食':
        case '自然风景':
        case '人物感情':
        case '城市':this.props.history.push('/myGoodsItemShow?types=' + this.state.myvalue);break
        default : alert("该内容不存在")
    }
  }
  render() {
    return (<div>
      
      
      <WhiteSpace />
      <WingBlank><div className="sub-title">try yourself to search somthing you want!</div></WingBlank>
      <SearchBar placeholder="Enter搜索" ref={ref => this.autoFocusInst = ref} onChange={this.onChange.bind(this)}/>
      <Button type="primary" onClick={this.toPicPage.bind(this)}>toSearch</Button><WhiteSpace />
      <WhiteSpace />
      <WingBlank><div className="sub-title">关键词：鲜花、动物、城市、风景、室内家具...</div></WingBlank>
       
    </div>);
  }
}

export default SearchBarExample;