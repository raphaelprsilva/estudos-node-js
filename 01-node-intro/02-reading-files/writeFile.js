const fs = require('fs').promises;

const write = async () => {
  try {
    await fs.writeFile('file.txt', 'Hello Node.js');
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

write();
