import { lazy } from 'react';

const SlidingInfo = lazy(()=>import('./SlidingInfo'));
const TheAvatar = lazy (()=>import('./TheAvatar'));
const IconAvatar = lazy(()=>import('./IconAvatar'));
const SearchIcon = lazy(()=>import('./SearchIcon'));


export {
    SlidingInfo,
    TheAvatar,
    IconAvatar,
    SearchIcon
}