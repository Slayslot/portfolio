var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/intro', {
      controller: "home-controller",
      templateUrl: 'views/home.html'
    })
    .when('/contact', {
      //controller: "ContactController",
      templateUrl: 'views/contact.html'
    })
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
//
// // $.Velocity.mock = 2;
//
// var menuOpen = [{
//   elements: $('.nav'),
//   properties: {
//     height: ['100%', 0],
//     width: ['100%', 0],
//     minHeight: '40rem'
//   },
//   options: {
//     duration: 200
//   }
// }, {
//   elements: $('.right-inner'),
//   properties: {
//     width: '100%'
//   },
//   options: {
//     duration: 250,
//     complete: function() {
//       $('.right-inner')
//         .find('li').each(function(i) {
//           $(this).velocity({
//             opacity: 1
//           }, {
//             delay: i * 50
//           });
//         })
//     }
//   }
// }];
//
// $(document.body).on('click', '.hamb',
// function() {
//
//   if ($(this).hasClass('open')) {
//     $(this)
//       .removeClass('open')
//       .find('i')
//       .addClass('glyphicon-menu-hamburger')
//       .removeClass('glyphicon-remove');
//
//     $('nav').velocity({
//       height: 0,
//       width: 0,
//       minHeight: 0
//     }, {
//       duration: 250,
//       begin: function() {
//         $('nav').find('h1, p, small').css({
//           opacity: 0
//         })
//         $('.right-inner').find('li, .social i').css({
//           opacity: 0
//         });
//       },
//       complete: function() {
//         $('.right-inner').css({
//           width: 0
//         });
//       }
//     });
//
//   } else {
//     $(this)
//       .addClass('open')
//       .find('i')
//       .addClass('glyphicon-remove')
//       .removeClass('glyphicon-menu-hamburger');
//
//     $.Velocity.RunSequence(menuOpen)
//   }
// });
