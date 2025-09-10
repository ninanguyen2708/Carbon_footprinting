import * as Crypto from "expo-crypto";

/** Strong password rule: 12+ chars, upper, lower, number, symbol */
export const strongPassword = (p: string) =>
  p.length >= 12 &&
  /[A-Z]/.test(p) &&
  /[a-z]/.test(p) &&
  /\d/.test(p) &&
  /[^A-Za-z0-9]/.test(p);

/**
 * HaveIBeenPwned k-anonymity check:
 *  - SHA-1 hash locally
 *  - send only first 5 chars to HIBP
 *  - compare suffixes locally
 */
export const isBreachedPassword = async (password: string): Promise<boolean> => {
  const sha1 = (
    await Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA1, password)
  ).toUpperCase();

  const prefix = sha1.slice(0, 5);
  const suffix = sha1.slice(5);

  const resp = await fetch(`https://api.pwnedpasswords.com/range/${prefix}`);
  const text = await resp.text();

  return text.split("\n").some((line) => line.split(":")[0] === suffix);
};
