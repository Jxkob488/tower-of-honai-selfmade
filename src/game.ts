export class Game {
  private svg = document.getElementById('svg') as unknown as SVGSVGElement;

  private beam = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

  constructor() {
    this.beam.setAttribute('x', '0');
    this.beam.setAttribute('y', '550');
    this.beam.setAttribute('width', '1200');
    this.beam.setAttribute('height', '35');
    this.beam.setAttribute('fill', '#7A4A24');

    this.svg.appendChild(this.beam);

    for (let i = 0; i < 3; i++) {
      const pillar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pillar.setAttribute('x', String(i * 280 + 280));
      pillar.setAttribute('y', '0');
      pillar.setAttribute('width', '20');
      pillar.setAttribute('height', '550');
      pillar.setAttribute('fill', '#94A3B8');

      this.svg.appendChild(pillar);
    }
  }
}
