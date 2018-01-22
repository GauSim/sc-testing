import { authContextState } from './authContext.state';
import { authContextActionTypes, authContextActions } from './authContext.actions';

export const configDefaultState: authContextState = {
  authToken: undefined
};

export function authContextReducer(state = configDefaultState, { type, payload }: authContextActions): authContextState {

  switch (type) {
    case authContextActionTypes.ContextLoaded:
      return Object.assign({}, state, payload)
    default:
      return state;
  }

};
