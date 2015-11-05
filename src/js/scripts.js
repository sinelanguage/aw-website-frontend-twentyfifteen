( function ( $, window, document, undefined ) {

	'use strict';

	$( function () {
		// FireShell

		var lieArr = [
                        "I didn\'t want to hurt her",
                        "I didn\'t want them to know how I really feel",
                        "I\'m a corward",
                        "I\'m in denial of how addicted I am",
                        "I\'m scared",
                        "I really don\'t like you",
                        "They will think I\'m stupid",
                        "I don\'t want be seen as weak"
                ];

		var el = document.getElementsByClassName( 'reason' );
		el[ 0 ].innerText = lieArr[ 0 ];

		function addClass( el, className ) {

			el[ 0 ].classList.add( className );
			setTimeout( function () {
				el[ 0 ].innerText = "";
                                removeClass( className );
			}, 2000 );

		};

		function removeClass( el, className ) {

			var el = document.getElementsByClassName( className );
			el[ 0 ].classList.remove( className );

		};

		// setTimeout( function(){ addClass( 'reason', 'fade-out' ) }, 5000 );

		function runThruLies() {

                        var el = document.getElementsByClassName( 'reason' );

			for ( var i = 0, i < lieArr.length, i++ ) {

                		el[ 0 ].innerText = lieArr[ i ];
                                setTimeout( function(){ addClass( 'reason', 'fade-out' ) }, 5000 );

			}

		};

	} );

} )( jQuery, window, document );
