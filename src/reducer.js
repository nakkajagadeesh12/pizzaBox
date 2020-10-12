import { INCREMENT_BY, DECREMENT_BY } from "./constants.js";

const initialState = {
  count: {
    small: 0,
    medium: 1,
    large: 0,
    adults: 1,
    children: 0,
  },
};
const reducer = (state = initialState, action) => {
  let type = action.data;
  let updateType = "";
  let count = state.count;
  switch (action.type) {
    case INCREMENT_BY:
      let incBy = 1;
      if (type === "adults" || type === "children") {
        updateType = type === "adults" ? "medium" : "small";
      } else {
        console.log(count[type]);
        updateType = type === "small" ? "children" : "adults";
        incBy = type === "large" ? 2 : 1;
      }
      return {
        ...state,
        count: {
          ...count,
          [type]: count[type] + 1,
          [updateType]: count[updateType] + incBy,
        },
      };
    case DECREMENT_BY:
        let decBy = 1;
      if (type === "adults" || type === "children") {
        updateType = type === "adults" ? "medium" : "small";
      } else {
        updateType = type === "small" ? "children" : "adults";
        decBy = type === "large" ? 2 : 1;
      }
      return { ...state, count: {
        ...count,
        [type]: count[type] - 1,
        [updateType]: count[updateType] - decBy,
      } };
    default:
      return state;
  }
};

export { reducer };
