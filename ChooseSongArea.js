import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {updatePlaylist} from './actions/playlistActions'
import {RingLoader} from 'react-spinners';

const loadingSpinnerStyle = {
	marginLeft : "45%",
}
class ChooseSongArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        value: [],
		dialogOpen:false
	};
	this.handleCloseDialog = this.handleCloseDialog.bind(this);
	this.save = this.save.bind(this)
	this.handleChange = this.handleChange.bind(this)
  }

	handleCloseDialog(event) {
    this.setState({dialogOpen: false});
  }
	save(event) {
		this.props.action.updatePlaylist(this.state.value)
    	
  }
	   handleChange = (event) => {
       this.setState({value: event.target.value});
  }


  render() {
	  
	    	  if (this.props.isUploading)
    return (
	  <div style ={loadingSpinnerStyle}>
		    <RingLoader
          		color={'#123abc'} 
          		loading={this.props.loading}
        />
	  </div>
	  );
	  
    return (
		<MuiThemeProvider>
			<div>
				<form onSubmit={this.save}>
					<TextField hintText="Insert Youtube ID" onChange={this.handleChange}/> 
					<FlatButton label="Send" type= "submit" primary={true} />
				</form>
			
			</div>
		</MuiThemeProvider>
    );
  }
}

ReactDOM.render(
  <ChooseSongArea />,
  document.getElementById('root')
);

const  mapStateToProps = (store) =>
{ 
	return {
			isUploading: store.playlist.isUploading
		 };
}

const mapDispatchToProps = (dispatch)=> {
	return {
		action: bindActionCreators({updatePlaylist},dispatch)
	};
}
export default connect(mapStateToProps,mapDispatchToProps)(ChooseSongArea);
