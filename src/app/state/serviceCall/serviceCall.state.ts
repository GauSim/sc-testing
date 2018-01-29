import { IServiceCall } from './IServiceCall';

export interface ServiceCallState {
  isLoading: boolean;
  dto: IServiceCall | undefined;
}
