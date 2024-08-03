import React from "react";
import Button from "./button";

function TaskAdd(){
    const addButtonPath = '/icons/plus.svg'
    const addButtonAlt = 'add task icon'
    const addButtonClassName = 'icon-button'

    return  <form className='card-title-form'>
        <input className='card-title-input' placeholder='New Task' name='title'/>
        <Button path={addButtonPath} alt={addButtonAlt} className={addButtonClassName}/>
    </form>
}
export default TaskAdd
