import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleClick(){
        this.props.searchClick(this.input.value);
    }
    handleAdd(){
        this.props.add(this.input.value);
    }
    render(){
        return (
            <div className="search-input">
                <input type="text" ref={input=>{this.input=input}} />
                <button onClick={this.handleClick}>查询</button>
                <button onClick={this.handleAdd}>添加</button>
            </div>
        )
    }
}

export default Search;