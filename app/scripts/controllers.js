var thisisme = [
  "Front-end Developer",
  "UI/UX Developer",
  "Basketball Player"
]
var thisismeiterator=0;

app.controller('home-controller', ['$scope', function($scope) {
  $scope.eatthis=thisisme[0];
  window.setInterval(function(){
    if(thisismeiterator===thisisme.length-1){
      thisismeiterator=0;
    }else{
      thisismeiterator++;
    }
    $scope.eatthis=thisisme[thisismeiterator];
    $scope.$apply();
  },3000);
}]);
