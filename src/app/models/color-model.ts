export class ColorModel {
  text: string = '';
  value: string = '';

  constructor(color: { text: string; value: string }) {
    this.text = color.text;
    this.value = color.value;
  }
}
