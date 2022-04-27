import { SET_ERROR, SET_SUCCESS, SET_LOADING } from "../actionsType/Todo";

const initialState = {
  isLoading: false,
  isFail: false,
};

const requesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isFail: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
        isFail: false,
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        isFail: true,
      };
    default:
      return state;
  }
};

export default requesReducer;
