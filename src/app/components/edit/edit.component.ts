
import { Component, Input } from '@angular/core';
import { IServiceCall } from '../../state/serviceCall/IServiceCall';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {

  cards: any[] = Array(15).fill(Array(50).fill('card content').join(' '));

  @Input() serviceCall: IServiceCall;

  constructor() {

    // implement form like this https://netbasal.com/connect-angular-forms-to-ngrx-store-c495d17e129

  }

}
