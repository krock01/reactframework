import React,{Component} from 'react';
export class HelloMessage extends Component{
  render(){
    return (
      <div>
        hi {this.props.name}
      </div>
    )
  }
}
export default HelloMessage;
