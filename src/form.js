import React, {useState} from 'react';

const Form = ({addTask}) => {

    const [userInput, updateUserInput] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault(); 
        addTask(userInput); 
        updateUserInput(""); 

    }

    const updateNewValue = (e) => {
        updateUserInput(e.currentTarget.value); 
    }
    
    return (
       
       <>

           <form onSubmit={handlesubmit}>    
               <h1> Form starts here </h1>
               <input 
               type="text" 
               value={userInput}
               placeholder="enter to do" 
               onChange={updateNewValue} 
               />

               <button >Submit</button>
           </form>


        </>
    )
}

export default Form; 