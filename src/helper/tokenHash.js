import CryptoJS from "crypto-js";

export const tokenEncrypt = (token) => {
  let secretKey = process.env.SECRET_KEY;
  let encrypted = CryptoJS.AES.encrypt(token, secretKey).toString();
  return encrypted;
};

export const tokenDecrypt = (encryptedToken) => {
  let secretKey = process.env.SECRET_KEY;
  let decrypted = CryptoJS.AES.decrypt(encryptedToken, secretKey).toString(CryptoJS.enc.Utf8);
  return decrypted;
};
