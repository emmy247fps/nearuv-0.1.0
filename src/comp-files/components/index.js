import { lazy } from 'react';

const SlidingInfo = lazy(()=>import('./SlidingInfo'));
const TheAvatar = lazy (()=>import('./TheAvatar'));
const IconAvatar = lazy(()=>import('./IconAvatar'));
const SearchIcon = lazy(()=>import('./SearchIcon'));
const MobileProductPageTopImageDetails = lazy(()=>import('./MobileProductPageTopImageDetails'));
const MobileProfile = lazy(()=>import('./MobileProfile'));
const DesktopProfile = lazy(()=>import('./DesktopProfile'));
const DesktopProductPageTopImageDetails = lazy(()=>import('./DesktopProductPageTopImageDetails'));
export {
    SlidingInfo,
    TheAvatar,
    IconAvatar,
    SearchIcon,
    MobileProductPageTopImageDetails,
    MobileProfile,
    DesktopProfile,
    DesktopProductPageTopImageDetails
}