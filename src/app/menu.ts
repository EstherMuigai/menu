import { MenuRelate } from './menu-relate'

export class Menu {
    public showMore:boolean;
    public showMoreMore:boolean;
    public showMoreMoreMore:boolean;
    public showMoreMoreMoreMore:boolean;
    constructor(public name:string, public choices:Array<object>, public related:Array<MenuRelate>){
        this.showMore=false
        this.showMoreMore=false
        this.showMoreMoreMore=false
        this.showMoreMoreMoreMore=false
    }
}


