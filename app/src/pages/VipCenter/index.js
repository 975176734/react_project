import React from "react";
import { NavBar, Icon } from 'antd-mobile';
import store from "../../store/store";
import "../../css/VipCenter/VipCenter.css"
class VipCenter extends React.Component {
    //会员中心
    render() {
        return (
            <div className="VipCenter">
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => {
                        this.props.history.go(-1)
                        store.dispatch({type: "SHOW"})
                    }}
                    rightContent={[
                        // <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}
                >会员中心</NavBar>
                <div className="VipCenter-body">
                    您未开通会员
                </div>
            </div>
        )
    }
}

export default VipCenter;