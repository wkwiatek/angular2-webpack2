
const Immutable = require('immutable');
const List = Immutable.List;

export const LOAD_TODOS = 'LOAD_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    todos: todos
  }
}

export function addTodo(newTodo) {
  return {
    type: ADD_TODO,
    newTodo
  }
}

export function toggleTodo(todo) {
  return {
    type: TOGGLE_TODO,
    todo
  }
}

export function deleteTodo(todo) {
  return {
    type: DELETE_TODO,
    todo
  }
}
