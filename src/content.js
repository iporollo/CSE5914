/* src/content.js */
/*global chrome*/
import AudioAnalyser from './components/audio-analyzer/audio-analyzer';
import React from 'react';
import ReactDOM from 'react-dom';
import Frame, { FrameContextConsumer }from 'react-frame-component';
import "./content.css";


class ExtensionBase extends React.Component{

    self = this;

   constructor(props) {
      super(props);
       this.state = { audio: null, test: null, spotifyAPI: null };
       this.toggleMicrophone = this.toggleMicrophone.bind(this);
       this.createPlaylist = this.createPlaylist.bind(this);
       localStorage.setItem('spotifyAccessToken', null);
    }

   async setAudioGlobalStore() {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      this.setState({audio});
      // localStorage.setItem("audioRecorder", JSON.stringify(audio));
    }
  
   async getMicrophone() {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
       this.setState({ audio });


      // if(localStorage.getItem("audioRecoder") != null && JSON.parse(localStorage.getItem("audioRecoder")).length > 0) {
      //    let currentMediaObj = JSON.parse(localStorage.getItem("audioRecoder"));
      //   let newMediaStreamObj = currentMediaObj.clone();
      //   this.setState({ audio: newMediaStreamObj });
      // }
      // else {
      //   this.setAudioGlobalStore();
      //   this.setState({ audio: JSON.parse(localStorage.getItem("audioRecoder")) });
      // }    
    }
    
   stopMicrophone() {
      this.state.audio.getTracks().forEach((track) => track.stop());
      this.setState({ audio: null });
   }
   toggleMicrophone() {
      if (this.state.audio) {
        this.stopMicrophone();
      } else {
        this.getMicrophone();
      }
    }

    testButton() {
            var event = document.createEvent('Event');
            event.initEvent('hello');
            document.dispatchEvent(event);
			console.log("Opening AUTH");

    }

    createPlaylist(name) {
        var token = localStorage.getItem("spotifyAccessToken");
        if (token) {
            var s = new window.SpotifyWebApi();
            s.setAccessToken(token);
            s.getMe().then((value) => {
                var userID = value.id;
                console.log(userID);
                var playlistBody = { "name": name };
                s.createPlaylist(userID, playlistBody).then((playlistData) => {
                    console.log(playlistData);
                    var playlistID = playlistData.id;
                    this.addSongsArtist(name, 10, playlistID);
                });
            });
        } else {

        }
    }

     addSongsArtist(name, numberOfSongs, playlistID) {
        var token = localStorage.getItem("spotifyAccessToken");
        var s = new window.SpotifyWebApi();
        s.setAccessToken(token);
        var query = "artist:" + name;
        var searchType = ["track"];
        var searchBody = { "limit": numberOfSongs.toString() };
         s.search(query, searchType, searchBody).then((results) => {
             console.log(results);
             var songArray = [];
             for (var i = 0; i < 9; i++) {
                 songArray[i] = results.tracks.items[i].uri;
             }
             s.addTracksToPlaylist(playlistID, songArray);
        });
    }
  
    render() {
        return (
            <Frame head={[<link type="text/css" rel="stylesheet" href={chrome.runtime.getURL("/static/css/content.css")} ></link>]}> 
              <FrameContextConsumer>
               {
               // Callback is invoked with iframe's window and document instances
                   ({document, window}) => {
                      // Render Children
                      return (
                         <div className={'my-extension'}>
                            <h1>I wish this would work :(</h1>

                            <button onClick={this.toggleMicrophone}>
	                               {this.state.audio ? 'Stop microphone' : 'Get microphone input'}
                           </button>
                              {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}

                           <button onClick={this.testButton}>
                               {this.state.test ? 'SpotifyIsDumb' : 'LoginToSpotify'}
                           </button>
                              <button onClick={() => { this.createPlaylist("Kanye West") }}>
                               {this.state.test ? 'CreatePlaylist' : 'CreatePlaylist'}
                           </button>
						 </div>
                      )
                   }
                }
               </FrameContextConsumer>
            </Frame>
        )
    }
}

const app = document.createElement('div');
app.id = "my-extension-root";


app.style.display = "none";
chrome.runtime.onMessage.addListener(
   function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action") {
        toggle();
      }
   }
);

function toggle(){
   if(app.style.display === "none"){
     app.style.display = "block";
   }else{
     app.style.display = "none";
   }
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    if (msg.action === 'access_token') {
        localStorage.setItem("spotifyAccessToken", msg.token);
    }
});

document.body.appendChild(app);
ReactDOM.render(<ExtensionBase />, app);
document.addEventListener("hello", function (data) {
    chrome.runtime.sendMessage("test");

});





// wait for the store to connect to the background page
// store.ready().then(() => {
//   // The store implements the same interface as Redux's store
//   // so you can use tools like `react-redux` no problem!
//   ReactDOM.render(
//       <ExtensionBase />
//     ,app);
// });

