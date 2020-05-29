import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import { List, TextareaItem, Button, WhiteSpace ,Toast} from 'antd-mobile';
import { Modal} from 'antd-mobile';
import { createForm } from 'rc-form';
import store from "../../store/store";
import "../../css/CustomerService/CustomerService.css"

const alert = Modal.alert;
class CustomerService extends React.Component {
    //客服中心页面
    state = {
        value: "",
        value2: "",
    }
    //提交数据
    mysubmit() {
        if(this.props.form.getFieldsValue().title.length==0){
            Toast.fail('请输入标题', 1);
        }
        if(this.props.form.getFieldsValue().opinion.length==0){
            Toast.fail('请输入内容', 1);
        }
        else{
            console.log(this.props.form.getFieldsValue())
            this.props.form.resetFields()
            Toast.success('感谢您的反馈，我们会尽快给您答复', 2);
        }
    }
    complaint(){
        Toast.success('联系人工客服', 2);
    }
    render() {
        const { getFieldProps } = this.props.form;
        return (
            <div className="CustomerService">
                <NavBar
                    mode="light"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.go(-1)
                        store.dispatch({type: "SHOW"})
                    }}
                    rightContent={[
                    ]}
                >客服中心</NavBar>
                <div className="CustomerService-body">
                    <div>
                        <List renderHeader={() => '反馈意见'}>
                            <TextareaItem
                                {...getFieldProps('title', {
                                    initialValue: this.state.value,
                                })}
                                title="标题"
                                placeholder="请输入需要咨询的问题"
                                data-seed="logId"
                                ref={el => this.autoFocusInst = el}
                                autoHeight
                            />
                        </List>
                        <List renderHeader={() => '具体内容'}>
                            <TextareaItem
                                {...getFieldProps('opinion', {
                                    initialValue: this.state.value2,
                                })}
                                placeholder="请输入需要反馈的具体内容"
                                rows={5}
                                count={100}
                            />
                        </List>
                        <Button
                            type="primary"
                            onClick={() =>
                                alert('提示', '确定提交吗???', [
                                    { text: 'Cancel', onPress: () => console.log("cancel") },
                                    { text: 'Ok', onPress: this.mysubmit.bind(this) },
                                ])
                            }
                        >
                            提交
                        </Button>
                        <p className="human-title">如果您急需解决问题,可以选择我们的人工客服通道</p>
                        <Button type="primary" onClick={this.complaint.bind(this)}>人工客服</Button><WhiteSpace />
                    </div>
                </div>
            </div>
        )
    }
}

export default createForm()(CustomerService);