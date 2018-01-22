import { Action } from '@ngrx/store';
import { authContextState } from './authContext.state';
import { authContextActionTypes, authContextActions } from './authContext.actions';

export const configDefaultState: authContextState = {
  authToken: undefined
};

export const authContextReducer = (state = configDefaultState, { type, payload }: authContextActions): authContextState => {

  switch (type) {
    case authContextActionTypes.ContextLoaded:
      console.log('CTX set ...')
      return Object.assign({}, state, payload)
    default:
      return state;
  }

};
