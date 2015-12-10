import {Component} from 'angular2/angular2';

@Component({
  selector: 'test',
  template: 'Hello from component: {{ test }}'
})
export class TestComponent {
  public test: string = 'test';
  constructor() {}
}