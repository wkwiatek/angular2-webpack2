const Immutable = require('immutable');

import {Component} from 'angular2/core';

import {Store} from '../store/Store';
import {loadTodos, addTodo} from '../store/Actions';

import {Todo} from './Todo';

@Component({
  selector: 'todos',
  template: `
    <pre>{{ store.getState().todos | json }}</pre>
  `,
  styles: [require('./todo.styl').toString()]
})
export class TodosComponent {
  constructor(private store: Store) {
    const todos = [
      new Todo({}),
      new Todo({ id: 1, description: 'first', completed: true })
    ];
    store.dispatch(loadTodos(Immutable.List(todos)));
  }
}
