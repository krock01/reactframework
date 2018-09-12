import React,{Component} from 'react';
import Todo from './components/todo';
import reducer from './reducer';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

export default class App extends Component{
  render(){

    const store = createStore(reducer);
    return (
      <Provider store={store}>
        <Todo />
      </Provider>
    )
  }
}