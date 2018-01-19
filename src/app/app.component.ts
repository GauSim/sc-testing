import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private store: Store<fromRoot.State>) {

    store.select(it => it.routerReducer).forEach(it => console.log(it))

    console.log(store);
  }
}
