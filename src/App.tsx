import React from 'react';
import TodoListItem from './components/TodoListItem';

const initialTodos: Todo[] = [
  {
    text: 'Walk the dog',
    complete: false,
  },
  {
    text: 'Write app',
    complete: true,
  },
];

const App: React.FC = () => {
  // hook
  const [todos, setTodos] = React.useState(initialTodos);

  // function
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });

    setTodos(newTodos);
  };
  
  return (
  <>
    <TodoListItem todo={todos[0]} toggleTodo={toggleTodo}/>
    <TodoListItem todo={todos[1]} toggleTodo={toggleTodo}/>
  </>
  );
}

export default App;
