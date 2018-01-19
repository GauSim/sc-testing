import { Component, OnDestroy, OnInit } from '@angular/core';
import * as serviceCall from '../../actions/serviceCall';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs/Observable';

// implement swtiching between edit/create here

@Component({
  selector: 'app-service-call-container',
  template: `
  <app-header class="header-wrap"></app-header>

  <div class="content-wrap">
    <div *ngIf="isLoading$ | async">
      <mat-spinner></mat-spinner>
    </div>
    <app-edit></app-edit>
  </div>

  <app-footer class="footer-wrap"></app-footer>
  `,
})
export class ServiceCallContainerComponent implements OnDestroy, OnInit {

  isLoading$: Observable<boolean> | undefined;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>
  ) {

    this.isLoading$ = store.select(it => it.serviceCall.isLoading).pipe();

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
