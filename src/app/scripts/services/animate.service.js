angular
   .module('myPortfolio')
   .service('AnimateService', AnimateServiceFunction);

 /** @ngInject */
 function AnimateServiceFunction($document) {
   var vm = this;

   vm.animateCss = function(animationName, el){
      var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

      var animate = angular.element($document[0].querySelector(el));
      animate.addClass('animated ' + animationName).one(animationEnd, function() {
        animate.removeClass('animated ' + animationName);
      });
   }
 }
