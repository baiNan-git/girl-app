import { connect } from 'react-redux';
import UI from './UI';
import api from '@/api';

const mapStateToProps = (state) => {
  return {
    bannerlist: state.mall.bannerlist,
    shoplist: state.mall.shoplist,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getbannerlist() {
      api.requestGetData('/getbanner').then(res => {
        console.log(res.data)
        dispatch({
          type: 'changeBannerlist',
          data: res.data
        })
      })
    }
  }
}
const Com = connect(mapStateToProps, mapDispatchToProps)(UI);

export default Com;