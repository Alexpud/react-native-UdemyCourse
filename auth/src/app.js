import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component{
  state = { loggedIn: null};

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyC1B8cACYNsG4HPD0RaxVWTC9TKhIdTWmM",
      authDomain: "auth-49fc3.firebaseapp.com",
      databaseURL: "https://auth-49fc3.firebaseio.com",
      storageBucket: "auth-49fc3.appspot.com",
      messagingSenderId: "929374620361"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({loggedIn: true});
        console.log(this.state.loggedIn);
      }else{
        this.setState({loggedIn: false});
      }
    });
  }

  renderContent(){
    switch(this.state.loggedIn){
      case true:
        return(
          <View style = {{height: 48}}>
            <Button onPress = {() => firebase.auth().signOut()}>
              Log out
            </Button>
          </View>
        );
      case false:
          return <LoginForm/>;
      default:
        return(
          <View style = {styles.buttonContainerStyle}>
            <Spinner size="large"/>
          </View>
        );
    }
  }

  render(){
    return(
      <View style={{flex: 1}}>
        <Header headerText = "Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  buttonContainerStyle:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
}

export default App;
