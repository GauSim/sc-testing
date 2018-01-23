import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/index';
import { Observable } from 'rxjs/Observable';
import { IServiceCall } from '../../state/serviceCall/IServiceCall';

// implement swtiching between edit/create here

@Component({
  selector: 'app-service-call-container',
  templateUrl: './service-call.container.html',
})
export class ServiceCallComponent implements OnDestroy, OnInit {

  isLoading$: Observable<boolean> | undefined;
  serviceCall$: Observable<IServiceCall | undefined> | undefined = undefined;

  constructor(private store: Store<State>) {

// read => https://gist.github.com/btroncone/a6e4347326749f938510#projecting-state-for-view-with-combinelatest-and-withlatestfrom

    this.serviceCall$ = this.store.select(it => it.serviceCall.dto);
    this.isLoading$ = this.store.select(it => it.serviceCall.isLoading);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
