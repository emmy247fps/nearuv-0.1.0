// import {react} from "react";
import { Home, ProductListPage, PlayerPage, ItemDetailPage, ProductDetailsPage, ProfilePage } from "./Display/general";
import {CommentPage} from "./Display/private";

const allPages = {
  general: {
    Home,
    ProductListPage,
    PlayerPage,
    ItemDetailPage,
    ProductDetailsPage,
    CommentPage,
    ProfilePage
  },
  private:{
    
  }
};

const pubRoutes = [
  { path: "/",  name: "Home", element: allPages.general.Home },
  {path: "/product-store", name: "Product name", element: allPages.general.ProductListPage },
  {
    path: "/player-page",
    name: "Player page", 

    element: allPages.general.PlayerPage,
  },
  {
    path: "/item-detail-page",
    name: "  Item-page",

    element: allPages.general.ItemDetailPage,
  },
  {
    path: "/p",
    name: "  product-page",
   
    element: allPages.general.ProductDetailsPage,
  },
  {
    path: "/comment",
    name: "Comment Page",
    element: allPages.general.CommentPage,
  },
   {
    path: "/profile",
    name: "profile Page",
    element: allPages.general.ProfilePage,
  },
];

const privRoutes = [
  { path: "/", name: "Home", element: allPages.general.Home },
  {path: "/:slug", name: "Product name", element: allPages.general.ProductListPage },
  {
    path: "/player-page",
    name: "Player page",
    element: allPages.general.PlayerPage,
  },

];

export { privRoutes, pubRoutes };
