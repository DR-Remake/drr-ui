import { createContext } from "react";

interface ModalsContext {
  privacySettingsOpened: boolean;
  setPrivacySettingsOpened: (value: boolean) => void;
  termsOfUseOpened: boolean;
  setTermsOfUseOpened: (value: boolean) => void;
}

export const ModalsContext = createContext<ModalsContext>({
  privacySettingsOpened: false,
  setPrivacySettingsOpened: () => {},
  termsOfUseOpened: false,
  setTermsOfUseOpened: () => {}
});
