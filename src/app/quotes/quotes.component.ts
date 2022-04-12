import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

  quotes:Quotes[]=[
    new Quotes(1,'Nothing is impossible. The word itself says Im possible','Nelson Mandela','Audrey Hepburn',new Date(2020,6,17),0,0),
    new Quotes(2,'Keep your face always toward the sunshine, and shadows will fall behind you.','Walt Whitman','Gilbert',new Date(2021,9,),0,0)
  ]
  addNewQuote(quotes:any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength+1;
    // quotes.completeDate = new Date(quotes.completeDate)
    this.quotes.push(quotes)
 }
 deleteQuote(i:any) {
  this.quotes.splice(i, 1)
}
  constructor() { }

  ngOnInit(): void {
  }

}
