import React from 'react';
import {Route, NavLink} from 'react-router-dom';

const NavbarNav = (props) => {

  return (
    <div className="navBar-expand">
      <div className="navBar-header">
        <img src={window.spotifyWhite} />
        <div className="navBar-header-logo-text">
          That music app
        </div>
      </div>
      <ul>
        <li className="navBar-group">
          <div className="navBar-item link-subtle">
            <NavLink to="/search" className="link-subtle">
              <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z" fill="currentColor" fillRule="evenodd"></path></svg>
              <div className="nav-text">Search</div>
            </NavLink>
          </div>
        </li>
        <li className="navBar-group">
          <div className="navBar-item">
            <NavLink to="/browse/featured" className="link-subtle">
              <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M 256.274 60.84 L 84.324 166.237 L 84.324 443.063 L 193.27 443.063 L 193.27 293.73 L 320.228 293.73 L 320.228 443.063 L 428.222 443.063 L 428.222 165.476 L 256.274 60.84 Z M 256.274 35.95 L 448.452 149.145 L 448.452 464.395 L 300 464.395 L 300 315.062 L 213.499 315.062 L 213.499 464.395 L 64.095 464.395 L 64.095 150.161 L 256.274 35.95 Z" fill="currentColor"></path></svg>
              <div className="nav-text">Home</div>
            </NavLink>
          </div>
        </li>
        <li className="navBar-group">
          <div className="navBar-item link-subtle">
            <NavLink to="/collection/playlists" className="link-subtle">
              <svg viewBox="0 0 512 512" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M291.301 81.778l166.349 373.587-19.301 8.635-166.349-373.587zM64 463.746v-384h21.334v384h-21.334zM192 463.746v-384h21.334v384h-21.334z" fill="currentColor"></path></svg>
              <div className="nav-text">Your Library</div>
            </NavLink>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default NavbarNav;
