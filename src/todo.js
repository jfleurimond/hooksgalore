import React, {useState, useEffect} from 'react'; 
import Task from './task';



function ToDo(props){
    const [currentTodo, updateList] = useState({newItem:"", list:[]});

    const updateCurrentList = (e) => {
        e.preventDefault(); 
        console.log(currentTodo.newItem);
        updateList([...currentTodo.list, currentTodo.newItem]); 
        currentTodo.newItem = ""; 
    }
    const decreaseCount = () => {
        if(currentTodo !== 0) {
            updateList( currentTodo); 
        }
        
    }

    console.log(currentTodo.list); 

    useEffect(()=> {
        console.log(currentTodo.list); 
    }, []);

    
    // const task = currentTodo.list.map((task) => {
    //     return (
    //       <Task task={task} /> )
    //       });

    return(

        <div className ="container">
        <form> 
        <input className="formInput" type="text" placeholder="Enter your todo Item"
        value={currentTodo.newItem}
         onChange={e => updateList(e.target.value)} />
        <button onClick={updateCurrentList} > Submit </button>
        </form> 

        <h1> Tests with the current state {currentTodo.newItem} </h1>

       
        
        </div>
    ); 

}


export default ToDo; 