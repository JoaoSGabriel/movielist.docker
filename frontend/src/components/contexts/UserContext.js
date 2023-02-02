import { createContext } from "react";

import useLocalStorage from "../../hooks/useLocalStorage";

const UserContext = createContext();
export default UserContext;

export function UserProvider({ children }) {
  const [userData, setUserData] = useLocalStorage("userData", {});

  const [profileData, setProfileData] = useLocalStorage("profileData", {});

  return (
    <UserContext.Provider
      value={{ userData, setUserData, profileData, setProfileData }}
    >
      {children}
    </UserContext.Provider>
  );
}
