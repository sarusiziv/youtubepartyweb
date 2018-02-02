import initialState from './initialState'
import * as types from '../constants/actionTypes'


export default function playlistReducer (state = initialState.playlist, action){
	
	switch (action.type){
		case types.GET_PLAYLIST_REQUEST:
			return {
				...state,
				isLoading: true
			};
			
		case types.GET_PLAYLIST_SUCCESS:
			return {
				...state,
				isLoading: false,
				playlist : action.payload
			};
			
		case types.GET_PLAYLIST_ERROR:
			return {
				...state,
				isLoading: false,
				errors: state.errors.concat(action.payload)
			};
			
		case types.UPDATE_PLAYLIST_REQUEST:
			console.log("req")
			return {
			...state,
			isUploading: true
		};
			
		case types.UPDATE_PLAYLIST_SUCCESS:

			return {
				...state,
				isUploading: false,
				playlist: action.payload
				
			
			};
			
		case types.UPDATE_PLAYLIST_ERROR:
			return {
				...state,
				isUploading: false,
				errors: []
			};
			
		case types.GET_NEXT_SONG_REQUEST:
			return {
				...state,
				isLoading: true,
 			};
			
		case types.GET_NEXT_SONG_SUCCESS:
			return {
				...state,
				isLoading: false,
				nextSong :""

			};
			
		case types.GET_NEXT_SONG_ERROR:
			return {
				...state,
				isLoading: false,
				errors: state.errors.concat(action.payload)
			};

	
			
		default :
			return state
				
	}
	
}