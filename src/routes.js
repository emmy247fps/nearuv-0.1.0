// import {react} from "react";
import {Home, ProductListPage, PlayerPage,ItemDetailPage} from "./Display/general";
import {CommentPage} from "./Display/private";

const allPages = {
  general: {
    Home,
    ProductListPage,
    PlayerPage,
    ItemDetailPage
  },
  private:{
    CommentPage
  }
};

const pubRoutes = [
  { path: "/", exact: true, name: "Home", element: allPages.general.Home },
  {path: "/product-store", name: "Product name", element: allPages.general.ProductListPage },
  {
    path: "/player-page",
    name: "Player page",
    element: allPages.general.PlayerPage,
  },
  {
    path: "/  item-detail-page",
    name: "  Item-page",
    element: allPages.general.ItemDetailPage,
  },
];

const privRoutes = [
  { path: "/", exact: true, name: "Home", element: allPages.general.Home },
  {path: "/:slug", name: "Product name", element: allPages.general.ProductListPage },
  {
    path: "/player-page",
    name: "Player page",
    element: allPages.general.PlayerPage,
  },
  {
    path: "/comment",
    name: "Comment Page",
    element: allPages.private.CommentPage,
  },
];

export { privRoutes, pubRoutes };
