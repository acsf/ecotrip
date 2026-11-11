UI.init();
UI.$('trip-form').addEventListener('submit', e => {
  e.preventDefault();
  const origin = UI.$('origin').value.trim(), destination = UI.$('destination').value.trim();
  const manual = parseFloat(UI.$('manual-distance').value), mode = document.querySelector('input[name="mode"]:checked').value;
  let km = manual > 0 ? manual : Calculator.getDistance(origin, destination);
  if (!km) { UI.showError('Rota não encontrada. Escolha cidades da lista ou informe a distância em km.'); return; }
  UI.showError('');
  const rows = Calculator.compare(km);
  const kg = Calculator.emission(km, mode);
  UI.render({ origin, destination, km, mode, rows, credit: Calculator.credits(kg) });
});
