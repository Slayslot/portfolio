var thisisme = [
  'Front-end Developer',
  'UI/UX Developer',
  'Vouched Mozillian',
  'Basketball Player',
  'Mozpacer',
  'Harcore Gamer',
  'Movie/TV Series Buff'
]
var thisismeiterator=0;
function resetnav(){
  $('.hamb').removeClass('open');
  $('.hamb i').addClass('icon-menu')
  $('.hamb i').removeClass('icon-cancel');
  $('.hamb').show();
  $('.nav').hide();
}
function isScrolledIntoView(el, param) {
  var hT = $('#'+el).offset().top,
      hH = $('#'+el).outerHeight(),
      wH = $(window).height(),
      wS = $(param).scrollTop();
  if (wS+1 > (hT+hH-wH)){
      return [{'tf': true,'elem': el}];
  }
}
function scrollscroll(){
  $(window).scroll(function(){
    var bool=[];
    var param=this;
    var active;
    $('.full').each(function(i, obj) {
    bool[i]= isScrolledIntoView(obj.id,param);
    if(bool[i]!=null){
      if(bool[i][0].tf==true){
        active=i;
      }
    }
    });
    var checkActive = $('#'+bool[active][0].elem+'-click').hasClass('current');
    if(!checkActive){
      $('#'+bool[active][0].elem+'-click').click();
    }
  });
}
;( function( window ) {

  'use strict';

  function extend( a, b ) {
    for( var key in b ) {
      if( b.hasOwnProperty( key ) ) {
        a[key] = b[key];
      }
    }
    return a;
  }

  function DotNav( el, options ) {
    this.nav = el;
    this.options = extend( {}, this.options );
      extend( this.options, options );
      this._init();
  }

  DotNav.prototype.options = {};

  DotNav.prototype._init = function() {
    // special case "dotstyle-hop"
    var hop = this.nav.parentNode.className.indexOf( 'dotstyle-hop' ) !== -1;
    var dots = [].slice.call( this.nav.querySelectorAll( 'li' ) ), current = 0, self = this;
    dots.forEach( function( dot, idx ) {
      dot.addEventListener( 'click', function( ev ) {
        ev.preventDefault();
        if( idx !== current ) {
          dots[ current ].className = '';

          setTimeout( function() {
            dot.className += ' current';
            current = idx;
            if( typeof self.options.callback === 'function' ) {
              self.options.callback( current );
            }
          }, 25 );
        }
      } );
    } );
  }

  // add to global namespace
  window.DotNav = DotNav;

})( window );

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
  scrollscroll();
  resetnav();
  $('.work-image').hover(function(){
    $(this).find('i').animateCss('wobble');
  });
  $scope.scrollTo = function(id) {
      $(document.body).on('mouseover', '.dotstyle',
        function() {
          var old = $location.hash();
          $location.hash(id);
          $anchorScroll();
          //reset to old to keep any additional routing logic from kicking in
          $location.hash(old);
      });
  };
  [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
    new DotNav( nav, {
      callback : function( idx ) {
        //console.log( idx );
      }
    } );
  } );
}]);
app.controller('about-controller', ['$scope','$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
  scrollscroll();
  resetnav();
  $scope.scrollTo = function(id) {
      $(document.body).on('mouseover', '.dotstyle',
        function() {
          var old = $location.hash();
          $location.hash(id);
          $anchorScroll();
          //reset to old to keep any additional routing logic from kicking in
          $location.hash(old);
      });
  };
  [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
    new DotNav( nav, {
      callback : function( idx ) {
        //console.log( idx );
      }
    } );
  } );
}]);
app.controller('contact-controller', [function() {
  resetnav();
}]);
