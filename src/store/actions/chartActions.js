export const SET_FOOD = "SET_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";

export const setFood = (food) => {
  return {
    type: SET_FOOD,
    payload: { food },
  };
};

export const deleteFood = (id) => {
  return {
    type: DELETE_FOOD,
    payload: {id}
  }
}
