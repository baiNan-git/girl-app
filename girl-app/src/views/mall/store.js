const reducer = (state = {
  bannerlist: [1, 2],
  shoplist: [],
}, action) =>{
  const {type, data} = action;
  switch (type) {
    case 'changeBannerlist':
      return Object.assign({}, state, {bannerlist: data});
    case 'changeShoplist':
      return Object.assign({}, state, {shoplist: data});
    default:
      return state;
  }
}
export default reducer;