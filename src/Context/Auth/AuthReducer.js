import {
  LOADING,
  SET_AUTH_STATE,
  SET_TOKEN,
  SET_USER,
  SIGNOUT,
} from './../types';

export default (state, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        username: action.payload,
      };
    case SET_AUTH_STATE:
      return {
        ...state,
        authState: action.payload,
      };
    case SIGNOUT:
      return {
        username: '',
        authState: false,
        loading: false,
        token: '',
      };
    default:
      return state;
  }
};
