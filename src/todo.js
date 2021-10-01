import React, {useState, useEffect} from 'react'; 
import Task from './task';



function ToDo(){
    const [currentTodo, updateList] = useState({newItem:"", 
    list:[ 
        {
        task: "clean house", 
        ID : 1
    },

    {
        task: "fix car", 
        ID : 2
    }


    ]});

    

    return(

        <div className ="container">
        {/* <form> 
        <input className="formInput" type="text" placeholder="Enter your todo Item"
        value={currentTodo.newItem}
         onChange={e => updateList(e.target.value)} />
        <button onClick={updateCurrentList} > Submit </button>
        </form>  */}

        {currentTodo.list.map((tasks) => {
            return (
                <Task task = {tasks.task} />
            );
        }


        )}
       
        
        </div>
    ); 

}


export default ToDo; 