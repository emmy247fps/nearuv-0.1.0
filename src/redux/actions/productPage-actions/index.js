import { templateDisplay } from "../../constants";

export const pDTemplateSwitch = info => dispatchAction => {
  window.localStorage.setItem('pdTemplate', info)
 dispatchAction({
     type: templateDisplay.DISPLAY_FILTER_TEMPLATE_SUCCESS,
     payload: info
 })

 dispatchAction({
  type: templateDisplay.DISPLAY_NAVIGATION_TEMPLATE_SUCCESS,
  payload: info
})

dispatchAction({
 type: templateDisplay.DISPLAY_SEARCH_TEMPLATE_SUCCESS,
 payload: info
})

dispatchAction({
 type: templateDisplay.DISPLAY_SELLERS_TEMPLATE_SUCCESS,
 payload: info
})
}