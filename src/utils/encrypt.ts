import { INIT_VECTOR, SECRET_INIT } from '@/constant';
import crypto from "browser-crypto";


const secret = SECRET_INIT;
const initVector = INIT_VECTOR;

export const encryptToken = (mnemonic: string) => {
  const cipher = crypto.createCipheriv("aes256", secret, initVector);
  const mnemonic_e =
    cipher.update(mnemonic, "utf8", "hex") + cipher.final("hex");

  return mnemonic_e;
};

const firstDecryptToken = (encrypted: string) => {
  let decipher = crypto.createDecipheriv("aes256", secret, initVector);
  let word =
    decipher.update(encrypted.toString(), "hex", "utf8") +
    decipher.final("utf8");

  return word;
};

export const decryptToken = (encrypted: string) => {
  let redecrypt = firstDecryptToken(encrypted);

  redecrypt = firstDecryptToken(redecrypt);

  return redecrypt;
}