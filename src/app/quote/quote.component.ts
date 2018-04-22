import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  pre:number
  last:number
  counter:number
  quotes = [
    new Quote('Beauty has so many forms, and I think the most beautiful thing is confidence and loving yourself', 'Helen Keller', 'L.L'),
    new Quote('Everything that is made beautiful and fair and lovely is made for the eye of one who sees.' , 'Rumi' , 'L.L'),
    new Quote('Relax! Life is Beautiful!', 'K.Tanna',"L.L"),
];

addNewQuote(quote){
  this.quotes.push(quote)
}

upVote(i){
  this.quotes[i].upVotes += 1;
}
downVote(i){
  this.quotes[i].downVotes += 1;
}

returnVote(i){
  return this.quotes[i].upVotes - this.quotes[i].downVotes;
}

deleteQuote(i){
    if (confirm("Are you sure you want to delete this quote? ")) {
        this.quotes.splice(i, 1);
    }
}
getHighest(){
  this.pre = 0
  this.last = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.last = this.quotes[this.counter].upVotes
    if(this.last > this.pre){this.pre = this.last}
  }
  return  this.pre
}



  constructor() {

  }

  ngOnInit() {
  }

}
