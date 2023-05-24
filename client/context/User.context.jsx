import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const UserContext = createContext({});

export function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!user) {
      let _user = localStorage.getItem("user");
      let _token = localStorage.getItem("token");
      if (_user) {
        _user = JSON.parse(_user);
        setUser(_user);
        setToken(_token);
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </UserContext.Provider>
  );
}
