import React from 'react';
import './style.css'
var interval;
class Timer extends React.Component{
constructor(){
    super();
    this.state ={
    counter : 10
    } 
}
componentDidMount(){
  
    interval =  setInterval(() => {
        this.setState((prevState) => ({
          counter: prevState.counter - 1,
        }));
      }, 1000);
   
}

    render(){
       
        return  ( 
                <h2 className='timer'>
                    its {this.state.counter}
                </h2>
        )
    }

    componentDidUpdate(){
if(this.state.counter == 0)
    clearInterval(interval);
    }
   
}

export default Timer;