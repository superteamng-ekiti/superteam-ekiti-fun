/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useState, useContext, ReactNode } from "react";

interface User {
  _id: string | null;
  createdAt: string | null;
  points: number | null;
  referral_code: string | null;
  referrals: { wallet_address: string }[] | null;
  updatedAt: string | null;
  wallet_address: string | null;
  current_scout: {
    javascript: any[];
    rust: any[];
  };
  accessToken: string | null;
}

interface UserContextType {
  user: User;
  updateUser: (userData: Partial<User>) => void;
  updateAccessToken: (token: string) => void;
  logoutUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    _id: null,
    createdAt: null,
    points: null,
    referral_code: null,
    referrals: null,
    updatedAt: null,
    wallet_address: null,
    current_scout: {
      javascript: [],
      rust: [],
    },
    accessToken: null,
  });

  // Update user details
  const updateUser = async (userData: Partial<User>) => {
    setUser((prevUser) => ({
      ...prevUser,
      ...userData,
    }));
  };

  const updateAccessToken = async (token: string) => {
    setUser(prevUser => ({
      ...prevUser,
      accessToken: token
    }));
  };

  const logoutUser = async () => {
    setUser({
      _id: null,
      createdAt: null,
      points: null,
      referral_code: null,
      referrals: null,
      updatedAt: null,
      wallet_address: null,
      current_scout: {
        javascript: [],
        rust: [],
      },
      accessToken: null,
    });
  }

  return (
    <UserContext.Provider value={{ user, updateUser, updateAccessToken, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
