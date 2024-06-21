// import { initializeCounter } from './counter';

console.log('hello from index.js');

// initializeCounter();

// this is a promise, so it's able to load asynchronously
import('./counter').then(({ initializeCounter }) => {
  initializeCounter();
});
