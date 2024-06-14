import React, { useEffect, useRef, useState } from 'react'

const Tasks = ({taskInfo,showhistory}) => {
  const [taskdef,setTaskdef]=useState(''); // to store task defination proivded in input
  const [isComplete,setFinished]=useState(false); // track complete or not
  const [notEditable,setEditable]=useState(true); // for readonly mode
  const [isDeleted,setDelete]=useState(false);  // to track deleted or not
  // if its first rendering then set taskinfo as description otherwise input value
  const changeTaskdef=(e)=>{
     (e==undefined)? setTaskdef(taskInfo): setTaskdef(e.target.value);
  }
  // by default finished=false otherwise checked value
  const changeFinished=(e)=>{
    (e==undefined) ? setFinished(false): setFinished(e.target.checked);
  }
  // toggle edit mode
  const changeEditmode=(e)=>{
      if(notEditable) alert("Now you can edit and save");
      setEditable(!notEditable);
  }
  // to delete a task
  const toDelete=()=>{
    setDelete(true);
  }
  // to initialize default value for first rendering
  useEffect(()=>{
    changeTaskdef();
    changeFinished();
  },[])
  return (
    <>
    {((!isDeleted) &&(isComplete===showhistory))?  // when deleted no-rendering, if mode is showhistory and iscomplete true or if both is false then render.
      <div className='w-full my-4 flex items-center justify-between gap-4'>
      <div className='w-5/6 flex items-center gap-4'>
        <input type="checkbox" onChange={changeFinished} checked={isComplete} className='w-4 h-4' name="task1"/>
        <input type="text" onChange={changeTaskdef} value={taskdef} readOnly={notEditable} className='w-full bg-transparent outline-none whitespace-nowrap overflow-hidden text-ellipsis '/>
      </div>
      <div className='flex items-center gap-2'>
         <button onClick={changeEditmode} className='p-2 bg-violet-700 rounded-sm'>
            {notEditable?<img className='w-4 h-4' src="edit.png" alt="edit"/>:<img className='w-4 h-4' src="save.png" alt="save"/>}
         </button>
         <button onClick={toDelete} className='p-2 bg-violet-700 rounded-sm'>
            <img className='w-4 h-4' src="delete.png" alt="delete"/>
         </button>
      </div>
    </div>:<></>}
    </>
  )
}

export default Tasks
