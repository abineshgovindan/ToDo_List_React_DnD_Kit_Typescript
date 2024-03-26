
import { useState } from 'react'
import './App.css'
import { DndContext, KeyboardSensor, PointerSensor, TouchSensor, closestCorners, useSensor, useSensors } from '@dnd-kit/core'
import { taskList, taskProp } from './constants'
import { Column } from './component/Column/Column'
import { arrayMove, sortableKeyboardCoordinates } from '@dnd-kit/sortable'
import Input from './component/Input/Input'


function App() {

  const [tasks, setTasks] = useState<taskProp[] | []>(taskList);
  const getTaskPos = (id: number): number => tasks.findIndex(task => task.id === id);



  const addTask = (task: string) =>{
    setTasks((tasks) => [...tasks, {id : tasks.length + 1, task: task, status: false}]);
  }

   const handleDragEnd = (event:  DragEndEvent):void =>{
    const {active, over} = event;
    if(active.id === over.id) return;

    setTasks((tasks) => {
      const originalPos = getTaskPos(active.id);
      const newPos = getTaskPos(over.id);
      return arrayMove(tasks,originalPos, newPos);
    });

  };

  const  sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    }),
  )
 
  return (
    <> 
    <div className="App">
      <h1>My Task</h1>
      <DndContext 
      sensors={sensor}
       collisionDetection={closestCorners}
       onDragEnd={handleDragEnd}
       >
        <Input onSubmit={addTask}/>
        <Column tasks={tasks} setTasks={setTasks}/>

       </DndContext>
    </div>
    </>
  )
}

export default App
