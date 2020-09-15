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
            <div className ='container-counter'>
                <h1 className='num'>{this.state.countNum}</h1>
                <div className='divider'>
                <button onClick={this.decrement} className='button'>-</button>
                <button onClick={this.increment} className='button'>+</button>
                </div>
            <p className = 'title'>Counter with Class</p>
            </div>
        );
    }


}

