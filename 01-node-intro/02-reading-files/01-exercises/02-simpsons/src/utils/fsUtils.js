const fs = require('fs').promises;

const readCharacters = async (path) => {
  try {
    const characters = await fs.readFile(path, 'utf-8');
    return JSON.parse(characters);
  } catch (err) {
    console.error(err);
  }
};

const printCharacters = async (characters) => {
  try {
    for (const character of characters) {
      console.log(`Id: ${character.id} - Name: ${character.name}`);
    }
  } catch (err) {
    throw new Error('Error printing characters');
  }
};

const getCharacterById = async (id) => {
  try {
    const characters = await readCharacters('./data/simpsons.json');
    const character = characters.find((character) => +character.id === id);

    if (!character) {
      throw new Error('Character not found');
    }
    return character;
  } catch (err) {
    throw new Error('Error getting character by id');
  }
};

module.exports = {
  readCharacters,
  printCharacters,
  getCharacterById,
};
