export class Game {
  private svg = document.getElementById('svg') as unknown as SVGSVGElement;
  private beam = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
  private move = { start: -1, end: -1 };
  private stackOfStacks:Disk[][] = [];

  constructor() {
    this.beam.setAttribute('x', '0');
    this.beam.setAttribute('y', '550');
    this.beam.setAttribute('width', '1200');
    this.beam.setAttribute('height', '35');
    this.beam.setAttribute('fill', '#7A4A24');

    this.svg.appendChild(this.beam);

    for (let i = 0; i < 3; i++) {
      const pillar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      pillar.setAttribute('x', String(260 + i * 360));
      pillar.setAttribute('y', '200');
      pillar.setAttribute('width', '20');
      pillar.setAttribute('height', '350');
      pillar.setAttribute('fill', '#94A3B8');

      this.svg.appendChild(pillar);
    }
    this.createStack();

  }
  private createStack(){
    const colors = ["",'#6366F1', '#06B6D4', '#22C55E', '#EAB308'];
    const stack = [];
    for (let i = 4; i >= 1; i--) {

      const disk = new Disk(i, colors[i]!);
      stack.push(disk);
    }
    this.stackOfStacks.push(stack)
    this.stackOfStacks.push([]);
    this.stackOfStacks.push([]);
  }
  public acceptInput(button: number) {
    if (this.move.start === -1) {
      this.move.start = button;
      console.log(this.move.start);
    } else if (this.move.end === -1) {
      this.move.end = button;
      console.log(this.move.end);
      this.moveDisk(this.move.start,this.move.end);
      this.move.start = -1;
      this.move.end = -1;
    }
  }

  private moveDisk(from: number, to: number) {
    console.log('Hallo');
    const fromStack: Disk[] = this.stackOfStacks[from]!
    const toStack: Disk[] = this.stackOfStacks[to]!;

    if (typeof from !== 'number' || typeof to !== 'number' || from === to || this.stackOfStacks[from]?.length === 0) {
      alert('Invalid input or move!');
      return;
    }

    if (!fromStack || !toStack) {
      alert('Invalid move! One of the stacks does not exist.');
      return;
    }

    const disk = fromStack[fromStack.length-1]; // Peek at the top disk
    if (disk === null || disk === undefined) {
      alert('Invalid move! The disk is null or undefined.');
      return;
    }

    if (toStack.length && !(disk < (toStack[toStack.length] ?? Infinity))) {
      alert('Invalid move! You cannot place a larger disk on a smaller one.');
      return;
    }

    toStack.push(fromStack.pop()!);
    console.log(this.stackOfStacks);
  }
}

class Disk {
  private svg = document.getElementById('svg') as unknown as SVGSVGElement;
  private x: number = 270;
  private y: number = 300;
  private width: number = 100;

  constructor(size: number, color: string) {
    const disk = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    this.width *= size * 0.8;
    this.x -= this.width / 2;
    this.y += 50 * size;

    disk.setAttribute('x', `${this.x}`);
    disk.setAttribute('y', `${this.y}`);
    disk.setAttribute('width', `${this.width}`);
    disk.setAttribute('height', '50');
    disk.setAttribute('rx', '20');
    disk.setAttribute('ry', '20');
    disk.setAttribute('fill', color);

    this.svg.appendChild(disk);
  }
}
