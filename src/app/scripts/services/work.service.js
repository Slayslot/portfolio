angular
   .module('myPortfolio')
   .service('WorkService', WorkServiceFunction);

 /** @ngInject */
 function WorkServiceFunction(ProgressBarService) {
   var vm = this;
   ProgressBarService.setPreloaderConfig();
   ProgressBarService.load();

   vm.fetch = function(){
     return [
       {
         "id": "ktcore",
         "anchor": "https://ide.kitsune.tools/",
         "title": "Kitsune IDE",
         "stack": "Stack: HTML5, CSS3, React, Redux"
       },
       {
         "id": "bold",
         "anchor": "http://braj.nowfloats.com/",
         "title": "Bold and Beautiful",
         "stack": "Stack: HTML5, CSS3, jQuery, Kitsune"
       },
       {
         "id": "vlcc",
         "anchor": "http://centres.vlccwellness.com/",
         "title": "VLCC",
         "stack": "Stack: HTML5, CSS3, jQuery, Kitsune"
       },
       {
         "id": "myaccount",
         "anchor": "https://myaccountgotest.nowfloats.com/",
         "title": "MyAccountGo",
         "stack": "Stack: HTML5, CSS3, jQuery, Kitsune"
       },
       {
         "id": "hotel",
         "anchor": "http://deccanserai.com/",
         "title": "Eco Hotel Theme",
         "stack": "Stack: HTML5, CSS3, jQuery, Kitsune"
       },
       {
         "id": "trending",
         "anchor": "http://bit.ly/trendingtweeps",
         "title": "Trending Tweeps",
         "stack": "Stack: HTML5, CSS3, jQuery, Django"
       },
       {
         "id": "heat",
         "anchor": "https://slayslot.github.io/heatseeker",
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
         "id": "blog",
         "anchor": "http://www.slayslot.github.io/blog",
         "title": "Slayslot's Blog",
         "stack": "Stack: HTML5, CSS3, Javascript, Hexo"
       }
     ]
   }

 }
