export class Quote {
    quoteTitle: string;
    author: string;
    quote: string;
    name: string;
    id: number;
    date: Date;
    upVote: number;
    downVote: number;
  showQuoteDetails: boolean;
  upvote: number;
    constructor (quoteTitle: string, author: string, quote: string, name: string, id: number, date: Date, upVote: number, downVote: number,){
        this.quoteTitle = quoteTitle;
        this.author = author;
        this.quote = quote;
        this.name = name;
        this.id = id;
        this.date = date;
        this.upVote = upVote;
        this.downVote = downVote;
    }
}
