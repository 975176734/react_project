import React from "react";
import '../css/BaseLink.css'
import QQ from '../assets/img/QQ.svg'
import phone from '../assets/img/phone.svg'
import weixin from '../assets/img/weixin.svg'
import help from '../assets/img/help.svg'

class BaseLink extends React.Component {
    constructor(props) {
        super(props)
        this.titleArr = [{
            text1: "探索与想法",
            text2: "公益基金",
            text3: "7MX摄影社区",
            text4: "授权说明"
        },
        {
            text1: "拍信研究院",
            text2: "关于拍信",
            text3: "加入我们",
            text4: "表扬我们"
        },
        {
            text1: "拍信社群",
            text2: "商务合作",
            text3: "摄影师签约",
            text4: "设计师签约"
        },
        {
            text1: "拍信工具",
            text2: "企业定制",
            text3: "我要供稿"
        }
        ]
        this.concat = [
            { imgsrc: QQ, types: 'QQ沟通', title: '快速套餐购买咨询' },
            { imgsrc: phone, types: 'QQ沟通', title: '快速套餐购买咨询' },
            { imgsrc: weixin, types: 'QQ沟通', title: '快速套餐购买咨询' },
            { imgsrc: help, types: 'QQ沟通', title: '快速套餐购买咨询' }
        ]

    }
    render() {
        return (
            <div className='BaseLink'>
                <h2>联系我们</h2>
                <div className='callme'>
                    {this.concat.map((item, index) => {
                        return <div key={index} className='call-box'>
                            <img alt='' src={item.imgsrc}></img>
                            <p>{item.types}</p>
                            <p>{item.title}</p>
                        </div>
                    })}
                </div>
                <div className='index__copybottom'>
                    <div className='index__left'>
                        <div>路上晴空</div>
                        <div>中国领先的视觉版权内容平台</div>
                        <div>200-9013-900</div>
                    </div>
                    <div className='index__right'>
                        {this.titleArr.map((item, index) => {
                            return <div className='index_item' key={index}>
                                <div className='itemSmall'>
                                    <div>{item.text1}</div>
                                    <div>{item.text2}</div>
                                    <div>{item.text3}</div>
                                    <div>{item.text4}</div>

                                </div>

                            </div>
                        })}
                    </div>
                </div>
                <div className='foot'>
                © 2017 成都路上晴空团队摄影图片网站 All Rights Reserved 
                <div>仅用于学习使用，不做任何商业用途</div>
                </div>
            </div >
        )
    }
}

export default BaseLink;