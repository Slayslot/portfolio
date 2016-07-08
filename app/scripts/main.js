var app = angular.module('myPortfolio', ['ngRoute']);

app.config(function ($routeProvider) {
  $routeProvider
    .when('/intro', {
      controller: 'home-controller',
      templateUrl: 'views/home.html'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html'
    })
		.when('/about', {
			templateUrl: 'views/about.html'
		})
		.when('/work', {
			templateUrl: 'views/work.html'
		})
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
