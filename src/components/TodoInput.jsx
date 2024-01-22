import React from "react";

function TodoInput(props) {
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-box-todo"
        placeholder="Enter your todo"
        value={props.value}
        onChange={e=> props.onChange(e)}
        onKeyDown={props.onClick}
      />
      {
        props.isEdit ?  <button className="update-btn" 
        onClick={() => props.update(props.index,props.value)}>Update</button> : 
      <button className="add-btn" 
      onClick={props.onAddClick}>+</button>      
      }
    </div>
  );
}

export default TodoInput;