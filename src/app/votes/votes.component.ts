import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {
  highest!:number;

  numberOfUpvotes:number=0
  quotes: any;
  upVotesClick(){
    this.numberOfUpvotes ++;
    let arr:number[]=this.quotes.map((quotes:   any )=>quotes.upVote);
    this.highest =Math.max(...arr);
  }

numberOfDownvotes:number=0

  downVotesClick(){
    this.numberOfDownvotes ++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
