const hexToRgb = (hex) => {
  hex = hex.replace('#', '');
  return `rgb(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4, 6), 16)})`;
};

export default hexToRgb;
