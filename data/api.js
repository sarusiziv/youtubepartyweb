import $ from 'jquery';
import {get_url} from './utils';
import errorMessage from '../utils/ErrorMessage'
class Api {
	
getPlaylist()
	{
		
	let url =get_url('/songs')
	return new Promise ((resolve,reject)=>{
		try {
			$.get(url)
				.then(
				playlist=> resolve(playlist),
				error=> reject(errorMessage("failed to get playlist",error))
			);
			}
		catch (e){
			reject(errorMessage("Unexpected error while trying to get playlist",e))
		}
	});
			
}
	

updatePlaylist(id)
{
		let url =get_url('/songs')
     	return new Promise ((resolve,reject)=>{
			try {
				$.post(url,{"song_id":id})
					.then(
					added_song=>resolve(added_song),
					error=>reject(errorMessage("failed to add song to db",error))
				);
				}
			catch (e){
				reject(errorMessage(`Unexpected error while trying to add song id: '${id}'`));
			}
		});

}
	
likeSongEndPoint(song_id,user_id,endpoint)
{
		let url =get_url('/songs/'+ song_id)
     	return new Promise ((resolve,reject)=>{
			try {
				$.ajax({
					url: url,
					method: 'PUT',
					data:{"user_id":user_id,"like_endpoint": endpoint}})
					.then(
					song_status=>resolve(song_status),
					error=>reject(errorMessage("failed to liked song",error))
				);
				}
			catch (e){
						console.log(e)
						
				reject(errorMessage(`Unexpected error while trying to like song id: '${song_id}'`));
			}
		});

}


}


	export default new Api()