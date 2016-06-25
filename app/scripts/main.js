var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
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
      redirectTo: '/'
    });
});
