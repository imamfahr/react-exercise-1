import React, {useState} from 'react'

function CounterFunc (){
    let [num, setNum] = useState(0);

    function increment(){
        setNum(num+1);
        console.log(num)
    }

    function decrement(){
        if(num<0){
            return 0
        }else if(num>0){
            setNum(num-1)
        }
    }
    
    return (
        <div className = 'container-counter-func'>
        <h1>counter with function</h1>
            <h1>{num}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    );
}


export default CounterFunc;


