import React from "react";
import { Tabs, WhiteSpace } from 'antd-mobile';
import PictureShow from "./PictureShow";
class SwitchPlate extends React.Component {
    renderContent = tab =>
        (<div>
            <div>
            {tab.title===this.props.tabs[0].title?<PictureShow mytabs='DESC' myprops={this.props.myprops}></PictureShow>:''}
            {tab.title===this.props.tabs[1].title?<PictureShow mytabs='ASC' myprops={this.props.myprops}></PictureShow>:''}
            </div>
        </div>);   
    render() {
        return (
            <div>
                <WhiteSpace />
                <Tabs onTabClick={() => { console.log() }} tabs={this.props.tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={5} />}>
                    {this.renderContent}
                </Tabs>
                <WhiteSpace />
            </div>
        )
    }
}
export default SwitchPlate;