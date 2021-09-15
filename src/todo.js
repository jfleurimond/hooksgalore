import React, {useState} from 'react'; 



function ToDo(props){
    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1); 
    }
    const decreaseCount = () => {
        if(count != 0) {
            setCount(count - 1); 
        }
        
    }

    return(

        <div className ="container">
        <input className="formInput" type="text" placeholder="Enter your todo Item" />
        <h1> Test with the current state {count} </h1>
        <button onClick={increaseCount} >Increase Count </button>
        <button onClick={decreaseCount}> Decrease Count</button>
        </div>
    ); 

}


export default ToDo; 