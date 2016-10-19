(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('HomeController', HomeCtrlFunction);

  /** @ngInject */
  function HomeCtrlFunction($scope) {
    var vm = this;

    $('.hamb').hide();
    $('.nav').hide();
    vm.eatthis=thisisme[0];
    window.setInterval(function(){
      if(thisismeiterator===thisisme.length-1){
        thisismeiterator=0;
      }else{
        thisismeiterator++;
      }
      vm.eatthis=thisisme[thisismeiterator];
      $scope.$apply();
      $('.thisisme').animateCss('fadeIn');
    },3000);

  }
})();
