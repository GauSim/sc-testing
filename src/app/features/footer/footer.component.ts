import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Load } from '../../actions/serviceCall';


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
    this.store.dispatch(new Load(n.toString()));
  }

  ngOnInit() {
  }

}
