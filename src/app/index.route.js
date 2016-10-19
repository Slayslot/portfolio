(function() {
  'use strict';

  angular
    .module('myPortfolio')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('/', '/intro');

    $stateProvider
    .state('base-home', {
      abstract: true,
      url: '',
      templateUrl: 'app/main/base.home.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('base-nav', {
      abstract: true,
      url: '',
      templateUrl: 'app/main/nav.home.html',
      controller: 'MainController',
      controllerAs: 'main'
    })
    .state('intro', {
      url: '/intro',
      parent: 'base-home',
      templateUrl: 'app/views/home.html',
      controller: 'HomeController',
      controllerAs: 'home'
    })
    .state('contact', {
      url: '/contact',
      parent: 'base-nav',
      templateUrl: 'app/views/contact.html',
      controller: 'ContactController',
      controllerAs: 'contact'
    })
    .state('about', {
      url: '/about',
      parent: 'base-nav',
      templateUrl: 'app/views/about.html',
      controller: 'AboutController',
      controllerAs: 'about'
    })
    .state('work', {
      url: '/work',
      parent: 'base-nav',
      templateUrl: 'app/views/work.html',
      controller: 'WorkController',
      controllerAs: 'work'
    });
  }

})();
