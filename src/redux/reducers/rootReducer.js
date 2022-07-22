// import { combineReducers } from "redux";
import {
  sidebarReducer,
  sideMenuContentReducer,
  topMenuDataReducer,
} from "./canvas";

import {
  videoReducer,
  categoryReducer,
  globalProductReducer,
  getGlobalStoreProductInfoBySlugReducer,
  pDTemplateSwitchReducer
} from "../reducers";

const reducer = {
  selectedGlobalItem: getGlobalStoreProductInfoBySlugReducer,
  category: categoryReducer,
  video: videoReducer,
  globalProduct: globalProductReducer,
  sidebar: sidebarReducer,
  sideMenuContent: sideMenuContentReducer,
  topMenuData: topMenuDataReducer,
  pDTemplateSwitch: pDTemplateSwitchReducer

};

export default reducer;
