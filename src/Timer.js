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


startCounter  =()=>{

   interval =  setInterval(() => {
                this.setState({
                    counter : this.state.counter - 1
                })
              }, 1000);

              document.getElementById('start_button').disabled = true;
              document.getElementById('stop_button').disabled = false;
    
}

    render(){
       
        return  ( 
              <>
                <h2 className='timer'>
                    its {this.state.counter}
                </h2>
                <button className='button-start' id='start_button' onClick={this.startCounter} >startCounter</button>
                <hr></hr>
                <button className='button-stop'id='stop_button' onClick={this.stopCounter} >stopCounter</button>
                </>
        )
    }

    componentDidUpdate(){

      if(this.state.counter === 0){
        clearInterval(interval)
        this.setState({
            counter : 10
        })
        document.getElementById('start_button').disabled = false;
        document.getElementById('stop_button').disabled = true;
      }

    }

stopCounter = ()=>{
clearInterval(interval)
document.getElementById('start_button').disabled = false;
document.getElementById('stop_button').disabled = true;
}
}

export default Timer;