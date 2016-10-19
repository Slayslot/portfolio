angular
   .module('myPortfolio')
   .service('WorkService', WorkServiceFunction);

 /** @ngInject */
 function WorkServiceFunction() {
   var vm = this;

   vm.fetch = function(){
     return [
       {
         "id": "trending",
         "anchor": "http://bit.ly/trendingtweeps",
         "title": "Trending Tweeps",
         "stack": "Stack: HTML5, CSS3, jQuery, Django"
       },
       {
         "id": "heat",
         "anchor": "/heatseeker",
         "title": "HeatSeeker",
         "stack": "Stack: Javascript, Unity"
       },
       {
         "id": "audio",
         "anchor": "http://bit.ly/audioaddict",
         "title": "AudioAddict",
         "stack": "Stack: HTML5, CSS3, jQuery, Django"
       },
       {
         "id": "moz",
         "anchor": "http://mozpacers.org/",
         "title": "Mozpacers' Website",
         "stack": "Stack: HTML5, CSS3, jQuery, Flask"
       },
       {
         "id": "saba",
         "anchor": "http://www.sabahotelware.com/",
         "title": "Saba Hotelware",
         "stack": "Stack: Wordpress"
       },
       {
         "id": "blog",
         "anchor": "/blog",
         "title": "Slayslot's Blog",
         "stack": "Stack: HTML5, CSS3, Javascript, Hexo"
       }
     ]
   }

 }
