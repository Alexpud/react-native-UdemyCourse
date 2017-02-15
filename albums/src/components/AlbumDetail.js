// Imports the libraries
import React from 'react';
import { Text,View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

// Creates the component
const AlbumDetail = ({ album }) => {
  // It is saying: i want title, artist and thumbnail_image from album  and put them on variables.
  const { title,image, artist, thumbnail_image,url } = album;
  const { headerContentStyle,
          headerTextStyle,
          imageStyle,
          thumbnailContainerStyle,
          thumbnailStyle} = styles;

  return(
    <Card>
      <CardSection>
        <View style= {thumbnailContainerStyle}>
          <Image style = {thumbnailStyle} source = {{ uri: thumbnail_image }}/>
        </View>

        <View style = {headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image style = {imageStyle} source = {{uri: image}} />
      </CardSection>

      <CardSection>
        <Button onPress = {() => Linking.openURL(url)}>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle:{
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle:{
    fontSize: 18
  },
  imageStyle:{
    height: 300,
    flex: 1,
    width: null
  },
  thumbnailContainerStyle:{
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  thumbnailStyle:{
    width: 50,
    height: 50
  }
};

// Exports the component
export default AlbumDetail;
