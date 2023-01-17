export const PriceReg = (value: string) => {
  if (value === undefined || value === null) return;

  const regExp = /\B(?=(\d{3})+(?!\d))/g;
  const result = value.toString().replace(regExp, ",");

  return result;
};

// export const PriceReg = (num: string) => {
//   let len;
//   let point;
//   let str;

//   num = num + "";
//   point = num.length % 3;
//   len = num.length;

//   str = num.substring(0, point);

//   while (point < len) {
//     if (str != "") str += ",";
//     str += num.substring(point, point + 3);
//     point += 3;
//   }
//   return str;
// };

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

export const NameMask = (strName: string) => {
  if (strName.length > 2) {
    var originName = strName.split("");
    originName.forEach(function (name, i) {
      if (i === 0 || i === originName.length - 1) return;
      originName[i] = "*";
    });
    var joinName = originName.join();
    return joinName.replace(/,/g, "");
  } else {
    var pattern = /.$/; // 정규식
    return strName.replace(pattern, "*");
  }
};
