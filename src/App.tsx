import React from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';


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
  const toggleTodo = (selectedTodo: Todo):void => {
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
  
  const addTodo: AddTodo = (text: string):void => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
  <>
    <TodoList 
      todos={todos}
      toggleTodo={toggleTodo}
    />
    <AddTodoForm addTodo={addTodo} />
  </>
  );
}

export default App;
