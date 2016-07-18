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
var Arr=[];
var Arrayiterator=0;
var aboutArray=[];
var aboutArrayiterator=0;
function resetnav(){
  $('.hamb').removeClass('open');
  $('.hamb i').addClass('icon-menu')
  $('.hamb i').removeClass('icon-cancel');
  $('.hamb').show();
  $('.nav').hide();
  var Arr=[];
  var Arrayiterator=0;
}
function initDyan(){
    $('.dotstyle ul li').each(function(){
      Arr.push($(this).attr('id'));
    });
}
var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  var dY= e.deltaY;
  console.log(dY);
  detectUpOrDown(dY);
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    console.log(e.keyCode);
    if (keys[e.keyCode]) {
        preventDefault(e);
          return false;
    }
}
function detectUpOrDown(dY){
  if(dY>0){
    if(Arrayiterator!=Arr.length-1){
      Arrayiterator++;
      $('#'+Arr[Arrayiterator]).click();
    }
  }else{
    if(Arrayiterator!=0){
      Arrayiterator--;
      $('#'+Arr[Arrayiterator]).click();
    }
  }
}
function disableScroll() {
  if (window.addEventListener) // older FF
      window.addEventListener('DOMMouseScroll', preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  // window.ontouchmove  = preventDefault; // mobile
  document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
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
  resetnav();
  initDyan();
  disableScroll();
  $('.work-image').hover(function(){
    $(this).find('i').animateCss('wobble');
  });
  $scope.scrollTo = function(id) {
          var old = $location.hash();
          $location.hash(id);
          $anchorScroll();
          //reset to old to keep any additional routing logic from kicking in
          $location.hash(old);
          console.log(Arr.indexOf(''+id+'-click'));
          Arrayiterator=Arr.indexOf(''+id+'-click');
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
  resetnav();
  initDyan();
  disableScroll();
  $scope.scrollTo = function(id) {
          var old = $location.hash();
          $location.hash(id);
          $anchorScroll();
          //reset to old to keep any additional routing logic from kicking in
          $location.hash(old);
          console.log(Arr.indexOf(''+id+'-click'));
          Arrayiterator=Arr.indexOf(''+id+'-click');
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
