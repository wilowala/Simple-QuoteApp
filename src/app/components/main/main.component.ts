import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/class/quote';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  [x: string]: any;
  quotes: Quote[] =[
    new Quote("Resilience","Sophie Kinsella", "There's no such thing as ruining your life. Life's a pretty resilient thing, it turns out.", "Wilie", 1, new Date(2022,1,17), 0, 0 ),
    new Quote("About Life","Thomas A. Edison", "Many of life's failures are people who did not realize how close they were to success when they gave up.", "Bong'", 2, new Date(2022,2,6), 0, 0 ),
    new Quote("Best of All Time","Ralph Waldo Emerson", "Do not go where the path may lead, go instead where there is no path and leave a trail.", "Misus", 3, new Date(2022,2,10), 0, 0 ),
    new Quote("Famous People","Nelson Mandela", "The greatest glory in living lies not in never falling, but in rising every time we fall.", "Ron", 4, new Date(2022,2,26), 0, 0 ),
    new Quote("Life inspiration","Dr. Seuss", "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.", "Fifi", 5, new Date(2022,3,12), 0, 0 ),
    new Quote("Road to Success","SWinston S. Churchill", "Success is not final; failure is not fatal: It is the courage to continue that counts.", "Ocampos", 6, new Date(2022,4,17), 0, 0 )
  ]
  
  populars:Quote[]=[
    new Quote("About Life","Thomas A. Edison", "Many of life's failures are people who did not realize how close they were to success when they gave up.", "Bong'", 2, new Date(2022,2,6), 0, 0 ),
    new Quote("Best of All Time","Ralph Waldo Emerson", "Do not go where the path may lead, go instead where there is no path and leave a trail.", "Misus", 3, new Date(2022,2,10), 0, 0 ),
    new Quote("Famous People","Nelson Mandela", "The greatest glory in living lies not in never falling, but in rising every time we fall.", "Ron", 4, new Date(2022,2,26), 0, 0 )
  ];

  addNewQuote(quote){
    let quotesLength=this.quotes.length;
    quote.id = quotesLength + 1;
    quote.fullDate = new Date(quote.fullDate)
    this.quotes.push(quote);
  }
  toggleDetails(index){
    this.quotes[index].showQuoteDetails=!this.quotes[index].showQuoteDetails
  }

  deleteQuote(isDeleted,index){

    if(isDeleted){
      let remove=confirm(`Are you sure you want to delete this quote entitled ${this.quotes[index].quoteTitle}?`)
      if(remove){
        this.quotes.splice(index,1)
      }
    }

  }
  upvoteFunc(index){
      let up=this.quotes[index].upVote+1;
      this.quotes[index].upVote=up;
      
  }

   
  downvoteFunc(index){
    let down=this.quotes[index].downVote+1;
    this.quotes[index].downVote=down;
  
}

  mostPopular(){
    this.populars.splice(0,this.populars.length);

    let largest=this.quotes[0].upVote;
    let number:any = null;
    for (let i=0;i<this.quotes.length;i++){
      number =this.quotes[i].upVote

      largest=Math.max(largest,number)
    }
  
    for (let i=0;i<this.quotes.length;i++){
    
      if(this.quotes[i].upVote===largest){
      this.populars.push(this.quotes[i]);
      }
    } 
  }

  
  constructor() { }

  ngOnInit(): void {
  }

}
