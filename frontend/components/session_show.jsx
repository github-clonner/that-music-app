import React from 'react';
import Navbar from './navbar/navbar';
import PlaybarContainer from './playbar-container';

class SessionShow extends React.Component {

  constructor(props) {
    super(props);
  }

  handleLogoutClick() {
    window.audio.pause();
    window.audio.currentTime = 0;
    window.audio.src = "";
    this.props.receivePlay(false, true);
    this.props.logout();
  }

  render() {
    return (
      <div className="session-show-container">
        <div className="session-show-lists">
          <div className="session-show-icon">
            <svg width="80" height="90" viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg">
              <title>User Icon</title>
              <path d="M67.74 61.78l-14.5-8.334c-.735-.422-1.24-1.145-1.385-1.98-.145-.835.088-1.685.638-2.33l5.912-6.93c3.747-4.378 5.81-9.967 5.81-15.737v-2.256c0-6.668-2.792-13.108-7.658-17.67C51.622 1.92 45.17-.386 38.392.054c-12.677.82-22.607 11.772-22.607 24.934v1.483c0 5.77 2.063 11.36 5.81 15.736l5.912 6.933c.55.644.783 1.493.638 2.33-.143.834-.648 1.556-1.383 1.98l-14.494 8.33C4.7 66.077 0 74.15 0 82.844v6.76h3.333v-6.76c0-7.5 4.055-14.46 10.59-18.174l14.5-8.334c1.597-.918 2.692-2.487 3.007-4.302.315-1.815-.19-3.66-1.387-5.06l-5.913-6.936c-3.23-3.775-5.01-8.594-5.01-13.57v-1.484c0-11.41 8.562-20.9 19.488-21.608 5.85-.377 11.415 1.61 15.67 5.598 4.26 3.992 6.605 9.404 6.605 15.24v2.254c0 4.976-1.778 9.796-5.01 13.57l-5.915 6.935c-1.195 1.4-1.7 3.246-1.386 5.06.313 1.816 1.41 3.385 3.008 4.303l14.507 8.338c6.525 3.71 10.58 10.67 10.58 18.17v6.76H80v-6.76c0-8.695-4.7-16.768-12.26-21.063z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <div className="session-show-username">{this.props.currentUser.username}</div>
          <button className="logout-button" onClick={this.handleLogoutClick.bind(this)}>log out</button>
        </div>
      </div>
    );
  }


}

export default SessionShow;
