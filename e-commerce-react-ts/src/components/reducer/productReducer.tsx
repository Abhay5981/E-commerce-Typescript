const ProductReducer = (state: any, action: { type: any; paylode: any[]; payload: any; }) =>{
   
    

                    switch (action.type) {
                        case "SET_LOADING":
                          return {
                            ...state,
                            isLoading: true,
                            isError: false,
                          };
                        case "SET_API_DATA":
                          return {
                            ...state,
                            isLoading: false,
                            products: action.payload,
                          };
                        case "API_ERROR":
                          return {
                            ...state,
                            isLoading: false,
                            isError: true,
                          };
                        case "SET_SINGLE_LOADING":
                          return {
                            ...state,
                            isSingleLoading: true,
                            isError: false,
                          };
                        case "SET_SINGLE_PRODUCT":
                          return {
                            ...state,
                            isSingleLoading: false,
                            SingleProduct: action.payload,
                          };
                        case "SET_SINGLE_ERROR":
                          return {
                            ...state,
                            isSingleLoading: false,
                            isError: true,
                          };
                        default:
                          return state;
                      }
                    };
export default ProductReducer;