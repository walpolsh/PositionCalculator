const convertToNumber = (value) => {
  const numericValue = parseFloat(value);
  return isNaN(numericValue) ? 0 : numericValue;
};
