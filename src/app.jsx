import React,{Component} from 'react';
import HelloMessage from './hello';

export default class App extends Component{
  render(){
    return (
      <div>
        <HelloMessage name="krock" />
        <HelloMessage name="jack" />
      </div>
    )
  }
}