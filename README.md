#AVANT-GUARDE
-----------------------------------------------------------------------------
                              __INSTALLATION__
-----------------------------------------------------------------------------
To preview this app follow this link to the live & deployed website:
 https://lucaslb7.github.io/quote-bender/

 Otherwise to clone, copy this link to your command terminal:
 https://github.com/lucasLB7/quote-bender.git

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
----------------------------------------------------------------------------
## Introduction to angular


__Angular__ can be a challenge to get grips of, mostly because of the combination of __hard syntax__, __nested elements__ and the __large number of files__ you work with.

The purpose of this week's content at Moringa was to introduce us to the world of __framework environments__.

Angular is essentially a framework that allows developers to manipulate CSS, HTML & jS smoothly and efficiently.

-----------------------------------------------------------------------------
## The layout of the web-app

My web-app, called __Quote-Bender__ was developed using Angular.
It contains three components:
1. *Quote form* -
2. *Quote details* -
3. *Quote components* -
-----------------------------------------------------------------------------
### Quote components
Contains the main data (parent). It holds the main visual structure of the website in it's HTML & CSS but also holds most functions, such as:

__addNewQuote__ pushes a value of an instance of the object _quote_ into the array __quotes__


`addNewQuote(quote){
  this.quotes.push(quote)
}`


__upVote__ loops through the index [i] in upVotes and adds one to the list.


`upVote(i){
  this.quotes[i].upVotes += 1;
}`


__downVote__ works like upVote..



`downVote(i){
  this.quotes[i].downVotes += 1;
}`


__returnVote__ does a simple subtraction to return the difference between up & down vote.


`returnVote(i){
  return this.quotes[i].upVotes - this.quotes[i].downVotes;
}`


__deleteQuote__ first alerts you, on confirmation it runs a splice (remove) of quotes index 1...


`deleteQuote(i){
    if (confirm("Are you sure you want to delete this quote? ")) {
        this.quotes.splice(i, 1);
    }
}`

--------------------------------------------------------------------------

__getHighest__ is designed to __highlight__ the quote with most likes.
It works as follows:
- We assign values to previous
- We assign values to last

__Both are 0__ because they are in init stage.
We then create __a loop__ that will go through each instance of a Quote.

_counter_ will compare it's value with the value of the amount of Quotes and for as long as there are more quotes it will __add one/jump one further__.

Now we assign _last_ to the value of the __last instance__ we encountered of upVotes.

__If__ the value of _last_ (the last value of the upvotes) is greater that _pre_ (the value of the previous votes|initialized at 0) _pre_ takes on the value of _last_.

__Finally we return the value of pre__
As _last_ now has the value of the __highest number of upVotes__ it will only change again if a higher number appears.

`getHighest(){
  this.pre = 0
  this.last = 0

  for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.last = this.quotes[this.counter].upVotes
    if(this.last > this.pre){this.pre = this.last}
  }
  return  this.pre
}`

-----------------------------------------------------------------------------


### QUOTE DETAILS
Contains the stored details of the __form__.
It's inputs are `@Input () quote:Quote;`

This is the most basic __component__ in the app.

The main outputs are three _interpolated_ object descriptions:
`<p>
    Written by: {{quote.author}}
  </p>
  <p>
    Posted by: {{quote.publisher}}
  </p>
  <p>
    Posted on: {{quote.initdate}}
  </p>`

### QUOTE FORMS
The form captures all the data from the user.
It is also __responsible for the creation of the FORMS OBJECT__ which is used in the other __components__.

Let us examine:


__let us first__ define what type of data we expect from the forms:
*Notice myQuote has data* __any__ *as it may contain a string of any type of input*
`quoteAuthor:string
quoteString:string
quotePublisher:string
myQuote:any
`

__Next__, we create the structure of the object __Quote__ which contains `quoteString` , `quoteAuthor` and `quotePublisher` is __that exact order__ as this is specified in __quotes.ts__.


`makeQuote(){
  this.myQuote= new Quote(this.quoteString , this.quoteAuthor , this.quotePublisher)

  this.quoteString=''
  this.quoteAuthor=''
  this.quotePublisher=''

  this.addQuote.emit(this.myQuote)

}`

We create empty values for quoteString, quote and quotePublisher with intent to fill from inputs from __quote-form__.



[...] TO BE UPDATE [...]


## credits

This app was made possible by the Moringa community and resources as well as:

__git-hub__
__Angular website__
__youtube__
 
