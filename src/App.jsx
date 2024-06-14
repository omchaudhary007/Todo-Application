import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Tasks from "./components/Tasks";
import './App.css'

const App = () => {
  const [newtask,setNew]=useState(''); // to store current input which is getting inputed
  const [taskArray,changeTask]=useState([]); // to store all task
  const [showHistory,setShowhistory]=useState(false); // historymode or not
  // to add task in newtask string state
  const setNewtask=(e)=>{
    if(e.target.value.trim()!=''){
     setNew(e.target.value.trim());
    }
  }
  // when add task clicked then add into taskArray 
  const addTask=()=>{
    if(newtask!=''){
      changeTask([...taskArray,newtask]);
      setNew('');
    }
  }
  // when in input enter is clicked then also add newTask
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };
  // toggle history mode
  const changeHistorymode=(e)=>{
    setShowhistory(e.target.checked==true);
  }
  return (
    <div className="w-screen h-screen bg-gray-200">
      <Navbar />
      <main className="task-container w-2/3 h-3/4 overflow-auto mx-auto my-4 p-4 bg-gray-50 shadow-sm rounded-md">
        <h3 className="mb-4 text-center text-lg font-bold whitespace-nowrap">
          TodoTide: Manage your todo's at one place
        </h3>
        <div className="border-2 border-purple-700 flex items-center">
          <input onChange={setNewtask} onKeyDown={handleKeyDown} className="w-full px-4 outline-none bg-transparent" type="text" name="newTask" placeholder="Add a Task" />
          <button onClick={addTask} className="px-4 py-1 whitespace-nowrap bg-purple-700 text-white font-bold">Add Task</button>
        </div>
        <div className="w-full my-4 flex items-center gap-1 justify-end">
           <input onChange={changeHistorymode} className='w-4 h-4' type="checkbox" name="showHistory" />
           <label name="showHistory" className="inline-block text-sm font-medium opacity-70 whitespace-nowrap">Show Finished</label>
        </div>
        <p className="line w-full h-[1px] my-6 bg-gray-300"></p>
        <h3 className="font-bold text-lg my-4">Your Todo's</h3>
        {taskArray.map((task,index)=><Tasks key={index} taskInfo={task} showhistory={showHistory}/>)}
      </main>
    </div>
  );
};

export default App; 
