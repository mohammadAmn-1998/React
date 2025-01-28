import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));


let tick= ()=>{

const element  =<div><h1>سلام دوستان</h1>
<h2>
    its {new Date().toLocaleTimeString()}
</h2></div>

root.render(element)
}

setInterval(()=>
    tick()
,1000)

