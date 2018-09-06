import React,{Component} from 'react';
export class HelloMessage extends Component{
  constructor(props){
    super(props);
    this.textinput = React.createRef();
    this.focusInput =  this.focusInput.bind(this);
  }
  focusInput(){
    console.log(this.textinput);
    this.textinput.current.focus();
  }
  render(){
    return (
      <div>
        hi {this.props.name}
        <button onClick={this.focusInput}>获取焦点</button>
        <input type="text" ref={this.textinput}/>
      </div>
    )
  }
}
export default HelloMessage;
