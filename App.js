import React , { Component } from 'react';
import Navigation from './components/navigation/navigation';
import './App.css';
import Clarifai from 'clarifai';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Logo from './components/Logo/logo';
import SignIN from './components/SignIn/SignIn'
import Register from './components/Register/Register'
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/Facerecognition/FaceRecognition'
import Particles from 'react-particles-js';
import 'tachyons';

const app = new Clarifai.App({
	apiKey: '5be0cebe10db43d48556664c571ede5f'
});

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
			imageUrl:'',
			box:{},
			route: 'signin',
		}
	}	
	displayFaceBox = (box) =>{
		console.log(box);
		this.setState({box: box});
	}

	calculateFaceLocation = (data) =>{
		const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('inputimage');
		const height = Number(image.height);
		const width  = Number(image.width);
		console.log(height, width);
		return{
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - (clarifaiFace.right_col * width),
			bottomRow : height - (clarifaiFace.bottom_row * height),
			}

	}

	onInputChange = (event) =>{
		this.setState({input: event.target.value});		
	}
	onRouteChange = (route)=>{
		console.log(route);
		this.setState({route: route});
	}

	onButtonSubmit = ()=>{
		this.setState({imageUrl: this.state.input});
		app.models.predict(
			Clarifai.FACE_DETECT_MODEL,
			    this.state.input)
			.then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
			.catch(err => console.log(err));
	}
  render(){
    return(
    <div className="App">
      <Particles className='particles'
      params={particlesOptions}/>
      {this.state.route === "home" 
      ?<div> 
      <Navigation onRouteChange={this.onRouteChange}/>
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
      <FaceRecognition box={this.state.box} imageUrl={this.state.imageUrl}/>
      </div>
      :( this.state.route === 'signin'
		? <SignIN onRouteChange={this.onRouteChange} />
		: <Register onRouteChange={this.onRouteChange} />)
	
      }
    </div>
  );
}
}
export default App;