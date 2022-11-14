const {
  readCharacters,
  printCharacters,
  getCharacterById,
} = require('./fsUtils');

const main = async () => {
  const characters = await readCharacters('./data/simpsons.json');
  printCharacters(characters);

  const character = await getCharacterById(18);
  console.log(character);
};

main();
