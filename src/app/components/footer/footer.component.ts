import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() canSave: boolean;
  @Output() saveButton = new EventEmitter<any>();
  @Output() cancelButton = new EventEmitter<any>();

  constructor() {

  }

  ngOnInit() {
  }

}
