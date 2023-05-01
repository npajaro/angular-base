import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increaseBy(+1)">+1</button><br><br>
  <button (click)="resetCounter()">Reset</button><br><br>
  <button (click)="increaseBy(-1)">-1</button><br><br>`,
})

export class CounterComponent {

  public counter: number = 10

  increaseBy(value: number) {
    this.counter += value;
  }

  resetCounter(): void {
    this.counter = 10;
  }

  constructor() { }
}
