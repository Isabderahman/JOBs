import { UTILISATEUR } from "../actions/actionTypes";

const initialState = {
  utilisateur: null,
};

export const utilisateurReducer = (state = initialState, action) => {
  switch (action.type) {
    case UTILISATEUR:
      return {
        ...state,
        utilisateur: action.payload,
      };
    default:
      return state;
  }
};
