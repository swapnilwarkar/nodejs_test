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


node upgrade
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
vi ~/.bashrc
nvm list
nvm install
nvm install 21.1.0
npm install
npm --version
node --version
npm run build
npm start
npm test
code application.code-workspace

# export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
#rm -rf node_modules/


