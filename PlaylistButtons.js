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
			ip:"test",
			songs:this.props.songs
		};
			this.playlist=null;
 }

	componentWillMount(){
        this.props.actions.getPlaylist()
	//setInterval(()=>this.props.actions.getPlaylist(),10000)
	}
	componentWillReceiveProps(nextProps)
	{
		this.setState({songs:nextProps})
	}

  render() {
			 if(this.props.isUploading!=true && Object.keys(this.props.songs).length>0){
			 	console.log(this.props.songs)
                 this.playlist =
                     ((this.props.songs)).map((song) =>
						 <GridTile cols={1} rows={1.5} key={song['SongID']}>
							 <YoutubeCard user_ip={this.state.ip} song_id={song['SongID']} song={song}
										  onLike={this.like}/>
						 </GridTile>);
             }
      return (
		  <div style={styles.root} >
			  <GridList style = {styles.gridList} cols={3} rows={3} padding ={2}>
                  {this.playlist}
			  </GridList>
		  </div>
      );  }
}


const  mapStateToProps = (store) =>
{ 
	return {
			songs: store.playlist.playlist,
			isUploading: store.playlist.isUploading,
			isLoading: store.playlist.isLoading
		   };
}

const mapDispatchToProps = (dispatch)=> {
	return {
		actions: bindActionCreators({getPlaylist,likeSongEndPoint},dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps) (PlaylistButtons);
