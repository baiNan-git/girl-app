import React from 'react';

const Com = ({gopink}) => (
  <div className = 'hot-3'>
    <ul>
      <li>
        <img src='/shopimg/hot3-1.png' alt='' />
      </li>
      <li>
        <img src='/shopimg/hot3-2.png' alt='' />
      </li>
      <li>
        <img src='/shopimg/hot3-3.png' alt='' onClick={gopink} />
      </li>
    </ul>
  </div>
)

export default Com;