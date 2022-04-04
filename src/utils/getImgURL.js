function getImgURL(urlImg) {
  return new URL(urlImg, import.meta.url).href;
}

export default getImgURL;
