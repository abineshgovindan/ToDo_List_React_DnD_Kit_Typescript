import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { taskProp } from '../../constants'
import "./Column.css";
import Task from '../Task/Task';
import { useState } from 'react';



export const Column = ({tasks, setTasks}: {tasks : taskProp[], setTasks: any}) => {
  

  // const toggleTaskStatus = (id: number):void => {
  //   console.log("toggleTaskStatus")
  //   setTasks(tasks?.map(task => {
  //     if(task.id === id){
  //       return {...task, status: !task.status};
  //     }
  //     return task;   
  //   }))};

  return (
    <div className="column">
           <SortableContext 
           items={tasks}
           strategy={verticalListSortingStrategy}>
        {tasks.map((task) =>
        (
            <Task key={task.id}  id={task.id} task={task.task} status={task.status}/>
        ))}
        </SortableContext>
    </div>
  )
}
