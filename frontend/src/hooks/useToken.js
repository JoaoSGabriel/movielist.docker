import { useContext } from "react";

import UserContext from "../components/contexts/UserContext";

export default function useToken() {
  const { userData: user } = useContext(UserContext);

  return user.token;
}
