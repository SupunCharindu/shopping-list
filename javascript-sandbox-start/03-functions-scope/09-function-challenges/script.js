/* const getCelsius = (fahrenheit) => {
  const celsius = (fahrenheit - 32) * 5 / 9;
  return Math.round(celsius);
}

console.log(`The temperature is ${getCelsius(90)} \xB0C`); */

const getCelsius = (f) => (f - 32) * 5 / 9;


console.log(`The temperature is ${getCelsius(90)} \xB0C`);



/* 2nd Challenge */

/* const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {min,max};
}

console.log(minMax([1, 2, 3, 4, 5])); */

//3rd Challenge
((length, width) =>{
  const area = length * width;

  const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;

  console.log(output);
})(10, 5);



