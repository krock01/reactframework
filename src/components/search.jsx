import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        console.log(this.input.value);
        console.log(event.target.value);
    }
    render(){
        return (
            <div className="search-input">
                <input type="text" ref={input=>{this.input=input}} onChange={this.handleChange}/>
                <button onClick={this.props.searchClick(this.input.value)}>查询</button>
            </div>
        )
    }
}

export default Search;