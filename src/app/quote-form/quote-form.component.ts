import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  quoteAuthor:string
  quoteString:string
  quotePublisher:string
  myQuote:any

  @Output() addQuote=new EventEmitter();

  makeQuote(){
    this.myQuote= new Quote(this.quoteString , this.quoteAuthor , this.quotePublisher)
    this.quoteString=''
    this.quoteAuthor=''
    this.quotePublisher=''
    this.addQuote.emit(this.myQuote)

  }


  constructor() { }

  ngOnInit() {
  }

}
