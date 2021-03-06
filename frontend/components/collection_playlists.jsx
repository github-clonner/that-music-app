import React from 'react';
import Navbar from './navbar/navbar';
import CollectionPlaylistsHeader from './collection_playlists_header';
import PlaybarContainer from './playbar-container';
import CollectionPlaylistsIndexContainer from './collection_playlists_index';

export default class CollectionPlaylists extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div className="browse-newreleases-container">
        <section className="new-releases-content-spacing">
          <CollectionPlaylistsHeader />
          <CollectionPlaylistsIndexContainer />
        </section>
      </div>
    );
  }
}
