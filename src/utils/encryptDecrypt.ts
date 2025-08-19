import CryptoJS from "crypto-js";
import { CustomError } from "./CustomError";
const encryptionKey = process.env.ENCRYPTION_KEY as string;

export function encrypt(keyToEncrypt: string): string | void {
  if (!encryptionKey) {
    throw new CustomError("Encryption key is not defined", 500);
  }
  try {
    const encryptedKey = CryptoJS.AES.encrypt(keyToEncrypt, encryptionKey);
    return encryptedKey.toString();
  } catch (error: any) {
    console.error("Encryption failed:", error);
    throw new CustomError(`Encryption failed: ${error?.message}`, 500);
  }
}

export function decrypt(encryptedKey: string): string | void {
  if (!encryptionKey) {
    throw new CustomError("Encryption key is not defined", 500);
  }
  try {
    const decryptedKey = CryptoJS.AES.decrypt(encryptedKey, encryptionKey);
    const decryptedString = decryptedKey.toString(CryptoJS.enc.Utf8);

    if (!decryptedString) {
      throw new Error("Decryption resulted in an empty key.");
    }

    return decryptedString;
  } catch (error: any) {
    console.error("Decryption failed:", error);
    throw new CustomError(`Decryption failed: ${error?.message}`, 500);
  }
}
