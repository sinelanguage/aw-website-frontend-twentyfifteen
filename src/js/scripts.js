( function ( $, window, document, undefined ) {

	'use strict';

	$( function () {
		// FireShell

                var lieArr = [
                        "I didn\'t want to hurt her"
                ];

                var el = document.getElementsByClassName( 'reason' );
                el[0].innerText = lieArr[0];

		function addClass( elClassName, className ) {

			var el = document.getElementsByClassName( elClassName );
			el[ 0 ].classList.add( className );
			setTimeout( function () {
				el[ 0 ].remove()
			}, 2000 );

		}

		function removeClass( className ) {

			var el = document.getElementsByClassName( className );
			el[ 0 ].classList.remove( className );

		}

		setTimeout( function(){ addClass( 'reason', 'fade-out' ) }, 5000 );

	} );

} )( jQuery, window, document );
