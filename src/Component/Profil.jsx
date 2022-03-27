import React, { Component } from 'react'

export default class Profil extends Component {
    constructor(props){
        super(props)
        this.state={
            count : 0 ,
            intervall : null
        }
    }
        componentDidMount(){
            this.setState({
                intervall : setInterval (() =>{
                    this.setState({
                        count : this.state.count + 1
                    })
                },1000)
            })
        }
        componentWillUnmount(){
            clearInterval(this.state.intervall)
        }
    
  render() {
      const{fullName , profession , src , handleClick} =this.props
    return (
      <div>
          <h1>Profile</h1>
          <h1>{this.state.count}</h1>

          <h2>{fullName}</h2>
          <h2>{`Hi I'am a ${profession}`}</h2>
          <img src={src} alt="" width="400" />
          <br/>
          
      </div>
    )
  }
}
