(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .controller('WorkController', WorkCtrlFunction);

  /** @ngInject */
  function WorkCtrlFunction(WorkService) {
    var vm = this;

    vm.workViews = WorkService.fetch();

    scrollscroll();
    $('.work-image').hover(function(){
      $(this).find('i').animateCss('wobble');
    });
    [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
    new DotNav( nav, {
      callback : function( idx ) {
        //console.log( idx );
      }
    } );
  } );
  }
})();
