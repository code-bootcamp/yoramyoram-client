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

export const optionName = (value: string) => {
  if (value === "color1" || value === "color2") {
    return "컬러: ";
  }
  if (value === "size1" || value === "size2") {
    return "사이즈: ";
  }

  if (value === "selectOption1" || value === "selectOption2") {
    return "";
  }
};
