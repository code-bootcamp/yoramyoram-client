export const PriceReg = (value: string) => {
  if (value === undefined || value === null) return;

  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  const result = value.toString().replace(regExp, ",");

  return result;
};

export const getDate = (value: string) => {
  const date = new Date(value);
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
