export class Quotes {
    id: number;
    quote: string;
    author: string;
    name: string;
    upvote: number;
    downvote: number;
    myDate:Date;
    // Date: Date;
    
    // showDescription: boolean;
    constructor( 
        id: number,
        quote: string,
        author: string,
        name: string,
        myDate: Date,
        upvote: number,
        downvote: number,
       

    ) {
        // this.showDescription = false;
        this.id=id;
        this.quote=quote;
        this.author=author;
        this.name=name;
        this.myDate=myDate;
        this.upvote=upvote;
        this.downvote=downvote

    }
     }
