import { lazy } from "react";

const CardHeader = lazy(()=>import('./CardHeader'))
const Loading = lazy(()=>import('./Loading'))
const PrivateRoute = lazy(()=>import('./PrivateRoute'))
const PageAnimate = lazy(()=>import('./PageAnimate'))


export{
    CardHeader,
    Loading,
    PrivateRoute,
    PageAnimate
}