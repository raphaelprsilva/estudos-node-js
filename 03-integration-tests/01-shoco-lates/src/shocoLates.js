const fs = require('fs').promises;
const { join } = require('path');

const readShocoLatesFile = async () => {
  const path = '/files/shocoLatesFile.json';

  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf8');
    return JSON.parse(contentFile);
  } catch (error) {
    console.error(error);
    return null;
  }
};

const getAllChocolates = async () => {
  const shocoLatesFile = await readShocoLatesFile();
  return shocoLatesFile.chocolates;
};

module.exports = {
  getAllChocolates,
};
