function filter(state='',action){
  switch(action.type){
    case 'setFilter':
      return action.key;
    default:
      return state;
  }
}
export default filter;