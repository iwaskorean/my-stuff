import { IColor } from './color';
import { IFont } from './font';

declare module '@emotion/react' {
  export interface Theme {
    color: IColor;
    fontSize: IFontSize;
    lineHeight: ILineHeight;
    fontWeight: IFontWeight;
    font: IFont;
  }
}
