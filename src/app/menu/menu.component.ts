import { Component, OnInit} from '@angular/core';
import { Menu } from '../menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menu:Menu;
  items=[];
  things = [
    {
      name: 'Salad', choices: [{ name: 'Santa Fe' }, { name: 'Greek' }, { name: 'Asian' },],
      related: [{ name: 'Dressing', choices: [{ name: 'Italian' }, { name: 'Blue Cheese' }, { name: 'Ranch' },] },

      {
        name: 'Bread', choices: [
          { name: 'Italian' },
          { name: 'Flat' },
          { name: 'Sourdough' },
        ]
      }
      ]
    },
    {
      name: 'Entree', choices: [
        { name: 'Steak' },
        { name: 'Salmon' },
        { name: 'Rice' },
      ],
      related: [
      ]
    },
    {
      name: 'Soup', choices: [
        { name: 'Minestrone' },
        { name: 'Hot and sour' },
        { name: 'Miso' },
      ],
      related: [
        {
          name: 'Bread', choices: [
            { name: 'Breadsticks' }
          ]
        }
      ]
    }
  ];

  showChoice(index,name){
    if(name==this.items[index].name){
      this.items[index].showMore = !this.items[index].showMore;
    }
  }

  choiceSelect(index){
    this.items[index].showMoreMore = !this.items[index].showMoreMore;
  }

  otheritemSelect(index){
    this.items[index].showMoreMoreMore = !this.items[index].showMoreMoreMore;
  }

  otherchoiceSelect(index){
    this.items[index].showMoreMoreMoreMore = !this.items[index].showMoreMoreMoreMore;
  }

  constructor() {
    
  }

  ngOnInit() {
    for(let i = 0; i<this.things.length; i++){
      this.menu = new Menu (this.things[i].name,this.things[i].choices,this.things[i].related);
      this.items.push(this.menu);
        }
  }

}
