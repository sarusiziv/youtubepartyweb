import React, { Component } from 'react';
import './App.css';
import ChooseSongArea from './ChooseSongArea';
import PlaylistButtons from './PlaylistButtons'
class ChooseApp extends Component {
     constructor(props){
    	super(props);
	    this.state = {
			ip:"",
			value: [],
			dialogOpen:false,
			songs:""
		};
  }
  
  render() {
    return (
      <div className="ChooseApp">
        <ChooseSongArea onChange={this.handleChange} textValue={null} />
       <PlaylistButtons/>
      </div>
    );
  }
}



export default ChooseApp;
