import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {GridList,GridTile} from 'material-ui/GridList';
import {getPlaylist} from './actions/playlistActions'
import {likeSongEndPoint} from './actions/songActions'
import YoutubeCard from './YoutubeCard'

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
	marginTop: "50px",
    justifyContent: 'space-around'
  },
  gridList: {
  },
};


class PlaylistButtons extends React.Component {
	constructor(props){
    	super(props);
	    this.state = {
			ip:"",
			songs:this.props.songs
		};
		   	this.addIpToState = this.addIpToState.bind(this)
 }
	
  addIpToState()
	{
		window.RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;   //compatibility for firefox and chrome
		var pc = new RTCPeerConnection({iceServers:[]}), noop = function(){};      
		pc.createDataChannel("");    //create a bogus data channel
		pc.createOffer(pc.setLocalDescription.bind(pc), noop);    // create offer and set local description
		pc.onicecandidate = function(ice){  //listen for candidate events
			if(!ice || !ice.candidate || !ice.candidate.candidate)  return;
			var userIP = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(ice.candidate.candidate)[1];
			this.setState({'ip': userIP})
			pc.onicecandidate = noop;
		}.bind(this);
	}
componentWillMount(){
	this.addIpToState()
	setInterval(()=>this.props.actions.getPlaylist(),10000)
	}
	componentWillReceiveProps(nextProps)
	{
		this.setState({songs:nextProps})
	}

  render() {
       var songs_keys = Object.keys(this.props.songs)
       const playlist = songs_keys.map((song) =>
		<GridTile cols ={1} rows={1.5} key={song} >					   
	   		<YoutubeCard user_ip={this.state.ip} song_id={song} song={this.props.songs[song]} onLike={this.like}/>
		</GridTile>					   

	   );
	
    return (
		
    <div style={styles.root} > 
		<GridList style = {styles.gridList} cols={3} rows={3} padding ={2}>
       		{playlist}
		</GridList>
    </div>
    );
  }
}


const  mapStateToProps = (store) =>
{ 
	return {
			songs: store.playlist.playlist,
			isUploading: store.playlist.isUploading
		   };
}

const mapDispatchToProps = (dispatch)=> {
	return {
		actions: bindActionCreators({getPlaylist,likeSongEndPoint},dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (PlaylistButtons);
