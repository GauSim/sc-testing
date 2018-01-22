import { Action } from '@ngrx/store';
import { IServiceCall } from '../../model/IServiceCall';

export enum ServiceCallActionTypes {
  Load = '[ServiceCall] Load',
  LoadSuccess = '[ServiceCall] LoadSuccess',
  SelectById = '[ServiceCall] SelectById',
  SelectByIdSuccess = '[ServiceCall] SelectByIdSuccess'
}

export type ServiceCallActions = Load  |  LoadSuccess

export class Load implements Action {
  readonly type = ServiceCallActionTypes.Load;

  constructor(public payload: string) { }
}

export class LoadSuccess implements Action {
  readonly type = ServiceCallActionTypes.LoadSuccess

  constructor(public payload: IServiceCall) { }
}

