import React from 'react';

interface Props {
  todo: Todo;
  toggleTodo: ToggleTodo;
}

const AddTodoForm: React.FC<Props> = ({ todo, toggleTodo }) => {

// function
const onClick = () => { toggleTodo(todo); }

return ( 
  <li>
    <label
      style={todo.complete ? styles.complete : styles.uncomplete}
    >
      <input 
        type="checkbox"
        checked={todo.complete}
        onClick={onClick}/> 
      {todo.text}
    </label>
  </li>
  );
};

export default AddTodoForm;

// styles
const styles={
  complete:{textDecoration: 'line-through'},

  uncomplete:{},
}