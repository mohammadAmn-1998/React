import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
const root = ReactDOM.createRoot(document.getElementById('root'));


class Timer extends React.Component{
constructor(){
    super();
    this.state ={
    time : new Date().toLocaleTimeString()
    } 
}
    render(){
        setInterval(() => {
            this.setState({
                time : new Date().toLocaleTimeString()
            })
        }, 1000);
      
        return  ( 
                <h2 className='timer'>
                    its {this.state.time}
                </h2>
        )
    }

   
}
class Title extends React.Component{
 
    render(){
        return(
            <h1>سلام دوستان</h1>
        )
    }
}
class App extends React.Component{
    render(){
        return(
            <div className='main'> 
           <Title/>
            <Timer/>
                </div>
          
        )
    }
}


root.render(<App/>)

