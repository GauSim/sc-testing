import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title$: Observable<string>;

  constructor(private store: Store<State>) {
    this.title$ = this.store.select(it => it.serviceCall).map(it => !it.dto || it.isLoading ? '...' : it.dto.title).pipe();
  }

  ngOnInit() {
  }

}
