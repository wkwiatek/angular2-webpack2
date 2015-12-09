import {Component} from 'angular2/angular2';

@Component({
  selector: 'app',
  template: '<h1>start {{ test }}</h1>'
})
export class App {
  public test: string = 'test';
  constructor() {}
}