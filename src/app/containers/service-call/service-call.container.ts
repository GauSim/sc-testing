import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/index';
import { Observable } from 'rxjs/Observable';
import { IServiceCall } from '../../state/serviceCall/IServiceCall';
import { LoadServiceCall } from '../../state/serviceCall/serviceCall.actions';

// implement swtiching between edit/create here

@Component({
  selector: 'app-service-call-container',
  templateUrl: './service-call.container.html',
})
export class ServiceCallContainer implements OnDestroy, OnInit {


  canSave$: Observable<boolean> | undefined = undefined;
  isLoading$: Observable<boolean> | undefined = undefined;
  serviceCall$: Observable<IServiceCall | undefined> | undefined = undefined;

  constructor(private store: Store<State>) {

    // read => https://gist.github.com/btroncone/a6e4347326749f938510#projecting-state-for-view-with-combinelatest-and-withlatestfrom

    this.serviceCall$ = this.store.select(it => it.serviceCall.dto);
    this.isLoading$ = this.store.select(it => it.serviceCall.isLoading);



    this.canSave$ = new Observable<boolean>((op) => op.next(false))
      .merge(this.isLoading$.map(it => !it));
    // todo merge isFormValid$ from the form into canSave$

  }

  onSave() {
    this.store.dispatch(new LoadServiceCall('1'))
  }


  onCancel() {
    this.store.dispatch(new LoadServiceCall('2'))
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
