angular.module('havePhotoApp.controllers', [])

.controller('IndexCtrl', function($scope, BannerService) {
  $scope.banner = BannerService.banners;
  $scope.list = [0,1,2,3,4,5,6,7,8]
})

.controller('ShareCtrl', function($scope) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('Welcome', function($scope) {
  console.log('SS');
})
;
