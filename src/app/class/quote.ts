export class Quote {
    displayQuote: boolean;
    constructor (public quoteTitle: string,public author: string,public quote: string,public name: string,public id: number,public date: Date,public upVote: number,public downVote: number,){
        this.displayQuote = false;
    }
}
