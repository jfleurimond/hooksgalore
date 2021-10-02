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

const addTask = (userInput) => {
    console.log(userInput)
}

    return(

        <div className = "mainContainer"> <h1>Main Test </h1>

            <Form addTask = {addTask}/> 
        
            {currentTodo.map((tasks) => {
                return(
                    <Todo todos = {tasks} />
                )
            }

            )}
        
               
            
        </div>

       )}
        
    


export default ToDos; 