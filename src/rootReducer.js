import {
  combineReducers
} from 'redux';

import user from "./reducers/user";
import organisme from "./reducers/organisme";

export default combineReducers({
  user,
  organisme
});