
const log = (message, level = 'info') => {
    const writeMessage = message;
    let localLevel = level;
    if (level === 'crit') {
      localLevel = 'error';
    }
  
    adhocLogger.log(localLevel, writeMessage, {});
  };
  
  console.info = (message) => log(message, 'info');
  console.security = (message) => log(message, 'warn');
  console.fatal = (message) => log(message, 'fatal');

