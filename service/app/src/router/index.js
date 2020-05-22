import React from "react";
import {HashRouter as Router, Route} from "react-router-dom";

import TabList from "../components/TabList";

import HomePage from "../pages/home";
import SortPage from "../pages/sort";
import ShopcarPage from "../pages/shopcar";
import MinePage from "../pages/mine";
import LoginPage from "../pages/login";


class MyRouter extends React.Component {
    render() {
        return(
            // 路由容器：所有的Route与Link这些组件都要放置在内部
            <Router> 
                <div>
                    <Route path="/" exact component={HomePage}></Route>
                    
                    <Route path="/sort" component={SortPage}></Route>
                
                    <Route path="/shopcar" component={ShopcarPage}></Route>

                    <Route path="/mine" component={MinePage}></Route>

                    <Route path="/login" component={LoginPage}></Route>

                </div>

                <TabList />
            </Router>
        )
    }
}
export default MyRouter;