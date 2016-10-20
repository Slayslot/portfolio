(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .service('ProgressBarService', progressService);

  /** @ngInject */
  function progressService(ngProgressFactory) {

	var progressbar = ngProgressFactory.createInstance();
    this.setPreloaderConfig = function(){
      progressbar.setColor('#d32f2f');
      progressbar.setHeight('4px');
      progressbar.start();
    }

    this.load = function(){
      this.setPreloaderConfig();
      progressbar.start();
    }

    this.stop = function(){
      this.setPreloaderConfig();
      progressbar.complete();
    }

  }

})();
