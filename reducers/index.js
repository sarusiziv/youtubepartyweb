import {combineReducers} from 'redux';
import playlist from './playlistReducer';
import song from './songReducer';

const rootReducer = combineReducers({
	playlist,
	song
});
export default rootReducer