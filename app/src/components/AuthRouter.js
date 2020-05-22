import React from 'react';
import {Route,Redirect} from 'react-router-dom';

import store from "../store/store"

// 路由验证
export default function AuthRoute({ component:Component, ...rest }) {
    return (
        <Route {...rest} render={props =>
            Boolean(store.getState().isLogin) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )
        }
        />
    );
}