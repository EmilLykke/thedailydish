const sharp = require('sharp');
const fs = require('fs');

const base64ToImage = (base64String) => {
  const base64Data = base64String.replace(/^data:image\/\w+;base64,/, '');
  const imageBuffer = Buffer.from(base64Data, 'base64');
  return imageBuffer;
};

const scaleDownImage = async (imageBuffer, scaleFactor) => {
    const { width } = await sharp(imageBuffer).metadata();
  const scaledWidth = Math.floor(width * scaleFactor);
  const resizedImageBuffer = await sharp(imageBuffer)
    .resize({ width: scaledWidth })
    .toBuffer();


  return resizedImageBuffer;
};

const imageToBase64 = (imageBuffer) => {
  const base64String = imageBuffer.toString('base64');
  return `data:image/jpeg;base64,${base64String}`;
};




module.exports = {
    base64ToImage,
    scaleDownImage,
    imageToBase64

}


