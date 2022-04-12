import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Quote } from 'src/app/class/quote';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() quote:Quote;
  @Output() isDeleted=new EventEmitter<boolean>();

  quoteDeletion(remove:boolean){
    this.isDeleted.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
