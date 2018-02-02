import Api from '../data/api';
import * as types from '../constants/actionTypes';

	export function likeSongEndPoint(song_id,user_ip,endpoint){
		return function (dispatch){
		dispatch({type: types.LIKE_SONG_REQUEST});
		Api.likeSongEndPoint(song_id,user_ip,endpoint).then(
			song_status=>dispatch({type:types.LIKE_SONG_SUCCESS, payload:song_status})
			,
			error=>dispatch({type: types.LIKE_SONG_ERROR,payload: error})
			);
		};
	}
	
	export function dislikeSong(id){
		return function (dispatch){
		dispatch({type: types.DISLIKE_SONG_REQUEST});
		Api.dislikeSong(id).then(
			new_song=>dispatch({type:types.DISLIKE_SONG_SUCCESS, payload: new_song})
			,
			error=>dispatch({type: types.DISLIKE_SONG_ERROR, payload: error})
		 );
		};
	}