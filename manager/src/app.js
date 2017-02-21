import React, {Component} from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

class App extends Component{

  componentWillMount(){
    var config = {
      apiKey: "AIzaSyCwScKX7zvKBAPvxxwW6cHx4faoZwhgu8g",
      authDomain: "manager-edf61.firebaseapp.com",
      databaseURL: "https://manager-edf61.firebaseio.com",
      storageBucket: "manager-edf61.appspot.com",
      messagingSenderId: "710462297073"
    };
    firebase.initializeApp(config);
  }
  render(){
    const store=createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return(
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
