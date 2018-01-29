import { ServiceCallState } from './serviceCall.state';
import { ServiceCallActionTypes, ServiceCallActions } from './serviceCall.actions';
import { IServiceCall } from './IServiceCall';

export const configDefaultState: ServiceCallState = {
  isLoading: false,
  dto: undefined
};

export function serviceCallReducer(state = configDefaultState, { type, payload }: ServiceCallActions): ServiceCallState {

  switch (type) {
    case ServiceCallActionTypes.LoadServiceCall:
      return { ...state, isLoading: true };
    case ServiceCallActionTypes.LoadServiceCallSuccess:
      return { ...state, isLoading: false, dto: payload as IServiceCall };
    default:
      return state;
  }

}
