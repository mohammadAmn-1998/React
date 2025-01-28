import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


class Timer extends React.Component{

    render(){
        return  ( 
             <div>
                <h1>سلام دوستان</h1>
             <h2>
            its {new Date().toLocaleTimeString()}
        </h2>
        </div>)
    }

}

let tick= ()=>{
root.render(<Timer/>)
}

setInterval(()=>
    tick()
,1000)

