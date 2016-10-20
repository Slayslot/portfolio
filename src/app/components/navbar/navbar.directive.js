(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .directive('mainNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(AnimateService, $log, $document) {
      var vm = this;

      vm.menuClick = function() {
        var hamb = angular.element($document[0].querySelector('.hamb'));
        var hambi = hamb.find('i');
        var nav = angular.element($document[0].querySelector('.nav'));
        var rightInner = angular.element($document[0].querySelector('.right-inner'));
        var rightInnerli = angular.element($document[0].querySelectorAll('.right-inner li'));

        if (hamb.hasClass('open')) {
          hamb.removeClass('open');
          hambi.addClass('icon-menu');
          hambi.removeClass('icon-cancel');
          nav.css('height', '0');
          nav.css('width', '0');
          nav.css('min-height', '0');
          rightInner.css('width', '0');
          rightInnerli.css('opacity', '0');
        } else {
          hamb.addClass('open')
          hambi.addClass('icon-cancel')
          hambi.removeClass('icon-menu');
          nav.css('display','unset');
          AnimateService.animateCss('slideInLeft','.nav');
          nav.css('display', 'block');
          nav.css('height', '100%');
          nav.css('width', '100%');
          nav.css('min-height', '40rem');
          rightInner.css('width', '100%');
          rightInnerli.css('opacity', '1');
        }
      }

    }
  }

})();
