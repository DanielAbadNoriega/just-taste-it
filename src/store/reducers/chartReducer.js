import {
  DECREMENT_FOOD,
  DELETE_FOOD,
  INCREMENT_FOOD,
  SET_FOOD,
} from "../actions/chartActions";

let initialState = [];
/* let foodIds = [];
let randomId = () => {
  let newRandom = () => Math.floor(Math.random() * 9999999) - 1;
  let newId = newRandom();
  while (foodIds.includes(newId)) {
    newId = newRandom();
  }
  foodIds = [...foodIds, newId];
  return newId;
}; */

const setStateChart = (state, { name, img }) => {
  if (state.length === 0)
    return [
      ...state,
      {
        name,
        img,
        num: 1,
      },
    ];

  return state.some((food) => food.name === name)
    ? state.map((food) =>
        food.name === name
          ? {
              ...food,
              num: food.num + 1,
            }
          : food
      )
    : [
        ...state,
        {
          name,
          img,
          num: 1,
        },
      ];
};

const incrementFood = (state, name) => {
  return state.map((food) =>
    food.name === name
      ? {
          name: food.name,
          img: food.img,
          num: food.num + 1,
        }
      : food
  );
};

const decrementFood = (state, name) => {
  return state.map((food) =>
    food.name === name && food.num > 1
      ? {
          ...food,
          num: food.num - 1,
        }
      : food
  );
};

const removeFood = (state, name) => {
  return state.filter(food => food.name !== name);
}

export const chartReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FOOD:
      return setStateChart(state, action.payload);

    case INCREMENT_FOOD:
      return incrementFood(state, action.payload.name);

    case DECREMENT_FOOD:
      return decrementFood(state, action.payload.name);

    case DELETE_FOOD:
      return removeFood(state, action.payload.name);

    default:
      return state;
  }
};
