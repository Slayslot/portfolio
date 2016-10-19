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
    function NavbarController($log, $scope, $state) {
      $log.info('call nav');
      var vm = this;

      $(document.body).on('click', '.hamb',
      function() {
          if ($(this).hasClass('open')) {
            $(this)
              .removeClass('open')
              .find('i')
              .addClass('icon-menu')
              .removeClass('icon-cancel');
               $('nav').css('height','0');
               $('nav').css('width','0');
               $('nav').css('min-height','0');
               $('.right-inner').css('width','0');
               $('.right-inner li').css('opacity','0');

          } else {
            $(this)
              .addClass('open')
              .find('i')
              .addClass('icon-cancel')
              .removeClass('icon-menu');
            $('.nav').show();
            $('.nav').animateCss('slideInLeft');
            $('.nav').css('display','block');
            $('.nav').css('height','100%');
            $('.nav').css('width','100%');
            $('.nav').css('min-height','40rem');
            $('.right-inner').css('width','100%');
            $('.right-inner li').css('opacity','1');
          }
        });
      }
    }

})();
