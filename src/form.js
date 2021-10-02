import React from "react"

const Form = ({updateNewValue, userInput, handlesubmit}) => {

    
    return (
       
       <>

           <form onSubmit={handlesubmit}>    
               <h1> Test </h1>
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