import React from "react";
import TaskHeader from "./taskHeader";
import Task from "./task";
import TaskAdd from "./taskAdd";

function TaskList(){
    return (
        <main>
            <h1>Task Manager</h1>
            <ol className='lane'>
                <li className='card'>

                    <Task name='this is a task'/>

                    <li className='card'>
                        <header className='card-header card-header-new'>
                           <TaskAdd/>
                        </header>
                    </li>
                </li>
            </ol>
        </main>
    )
}
export default TaskList
