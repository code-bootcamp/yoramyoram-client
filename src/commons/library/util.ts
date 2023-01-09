export const PriceReg = (value: string) => {
  if (value === undefined || value === null) return;

  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  const result = value.toString().replace(regExp, ",");

  return result;
};
