import useAsync from "../useAsync";

import * as auth from "../../services/AuthApi";

export default function useSignIn() {
  const {
    loading: signInLoading,
    error: signInError,
    act: signIn,
  } = useAsync(auth.signIn, false);

  return {
    signInLoading,
    signInError,
    signIn,
  };
}
