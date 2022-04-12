import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-votes',
  templateUrl: './votes.component.html',
  styleUrls: ['./votes.component.css']
})
export class VotesComponent implements OnInit {

  numberOfUpvotes:number=0
  quotes: any;
  upVotesClick(){
    this.numberOfUpvotes ++;
  }
  numberOfDownvotes:number=0

  downVotesClick(){
    this.numberOfDownvotes ++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
