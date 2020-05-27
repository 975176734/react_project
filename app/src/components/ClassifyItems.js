import React from "react";
import { Grid } from 'antd-mobile';
import "../css/classifyItem.css";

const mypic = [
  {title:"猫咪",pic:"http://icweiliimg9.pstatp.com/weili/sm/268061080957485289.webp"},
  {title:"风景",pic:"http://img95.699pic.com/photo/50075/6464.jpg_wh300.jpg"},
  {title:"建筑",pic:"http://img95.699pic.com/photo/50039/0777.jpg_wh300.jpg"},
  {title:"人物",pic:"http://img95.699pic.com/photo/50045/7707.jpg_wh300.jpg"},
  {title:"科技",pic:"http://img95.699pic.com/photo/40050/9314.jpg_wh300.jpg"},
  {title:"美食",pic:"http://img95.699pic.com/photo/50054/1457.jpg_wh300.jpg"}
]

const data = Array.from(mypic).map((_val, i) => ({
  icon: _val.pic,
  text: _val.title,
}));



//箭头函数不需要return
function ClassifyItems (props)  {
  console.log(props.myprops);


  return(
  <div>
    
    <Grid data={data} columnNum={3} onClick={(el, number)=> {
      console.log(el, number)
      props.myprops.history.push("/myGoodsItemShow?title="+el.text)
    }}/>
    {/* <button onClick={props.xxx.bind(null, data[0].text)}>点击</button> */}
  </div>
  )
}

export default ClassifyItems;
