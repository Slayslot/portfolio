angular
   .module('myPortfolio')
   .service('HomeService', HomeServiceFunction);

 /** @ngInject */
 function HomeServiceFunction(ProgressBarService) {
   var vm = this;
   ProgressBarService.setPreloaderConfig();
   ProgressBarService.load();

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
