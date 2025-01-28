import React from 'react';
import './style.css'

import Timer from './Timer.js'
import Title from "./Title.js"


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

export default App;