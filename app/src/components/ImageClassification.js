import React from "react";
import '../css/ImageClassification.css'
class ImageClassification extends React.Component {
    // constructor(props){
    //     super(props)
    //     console.log(props,'000')
    // }
    render(){
        return(
            <div className='myBox'>
                <div className='boxItem'>
                    {this.props.bag.map((item,index)=>{
                        return <div key={index} className='myitem' onClick={this.props.goclassifiPage.bind(this,item.title)}>
                            <div className='logo'>图片</div>
                            <img alt='' src={item.bagSrc}>
                            </img>
                            <div className='title'>{item.title}</div>
                        </div>
                    })}

                </div>

            </div>
        )
    }
}

export default ImageClassification;