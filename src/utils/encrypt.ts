import { ENCRYPT_SECRET_KEY } from '@/constant';
import CryptoJS from 'crypto-js';

export const encryptToken = (token: string) => {
  const encryptedToken = CryptoJS.AES.encrypt(token, ENCRYPT_SECRET_KEY).toString();
  return encryptedToken;
};

export const decryptToken = (encryptedToken: string) => {
  const decryptedToken = CryptoJS.AES.decrypt(encryptedToken, ENCRYPT_SECRET_KEY).toString(CryptoJS.enc.Utf8);
  return decryptedToken;
};

