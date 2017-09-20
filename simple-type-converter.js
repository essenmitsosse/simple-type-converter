"use strict";

function toBoolean( value ) {
	value = String( value )
		.toLowerCase();

	return value === "undefined" ? false : Boolean( JSON.parse( value ) );
}

function toNumber( value ) {
	return Number( value );
}

function toString( value ) {
	return String( value );
}

module.exports = {
	toBoolean: toBoolean,
	toNumber: toNumber,
	toString: toString,
	typeNames: {
		string: toString,
		number: toNumber,
		boolean: toBoolean
	}
};
