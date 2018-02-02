import Api from '../data/api';
import * as types from '../constants/actionTypes';

	export function getPlaylist(){
		return function (dispatch){
		dispatch({type: types.GET_PLAYLIST_REQUEST});
		Api.getPlaylist().then(
			playlist=>dispatch({type:types.GET_PLAYLIST_SUCCESS, payload: playlist})
			,
			error=>dispatch({type: types.GET_PLAYLIST_ERROR,payload: error})
			);
		};
	}
	
	export function updatePlaylist(id){
		return function (dispatch){
		dispatch({type: types.UPDATE_PLAYLIST_REQUEST});
		Api.updatePlaylist(id).then(
			new_song=>dispatch({type:types.UPDATE_PLAYLIST_SUCCESS, payload: new_song})
			,
			error=>dispatch({type: types.UPDATE_PLAYLIST_ERROR, payload: error})
		 );
		};
	}
	export function getNextSong(){
		return function (dispatch){
		dispatch({type: types.GET_NEXT_SONG_REQUEST});
		Api.getNextSong().then(
			next_song=>dispatch({type:types.GET_NEXT_SONG_SUCCESS, payload:next_song})
			,
			error=>dispatch({type: types.GET_NEXT_SONG_ERROR,payload: error})
			);
		};
	}
