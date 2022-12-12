import React, { useEffect } from 'react';
import styles from './AddForm.module.css';

export default function AddForm({addTodo, setAddTodo, todoList, setTodoList}) {

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodoList([...todoList, {id : Date.now(), todo : addTodo, completed : false}])
    setAddTodo('')
  };

  useEffect(()=> {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  },[todoList])

  const handleChange = (e) => {
    setAddTodo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addContainer}>
      <label htmlFor="add" >
        <input type="text" name="add" className={styles.addInput} value={addTodo} onChange={handleChange} />
      </label>
      <button className={styles.addBtn} type="submit">
        Add
      </button>
    </form>
  );
}
