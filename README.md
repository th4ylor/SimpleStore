# SimpleStore 🏎️

Página de vitrine de carros esportivos feita para praticar **frontend e design visual**. O foco do projeto é o visual: layout, tipografia, carrossel e janelas de detalhes, tudo com HTML, CSS e JavaScript puros.

> 🚧 Projeto de estudo. Os textos de descrição ainda usam conteúdo de exemplo (lorem ipsum) e algumas páginas não estão prontas.

## O que o site tem

- Cabeçalho com logo e menu de navegação (Home, Sobre e Fale conosco)
- Carrossel com três carros: Porsche 911 Turbo, Ferrari e Lamborghini
- Setas para avançar e voltar entre os carros
- Indicador de posição (01, 02, 03) com marcadores
- Botão **Saiba Mais** em cada carro, que abre uma janela (modal) com um texto sobre o modelo ou a marca
- Página "Sobre"

## O que eu quis praticar
- Layout e organização visual de uma página
- Tipografia com Google Fonts (Poppins e League Gothic)
- Carrossel feito com JavaScript, sem biblioteca
- Janelas modais com o elemento `<dialog>` do HTML
- Estrutura de projeto separando páginas, estilos e scripts

## Tecnologias
- HTML
- CSS
- JavaScript

## Como rodar

1. Clone o repositório:
```bash
   git clone https://github.com/th4ylor/SimpleStore.git
   cd SimpleStore
```

2. Abra o `index.html` no navegador. Se preferir, use a extensão **Live Server** do VS Code.

Não precisa instalar nada.

## Estrutura do projeto

```
SimpleStore/
├── index.html    # página inicial com o carrossel
├── scripts.js    # lógica do carrossel e interações
├── pages/        # outras páginas (ex.: Sobre)
├── style/        # CSS e imagens
└── .vscode/      # configurações do editor
```

## Próximos passos

- Trocar os textos de exemplo pelas descrições reais de cada carro
- Fazer a página "Fale conosco"
- Melhorar a versão para celular (responsividade)
- Adicionar mais carros ao carrossel

## Autor

Feito por [th4ylor](https://github.com/th4ylor) como projeto de estudo.
