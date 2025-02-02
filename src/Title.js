import React from 'react';



class Title extends React.Component{
 
     constructor(){
        super()
        this.state ={
            title : 'HELLO WORLD!'
        }
     }

    render(){
        return(
            <h1>{this.state.title}</h1>
        )
    }


}

export default Title;