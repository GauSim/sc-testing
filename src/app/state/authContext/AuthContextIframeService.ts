import { fromEvent } from 'rxjs/observable/fromEvent';
import { Injectable } from '@angular/core';
import { IAuthContext } from './IAuthContext';
/**
 * 1. HOST opens CLIENT via URL (SC/1)
 * 2. CLIENT => READY (booted) [ask for ctx]
 * 3. HOST => send AuthCtx [send ctx]
 * 4. CLIENT => DONE
 * 4. CLIENT (load SC#1) DAL
 */
@Injectable()
export class AuthContextIframeService {

  private _parent: Window;

  constructor() {
    this._parent = parent;
  }

  public static EVENTS = {
    READY: 'READY',
    DATA: 'DATA',
    DONE: 'DONE',
    ERROR: 'ERROR'
  };

  public messages$ = fromEvent<MessageEvent>(window, 'message')
    .map(it => it.data as { type: string, value: any });

  private emit = (origin: string, type: string, value?: any) => {
    this._parent.postMessage({ type, value }, origin as string)
  };

  public getAuthContextFromIframe = (origin: string) => {

    this.emit(origin, AuthContextIframeService.EVENTS.READY);

    return this.messages$
      .filter(incomming => incomming.type === AuthContextIframeService.EVENTS.DATA)
      .map((it): IAuthContext => {
        return { authToken: it.value as string }
      })
  }

}
