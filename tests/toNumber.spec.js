"use strict";

var expect = require( "chai" )
	.expect,
	typeConverter = require( "../simple-type-converter" );

describe( "toNumber", function () {
	it( "should just return a number if one is passed", function () {
		expect( typeConverter.toNumber( 1 ) )
			.to.equal( 1 );

		expect( typeConverter.toNumber( 11 ) )
			.to.equal( 11 );

		expect( typeConverter.toNumber( 11.1 ) )
			.to.equal( 11.1 );
	} );

	it( "should convert a string to a number", function () {
		expect( typeConverter.toNumber( "1" ) )
			.to.equal( 1 );

		expect( typeConverter.toNumber( "11" ) )
			.to.equal( 11 );

		expect( typeConverter.toNumber( "11.1" ) )
			.to.equal( 11.1 );

		expect( typeConverter.toNumber( "1." ) )
			.to.equal( 1 );

		expect( typeConverter.toNumber( ".1" ) )
			.to.equal( 0.1 );
	} );

	it( "should return 0 if 'false' is passed", function () {
		expect( typeConverter.toNumber( false ) )
			.to.equal( 0 );
	} );

	it( "should return 1 if 'true' is passed", function () {
		expect( typeConverter.toNumber( true ) )
			.to.equal( 1 );
	} );

	it( "should return if something that is not a number is passed", function () {
		expect( typeConverter.toNumber( "one" ) )
			.to.be.NaN;

		expect( typeConverter.toNumber( "{}" ) )
			.to.be.NaN;

		expect( typeConverter.toNumber( "[]" ) )
			.to.be.NaN;

		expect( typeConverter.toNumber( "1,2" ) )
			.to.be.NaN;
	} );

	it( "should work through type names", function () {
		expect( typeConverter.typeNames.number( ".1" ) )
			.to.equal( 0.1 );

		expect( typeConverter.typeNames.number( false ) )
			.to.equal( 0 );

		expect( typeConverter.typeNames.number( true ) )
			.to.equal( 1 );

		expect( typeConverter.typeNames.number( "one" ) )
			.to.be.NaN;
	} );
} );
