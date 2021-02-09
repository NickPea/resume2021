/**
 * LANDING PAGE SUMMARY REDUCER
 */

interface action {
    type: string;
    payload: object;
}

const initialState = {
    summary: ''
}

export function landingPageReducer(state = initialState, action: action) {
    switch (action.type) {
        case "SAGA->REDUX:LANDING-PAGE/SET":
            return {...state, ...action.payload};
            break;
        default:
            return state;
            break;
    }
}
