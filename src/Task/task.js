import TaskHeader from "./taskHeader";
import React from "react";

function Task({name}){
    return (
        <section>
        <TaskHeader taskHeaderName={name}/>
        <ul className='card-control'>
            <li><button className='card-control'>edit</button></li>

            <li><button className='card-control'>delete</button></li>
        </ul>
        </section>
    )
}
export default Task