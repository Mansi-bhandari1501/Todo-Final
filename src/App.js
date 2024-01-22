import React, { useState } from 'react'
import "./App.css"
import TodoInput from './components/TodoInput'
import Todolist from './components/TodoList';
function App() {

 
  const [listTodo, setListTodo] = useState([]);
  const [inputText, setInputText] = useState([]);
  const [index, setIndex] = useState(0);
  const [isEdit, setIsEdit] = useState(false);


  const updateCheck = (i,check) => {

    let mytodos=listTodo;
    mytodos[i].complete=!check
    setListTodo([...mytodos]);
    // console.log(isChecked);
    // setCheck(!isChecked);
    // // setIndex(i)
    // console.log(isChecked);

  };

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      addList(inputText)
      setInputText("")
    }
  }
  const onChange = (e) => {
    setInputText(e.target.value)
    
  }
  const onAddClick = () => {
    addList( inputText )
    setInputText("")
  }
  let addList = (inputText, i) => {
    if (inputText !== '') {
      let todo = ([...listTodo, { task:inputText, complete: false }]);
      setListTodo(todo);
      // console.log(todo);
    }
  }
  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1)
    setListTodo([...newListTodo])
  }
  const editListItem = (i, value) => {
    // console.log("Ëdit Clicked", value, i);
    setInputText(value);
    setIsEdit(true);
    setIndex(i)
    // console.log("value is",value);
  }
  const update = (i,inputText) => {
    // console.log(index + "New value " + inputText);
    let newArray = listTodo;
    console.log("Before",newArray)
    newArray[index] = {task: inputText,complete:false};
    // console.log("After",newArray[index])
    setListTodo([...newArray]);
    setInputText("");
    setIsEdit(false);

  }

  // const [editText,seteditText]=useState(['']);
  // let editListItem = (inputText)=>{
  //   // seteditText([...editText,inputText]);
  //   const editItem = listTodo.find((i)=> i.key === key);
  //   seteditText([editText.listTodo]);
  // }

  return (
    <div className="main-container">
      <div className="center-container">
        <TodoInput
          addList={addList}
          onChange={onChange}
          value={inputText}
          onClick={handleEnterPress}
          onAddClick={onAddClick}
          isEdit={isEdit}
          update={update} />
        <h1 className="app-heading">TODO</h1>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <Todolist
              key={i}
              index={i}
              item={listItem}
              onClick={handleEnterPress}
              deleteItem={deleteListItem}
              editListItem={editListItem}
              updateCheck={updateCheck}
              ischecked={listItem.complete}
          
            />
          )
        })}
      </div>
    </div>
  )
}

export default App

