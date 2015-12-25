const Immutable = require('immutable');

const List = Immutable.List;
const Record = Immutable.Record;

const TodoRecord = Record({
  id: 0,
  description: '',
  completed: false
});

export class Todo extends TodoRecord {

  id: number;
  description: string;
  completed: boolean;

  constructor(props) {
    super(props);
  }

}