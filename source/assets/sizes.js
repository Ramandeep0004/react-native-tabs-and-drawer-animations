import { Dimensions, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');
const pixelRatio = PixelRatio.get();


export function dpWidth(widthPercent, screenWidth = width) {
  return PixelRatio.roundToNearestPixel((screenWidth * widthPercent) / 100);
}

export function dpHeight(heightPercent, screenHeight = height) {
  return PixelRatio.roundToNearestPixel((screenHeight * heightPercent) / 100);
}

export function dpFont(fontSize, referenceSize = 400) {
  const ratio = fontSize / referenceSize;
  const newSize = dpWidth(ratio * 100);
  return PixelRatio.roundToNearestPixel(newSize);
}

export function dpImageWidth(imageWidth, screenWidth = width) {
  return dpWidth((imageWidth / screenWidth) * 100, screenWidth);
}

export function dpImageHeight(imageHeight, screenHeight = height) {
  return dpHeight((imageHeight / screenHeight) * 100, screenHeight);
}

export function dpBorderWidth(borderWidth) {
  return PixelRatio.roundToNearestPixel(borderWidth * pixelRatio);
}

export function dpSpacing(spacing) {
  return dpWidth(spacing);
}