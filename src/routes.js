import {react} from "react";
import {Home, ProductListPage, PlayerPage} from "./Display/general";

const allPages = {
  general: {
    Home,
    ProductListPage,
    PlayerPage
  }
};

const pubRoutes = [
  { path: "/", exact: true, name: "Home", element: allPages.general.Home },
  // {path: "/:slug", name: "Product name", element: allPages.general.ProductListPage },
  {
    path: "/player-page",
    name: "Player page",
    element: allPages.general.PlayerPage,
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
];

export { privRoutes, pubRoutes };
