function checkPhone(phone: string): boolean {
  const regex_1 = /^[0-9]{3}[-]+[0-9]{4}[-]+[0-9]{4}$/;
  const regex_2 = /^[0-9]{11}$/;
  if (!regex_1.test(phone) && !regex_2.test(phone)) {
    return false;
  }
  return true;
}

export default checkPhone;
