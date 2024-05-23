// import fs from 'fs';
import fs from 'fs/promises';

const readFile = async () => {
  try {
    const data = await fs.readFile('./test.txt', 'utf8');
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// writeFile()

const writeFile = async () => {
  try {
    await fs.writeFile('./test.txt', 'Hello, I am writing to this file');
    console.log('File written to...');
  } catch (error) {
    console.log(error);
  }
};

// appendFile()
const appendFile = async () => {
  try {
    await fs.appendFile('./test.txt', '\nThis is appended text');
    console.log('File appended to...');
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
