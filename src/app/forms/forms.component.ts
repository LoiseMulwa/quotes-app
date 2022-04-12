import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  addNewQuote = new Quotes(0,'','','',new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quotes>();

  submitQuote(){
this.addQuote.emit(this.addNewQuote);
        
  }

  constructor() { }

  ngOnInit(): void {
  }

}
