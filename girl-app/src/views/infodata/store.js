const reducer = (state = {
  list1: [],
}, action) =>{
  const {type, data} = action;
  switch (type) {
    case '':
      return Object.assign({}, state, {list1: data});
    default:
      return state;
  }
}
export default reducer;