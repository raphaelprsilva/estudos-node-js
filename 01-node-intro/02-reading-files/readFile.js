const fs = require('fs').promises;

const read = async () => {
  try {
    const data = await fs.readFile('file.txt', 'utf8');
    console.log(data);
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

read();
