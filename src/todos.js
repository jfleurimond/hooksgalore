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
    let copy = [...currentTodo];
    copy = [...copy, {id: Math.floor(Math.random() * 1000), Task: userInput, completed: false}]
    updateTodo(copy); 
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