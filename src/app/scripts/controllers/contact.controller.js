(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('ContactController', ContactCtrlFunction);

  /** @ngInject */
  function ContactCtrlFunction(ProgressBarService) {
    ProgressBarService.setPreloaderConfig();
    ProgressBarService.load();
    ProgressBarService.stop();
  }
})();
