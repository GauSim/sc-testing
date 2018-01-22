import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import { IServiceCall } from '../../model/IServiceCall';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  serviceCall$: Observable<IServiceCall | undefined> | undefined = undefined;
  cards: any[] = Array(15).fill(Array(50).fill('card content').join(' '))

  constructor(private store: Store<State>) {
    this.serviceCall$ = this.store.select(it => it.serviceCall.dto).pipe();
  }


  ngOnInit() {
  }


}
