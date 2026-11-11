const Calculator = {
  norm(s) { return String(s || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''); },
  cities() { return [...new Set(ROUTES.flatMap(r => [r[0], r[1]]))].sort(); },
  // Único ponto de cálculo de distância: troque aqui por uma API de mapas.
  getDistance(origin, destination) {
    const a = this.norm(origin), b = this.norm(destination);
    const r = ROUTES.find(([x, y]) => (this.norm(x) === a && this.norm(y) === b) || (this.norm(x) === b && this.norm(y) === a));
    return r ? r[2] : null;
  },
  emission(km, mode) { return km * CONFIG.modes[mode].factor; },
  compare(km) {
    return Object.keys(CONFIG.modes).map(m => ({ mode: m, label: CONFIG.modes[m].label, kg: this.emission(km, m) }));
  },
  credits(kg) { return { tons: kg / 1000, cost: (kg / 1000) * CONFIG.creditPricePerTon }; }
};
