import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
// import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
function Todolist(props) {
  // const [editText,setEditText] = useState('');
  // const handleEdit = (editText,e)=>{
  //   if(e.keyCode===13){
  //         props.editListItem(editText)
  //         setEditText("")
  //   }
  // }
  // const handleChange = () => {
  //   props.setCheck(!props.checked)
  // }
  return (
    <li className="list-item">
      <input type="checkbox" name="" id="" index={props.index} ischecked={props.ischecked} onClick={()=>props.updateCheck(props.index,props.ischecked)}/>
      <span style={{textDecoration:!props.ischecked?null:"line-through"}}>{props.item?.task} </span> 
      <span className='icons'>
        <EditIcon
        onClick={() => props.editListItem(props.index, props.item.task)}
        onKeyDown={props.onClick}
       ></EditIcon>
  
        <DeleteIcon
          onClick={e => {
            props.deleteItem(props.index)
          }}></DeleteIcon>
      </span>
    </li>
  )
        }

export default Todolist;