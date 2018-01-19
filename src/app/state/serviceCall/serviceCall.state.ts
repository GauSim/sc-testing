import { IServiceCall } from "../../model/IServiceCall";

export type serviceCallState = {
  isLoading: boolean;
  dto: IServiceCall | undefined;
};
