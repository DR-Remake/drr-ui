import { ReactNode, useState } from "react";
import { ModalsContext } from "./Modals";

export const ModalsContextProvider = ({ children }: { children: ReactNode }) => {
  const [privacySettingsOpened, setPrivacySettingsOpened] = useState(false);
  const [termsOfUseOpened, setTermsOfUseOpened] = useState(false);

  return (
    <ModalsContext.Provider
      value={{ privacySettingsOpened, setPrivacySettingsOpened, termsOfUseOpened, setTermsOfUseOpened }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
