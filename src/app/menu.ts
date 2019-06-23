export class Menu {
    public showMore:boolean;
    public showMoreMore:boolean;
    public showMoreMoreMore:boolean;
    constructor(public name:string, public choices:Array<object>, public related:Array<object>){
        this.showMore=false
        this.showMoreMore=false
        this.showMoreMoreMore=false
    }
}


