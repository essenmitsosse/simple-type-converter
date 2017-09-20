"use strict";

var expect = require( "chai" )
	.expect,
	typeConverter = require( "../simple-type-converter" );

describe( "toBoolean", function () {
	it( "should just return the boolean value if one is passed", function () {
		expect( typeConverter.toBoolean( true ) )
			.to.equal( true );

		expect( typeConverter.toBoolean( false ) )
			.to.equal( false );
	} );

	it( "should convert 0 (number) to false", function () {
		expect( typeConverter.toBoolean( 0 ) )
			.to.equal( false );
	} );

	it( "should convert a non zero number to true", function () {
		expect( typeConverter.toBoolean( 1 ) )
			.to.equal( true );

		expect( typeConverter.toBoolean( 2 ) )
			.to.equal( true );
	} );

	it( "should convert number strings", function () {
		expect( typeConverter.toBoolean( "1" ) )
			.to.equal( true );

		expect( typeConverter.toBoolean( "2" ) )
			.to.equal( true );

		expect( typeConverter.toBoolean( "0" ) )
			.to.equal( false );
	} );

	it( "should convert 'true'/'false' strings to the correct value", function () {
		expect( typeConverter.toBoolean( "true" ) )
			.to.equal( true );

		expect( typeConverter.toBoolean( "TRUE" ) )
			.to.equal( true );

		expect( typeConverter.toBoolean( "false" ) )
			.to.equal( false );

		expect( typeConverter.toBoolean( "FALSE" ) )
			.to.equal( false );
	} );

	it( "should convert 'undefined' (value and string) to false", function () {
		expect( typeConverter.toBoolean( "undefined" ) )
			.to.equal( false );

		expect( typeConverter.toBoolean( undefined ) )
			.to.equal( false );
	} );

	it( "should convert 'null' (value and string) to false", function () {
		expect( typeConverter.toBoolean( "null" ) )
			.to.equal( false );

		expect( typeConverter.toBoolean( null ) )
			.to.equal( false );
	} );

	it( "should work through type names", function () {
		expect( typeConverter.typeNames.boolean( true ) )
			.to.equal( true );

		expect( typeConverter.typeNames.boolean( 0 ) )
			.to.equal( false );

		expect( typeConverter.typeNames.boolean( "true" ) )
			.to.equal( true );
	} );

} );
