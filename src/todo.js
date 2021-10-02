import React from 'react'; 

const Todo = ({tasks}) => {

    return(
        <h3 key={tasks[1]}> {tasks}</h3>

    )

}; 

export default Todo; 