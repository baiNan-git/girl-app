import { createStore, combineReducers} from 'redux';
import home from '@/views/home/store';
import mall from '@/views/mall/store';
import photo from '@/views/photo/store';
import news from '@/views/news/store';
import user from '@/views/user/store';
import detail from '@/views/detail/store';

const reducer = combineReducers({
  home,
  mall,
  photo,
  news,
  user,
  detail
})

const store = createStore(reducer);

export default store;
