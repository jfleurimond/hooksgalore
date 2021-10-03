import React, {useState} from 'react'; 
import Todo from './todo';
import Form from './form';


function ToDos(){
    
const [currentTodo, updateTodo] = useState([]); 

const handleToggle =() =>{
    console.log("Togggle test");
}

const deleteTask = (tasktodelete) => {
    let copy = [...currentTodo];
    updateTodo(copy.filter((taskid)=> taskid.id != tasktodelete)); 
    console.log(currentTodo);

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
                    <Todo todos = {tasks} deleteTask={deleteTask} key={tasks.id}/>
                )
            }

            )}
        
               
            
        </div>

       )}
        
    


export default ToDos; 