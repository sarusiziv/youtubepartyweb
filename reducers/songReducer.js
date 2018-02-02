import initialState from './initialState'
import * as types from '../constants/actionTypes'


export default function songReducer (state = initialState.song, action){
	
	switch (action.type){
		case types.LIKE_SONG_REQUEST:
			return {
				...state,
				isLoading: true,
 			};
			
		case types.LIKE_SONG_SUCCESS:
			return {
				...state,
				isLoading: false,
				song_status : action.payload,
				isLiked: true

			};
			
		case types.LIKE_SONG_ERROR:
			return {
				...state,
				isLoading: false,
				errors: state.errors.concat(action.payload)
			};

		case types.DISLIKE_SONG_REQUEST:
		return {
			...state,
			isLoading: true
		};
			
		case types.DISLIKE_SONG_SUCCESS:
			return {
				...state,
				isLoading: false,
				playlist : action.payload
			};
			
		case types.DISLIKE_SONG_ERROR:
			return {
				...state,
				isLoading: false,
				errors: state.errors.concat(action.payload)
			};
		default :
			return state
				
	}
	
}