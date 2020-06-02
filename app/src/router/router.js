import HomePage from "../pages/home";
import PicturePage from "../pages/picture";
import MediaPage from "../pages/media"
import ShopcarPage from "../pages/shopcar";
import MinePage from "../pages/mine";
import LoginPage from "../pages/myLogin";
import GoodsDetail from "../components/GoodsDetail";
import myGoodsItemShow from '../components/myGoodsItemShow'
import VipCenter from "../pages/VipCenter"
import MyInfoPage from "../pages/myinfo";
import ChangePassword from "../pages/change";
import CustomerService from "../pages/CustomerService"
import RegisterPage from "../pages/register/register";
import AddInfoPage from "../pages/AddInfoPage"
import toSearch from "../pages/search/search"
const router = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        title: "首页"
    },
    {
        path: "/picture",
        component: PicturePage,
        title: "图片"
    },
	{
	    path: "/media",
	    component: MediaPage,
	    title: "视频"
	},
    {
        path: "/shopcar",
        component: ShopcarPage,
        title: "购物车",
        auth: true
    },
    {
        path: "/mine",
        component: MinePage,
        title: "我的"
    },
    {
        path: "/goodsdetail",
        component: GoodsDetail,
        title: "商品详细信息"
    },
    {
        path:"/myGoodsItemShow",
        component:myGoodsItemShow,
        title:"图片类型跳转"
    },
    {
        path:"/vip",
        component: VipCenter,
        title: "会员中心"
    },
    {
        path:"/myinfo",
        component: MyInfoPage,
        title: "会员中心"
    },
    {
        path:"/change",
        component: ChangePassword,
        title: "修改密码"
    },
    {
        path:"/customer",
        component: CustomerService,
        title: "联系客服"
    },
    {
        path:"/mylogin",
        component: LoginPage,
        title: "登录"
    },
    {
        path:"/register",
        component: RegisterPage,
        title: "注册"
    },
    {
        path:"/addinfo",
        component: AddInfoPage,
        title: "添加个人信息"
    },
    {
        path:"/toSearch",
        component:toSearch,
        title:"搜素页"
    }
    
]

export default router;