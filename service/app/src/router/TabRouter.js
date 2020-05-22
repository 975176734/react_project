import React from "react";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import router from "./router";
import AuthRouter from "../components/AuthRouter";

import TabList from "../components/TabList";


class TabRouter extends React.Component {
    render() {
        return(
            // 路由容器：所有的Route与Link这些组件都要放置在内部
            <Router> 
                <div>
                    <Route path="/" component={TabList}></Route>
                    <Switch>
                    {
                        router.map((route, index) => {
                            
                            if(route.auth) {
                                return <AuthRouter 
                                    key={index} 
                                    path={route.path}
                                    exact={route.exact}
                                    component={route.component}
                                ></AuthRouter>
                            } else {
                                return <Route 
                                key={index} 
                                path={route.path}
                                exact={route.exact}
                                component={route.component}
                            ></Route>
                            }
                            
                        })
                    }
                    
                    </Switch>
                    {/* <TabList /> */}
                </div>

                
            </Router>
        )
    }
}
export default TabRouter;