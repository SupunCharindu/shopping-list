console.log(100);

console.log('Hello World');

console.log(20, 'Hello', true);

const x = 100;

console.log(x);

console.error('alert');

console.warn('warning');
console.table({name: 'Suppa', email: 'suppa@co.com'});

console.group('simple');
console.log(x);
console.error('Alert');
console.warn('Warning');
console.groupEnd();

const style = 'padding: 10px; background-color: white; color:green';

console.log('%cHello world', style);