"use client";

import { ReactElement, createContext, useEffect, useState } from "react";

interface UserType {
  createdAt: string;
  email: string;
  name: string;
  role: string;
  token: string;
  verified: boolean;
}

export type UniUserType = UserType | any;

export const InitialUserValue = {
  createdAt: "",
  email: "",
  name: "",
  role: "",
  token: "",
  verified: false,
};

export const UserContext = createContext<UniUserType>(InitialUserValue);

const UserProvider = ({ children }: { children: ReactElement }) => {
  const [user, setUser] = useState<UserType>(InitialUserValue);

  useEffect(() => {
    const userDataInLocalStorage = localStorage.getItem("user");
    if (userDataInLocalStorage) {
      setUser(JSON.parse(userDataInLocalStorage));
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
