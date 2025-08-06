import CryptoJS from "crypto-js";
import { CustomError } from "./CustomError";

function encryptApiKey(apiKey: string): string {
  return CryptoJS.AES.encrypt(apiKey, process.env.CRYPTO_SECRET_KEY).toString();
}

function decryptApiKey(encryptedApiKey: string): string {
  if (!encryptedApiKey) {
    throw new CustomError("Encrypted API key and secret key are required", 400);
  }
  try {
    const bytes = CryptoJS.AES.decrypt(
      encryptedApiKey,
      process.env.CRYPTO_SECRET_KEY
    );
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    if (!decrypted) {
      throw new CustomError("Invalid secret key or encrypted API key", 400);
    }
    return decrypted;
  } catch (error) {
    throw new CustomError("Decryption failed: Invalid secret key or data", 400);
  }
}

export { decryptApiKey, encryptApiKey };
