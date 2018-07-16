// Write your solution in this file!

const driver = {};

 // returns a new driver that has an updated key, value
 // without changing original array
function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = { ...driver};
  newDriver[key] = value;
  return newDriver;
}

//works like the function above but mutates the driver object
function destructivelyUpdateDriverWithKeyAndValue(driver,key,value) {
    driver[key] = value;
    return driver;
}

 // should delete the key/value pair
 //for the key that was passed in from the driver
function deleteFromDriverByKey(driver, key, value) {
  const newDriver = Object.assign({}, driver);
  newDriver;
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key, value) {
     delete driver[key];
     return driver;
   }
