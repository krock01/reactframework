import React from 'react';
import Item from './Item';

class List extends React.Component{
    render(){
        
        return (
            <ul className="list">{
            this.props.items.map(item=>(
                <Item itemName={item.name} key={item.id}/>
            ))
        }
            </ul>
        );
    }
}

export default List;