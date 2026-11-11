# EcoTrip – calculadora de CO2 de viagens

## O que faz e como usar
Calcula a emissão de CO2 de uma viagem, compara bicicleta, carro, ônibus e caminhão e estima o custo dos créditos de carbono para compensar.
1. Digite origem e destino (autocompletar) ou informe a distância em km.
2. Escolha o meio de transporte e clique em **Calcular**.

## Como o cálculo funciona
- `distância` vem de `data/routes.js` (back-end simulado) via `Calculator.getDistance`, a única função a trocar por uma API de mapas.
- `emissão (kg) = distância (km) × fator do meio (kg/km)`, com fatores em `config.js`: bicicleta 0, carro 0,17, ônibus 0,089, caminhão 0,9.
- `créditos = emissão / 1000` (1 crédito = 1 tCO2); `custo = créditos × preço` (R$ 60 por crédito, ajustável em `config.js`).

## Ordem de construção
`index.html` → `style.css` → `config.js` e `data/routes.js` → `calculator.js` → `ui.js` → `app.js` → workflow em `.github/workflows/deploy.yml`.
Prompt que funcionou: _(escreva o seu aqui)_

## Endereço publicado
_(cole aqui o link do GitHub Pages)_
