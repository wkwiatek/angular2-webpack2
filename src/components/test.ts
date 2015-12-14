import {Component} from 'angular2/core';

@Component({
  selector: 'test',
  template: 'Hello from component: {{ test }}',
  styles: [require('./test.styl').toString()]
})
export class TestComponent {
  public test: string = 'test';
  constructor() {}
}