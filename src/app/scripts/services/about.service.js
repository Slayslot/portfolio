angular
   .module('myPortfolio')
   .service('AboutService', AboutServiceFunction);

 /** @ngInject */
 function AboutServiceFunction(ProgressBarService) {
   var vm = this;
   ProgressBarService.setPreloaderConfig();
   ProgressBarService.load();

   vm.fetch = function(){
     return [
       {
         "id": "intro",
         "heading": "Hi, my name is Nikhil Handa",
         "li": true,
         "content" : [
           {
             "render": "I'm Fascinated by Designing and Programming alike."
           },
           {
             "render": "I aspire to gain knowledge of the most complex systems."
           },
           {
             "render": "An extremist who sees what he does to the end."
           }
         ]
       },
       {
         "id": "vouched",
         "heading": "I'm a vouched mozillian",
         "li": true,
         "content" : [
           {
             "render": "I support Open Web Standards and I'm a vouched <a href='https://mozillians.org/en-US/u/slayslot/' target='_blank'>Mozillian</a> contributing in the <a href='https://wiki.mozilla.org/Mozilla_Delhi/Technical_Contributors'>Mozilla Delhi Community</a>."
           },
           {
             "render": "I actively contribute to <a href='https://github.com/Mozpacers' target='_blank'>Mozpacers' Projects</a>."
           },
           {
             "render": "I actively find and fix bugs on <a href='https://bugzilla.mozilla.org/buglist.cgi?query_format=advanced&emailtype1=exact&emailassigned_to1=1&email1=nikhil.handa19%40gmail.com&list_id=13054255' target='_blank'>Bugzilla</a>."
           }
         ]
       },
       {
         "id": "jquery",
         "heading": "I made jQuery's HTML style guide",
         "li": false,
         "content" : [
           {
             "render": "I actively worked with jQuery to make their new <a href='http://contribute.jquery.org/html' target='_blank'>HTML Style Guide</a>."
           }
         ]
       },
       {
         "id": "reader",
         "heading": "I love to read",
         "li": false,
         "content" : [
           {
             "render": "I like to read alot in my free time, be it quora, a book or graphic novels/comics."
           },
           {
             "render": "You can find what I'm upto, with my reading, on my <a href='https://www.goodreads.com/user/show/39591357-nikhil-handa' target='_blank'>Goodreads account</a>."
           }
         ]
       },
       {
         "id": "gamer",
         "heading": "I'm a hardcore gamer",
         "li": true,
         "content" : [
           {
             "render": "I love gaming and everything about it you can catch that with my alias(Slays-a-lot). I also have attempted to make my <a href='http://nikhilhanda.com/heatseeker'>own game</a>."
           },
           {
             "render": "I've also actively worked as a <a href='http://gamebanana.com/members/submissions/reviews/1376016' target='_blank'>Game Reviewer in the past</a>."
           },
           {
             "render": "Find me on <a href='http://steamcommunity.com/id/slayslot/' target='_blank'>Steam</a> and we can rock some games together."
           }
         ]
       },
       {
         "id": "basketball",
         "heading": "I'm a Basketball Player",
         "li": true,
         "content" : [
           {
             "render": "I've been playing, on and off, since the past 8 years."
           },
           {
             "render": "I was the captain of RISVK's Basketball Team."
           },
           {
             "render": "I've won many tournaments along with my College and Schools Basketball Team."
           }
         ]
       }
     ]
   }
 }
