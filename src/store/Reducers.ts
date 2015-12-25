const Immutable = require('immutable');
const Redux = require('redux');

const List = Immutable.List;
const combineReducers = Redux.combineReducers;

import {Todo} from '../components/Todo';

import {
  ADD_TODO,
  DELETE_TODO,
  LOAD_TODOS, 
  TOGGLE_TODO, 
} from './Actions';

function todos(state, action) {
  if (!state) {
    return List([]);
  }
  switch(action.type) {
    case LOAD_TODOS:
      return List(action.todos);
    case ADD_TODO:
      return state.push(action.newTodo);
    case TOGGLE_TODO:
      return toggleTodo(state, action);
    case DELETE_TODO:
      let index = state.findIndex((todo: Todo) => todo.id === action.todo.id);
      return state.delete(0);
    default:
      return state;
  }
}

function toggleTodo(state, action) {
  let index = state.findIndex((todo: Todo) => todo.id === action.todo.id);
  let toggled: Todo = state.get(index);
  return state.set(index, new Todo({id: toggled.id, description: toggled.description, completed: !toggled.completed}) );
}

export const Reducers = combineReducers({
  todos
});
