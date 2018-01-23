import { RouterStateUrl } from './CustomRouterStateSerializer';
import { RouterReducerState } from '@ngrx/router-store';

export type routerState = RouterReducerState<RouterStateUrl>;
