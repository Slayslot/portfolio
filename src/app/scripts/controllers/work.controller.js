(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('WorkController', WorkCtrlFunction);

  /** @ngInject */
  function WorkCtrlFunction(AnimateService, WorkService, ProgressBarService) {
    var vm = this;

    vm.workViews = WorkService.fetch();

    vm.wobbleMe = function(id){
      var param='#'+id+'-image i';
      AnimateService.animateCss('wobble',param);
    }

    ProgressBarService.stop();

  }
})();
