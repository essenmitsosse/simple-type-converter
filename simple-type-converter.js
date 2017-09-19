function toBoolean( value ) {
	switch ( value ) {
	case "0":
		return false;
	case "1":
		return true;
	case "false":
		return false;
	case "true":
		return true;
	case 0:
		return false;
	case 1:
		return true;
	case false:
		return false;
	case true:
		return true;
	}
	return null;
}

function toNumber( value ) {
	return Number( value );
}

function toString( value ) {
	return String( value );
}

function convert( value, targetType ) {
	var convertFunction;

	switch ( targetType ) {
	case "boolean":
		convertFunction = toBoolean;
		break;
	case "number":
		convertFunction = toNumber;
		break;
	case "string":
		convertFunction = toString;
		break;
	}

	return convertFunction( value );
}

module.exports = {
	toBoolean: toBoolean,
	toNumber: toNumber,
	toString: toString,
	convert: convert
};
