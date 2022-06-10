import {lazy} from 'react'
const largeScreenPath = './large-screens-important'
const mobileScreenPath = './small-screen-important'

const  Home = lazy(()=> import('./all-screens/Home'));
const  DesktopCategoryMenu = lazy(()=> import(`${largeScreenPath}/SubHeader`));
const  ProductListPage = lazy(()=> import(`${largeScreenPath}/ProductListPage`));
const  PlayerPage = lazy(()=> import(`${largeScreenPath}/PlayerPage`));
const  Header = lazy(()=>import(`${largeScreenPath}/Header`));
const  Sidebar = lazy(()=>import(`${largeScreenPath}/Sidebar`));
const  MobileCategoryMenu = lazy(()=> import(`${mobileScreenPath}/MobileCategoryMenu`));
const  MobileFooterMenu = lazy(()=> import(`${mobileScreenPath}/MobileFooterMenu`));
const  CommentLayout = lazy(()=> import(`./CommentLayout`));


export {
    Home,
    DesktopCategoryMenu,
    Header,
    Sidebar,
    MobileCategoryMenu,
    MobileFooterMenu,
    ProductListPage,
    PlayerPage,
    CommentLayout
};
