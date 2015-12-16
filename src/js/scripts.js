( function ( $, window, document, undefined ) {

	'use strict';

	$( function () {
		// FireShell

		var lieArr = [
                        'I didn\'t want to hurt her',
                        'I didn\'t want them to know how I really feel',
                        'I\'m a corward',
                        'I\'m in denial of how addicted I am',
                        'I\'m scared',
                        'I really don\'t like you',
                        'They will think I\'m stupid',
                        'I don\'t want be seen as weak'
                ];

		var el = document.getElementsByClassName( 'reason' );
		// el[ 0 ].innerText = lieArr[ 0 ];

		function addClass( el, className ) {

			el[ 0 ].classList.add( className );
			setTimeout( function () {
				//el[ 0 ].innerText = '-';
				removeClass( el, className );
			}, 2000 )

		};

		function removeClass( el, className ) {

			el[ 0 ].classList.remove( className )

		};

		// setTimeout( function(){ addClass( el, 'fade-out' ) }, 5000 );

		function runThruLies() {

			var el = document.getElementsByClassName( 'reason' );

			for ( var i = 0; i < lieArr.length; i++ ) {

				el[ 0 ].innerText = lieArr[ i ];

				setTimeout( function () {
						addClass( 'reason', 'fade-out' )
					},
					5000 );
				setTimeout( function () {
						el[ 0 ].innerText = lieArr[ i + 1 ];
					},
					7000 );

				setTimeout( function () {
						addClass( 'reason', 'fade-out' )
					},
					17000 );
				// setTimeout( function(){ addClass( 'reason', 'fade-out' ) }, 5000 );

			}

		};

		// runThruLies();


		function makePolygraph() {

			var n = 40,
				random = d3.random.normal( 0, .3 ),
				data = d3.range( n ).map( random );

			var margin = {
					top: 20,
					right: 20,
					bottom: 20,
					left: 40
				},
				// width = 960 - margin.left - margin.right,
				// height = 500 - margin.top - margin.bottom;
				width = window.innerWidth,
				height = window.innerHeight;

			var x = d3.scale.linear()
				.domain( [ 0, n - 1 ] )
				.range( [ 0, width ] );

			var y = d3.scale.linear()
				.domain( [ -0.75, 0.75 ] )
				.range( [ height, 0 ] );

			var line = d3.svg.line()
				.x( function ( d, i ) {
					return x( i );
				} )
				.y( function ( d, i ) {
					return y( d );
				} );

			var svg = d3.select( "body" ).append( "svg" )
				.attr( "width", width + margin.left + margin.right )
				.attr( "height", height + margin.top + margin.bottom )
				.append( "g" )
				.attr( "transform", "translate(" + margin.left + "," + margin.top + ")" );

			svg.append( "defs" ).append( "clipPath" )
				.attr( "id", "clip" )
				.append( "rect" )
				.attr( "width", width )
				.attr( "height", height );

			svg.append( "g" )
				.attr( "class", "x axis" )
				.attr( "transform", "translate(0," + y( 0 ) + ")" )

			svg.append( "g" )
				.attr( "class", "y axis" )

			var path = svg.append( "g" )
				.attr( "clip-path", "url(#clip)" )
				.append( "path" )
				.datum( data )
				.attr( "class", "line" )
				.attr( "d", line );

			tick();

			function tick() {

				// push a new data point onto the back
				data.push( random() );

				// redraw the line, and slide it to the left
				path
					.attr( "d", line )
					.attr( "transform", null )
					.transition()
					.duration( 2000 )
					.ease( "linear" )
					.attr( "transform", "translate(" + x( -1 ) + ",0)" )
					.each( "end", tick );

				// pop the old data point off the front
				data.shift();

			}


		};

		// makePolygraph();



		function makeThree(){

			var SEPARATION = 100, AMOUNTX = 100, AMOUNTY = 70;

			var container;
			var camera, scene, renderer;

			var particles, particle, count = 0;

			var mouseX = 0, mouseY = 0;

			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;

			init();
			animate();

			function init() {

				container = document.createElement( 'div' );
				document.body.appendChild( container );

				camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
				camera.position.z = 10000;

				scene = new THREE.Scene();

				particles = new Array();

				var PI2 = Math.PI * 2;
				var material = new THREE.SpriteCanvasMaterial( {

					color: 0x001EFF,
					program: function ( context ) {

						context.beginPath();
						context.arc( 0, 0, 0.50, 0, PI2, true );
						context.fill();

					}

				} );

				var i = 0;

				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

						particle = particles[ i ++ ] = new THREE.Sprite( material );
						particle.position.x = ix * SEPARATION - ( ( AMOUNTX * SEPARATION ) / 2 );
						particle.position.z = iy * SEPARATION - ( ( AMOUNTY * SEPARATION ) / 2 );
						scene.add( particle );

					}

				}

				renderer = new THREE.CanvasRenderer({ alpha: true });
				// renderer = new THREE.WebGLRenderer({ alpha: true });
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );



				//

				window.addEventListener( 'resize', onWindowResize, false );

			}

			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			function animate() {

				requestAnimationFrame( animate );

				render();

			}

			function render() {


				camera.position.set(0,855,122);

				var i = 0;

				for ( var ix = 0; ix < AMOUNTX; ix ++ ) {

					for ( var iy = 0; iy < AMOUNTY; iy ++ ) {

						particle = particles[ i++ ];
						particle.position.y = ( Math.sin( ( ix + count ) * 0.3 ) * 50 ) +
							( Math.sin( ( iy + count ) * 0.5 ) * 50 );
						particle.scale.x = particle.scale.y = ( Math.sin( ( ix + count ) * 0.3 ) + 1 ) * 4 +
							( Math.sin( ( iy + count ) * 0.5 ) + 1 ) * 4;

					}

				}

				renderer.render( scene, camera );

				count += 0.02;

			}

		};

		makeThree();


	} );

} )( jQuery, window, document );
