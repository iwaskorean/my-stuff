import { css } from '@emotion/react';
import { IFontSize, ILineHeight, IFontWeight, IFont } from './types/font';

const fontSize: IFontSize = {
  size12: 12,
  size14: 14,
  size16: 16,
  size20: 20,
  size24: 24,
  size30: 30,
  size38: 38,
  size46: 46,
  size56: 56,
  size68: 68,
};

const lineHeight: ILineHeight = {
  height20: 20,
  height22: 22,
  height24: 24,
  height28: 28,
  height32: 32,
  height38: 38,
  height46: 46,
  height54: 54,
  height64: 64,
  height76: 76,
};

const fontWeight: IFontWeight = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const font: IFont = {
  size12pt: css`
    font-size: ${fontSize.size12}px;
    line-height: ${lineHeight.height20}px;
  `,
  size14pt: css`
    font-size: ${fontSize.size14}px;
    line-height: ${lineHeight.height22}px;
  `,
  size16pt: css`
    font-size: ${fontSize.size16}px;
    line-height: ${lineHeight.height24}px;
  `,
  size20pt: css`
    font-size: ${fontSize.size20}px;
    line-height: ${lineHeight.height28}px;
  `,
  size24pt: css`
    font-size: ${fontSize.size24}px;
    line-height: ${lineHeight.height32}px;
  `,
  size30pt: css`
    font-size: ${fontSize.size30}px;
    line-height: ${lineHeight.height38}px;
  `,
  size38pt: css`
    font-size: ${fontSize.size38}px;
    line-height: ${lineHeight.height46}px;
  `,
  size46pt: css`
    font-size: ${fontSize.size46}px;
    line-height: ${lineHeight.height54}px;
  `,
  size56pt: css`
    font-size: ${fontSize.size56}px;
    line-height: ${lineHeight.height64}px;
  `,
  size68pt: css`
    font-size: ${fontSize.size68}px;
    line-height: ${lineHeight.height76}px;
  `,
};

export { fontSize, lineHeight, fontWeight };
export default font;
