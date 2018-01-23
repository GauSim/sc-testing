import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../state/index';
import { LoadServiceCall } from '../../state/serviceCall/serviceCall.actions';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(
    private store: Store<State>
  ) {

  }

  load(n) {
    this.store.dispatch(new LoadServiceCall(n.toString()));
  }

  ngOnInit() {
  }

}
