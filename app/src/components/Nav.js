import React from "react";
import '../css/Nav.css'


class Nav extends React.Component {
    constructor(props) {
        super(props)
        this.types=['风景','建筑','自然风光','美食','人物','鲜花','动物']
        

    }


    go() {
        this.props.myprops.history.push("/picture")
    }
    //点击跳转分类页面传参
    classFi(types,index){
        // this.props.myprops.history.push("/picture?types="+types)
        let arr=document.querySelectorAll(".navItem")
        for (let i = 0; i < arr.length; i++) {
            arr[i].style.color='gray'
            arr[i].style.border=0
           if (i===index) {
               arr[i].style.color='orangered'
               arr[i].style.borderBottom='0.08rem solid orangered'
           }           
        }
    }

    render() {
        return (
            <div className='box'>
                <ul className='nav'>           
                {this.types.map((item,index) => {
                    return <li key={index} className='navItem' onClick={this.classFi.bind(this,item,index)}>{item}</li>
                    
                })}
                 </ul>
                 
            </div>
        )
    }
}

export default Nav;