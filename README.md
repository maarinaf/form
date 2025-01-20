# Formulário de Cadastro de Veículos

Um formulário web responsivo para cadastro de veículos em uma loja de carros.

## Funcionalidades

- Cadastro completo de veículos com os seguintes campos:
  - Marca
  - Modelo 
  - Ano
  - Preço
  - Cor
  - Quilometragem
  - Tipo de Combustível
  - Tipo de Câmbio

- Validações em tempo real
- Interface responsiva
- Feedback visual de erros
- Formatação automática de valores monetários

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript Vanilla

## Como Usar

1. Clone este repositório
2. Abra o arquivo `index.html` em seu navegador
3. Preencha o formulário com os dados do veículo
4. Clique em "Cadastrar Veículo"

## Estrutura do Projeto 
```	
- index.html: Página principal do formulário
- style.css: Estilos CSS para a página
- script.js: Lógica JavaScript para validações e interações
- README.md: Documentação do projeto 
```
## Validações Implementadas

- Marca: Campo obrigatório
- Modelo: Mínimo de 2 caracteres
- Ano: Entre 1900 e o ano atual
- Preço: Valor maior que zero
- Cor: Mínimo de 3 caracteres
- Quilometragem: Valor não negativo
- Combustível: Campo obrigatório
- Câmbio: Campo obrigatório

## Compatibilidade

O formulário é compatível com os principais navegadores:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge
