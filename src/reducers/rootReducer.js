import { ADD_LINK_ACTION, DELETE_LINK_ACTION } from "../actions/action";
import { combineReducers } from "redux";

const initialState = {
  linkList: [],
};

const linkReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LINK_ACTION:
      let newList = [...state.linkList];
      newList.push(action.link);
      return { ...state, linkList: newList };
    case DELETE_LINK_ACTION:
      return;
    case "LOAD_LINKS":
      return { ...state, linkList: action.list };
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  linkStore: linkReducer,
});
