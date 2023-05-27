export interface PasswordOptions {
  length: number;
  uppercase?: boolean;
  lowercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}

export function generateRandomString(options: PasswordOptions) {
  if (!options.length || !Object.keys(options).length) {
    return "";
  }

  const characterSets: Set<string> = new Set();

  if (options.lowercase) {
    characterSets.add("abcdefghijklmnopqrstuvwxyz");
  }
  if (options.uppercase) {
    characterSets.add("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (options.symbols) {
    characterSets.add("!@#$%^&*()_+-=");
  }
  if (options.numbers) {
    characterSets.add("0123456789");
  }

  let characters = "";

  for (const set of characterSets) {
    characters += set;
  }

  let randomString = "";

  for (let i = 0; i < options.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}
