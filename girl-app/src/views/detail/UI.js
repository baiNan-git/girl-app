import React, { Component } from 'react';

class Com extends Component {
  goBack () {
    console.log(this)
    this.props.history.push('/shop')
  }
  goCart () {
    console.log(this)
    this.props.history.push('/detail/cart')
  }
  render () {
    return(
      <div className = 'box'>
        <section className = 'content'>
          <div className='shop-detail'>
            <div className='header'>
              <span className='s1' onClick={this.goBack.bind(this)}></span>
              <span className='s2' onClick={this.goCart.bind(this)}></span>
            </div>
            <div className='cont'>
              <div className='banner'>
                <img src='/detail/banner1.png' alt=''/>
              </div>
              <div className='info'>
                <div className='one'>
                  <span className='s1'>玛丽黛</span>
                  <span className='s2'>领PINK卷&gt;</span>
                </div>
                <div className='two'>玛丽黛金属哑光/丝绒哑光色</div>
                <div className='three'>
                  <div className='left'>
                    <span className='price'>￥245</span>
                    <span className='man'>满300减10店铺优惠</span>
                  </div>
                  <div className='right'>
                    <i className='wuxing'></i>
                    <span className='zan'>1508人赞过</span>  
                    <i className='dianxin'></i>
                    <span className='xin'>心愿单</span> 
                  </div>
                </div>
              </div>
              <div className='shop-info'>
                <h4>商品详情</h4>
                <p>大热断货王 丝绒哑光也 #333,玛丽黛佳小金钻口红 国风持久保湿不易脱色豆沙色唇膏女颜九推荐网红爆款小金钻 新色上市 买2送1.</p>
              </div>
              <div className='fahuo'>
                <p>
                  <i></i>
                  <span>发货</span>
                  ：上海市
                </p>
                <div className='xiaoliang'>销量<span>50</span></div>
              </div>
              <div className='choice'>
                <div className='one'>
                  <span className='s1'>选择：尺码/颜色分类</span>
                  <span className='jiantou'></span>
                </div>
                <div className='two'>
                  <div className='img'>
                    <img src='/detail/chi1.png' alt=''/>
                    <img src='/detail/chi2.png' alt=''/>
                    <img src='/detail/chi3.png' alt=''/>
                    <img src='/detail/chi4.png' alt=''/>
                  </div>
                  <span>查看更多</span>
                </div>
                <div className='three'>
                  <span className='s1'>更多参数</span>
                  <span className='s2'></span>
                </div>
              </div>
              <div className='evaluate'>
                <div className='one'>
                  <div className='s'>
                    <span className='s1'>评价<i></i></span>
                    <span className='s2'>(3125人已评价)</span>
                  </div>
                  <span className='s3'>查看更多<i></i></span>
                </div>
                <div className='two'>
                  <img src='/detail/detail-head.png' alt=''/>
                  as123
                </div>
                <div className='three'>哇！真的很好看！姐妹！买它！买它！买它！</div>
              </div>
              <div className='cai'>
                <img src='/detail/dianleft.png' alt=''/>
                <span>猜你还喜欢</span>
                <img src='/detail/dianright.png' alt=''/>
              </div>
              <div className='love'>
                <ul>
                  <li>
                    <div className='img'>
                      <img src='/detail/love1.png' alt=''/>
                    </div>
                    <div className = 'title'>
                      <h4>日本进化肌底修复</h4>
                      <p>舒缓调理净化肌肤</p>
                      <span>￥256</span>
                    </div>
                  </li>
                  <li>
                    <div className='img'>
                      <img src='/detail/love1.png' alt=''/>
                    </div>
                    <div className = 'title'>
                      <h4>日本进化肌底修复</h4>
                      <p>舒缓调理净化肌肤</p>
                      <span>￥256</span>
                    </div>
                  </li>
                  <li>
                    <div className='img'>
                      <img src='/detail/love1.png' alt=''/>
                    </div>
                    <div className = 'title'>
                      <h4>日本进化肌底修复</h4>
                      <p>舒缓调理净化肌肤</p>
                      <span>￥256</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className='footer'>
                <ul>
                  <li>
                    <img className='s1' src='/detail/dianpu.png' alt=''/>
                    <p>店铺</p>
                  </li>
                  <li>
                    <img className='s2' src='/detail/kefu.png' alt=''/>
                    <p>客服</p>
                  </li>
                  <li>
                    <img className='s3' src='/detail/shou.png' alt=''/>
                    <p>收藏</p>
                  </li>
                </ul>
                <div className='add'>
                  <span className='te'>加入购物车</span>
                  <span>立即购买</span>
                </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Com;