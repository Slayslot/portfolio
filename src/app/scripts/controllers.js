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
  $('.hamb i').addClass('icon-menu');
  $('.hamb i').removeClass('icon-cancel');
  $('.hamb').show();
  $('.nav').hide();
  if(hidethisfuck!=null){
    $('.'+hidethisfuck).css('display','none');
  }
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
( function( window ) {

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
