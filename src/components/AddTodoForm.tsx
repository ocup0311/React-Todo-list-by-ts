import React from 'react';

interface Props {
  addTodo: AddTodo;
}

const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
  // hook
  const [text, setText] = React.useState('');

  // function
  const onChange = (e:React.ChangeEvent<HTMLInputElement>):void => {
    setText(e.target.value)
   }

  const onClick = (e:React.FormEvent<HTMLButtonElement>):void => {
    e.preventDefault();
    addTodo(text);
    setText('');
   } 
  
  return (
    <form>
      <input type="text" value={text} onChange={onChange} />
      <button type="submit" onClick={onClick}>Add Todo</button>
    </form>
  );
};

export default AddTodoForm;


const styles={
  complete:{textDecoration: 'line-through'},

  uncomplete:{},
}