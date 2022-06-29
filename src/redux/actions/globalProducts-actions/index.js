import Axios from "../../../utilities-config/axios";
import { globalProductConstant } from "../../constants";
import {products} from '../../../utilities'

export const getProductsBySlug = (slug) => async (dispatchAction) => {
  const dummyProduct = {
    price: 343,
    name: 'testing',
    description: 'testing description'
  }

  dispatchAction({
    type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_REQUEST,
    payload: { message: "Fetching data" },
  });
   dispatchAction({
         type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_SUCCESS,
         payload: {
           globalProducts: products,
           message: "Data fetched successfully",
         },
       });
//  dispatchAction({
//          type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_FAIL,
//          payload: { error: response.data.error },
//        });
  // const response = await Axios.get(`/global-products/${slug}`);

  // try {
  //   if (response.status === 200) {
  //     dispatchAction({
  //       type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_SUCCESS,
  //       payload: {
  //         globalProducts: response.data.globalProducts,
  //         message: "Data fetched successfully",
  //       },
  //     });
  //   } else if (response.status === 400)
  //     return dispatchAction({
  //       type: globalProductConstant.GET_GLOBALPRODUCT_BY_SLUG_FAIL,
  //       payload: { error: response.data.error },
  //     });
  // } catch (error) {
  //   console.log(error);
  // }
};

export const getGlobalStoreProductInfoBySlug =
  (slug) => async (dispatchAction) => {
    const response = await Axios.get(`/global-products/store/${slug}`);
    console.log(response);
    dispatchAction({
      type: globalProductConstant.GET_GLOBALSTOREPRODUCTINFO_BY_SLUG_REQUEST,
      payload: { message: "Fetching product information, please wait" },
    });

    try {
      if (response.status === 200) {
        dispatchAction({
          type: globalProductConstant.GET_GLOBALSTOREPRODUCTINFO_BY_SLUG_SUCCESS,
          payload: {
            sellers: response.data.sellers,
            productInfo: response.data.productInfo,
          },
        });
      } else if (response.status === 400)
        return dispatchAction({
          type: globalProductConstant.GET_GLOBALSTOREPRODUCTINFO_BY_SLUG_FAIL,
          payload: { error: response.data.error, message: "There is an error" },
        });
    } catch (error) {
      console.log(error);
    }
  };
