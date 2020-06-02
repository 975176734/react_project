import React from "react";
import "../css/Search.css"
class Search extends React.Component{
    myclick(){
       window.location.href="http://localhost:3000/#/toSearch"
    }
    render() {
        return(
            <div className="mybox666" onClick={this.myclick.bind(this)}>
                <span>
                    <img src={require("../assets/img/搜索.png")}/>
                </span>

                <div>
                    搜索商品名称
                </div>
            </div>
        )
    }
}
export default Search;