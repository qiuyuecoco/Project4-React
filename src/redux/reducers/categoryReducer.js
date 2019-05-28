import * as types from "../actions/actionTypes";

export default function categoryReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            return[...state, {...action.category}];


        default:
            return state;
    }
}