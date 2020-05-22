const defaultState = {
    isLogin: false,
    isHidden: false
}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'SIGN_IN': //登录成功，状态修改为true
            state.isLogin = true;
            break;
        case 'SIGN_OUT': //退出登录，状态修改为false
            state.isLogin = false;
            break;
        case 'HIDDEN':
            state.isHidden = true;
            break;
        case "SHOW":
            state.isHidden = false;
            break; 
    
        default:
            break;
    }

    return state;
}

export default reducer;