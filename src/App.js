import { useState, useEffect, useContext } from 'react';
import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';
import { LightModeContext } from './context/LightModeContext'

//getting the values of local storage
const getDatafromLocalStorage = () => {
  const data = localStorage.getItem('todoList');
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function App() {
  const [addTodo, setAddTodo] = useState('');
  const [todoList, setTodoList] = useState(getDatafromLocalStorage());
  const [status, setStatus] = useState('All');
  const [filteredList, setFilteredList] = useState([]);
  const {lightMode, toggleLightMode} = useContext(LightModeContext);


  useEffect (() => {
    const handleFilter = () => {
      switch (status) {
        case 'Active':
          setFilteredList(todoList.filter((item) => item.completed === false));
          break;
  
        case 'Completed':
          setFilteredList(todoList.filter((item) => item.completed === true));
          break;
  
        default:
          setFilteredList(todoList);
          break;
      }
    };  
    handleFilter();
  },[todoList, status])

  

  return (

      <div className="overlay">
        <div className={`${lightMode? 'modal light' : 'modal'}`}>
          <Header todoList={todoList} status={status} setStatus={setStatus} lightMode={lightMode} toggleLightMode={toggleLightMode} />
          <TodoList todoList={todoList} setTodoList={setTodoList} filteredList={filteredList} />
          <AddForm addTodo={addTodo} setAddTodo={setAddTodo} todoList={todoList} setTodoList={setTodoList} />
        </div>
      </div>
  );
}

export default App;
