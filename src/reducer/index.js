import filter from './filter';
import { combineReducers } from 'redux';
const initData = {
  items:[
    { id: 0, name: 'krock' },
    { id: 1, name: 'jack' } 
  ]
}

function addApp(state=initData, action){
  switch(action.type){
    case 'add':
      let items = state.items.slice();
      items.push({id:items.length,name:action.name});
      return {...state, items:items};
    case 'search':
      if(action.key){
        return {...state, items:state.items.filter((val)=>{return action.key===val.name})}
      }else{
        return state;
      }
      
    default:
      return state;
  }
}

export default combineReducers({
  filter,
  addApp
});