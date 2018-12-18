### ReactJS Aplicação base
Configuração de base para aplicações em ReactJS. 
O pacote está configurado com Webpac, Babel, ESLint e o Airbnb Style Guide.

### Configurando seu ambiente
1. Instale em seu computador o Node.js;
2. Clone esse repositório em seu computador;
3. Digite "npm install" na linha de comando na pasta clonada;
4. Após instalar as dependências, digite "npm start" na linha de comando e sua aplicação irá iniciar;

### Desabilitando ESLint
Para desabilitar o ESLint, siga as orientações a seguir:

1. Globalmente:
a) Procure pelo arquivo ".eslintrc" e insira dentro das chaves "rules" o comando "no-unused-vars": 0
2. Em arquivos locais:
a) Para desabilitar o ESLint em arquivos locais, você deve adicionar seu código após o seguinte comentário "/*eslint-disable no-unused-vars*/"
Veja o exemplo: 
/*eslint-disable no-unused-vars*/
...some code...
/*eslint-enable no-unused-vars*/

### Altermativas para Style Guide
Existem alguns guias de estilo úteis na comunidade JavaScript e React. 
Nesse projeto, estamos usando como base o guia de estilo do Airbnb e existem alguns links úteis para se ter como base:
1. <a href="https://github.com/airbnb/javascript">Airbnb JavaScript</a>
2. <a href="https://github.com/airbnb/javascript/tree/master/react">Airbnb React</a>
3. <a href="https://github.com/rwaldron/idiomatic.js/">Idiomatic JavaScript</a>

Seu projeto está configurado :)