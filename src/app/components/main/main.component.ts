import { Component, OnInit } from '@angular/core';
import { Quote } from 'src/app/class/quote';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  quote: Quote[] = [
    new Quote("Resilience","Sophie Kinsella", "There’s no such thing as ruining your life. Life’s a pretty resilient thing, it turns out.", "Wilie", 1, new Date(2022,1,17), 0, 0 ),
    new Quote("Resilience","Sophie Kinsella", "There’s no such thing as ruining your life. Life’s a pretty resilient thing, it turns out.", "Wilie", 1, new Date(2022,2,6), 0, 0 ),
    new Quote("Resilience","Sophie Kinsella", "There’s no such thing as ruining your life. Life’s a pretty resilient thing, it turns out.", "Wilie", 1, new Date(2022,2,10), 0, 0 ),
    new Quote("Resilience","Sophie Kinsella", "There’s no such thing as ruining your life. Life’s a pretty resilient thing, it turns out.", "Wilie", 1, new Date(2022,2,26), 0, 0 ),
    new Quote("Resilience","Sophie Kinsella", "There’s no such thing as ruining your life. Life’s a pretty resilient thing, it turns out.", "Wilie", 1, new Date(2022,3,12), 0, 0 ),
    new Quote("Resilience","Sophie Kinsella", "There’s no such thing as ruining your life. Life’s a pretty resilient thing, it turns out.", "Wilie", 1, new Date(2022,4,17), 0, 0 )
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
