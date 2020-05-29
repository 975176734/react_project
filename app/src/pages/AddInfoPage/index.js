import React from "react";
import { Button, List, InputItem, WhiteSpace, NavBar, Toast } from 'antd-mobile';
import { DatePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import store from "../../store/store";
import "../../css/MyInfoPage/MyInfoPage.css"
import { Radio, Flex } from 'antd-mobile';
import axios from "axios";
//引入日期选择组件
const nowTimeStamp = Date.now();
const now = new Date(nowTimeStamp);
const RadioItem = Radio.RadioItem;
// GMT is not currently observed in the UK. So use UTC now.
const utcNow = new Date(now.getTime() + (now.getTimezoneOffset() * 60000));

// Make sure that in `time` mode, the maxDate and minDate are within one day.
let minDate = new Date(nowTimeStamp - 1e7);
const maxDate = new Date(nowTimeStamp + 1e7);
// console.log(minDate, maxDate);
if (minDate.getDate() !== maxDate.getDate()) {
    // set the minDate to the 0 of maxDate
    minDate = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
}

function formatDate(date) {
    /* eslint no-confusing-arrow: 0 */
    const pad = n => n < 10 ? `0${n}` : n;
    const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
    const timeStr = `${pad(date.getHours())}:${pad(date.getMinutes())}`;
    return `${dateStr} ${timeStr}`;
}
class AddInfoPage extends React.Component {
    //添加个人信息界面
    state = {
        date: now,
        sign: "",
        value: 0,
        hasError:false
    }
    //返回个人中心
    goback() { 
        this.props.history.push('/mine')
        store.dispatch({type: "SHOW"})
    }
    //提交添加个人信息
    submitInfo() {
        if(!this.state.hasError){
            axios.post(`http://127.0.0.1:7001/addInfo`, { date: `${this.state.date}`, sign: `${this.state.sign}` ,sex:`${this.state.value}`,name:`${localStorage.name}`})
            .then(res=>{
                Toast.success("提交成功",1,()=>{
                    this.props.history.push("/mine")
                    store.dispatch({type: "SHOW"})
            })
            })
        }else{
            Toast.fail("个性签名字数应为20字以内",1)
        }
    }
    //提示错误
    onErrorClick = () => {
        if (this.state.hasError) {
            Toast.info('个性签名应在20字以内');
        }
    }
    //检测个性签名输入数据
    onChange = (sign) => {
        if (sign.replace(/\s/g, '').length > 20) {
            this.setState({
                hasError: true,
            });
        } else {
            this.setState({
                hasError: false,
            });
        }
        this.setState({
            sign
        });
    }
    //双向绑定数据
    onChange2 = (value) => {
        this.setState({
            value,
        });
    };
    render() {
        const { getFieldProps } = this.props.form;
        const { value } = this.state;
        const data = [
            { value: 0, label: '男' },
            { value: 1, label: '女' },
        ];
        return (
            <div className="MyInfoPage">
                {/* {顶部导航} */}
                <NavBar
                    mode="light"
                >完善资料</NavBar>
                <div className="MyInfoPage-body">
                    <List>
                        {/* {选择器组件} */}
                        <List renderHeader={() => '选择性别'}>
                            {data.map(i => (
                                <RadioItem key={i.value} checked={value === i.value} onChange={() => this.onChange2(i.value)}>
                                    {i.label}
                                </RadioItem>
                            ))}
                        </List>
                        {/* {选择日期组件} */}
                        <DatePicker
                            mode="date"
                            title="Select Date"
                            extra="Optional"
                            value={this.state.date}
                            minDate={new Date(1949, 1, 1, 0, 0, 0)}
                            maxDate={new Date(2020, 5, 30, 23, 59, 59)}
                            onChange={date => {
                                this.setState({ date })
                            }}
                        >
                            <List.Item arrow="horizontal">生日</List.Item>
                        </DatePicker>
                        {/* {输入框组件} */}
                        <InputItem
                            {...getFieldProps('mysign')}
                            clear
                            placeholder="20字以内"
                            error={this.state.hasError}
                            onErrorClick={this.onErrorClick}
                            onChange={this.onChange}
                            value={this.state.sign}
                            ref={el => this.autoFocusInst = el}
                        >个性签名</InputItem>
                        <Button type="primary" className="myinfo-submit" onClick={this.submitInfo.bind(this)}>提交</Button>
                        <Button type="primary" className="myinfo-submit" onClick={this.goback.bind(this)}>暂不完善</Button>
                    </List>
                </div>
            </div>
        )
    }
}

export default createForm()(AddInfoPage);