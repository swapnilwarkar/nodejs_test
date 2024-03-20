sudo apt install nodejs
sudo apt install npm
npm install --save express

#Debug NodeJs Application
npm install -g node-inspector
node-debug app.js

#Debugging natively
node debug your-script.js

#In node.js 8 use the following command:
node --inspect-brk your-script.js


