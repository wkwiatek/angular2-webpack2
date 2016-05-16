import { Component } from '@angular/core';

@Component({
  selector: 'sg-test',
  template: 'Hello from component: {{ test }}',
  styles: [require('./test.styl').toString()]
})
export class TestComponent {
  public test: string = 'test';
  constructor() {}
}
