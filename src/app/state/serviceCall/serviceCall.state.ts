import { IServiceCall } from './IServiceCall';

export type serviceCallState = {
  isLoading: boolean;
  dto: IServiceCall | undefined;
};
