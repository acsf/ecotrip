// Fatores de emissão (kg de CO2 por km) e preço do crédito de carbono.
const CONFIG = {
  modes: {
    bicicleta: { label: 'Bicicleta', factor: 0, img: 'img/bicicleta.svg' },
    carro:     { label: 'Carro',     factor: 0.17, img: 'img/carro.svg' },
    onibus:    { label: 'Ônibus',    factor: 0.089, img: 'img/onibus.svg' },
    caminhao:  { label: 'Caminhão',  factor: 0.9, img: 'img/caminhao.svg' }
  },
  creditPricePerTon: 60, // R$ por tonelada de CO2 (crédito = 1 tCO2)
  currency: 'BRL'
};
