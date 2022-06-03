import { lazy } from 'react';

const SlidingInfo = lazy(()=>import('./SlidingInfo'));
const TheAvatar = lazy (()=>import('./TheAvatar'));
const IconAvatar = lazy(()=>import('./IconAvatar'));


export {
    SlidingInfo,
    TheAvatar,
    IconAvatar
}