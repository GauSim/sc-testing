import { fromEvent } from 'rxjs/observable/fromEvent';
import { Injectable } from '@angular/core';
import { IAuthContext } from '../model/IAuthContext';

@Injectable()
export class IframeMessagingService {

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

    this.emit(origin, IframeMessagingService.EVENTS.READY);

    return this.messages$
      .filter(incomming => incomming.type === IframeMessagingService.EVENTS.DATA)
      .map((it): IAuthContext => {
        return { authToken: it.value as string }
      })
  }

}
