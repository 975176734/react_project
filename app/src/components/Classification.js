import React from 'react'
import '../css/Classification.css'
class Classification extends React.Component {
    render() {
        return (
            <div className='Classification'>              
                {
                    this.props.ClassifiData.map((item, index) => {
                        return (<div key={index} className='classItem'>                 
                            <div onClick={this.props.goclassifiPage.bind(this,item.types)}>
                                <img src={item.imgsrc} alt=''></img>  
                                {/* <img src={require('../assets/img/QQ.svg')}/>                    */}
                                <div>{item.types}</div>                               
                            </div>
                        </div>)
                    })
                }

            </div>
        )
    }
}
export default Classification