export default class Grid {
  blockSize = 4;
  ratio: ratioArr;
  flow: gridFlow;

  constructor(ratio: ratioArr, flow: gridFlow) {
    this.ratio = ratio;
    this.flow = flow;
  }

  private getColNum = () =>
    this.blockSize + this.ratio[1] * this.blockSize - this.ratio[1];

  private getRowNum = () =>
    2 * this.blockSize + this.ratio[1] * this.blockSize - 2 * this.ratio[1];

  private rowFunc = (n: number) => {
    if (this.ratio[1] === 2) return 3 ** n;
    else return 3 * n + 1;
  };

  private colFunc = (n: number) => {
    if (this.flow === "lhs") {
      return n % 2 === 0
        ? this.getColNum() + 1 - this.ratio[n] * this.blockSize
        : 1;
    } else {
      return n % 2 === 0
        ? 1
        : this.getColNum() + 1 - this.ratio[n] * this.blockSize;
    }
  };

  private getGridAttributes: () => [number, number, number][] = () => {
    return this.ratio.map((r, i) => {
      const col = this.colFunc(i);
      const row = this.rowFunc(i);
      const span = r * this.blockSize;
      return [col, row, span];
    });
  };

  getGridDimensions = () =>
    `grid-cols-${this.getColNum} grid-rows-${this.getRowNum}`;

  getClassNames = () => {
    const attributes = this.getGridAttributes();
    return attributes.map(
      ([col, row, span]) =>
        `col-start-${col} row-start-${row} col-span-${span} row-span-${span}`
    );
  };
}
