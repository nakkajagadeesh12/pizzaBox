import { INCREMENT_BY, DECREMENT_BY } from "./constants.js";

const decrementAction = (data) => {
  return {
    type: DECREMENT_BY,
    data,
  };
};

const incrementAction = (data) => {
  return {
    type: INCREMENT_BY,
    data,
  };
};

export { decrementAction, incrementAction };
