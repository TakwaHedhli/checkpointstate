import React, { Component } from 'react'
import Profil from './Component/Profil'

export default class App extends Component {
  constructor(){
    super()
    this.state ={
      show : true
    }
  }
  handleClick = () =>{
    this.setState({
      show : !this.state.show
    })
  };

  render() {
    let src = "https://i.pinimg.com/550x/19/9f/ea/199fea43c5fc7d1b6b724cd3db6eaa3a.jpg"

    return (
      <div>
        
<h1>Profile</h1>

<button onClick={this.handleClick}>Click Me !!</button>
{
  this.state.show ? (
<Profil    fullName="Hedhli_Takwa"
 profession="Web developper"
 src={src} 
 handleClick={this.handleClick}/>

  ): null
}

      </div>
    )
  }
}
