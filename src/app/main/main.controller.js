(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $state, $document) {
    var vm = this;
    $scope.$on('$viewContentLoaded', function(){
      vm.activeState = $state.current.name;
      if($state.current.name === 'work'){
        vm.active = 0;
      }else if($state.current.name === 'about'){
        vm.active = 1;
      }else if($state.current.name === 'contact'){
        vm.active = 2;
      }
      var hamb = angular.element($document[0].querySelector('.hamb'));
      var hambi = hamb.find('i');
      angular.element($document[0].querySelectorAll('.nav li')).css('display', 'initial');
      hamb.removeClass('open');
      hambi.addClass('icon-menu');
      hambi.removeClass('icon-cancel');
      hamb.css('display','unset');
      angular.element($document[0].querySelectorAll('.nav')).css('display','none');
    });
  }
})();
