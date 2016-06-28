var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/intro', {
      templateUrl: 'views/home.html'
    })
    // .when('/events', {
    //   controller: "EventsController",
    //   templateUrl: 'assets/views/events.html'
    // })
		// .when('/gallery', {
    //   controller: "GalleryController",
		// 	templateUrl: 'assets/views/gallery.html'
		// })
		// .when('/news', {
    //   controller: 'NewsController',
		// 	templateUrl: 'assets/views/news.html'
		// })
		// .when('/register', {
		// 	templateUrl: 'assets/views/register.html'
		// })
		// .when('/sponsors', {
    //   controller: 'SponsorController',
		// 	templateUrl: 'assets/views/sponsors.html'
		// })
    // .when('/events/:slug', {
    //   controller: 'TemplateController',
    //   templateUrl: 'assets/views/eventtemplate.html'
    // })
    // .when('/news/:slug', {
    //   controller: 'NewsTemplateController',
    //   templateUrl: 'assets/views/newstemplate.html'
    // })
    .otherwise({
      redirectTo: '/intro'
    });
});
$.fn.extend({
  animateCss: function (animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
    $(this).addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
    });
  }
});
