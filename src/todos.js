import React, {useState} from 'react'; 
import Todo from './todo';
import Form from './form';


function ToDos(){
    
const [currentTodo, updateTodo] = useState([
{
    id: 1,
    Task: "Clean Room",
    completed: false
}, 

{
    id: 2,
    Task: "Take out Trash",
    completed: false
}


]); 

const handleToggle =() =>{
    console.log("Togggle test");
}

const deleteTask = () => {
    console.log("deleting task test");
}
   

    return(

        <div className = "mainContainer"> Main Test
        
            {currentTodo.map((tasks) => {
                return(
                    <Todo todos = {tasks} />
                )
            }

            )}
               
            
        </div>

       )}
        
    


export default ToDos; 