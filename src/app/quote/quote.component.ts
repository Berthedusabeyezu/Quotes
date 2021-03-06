import { Component, OnInit } from '@angular/core';
import{Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  title="Quotes"
  quotes = [
    new Quotes(1,'Independence is happiness', 'Susan B. Anthony','user', 0, 0, new Date(2018,5,14)),
    new Quotes(2,'Happiness can exist only in acceptance','George Orwell','user', 0, 0, new Date(2018,3,14) ),     
    new Quotes(3,'Love has no age, no limit; and no death', 'John Galsworthy','user', 0, 0 ,new Date(2018,8,9)),
    new Quotes(4,'You can not blame gravity for falling in love', 'Albert Einstein','user', 0, 0, new Date(2018,6,9)),

  ]
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuotes(isComplete,index){
    if (isComplete){
        this.quotes.splice(index,1);
    }
  }
  deleteQuotes(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
        
        if(toDelete){
            this.quotes.splice(index,1)
        }  
    }   
  }   
  addNewQuotes(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}

    constructor() { }
 
  ngOnInit() {
  }

}
