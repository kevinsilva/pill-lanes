https://retool.com/

## Estático

Pílulas: container rectangular com bordas arredondadas

- 6 pílulas por linha
- tem sombra
- são links
- logo: imagem texto

Container: limites laterais esquerdo e direito têm efeito de fade

- número de linhas: 5

## Animação

- Pílulas movem-se da direita para esquerda dentro das próprias linhas
- Quando o rato está por cima da pílula, a mesma aumenta de tamanho e o texto muda de cor. Volta ao normal quando o mouse sai
- Cada linha tem velocidades diferentes para as suas pílulas

# Tarefas

A- ~~Construir uma Linha: elementos da Linha aparecem em linha com margem entre eles.~~

A.1 - Animar da direita para a esquerda, os elementos de uma Linha, com velocidade rápida ou normal.

B - ~~Construir uma Pílula que tenha imagem e texto, formato, e sombra; e seja link.~~

C - ~~Construir o Container com Efeito fade nas margens do Container.~~

AC.1 - ~~Acrescentar 5 Linhas ao Container~~

# Novo Pedido

Os programadores querem que se transcreva a funcionalidade para um único ficheiro JS

const data = [{
"label": "ducati",
"link": "ducati.com",
"img": "ducati.com/logo.jpg"
}, {
"label": "yamaha",
"link": "yamaha.com",
"img": "yamaha.com/logo.jpg"
}]

pill-lanes(data, id)

pergunta: quantas rows são necessárias? depende de quantos elementos são passados
quantos elementos por row? mínimo 1 - máximo 6
30 é o máximo - mais do que isso -> não aparece
rows 1, 3, 5 movimentam-se rapidamente / 2 e 4 movimentam-se devagar
assumir que os dados são válidos (não falta nada)
opções: o que fazer caso a data

o que é dinâmico: rows e as pills
o que é estático: container e row-container

- criar elementos estáticos

- criar elementos dinâmicos
