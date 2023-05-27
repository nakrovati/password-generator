import type { PasswordOptions } from "~/utils/generateRandomPassword";

export const usePasswordOptions = () =>
  useState<PasswordOptions>("password-options");
