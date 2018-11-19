import React from 'react';
import {Link} from 'react-router-dom';

export default class Playbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseHeartOver: false,
      mouseShuffleOver: false,
      mousePreviousOver: false,
      mousePlayOver: false,
      mouseNextOver: false,
      mouseRepeatOver: false,
      mouseQueueOver: false,
      playing: props.playing,
      pause: props.pause
    }
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.audio = document.createElement('audio');
    this.handleClick = this.handleClick.bind(this);
    this.audio.src = this.props.currentSong.song.songUrl;
  }

  handleMouseOver(field) {
    return () => this.setState({[field]: !this.state[field]});
  }

  handleClick() {
    if(this.state.pause) {
      this.audio.play();
      this.onPlaying();
    } else if (this.state.playing) {
      this.audio.pause();
      this.onPause();
    }
  }

  onPlaying() {
    this.setState({playing: true, pause: false});
  }

  onPause() {
    this.setState({playing: false, pause: true});
  }

  // playAudio() {
  //   if(pause) {
  //     this.audio.play();
  //     this.onPlaying();
  //   }
  // }
  //
  // pauseAudio() {
  //   if(playing) {
  //     this.audio.pause();
  //     this.onPause();
  //   }
  // }

  componentDidUpdate() {

  }

  render() {
    // debugger
    let albumCover;
    albumCover = this.props.currentSong.song ? this.props.currentSong.song.imageUrl : " ";
    let songTitle;
    songTitle = this.props.currentSong.song ? this.props.currentSong.song.title : " ";
    let songArtist;
    songArtist = this.props.currentSong.song ? this.props.currentSong.song.artist : " ";

    let playbutton;
    this.state.playing ?
    // debugger
    return (
      <div className="player-controls">
        <footer className="play-bar-container">
          <div className="play-bar">
            <div className="play-bar-left">
              <div className="current-song-info">
                <span className="current-song-album-cover">
                  <Link to="song">
                    <img src={albumCover}/>
                  </Link>
                </span>
                <div className="current-song-title">
                  <div className="current-song-title-top-line">
                    <Link to="song">{songTitle}</Link>
                  </div>
                  <div className="current-song-title-bottom-line">
                    <Link to="artist">{songArtist}</Link>
                  </div>
                </div>
                <button className="current-song-heart-icon" onMouseEnter={this.handleMouseOver("mouseHeartOver")} onMouseLeave={this.handleMouseOver("mouseHeartOver")}>
                  <img src={this.state.mouseHeartOver ? window.heartIcon : window.heartGrayIcon} />
                </button>
              </div>
            </div>
            <div className="play-bar-center">
              <div className="player-controls-center">
                <div className="player-controls-buttons">
                  <button className="player-controls-shuffle-button" onMouseEnter={this.handleMouseOver("mouseShuffleOver")} onMouseLeave={this.handleMouseOver("mouseShuffleOver")}>
                    <img src={this.state.mouseShuffleOver ? window.shuffleIcon : window.shuffleGrayIcon} />
                  </button>
                  <button className="player-controls-previous-next-button" onMouseEnter={this.handleMouseOver("mousePreviousOver")} onMouseLeave={this.handleMouseOver("mousePreviousOver")}>
                    <img src={this.state.mousePreviousOver ? window.previousIcon : window.previousGrayIcon} />
                  </button>
                  <button className="player-controls-play-button" onClick={this.handleClick} onMouseEnter={this.handleMouseOver("mousePlayOver")} onMouseLeave={this.handleMouseOver("mousePlayOver")}>
                    <img src={this.state.mousePlayOver ? window.playIcon : window.playGrayIcon} />
                  </button>
                  <button className="player-controls-previous-next-button" onMouseEnter={this.handleMouseOver("mouseNextOver")} onMouseLeave={this.handleMouseOver("mouseNextOver")}>
                    <img src={this.state.mouseNextOver ? window.nextIcon : window.nextGrayIcon} />
                  </button>
                  <button className="player-controls-repeat-button" onMouseEnter={this.handleMouseOver("mouseRepeatOver")} onMouseLeave={this.handleMouseOver("mouseRepeatOver")}>
                    <img src={this.state.mouseRepeatOver ? window.repeatIcon : window.repeatGrayIcon} />
                  </button>
                </div>
                <div className="player-controls-playbar">
                  <div className="player-controls-playbar-progress-time">0:00</div>
                  <div className="progress-bar">
                    <div className="middle-align">
                      <div className="play-bar-progress-status"></div>
                    </div>
                  </div>
                  <div className="play-controls-playbar-duration">2:45</div>
                </div>
              </div>
            </div>
            <div className="play-bar-right">
                <div className="extra-controls">
                  <button className="queue-button" onMouseEnter={this.handleMouseOver("mouseQueueOver")} onMouseLeave={this.handleMouseOver("mouseQueueOver")}>
                    <img src={this.state.mouseQueueOver ? window.playlistIcon : window.playlistGrayIcon} />
                  </button>
                  <div className="volume-bar">
                    <button className="volume-button">
                      <img src={window.maxVolumeGrayIcon} />
                    </button>
                    <div className="volume-progress-bar-container">
                      <div className="volume-progress-bar-background">
                        <div className="volume-progress-bar"></div>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
