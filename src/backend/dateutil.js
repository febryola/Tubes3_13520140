function monthIndex(month) {
  switch (month) {
    case "Januari":
      return "01";
    case "Februari":
      return "02";
    case "Maret":
      return "03";
    case "April":
      return "04";
    case "Mei":
      return "05";
    case "Juni":
      return "06";
    case "Juli":
      return "07";
    case "Agustus":
      return "08";
    case "September":
      return "09";
    case "Oktober":
      return "10";
    case "November":
      return "11";
    case "Desember":
      return "12";
    default:
      return "01";
  }
}

function stringToDate(dateString) {
  const dateRegex1 = /([A-Za-z]+)\s+(\d{1,2})\s+(\d{4})/;
  const dateRegex2 = /(\d{1,2})\s+([A-Za-z]+)\s+(\d{4})/;
  const dateRegex3 = /(\d{1,2})\/(\d{1,2})\/(\d{4})/;
  const dateRegex4 = /(\d{4})\/(\d{1,2})\/(\d{1,2})/;

  if (dateRegex1.test(dateString)) {
    const res = dateString.match(dateRegex1);
    const month = monthIndex(res[1]);
    const day = res[2].padStart(2, 0);
    const year = res[3];
    return `${year}-${month}-${day}`;
  } else if (dateRegex2.test(dateString)) {
    const res = dateString.match(dateRegex2);
    const day = res[1].padStart(2, 0);
    const month = monthIndex(res[2]);
    const year = res[3];
    return `${year}-${month}-${day}`;
  } else if (dateRegex3.test(dateString)) {
    const res = dateString.match(dateRegex3);
    const month = res[2].padStart(2, 0);
    const day = res[1].padStart(2, 0);
    const year = res[3];
    return `${year}-${month}-${day}`;
  } else if (dateRegex4.test(dateString)) {
    const res = dateString.match(dateRegex4);
    const month = res[2].padStart(2, 0);
    const day = res[3].padStart(2, 0);
    const year = res[1];
    return `${year}-${month}-${day}`;
  } else {
    return null;
  }
}

module.exports = { monthIndex, stringToDate };
