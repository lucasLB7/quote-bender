export class Quote {

    public upVotes:number;
    public downVotes: number;
    public initdate: Date;

    constructor(public quote:string,public author:string,public publisher:string){
        this.upVotes = 0
        this.downVotes = 0
        this.initdate = new Date()
    }
}
