import React from 'react';
import {Route,Redirect} from 'react-router-dom';

import store from "../store/store"

export default function AuthRoute({ component:Component, ...rest }) {
    return (
        <Route {...rest} render={props =>
            Boolean(store.getState().isLogin) ? (
                <Component {...props} />
            ) : (
                <Redirect
                    to={{
                        pathname: "/mylogin",
                        state: { from: props.location }
                    }}
                />
            )
        }
        />
    );
}