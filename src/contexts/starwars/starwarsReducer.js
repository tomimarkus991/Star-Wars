import { GET_PAGE } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      break;
  }
};
