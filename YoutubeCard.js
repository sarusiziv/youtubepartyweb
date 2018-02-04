import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {likeSongEndPoint} from './actions/songActions'
import FlatButton from 'material-ui/FlatButton';
import {Paper} from 'material-ui'
import ActionThumbUp from 'material-ui/svg-icons/action/thumb-up'
import ActionThumbDown from 'material-ui/svg-icons/action/thumb-down'
import * as colors from 'material-ui/styles/colors'

class YoutubeCard extends React.Component {
	
	 constructor(props){
		super(props);
		this.like= this.like.bind(this)
		this.dislike= this.dislike.bind(this)
		this.image_card = "http://img.youtube.com/vi/"  +this.props.song_id + "/1.jpg";

  }

	like(song_id,user_ip)
	{
		var endpoint = true
		if (user_ip !== "")
		{

			if(!(this.props.song['LikesUsers']).indexOf(user_ip)>= 0)
			{
				this.props.actions.likeSongEndPoint(song_id,user_ip, endpoint)
				this.props.song['LikesUsers'].push(user_ip)
				if((this.props.song['DislikesUsers']).indexOf(user_ip)>= 0)
					{
						this.props.song['DislikesUsers'].pop(this.props.song['DislikesUsers'].indexOf(user_ip))
					}
			}
		}

	}
	
	
	dislike(song_id,user_ip)
	{
		var endpoint = false
		if (user_ip !== "")
		{
			if(!(this.props.song['DislikesUsers']).indexOf(user_ip)>= 0)
			{
				this.props.actions.likeSongEndPoint(song_id,user_ip, endpoint)
				this.props.song['DislikesUsers'].push(user_ip)

				if((this.props.song['LikesUsers']).indexOf(user_ip)>= 0)
					{
						this.props.song['LikesUsers'].pop(this.props.song['LikesUsers'].indexOf(user_ip))

					}
			}
		}

	}

  render(){
    return (
	<div style={{ padding:'10px'}}>
		<Paper style ={{padding:10,backgroundColor:'rgba(141,200,255,0.50)'}}>
			{this.props.song['Name']}
		</Paper>
		<Paper style ={{padding:10,backgroundColor:'rgba(0,0,0,0.5)'}}>
		<img src ={this.image_card} height="100" width = "150" alt ="youtube gif"/> <br/>
		 <FlatButton
			  label={this.props.song['LikesUsers'].length}
			  primary={true}
			  icon={<ActionThumbUp/>}
			  onClick ={()=>this.like(this.props.song["SongID"],this.props.user_ip)}
		/> 
		 <FlatButton
			  style = {{color:colors.red300}}
			  label={this.props.song['DislikesUsers'].length}
			  primary={true}
			  icon={<ActionThumbDown/>}
			  onClick = {()=>this.dislike(this.props.song_id,this.props.user_ip)}
		/>
		</Paper>
	</div>

	);
  }
}
const  mapStateToProps = (store) =>
{ 
	return {
				updatedSong: store.song.song_status,
				isLoading: store.song.isLoading,
				isLiked: store.song.isLiked

		   };
}

const mapDispatchToProps = dispatch=> {
	return {
		actions: bindActionCreators({likeSongEndPoint},dispatch)
	}
}
export default connect(mapStateToProps, mapDispatchToProps) (YoutubeCard);
