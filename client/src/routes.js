import Admin from "./pages/Admin";
import AboutPage from "./pages/AboutPage";
import Auth from "./pages/Auth";
import Basket from "./pages/Basket";
import GroupPage from "./pages/GroupPage";
import Shop from "./pages/Shop";


import { ADMIN_ROUTE, ABOUT_ROUTE, BASKET_ROUTE, GROUP_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, CHILD_ROUTE } from "./utils/consts";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: CHILD_ROUTE + '/:id',
        Component: Shop
    },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: GROUP_ROUTE + '/:id',
        Component: GroupPage
    },
    {
        path: ABOUT_ROUTE,
        Component: AboutPage
    },
]

