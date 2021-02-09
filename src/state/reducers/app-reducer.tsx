/**
 * start-up-reducer
 */

const initialState = {
  running: false
}

export function appReducer(state = initialState, action) {
  switch (action.type) {
    case "SAGA->REDUX:APP/STARTED":
      return { ...state, running: true };
      break;
    default:
      return state;
      break;
  } //sw
} //red
