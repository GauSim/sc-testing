import { Action } from '@ngrx/store';
import { serviceCallState } from './serviceCall.state';
import { ServiceCallActionTypes, ServiceCallActions } from './serviceCall.actions';
import { IServiceCall } from '../../model/IServiceCall';

export const configDefaultState: serviceCallState = {
  isLoading: false,
  dto: undefined
};

export const serviceCallReducer = (state = configDefaultState, { type, payload }: ServiceCallActions): serviceCallState => {

  switch (type) {
    case ServiceCallActionTypes.Load:
      return { ...state, isLoading: true }
    case ServiceCallActionTypes.LoadSuccess:
      return { ...state, isLoading: false, dto: payload as IServiceCall };
    default:
      return state;
  }

};
