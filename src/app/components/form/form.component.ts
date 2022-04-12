import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from 'src/app/class/quote';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  title = "Add a quote";
  bttn1 ="Add quote";
  bttn2 ="Clear form";
  lable1 = "Quote tilte:";
  lable2 = "Author:";
  lable3 = "Quote:";
  lable4 = "Your name:";
  newQuote = new Quote ("","","","", 1, new Date(), 0, 0)
  @Output() addQuote= new EventEmitter<Quote>();
 
  onSubmit(form: NgForm){
     let check=this.newQuote;
     
     this.addQuote.emit(this.newQuote);
     form.resetForm(); 
   }
  constructor() { }

  ngOnInit(): void {
  }

}
