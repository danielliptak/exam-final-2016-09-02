// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}


const cars = [{
    colour: 'red',
    type: 'Volvo'
  }, {
    colour: 'yellow',
    type: 'VW'
  }, {
    colour: 'red',
    type: 'Ferrari'
  }, {
    colour: 'white',
    type: 'Tesla'
  }, {
    colour: 'yellow',
    type: 'Toyota'
  }, {
    colour: 'red',
    type: 'Lada'
  }, {
    colour: 'green',
    type: 'Trabant'
}];

countBycolor = function () {
  return cars.reduce((numOfCarsbycolour, car) => {
    numOfCarsbycolour[car.colour] = (numOfCarsbycolour[car.colour] + 1) || 1;
    return numOfCarsbycolour;
  },{});
}

console.log(countBycolor());
