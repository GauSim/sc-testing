import { AuthContextState } from './authContext.state';
import { authContextActionTypes, authContextActions } from './authContext.actions';

export const configDefaultState: AuthContextState = {
  authToken: undefined
};

export function authContextReducer(state = configDefaultState, { type, payload }: authContextActions): AuthContextState {

  switch (type) {
    case authContextActionTypes.ContextLoaded:
      return Object.assign({}, state, payload);
    default:
      return state;
  }

}
