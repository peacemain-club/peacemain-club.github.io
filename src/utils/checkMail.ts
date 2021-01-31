function checkMail(mail: string): boolean {
  const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (!regex.test(mail)) {
    return false;
  }
  return true;
}

export default checkMail;
