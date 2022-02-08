import { SerializedStyles } from '@emotion/react';

export interface IFontSize {
  size12: number;
  size14: number;
  size16: number;
  size20: number;
  size24: number;
  size30: number;
  size38: number;
  size46: number;
  size56: number;
  size68: number;
}

export interface ILineHeight {
  height20: number;
  height22: number;
  height24: number;
  height28: number;
  height32: number;
  height38: number;
  height46: number;
  height54: number;
  height64: number;
  height76: number;
}

export interface IFontWeight {
  light: number;
  regular: number;
  medium: number;
  semiBold: number;
  bold: number;
}

export interface IFont {
  size12pt: SerializedStyles;
  size14pt: SerializedStyles;
  size16pt: SerializedStyles;
  size20pt: SerializedStyles;
  size24pt: SerializedStyles;
  size30pt: SerializedStyles;
  size38pt: SerializedStyles;
  size46pt: SerializedStyles;
  size56pt: SerializedStyles;
  size68pt: SerializedStyles;
}
