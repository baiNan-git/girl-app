const Mock = require('mockjs');

function getBannerFn () {
  let arr =[
    {
      imgSrc: '/shopimg/banner.png'
    },
    {
      imgSrc: '/shopimg/banner1.png'
    },
    {
      imgSrc: '/shopimg/banner2.png'
    },
  ];
  // for(let i = 0;i < 10;i++) {
  //   arr.push({
  //     id: 'banner' + i,
  //     imgSrc:Mock.Random.image('375x180',Mock.mock('@color()')),
  //     alt: '',
  //     href: ''
  //   })
  // }
  return arr;
}


function getShoplistFn () {
  let arr =[];
  for(let i = 0;i < 20;i++) {
    arr.push({
      id:'pro' + i,
      name: Mock.mock('@ctitle()'),
      title: Mock.mock('@ctitle()'),
      imgSrc:Mock.Random.image('400x400',Mock.mock('@color()')),
      alt: '',
      href: '',
      price: parseInt(Math.random() * 450 + 50),
      color: Mock.mock('@color()'),
      address:Mock.mock('@county(true)')
    })
  }
  return arr;
}

Mock.mock('http://47.101.132.84:3000/getbanner', 'get', getBannerFn);
Mock.mock('http://47.101.132.84:3000/getShoplist', 'get', getShoplistFn);