import {lazy} from 'react'
const largeScreenPath = './large-screens-important'
const mobileScreenPath = './small-screen-important'

const  CommentPage = lazy(()=> import(`${mobileScreenPath}/CommentPage`));


export {
    CommentPage
};
