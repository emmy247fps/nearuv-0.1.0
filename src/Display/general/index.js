import {lazy} from 'react'
const largeScreenPath = './large-screens-important'
const mobileScreenPath = './small-screen-important'

const  Home = lazy(()=> import('./all-screens/Home'));
const  DesktopCategoryMenu = lazy(()=> import(`${largeScreenPath}/SubHeader`));
const  ProductListPage = lazy(()=> import('./all-screens/ProductListPage'));
const  PlayerPage = lazy(()=> import(`${largeScreenPath}/PlayerPage`));
const  Header = lazy(()=>import(`${largeScreenPath}/Header`));
const  Sidebar = lazy(()=>import(`${largeScreenPath}/Sidebar`));
const  MobileCategoryMenu = lazy(()=> import(`${mobileScreenPath}/MobileCategoryMenu`));
const  MobileFooterMenu = lazy(()=> import(`${mobileScreenPath}/MobileFooterMenu`));
const  CommentLayout = lazy(()=> import(`./CommentLayout`));
const  ItemDetailPage = lazy(()=> import('./all-screens/ItemDetailPage'));
const GlobalStoreProductInfo = lazy(() => import ('../../comp-files/GlobalProductStoreInfoCanvas'))
const  ProductDetailsPage = lazy(()=> import('./all-screens/ProductDetailsPage'));
const  ProfilePage = lazy(()=> import('./all-screens/ProfilePage'));

export {
    Home,
    DesktopCategoryMenu,
    Header,
    Sidebar,
    MobileCategoryMenu,
    MobileFooterMenu,
    ProductListPage,
    PlayerPage,
    CommentLayout,
    ItemDetailPage,
    GlobalStoreProductInfo,
    ProductDetailsPage,
    ProfilePage
};
