(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log, $scope, $state) {
    var vm = this;
    $scope.$on('$viewContentLoaded', function(){
      $log.info($state.current.name);
      vm.activeState = $state.current.name;
      if($state.current.name === 'work'){
        vm.active = 0;
      }else if($state.current.name === 'about'){
        vm.active = 1;
      }else if($state.current.name === 'contact'){
        vm.active = 2;
      }
    });
  }
})();
