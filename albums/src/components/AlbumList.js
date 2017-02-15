// Import libraries required for the component

import React, { Component } from 'react';
import { Text,  ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';
import axios from 'axios';

// Creates the component
class AlbumList extends Component{
  // The variable state exists on every Component on react and represents the state of the component.
  state = { albums: [] };

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
  }

  //When you want to reference javscript variables on JSX, use {}
  renderAlbums(){
    return this.state.albums.map(album =>
      <AlbumDetail album = { album } key = { album.title }/>
    );
  }

  render(){
    console.log(this.state);

    return(
      <ScrollView>
        { this.renderAlbums() }
      </ScrollView>
    );
  }
}

// Exports the component
export default AlbumList;
