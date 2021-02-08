/**
 * start-up-reducer
 */

export default function appStarting(state = { running: false }, action) {
  switch (action.type) {
    case "SAGA->REDUX:APP/STARTED":
      return { ...state, running: true };
    default:
      return state;
      break;
  } //sw
} //red
