import React from 'react';
import styles from './TodoList.module.css';
import { BsTrash } from 'react-icons/bs';

export default function TodoList({ todoList, setTodoList, filteredList }) {
  const handleComplete = (item) => {
    const completed = todoList.map((todo) => {
      if (todo.id === item.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodoList(completed);
  };

  const handleDelete = ({ id }) => {
    const deletedItem = todoList.filter((item) => item.id !== id);
    setTodoList(deletedItem);
  };

  return (
    <div className={styles.container}>
      {filteredList.map((item) => (
        <li key={item.id} className={styles.mainContainer}>
          <div className={styles.innerContainer}>
            <label htmlFor="completed" className={styles.formControl}>
              <input
                type="checkbox"
                name="completed"
                checked={item.completed}
                onChange={() => {
                  handleComplete(item);
                }}
              />
            </label>
            <p className={`${item.completed ? styles.completed : styles.todoItem}`}>{item.todo}</p>
          </div>
          <button className={styles.delete} onClick={() => handleDelete(item)}>
            <BsTrash />
          </button>
        </li>
      ))}
    </div>
  );
}
