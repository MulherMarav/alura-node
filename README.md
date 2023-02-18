# ESTUDO_Node.js
ANDAMENTO - Node.js, API Rest com Express e MongoDB.

* Linguagem JS
node --version
v18.14.0

* Gerenciador de Pacotes
npm -v
9.3.1

* Criar uma pasta via terminal

mkdir alura-node

* Dentro da pasta alura-node, inicializa o projeto com resposta das perguntas padrões

npm init -y

alura-node/package.json:

{
  "name": "alura-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}


* Comando para abrir o VSCode

code .

* No VSCode via terminal, rodar o servidor 

node server.js

* Installar a bibliote Nodemon para fazer live reload

npm install nodemon@2.0.15 -D

* Para rodar algum script, para rodar o nodemon

npm run dev

* Para install lib global 

npm install -g <nome do pacote>
  
* Para mais comandos do NPM

npm help <nome do comando>

* Para instalar o express.js

npm install express@4.17.3
  
* Para instalar o esqueleto de aplicações express no prompt

npm install express-generator -g
  
* Depois vá até o local/pasta onde você deseja desenvolver o projeto

express <nome do projeto a ser criado>
cd <nome do projeto>
npm install
npm start
  
[Node.js_ MongoDB Atlas, Shell, Compass ou Robo 3T.pdf](https://github.com/MulherMarav/ESTUDO_Node.js/files/10766801/Node.js_.MongoDB.Atlas.Shell.Compass.ou.Robo.3T.pdf)

* Para instalar o mongose

npm install mongoose@6.2.6
