import React from 'react';
import Search from './search';
import List from './list';

class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            items: [
                { id: 0, name: 'krock' },
                { id: 1, name: 'jack' }
            ],
            results: []
        };
        this.searchClick = this.searchClick.bind(this);
        this.addItem = this.addItem.bind(this);
    }
    componentDidMount() {
        this.setState({ results: this.state.items });
    }
    searchClick(value) {
        if (value === '') {
            return this.setState({ results: this.state.items });
        }
        this.setState({
            results:
                this.state.items.filter(val => { return value === val.name; })
        });
    }
    addItem(value){
        const newItems = this.state.items.slice();
        newItems.push({id:newItems.length,name:value});
        this.setState({
            items:newItems,
            results:newItems
        });
    }
    render() {
        return (
            <>
                <Search searchClick={this.searchClick} add={this.addItem} />
                <List items={this.state.results} />
            </>
        );
    }
}

export default Todo;