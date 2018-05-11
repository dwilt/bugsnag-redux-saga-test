/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  TouchableOpacity,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';



import { Provider } from 'react-redux'
import { compose, createStore, applyMiddleware } from 'redux'
import todoApp from './reducers'
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas'
import bugsnag from './bugsnag';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  todoApp,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga)

type Props = {};
export default class App extends Component<Props> {
  addTodo = ()=> {
    store.dispatch({
      type: 'ADD_TODO'
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Testing bugsnag And redux-saga
          </Text>
          <TouchableOpacity onPress={this.addTodo}>
            <Text>{`Add ToDo`}</Text>
          </TouchableOpacity>
        </View>
      </Provider>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
