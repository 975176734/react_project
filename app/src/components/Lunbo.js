import React from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import '../css/Lunbo.css'

class GoodsItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            imgHeight: 176,
          }
    }   
    render() {
        return (
            <div className='Lunbo'> 
                <WingBlank>
                    <Carousel
                        autoplay={true}
                        infinite
                        autoplayInterval='1000'
                        // beforeChange={this.before.bind(this)}
                        // afterChange={index => console.log('slide to', index)}
                    >
                        {this.props.mydata.map((val) => (
                            <a
                                key={val.id}
                                href=" "
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                            >
                                <img
                                    src={val.bag}
                                    alt=""
                                    style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                                    // onLoad={() => {
                                    //     // fire window resize event to change height
                                    //     window.dispatchEvent(new Event('resize'));
                                    //     this.setState({ imgHeight: 'auto' });
                                    // }}
                                />
                            </a>
                        ))}
                    </Carousel>
                </WingBlank>


            </div>
        )
    }
}

export default GoodsItem;