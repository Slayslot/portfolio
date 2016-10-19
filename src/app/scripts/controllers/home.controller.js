(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('HomeController', HomeCtrlFunction);

  /** @ngInject */
  function HomeCtrlFunction(HomeService, AnimateService, $interval, $scope) {
    var vm = this;
    var interval;

    var data = HomeService.fetch();
    vm.eatthis=data.me[data.iterator];
    interval = $interval(function(){
      if(data.iterator===data.me.length-1)
        data.iterator=0;
      else
        data.iterator++;

      vm.eatthis=data.me[data.iterator];
      AnimateService.animateCss('fadeIn','.thisisme');
    },3000);

    $scope.$on('$destroy',function(){
      if(interval)
        $interval.cancel(interval);
    });

  }
})();
