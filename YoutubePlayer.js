import YouTube from 'react-youtube'
import React from 'react';
import $ from 'jquery';

class YoutubePlayer extends React.Component {
constructor(props) 
  {
      super(props);
      this.state = {nowPlaying: ""};
      this.nextSong = this.nextSong.bind(this);
	  this.chooseNextSong = this.chooseNextSong.bind(this)

  };
	
	componentDidMount(){
		this.chooseNextSong()

	}
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters 
        autoplay: 1
      }
    };
 
    return (
      <YouTube
        videoId={this.state.nowPlaying}
        opts={opts}
        onReady={this._onReady}
        onEnd={this.nextSong}

      />
    );
  }
 
  _onReady(event) {
    // access to player in all event handlers via event.target 
    event.target.playVideo();
  }
 nextSong(event) {
     this.chooseNextSong()
    event.target.playVideo();
  }   
 
chooseNextSong()
{
    $.get("http://youtubeparty:5000/nextsong",)
      .then(res => {
        this.setState({nowPlaying: res});
      });
}
}


 export default YoutubePlayer