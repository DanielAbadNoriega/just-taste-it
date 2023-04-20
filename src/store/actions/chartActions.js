export const SET_FOOD = "SET_FOOD";
export const INCREMENT_FOOD = "INCREMENT_FOOD";
export const DECREMENT_FOOD = "DECREMENT_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";

export const setFood = ({ name, img, price }) => {
  return {
    type: SET_FOOD,
    payload: {
      name,
      img,
      price
    },
  };
};
export const incrementFood = (name) => {
  return {
    type: INCREMENT_FOOD,
    payload: {
      name,
    },
  };
};

export const decrementFood = (name) => {
  return {
    type: DECREMENT_FOOD,
    payload: {
      name,
    },
  };
};

export const deleteFood = (name) => {
  return {
    type: DELETE_FOOD,
    payload: {
      name,
    },
  };
};
