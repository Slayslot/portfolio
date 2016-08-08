var thisisme = [
  'Front-end Developer',
  'UI/UX Developer',
  'Vouched Mozillian',
  'Basketball Player',
  'Mozpacer',
  'Hardcore Gamer',
  'Movie/TV Series Buff'
]
var thisismeiterator=0;

function resetnav(hidethisfuck){
  $('.nav li').css('display','initial');
  $('.hamb').removeClass('open');
  $('.hamb i').addClass('icon-menu')
  $('.hamb i').removeClass('icon-cancel');
  $('.hamb').show();
  $('.nav').hide();
  if(hidethisfuck!=null){
    $('.'+hidethisfuck).css('display','none');
  }
  var Arr=[];
  var Arrayiterator=0;
}

app.controller('home-controller', ['$scope', function($scope) {
  $('.hamb').hide();
  $('.nav').hide();
  $scope.eatthis=thisisme[0];
  window.setInterval(function(){
    if(thisismeiterator===thisisme.length-1){
      thisismeiterator=0;
    }else{
      thisismeiterator++;
    }
    $scope.eatthis=thisisme[thisismeiterator];
    $scope.$apply();
    $('.thisisme').animateCss('fadeIn');
  },3000);
}]);
app.controller('work-controller', ['$scope','$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
  resetnav('work');
  $('.work-image').hover(function(){
    $(this).find('i').animateCss('wobble');
  });
}]);
app.controller('about-controller', ['$scope','$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
  resetnav('about');
}]);
app.controller('contact-controller', [function() {
  resetnav('contact');
}]);
