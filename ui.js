const UI = {
  $(id) { return document.getElementById(id); },
  fmt(n, d = 1) { return n.toLocaleString('pt-BR', { minimumFractionDigits: d, maximumFractionDigits: d }); },
  money(n) { return n.toLocaleString('pt-BR', { style: 'currency', currency: CONFIG.currency }); },
  init() {
    this.$('cities').innerHTML = Calculator.cities().map(c => `<option value="${c}">`).join('');
    this.$('modes').innerHTML = Object.entries(CONFIG.modes).map(([k, m], i) => `
      <div class="col-6 col-md-3">
        <input class="btn-check" type="radio" name="mode" id="mode-${k}" value="${k}"${i === 1 ? ' checked' : ''}>
        <label class="vehicle" for="mode-${k}"><img class="vehicle__img" src="${m.img}" alt=""><span class="vehicle__name">${m.label}</span></label>
      </div>`).join('');
  },
  showError(msg) { const e = this.$('error'); e.textContent = msg; e.hidden = !msg; },
  render({ origin, destination, km, mode, rows, credit }) {
    this.$('result-route').textContent = origin && destination ? `${origin} → ${destination}` : 'Distância informada';
    const sel = rows.find(r => r.mode === mode);
    this.$('result-emission').textContent = `${this.fmt(sel.kg)} kg de CO2`;
    this.$('result-distance').textContent = `${this.fmt(km, 0)} km de ${sel.label.toLowerCase()}`;
    const max = Math.max(...rows.map(r => r.kg), 1);
    this.$('compare-list').innerHTML = rows.map(r => `
      <li class="compare__item${r.mode === mode ? ' compare__item--selected' : ''}">
        <img class="compare__img" src="${CONFIG.modes[r.mode].img}" alt="">
        <div class="compare__body">
          <span class="compare__name">${r.label}: ${this.fmt(r.kg)} kg</span>
          <div class="compare__bar"><span class="compare__fill" style="width:${(r.kg / max) * 100}%"></span></div>
        </div>
      </li>`).join('');
    this.$('credits-text').textContent = sel.kg === 0
      ? 'Sem emissão para compensar nesta viagem.'
      : `Para compensar, você precisa de ${this.fmt(credit.tons, 3)} crédito(s) de carbono (1 crédito = 1 tCO2), cerca de ${this.money(credit.cost)}.`;
    ['result', 'compare', 'credits'].forEach(id => { this.$(id).hidden = false; });
  }
};
