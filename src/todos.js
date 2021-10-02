import React, {useState} from 'react'; 
import Todo from './todo';
import Form from './form';


function ToDos(){
    const [todoList, updateTodoList] = useState([{id: 1, task:"homework", completed: false}]);

    const [userInput, setUserInput] = useState();

    const handlesubmit = (e)=> {
        e.preventDefault(); 
        addTask(userInput);
        setUserInput("")

    }
    
    const upddateNewValue = (e) => {
        setUserInput(e.target.value); 
        console.log(userInput);
    
    
    }

    const addTask = (userInput) => {

        let copy = [...todoList]; 
        copy = [...copy, [{id: Math.floor(Math.random() * 100), task: userInput,  completed: false}]];
        updateTodoList([...copy, userInput]); 
    }

   

    return(

        <div className ="container">
       

       
       
       <Form userInput={userInput} handlesubmit={handlesubmit} upddateNewValue={upddateNewValue}/>
       
       {todoList.map( (tasks) => {

            return (
                <Todo tasks={tasks} />
            )

       }

       )}
        
        </div>
    ); 

}


export default ToDos; 