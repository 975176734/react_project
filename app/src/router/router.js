import HomePage from "../pages/home";
import PicturePage from "../pages/Picture";
import VideoPage from "../pages/Video";
import ShopcarPage from "../pages/shopcar";
import MinePage from "../pages/mine";
import LoginPage from "../pages/login";
import GoodsDetail from "../components/GoodsDetail";

const router = [
    {
        path: "/",
        exact: true,
        component: HomePage,
        title: "首页"
    },
    {
        path: "/Picture",
        component: PicturePage,
        title: "图片"
    },
	{
	    path: "/Video",
	    component: VideoPage,
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
        path: "/login",
        component: LoginPage,
        title: "登录"
    },
    {
        path: "/goodsdetail",
        component: GoodsDetail,
        title: "商品详细信息"
    },
]

export default router;