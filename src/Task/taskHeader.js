import React from "react";

function TaskHeader({taskHeaderName}){
    return  <header className='card-header'>
        <p className='card-title'>{taskHeaderName}</p>
    </header>
}
export default TaskHeader