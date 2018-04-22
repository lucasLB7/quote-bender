# Brief..

This project was made by Lucas Lambert for Moringa School. Completion & submission dated at 22/04/2018 at 00:00 midnight.

This project was developed in Angular 5 as part of the IP for CORE.


## SUMMARY

__These are the contents of the README:__

1. Introduction to angular
2. The layout of the web-app
3. The problems
4. The solutions
5. This I did not manage
6. Sources & credits

## Introduction to angular


__Angular__ can be a challenge to get grips of, mostly because of the combination of __hard syntax__, __nested elements__ and the __large number of files__ you work with.

The purpose of this week's content at Moringa was to introduce us to the world of __framework environments__.

Angular is essentially a framework that allows developers to manipulate CSS, HTML & jS smoothly and efficiently.


Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## The layout of the web-app

My web-app, called __Quote-Bender__ was developed using Angular.
It contains three components:
1. *Quote form* -
2. *Quote details* -
3. *Quote components* -

__Quote components__ Contains the main data (parent). It holds the main visual structure of the website in it's HTML & CSS but also holds most functions, such as:

__addNewQuote__ pushes a value of an instance of the object _quote_ into the array __quotes__

`addNewQuote(quote){
  this.quotes.push(quote)
}`

__upVote__ loops through the index [i] in upVotes and adds one to the list.

`upVote(i){
  this.quotes[i].upVotes += 1;
}`
__downVote__ Works like upVote..

`downVote(i){
  this.quotes[i].downVotes += 1;
}`

__returnVote__

`returnVote(i){
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
}`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
