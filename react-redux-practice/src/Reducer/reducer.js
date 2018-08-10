import { combineReducers } from 'redux'
import {
  ADD_TODO
} from './../Actions/actions';



const todos = function (state = [], actions) {
  switch (actions.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: actions.information,
          completed: false
        }
      ];
      break;
    default:
      return state;
  }
};
export default todos;