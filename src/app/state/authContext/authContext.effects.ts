
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { authContextActionTypes, ContextLoaded, AwaitingContextLoaded, RequireExternalAuthentication } from './authContext.actions';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs/observable/fromEvent';



class IFrameMessagingService {

  private _origin: string;
  private _parent: Window;


  constructor(parentHost: string) {
    this._origin = parentHost;
    this._parent = parent;
  }

  public static EVENTS = {
    READY: 'READY',
    DATA: 'DATA',
    DONE: 'DONE',
    ERROR: 'ERROR'
  };

  public messages$ = fromEvent<MessageEvent>(window, 'message')
    .map(x => x.data as { type: string, value: any });

  public emit = (type: string, value?: any) => {
    this._parent.postMessage({ type, value }, this._origin)
    return this;
  };

}

@Injectable()
export class AuthContextEffects {
  constructor(
    private actions$: Actions
  ) { }


  @Effect() determainAuthFlow$ = this.actions$
    .ofType(authContextActionTypes.AwaitingContextLoaded)
    // check for current stragergy here
    .switchMap((it: AwaitingContextLoaded) =>
      of(new RequireExternalAuthentication(it.payload)))


  @Effect() externalAuthFlow$ = this.actions$
    .ofType(authContextActionTypes.RequireExternalAuthentication)
    .switchMap((it: AwaitingContextLoaded) =>

      new IFrameMessagingService('http://127.0.0.1:8080')
        .emit(IFrameMessagingService.EVENTS.READY)
        .messages$.filter(incomming => incomming.type === IFrameMessagingService.EVENTS.DATA)
        .delay(1000)
        .map(m => new ContextLoaded({ authToken: m.value }))
    )


}
