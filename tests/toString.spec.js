"use strict";

var expect = require( "chai" )
	.expect,
	typeConverter = require( "../simple-type-converter" );

describe( "toString", function () {
	it( "should just return the string if one is passed", function () {
		expect( typeConverter.toString( "string" ) )
			.to.equal( "string" );

		expect( typeConverter.toString( "1.0" ) )
			.to.equal( "1.0" );
	} );

	it( "should convert a number to a string", function () {
		expect( typeConverter.toString( 1 ) )
			.to.equal( "1" );

		expect( typeConverter.toString( 1.1 ) )
			.to.equal( "1.1" );

		expect( typeConverter.toString( 1.0 ) )
			.to.equal( "1" );
	} );

	it( "should work through type names", function () {
		expect( typeConverter.typeNames.string( "string" ) )
			.to.equal( "string" );

		expect( typeConverter.typeNames.string( 1 ) )
			.to.equal( "1" );
	} );

} );
