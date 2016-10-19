(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('AboutController', AboutCtrlFunction);

  /** @ngInject */
  function AboutCtrlFunction(AboutService, $sce) {
    var vm = this;

    vm.aboutViews = AboutService.fetch();
    for(var i=0;i<vm.aboutViews.length;i++){
      for(var j=0;j<vm.aboutViews[i].content.length;j++){
        vm.aboutViews[i].content[j].render = $sce.trustAsHtml(vm.aboutViews[i].content[j].render);
      }
    }

    scrollscroll();
    [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
    new DotNav( nav, {
      callback : function( idx ) {
        //console.log( idx );
      }
    } );
  } );

  }
})();
