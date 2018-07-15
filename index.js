// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
	const newDriver = { ...driver}; 
	// or 
// Object.assign({}, driver, { [key]: value});
	newDriver[key] = value;
	return newDriver;


}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
	driver[key] = value;
	return driver;
}


function deleteFromDriverByKey (driver, key) {
	const newDriver = { ...driver};
	// or
	// Object.assign({}, driver);


	delete newDriver[key]

	return newDriver
}

function destructivelyDeleteFromDriverByKey (driver, key) {
	delete driver[key]

	return driver
}

Object.assign({}, driver, { [key]: value});
