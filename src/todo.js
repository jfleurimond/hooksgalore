import React from 'react'; 
import {FaTimes} from 'react-icons/fa'

// Going to install react icons to use x to delete icons
// npm i react-icons
const Todo = ({todos, deleteTask}) => {

    return(
        <div >
        <h4 key={todos.id}>Task: {todos.Task} <FaTimes className="xbtn" onClick={() => deleteTask(todos.id)}/> </h4>
        <p>Id: {todos.id}</p>

        </div>

    )

}; 

export default Todo; 