export const SET_FOOD = "SET_FOOD";

export const setFood = (food) => {
  return {
    type: SET_FOOD,
    payload: { food },
  };
};
