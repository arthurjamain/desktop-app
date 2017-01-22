// @flow
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../actions/navbar';

export default function sidebar(state, action) {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return true;
    case CLOSE_SIDEBAR:
      return false;
    default:
      return false;
  }
}
