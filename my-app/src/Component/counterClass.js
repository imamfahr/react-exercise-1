import React, { Component } from 'react'

export default class CounterClass extends Component{
    constructor(){
        super()
        this.state = {
            countNum: 0
        }
    }

    increment = () => {
        this.setState({
          countNum: this.state.countNum + 1
        })
    }
    decrement =()=> {
        if(this.state.countNum<0){
            this.setState({
                countNum: 0 
            })
        }else if(this.state.countNum>0){
            this.setState({
                countNum: this.state.countNum - 1
              })
        }
    }

    render(){    
        return (
            <div className = 'container-counter-func'>
            <h1>Counter with class</h1>
                <h1>{this.state.countNum}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        );
    }


}

