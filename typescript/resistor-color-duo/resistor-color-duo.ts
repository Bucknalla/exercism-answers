export class ResistorColor {
  private colors: string[]
  private colorLabels: Record<string, number> = {
    'black': 0,
    'brown': 1,
    'red': 2,
    'orange': 3,
    'yellow': 4,
    'green': 5,
    'blue': 6,
    'violet': 7,
    'grey': 8,
    'white': 9,
  };

  constructor(colors: string[]) {
    if (colors.length < 2) throw "At least two colors need to be present"
    else this.colors = colors;
  }

  calculate(colors: string[]): number {
    let colorList: number[] = [];
    colors.forEach((code) => {
        colorList.push(this.colorLabels[code]);
    }); 
    return parseInt(colorList.slice( 0, 2).join(""));
  }
  
  value = (): number => {
    return this.calculate(this.colors);
  }
}
