import React, {useState} from 'react'

console.log('asdasd')

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
        <div className = 'container-counter'>
            <h1 className='num'>{num}</h1>
            <div className='divider'>
            <button onClick={decrement} className='button'>-</button>
            <button onClick={increment} className='button'>+</button>
            </div>
            <p className = 'title'>Counter with Function</p>
        </div>
    );
}


export default CounterFunc;


