//const { generateRandomNumber, celciusToFahrenheit } = require('./utils');
//node --version
//v22.0.0
//node index

import getPosts, { getPostsLength } from './postController.js';
import { generateRandomNumber, celciusToFahrenheit } from './utils.js';

console.log(getPosts());

console.log(`Posts Length: ${getPostsLength()}`);

console.log(`Random Number: ${generateRandomNumber()}`);

console.log(`Celcius to fahrenhiet: ${celciusToFahrenheit(0)}`);
