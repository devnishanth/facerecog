import React , { Component } from 'react';
import Navigation from './components/navigation/navigation';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/logo';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import 'tachyons';

const particlesOptions = {
 	particles: {
 		number: {
 			value: 30,
 			density: {
 				enable: true,
 				value_area: 100
 			}
 		}
 	}
 }
class App extends Component {
	constructor(){
		super();
		this.state={
			input:'',
		}
	}	
	onInputChange = (event) =>{
		console.log(event.target.value);
	}
  render(){
    return(
    <div className="App">
      <Particles className='particles'
      params={particlesOptions}/>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange}/>
    </div>
  );
}
}

export default App;