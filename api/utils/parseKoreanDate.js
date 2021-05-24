function parseKoreanDate(date_string) {
  let month = date_string.slice(4, 6);
  let date = date_string.slice(6, 8);
  let day = '';

  const date_string_for_day = `${date_string.slice(0, 4)}-${month}-${date}`;

  if (month[0] === '0') {
    month = month[1];
  }
  if (date[0] === '0') {
    date = date[1];
  }

  switch (new Date(date_string_for_day).getDay()) {
  case 1:
    day = '월';
    break;
  case 2:
    day = '화';
    break;
  case 3:
    day = '수';
    break;
  case 4:
    day = '목';
    break;
  case 5:
    day = '금';
    break;
  case 6:
    day = '토';
    break;
  case 0:
    day = '일';
    break;
  default:
    day = '월';
  }

  const korean_date = `${month}월 ${date}일 (${day})`;

  return korean_date;
}

module.exports = parseKoreanDate;
