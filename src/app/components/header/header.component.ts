import { Component, OnInit, Input } from '@angular/core';
import { IServiceCall } from '../../state/serviceCall/IServiceCall';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() serviceCall: IServiceCall;

  constructor() {
  }

  public get subject() {
    return !this.serviceCall ? '' : this.serviceCall.subject;
  }

  ngOnInit() {
  }

}
