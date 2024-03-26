import React, { useState } from 'react'        
import { taskProp } from '../../constants'
import "./Task.css"
import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'

//

const Task = ({id, task, status}: taskProp) => {
  const {attributes,
     listeners,
     setNodeRef,
      transform,
       transition} =useSortable({id});
  
  const style = {
    transition,
    transform : CSS.Transform.toString(transform)
  };
  
  let checkInputStyle = "";



 if(status === true){
      checkInputStyle = "task task_done";
    }else{
      checkInputStyle = "task";
    }

  return (
 <div
    ref={setNodeRef} 
    {...attributes} 
    {...listeners}
    style={style}
    className={checkInputStyle}>
      <input type="checkbox" 
      checked={status} 
      className='checkBox'  onChange={()=> {
        console.log(id)
      }} />
      {task}
    </div>
  )
}
// 


export default Task