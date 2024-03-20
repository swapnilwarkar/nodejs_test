#!/usr/bin/env node
'use strict';

// Store the first argument as username.
var username = process.argv[2];
// Check if the username hasn't been provided.
if (!username) {
// Extract the filename
var appName = process.argv[1].split(require('path').sep).pop();

// Give the user an example on how to use the app.
console.error('Missing argument! Example: %s YOUR_NAME', appName);
// Exit the app (success: 0, error: 1).
// An error will stop the execution chain. For example:
// ./app.js && ls -> won't execute ls
// ./app.js David && ls -> will execute ls
process.exit(1);
}
// Print the message to the console.
console.log('Hello %s!', username);