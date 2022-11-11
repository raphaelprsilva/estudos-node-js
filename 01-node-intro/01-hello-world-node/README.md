# criando um script bem simples com readline-sync

1. [ ] crie uma pasta, eu vou chamar a minha de `hello-world-node`

   - será nela que colocaremos nosso código

   1. [ ] rode o comando `npm init -y` no terminal (dentro da pasta `hello-world-node`)
      - um arquivo `package.json` será criado com as informações básicas do projeto

2. dentro da pasta `hello-world-node`:

   1. [ ] crie um arquivo `index.js` (arquivo principal de qualquer aplicação Node)
      - ele que será executado para iniciar o nosso programa
   2. [ ] no arquivo `index.js` digite `console.log('hello Node.js');`
   3. [ ] no terminal, rode o comando `node index.js`
      - você verá o resultado no console
      - mas isso é contraproducente, por isso vamos criar um script

3. [ ] no arquivo `package.json`, faça `"start": "node index.js"`:

```json
...
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1",
	"start": "node index.js"
},
...
```

4. [ ] execute o comando: `npm start`

   - você verá que o script executará o arquivo `index.js`

5. vamos incrementar um pouco mais nosso programa
   1. [ ] instale o pacote [readline-sync](https://www.npmjs.com/package/readline-sync)
      1. [ ] use o comando `npm install readline-sync` dentro da paste `hello-world-node`
   2. [ ] importe o pacote no arquivo `index.js` assim:
      1. [ ] use `const readline = require('readline-sync');`
      2. [ ] apague o `console.log`
      3. você terá algo mais ou menos assim:

```javascript
const readline = require('readline-sync');

const name = readline.question('What is your name? ');
const age = readline.questionInt('How old are you? ');

console.log(`Hi ${name}!`);
console.log(`You are ${age} years old.`);
```

- `readline.question()` - interpreta e retorna uma `string`
- `readline.questionInt()` - interpreta e retorna uma `number`

- execute o comando `npm start` e veja por si só
