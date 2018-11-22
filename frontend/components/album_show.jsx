import React from 'react';
import Navbar from './navbar/navbar';
import BrowseNavHeader from './browse_nav_header';
import {Link} from 'react-router-dom';
import PlaybarContainer from './playbar-container';

export default class PlaylistShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseOver: false,
      idxMouseOver: null,
      playing: false,
      pause: true,
      formerSong: this.props.currentSong.song
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.albumId);
  }

  handleMouseEnter(idx) {
    return () => {
      this.setState({mouseOver: true, idxMouseOver: idx});
    }
  }

  handleMouseLeave() {
    this.setState({mouseOver: false, idxMouseOver: null});
  }

  handleClick(song) {
    // debugger
    return () => {
      this.setState({ playing: !this.state.playing, pause: !this.state.pause, formerSong: this.props.currentSong.song });
      this.props.fetchCurrentSong(this.props.currentUserId, song.id);
      this.props.receivePlay(this.state.playing, this.state.pause);
    };
  }

  componentDidUpdate() {
    if(this.props.currentSong.song !== this.state.formerSong) {
      this.setState({formerSong: this.props.currentSong.song});
      window.audio.src = this.props.currentSong.song.songUrl;
      if(!this.state.playing) {
        window.audio.play();
        this.setState({ playing: true, pause: false});

      }
    }
  }

  render() {
    const renderNote = (
      <div className="music-note-icon-padding">
        <div className="music-note-icon-center">
          <div className="music-note-icon-margin">
            <img className="music-note-icon" src={window.musicNoteIcon} />
          </div>
        </div>
      </div>
    );

    let renderMore;
    let renderPlay;
    if(this.state.mouseOver) {
      renderMore = (
        <div className="track-list-more">
          <div className="track-list-more-margin-top">
            <button className="track-list-more-button">
              <img className="track-list-row-body-dots-icon" src={window.threeDotsIcon}/>
            </button>
          </div>
        </div>
      );

      renderPlay = (
        <div className="music-note-icon-padding">
          <div className="music-note-icon-center">
            <div className="music-note-icon-margin">
              <img className="music-note-icon" src={window.musicPlayIcon} />
            </div>
          </div>
        </div>
      );
    }


    let renderSongs;
    // debugger
    if (this.props.songs) {
      renderSongs = Object.values(this.props.songs).map( (song, idx) => {
        return (
          <li key={idx} className="track-list-row" onClick={this.handleClick(song)} onMouseEnter={this.handleMouseEnter(idx)} onMouseLeave={this.handleMouseLeave.bind(this)}>
            {this.state.idxMouseOver === idx ? renderPlay : renderNote}
            <div className="track-list-column">
              <div className="track-list-column-margin">
                <div className="track-list-name">{song.title}</div>
                <div className="track-list-name-second-line">
                  <span className="explicit-label">explicit</span>

                </div>
              </div>
            </div>
            {this.state.idxMouseOver === idx ? renderMore : ""}
            <div className="track-list-duration">
              <div className="track-list-duration-margin-top">
                <span>{song.duration}</span>
              </div>
            </div>
          </li>
        );
      });
    }

    return (
      <div className="album-show-root">
        <div className="album-show-container">
          <Navbar />
          <div className="playlist-show-main-content" >
            <div className="playlist-content-spacing" >
              <section className="content-playlist">
                <div className="cover-art-show">
                  <div>
                    <div className="track-list-header" >
                      <div className="track-list-img-title">
                        <div className="wrapper">
                          <img className="playlist-cover-img" src={this.props.album ? this.props.album.imageUrl : ""} />
                        </div>
                        <div className="playlist-title-wrapper">
                          <div className="album-title">
                            <span>{this.props.album ? this.props.album.title : ""}</span>
                          </div>
                        </div>
                        <div className="spotify-small-text">
                          <span>that music app</span>
                        </div>
                      </div>
                      <div className="track-list-header-play-button-top">
                        <button className="track-list-header-play-button">PLAY</button>
                      </div>
                      <div className="track-list-header-body">
                        <p className="track-list-count">{`${this.props.album ? this.props.album.songCount : ""} songs`}</p>
                        <div className="track-list-header-body-children">
                          <div className="track-list-header-body-extra-buttons">
                            <button className="track-list-header-body-heart-buttons-body">
                              <img className="track-list-header-body-heart-icon" src={window.heartIcon}/>
                            </button>
                            <button className="track-list-header-body-three-dots-buttons-body">
                              <img className="track-list-header-body-dots-icon" src={window.threeDotsIcon}/>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="playlist-song-lists">
                  <section className="track-list-container">
                    <ol className="track-list">
                      {renderSongs}
                    </ol>
                  </section>
                </div>
              </section>
            </div>
          </div>
        </div>
        <PlaybarContainer/>
      </div>
    );
  }
}
