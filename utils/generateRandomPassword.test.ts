import { describe, it, expect } from "vitest";
import { generateRandomString } from "./generateRandomPassword";

describe("generateRandomString", () => {
  it("should generate a random string with lowercase letters and numbers", () => {
    const randomString = generateRandomString({
      length: 10,
      lowercase: true,
      numbers: true,
    });

    expect(randomString).toMatch(/^[a-z0-9]{10}$/);
  });

  it("should generate a random string with uppercase letters, symbols, and numbers", () => {
    const randomString = generateRandomString({
      length: 12,
      uppercase: true,
      symbols: true,
      numbers: true,
    });

    expect(randomString).toMatch(/^[A-Z!@#$%^&*()_+\-=\d]{12}$/);
  });

  it("should generate a random string with all possible characters", () => {
    const randomString = generateRandomString({
      length: 15,
      lowercase: true,
      uppercase: true,
      symbols: true,
      numbers: true,
    });

    expect(randomString).toMatch(/^[a-zA-Z!@#$%^&*()_+\-=\d]{15}$/);
  });

  it("should generate an empty string when length is 0", () => {
    const randomString = generateRandomString({ length: 0 });

    expect(randomString).toBe("");
  });

  it("should generate an empty string when no options are provided", () => {
    const randomString = generateRandomString({ length: 0 });

    expect(randomString).toBe("");
  });
});
