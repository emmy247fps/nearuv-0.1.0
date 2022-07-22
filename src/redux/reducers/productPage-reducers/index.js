import initState from "../../state";
import { templateDisplay } from "../../constants"

export const pDTemplateSwitchReducer = (state = initState.pDTemplateSwitch, dispatchAction) => {
 switch (dispatchAction.type) {
  case templateDisplay.DISPLAY_FILTER_TEMPLATE_LOADING:
   return {
    ...state,
    loading: true
   }

  case templateDisplay.DISPLAY_FILTER_TEMPLATE_SUCCESS:
   return {
    ...state,
    display: dispatchAction.payload,
    loading: false
   }


  case templateDisplay.DISPLAY_NAVIGATION_TEMPLATE_LOADING:
   return {
    ...state,
    loading: true
   }

  case templateDisplay.DISPLAY_NAVIGATION_TEMPLATE_SUCCESS:
   return {
    ...state,
    display: dispatchAction.payload,
    loading: false
   }


  case templateDisplay.DISPLAY_SEARCH_TEMPLATE_LOADING:
   return {
    ...state,
    loading: true
   }

  case templateDisplay.DISPLAY_SEARCH_TEMPLATE_SUCCESS:
   return {
    ...state,
    display: dispatchAction.payload,
    loading: false
   }


  case templateDisplay.DISPLAY_SELLERS_TEMPLATE_LOADING:
   return {
    ...state,
    loading: true
   }

  case templateDisplay.DISPLAY_SELLERS_TEMPLATE_SUCCESS:
   return {
    ...state,
    display: dispatchAction.payload,
    loading: false
   }
  default: return state;
 }


}