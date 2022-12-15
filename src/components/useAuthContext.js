import { useContext } from "react";
import AuthContext from "./AuthContext";

const useAuthContext = () => {
  const user = useContext(AuthContext);

  if (user === undefined) {
    throw new Error("Error! No user logged in.");
  }
  return user;
};

export default useAuthContext;
