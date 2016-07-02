var thisisme = [
  "Front-end Developer",
  "UI/UX Developer",
  "Basketball Player"
]
var thisismeiterator=0;
function navigation(){
  // $.Velocity.mock = 2;

  var menuOpen = [{
    elements: $('.nav'),
    properties: {
      height: ['100%', 0],
      width: ['100%', 0],
      minHeight: '40rem'
    },
    options: {
      duration: 200
    }
  }, {
    elements: $('.right-inner'),
    properties: {
      width: '100%'
    },
    options: {
      duration: 250,
      complete: function() {
        $('.right-inner')
          .find('li').each(function(i) {
            $(this).velocity({
              opacity: 1
            }, {
              delay: i * 50
            });
          })
      }
    }
  }];

  $(document.body).on('click', '.hamb',
  function() {

    if ($(this).hasClass('open')) {
      $(this)
        .removeClass('open')
        .find('i')
        .addClass('glyphicon-menu-hamburger')
        .removeClass('glyphicon-remove');

      $('nav').velocity({
        height: 0,
        width: 0,
        minHeight: 0
      }, {
        duration: 250,
        begin: function() {
          $('nav').find('h1, p, small').css({
            opacity: 0
          })
          $('.right-inner').find('li, .social i').css({
            opacity: 0
          });
        },
        complete: function() {
          $('.right-inner').css({
            width: 0
          });
        }
      });

    } else {
      $(this)
        .addClass('open')
        .find('i')
        .addClass('glyphicon-remove')
        .removeClass('glyphicon-menu-hamburger');

      $.Velocity.RunSequence(menuOpen)
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
app.controller('work-controller', [function() {
  [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
    new DotNav( nav, {
      callback : function( idx ) {
        //console.log( idx );
      }
    } );
  } );
  navigation();
}]);
app.controller('about-controller', [function() {
  [].slice.call( document.querySelectorAll( '.dotstyle > ul' ) ).forEach( function( nav ) {
    new DotNav( nav, {
      callback : function( idx ) {
        // console.log( idx );
      }
    } );
  } );
  navigation();
}]);
app.controller('contact-controller', [function() {
  navigation();
}]);
