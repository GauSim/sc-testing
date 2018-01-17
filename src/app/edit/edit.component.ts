import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  cards: any[] = Array(15).fill(Array(50).fill('card content').join(' '))

  constructor() { }

  ngOnInit() {
  }

}
