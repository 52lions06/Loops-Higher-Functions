'use strict';

function hazardWarningCreator(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter ++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const floodWarning = hazardWarningCreator('Water on Road');
const treeWarning = hazardWarningCreator('Fallen tree on Road');

rocksWarning('Broadway St');
rocksWarning('Easy St');
rocksWarning('Wall St');

floodWarning('Broadway St');
floodWarning('Easy St');
floodWarning('Wall St');

treeWarning('Broadway St');
treeWarning('Easy St');
treeWarning('Wall St');
