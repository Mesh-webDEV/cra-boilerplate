import { OFF, SET, VARIANT } from './types';

export default (state, action) => {
  switch (action.type) {
    case SET:
      return {
        ...state,
        message: action.payload,
        dialogShow: true,
      };
    case OFF:
      return {
        ...state,
        dialogShow: false,
      };
    default:
      break;
  }
};
