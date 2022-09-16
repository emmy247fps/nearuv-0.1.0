import {lazy} from 'react'
const largeScreenPath = './large-screens-important'
const mobileScreenPath = './small-screen-important'

const  CommentPage = lazy(()=> import(`${mobileScreenPath}/CommentPage`));
const MobileComment = lazy(() => import(`${mobileScreenPath}/MobileComment`));
const MobileProductListPage = lazy(() => import(`${mobileScreenPath}/MobileProductListPage`));

export {
    CommentPage,
    MobileComment,
    MobileProductListPage
};
