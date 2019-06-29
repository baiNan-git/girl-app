import React from 'react';

const Com = ({ goSearch }) => (
  <div className = 'shop-search' onClick={goSearch}>
    <img src='/shopimg/head.png' alt='' />
    <div className = 'search'>
      <span></span>
      <p>大家都在搜"玩转万圣节派对"</p>
    </div>
  </div>
)

export default Com;