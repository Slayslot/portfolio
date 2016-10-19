angular
   .module('myPortfolio')
   .service('HomeService', HomeServiceFunction);

 /** @ngInject */
 function HomeServiceFunction() {
   var vm = this;

   vm.fetch = function(){
     return {
         'iterator': 0,
         'me': [
           'Front-end Developer',
           'UI/UX Developer',
           'Vouched Mozillian',
           'Basketball Player',
           'Mozpacer',
           'Hardcore Gamer',
           'Movie/TV Series Buff'
         ]
       }
   }
 }
