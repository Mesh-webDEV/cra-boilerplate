import { OFF, SET, VARIANT } from './../types';

export default (state, action) => {
  switch (action.type) {
    case VARIANT:
      return {
        ...state,
        variant: action.payload,
      };
    case SET:
      return {
        ...state,
        message: action.payload,
        show: true,
      };
    case OFF:
      return {
        ...state,
        show: false,
      };
    default:
      break;
  }
};
