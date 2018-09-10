import React from 'react';
import Search from './search';
import List from './list';

class Todo extends React.Component {
    constructor(){
        super();
        this.state={
            items:[
                {id:1,name:'krock'},
                {id:2,name:'jack'}
            ]
        };
        this.searchClick = this.searchClick.bind(this);
    }
    searchClick(value){
        console.log(value);
    }
    render() {
        return (
            <>
                <Search searchClick={this.searchClick}/>
                <List items={this.state.items}/>
            </>
        );
    }
}

export default Todo;