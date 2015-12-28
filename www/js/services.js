angular.module('havePhotoApp.services', [])

.factory('BannerService',function() {

  var banners = [{
    id: 0,
    name: '01',
    title: 'BLUE',
    img: 'img/index/013.jpg'
  },
  {
    id: 1,
    name: '02',
    title: 'YELLOW',
    img: 'img/index/015.jpg'
  },
  {
    id: 2,
    name: '03',
    title: 'PINK',
    img: 'img/index/016.jpg'
  }];
  return {
    banners:banners
  };
})

;
