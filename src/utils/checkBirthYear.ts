function checkBirthYear(birth_year: string): boolean {
  const birth_year_int = Number(birth_year);
  if (!birth_year_int) {
    return false;
  }
  if (birth_year_int > 2003 || birth_year_int < 1970) {
    return false;
  }
  return true;
}

export default checkBirthYear;
