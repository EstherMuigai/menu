import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items = [
    {
      name: 'Salad', choices: [{ name: 'Santa Fe' },{ name: 'Greek' },{ name: 'Asian' },],
      related: [{name: 'Dressing', choices: [{ name: 'Italian' },{ name: 'Blue Cheese' },{ name: 'Ranch' },]},

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

  choices = [];
  addChoice(items){
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      console.log(element);
    }
  }
  constructor() { }

  ngOnInit() {

  }

}
