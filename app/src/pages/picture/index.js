import React from "react";
import MyNavBar from '../../components/MyNavBar';
import ImageClassification from '../../components/ImageClassification';
import SwitchPlate from "../../components/SwitchPlate";
class PicturePage extends React.Component {
    constructor(props){
        super(props)
        this.state={
           
        }
        this.NavBarTitle='图片';
        this.bag=[
            {title:'动物',bagSrc:'https://q-extra.paixin.com/admin/1589882593625.png?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim'},
            {title:'鲜花',bagSrc:'http://img0.imgtn.bdimg.com/it/u=2613579054,727183770&fm=26&gp=0.jpg'},
            {title:'城市',bagSrc:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2122411378,4198694459&fm=26&gp=0.jpg'},
            {title:'建筑',bagSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3206714392,2653167697&fm=26&gp=0.jpg'},
            {title:'自然风景',bagSrc:'https://q-extra.paixin.com/admin/1588845010464.png?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim'},
            {title:'餐饮美食',bagSrc:'http://images.gaga.me/insets/2018/1205/e535c0768f3df10d.jpg?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim'},
            {title:'建筑',bagSrc:'https://q-extra.paixin.com/admin/1588844965663.png?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim'},
            {title:'人物情感',bagSrc:'https://q-extra.paixin.com/admin/1589857374868.png?imageMogr2/sharpen/1|imageView2/2/interlace/1/w/400/h/400|imageslim'}

        ]
        this.tabs = [
            { title: '正版图片' },
            { title: '设计素材' }
        ]
    }
    goclassifiPage(species){
        this.props.history.push('/myGoodsItemShow?types=' + species);
        console.log("去分类页面传参",species)
    }
    render(){
        return(
            <div>
                <MyNavBar myprops={this.props} NavBarTitle={this.NavBarTitle}></MyNavBar>
                <ImageClassification bag={this.bag} goclassifiPage={this.goclassifiPage.bind(this)}></ImageClassification>
                <SwitchPlate tabs={this.tabs} myprops={this.props}></SwitchPlate>
            </div>
        )
    }
}

export default PicturePage;