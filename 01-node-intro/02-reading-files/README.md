# Leitura e escrita de arquivos no `Node.js`

- ler e escrever arquivos no back-end é algo muito comum

## lendo arquivos com o módulo `fs` do Node

- módulo **`fs`** (file system) permite manipular arquivos do sistema
- temos três principais métodos para ler arquivos
  1.  **`fs.readFileSync`**
  2.  **`fs.readFile`**
  3.  **`fs.promises.readFile`**

1. **`fs.readFileSync`**

   - o método é síncrono
   - menos performático
   - não aceita callback ou promise

2. **`fs.readFile`**

   - o método é assíncrono
   - mais performático que o anterior
   - usa callback

3. **`fs.promises.readFile`**
   - o método é assíncrono
   - mais performático que os outros dois
   - aceita try / catch e then / catch

### lendo arquivos de maneira assíncrona

- vamos importar o módulo `fs` com o `.promises` no final
  - isso indica que vamos usar funções assíncronas do módulo
- vamos usar o `async` / `await` pois a leitura é assíncrona
- vamos usar o `try` / `catch` para lidar com possíveis erros
- para rodar o arquivo, use o comando `node readFile.js`
- veja o resultado no console

```javascript
// readFile.js
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
```

### escrevendo arquivos de maneira assíncrona

- vamos importar o módulo `fs` com o `.promises` no final
  - isso indica que vamos usar funções assíncronas do módulo
- vamos usar o `async` / `await` pois a escrita do arquivo é assíncrona
- vamos usar o `try` / `catch` para lidar com possíveis erros
- para rodar o arquivo, use o comando `node writeFile.js`
- veja o resultado no console
  - um arquivo `file.txt` será criado
  - o texto `Hello Node.js` será inserido nele
- o método `writeFile` aceita algumas opções como:
  - **nome do arquivo**: '`file.txt`' por exemplo
  - **texto a ser escrito no arquivo**: '`Hello Node.js`' por exemplo
  - **flag para dizer como o arquivo vai ser manipulado**:
    - '**w**': padrão. diz que o arquivo precisa ser aberto para ser escrito
      - se o arquivo não existir, ele é criado
      - se o arquivo já existir, ele deve é sobrescrito
    - '**wx**': diz que o arquivo precisa ser aberto para ser escrito, mas lança um erro caso o arquivo já exista

```javascript
// writeFile.js
const fs = require('fs').promises;

const write = async () => {
  try {
    await fs.writeFile('file.txt', 'Hello Node.js');
  } catch (err) {
    console.error(`Error: ${err.message}`);
  }
};

write();
```
