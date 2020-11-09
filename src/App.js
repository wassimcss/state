import React, { Component } from 'react'
import  './App.css'

export class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      Person: [
        { fullName: 'Wassim AHMAD' },
        { bio: 'My name is Wassim Ahmed and I am a Junior Web Developer from GO MY CODE. I am an accomplished coder and programmer, and I enjoy using my skills to contribute to the exciting technological advances .Also, I graduated from the Engineering school of Sfax  in 2018 with a Master Degree in Electromechanical engineering.' },
        { imageSrc: 'https://www.tanitjobs.com/files/pictures/image_1.PNG' },
        { profession: 'Web developper junior' }
      ],
      isToogle: false,
      count: 0,
      
    }
  }
  toogle = () => {
    let isToogle = this.state.isToogle
    this.setState({ isToogle: !isToogle })
  }

  componentDidMount () {
  
   setInterval(() => {
      let count = this.state.count
      this.setState({count:count+1})
       
     }, 1000);   
  }
  
  render() {

    let isToogle = this.state.isToogle
    const Person = this.state.Person
    return (

      <div className="stateShow">
        {!isToogle ?
          <div>
            <img src={Person[2].imageSrc} alt="" />
            <h1>{Person[0].fullName}</h1>
            <h2>{Person[3].profession}</h2>
            <p>{Person[1].bio}</p>
          </div> : <p className="profile">Show your profile</p>
        }         
      <button onClick={this.toogle} style={isToogle ? {backgroundColor:"green"} : {backgroundColor:"red"}} >{isToogle ? "appear" : "hide" }</button><br/>
      <p className="second">{!isToogle ? this.state.count:null}</p>
      
      </div>

    )
  }
}

export default App
