# Kirby

## Descrição do código

### HTML 

index.html: Este arquivo HTML contém a estrutura básica do projeto. Ele inclui a referência ao arquivo JavaScript e define a área de desenho do Canvas.
images/kirby.png: Esta é a imagem do ícone do projeto exibido na guia do navegador.
java/script.js: Este arquivo JavaScript contém o código que desenha a imagem do Kirby usando a biblioteca Canvas do HTML5.

### JavaScript

Este código desenha uma imagem do personagem Kirby usando a biblioteca Canvas do HTML5. 

O código começa obtendo uma referência para um elemento HTML com o ID "canvas" e cria um contexto de desenho 2D a partir dele. O contexto 2D é usado para fazer operações de desenho na tela.

Em seguida, o código desenha várias formas para criar a imagem do Kirby:

- Os pés esquerdo e direito são desenhados como círculos preenchidos com a cor vermelha.
- O corpo do Kirby é desenhado como um círculo preenchido com a cor rosa claro.
- Três círculos menores são desenhados para representar as mãos e estão preenchidos com a cor rosa claro.
- Dois círculos pretos são desenhados para representar os olhos do Kirby.
- Dois círculos azuis menores são desenhados para representar o brilho nos olhos do Kirby.
- Dois círculos brancos menores são desenhados dentro dos olhos para representar as pupilas.
- Duas bochechas rosadas são desenhadas como círculos preenchidos com a cor rosa claro.
- Um sorriso é desenhado usando a função `arc` para desenhar uma curva.

! [Kirby.png]

Após desenhar a imagem do Kirby, o código define uma função chamada `changeColor` que altera a cor de fundo de um elemento HTML com o ID "tex" em intervalos regulares. A cor de fundo é escolhida de uma lista de cores predefinidas. A função `setInterval` é usada para chamar a função `changeColor` a cada 1000 milissegundos (1 segundo), criando um efeito de mudança de cor contínua no elemento "tex".



